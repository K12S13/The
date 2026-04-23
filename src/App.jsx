import { useMemo, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import monuments from './Data/Monuments'

export const personColors = {
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

function createCustomIcon(color) {
  return L.divIcon({
    className: '',
    html: `
    <div style="
    width: 18px;
    height: 18px;
    background: ${color};
    border: 3px solid white;
    border-radius: 50%;
    box-shadow: 0 0 6px rgba(0,0,0,0.35);
    "></div>
    `,
    iconSize: [18, 18],
    iconAnchor: [9, 9],
    popupAnchor: [0, -10]
  })
}

export default function App() {
  const [selectedPerson, setSelectedPerson] = useState('Усі')
  const [selectedCountry, setSelectedCountry] = useState('Усі')
  const [yearFrom, setYearFrom] = useState('')
  const [yearTo, setYearTo] = useState('')

  const persons = useMemo(() => {
    return ['Усі', ...new Set(monuments.map(item => item.person))]
  }, [])

  const countries = useMemo(() => {
    return ['Усі', ...new Set(monuments.map(item => item.country))]
  }, [])

  const filteredMonuments = useMemo(() => {
    return monuments.filter(item => {
      const matchPerson =
      selectedPerson === 'Усі' || item.person === selectedPerson

      const matchCountry =
      selectedCountry === 'Усі' || item.country === selectedCountry

      const matchYearFrom =
      yearFrom === '' || item.year >= Number(yearFrom)

      const matchYearTo =
      yearTo === '' || item.year <= Number(yearTo)

      return matchPerson && matchCountry && matchYearFrom && matchYearTo
    })
  }, [selectedPerson, selectedCountry, yearFrom, yearTo])

  return (
    <div style={{ height: '100vh', width: '100%', position: 'relative' }}>
    <div
    style={{
      position: 'absolute',
      top: '10px',
      left: '10px',
      zIndex: 1000,
      background: 'white',
      padding: '12px',
      borderRadius: '10px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          minWidth: '220px'
    }}
    >
    <h3 style={{ margin: 0 }}>Фільтри</h3>

    <label>
    Письменник:
    <select
    value={selectedPerson}
    onChange={(e) => setSelectedPerson(e.target.value)}
    style={{ width: '100%', marginTop: '4px' }}
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
    style={{ width: '100%', marginTop: '4px' }}
    >
    {countries.map(country => (
      <option key={country} value={country}>
      {country}
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
    style={{ width: '100%', marginTop: '4px' }}
    />
    </label>

    <label>
    Рік до:
    <input
    type="number"
    value={yearTo}
    onChange={(e) => setYearTo(e.target.value)}
    placeholder="Напр. 2000"
    style={{ width: '100%', marginTop: '4px' }}
    />
    </label>

    <button
    onClick={() => {
      setSelectedPerson('Усі')
      setSelectedCountry('Усі')
      setYearFrom('')
      setYearTo('')
    }}
    >
    Скинути фільтри
    </button>

    <p style={{ margin: 0 }}>
    Знайдено: <strong>{filteredMonuments.length}</strong>
    </p>
    </div>

    <MapContainer
    center={[50.45, 30.52]}
    zoom={4}
    minZoom={3}
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

    {filteredMonuments.map((item) => {
      const color = personColors[item.person] || personColors.default
      const icon = createCustomIcon(color)

      return (
        <Marker
        key={item.id}
        position={[item.lat, item.lng]}
        icon={icon}
        >
        <Popup>
        <div style={{ maxWidth: '240px' }}>
        <h3>{item.name}</h3>
        <p><strong>Письменник:</strong> {item.person}</p>
        <p>{item.city}, {item.country}</p>
        <p><strong>Встановлено:</strong> {item.year}</p>
        <p>{item.description}</p>

        {item.image && (
          <img
          src={item.image}
          alt={item.name}
          style={{
            width: '100%',
            borderRadius: '8px',
            marginTop: '8px'
          }}
          />
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
    </MapContainer>
    </div>
  )
}
