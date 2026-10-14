import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import tawidLogo from '../assets/tawid.svg'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  const close = () => setIsOpen(false)
  const toggle = () => setIsOpen(v => !v)

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        menuRef.current && !menuRef.current.contains(e.target as Node) &&
        toggleRef.current && !toggleRef.current.contains(e.target as Node)
      ) close()
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Close on route change
  useEffect(() => { close() }, [location])

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const links = [
    { name: 'Home', hash: '#home' },
    { name: 'Features', hash: '#features' },
    { name: 'Partnership', hash: '#partnership' },
    { name: 'Roadmap', hash: '#roadmap' },
    { name: 'About', hash: '#about' },
  ]

  const handleClick = (hash: string) => {
    if (location.pathname === '/') {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    }
    close()
  }

  return (
    <header>
      <div className="container">
        <nav>
          <Link to="/" className="logo" onClick={close} aria-label="Tawid home">
            <img src={tawidLogo} alt="Tawid" className="logo-img" />
          </Link>

          <button
            type="button"
            className="mobile-toggle"
            onClick={toggle}
            ref={toggleRef}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="primary-nav"
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`} aria-hidden="true" />
          </button>

          <div
            className={`mobile-menu-container ${isOpen ? 'active' : ''}`}
            ref={menuRef}
          >
            <div className="menu-backdrop" onClick={close} aria-hidden="true" />
            <div className="nav-links" id="primary-nav">
              {links.map(link => (
                <Link key={link.name} to="/" onClick={() => handleClick(link.hash)}>
                  {link.name}
                </Link>
              ))}

              <Link
                to="/"
                className="nav-cta"
                onClick={() => handleClick('#contacts')}
              >
                Get in touch
                <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar