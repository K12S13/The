// Шкала років для часової шкали і статистики епох.

// Нелінійна шкала: давнина стиснута, нові часи розтягнуті.
// [рік, позиція повзунка 0…1000]
const SCALE = [
  [-20000, 0],
  [-3000, 70],
  [-1000, 130],
  [0, 190],
  [1000, 290],
  [1500, 390],
  [1800, 540],
  [1900, 680],
  [2026, 1000]
]
export const SLIDER_MAX = 1000
export const MIN_YEAR = SCALE[0][0]
export const MAX_YEAR = SCALE[SCALE.length - 1][0]

export function yearToPos(year) {
  for (let i = 1; i < SCALE.length; i++) {
    const [y0, p0] = SCALE[i - 1]
    const [y1, p1] = SCALE[i]
    if (year <= y1) return Math.round(p0 + ((Math.max(year, y0) - y0) / (y1 - y0)) * (p1 - p0))
  }
  return SLIDER_MAX
}

export function posToYear(pos) {
  for (let i = 1; i < SCALE.length; i++) {
    const [y0, p0] = SCALE[i - 1]
    const [y1, p1] = SCALE[i]
    if (pos <= p1) {
      const raw = y0 + ((pos - p0) / (p1 - p0)) * (y1 - y0)
      const step = y1 - y0 > 2000 ? 100 : y1 - y0 > 500 ? 10 : 1
      return Math.round(raw / step) * step
    }
  }
  return MAX_YEAR
}

export function formatYear(year) {
  if (year < 0) return `${Math.abs(year).toLocaleString('uk-UA')} до н. е.`
  return String(year)
}

// Епохи для кнопки «Програти»
export const EPOCHS = [
  { title: 'Давнина', from: -20000, to: -1001 },
  { title: 'Скіфи й античні міста', from: -1000, to: 499 },
  { title: 'Київська Русь', from: 500, to: 1349 },
  { title: 'Литовсько-польська доба', from: 1350, to: 1549 },
  { title: 'Козацька доба', from: 1550, to: 1764 },
  { title: 'Українське відродження XIX століття', from: 1765, to: 1899 },
  { title: 'Українська революція', from: 1900, to: 1921 },
  { title: 'Розстріляне відродження', from: 1922, to: 1938 },
  { title: 'Друга світова війна', from: 1939, to: 1945 },
  { title: 'Радянська доба й шістдесятники', from: 1946, to: 1990 },
  { title: 'Незалежна Україна', from: 1991, to: 2026 }
]

// Об'єкт належить до проміжку, якщо його період [eraYear, eraYearEnd] перетинається з ним
export function inEra(object, from, to) {
  if (object.eraYear === undefined) return false
  return object.eraYear <= to && (object.eraYearEnd ?? object.eraYear) >= from
}
