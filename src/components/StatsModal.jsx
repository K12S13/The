import { useMemo } from 'react'
import { CATEGORIES } from '../Data/schema'
import { EPOCHS, inEra } from '../map/timeScale'
import Modal from './Modal'

const HOME_COUNTRY = 'Україна'

// Узгодження іменника з числом: 1 країна, 2 країни, 5 країн, 21 країна
function plural(n, [one, few, many]) {
  const mod10 = n % 10
  const mod100 = n % 100
  if (mod10 === 1 && mod100 !== 11) return one
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few
  return many
}

function Bars({ rows }) {
  const max = Math.max(1, ...rows.map((row) => row.value))
  return (
    <ul className="bars">
      {rows.map((row) => (
        <li key={row.label} className="bars__row">
          <span className="bars__label">{row.label}</span>
          <span className="bars__track">
            <span
              className="bars__fill"
              style={{ width: `${(row.value / max) * 100}%`, background: row.color || 'var(--accent-ink)' }}
            />
          </span>
          <span className="bars__value" translate="no">
            {row.value}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default function StatsModal({ objects, onClose }) {
  const stats = useMemo(() => {
    const abroad = objects.filter((o) => o.country && o.country !== HOME_COUNTRY)
    const byCountry = new Map()
    for (const o of abroad) {
      const entry = byCountry.get(o.country) || { count: 0, cities: new Set() }
      entry.count += 1
      if (o.city) entry.cities.add(o.city)
      byCountry.set(o.country, entry)
    }
    const countries = [...byCountry.entries()]
      .map(([country, { count, cities }]) => ({ country, count, cities: [...cities] }))
      .sort((a, b) => b.count - a.count || a.country.localeCompare(b.country, 'uk'))

    const categories = Object.entries(CATEGORIES)
      .map(([key, info]) => ({
        label: info.label,
        color: info.color,
        value: objects.filter((o) => o.category === key).length
      }))
      .filter((row) => row.value > 0)
      .sort((a, b) => b.value - a.value)

    const epochs = EPOCHS.map((epoch) => ({
      label: epoch.title,
      value: objects.filter((o) => inEra(o, epoch.from, epoch.to)).length
    }))

    return {
      total: objects.length,
      forgotten: objects.filter((o) => o.forgotten).length,
      countries,
      categories,
      epochs
    }
  }, [objects])

  return (
    <Modal title="Цифри" onClose={onClose} className="modal--wide">
      <div className="stats-big">
        <div className="stat">
          <span className="stat__value" translate="no">
            {stats.total}
          </span>
          <span className="stat__label">{plural(stats.total, ['пам’ятка', 'пам’ятки', 'пам’яток'])} на карті</span>
        </div>
        <div className="stat stat--gold">
          <span className="stat__value" translate="no">
            {stats.forgotten}
          </span>
          <span className="stat__label">{plural(stats.forgotten, ['забутий герой', 'забуті герої', 'забутих героїв'])}</span>
        </div>
        <div className="stat">
          <span className="stat__value" translate="no">
            {stats.countries.length}
          </span>
          <span className="stat__label">
            {plural(stats.countries.length, ['країна', 'країни', 'країн'])} за кордоном з українськими слідами
          </span>
        </div>
      </div>

      <section className="stats-section">
        <h3>Де за кордоном</h3>
        <ul className="countries">
          {stats.countries.map((row) => (
            <li key={row.country}>
              <strong>{row.country}</strong> <span className="countries__count" translate="no">
                {row.count}
              </span>
              <span className="countries__cities">{row.cities.join(', ')}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="stats-columns">
        <section className="stats-section">
          <h3>За категоріями</h3>
          <Bars rows={stats.categories} />
        </section>
        <section className="stats-section">
          <h3>За епохами</h3>
          <Bars rows={stats.epochs} />
          <p className="stats-note">Одна пам’ятка може належати до кількох епох, якщо життя героя чи подія їх охоплює.</p>
        </section>
      </div>
    </Modal>
  )
}
