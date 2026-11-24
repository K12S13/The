import { getCategoryInfo, TYPES } from '../Data/schema'
import Legend from './Legend'

const ALL = 'Усі'

function SelectField({ label, value, onChange, options, renderLabel = (v) => v }) {
  return (
    <label className="field">
      <span className="field__label">{label}</span>
      <select className="field__control" value={value} onChange={(e) => onChange(e.target.value)}>
        <option value={ALL}>{ALL}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {renderLabel(option)}
          </option>
        ))}
      </select>
    </label>
  )
}

export default function FilterPanel({
  open,
  onToggle,
  filters,
  setFilter,
  onReset,
  options,
  foundCount,
  showOsm,
  onShowOsmChange,
  osmLoading,
  osmError
}) {
  return (
    <aside className={`filter-panel${open ? ' is-open' : ''}`} aria-label="Фільтри">
      <button
        type="button"
        className="filter-panel__header"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls="filter-panel-body"
      >
        <span className="filter-panel__handle" aria-hidden="true" />
        <span className="filter-panel__title">Фільтри</span>
        <span className="filter-panel__count">
          Знайдено: <strong>{foundCount}</strong>
        </span>
        <span className="filter-panel__chevron" aria-hidden="true">
          {open ? '−' : '+'}
        </span>
        <span className="visually-hidden">{open ? 'Згорнути фільтри' : 'Розгорнути фільтри'}</span>
      </button>

      <div className="filter-panel__quick">
        <label className="field">
          <span className="field__label">Пошук пам’яток</span>
          <input
            className="field__control"
            type="search"
            value={filters.search}
            onChange={(e) => setFilter('search', e.target.value)}
            placeholder="Назва, діяч, місто…"
          />
        </label>

        <SelectField
          label="Категорія"
          value={filters.category}
          onChange={(v) => setFilter('category', v)}
          options={options.categories}
          renderLabel={(key) => getCategoryInfo(key).label}
        />
      </div>

      {open && (
        <div id="filter-panel-body" className="filter-panel__body">
          <SelectField
            label="Персона"
            value={filters.person}
            onChange={(v) => setFilter('person', v)}
            options={options.persons}
          />
          <SelectField
            label="Країна"
            value={filters.country}
            onChange={(v) => setFilter('country', v)}
            options={options.countries}
          />
          <SelectField
            label="Тип об’єкта"
            value={filters.type}
            onChange={(v) => setFilter('type', v)}
            options={options.types}
            renderLabel={(key) => TYPES[key]?.label || key}
          />

          <label className="checkbox">
            <input type="checkbox" checked={showOsm} onChange={(e) => onShowOsmChange(e.target.checked)} />
            Показати OSM-точки
          </label>

          {osmLoading && <p className="filter-panel__status">Завантаження OSM…</p>}
          {osmError && <p className="filter-panel__status filter-panel__status--error">{osmError}</p>}

          <button type="button" className="button" onClick={onReset}>
            Скинути фільтри
          </button>

          <Legend />
        </div>
      )}
    </aside>
  )
}
