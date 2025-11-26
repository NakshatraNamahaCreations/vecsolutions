import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { label: 'Home', href: '/', isRoute: true },
  { label: 'About Us', href: '/about', isRoute: true },
  {
    label: 'Products',
    subLinks: [
      { label: 'Glove Box', href: '/glove-box', isRoute: true },
      { label: 'Vacuum Induction Furnace', href: '/vacuum-induction-furnace', isRoute: true },
      { label: 'Vacuum Arc Melting Furnace', href: '/vacuum-arc-melting-furnace', isRoute: true },
      { label: 'Thermal Evaporator System', href: '/thermal-evaporator-system', isRoute: true },
      { label: 'RF/DC Sputtering System', href: '/rf-dc-sputtering-system', isRoute: true },
    ],
  },
  { label: 'Gallery', href: '/gallery', isRoute: true },
  { label: 'Career', href: '/career', isRoute: true },
  { label: 'Contact', href: '/contact', isRoute: true },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Close menu when clicking outside
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeMenu()
    }
  }

  // Handle scroll to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset
      // Change to white background after scrolling past hero section (approximately 100vh)
      setIsScrolled(scrollPosition > window.innerHeight * 0.8)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial state

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand" aria-label="VEC Solutions home" onClick={closeMenu}>
          <img src="/vec-logo1.png" alt="VEC Solutions logo" className="navbar__logo" />
        </Link>
        <button
          className="navbar__toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="navbar__toggle-icon">
            <span className={`navbar__toggle-line ${isMenuOpen ? 'navbar__toggle-line--open' : ''}`}></span>
            <span className={`navbar__toggle-line ${isMenuOpen ? 'navbar__toggle-line--open' : ''}`}></span>
            <span className={`navbar__toggle-line ${isMenuOpen ? 'navbar__toggle-line--open' : ''}`}></span>
          </span>
        </button>
        {isMenuOpen && (
          <div className="navbar__overlay" onClick={handleOverlayClick} aria-hidden="true" />
        )}
        <nav className={`navbar__menu ${isMenuOpen ? 'navbar__menu--open' : ''}`} aria-label="Primary">
          {navLinks.map((link) => {
            if (!link.subLinks) {
              if (link.isRoute) {
                return (
                  <Link key={link.label} to={link.href} className="navbar__link" onClick={closeMenu}>
                    {link.label}
                  </Link>
                )
              }
              return (
                <a key={link.label} href={link.href} className="navbar__link" onClick={closeMenu}>
                  {link.label}
                </a>
              )
            }

            return (
              <div key={link.label} className="navbar__dropdown">
                <button className="navbar__link navbar__link--trigger" type="button" aria-haspopup="true">
                  {link.label}
                  <span aria-hidden="true" className="navbar__chevron">
                    ▾
                  </span>
                </button>
                <div className="navbar__dropdown-menu" role="menu">
                  {link.subLinks.map((subLink) => (
                    subLink.isRoute ? (
                      <Link key={subLink.label} to={subLink.href} className="navbar__dropdown-link" role="menuitem" onClick={closeMenu}>
                        {subLink.label}
                      </Link>
                    ) : (
                      <a key={subLink.label} href={subLink.href} className="navbar__dropdown-link" role="menuitem" onClick={closeMenu}>
                        {subLink.label}
                      </a>
                    )
                  ))}
                </div>
              </div>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
