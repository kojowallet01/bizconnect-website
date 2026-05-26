import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#process', label: 'Process' },
  { href: '#team', label: 'Team' },
  { href: '#faq', label: 'FAQ' },
  { href: '#enquiry', label: 'Contact' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <motion.header
      className="site-header"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container header-inner">
        <a href="#" className="logo" aria-label="Bizconnect Technologies home">
          <img src="/logo.png" alt="Bizconnect Technologies – Web design and digital marketing Ghana" className="logo-icon" />
          <span className="logo-text">
            <span className="logo-name">BIZCONNECT</span>
            <span className="logo-sub">TECHNOLOGIES</span>
          </span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className={`menu-icon ${menuOpen ? 'is-open' : ''}`} />
          <span className="menu-text">{menuOpen ? 'Close' : 'Menu'}</span>
        </button>

        <nav className={`nav ${menuOpen ? 'is-open' : ''}`} id="main-nav" aria-label="Main">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="nav-link"
            >
              {label}
            </a>
          ))}
          <a href="#enquiry" className="btn btn-primary btn-small nav-cta" onClick={() => setMenuOpen(false)}>
            Get started
          </a>
        </nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMenuOpen(false)}
            aria-hidden
          />
        )}
      </AnimatePresence>
    </motion.header>
  )
}
