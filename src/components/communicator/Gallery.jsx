import { useState } from 'react'
import useMediaQuery from '../../hooks/useMediaQuery'

export default function Gallery({ tabs, items, label, onSelect }) {
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const [expanded, setExpanded] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const max = isDesktop ? 6 : 4
  const tabItems = items.filter((item) => item.tab === activeTab)
  const visible = expanded ? tabItems : tabItems.slice(0, max)

  const changeTab = (id) => {
    setActiveTab(id)
    setExpanded(false) // cada aba começa recolhida
  }

  return (
    <>
      <div className="photo-tabs" role="tablist" aria-label={label}>
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            className={`photo-tab ${activeTab === t.id ? 'is-active' : ''}`}
            aria-selected={activeTab === t.id}
            onClick={() => changeTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="photo-grid" role="list" aria-label={`${label} gallery`}>
        {visible.map((item) => (
          <div key={item.id} className="photo-grid__item-wrap" role="listitem">
            <button
              type="button"
              className="photo-grid__item"
              aria-label={item.local ? `${item.local}, ${item.ano}` : `${item.evento}, ${item.ano}`}
              onClick={() => onSelect(item)}
            >
              <img src={item.img} alt={item.alt} loading="lazy" />
              {item.type === 'video' && (
                <span className="photo-grid__play" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="11" fill="rgba(0,0,0,0.55)" />
                    <polygon points="10 8 17 12 10 16" fill="#fff" />
                  </svg>
                </span>
              )}
            </button>
          </div>
        ))}
      </div>

      {tabItems.length > max && (
        <button
          type="button"
          className="photo-more-btn"
          aria-expanded={expanded}
          onClick={() => setExpanded(!expanded)}
        >
          <span className="photo-more-btn__label">{expanded ? 'See less' : 'See more'}</span>
          <svg className="photo-more-btn__icon" width="16" height="16" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" strokeWidth="2.5"
               strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      )}
    </>
  )
}