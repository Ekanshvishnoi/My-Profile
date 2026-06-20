import { useState, useEffect } from 'react'

// Cycles through an array of words, typing and deleting each one
export default function useTypewriter(words, typingSpeed = 90, deletingSpeed = 45, pauseTime = 1400) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex % words.length]
    let timeout

    if (!isDeleting && text === currentWord) {
      // finished typing the word, pause then start deleting
      timeout = setTimeout(() => setIsDeleting(true), pauseTime)
    } else if (isDeleting && text === '') {
      // finished deleting, move to next word
      setIsDeleting(false)
      setWordIndex((prev) => prev + 1)
    } else {
      const nextText = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1)

      timeout = setTimeout(() => setText(nextText), isDeleting ? deletingSpeed : typingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime])

  return text
}