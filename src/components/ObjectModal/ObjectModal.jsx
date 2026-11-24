import { useEffect, useRef, useState } from 'react'
import { getCategoryInfo, getTypeInfo } from '../../Data/schema'
import './ObjectModal.css'

function youtubeId(url) {
  try {
    const u = new URL(url)
    const host = u.hostname.replace(/^www\.|^m\./, '')
    if (host === 'youtu.be') return u.pathname.slice(1) || null
    if (host === 'youtube.com' || host === 'youtube-nocookie.com') {
      if (u.searchParams.get('v')) return u.searchParams.get('v')
      const match = u.pathname.match(/^\/(?:embed|shorts|live)\/([\w-]{6,})/)
      return match ? match[1] : null
    }
  } catch {
    return null
  }
  return null
}

function formatYear(year) {
  if (year === null || year === undefined || year === '') return null
  return year < 0 ? `${Math.abs(year)} р. до н. е.` : `${year} р.`
}

function Gallery({ images, name }) {
  const [active, setActive] = useState(0)

  if (!images.length) {
    return (
      <div className="object-gallery object-gallery--empty">
        <div className="object-image-placeholder">
          <span aria-hidden="true">▧</span>
          <span>Фото поки відсутнє</span>
        </div>
      </div>
    )
  }

  const current = images[Math.min(active, images.length - 1)]

  return (
    <div className="object-gallery">
      <figure className="object-figure">
        <img src={current.url} alt={`${name} — фото`} className="object-image" loading="lazy" decoding="async" />
        <figcaption className="object-credit">
          Фото: {current.author || 'автор невідомий'}
          {current.license && <>, {current.license}</>}
          {current.sourceUrl && (
            <>
              {' · '}
              <a href={current.sourceUrl} target="_blank" rel="noreferrer">
                Wikimedia Commons ↗
              </a>
            </>
          )}
        </figcaption>
      </figure>
      {images.length > 1 && (
        <div className="object-thumbs" role="list">
          {images.map((image, index) => (
            <button
              key={image.url}
              type="button"
              role="listitem"
              className={`object-thumb${index === active ? ' is-active' : ''}`}
              onClick={() => setActive(index)}
              aria-label={`Фото ${index + 1} з ${images.length}`}
              aria-current={index === active}
            >
              <img src={image.url} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function Videos({ videos }) {
  if (!videos.length) return null
  return (
    <section className="object-section">
      <h3>Відео</h3>
      <div className="object-videos">
        {videos.map((video) => {
          const id = youtubeId(video.url)
          return id ? (
            <figure key={video.url} className="object-video">
              <div className="object-video__frame">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${id}`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <figcaption>{video.title}</figcaption>
            </figure>
          ) : (
            <a key={video.url} href={video.url} target="_blank" rel="noreferrer" className="object-link">
              ▶ {video.title} ↗
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default function ObjectModal({ object, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!object) return
    const previouslyFocused = document.activeElement

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
      previouslyFocused?.focus?.()
    }
  }, [object, onClose])

  if (!object) return null

  const images = (object.images || []).filter((image) => image && typeof image === 'object' && image.url)
  const videos = (object.videos || []).filter((video) => video?.url)
  const sources = (object.sources || []).filter((source) => source?.url)
  const typeInfo = getTypeInfo(object.type)
  const categoryInfo = getCategoryInfo(object.category)
  const place = [object.city, object.region, object.country].filter(Boolean).join(', ')
  const year = formatYear(object.year)

  const facts = [
    ['Дата події', object.eventDate],
    ['Рік створення', object.openingDate || year],
    ['Регіон', object.region],
    ['Автор', object.author],
    ['Архітектор', object.architect]
  ].filter(([, value]) => value)

  return (
    <div className="object-overlay" onClick={onClose}>
      <article
        className="object-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="object-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button ref={closeRef} type="button" className="object-close" onClick={onClose} aria-label="Закрити">
          ✕
        </button>

        <div className="object-content">
          <Gallery key={object.id} images={images} name={object.name} />

          <div className="object-info">
            <div className="object-tags">
              <span className="object-tag" style={{ '--tag-color': categoryInfo.color }}>
                {categoryInfo.label}
              </span>
              <span className="object-tag object-tag--plain">{object.subtype || typeInfo.label}</span>
              {object.forgotten && <span className="object-tag object-tag--forgotten">★ Забутий герой</span>}
              {object.isOsm && <span className="object-tag object-tag--warning">Дані з OpenStreetMap, не перевірено</span>}
            </div>

            <h2 id="object-modal-title">{object.name}</h2>

            <p className="object-meta">
              {[year, place].filter(Boolean).join(' · ')}
            </p>

            {object.person && <p className="object-person">{object.person}</p>}

            {object.forgotten && object.whyForgotten && (
              <section className="object-section object-forgotten">
                <h3>Чому забуті</h3>
                <p>{object.whyForgotten}</p>
              </section>
            )}

            {object.description && (
              <section className="object-section">
                <h3>Про пам’ятку</h3>
                <p>{object.description}</p>
              </section>
            )}

            {object.history && (
              <section className="object-section">
                <h3>Історична довідка</h3>
                <p>{object.history}</p>
              </section>
            )}

            {object.significance && (
              <section className="object-section">
                <h3>Значення</h3>
                <p>{object.significance}</p>
              </section>
            )}

            {facts.length > 0 && (
              <dl className="object-facts">
                {facts.map(([label, value]) => (
                  <div key={label} className="object-fact">
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            )}

            <Videos videos={videos} />

            {sources.length > 0 && (
              <section className="object-section">
                <h3>Джерела</h3>
                <ol className="object-sources">
                  {sources.map((source) => (
                    <li key={source.url}>
                      <a href={source.url} target="_blank" rel="noreferrer" className="object-link">
                        {source.title} ↗
                      </a>
                    </li>
                  ))}
                </ol>
              </section>
            )}
          </div>
        </div>
      </article>
    </div>
  )
}
