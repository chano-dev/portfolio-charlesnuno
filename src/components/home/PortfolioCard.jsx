import { Link } from 'react-router-dom'

export default function PortfolioCard({ id, title, to, img, imgAlt, desc }) {
  return (
    <article className={`card--${id}`}>
      <Link to={to} className="card-border" aria-label={`View ${title} portfolio`}>
        <div className="card-inner card">
          <div className="card-topbar">
            <span className={`card-icon icon-${id}`} aria-hidden="true"></span>
            <span className={`card-icon icon-${id}`} aria-hidden="true"></span>
          </div>

          <h3 className="card-title">{title}</h3>

          <div className="card-image-frame">
            <img className="card-svg" src={img} alt={imgAlt} />
          </div>

          <p className="card-desc">{desc}</p>

          <div className="card-bottombar">
            <span className={`card-icon icon-${id}`} aria-hidden="true"></span>
            <span className={`card-icon icon-${id}`} aria-hidden="true"></span>
          </div>
        </div>
      </Link>

      <Link to={to} className="btn-portfolio">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="3" />
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        </svg>
        See Portfolio
      </Link>
    </article>
  )
}
