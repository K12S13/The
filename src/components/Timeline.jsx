import { useEffect, useRef, useState } from 'react'
import { EPOCHS, MAX_YEAR, MIN_YEAR, SLIDER_MAX, formatYear, posToYear, yearToPos } from '../map/timeScale'

const TICKS = [-10000, 0, 1000, 1500, 1800, 1900, 1950, 2000]
const PLAY_INTERVAL_MS = 3200

export default function Timeline({ range, onChange, active, onActiveChange, undatedCount, shownCount }) {
  const [playing, setPlaying] = useState(false)
  const [epochIndex, setEpochIndex] = useState(-1)
  const epochRef = useRef(-1)

  const goToEpoch = (index) => {
    epochRef.current = index
    setEpochIndex(index)
    if (index >= 0) onChange([EPOCHS[index].from, EPOCHS[index].to])
  }

  useEffect(() => {
    if (!playing) return undefined
    const timer = setInterval(() => {
      const next = epochRef.current + 1
      if (next >= EPOCHS.length) {
        setPlaying(false)
        return
      }
      epochRef.current = next
      setEpochIndex(next)
      onChange([EPOCHS[next].from, EPOCHS[next].to])
    }, PLAY_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [playing, onChange])

  function play() {
    if (playing) {
      setPlaying(false)
      return
    }
    onActiveChange(true)
    goToEpoch(0)
    setPlaying(true)
  }

  function handleSlider(which, pos) {
    setPlaying(false)
    goToEpoch(-1)
    onActiveChange(true)
    const year = posToYear(Number(pos))
    if (which === 0) onChange([Math.min(year, range[1]), range[1]])
    else onChange([range[0], Math.max(year, range[0])])
  }

  function reset() {
    setPlaying(false)
    goToEpoch(-1)
    onActiveChange(false)
    onChange([MIN_YEAR, MAX_YEAR])
  }

  const fromPos = yearToPos(range[0])
  const toPos = yearToPos(range[1])
  const epoch = epochIndex >= 0 && active ? EPOCHS[epochIndex] : null

  return (
    <section className={`timeline${active ? ' is-active' : ''}`} aria-label="Часова шкала">
      {epoch && (
        <p className="timeline__epoch" aria-live="polite">
          {epoch.title}
        </p>
      )}
      <div className="timeline__row">
        <button
          type="button"
          className="timeline__play"
          onClick={play}
          aria-label={playing ? 'Зупинити показ епох' : 'Програти епохи'}
          aria-pressed={playing}
        >
          {playing ? '❚❚' : '▶'}
          <span className="timeline__play-label">{playing ? 'Пауза' : 'Програти'}</span>
        </button>

        <div className="timeline__body">
          <div className="timeline__labels">
            <span>
              {active ? (
                <>
                  <strong>{formatYear(range[0])}</strong> — <strong>{formatYear(range[1])}</strong>
                </>
              ) : (
                'Усі епохи'
              )}
            </span>
            <span className="timeline__counts">
              {active ? (
                <>
                  на карті: {shownCount} · без дати: {undatedCount}
                </>
              ) : (
                'Посунь повзунок або натисни «Програти»'
              )}
            </span>
          </div>

          <div className="dual-range" style={{ '--from': fromPos / SLIDER_MAX, '--to': toPos / SLIDER_MAX }}>
            <div className="dual-range__track" aria-hidden="true">
              <div className="dual-range__fill" />
            </div>
            <input
              type="range"
              min="0"
              max={SLIDER_MAX}
              value={fromPos}
              onChange={(e) => handleSlider(0, e.target.value)}
              aria-label="Рік від"
              aria-valuetext={formatYear(range[0])}
            />
            <input
              type="range"
              min="0"
              max={SLIDER_MAX}
              value={toPos}
              onChange={(e) => handleSlider(1, e.target.value)}
              aria-label="Рік до"
              aria-valuetext={formatYear(range[1])}
            />
          </div>

          <div className="timeline__ticks" aria-hidden="true">
            {TICKS.map((year) => (
              <span key={year} style={{ left: `${(yearToPos(year) / SLIDER_MAX) * 100}%` }}>
                {year < 0 ? `${Math.abs(year) / 1000} тис. до н. е.` : year}
              </span>
            ))}
          </div>
        </div>

        {active && (
          <button type="button" className="timeline__reset" onClick={reset} aria-label="Показати всі епохи">
            ✕
          </button>
        )}
      </div>
    </section>
  )
}
