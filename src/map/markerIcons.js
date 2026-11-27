import L from 'leaflet'
import { getTypeInfo } from '../Data/schema'

// HTML маркера. Та сама розмітка використовується в легенді (MarkerShape),
// тож форма в легенді завжди збігається з формою на карті.
export function markerHtml(shape, color, variant = '') {
  const mods = variant ? ` marker--${variant}` : ''
  return `<span class="marker${mods}" style="--marker-color:${color}"><span class="marker__shape marker__shape--${shape}"></span></span>`
}

const iconCache = new Map()

// Іконки кешуються за type + color (+ варіант: osm / forgotten),
// щоб Leaflet не створював нові DOM-елементи на кожен рендер.
export function getMarkerIcon(type, color, variant = '') {
  const key = `${type}|${color}|${variant}`
  let icon = iconCache.get(key)
  if (!icon) {
    icon = L.divIcon({
      className: 'marker-icon',
      html: markerHtml(getTypeInfo(type).shape, color, variant),
      iconSize: [30, 30],
      iconAnchor: [15, 15],
      popupAnchor: [0, -14]
    })
    iconCache.set(key, icon)
  }
  return icon
}

export function createClusterIcon(cluster) {
  const count = cluster.getChildCount()
  const size = count < 10 ? 38 : count < 100 ? 44 : 52
  return L.divIcon({
    className: 'marker-icon',
    html: `<span class="cluster" style="--size:${size}px">${count}</span>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2]
  })
}
