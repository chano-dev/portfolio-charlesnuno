import { useEffect } from 'react'
import { useLanguage } from '../../context/LanguageContext'

export default function Lightbox({ item, onClose }) {
  const { t } = useLanguage()

  useEffect(() => {
    if (!item) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [item, onClose])

  if (!item) return null

  const isVideo = item.type === 'video'
  const isArchive = Boolean(item.maps)
  const skills = item.skills ?? []

  const boxClass = [
    'lightbox',
    isVideo && 'lightbox--video',
    !isVideo && !isArchive && 'lightbox--contain',
  ].filter(Boolean).join(' ')

  return (
    <div className={boxClass} role="dialog" aria-modal="true" aria-label="Expanded item">
      <div className="lightbox__backdrop" onClick={onClose}></div>

      <div className="lightbox__box">
        <button type="button" className="lightbox__close" aria-label="Close" onClick={onClose} autoFocus>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {isVideo ? (
          <iframe
            className="lightbox__video"
            src={`https://www.youtube-nocookie.com/embed/${item.youtube}?autoplay=1`}
            title={item.evento}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <img className="lightbox__img" src={item.img} alt={item.alt} />
        )}

        <div className="lightbox__info">
          <div className="lightbox__meta">
            {isArchive ? (
              <a className="lightbox__local" href={item.maps} target="_blank" rel="noopener noreferrer">
                {item.local}
              </a>
            ) : (
              <span className="lightbox__contexto">{item.contexto}</span>
            )}
            <span className="lightbox__sep" aria-hidden="true">·</span>
            <span className="lightbox__ano">{item.ano}</span>
          </div>

          <p className="lightbox__evento">{item.evento}</p>
          <p className="lightbox__descricao">{item.descricao}</p>

          {item.link && (
            <a className="lightbox__link" href={item.link} target="_blank" rel="noopener noreferrer">
              {item.linkLabel ?? t('work.open_link')}
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