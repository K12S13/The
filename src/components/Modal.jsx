import { useEffect, useId, useRef } from 'react'

// Спільний каркас модалки: затемнення, Esc, фокус на «Закрити» і повернення фокусу.
export default function Modal({ title, onClose, children, className = '' }) {
  const closeRef = useRef(null)
  const titleId = useId()

  useEffect(() => {
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
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <article
        className={`modal ${className}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <header className="modal__header">
          <h2 id={titleId} className="modal__title">
            {title}
          </h2>
          <button ref={closeRef} type="button" className="modal__close" onClick={onClose} aria-label="Закрити">
            ✕
          </button>
        </header>
        <div className="modal__body">{children}</div>
      </article>
    </div>
  )
}
