import { useState, useEffect, useRef } from 'react'
import { QUOTES } from '../../data/quotes'
import useMediaQuery from '../../hooks/useMediaQuery'

const INTERVAL = 5000

export default function Quotes() {
  const [index, setIndex] = useState(0)
  const [step, setStep] = useState(0) // largura de um item + gap, em px (desktop)
  const trackRef = useRef(null)

  // Mede a largura de um item (precisa do DOM, por isso é um effect)
  useEffect(() => {
    const measure = () => {
      const track = trackRef.current
      if (!track) return
      const first = track.querySelector('.quote-item')
      const gap = parseFloat(getComputedStyle(track).gap) || 0
      setStep(first ? first.offsetWidth + gap : 0)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  // Avança de 5 em 5 segundos, em loop
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % QUOTES.length)
    }, INTERVAL)
    return () => clearInterval(timer)
  }, [])

const isDesktop = useMediaQuery('(min-width: 768px)')
  const transform = isDesktop
    ? `translateX(-${index * step}px)`
    : `translateX(-${index * 100}%)`

  return (
    <div className="quotes-carousel" role="region" aria-label="Inspiration quotes">
      <div
        ref={trackRef}
        className="quotes-track"
        style={{ transform, transition: 'transform 700ms ease-in-out' }}
      >
        {QUOTES.map((q) => (
          <figure key={q.id} className="quote-item">
            <blockquote className="quote-item__text">{q.text}</blockquote>
            <figcaption className="quote-item__author">— {q.author}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}