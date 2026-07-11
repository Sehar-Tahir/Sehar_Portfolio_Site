import { useEffect, useState } from 'react'
import { LuArrowUp } from 'react-icons/lu'

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollUp}
      aria-label="Scroll to top"
      className={`fixed bottom-6 left-6 z-40 w-11 h-11 flex items-center justify-center rounded-full
        bg-accent text-white shadow-glowSm hover:bg-accent-strong transition-all duration-300
        ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      <LuArrowUp size={18} />
    </button>
  )
}

export default ScrollToTop