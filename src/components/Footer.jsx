import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const footerLinks = [
    { label: 'Home', href: '/', isRoute: true },
    { label: 'About Us', href: '/about', isRoute: true },
    { label: 'Products', href: '/glove-box', isRoute: true },
    { label: 'Gallery', href: '/gallery', isRoute: true },
    { label: 'Career', href: '/career', isRoute: true },
    { label: 'Contact', href: '/contact', isRoute: true },
  ]

  const productLinks = [
    { label: 'Glove Box', href: '/glove-box', isRoute: true },
    { label: 'Vacuum Induction Furnace', href: '/vacuum-induction-furnace', isRoute: true },
    { label: 'Vacuum Arc Melting Furnace', href: '/vacuum-arc-melting-furnace', isRoute: true },
    { label: 'Thermal Evaporator System', href: '/thermal-evaporator-system', isRoute: true },
    { label: 'RF/DC Sputtering System', href: '/rf-dc-sputtering-system', isRoute: true },
  ]

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo-link">
            <img src="/vec-logo1-removebg-preview.png" alt="VEC Solutions" className="footer__logo" />
          </Link>
          <p className="footer__copyright">
            2024 @ All rights reserved. Design By: Punarapi Technologies
          </p>
        </div>

        <div className="footer__section">
          <h3 className="footer__section-title">Quick Links</h3>
          <nav className="footer__links">
            {footerLinks.map((link) => (
              link.isRoute ? (
                <Link key={link.label} to={link.href} className="footer__link">
                  {link.label}
                </Link>
              ) : (
                <a key={link.label} href={link.href} className="footer__link">
                  {link.label}
                </a>
              )
            ))}
          </nav>
        </div>

        <div className="footer__section">
          <h3 className="footer__section-title">Products</h3>
          <nav className="footer__links">
            {productLinks.map((link) => (
              link.isRoute ? (
                <Link key={link.label} to={link.href} className="footer__link">
                  {link.label}
                </Link>
              ) : (
                <a key={link.label} href={link.href} className="footer__link">
                  {link.label}
                </a>
              )
            ))}
          </nav>
        </div>

        <div className="footer__section footer__section--newsletter">
          <h3 className="footer__section-title">Newsletter</h3>
          <p className="footer__newsletter-text">
            You will be notified when something new appears.
          </p>
          <form className="footer__newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email" 
              aria-label="Newsletter email"
              className="footer__newsletter-input"
            />
            <button type="button" className="footer__newsletter-button">
              Notify me
            </button>
          </form>
          <div className="footer__social">
            <h4 className="footer__social-title">Follow Us</h4>
            <ul className="footer__social-list">
              <li>
                <a 
                  href="https://www.facebook.com/vecsolution/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label="Facebook"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  href="https://x.com/VecSolutions/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label="Twitter"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/company/vecsolutions" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label="LinkedIn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/vecsolutionss?igsh=MTVyam93aGJ3d3Vhag" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label="Instagram"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

