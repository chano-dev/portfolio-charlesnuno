import { Link } from 'react-router-dom'

export default function PortfolioCard({ id, title, to, img, imgAlt, desc }) {
  return (
    <article className={`portfolio-card card--${id}`}>
      <Link to={to} className="card-link" aria-label={`Open ${title} portfolio`}>
        <div className="card-bg-map" aria-hidden="true"></div>
        <div className="card-content">
          <header className="card-header">
            <span className={`card-icon icon-${id}`} aria-hidden="true"></span>
            <h2 className="card-title">{title}</h2>
          </header>
          <div className="card-image-wrap">
            <img src={img} alt={imgAlt} className="card-image" loading="lazy" />
          </div>
          <p className="card-desc">{desc}</p>
        </div>
      </Link>
    </article>
  )
}
