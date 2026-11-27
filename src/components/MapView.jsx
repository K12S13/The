import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import { getCategoryInfo, getTypeInfo } from '../Data/schema'
import { getMarkerIcon, createClusterIcon } from '../map/markerIcons'
import { formatYear } from '../map/timeScale'
import { INITIAL_ZOOM } from '../map/mapConfig'

// Світла приглушена підкладка.
// CARTO Positron потребує безкоштовного API-ключа (VITE_CARTO_KEY у .env / Netlify).
// Без ключа — стандартні тайли OpenStreetMap, приглушені CSS-фільтром (.map--muted).
const CARTO_KEY = import.meta.env.VITE_CARTO_KEY
const OSM_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
const TILES = CARTO_KEY
  ? {
      url: `https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png?key=${CARTO_KEY}`,
      attribution: `${OSM_ATTRIBUTION} &copy; <a href="https://carto.com/attributions">CARTO</a>`,
      subdomains: 'abcd',
      muted: false
    }
  : {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: OSM_ATTRIBUTION,
      subdomains: 'abc',
      muted: true
    }

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

// Після зміни фільтрів наводить карту на знайдені пам'ятки (з відступами під панелі)
function FitToResults({ objects, fitKey }) {
  const map = useMap()
  useEffect(() => {
    if (!fitKey || !objects.length || objects.length > 60) return
    // невелика пауза, щоб карта не «літала» на кожну набрану літеру
    const timer = setTimeout(() => {
      const bounds = L.latLngBounds(objects.map((o) => [o.lat, o.lng]))
      const mobile = window.matchMedia('(max-width: 760px)').matches
      map.flyToBounds(bounds, {
        paddingTopLeft: mobile ? [30, 90] : [400, 80],
        paddingBottomRight: mobile ? [30, 230] : [180, 180],
        maxZoom: 12,
        duration: 0.8
      })
    }, 450)
    return () => clearTimeout(timer)
    // objects навмисно не в залежностях: наводимо лише при зміні фільтрів, не шкали
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fitKey, map])
  return null
}

export default function MapView({ objects, onSelect, onMapReady, fitKey }) {
  return (
    <MapContainer
      className={`map${TILES.muted ? ' map--muted' : ''}`}
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
      ref={onMapReady}
    >
      <TileLayer url={TILES.url} attribution={TILES.attribution} subdomains={TILES.subdomains} noWrap />
      <FitToResults objects={objects} fitKey={fitKey} />

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
        {objects.map((item) => (
          <Marker
            key={`${item.isOsm ? 'osm' : 'local'}-${item.id}`}
            position={[item.lat, item.lng]}
            icon={getMarkerIcon(item.type, getCategoryInfo(item.category).color, markerVariant(item))}
            alt={item.name}
            title={item.name}
          >
            <Popup>
              <div className="map-popup">
                <p className="map-popup__type">
                  {item.forgotten && <span className="map-popup__forgotten">★ Червона книга · </span>}
                  {item.subtype || getTypeInfo(item.type).label}
                </p>
                <h3>{item.name}</h3>
                {item.person && <p className="map-popup__person">{item.person}</p>}
                <p className="map-popup__place">
                  {[item.city, item.year != null ? `${formatYear(item.year)} р.` : null].filter(Boolean).join(' · ')}
                </p>
                <button type="button" className="map-popup__button" onClick={() => onSelect(item)}>
                  Детальніше
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  )
}
