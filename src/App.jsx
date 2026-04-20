import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import monuments from './Data/Monuments'

export default function App() {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
    <MapContainer
    center={[50.45, 30.52]}
    zoom={4}
    minZoom={3}
    maxZoom={8}
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

    {monuments.map((item) => (
      <Marker key={item.id} position={[item.lat, item.lng]}>
      <Popup>
      <div style={{ maxWidth: '220px' }}>
      <h3>{item.name}</h3>
      <p>{item.city}, {item.country}</p>
      <p><strong>Встановлено:</strong> {item.year}</p>
      <p>{item.description}</p>
      </div>
      </Popup>
      </Marker>
    ))}
    </MapContainer>
    </div>
  )
}
