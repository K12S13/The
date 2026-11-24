import { useCallback, useEffect, useMemo, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import literaryObjects from './Data/literaryObjects'
import { CATEGORIES, TYPES, getCategoryInfo, getTypeInfo } from './Data/schema'
import { fetchOsmObjects, isAbortError, OSM_MIN_ZOOM } from './api/fetchOsmLiteraryObjects'
import { getMarkerIcon, createClusterIcon } from './map/markerIcons'
import { MAX_YEAR, MIN_YEAR, formatYear, inEra } from './map/timeScale'
import FilterPanel from './components/FilterPanel'
import Timeline from './components/Timeline'
import ObjectModal from './components/ObjectModal/ObjectModal'
import StatsModal from './components/StatsModal'
import AboutModal from './components/AboutModal'

const ALL = 'Усі'
const INITIAL_ZOOM = 4

const INITIAL_FILTERS = {
  search: '',
  category: ALL,
  person: ALL,
  country: ALL,
  type: ALL
}

const uniqueSorted = (values) => [...new Set(values.filter(Boolean))].sort((a, b) => a.localeCompare(b, 'uk'))

function clusterRadius(zoom) {
  if (zoom <= 4) return 120
  if (zoom <= 6) return 90
  if (zoom <= 8) return 60
  return 35
}

function markerVariant(item) {
  if (item.isOsm) return 'osm'
  if (item.forgotten) return 'forgotten'
  return ''
}

function OsmButton({ map, onLoaded, setLoading, setError, loading }) {
  const [zoom, setZoom] = useState(INITIAL_ZOOM)
  useEffect(() => {
    if (!map) return undefined
    const update = () => setZoom(map.getZoom())
    map.on('zoomend', update)
    return () => map.off('zoomend', update)
  }, [map])
  const tooFar = zoom < OSM_MIN_ZOOM

  async function load() {
    if (tooFar || !map) return
    try {
      setLoading(true)
      setError('')
      const b = map.getBounds()
      const items = await fetchOsmObjects({
        south: b.getSouth(),
        west: b.getWest(),
        north: b.getNorth(),
        east: b.getEast()
      })
      onLoaded(items)
      if (!items.length) setError('У цій області OSM-точок, пов’язаних із людьми з карти, не знайдено.')
    } catch (e) {
      if (isAbortError(e)) return
      console.error(e)
      setError('OSM не відповів. Спробуй ще раз трохи пізніше.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      type="button"
      className="map-button"
      onClick={load}
      disabled={loading || tooFar}
      title={tooFar ? 'Наблизь карту, щоб завантажити точки OpenStreetMap' : 'Завантажити точки OpenStreetMap у видимій області'}
    >
      {loading ? (
        '…'
      ) : (
        <>
          <span className="label-long">{tooFar ? 'OSM: наблизь карту' : 'Завантажити OSM'}</span>
          <span className="label-short">{tooFar ? 'OSM ⌕' : 'OSM'}</span>
        </>
      )}
    </button>
  )
}

export default function App() {
  const [filtersOpen, setFiltersOpen] = useState(() => window.innerWidth > 600)
  const [selectedObject, setSelectedObject] = useState(null)
  const [filters, setFilters] = useState(INITIAL_FILTERS)
  const [forgottenOnly, setForgottenOnly] = useState(false)
  const [eraRange, setEraRange] = useState([MIN_YEAR, MAX_YEAR])
  const [eraActive, setEraActive] = useState(false)
  const [dialog, setDialog] = useState(null) // 'stats' | 'about' | null
  const [map, setMap] = useState(null)

  const [osmObjects, setOsmObjects] = useState([])
  const [showOsmObjects, setShowOsmObjects] = useState(false)
  const [osmLoading, setOsmLoading] = useState(false)
  const [osmError, setOsmError] = useState('')

  const setFilter = useCallback((key, value) => setFilters((prev) => ({ ...prev, [key]: value })), [])
  const closeModal = useCallback(() => setSelectedObject(null), [])
  const closeDialog = useCallback(() => setDialog(null), [])

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

  // Усі фільтри, крім часової шкали
  const matched = useMemo(() => {
    const query = filters.search.trim().toLocaleLowerCase('uk')
    return allObjects.filter((item) => {
      if (forgottenOnly && !item.forgotten) return false
      if (filters.category !== ALL && item.category !== filters.category) return false
      if (filters.person !== ALL && item.person !== filters.person) return false
      if (filters.country !== ALL && item.country !== filters.country) return false
      if (filters.type !== ALL && item.type !== filters.type) return false
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
  }, [allObjects, filters, forgottenOnly])

  const filtered = useMemo(
    () => (eraActive ? matched.filter((item) => inEra(item, eraRange[0], eraRange[1])) : matched),
    [matched, eraActive, eraRange]
  )
  const undatedCount = useMemo(() => matched.filter((item) => item.eraYear === undefined).length, [matched])
  const forgottenCount = useMemo(() => literaryObjects.filter((item) => item.forgotten).length, [])

  return (
    <div className="app">
      <FilterPanel
        open={filtersOpen}
        onToggle={() => setFiltersOpen((open) => !open)}
        filters={filters}
        setFilter={setFilter}
        onReset={() => {
          setFilters(INITIAL_FILTERS)
          setForgottenOnly(false)
        }}
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
        center={[49.0, 31.4]}
        zoom={INITIAL_ZOOM}
        minZoom={3}
        maxZoom={18}
        maxBounds={[
          [-85, -180],
          [85, 180]
        ]}
        maxBoundsViscosity={1}
        ref={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          noWrap
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
              icon={getMarkerIcon(item.type, getCategoryInfo(item.category).color, markerVariant(item))}
            >
              <Popup>
                <div className="map-popup">
                  <p className="map-popup__type">
                    {item.forgotten && <span className="map-popup__forgotten">★ Забутий герой · </span>}
                    {item.subtype || getTypeInfo(item.type).label}
                  </p>
                  <h3>{item.name}</h3>
                  {item.person && <p>{item.person}</p>}
                  <p className="map-popup__place">
                    {[item.city, item.year != null ? `${formatYear(item.year)} р.` : null].filter(Boolean).join(' · ')}
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

      <div className="map-actions">
        <button
          type="button"
          className={`map-button map-button--forgotten${forgottenOnly ? ' is-on' : ''}`}
          onClick={() => setForgottenOnly((on) => !on)}
          aria-pressed={forgottenOnly}
          disabled={!forgottenCount}
          title={forgottenCount ? undefined : 'Список забутих героїв ще готується'}
        >
          <span aria-hidden="true">★</span>{' '}
          <span className="label-long">{forgottenOnly ? 'Показати всіх' : 'Лише забуті герої'}</span>
          <span className="label-short">{forgottenOnly ? 'Усі' : 'Забуті'}</span>
        </button>
        <button type="button" className="map-button map-button--light" onClick={() => setDialog('stats')}>
          Цифри
        </button>
        <button type="button" className="map-button map-button--light" onClick={() => setDialog('about')}>
          Про проєкт
        </button>
        <OsmButton
          map={map}
          onLoaded={handleOsmLoaded}
          setLoading={setOsmLoading}
          setError={setOsmError}
          loading={osmLoading}
        />
      </div>

      <Timeline
        range={eraRange}
        onChange={setEraRange}
        active={eraActive}
        onActiveChange={setEraActive}
        undatedCount={undatedCount}
        shownCount={filtered.length}
      />

      {selectedObject && <ObjectModal object={selectedObject} onClose={closeModal} />}
      {dialog === 'stats' && <StatsModal objects={literaryObjects} onClose={closeDialog} />}
      {dialog === 'about' && <AboutModal onClose={closeDialog} />}
    </div>
  )
}
