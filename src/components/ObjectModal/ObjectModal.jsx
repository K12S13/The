import { useEffect } from 'react'
import './ObjectModal.css'

function getVideoEmbedUrl(rawUrl) {
  try {
    const url = new URL(rawUrl)
    const host = url.hostname.replace(/^www\./, '')
    let videoId = ''

    if (host === 'youtu.be') {
      videoId = url.pathname.slice(1)
    } else if (
      host === 'youtube.com' ||
      host === 'm.youtube.com' ||
      host === 'youtube-nocookie.com'
    ) {
      videoId =
        url.searchParams.get('v') ||
        url.pathname.match(/\/(?:embed|shorts)\/([^/?]+)/)?.[1] ||
        ''
    }

    if (videoId && /^[\w-]+$/.test(videoId)) {
      return `https://www.youtube-nocookie.com/embed/${videoId}`
    }

    if (host === 'vimeo.com' || host === 'player.vimeo.com') {
      const vimeoId = url.pathname.match(/\/(?:video\/)?(\d+)/)?.[1]

      if (vimeoId) {
        return `https://player.vimeo.com/video/${vimeoId}`
      }
    }

    return null
  } catch {
    return null
  }
}

function InfoItem({ label, value }) {
  if (!value) return null

  return (
    <div className="object-modal__info-item">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

export default function ObjectModal({ object, onClose }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow

    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  if (!object) return null

  const images = Array.isArray(object.images) ? object.images : []
  const videos = Array.isArray(object.videos) ? object.videos : []
  const sources = Array.isArray(object.sources) ? object.sources : []

  const validSources = sources.filter((source) => {
    const url = typeof source === 'string' ? source : source?.url

    try {
      return ['http:', 'https:'].includes(new URL(url).protocol)
    } catch {
      return false
    }
  })

  return (
    <div
      className="object-modal__backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section
        className="object-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="object-modal-title"
      >
        <header className="object-modal__header">
          <div>
            <span className="object-modal__eyebrow">
              ІНФОРМАЦІЯ ПРО ОБ'ЄКТ
            </span>
            <h2 id="object-modal-title">{object.name}</h2>
            <p>
              {[object.city, object.country].filter(Boolean).join(', ')}
            </p>
          </div>

          <button
            className="object-modal__close"
            type="button"
            onClick={onClose}
            aria-label="Закрити"
          >
            ×
          </button>
        </header>

        <div className="object-modal__content">
          {images.length > 0 && (
            <section className="object-modal__section">
              <div className="object-modal__gallery">
                {images.map((image, index) => (
                  <img
                    key={`${image}-${index}`}
                    src={image}
                    alt={`${object.name} — фото ${index + 1}`}
                    loading="lazy"
                  />
                ))}
              </div>
            </section>
          )}

          <section className="object-modal__section">
            <h3>Про об'єкт</h3>
            <p className="object-modal__description">
              {object.history || object.description || 'Опис поки не додано.'}
            </p>
          </section>

          <section className="object-modal__section">
            <h3>Характеристики</h3>
            <div className="object-modal__info-grid">
              <InfoItem label="Персона" value={object.person} />
              <InfoItem label="Тип" value={object.type} />
              <InfoItem label="Рік створення" value={object.year} />
              <InfoItem label="Дата відкриття" value={object.openingDate} />
              <InfoItem label="Скульптор" value={object.author} />
              <InfoItem label="Архітектор" value={object.architect} />
              <InfoItem
                label="Місце розташування"
                value={[object.city, object.country].filter(Boolean).join(', ')}
              />
            </div>
          </section>

          {videos.length > 0 && (
            <section className="object-modal__section">
              <h3>Відео</h3>
              <div className="object-modal__videos">
                {videos.map((video, index) => {
                  const url = typeof video === 'string' ? video : video.url
                  const embedUrl = getVideoEmbedUrl(url)

                  if (!embedUrl) return null

                  return (
                    <article
                      className="object-modal__video"
                      key={`${url}-${index}`}
                    >
                      <div className="object-modal__video-frame">
                        <iframe
                          src={embedUrl}
                          title={video.title || `Відео ${index + 1}`}
                          loading="lazy"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      </div>

                      {video.title && <p>{video.title}</p>}
                    </article>
                  )
                })}
              </div>
            </section>
          )}

          {validSources.length > 0 && (
            <section className="object-modal__section">
              <h3>Джерела та матеріали</h3>
              <ul className="object-modal__sources">
                {validSources.map((source, index) => {
                  const url = typeof source === 'string' ? source : source.url
                  const title =
                    typeof source === 'string'
                      ? `Джерело ${index + 1}`
                      : source.title || `Джерело ${index + 1}`

                  return (
                    <li key={`${url}-${index}`}>
                      <a href={url} target="_blank" rel="noreferrer">
                        {title} ↗
                      </a>
                    </li>
                  )
                })}
              </ul>
            </section>
          )}

          {object.sourceUrl && (
            <footer className="object-modal__footer">
              <a href={object.sourceUrl} target="_blank" rel="noreferrer">
                Переглянути основне джерело ↗
              </a>
              {object.isOsm && <span>Дані координат: OpenStreetMap</span>}
            </footer>
          )}
        </div>
      </section>
    </div>
  )
}
