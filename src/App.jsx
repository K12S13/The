import { useMemo, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import L from 'leaflet'
import literaryObjects from './Data/literaryObjects'
import { fetchOsmLiteraryObjectsByBbox } from './api/fetchOsmLiteraryObjects'

const personColors = {
  'Тарас Шевченко': '#2563eb',
  'Леся Українка': '#facc15',
  'Іван Франко': '#f97316',
  'Ліна Костенко': '#16a34a',
  'Григорій Сковорода': '#7c3aed',
  'Іван Котляревський': '#ec4899',
  'Михайло Коцюбинський': '#14b8a6',
  'Василь Стус': '#ef4444',
  'Олена Теліга': '#8b5cf6',
  'Пантелеймон Куліш': '#a16207',
  'Павло Тичина': '#0ea5e9',
  'Максим Рильський': '#22c55e',
  'Марко Вовчок': '#e11d48',
  default: '#334155'
}

const objectTypes = {
  monument: 'Пам’ятник',
  memorial: 'Меморіал',
  plaque: 'Меморіальна дошка',
  museum: 'Музей',
  university: 'Університет',
  grave: 'Могила',
  park: 'Парк',
  building: 'Будівля',
  composition: 'Композиція',
  object: 'Об’єкт'
}

const controlStyle = {
  width: '100%',
  marginTop: '4px',
  boxSizing: 'border-box'
}

function getMarkerShape(type, color) {
  const base = `
  background: ${color};
  border: 3px solid white;
  box-shadow: 0 0 7px rgba(0,0,0,0.45);
  `

  switch (type) {
    case 'university':
      return `<div style="width:20px;height:20px;${base}border-radius:4px;"></div>`

    case 'plaque':
      return `<div style="width:26px;height:16px;${base}border-radius:4px;"></div>`

    case 'museum':
      return `<div style="width:20px;height:20px;${base}transform:rotate(45deg);border-radius:4px;"></div>`

    case 'grave':
      return `
      <div style="position:relative;width:22px;height:22px;">
      <div style="position:absolute;left:8px;top:0;width:6px;height:22px;${base}border-radius:2px;"></div>
      <div style="position:absolute;left:0;top:7px;width:22px;height:6px;${base}border-radius:2px;"></div>
      </div>
      `

    case 'park':
      return `<div style="width:24px;height:16px;${base}border-radius:50% 50% 50% 0;transform:rotate(-35deg);"></div>`

    case 'building':
      return `
      <div style="
      width:22px;
      height:18px;
      ${base}
      border-radius:2px;
      clip-path: polygon(50% 0%, 100% 35%, 100% 100%, 0 100%, 0 35%);
      "></div>
      `

    case 'composition':
      return `
      <div style="
      width:22px;
      height:22px;
      ${base}
      clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
      "></div>
      `

    case 'monument':
    case 'memorial':
    default:
      return `<div style="width:20px;height:20px;${base}border-radius:50%;"></div>`
  }
}

function createCustomIcon(type, color) {
  return L.divIcon({
    className: '',
    html: getMarkerShape(type, color),
                   iconSize: [28, 28],
                   iconAnchor: [14, 14],
                   popupAnchor: [0, -12]
  })
}

function createClusterIcon(cluster) {
  const count = cluster.getChildCount()

  return L.divIcon({
    className: '',
    html: `
    <div style="
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #2563eb;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 15px;
    border: 3px solid white;
    box-shadow: 0 0 12px rgba(0,0,0,0.5);
    ">
    ${count}
    </div>
    `,
    iconSize: [44, 44],
    iconAnchor: [22, 22]
  })
}

function OsmLoaderButton({
  setOsmObjects,
  setShowOsmObjects,
  setOsmLoading,
  setOsmError,
  osmLoading
}) {
  const map = useMap()

  async function handleLoadOsm() {
    try {
      setOsmLoading(true)
      setOsmError('')

      const bounds = map.getBounds()
      const bbox = [
        bounds.getSouth(),
        bounds.getWest(),
        bounds.getNorth(),
        bounds.getEast()
      ].join(',')

      const data = await fetchOsmLiteraryObjectsByBbox(bbox)

      setOsmObjects((prev) => {
        const unique = new Map(prev.map((item) => [item.id, item]))
        data.forEach((item) => unique.set(item.id, item))
        return [...unique.values()]
      })

      setShowOsmObjects(true)
    } catch (error) {
      console.error(error)
      setOsmError('OSM не відповів або область завелика. Наблизь карту і спробуй ще раз.')
    } finally {
      setOsmLoading(false)
    }
  }

  return (
    <button
    type="button"
    onClick={handleLoadOsm}
    disabled={osmLoading}
    style={{
      position: 'absolute',
      right: '15px',
      top: '15px',
      zIndex: 2000,
      padding: '10px 12px',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      background: '#171717',
      color: 'white',
      boxShadow: '0 2px 12px rgba(0,0,0,0.35)'
    }}
    >
    {osmLoading ? 'Завантаження OSM...' : 'Завантажити OSM у цій області'}
    </button>
  )
}

export default function App() {
  const [selectedPerson, setSelectedPerson] = useState('Усі')
  const [selectedCountry, setSelectedCountry] = useState('Усі')
  const [selectedType, setSelectedType] = useState('Усі')
  const [yearFrom, setYearFrom] = useState('')
  const [yearTo, setYearTo] = useState('')

  const [showOsmObjects, setShowOsmObjects] = useState(false)
  const [osmObjects, setOsmObjects] = useState([])
  const [osmLoading, setOsmLoading] = useState(false)
  const [osmError, setOsmError] = useState('')
  const [filtersOpen, setFiltersOpen] = useState(true)

  const allObjects = useMemo(() => {
    return showOsmObjects
    ? [...literaryObjects, ...osmObjects]
    : literaryObjects
  }, [showOsmObjects, osmObjects])

  const persons = useMemo(() => {
    return ['Усі', ...new Set(allObjects.map(item => item.person).filter(Boolean))]
  }, [allObjects])

  const countries = useMemo(() => {
    return ['Усі', ...new Set(allObjects.map(item => item.country).filter(Boolean))]
  }, [allObjects])

  const types = useMemo(() => {
    return ['Усі', ...new Set(allObjects.map(item => item.type || 'object'))]
  }, [allObjects])

  const filtered = useMemo(() => {
    return allObjects.filter(item => {
      const matchPerson =
      selectedPerson === 'Усі' || item.person === selectedPerson

      const matchCountry =
      selectedCountry === 'Усі' || item.country === selectedCountry

      const matchType =
      selectedType === 'Усі' || (item.type || 'object') === selectedType

      const matchYearFrom =
      yearFrom === '' || !item.year || Number(item.year) >= Number(yearFrom)

      const matchYearTo =
      yearTo === '' || !item.year || Number(item.year) <= Number(yearTo)

      return matchPerson && matchCountry && matchType && matchYearFrom && matchYearTo
    })
  }, [allObjects, selectedPerson, selectedCountry, selectedType, yearFrom, yearTo])

  return (
    <div style={{ height: '100vh', width: '100%', position: 'relative' }}>
    <div
    style={{
      position: 'absolute',
      top: '15px',
      left: '15px',
      zIndex: 2000,
      background: '#171717',
      color: 'white',
      padding: '12px',
      borderRadius: '10px',
      boxShadow: '0 2px 12px rgba(0,0,0,0.35)',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          width: 'min(280px, calc(100vw - 30px))'
    }}
    >
    <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '10px'
    }}
    >
    <h3 style={{ margin: 0 }}>Фільтри</h3>

    <button
    type="button"
    onClick={() => setFiltersOpen(prev => !prev)}
    style={{
      background: '#2d2d35',
      color: 'white',
      border: '1px solid #666',
      borderRadius: '6px',
      padding: '4px 10px',
      cursor: 'pointer'
    }}
    >
    {filtersOpen ? '−' : '+'}
    </button>
    </div>

    {filtersOpen && (
      <>
      <label>
      Персона:
      <select
      value={selectedPerson}
      onChange={(e) => setSelectedPerson(e.target.value)}
      style={controlStyle}
      >
      {persons.map(person => (
        <option key={person} value={person}>
        {person}
        </option>
      ))}
      </select>
      </label>

      <label>
      Країна:
      <select
      value={selectedCountry}
      onChange={(e) => setSelectedCountry(e.target.value)}
      style={controlStyle}
      >
      {countries.map(country => (
        <option key={country} value={country}>
        {country}
        </option>
      ))}
      </select>
      </label>

      <label>
      Тип об’єкта:
      <select
      value={selectedType}
      onChange={(e) => setSelectedType(e.target.value)}
      style={controlStyle}
      >
      {types.map(type => (
        <option key={type} value={type}>
        {type === 'Усі' ? 'Усі' : objectTypes[type] || type}
        </option>
      ))}
      </select>
      </label>

      <label>
      Рік від:
      <input
      type="number"
      value={yearFrom}
      onChange={(e) => setYearFrom(e.target.value)}
      placeholder="Напр. 1900"
      style={controlStyle}
      />
      </label>

      <label>
      Рік до:
      <input
      type="number"
      value={yearTo}
      onChange={(e) => setYearTo(e.target.value)}
      placeholder="Напр. 2000"
      style={controlStyle}
      />
      </label>

      <label style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <input
      type="checkbox"
      checked={showOsmObjects}
      onChange={(e) => setShowOsmObjects(e.target.checked)}
      />
      Показати OSM-точки
      </label>

      {osmLoading && (
        <p style={{ margin: 0, fontSize: '13px' }}>
        Завантаження OSM...
        </p>
      )}

      {osmError && (
        <p style={{ margin: 0, color: '#f87171', fontSize: '13px' }}>
        {osmError}
        </p>
      )}

      <button
      onClick={() => {
        setSelectedPerson('Усі')
        setSelectedCountry('Усі')
        setSelectedType('Усі')
        setYearFrom('')
        setYearTo('')
      }}
      style={controlStyle}
      >
      Скинути фільтри
      </button>

      <p style={{ margin: 0 }}>
      Знайдено: <strong>{filtered.length}</strong>
      </p>

      <div style={{ fontSize: '12px', opacity: 0.85, lineHeight: '1.5' }}>
      <div>● пам’ятник / меморіал</div>
      <div>■ університет</div>
      <div>▭ дошка</div>
      <div>◆ музей</div>
      <div>✚ могила</div>
      </div>
      </>
    )}
    </div>

    <MapContainer
    key="main-map"
    center={[50.45, 30.52]}
    zoom={4}
    minZoom={3}
    maxZoom={18}
    zoomControl={false}
    maxBounds={[
      [-85, -180],
      [85, 180]
    ]}
    maxBoundsViscosity={1.0}
    style={{ height: '100%', width: '100%' }}
    >
    <TileLayer
    attribution="&copy; OpenStreetMap contributors"
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    noWrap={true}
    />

    <OsmLoaderButton
    setOsmObjects={setOsmObjects}
    setShowOsmObjects={setShowOsmObjects}
    setOsmLoading={setOsmLoading}
    setOsmError={setOsmError}
    osmLoading={osmLoading}
    />

    <MarkerClusterGroup
    chunkedLoading
    showCoverageOnHover={false}
    spiderfyOnMaxZoom={true}
    maxClusterRadius={(zoom) => {
      if (zoom <= 4) return 130
        if (zoom <= 6) return 100
          if (zoom <= 8) return 70
            return 35
    }}
    iconCreateFunction={createClusterIcon}
    >
    {filtered.map(item => {
      const color = personColors[item.person] || personColors.default
      const icon = createCustomIcon(item.type, color)

      return (
        <Marker
        key={item.id}
        position={[item.lat, item.lng]}
        icon={icon}
        >
        <Popup>
        <div style={{ maxWidth: '250px' }}>
        <h3>{item.name}</h3>

        <p>
        <strong>Тип:</strong>{' '}
        {objectTypes[item.type] || item.type || 'Об’єкт'}
        </p>

        <p><strong>Персона:</strong> {item.person}</p>

        {(item.city || item.country) && (
          <p>
          {item.city}
          {item.city && item.country ? ', ' : ''}
          {item.country}
          </p>
        )}

        <p>
        <strong>Рік:</strong>{' '}
        {item.year || 'невідомо'}
        </p>

        <p>{item.description}</p>

        {item.isOsm && (
          <p style={{ fontSize: '12px', opacity: 0.75 }}>
          Дані з OpenStreetMap
          </p>
        )}

        {item.sourceUrl && (
          <a
          href={item.sourceUrl}
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-block',
            marginTop: '10px',
            padding: '8px 12px',
            background: '#2563eb',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: '600'
          }}
          >
          Джерело
          </a>
        )}
        </div>
        </Popup>
        </Marker>
      )
    })}
    </MarkerClusterGroup>
    </MapContainer>
    </div>
  )
}
