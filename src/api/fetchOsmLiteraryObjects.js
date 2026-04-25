import { poetKeywords } from '../Data/poets'

const OVERPASS_URL = 'https://overpass-api.de/api/interpreter'

function normalizeText(value = '') {
    return String(value)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zа-яіїєґ0-9\s]/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function detectPerson(tags = {}) {
    const rawText = [
        tags.name,
        tags['name:uk'],
        tags['name:en'],
        tags.description,
        tags.inscription,
        tags.subject,
        tags.alt_name,
        tags.old_name,
        tags.operator
    ]
    .filter(Boolean)
    .join(' ')

    const text = normalizeText(rawText)

    const found = poetKeywords.find((poet) =>
    poet.keywords.some((keyword) =>
    text.includes(normalizeText(keyword))
    )
    )

    return found?.person || null
}

function detectType(tags = {}) {
    if (tags.memorial === 'plaque') return 'plaque'
        if (tags.memorial === 'statue') return 'monument'
            if (tags.memorial === 'bust') return 'monument'

                if (tags.historic === 'monument') return 'monument'
                    if (tags.historic === 'memorial') return 'memorial'

                        if (tags.tourism === 'artwork' && tags.artwork_type === 'statue') return 'monument'
                            if (tags.tourism === 'museum') return 'museum'

                                if (tags.amenity === 'university') return 'university'
                                    if (tags.leisure === 'park') return 'park'
                                        if (tags.building) return 'building'

                                            return 'object'
}

function osmToLiteraryObject(element) {
    const tags = element.tags || {}

    const lat = element.lat ?? element.center?.lat
    const lng = element.lon ?? element.center?.lon

    return {
        id: `osm-${element.type}-${element.id}`,
        type: detectType(tags),
        name:
        tags['name:uk'] ||
        tags.name ||
        tags['name:en'] ||
        'Об’єкт з OpenStreetMap',
        person: detectPerson(tags),
        city:
        tags['addr:city'] ||
        tags['addr:town'] ||
        tags['addr:village'] ||
        '',
        country: tags['addr:country'] || '',
        lat,
        lng,
        year: tags.start_date
        ? Number.parseInt(tags.start_date, 10) || null
        : null,
        description:
        tags.description ||
        tags.inscription ||
        'Об’єкт знайдено через OpenStreetMap.',
        source: 'OpenStreetMap',
        sourceUrl: `https://www.openstreetmap.org/${element.type}/${element.id}`,
        sourceType: 'osm',
        isOsm: true
    }
}

function buildQueryByBbox(bbox) {
    return `
    [out:json][timeout:20];
    (
        node["historic"~"monument|memorial"](${bbox});
        way["historic"~"monument|memorial"](${bbox});
        relation["historic"~"monument|memorial"](${bbox});

        node["memorial"~"statue|bust|plaque"](${bbox});
        way["memorial"~"statue|bust|plaque"](${bbox});
        relation["memorial"~"statue|bust|plaque"](${bbox});

        node["tourism"~"museum|artwork"](${bbox});
        way["tourism"~"museum|artwork"](${bbox});
        relation["tourism"~"museum|artwork"](${bbox});

        node["amenity"="university"](${bbox});
        way["amenity"="university"](${bbox});
        relation["amenity"="university"](${bbox});
    );
    out center tags 300;
    `
}

export async function fetchOsmLiteraryObjectsByBbox(bbox) {
    const query = buildQueryByBbox(bbox)

    const response = await fetch(OVERPASS_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: `data=${encodeURIComponent(query)}`
    })

    const text = await response.text()

    if (!response.ok) {
        throw new Error(`Overpass error ${response.status}`)
    }

    const data = JSON.parse(text)

    if (data.remark?.includes('timed out')) {
        throw new Error('Overpass timeout')
    }

    const mapped = (data.elements || [])
    .map(osmToLiteraryObject)
    .filter((item) => item.lat && item.lng)

    const filtered = mapped.filter((item) => item.person)

    console.log('OSM bbox:', bbox)
    console.log('OSM all:', mapped.length)
    console.log('OSM filtered:', filtered.length, filtered.slice(0, 10))

    return filtered
}
