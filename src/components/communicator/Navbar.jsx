import { Link } from 'react-router-dom'
import ThemeButton from '../shared/ThemeButton'
import LangButton from '../shared/LangButton'
import { useLanguage } from '../../context/LanguageContext'

export default function Navbar({
  menuOpen,
  onMenuToggle,
  homePath = '/co',
  iconClass = 'icon-communication',
  titleKey = 'nav.title',
}) {
  const { t } = useLanguage()

  return (
    <>
     <header className="navbar">
      <Link to={homePath} className="navbar__logo" aria-label="Back to top of the portfolio">
        <span className={`navbar__logo-icon ${iconClass}`} aria-hidden="true"></span>
        <h1 className="navbar__logo-name">{t(titleKey)}</h1>
      </Link>

      <div className="navbar__controls" role="toolbar" aria-label="Page controls">
        <LangButton />
        <ThemeButton />
        <Link to="/" className="navbar__btn navbar__btn--exit" aria-label="Exit to the homepage">
          <span className="btn-label">{t('nav.exit')}</span>
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

      <div className="navbar__mobile" role="toolbar" aria-label="Mobile controls">
        <button
          type="button"
          className="navbar__btn navbar__btn--menu"
          id="btn-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="drawer"
          onClick={onMenuToggle}
        >
          <svg className="icon-menu" width="22" height="22" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2" strokeLinecap="round"
               strokeLinejoin="round" aria-hidden="true">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          <svg className="icon-close" width="22" height="22" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2" strokeLinecap="round"
               strokeLinejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <LangButton short />
        <Link to="/" className="navbar__btn navbar__btn--exit" aria-label="Exit">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
        </Link>
      </div>
    </>
  )
}