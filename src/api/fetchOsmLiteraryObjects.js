import localObjects from '../Data/literaryObjects'
import { buildPersonKeywords } from '../Data/personKeywords'
import { OSM_CATEGORY_KEY } from '../Data/schema'

// Основний сервер і резервні дзеркала Overpass API
const OVERPASS_URLS = [
  'https://overpass-api.de/api/interpreter',
  'https://overpass.kumi.systems/api/interpreter',
  'https://overpass.private.coffee/api/interpreter'
]
const REQUEST_TIMEOUT_MS = 15000
export const OSM_MIN_ZOOM = 10
const DUPLICATE_DISTANCE_M = 50

const personKeywords = buildPersonKeywords(localObjects)

export function normalizeText(value = '') {
  return String(value)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-zа-яіїєґ0-9\s]/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

const normalizedKeywords = personKeywords.map(({ person, keywords }) => ({
  person,
  keywords: keywords.map((keyword) => ` ${normalizeText(keyword)}`)
}))

function detectPerson(tags = {}) {
  const text = ` ${normalizeText(
    [
      tags.name,
      tags['name:uk'],
      tags['name:en'],
      tags.description,
      tags.inscription,
      tags.subject,
      tags['subject:uk'],
      tags.alt_name,
      tags.old_name,
      tags.operator
    ]
      .filter(Boolean)
      .join(' ')
  )} `
  // ключове слово має починатися з початку слова
  const found = normalizedKeywords.find(({ keywords }) => keywords.some((keyword) => text.includes(keyword)))
  return found?.person || null
}

function detectType(tags = {}) {
  if (tags.memorial === 'plaque') return 'plaque'
  if (tags.memorial === 'statue' || tags.memorial === 'bust') return 'monument'
  if (tags.historic === 'monument') return 'monument'
  if (tags.historic === 'memorial') return 'memorial'
  if (tags.historic === 'tomb' || tags.historic === 'grave') return 'grave'
  if (tags.tourism === 'artwork' && tags.artwork_type === 'statue') return 'monument'
  if (tags.tourism === 'museum') return 'museum'
  if (tags.amenity === 'university') return 'university'
  if (tags.amenity === 'theatre') return 'theatre'
  if (tags.leisure === 'park') return 'park'
  if (tags.building) return 'building'
  return 'historical_site'
}

function osmToObject(element) {
  const tags = element.tags || {}
  const year = tags.start_date ? Number.parseInt(tags.start_date, 10) : null
  return {
    id: `osm-${element.type}-${element.id}`,
    type: detectType(tags),
    category: OSM_CATEGORY_KEY,
    name: tags['name:uk'] || tags.name || tags['name:en'] || 'Об’єкт з OpenStreetMap',
    person: detectPerson(tags),
    city: tags['addr:city'] || tags['addr:town'] || tags['addr:village'] || '',
    country: tags['addr:country'] || '',
    lat: element.lat ?? element.center?.lat,
    lng: element.lon ?? element.center?.lon,
    year: Number.isInteger(year) ? year : null,
    description: tags.description || tags.inscription || 'Об’єкт знайдено через OpenStreetMap.',
    sources: [{ title: 'OpenStreetMap', url: `https://www.openstreetmap.org/${element.type}/${element.id}` }],
    isOsm: true
  }
}

function buildQuery(bbox) {
  return `
[out:json][timeout:20];
(
  nwr["historic"~"monument|memorial|tomb"](${bbox});
  nwr["memorial"~"statue|bust|plaque"](${bbox});
  nwr["tourism"~"museum|artwork"](${bbox});
  nwr["amenity"~"university|theatre"](${bbox});
);
out center tags 400;
`
}

// --- дублікати з локальними даними ---
function distanceMeters(a, b) {
  const rad = Math.PI / 180
  const dLat = (b.lat - a.lat) * rad
  const dLng = (b.lng - a.lng) * rad
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin(dLng / 2) ** 2
  return 2 * 6371000 * Math.asin(Math.sqrt(h))
}

const tokens = (text) => new Set(normalizeText(text).split(' ').filter((w) => w.length > 3))

function similarNames(a, b) {
  const ta = tokens(a)
  const tb = tokens(b)
  if (!ta.size || !tb.size) return false
  let shared = 0
  for (const t of ta) if (tb.has(t) || [...tb].some((u) => u.slice(0, 5) === t.slice(0, 5))) shared++
  return shared / Math.min(ta.size, tb.size) >= 0.5
}

export function isDuplicateOfLocal(osmObject, locals = localObjects) {
  return locals.some(
    (local) =>
      distanceMeters(local, osmObject) <= DUPLICATE_DISTANCE_M &&
      ((osmObject.person && osmObject.person === local.person) || similarNames(local.name, osmObject.name))
  )
}

// --- кеш на час сесії ---
const cache = new Map()
const roundBbox = (b) => [b.south, b.west, b.north, b.east].map((v) => v.toFixed(3))
const contains = (outer, inner) =>
  outer.south <= inner.south && outer.west <= inner.west && outer.north >= inner.north && outer.east >= inner.east

function fromCache(bounds) {
  for (const { bounds: cachedBounds, items } of cache.values()) {
    if (contains(cachedBounds, bounds)) {
      return items.filter(
        (o) => o.lat >= bounds.south && o.lat <= bounds.north && o.lng >= bounds.west && o.lng <= bounds.east
      )
    }
  }
  return null
}

let currentController = null

async function fetchFromMirrors(query, signal) {
  let lastError
  for (const url of OVERPASS_URLS) {
    const controller = new AbortController()
    const abort = () => controller.abort()
    let timedOut = false
    signal.addEventListener('abort', abort, { once: true })
    const timeout = setTimeout(() => {
      timedOut = true
      controller.abort()
    }, REQUEST_TIMEOUT_MS)
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: `data=${encodeURIComponent(query)}`,
        signal: controller.signal
      })
      if (!response.ok) throw new Error(`Overpass ${response.status}`)
      const data = await response.json()
      if (data.remark?.includes('timed out')) throw new Error('Overpass timeout')
      return data
    } catch (error) {
      if (signal.aborted) throw error
      lastError = timedOut ? new Error(`Overpass timeout: ${url}`) : error
    } finally {
      clearTimeout(timeout)
      signal.removeEventListener('abort', abort)
    }
  }
  throw lastError
}

/**
 * Завантажує OSM-об’єкти, пов’язані з людьми з карти, у межах bounds.
 * Попередній незавершений запит скасовується.
 * @param {{south:number, west:number, north:number, east:number}} bounds
 */
export async function fetchOsmObjects(bounds) {
  const cached = fromCache(bounds)
  if (cached) return cached

  currentController?.abort()
  const controller = new AbortController()
  currentController = controller

  const bbox = roundBbox(bounds).join(',')
  const data = await fetchFromMirrors(buildQuery(bbox), controller.signal)
  if (currentController === controller) currentController = null

  const items = (data.elements || [])
    .map(osmToObject)
    .filter((item) => item.lat && item.lng && item.person && !isDuplicateOfLocal(item))

  cache.set(bbox, { bounds, items })
  return items
}

export function isAbortError(error) {
  return error?.name === 'AbortError'
}
