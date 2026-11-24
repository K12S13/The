import { useCallback, useMemo, useState } from 'react'
import literaryObjects from './Data/literaryObjects'
import { CATEGORIES, TYPES, getCategoryInfo, getTypeInfo } from './Data/schema'
import { MAX_YEAR, MIN_YEAR, inEra } from './map/timeScale'
import MapView from './components/MapView'
import MapActions from './components/MapActions'
import FilterPanel from './components/FilterPanel'
import Timeline from './components/Timeline'
import ObjectModal from './components/ObjectModal/ObjectModal'
import StatsModal from './components/StatsModal'
import AboutModal from './components/AboutModal'

const ALL = 'Усі'

const INITIAL_FILTERS = {
  search: '',
  category: ALL,
  person: ALL,
  country: ALL,
  type: ALL
}

const uniqueSorted = (values) => [...new Set(values.filter(Boolean))].sort((a, b) => a.localeCompare(b, 'uk'))

export default function App() {
  const [filtersOpen, setFiltersOpen] = useState(() => window.matchMedia('(min-width: 761px)').matches)
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
  // Ключ для автонаведення карти: змінюється лише з фільтрами (порожній — якщо фільтри скинуті)
  const fitKey = useMemo(() => {
    const active = forgottenOnly || Object.entries(filters).some(([key, value]) => value !== INITIAL_FILTERS[key])
    return active ? JSON.stringify([filters, forgottenOnly]) : ''
  }, [filters, forgottenOnly])
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

      <MapView objects={filtered} onSelect={setSelectedObject} onMapReady={setMap} fitKey={fitKey} />

      <MapActions
        map={map}
        forgottenOnly={forgottenOnly}
        onForgottenToggle={() => setForgottenOnly((on) => !on)}
        forgottenCount={forgottenCount}
        onOpenStats={() => setDialog('stats')}
        onOpenAbout={() => setDialog('about')}
        osm={{ onLoaded: handleOsmLoaded, setLoading: setOsmLoading, setError: setOsmError, loading: osmLoading }}
      />

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
