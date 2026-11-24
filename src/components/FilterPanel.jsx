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
      <div className="filter-panel__header">
        <h3 className="filter-panel__title">Фільтри</h3>
        <span className="filter-panel__count">
          Знайдено: <strong>{foundCount}</strong>
        </span>
        <button
          type="button"
          className="icon-button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls="filter-panel-body"
          aria-label={open ? 'Згорнути фільтри' : 'Розгорнути фільтри'}
        >
          {open ? '−' : '+'}
        </button>
      </div>

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

          <div className="field-row">
            <label className="field">
              <span className="field__label">Рік від</span>
              <input
                className="field__control"
                type="number"
                inputMode="numeric"
                value={filters.yearFrom}
                onChange={(e) => setFilter('yearFrom', e.target.value)}
                placeholder="1900"
              />
            </label>
            <label className="field">
              <span className="field__label">Рік до</span>
              <input
                className="field__control"
                type="number"
                inputMode="numeric"
                value={filters.yearTo}
                onChange={(e) => setFilter('yearTo', e.target.value)}
                placeholder="2000"
              />
            </label>
          </div>

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
