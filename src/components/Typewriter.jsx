import { useState, useEffect } from 'react'

export default function Typewriter({
  texts,
  typeSpeed = 100,
  deleteSpeed = 50,
  pause = 1500,
  textId,
}) {
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[textIndex]
    const isFull = charIndex === currentText.length

    let delay = isDeleting ? deleteSpeed : typeSpeed
    if (!isDeleting && isFull) delay = pause

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (isFull) setIsDeleting(true)
        else setCharIndex(charIndex + 1)
      } else if (charIndex === 0) {
        setIsDeleting(false)
        setTextIndex((textIndex + 1) % texts.length)
      } else {
        setCharIndex(charIndex - 1)
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, textIndex, texts, typeSpeed, deleteSpeed, pause])

  return (
    <>
      <span id={textId}>{texts[textIndex].substring(0, charIndex)}</span>
      <span className="cursor" aria-hidden="true">|</span>
    </>
  )
}