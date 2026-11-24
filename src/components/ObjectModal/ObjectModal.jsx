
import { useEffect } from "react";
import "./ObjectModal.css";

export default function ObjectModal({ object, onClose }) {
  useEffect(() => {
    if (!object) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [object, onClose]);

  if (!object) return null;

const images = [
  ...(object.imageUrl ? [object.imageUrl] : []),
  ...(object.images || []),
];

  return (
    <div className="object-overlay" onClick={onClose}>
      <article
        className="object-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="object-close" onClick={onClose}>
          ✕
        </button>

        <div className="object-content">
          <div className="object-gallery">
            {images.length > 0 ? (
              images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={object.name}
                  className="object-image"
                />
              ))
            ) : (
              <div className="object-image-placeholder">
                <span>Фото поки відсутнє</span>
              </div>
            )}
          </div>

          <div className="object-info">
            <div className="object-tags">
              <span className="object-tag">
                {object.category || object.type || "Пам'ятка"}
              </span>
              {object.year && (
                <span className="object-tag">{object.year}</span>
              )}
            </div>

            <h2>{object.name}</h2>

            {object.person && (
              <p className="object-person">{object.person}</p>
            )}

            <div className="object-location">
              <span>📍</span>
              {object.city}, {object.country}
            </div>

            {object.description && (
              <section className="object-section">
                <h3>Про пам'ятку</h3>
                <p>{object.description}</p>
              </section>
            )}

            {object.history && (
              <section className="object-section">
                <h3>Історична довідка</h3>
                <p>{object.history}</p>
              </section>
            )}

            {object.video && (
              <section className="object-section">
                <h3>Відео</h3>
                <a href={object.video} target="_blank" rel="noreferrer">
                  Переглянути відео ↗
                </a>
              </section>
            )}

            {object.sourceUrl && (
              <a
                className="object-source"
                href={object.sourceUrl}
                target="_blank"
                rel="noreferrer"
              >
                Джерело інформації ↗
              </a>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}
