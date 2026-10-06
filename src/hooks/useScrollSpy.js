import { useState, useEffect } from 'react'

export default function useScrollSpy(ids) {
  const key = ids.join(',') // string estável, evita reiniciar o efeito a cada render
  const [current, setCurrent] = useState(ids[0])

  useEffect(() => {
    const list = key.split(',')
    const elements = list.map((id) => document.getElementById(id)).filter(Boolean)
    if (!elements.length) return

    const update = () => {
      const line = window.innerHeight * 0.4
      let found = elements[0].id
      elements.forEach((el) => {
        if (el.getBoundingClientRect().top <= line) found = el.id
      })
      setCurrent(found)
    }

    update()
    // capture=true apanha o scroll de qualquer contentor (o card central tem scroll próprio)
    document.addEventListener('scroll', update, { capture: true, passive: true })
    window.addEventListener('resize', update)
    return () => {
      document.removeEventListener('scroll', update, { capture: true })
      window.removeEventListener('resize', update)
    }
  }, [key])

  return current
}