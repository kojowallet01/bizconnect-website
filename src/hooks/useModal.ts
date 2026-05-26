import { useState, useEffect } from 'react'

export function useModal() {
  const [isOpen, setIsOpen] = useState(false)

  function open() { setIsOpen(true) }
  function close() { setIsOpen(false) }

  useEffect(() => {
    if (!isOpen) return
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return { isOpen, open, close }
}
