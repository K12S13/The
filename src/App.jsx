import { useCallback, useMemo, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import literaryObjects from './Data/literaryObjects'
import { CATEGORIES, TYPES, getCategoryInfo, getTypeInfo } from './Data/schema'
import { fetchOsmLiteraryObjectsByBbox } from './api/fetchOsmLiteraryObjects'
import { getMarkerIcon, createClusterIcon } from './map/markerIcons'
import FilterPanel from './components/FilterPanel'
import ObjectModal from './components/ObjectModal/ObjectModal'

const ALL = 'Усі'

const INITIAL_FILTERS = {
  search: '',
  category: ALL,
  person: ALL,
  country: ALL,
  type: ALL,
  yearFrom: '',
  yearTo: ''
}

const uniqueSorted = (values) => [...new Set(values.filter(Boolean))].sort((a, b) => a.localeCompare(b, 'uk'))

function clusterRadius(zoom) {
  if (zoom <= 4) return 120
  if (zoom <= 6) return 90
  if (zoom <= 8) return 60
  return 35
}

function OsmButton({ onLoaded, setLoading, setError, loading }) {
  const map = useMap()

  async function load() {
    try {
      setLoading(true)
      setError('')
      const b = map.getBounds()
      const bbox = `${b.getSouth()},${b.getWest()},${b.getNorth()},${b.getEast()}`
      onLoaded(await fetchOsmLiteraryObjectsByBbox(bbox))
    } catch (e) {
      console.error(e)
      setError('OSM не відповів або область завелика. Наблизь карту і спробуй ще раз.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <button type="button" className="map-button osm-button" onClick={load} disabled={loading}>
      {loading ? '…' : (
        <>
          <span className="osm-button__long">Завантажити OSM</span>
          <span className="osm-button__short">OSM</span>
        </>
      )}
    </button>
  )
}

export default function App() {
  const [filtersOpen, setFiltersOpen] = useState(() => window.innerWidth > 600)
  const [selectedObject, setSelectedObject] = useState(null)
  const [filters, setFilters] = useState(INITIAL_FILTERS)

  const [osmObjects, setOsmObjects] = useState([])
  const [showOsmObjects, setShowOsmObjects] = useState(false)
  const [osmLoading, setOsmLoading] = useState(false)
  const [osmError, setOsmError] = useState('')

  const setFilter = useCallback((key, value) => setFilters((prev) => ({ ...prev, [key]: value })), [])
  const closeModal = useCallback(() => setSelectedObject(null), [])

  const handleOsmLoaded = useCallback((data) => {
    setOsmObjects((prev) => {
      const unique = new Map(prev.map((item) => [item.id, item]))
      data.forEach((item) => unique.set(item.id, item))
      return [...unique.values()]
    })
    setShowOsmObjects(true)
  }, [])

  const allObjects = useMemo(
    () => (showOsmObjects ? [...literaryObjects, ...osmObjects] : literaryObjects),
    [osmObjects, showOsmObjects]
  )

  const options = useMemo(() => {
    const presentCategories = new Set(allObjects.map((item) => item.category).filter(Boolean))
    const presentTypes = new Set(allObjects.map((item) => item.type))
    return {
      categories: [
        ...Object.keys(CATEGORIES).filter((key) => presentCategories.has(key)),
        ...[...presentCategories].filter((key) => !CATEGORIES[key])
      ],
      types: Object.keys(TYPES).filter((key) => presentTypes.has(key)),
      persons: uniqueSorted(allObjects.map((item) => item.person)),
      countries: uniqueSorted(allObjects.map((item) => item.country))
    }
  }, [allObjects])

  const filtered = useMemo(() => {
    const query = filters.search.trim().toLocaleLowerCase('uk')
    const from = filters.yearFrom === '' ? null : Number(filters.yearFrom)
    const to = filters.yearTo === '' ? null : Number(filters.yearTo)

    return allObjects.filter((item) => {
      if (filters.category !== ALL && item.category !== filters.category) return false
      if (filters.person !== ALL && item.person !== filters.person) return false
      if (filters.country !== ALL && item.country !== filters.country) return false
      if (filters.type !== ALL && item.type !== filters.type) return false
      if (from !== null && item.year != null && item.year < from) return false
      if (to !== null && item.year != null && item.year > to) return false
      if (!query) return true
      return [
        item.name,
        item.person,
        item.city,
        item.region,
        item.country,
        item.description,
        item.subtype,
        getCategoryInfo(item.category).label,
        getTypeInfo(item.type).label
      ]
        .filter(Boolean)
        .some((value) => String(value).toLocaleLowerCase('uk').includes(query))
    })
  }, [allObjects, filters])

  return (
    <div className="app">
      <FilterPanel
        open={filtersOpen}
        onToggle={() => setFiltersOpen((open) => !open)}
        filters={filters}
        setFilter={setFilter}
        onReset={() => setFilters(INITIAL_FILTERS)}
        options={options}
        foundCount={filtered.length}
        showOsm={showOsmObjects}
        onShowOsmChange={setShowOsmObjects}
        osmLoading={osmLoading}
        osmError={osmError}
      />

      <MapContainer
        className="map"
        zoomControl={false}
        center={[50.45, 30.52]}
        zoom={4}
        minZoom={3}
        maxZoom={18}
        maxBounds={[
          [-85, -180],
          [85, 180]
        ]}
        maxBoundsViscosity={1}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          noWrap
        />

        <OsmButton
          onLoaded={handleOsmLoaded}
          setLoading={setOsmLoading}
          setError={setOsmError}
          loading={osmLoading}
        />

        <MarkerClusterGroup
          chunkedLoading
          chunkInterval={100}
          chunkDelay={50}
          showCoverageOnHover={false}
          spiderfyOnMaxZoom
          removeOutsideVisibleBounds
          animateAddingMarkers={false}
          disableClusteringAtZoom={13}
          maxClusterRadius={clusterRadius}
          iconCreateFunction={createClusterIcon}
        >
          {filtered.map((item) => (
            <Marker
              key={`${item.isOsm ? 'osm' : 'local'}-${item.id}`}
              position={[item.lat, item.lng]}
              icon={getMarkerIcon(item.type, getCategoryInfo(item.category).color, item.isOsm ? 'osm' : '')}
            >
              <Popup>
                <div className="map-popup">
                  <p className="map-popup__type">{item.subtype || getTypeInfo(item.type).label}</p>
                  <h3>{item.name}</h3>
                  {item.person && <p>{item.person}</p>}
                  <p className="map-popup__place">
                    {[item.city, item.year != null ? (item.year < 0 ? `${-item.year} р. до н. е.` : `${item.year} р.`) : null]
                      .filter(Boolean)
                      .join(' · ')}
                  </p>
                  <button type="button" className="map-popup__button" onClick={() => setSelectedObject(item)}>
                    Детальніше
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>

      {selectedObject && <ObjectModal object={selectedObject} onClose={closeModal} />}
    </div>
  )
}
