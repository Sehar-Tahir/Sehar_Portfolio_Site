import { RiCloseLine, RiMenu2Line } from '@remixicon/react'
import { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

const links = [
  { label: 'Home', href: '#Home' },
  { label: 'About', href: '#About' },
  { label: 'Skills', href: '#Skills' },
  { label: 'Work', href: '#Projects' },
  { label: 'Experience', href: '#Experience' },
  { label: 'Education', href: '#Education' },
  { label: 'Contact', href: '#Contact' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    document.documentElement.classList.remove('dark', 'light')
    document.documentElement.classList.add(theme)
  }, [theme])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('theme', next)
  }

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-paper/80 dark:bg-base/80 backdrop-blur-md border-b border-ink/5 dark:border-base-line'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-14 py-4">
        {/* Logo */}
        <a href="#Home" className="flex items-center gap-2 group">
          <span className="w-2 h-2 rounded-full bg-signal group-hover:animate-pulse" />
          <span className="font-display text-lg font-semibold tracking-tight text-ink dark:text-mist">
            Sehar<span className="text-accent">.</span>Tahir
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1 font-mono text-xs text-ink-muted dark:text-mist-muted">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-2 rounded-full hover:text-accent dark:hover:text-accent-soft hover:bg-accent/5 transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-ink/10 dark:border-base-line text-ink dark:text-mist hover:border-accent hover:text-accent transition-all duration-200"
          >
            {theme === 'dark' ? <FaSun size={14} /> : <FaMoon size={14} />}
          </button>

          <a
            href="#Contact"
            className="hidden md:inline-flex font-mono text-xs px-4 py-2 rounded-full bg-accent text-white hover:bg-accent-strong transition-colors duration-200 shadow-glowSm"
          >
            Let&#39;s talk        </a>

          <button
            className="md:hidden w-9 h-9 flex items-center justify-center text-ink dark:text-mist"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <RiCloseLine size={24} /> : <RiMenu2Line size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 bg-paper/95 dark:bg-base/95 backdrop-blur-md border-b border-ink/5 dark:border-base-line">
          <ul className="flex flex-col gap-1 font-mono text-sm text-ink-muted dark:text-mist-muted">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg hover:text-accent hover:bg-accent/5 transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
