import { TYPES } from '../Data/schema'
import { markerHtml } from '../map/markerIcons'

const LEGEND_COLOR = '#4b5563'

export function MarkerShape({ shape, color = LEGEND_COLOR, variant }) {
  return (
    <span
      className="legend__icon"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: markerHtml(shape, color, variant) }}
    />
  )
}

export default function Legend({ types }) {
  const keys = types?.length ? types : Object.keys(TYPES)
  return (
    <section className="legend" aria-label="Легенда типів">
      <h4 className="legend__title">Форма маркера — тип пам’ятки</h4>
      <ul className="legend__list">
        {keys.map((key) => (
          <li key={key} className="legend__item">
            <MarkerShape shape={TYPES[key].shape} />
            <span>{TYPES[key].label}</span>
          </li>
        ))}
      </ul>
      <p className="legend__note">Колір маркера — категорія.</p>
    </section>
  )
}
