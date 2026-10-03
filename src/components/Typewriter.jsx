import { useState, useEffect } from 'react'

// Fora do componente: não precisa ser recriado a cada render
const texts = [
  'Relaxa, aqui qualquer escolha é a certa.',
  'Relax, any choice here is the right one.',
  'Détends-toi, ici, tout choix est le bon.',
  '放轻松，在这里，怎么选都对。',
]

export default function Typewriter() {
  const [textIndex, setTextIndex] = useState(0)   // qual frase
  const [charIndex, setCharIndex] = useState(0)   // quantas letras visíveis
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[textIndex]
    const isFull = charIndex === currentText.length

    // pausa de 1.5s quando a frase está completa
    let delay = isDeleting ? 50 : 100
    if (!isDeleting && isFull) delay = 1500

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (isFull) setIsDeleting(true)
        else setCharIndex(charIndex + 1)
      } else {
        if (charIndex === 0) {
          setIsDeleting(false)
          setTextIndex((textIndex + 1) % texts.length)
        } else {
          setCharIndex(charIndex - 1)
        }
      }
    }, delay)

    return () => clearTimeout(timer) // limpeza
  }, [charIndex, isDeleting, textIndex])

  return (
    <p className="cards-label typewriter">
      <span id="text">{texts[textIndex].substring(0, charIndex)}</span>
      <span className="cursor">|</span>
    </p>
  )
}