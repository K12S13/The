// Перевірка даних: npm run check-data
// Помилки (exit 1) — порушення схеми. Попередження — те, що варто доповнити.
import objects from '../src/Data/literaryObjects.js'
import {
  TYPES,
  CATEGORIES,
  COORD_BOUNDS,
  REQUIRED_FIELDS,
  FORBIDDEN_URL_PARTS
} from '../src/Data/schema.js'

const errors = []
const warnings = []
const err = (o, msg) => errors.push(`[id ${o?.id ?? '?'}] ${o?.name ?? ''}: ${msg}`)
const warn = (o, msg) => warnings.push(`[id ${o?.id ?? '?'}] ${o?.name ?? ''}: ${msg}`)

const LEGACY_FIELDS = ['imageUrl', 'videoUrl', 'sourceUrl', 'video']
const isUrl = (value) => {
  try {
    const url = new URL(value)
    return url.protocol === 'https:' || url.protocol === 'http:'
  } catch {
    return false
  }
}

function checkList(o, field, keys, requiredKeys) {
  const list = o[field]
  if (list === undefined) return
  if (!Array.isArray(list)) return err(o, `${field} має бути масивом`)
  list.forEach((item, i) => {
    if (!item || typeof item !== 'object') return err(o, `${field}[${i}] має бути об’єктом`)
    for (const key of Object.keys(item)) {
      if (!keys.includes(key)) err(o, `${field}[${i}]: невідоме поле «${key}»`)
    }
    for (const key of requiredKeys) {
      if (!item[key]) err(o, `${field}[${i}]: немає «${key}»`)
    }
    if (item.url && !isUrl(item.url)) err(o, `${field}[${i}]: некоректний url`)
  })
}

if (!Array.isArray(objects)) {
  console.error('literaryObjects.js має експортувати масив')
  process.exit(1)
}

const ids = new Map()

for (const o of objects) {
  for (const field of REQUIRED_FIELDS) {
    if (o[field] === undefined || o[field] === null || o[field] === '') {
      err(o, `немає обов’язкового поля «${field}»`)
    }
  }

  if (ids.has(o.id)) err(o, `дублікат id (також у «${ids.get(o.id)}»)`)
  else ids.set(o.id, o.name)

  if (o.type && !TYPES[o.type]) err(o, `недопустимий type «${o.type}»`)
  if (o.category && !CATEGORIES[o.category]) err(o, `недопустима category «${o.category}»`)

  const { minLat, maxLat, minLng, maxLng } = COORD_BOUNDS
  if (typeof o.lat !== 'number' || o.lat < minLat || o.lat > maxLat) err(o, `lat поза межами: ${o.lat}`)
  if (typeof o.lng !== 'number' || o.lng < minLng || o.lng > maxLng) err(o, `lng поза межами: ${o.lng}`)

  if (o.year !== undefined && o.year !== null && !Number.isInteger(o.year)) err(o, 'year має бути цілим числом')
  if (o.eraYear !== undefined && !Number.isInteger(o.eraYear)) err(o, 'eraYear має бути цілим числом')

  if (o.forgotten !== undefined && typeof o.forgotten !== 'boolean') err(o, 'forgotten має бути true/false')
  if (o.forgotten && !o.whyForgotten) err(o, 'forgotten: true потребує whyForgotten')

  for (const field of LEGACY_FIELDS) {
    if (field in o) err(o, `застаріле поле «${field}» — перенеси в images/videos/sources`)
  }

  checkList(o, 'images', ['url', 'author', 'license', 'sourceUrl'], ['url', 'author', 'license', 'sourceUrl'])
  checkList(o, 'videos', ['title', 'url'], ['title', 'url'])
  checkList(o, 'sources', ['title', 'url'], ['title', 'url'])

  const json = JSON.stringify(o)
  for (const part of FORBIDDEN_URL_PARTS) {
    if (json.includes(part)) err(o, `заборонене посилання/заглушка «${part}»`)
  }

  if (!o.sources?.length) warn(o, 'немає жодного джерела')
}

const fmt = (list) => list.map((line) => `  • ${line}`).join('\n')

console.log(`Перевірено об’єктів: ${objects.length}`)
if (warnings.length) console.log(`\nПопередження (${warnings.length}):\n${fmt(warnings)}`)
if (errors.length) {
  console.error(`\nПомилки (${errors.length}):\n${fmt(errors)}`)
  process.exit(1)
}
console.log('\nПомилок немає ✔')
