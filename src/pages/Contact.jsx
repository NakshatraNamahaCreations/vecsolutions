import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Home.css'
import './About.css'
import './Contact.css'

function Contact() {
  useEffect(() => {
    const initAnimations = () => {
      const animatedElements = document.querySelectorAll('[data-animate]')
      
      if (animatedElements.length === 0) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add('is-visible')
              }, 50)
              observer.unobserve(entry.target)
            }
          })
        },
        { 
          threshold: 0.1,
          rootMargin: '0px 0px -100px 0px'
        }
      )

      animatedElements.forEach((el) => {
        observer.observe(el)
      })
    }

    const timeoutId = setTimeout(initAnimations, 100)
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <div className="app-shell">
      <Navbar />
      <main className="main">
        <section
          id="contact-hero"
          className="about-hero contact-hero"
        >
          <div className="about-hero__content about-hero__content--left">
            <h1 className="about-hero__title">
              <span className="about-hero__title-line">We're Here to Help</span>
            </h1>
            <p className="about-hero__subtitle">
              <span className="about-hero__subtitle-line">Reach out to our team for expert guidance, technical support, or to discuss your vacuum technology requirements.</span>
            </p>
          </div>
        </section>

        <div className="about-hero-spacer" />

        <section className="contact-content" data-animate="fade-up" data-delay="0.15s">
          <div className="contact-content__container">
            <header className="contact-content__header" data-animate="fade-up" data-delay="0.12s">
              <span className="contact-content__kicker">Contact With Us</span>
              <h1 className="contact-content__title">Call Us Or Fill The Form</h1>
              <p className="contact-content__lead">
                Get in touch with us for inquiries, support, or to learn more about our vacuum technology solutions.
              </p>
            </header>
            <div className="contact-layout">
              <div className="contact-form-section" data-animate="fade-right" data-delay="0.17s">
                <form method="post" className="contact-form" id="contact-form-main" noValidate>
                  <div className="form-field">
                    <input 
                      type="text" 
                      className="form-control" 
                      name="name" 
                      id="name" 
                      placeholder="Name*" 
                      required 
                    />
                  </div>
                  <div className="form-field">
                    <input 
                      type="email" 
                      className="form-control" 
                      name="email" 
                      id="email" 
                      placeholder="Email*" 
                      required 
                    />
                  </div>
                  <div className="form-field">
                    <input 
                      type="text" 
                      className="form-control" 
                      name="phone" 
                      id="phone" 
                      placeholder="Phone*" 
                      required 
                    />
                  </div>
                  <div className="form-field">
                    <select name="subject" className="form-control" required>
                      <option value="" disabled>Contact subject</option>
                      <option value="glove-box">Glove Box</option>
                      <option value="vacuum-induction-furnace">Vacuum Induction Furnace</option>
                      <option value="vacuum-arc-melting-furnace">Vacuum Arc Melting Furnace</option>
                      <option value="thermal-evaporator-system">Thermal Evaporator System</option>
                      <option value="rf-dc-sputtering-system">RF/DC Sputtering System</option>
                      <option value="general-inquiry">General Inquiry</option>
                      <option value="support">Support</option>
                    </select>
                  </div>
                  <div className="form-field form-field--fullwidth">
                    <textarea 
                      className="form-control" 
                      name="note" 
                      id="note" 
                      placeholder="Case Description..." 
                      rows="5"
                    ></textarea>
                  </div>
                  <div className="submit-area">
                    <button type="submit" className="theme-btn">Submit Now</button>
                    <div id="loader" className="loader" style={{ display: 'none' }}>
                      <svg className="loader-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                  <div className="clearfix error-handling-messages">
                    <div id="success" className="form-message form-message--success" style={{ display: 'none' }}>
                      Thank you! Your message has been sent successfully.
                    </div>
                    <div id="error" className="form-message form-message--error" style={{ display: 'none' }}>
                      Error occurred while sending email. Please try again later.
                    </div>
                  </div>
                </form>
              </div>

              <div className="contact-info-section" data-animate="fade-left" data-delay="0.19s">
                <div className="office-info">
                  <div className="office-info__card">
                    <h3>Our Office</h3>
                    <ul className="office-info__list">
                      <li>
                        <span className="office-info__icon" aria-hidden="true">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                          </svg>
                        </span>
                        <a 
                          href="https://maps.app.goo.gl/UCqNHEASak8Au1PD8" 
                          className="office-info__link hover-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          #C-284, 7th Cross, Peenya 1st Stage, Peenya Industrial Estate, Bangalore - 560058
                        </a>
                      </li>
                      <li>
                        <span className="office-info__icon" aria-hidden="true">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                          </svg>
                        </span>
                        <a href="tel:+919535433436" className="office-info__link hover-link">
                          +91-9535433436
                        </a>
                      </li>
                      <li>
                        <span className="office-info__icon" aria-hidden="true">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                          </svg>
                        </span>
                        <a href="mailto:info@vecsolutions.com" className="office-info__link hover-link">
                          info@vecsolutions.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="contact-map" data-animate="fade-up" data-delay="0.21s">
                  <iframe
                    src="https://www.google.com/maps?q=13.030902,77.521294&hl=en&z=15&output=embed"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="VEC Solutions Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Contact

