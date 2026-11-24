// Єдине джерело правди для типів і категорій.
// Використовується маркерами, легендою, фільтрами та скриптом `npm run check-data`.

// type → українська назва + форма маркера (див. .marker__shape--* у styles.css)
export const TYPES = {
  monument: { label: 'Пам’ятник', shape: 'circle' },
  memorial: { label: 'Меморіал', shape: 'star' },
  plaque: { label: 'Меморіальна дошка', shape: 'plaque' },
  museum: { label: 'Музей', shape: 'diamond' },
  grave: { label: 'Могила', shape: 'cross' },
  university: { label: 'Навчальний заклад', shape: 'square' },
  theatre: { label: 'Театр, концертна зала', shape: 'triangle' },
  castle: { label: 'Замок, фортеця', shape: 'castle' },
  archaeological: { label: 'Археологічна пам’ятка', shape: 'hexagon' },
  historical_site: { label: 'Історичне місце', shape: 'octagon' },
  building: { label: 'Історична будівля', shape: 'house' },
  park: { label: 'Парк, сад', shape: 'leaf' },
  film_location: { label: 'Кіно: студія, локація', shape: 'film' },
  industrial: { label: 'Промислова пам’ятка', shape: 'trapezoid' }
}

export const DEFAULT_TYPE = 'monument'

// category → українська назва + колір маркера
export const CATEGORIES = {
  literature: { label: 'Література', color: '#2f5d8a' },
  music_theatre: { label: 'Музика й театр', color: '#9b4d6e' },
  cinema: { label: 'Кіно', color: '#5b4a8a' },
  art: { label: 'Мистецтво й архітектура', color: '#b3643b' },
  science: { label: 'Наука, освіта й техніка', color: '#2f7a7a' },
  ancient: { label: 'Археологія й давня історія', color: '#8a6d3b' },
  cossack: { label: 'Козацтво, замки й фортеці', color: '#a33b3b' },
  independence: { label: 'Державність і визвольні змагання', color: '#c49a2c' },
  tragedies: { label: 'Війни, трагедії й пам’ять', color: '#4d4d4d' },
  folk: { label: 'Музеї й народна культура', color: '#5d7a3a' }
}

export const OSM_CATEGORY_KEY = 'osm'
export const OSM_CATEGORY = { label: 'Дані OpenStreetMap', color: '#6b7280' }
const UNKNOWN_CATEGORY_COLOR = '#6b7280'

export function getTypeInfo(type) {
  return TYPES[type] || TYPES[DEFAULT_TYPE]
}

export function getCategoryInfo(category) {
  if (CATEGORIES[category]) return CATEGORIES[category]
  if (category === OSM_CATEGORY_KEY) return OSM_CATEGORY
  return { label: category || 'Без категорії', color: UNKNOWN_CATEGORY_COLOR }
}

// Межі координат: уся Земля, але без полюсів (Leaflet обмежений ±85°)
export const COORD_BOUNDS = { minLat: -85, maxLat: 85, minLng: -180, maxLng: 180 }

export const REQUIRED_FIELDS = ['id', 'name', 'type', 'category', 'country', 'lat', 'lng', 'description']

export const FORBIDDEN_URL_PARTS = ['example.com', 'images.openai.com', 'VIDEO_ID']
