import { useEffect, useState } from 'react'
import { fetchOsmObjects, isAbortError, OSM_MIN_ZOOM } from '../api/fetchOsmLiteraryObjects'
import { INITIAL_ZOOM } from '../map/mapConfig'

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
      className="map-button map-button--light"
      onClick={load}
      disabled={loading || tooFar}
      title={tooFar ? 'Наблизь карту, щоб завантажити точки OpenStreetMap' : 'Завантажити точки OpenStreetMap у видимій області'}
    >
      {loading ? (
        '…'
      ) : (
        <>
          <span className="label-long">{tooFar ? 'OSM: наблизь карту' : 'Завантажити OSM'}</span>
          <span className="label-short">OSM</span>
        </>
      )}
    </button>
  )
}

export default function MapActions({
  map,
  forgottenOnly,
  onForgottenToggle,
  forgottenCount,
  onOpenStats,
  onOpenAbout,
  osm
}) {
  return (
    <div className="map-actions">
      <button
        type="button"
        className={`map-button map-button--forgotten${forgottenOnly ? ' is-on' : ''}`}
        onClick={onForgottenToggle}
        aria-pressed={forgottenOnly}
        disabled={!forgottenCount}
      >
        <span aria-hidden="true">★</span>{' '}
        <span className="label-long">{forgottenOnly ? 'Показати всіх' : 'Лише забуті герої'}</span>
        <span className="label-short">{forgottenOnly ? 'Усі' : 'Забуті'}</span>
      </button>
      <button type="button" className="map-button map-button--light" onClick={onOpenStats}>
        Цифри
      </button>
      <button type="button" className="map-button map-button--light" onClick={onOpenAbout}>
        <span className="label-long">Про проєкт</span>
        <span className="label-short">Про</span>
      </button>
      <OsmButton map={map} {...osm} />
    </div>
  )
}
