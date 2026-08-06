import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import tawidLogo from '../assets/tawid.svg'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLDivElement>(null)

  const toggle = () => setIsOpen(!isOpen)
  const close = () => setIsOpen(false)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node) && 
          toggleRef.current && !toggleRef.current.contains(e.target as Node)) {
        close()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => close(), [location])

  // Lock background scroll while the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const links = [
    { name: 'Home', hash: '#home' },
    { name: 'Features', hash: '#features' },
    { name: 'Booking', hash: '#booking' },
    { name: 'Pricing', hash: '#pricing' },
    { name: 'Partnership', hash: '#partnership' },  // ← IDINAGDAG
    { name: 'About', hash: '#about' },
    { name: 'Contacts', hash: '#contacts' },
  ]

  const handleClick = (link: { name: string; hash: string }) => {
    if (location.pathname === '/') {
      const el = document.querySelector(link.hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
    close()
  }

  return (
    <header>
      <div className="container">
        <nav>
          <Link to="/" className="logo">
            <img src={tawidLogo} alt="Tawid" className="logo-img" />
          </Link>
          
          <div className="mobile-toggle" onClick={toggle} ref={toggleRef}>
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>

          <div className={`mobile-menu-container ${isOpen ? 'active' : ''}`} ref={menuRef}>
            <div className="menu-backdrop" onClick={close}></div>
            <div className="nav-links">
              {links.map((link) => (
                <Link key={link.name} to="/" onClick={() => handleClick(link)}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar