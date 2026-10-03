import { useState } from 'react'

export default function Gallery({ tabs, items, label, onSelect }) {
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  const visible = items.filter((item) => item.tab === activeTab)

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
            onClick={() => setActiveTab(t.id)}
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
              aria-label={`${item.local}, ${item.ano}`}
              onClick={() => onSelect(item)}
            >
              <img src={item.img} alt={item.alt} loading="lazy" />
            </button>
          </div>
        ))}
      </div>
    </>
  )
}