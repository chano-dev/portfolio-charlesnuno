import { useEffect } from 'react'

export default function Lightbox({ item, onClose }) {
  // Os hooks vêm SEMPRE antes de qualquer return condicional
  useEffect(() => {
    if (!item) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden' // bloqueia o scroll por trás

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [item, onClose])

  if (!item) return null

  const skills = item.skills ?? []

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Expanded item">
      <div className="lightbox__backdrop" onClick={onClose}></div>

      <div className="lightbox__box">
        <button type="button" className="lightbox__close" aria-label="Close" onClick={onClose} autoFocus>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <img className="lightbox__img" src={item.img} alt={item.alt} />

        <div className="lightbox__info">
          <div className="lightbox__meta">
            {item.maps && (
              <a className="lightbox__local" href={item.maps} target="_blank" rel="noopener noreferrer">
                {item.local}
              </a>
            )}
            {item.contexto && <span className="lightbox__contexto">{item.contexto}</span>}
            <span className="lightbox__sep" aria-hidden="true">·</span>
            <span className="lightbox__ano">{item.ano}</span>
          </div>

          <p className="lightbox__evento">{item.evento}</p>
          <p className="lightbox__descricao">{item.descricao}</p>

          {item.link && (
            <a className="lightbox__link" href={item.link} target="_blank" rel="noopener noreferrer">
              View project
            </a>
          )}

          {skills.length > 0 && (
            <div className="lightbox__skills">
              <p className="lightbox__skills-title">Skills &amp; Tools</p>
              <div className="lightbox__skills-pills">
                {skills.map((s) => (
                  <span key={s} className="skill-pill">{s}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}