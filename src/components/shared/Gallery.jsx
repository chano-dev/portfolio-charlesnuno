import { useState } from 'react'
import useMediaQuery from '../../hooks/useMediaQuery'
import { useLanguage } from '../../context/LanguageContext'
import PhotoTabs from './PhotoTabs'
import GalleryItem from './GalleryItem'

export default function Gallery({ tabs, items, label, onSelect, hideTabs = false }) {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const [expanded, setExpanded] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const max = isDesktop ? 6 : 4
  const tabItems = items.filter((item) => item.tab === activeTab)
  const visible = expanded ? tabItems : tabItems.slice(0, max)

  const changeTab = (id) => {
    setActiveTab(id)
    setExpanded(false)
  }

  return (
    <>
      <PhotoTabs
        tabs={tabs}
        activeTab={activeTab}
        onChange={changeTab}
        label={label}
        hideTabs={hideTabs}
      />

      <div className="photo-grid" role="list" aria-label={`${label} gallery`}>
        {visible.map((item) => (
          <GalleryItem key={item.id} item={item} onSelect={onSelect} />
        ))}
      </div>

      {tabItems.length > max && (
        <button
          type="button"
          className="photo-more-btn"
          aria-expanded={expanded}
          onClick={() => setExpanded(!expanded)}
        >
          <span className="photo-more-btn__label">
            {t(expanded ? 'gallery.see_less' : 'gallery.see_more')}
          </span>
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