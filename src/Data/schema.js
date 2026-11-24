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

// category → українська назва + колір маркера (приглушена «музейна» палітра)
export const CATEGORIES = {
  literature: { label: 'Література', color: '#3d5370' },
  music_theatre: { label: 'Музика й театр', color: '#8a4a62' },
  cinema: { label: 'Кіно', color: '#6a5a8c' },
  art: { label: 'Мистецтво й архітектура', color: '#b5653b' },
  science: { label: 'Наука, освіта й техніка', color: '#3b7a74' },
  ancient: { label: 'Археологія й давня історія', color: '#8c7343' },
  cossack: { label: 'Козацтво, замки й фортеці', color: '#9e3b33' },
  independence: { label: 'Державність і визвольні змагання', color: '#2e6f9e' },
  tragedies: { label: 'Війни, трагедії й пам’ять', color: '#4a4540' },
  folk: { label: 'Музеї й народна культура', color: '#5f7f3c' }
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
