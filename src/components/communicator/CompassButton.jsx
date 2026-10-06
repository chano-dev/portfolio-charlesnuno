import { useState, useEffect } from 'react'
import useMediaQuery from '../../hooks/useMediaQuery'

export default function CompassButton({ activeSection }) {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (isDesktop) {
      setVisible(false)
      return
    }
    const card = document.getElementById(`toc-mobile-${activeSection}`)
    if (!card) return

    // Visível só quando o cartão do índice NÃO está no ecrã
    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting))
    observer.observe(card)
    return () => observer.disconnect()
  }, [activeSection, isDesktop])

  const goToToc = () => {
    document
      .getElementById(`toc-mobile-${activeSection}`)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <button
      type="button"
      className={`compass-btn ${visible ? 'is-visible' : ''}`}
      id="compass-btn"
      aria-label="Back to the on-page index"
      hidden={!visible}
      onClick={goToToc}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
           strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    </button>
  )
}