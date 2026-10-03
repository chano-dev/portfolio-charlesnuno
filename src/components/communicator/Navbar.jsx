import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/co" className="navbar__logo" aria-label="Back to top of the Communicator portfolio">
        <span className="navbar__logo-icon icon-communication" aria-hidden="true"></span>
        <h1 className="navbar__logo-name">Communicator</h1>
      </Link>

      <div className="navbar__controls" role="toolbar" aria-label="Page controls">
        {/* Idioma e tema entram mais tarde */}
        <Link to="/" className="navbar__btn navbar__btn--exit" aria-label="Exit to the homepage">
          <span className="btn-label">Exit</span>
          <span aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
          </span>
        </Link>
      </div>
    </header>
  )
}