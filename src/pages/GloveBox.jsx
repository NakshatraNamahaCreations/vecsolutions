import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import gloveBox2Port from '../assets/glove_box/2_Port Glovebox.jpg'
import gloveBox4Port from '../assets/glove_box/4_Glovebox-Machine.jpg'
import gloveBoxCustom from '../assets/glove_box/Custom Glovebox.jpg'
import gloveBoxCustomizable from '../assets/glove_box/Customizable Glovebox.jpg'
import gloveBoxHeroImage from '../assets/explore_section/pexels-tima-miroshnichenko-8327969.jpg'
import './Home.css'
import './About.css'
import './GloveBox.css'

const galleryImages = [
  { 
    src: gloveBox2Port, 
    alt: '2 Port Glovebox', 
    label: '2 Port Glovebox',
    description: 'Compact glovebox system with dual port configuration, ideal for small-scale laboratory operations and sample handling.'
  },
  { 
    src: gloveBox4Port, 
    alt: '4 Port Glovebox Machine', 
    label: '4 Port Glovebox Machine',
    description: 'Advanced multi-port system designed for complex workflows requiring multiple access points and enhanced operational flexibility.'
  },
  { 
    src: gloveBoxCustom, 
    alt: 'Custom Glovebox', 
    label: 'Custom Glovebox',
    description: 'Tailored solutions engineered to meet specific research requirements with customizable dimensions and specialized features.'
  },
  { 
    src: gloveBoxCustomizable, 
    alt: 'Customizable Glovebox', 
    label: 'Customizable Glovebox',
    description: 'Modular design allowing for extensive customization to match unique laboratory workflows and experimental needs.'
  },
]

function GloveBox() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return
      
      if (e.key === 'Escape') {
        setLightboxOpen(false)
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % galleryImages.length)
      }
    }

    if (lightboxOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [lightboxOpen])

  const openLightbox = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const navigateLightbox = (direction) => {
    if (direction === 'prev') {
      setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
    } else {
      setLightboxIndex((prev) => (prev + 1) % galleryImages.length)
    }
  }

  return (
    <div className="app-shell">
      <Navbar />
      <main className="main">
        <section
          id="glovebox-hero"
          className="about-hero"
        >
          <div className="about-hero__image" style={{ backgroundImage: `url(${gloveBoxHeroImage})` }} />
          <div className="about-hero__overlay" />
          <div className="about-hero__content about-hero__content--left">
            <h1 className="about-hero__title">
              <span className="about-hero__title-line">Glove Box</span>
            </h1>
            <p className="about-hero__subtitle">
              <span className="about-hero__subtitle-line">Configurable gloveboxes offered in 2, 3, and 4 port configurations with tailored purification systems to match unique laboratory workflows.</span>
            </p>
          </div>
        </section>

        <div className="about-hero-spacer" />

        <section className="product-content" data-animate="fade-up" data-delay="0.15s">
          <div className="product-content__container">
            <div className="product-content__main">
              <h2 className="product-content__title" data-animate="fade-up" data-delay="0.16s">Product Overview</h2>
              <p className="product-content__overview" data-animate="fade-up" data-delay="0.18s">
                At VEC Solutions, we understand that every laboratory and industrial setting has unique requirements. 
                While we offer standard Gloveboxes in 2 Port, 3 Port, and 4 Port configurations, our expertise lies 
                in customizing these systems to perfectly match your specific workflow and operational needs.
              </p>
              
              <h3 className="product-content__subtitle" data-animate="fade-up" data-delay="0.2s">Key Features</h3>
              <ul className="product-features">
                <li className="product-feature__item" data-animate="fade-left" data-delay="0.22s">
                  <span className="product-feature__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="product-feature__text">Multiple port layouts for ergonomic sample handling</span>
                </li>
                <li className="product-feature__item" data-animate="fade-left" data-delay="0.24s">
                  <span className="product-feature__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="product-feature__text">High-capacity purification columns for extended uptime</span>
                </li>
                <li className="product-feature__item" data-animate="fade-left" data-delay="0.26s">
                  <span className="product-feature__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="product-feature__text">Integrated monitoring of O₂ and H₂O for critical processes</span>
                </li>
                <li className="product-feature__item" data-animate="fade-left" data-delay="0.28s">
                  <span className="product-feature__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="product-feature__text">Modular accessories for deposition, weighing, and transfer</span>
                </li>
              </ul>

              <h3 className="product-content__subtitle" data-animate="fade-up" data-delay="0.3s">Applications</h3>
              <p className="product-content__applications" data-animate="fade-up" data-delay="0.32s">
                Our glove boxes are ideal for research laboratories, manufacturing facilities, and any environment 
                requiring controlled atmosphere conditions for sensitive materials and processes.
              </p>
            </div>
          </div>
        </section>

        <section className="product-gallery" data-animate="fade-up" data-delay="0.2s">
          <div className="product-gallery__container">
            <header className="product-gallery__header" data-animate="fade-up" data-delay="0.22s">
              <span className="product-gallery__kicker">Gallery</span>
              <h2 className="product-gallery__title">Product Showcase</h2>
              <p className="product-gallery__subtitle">Explore our range of glovebox configurations</p>
            </header>
            <div className="product-gallery__grid">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="product-gallery__item"
                  data-animate="fade-up"
                  data-delay={`${0.24 + index * 0.1}s`}
                  onClick={() => openLightbox(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      openLightbox(index)
                    }
                  }}
                  aria-label={`View ${image.label} in full size`}
                >
                  <div className="product-gallery__image-wrapper">
                    <img src={image.src} alt={image.alt} className="product-gallery__image" loading="lazy" />
                    <div className="product-gallery__overlay-effect"></div>
                  </div>
                  <div className="product-gallery__content">
                    <h3 className="product-gallery__label">{image.label}</h3>
                    <p className="product-gallery__description">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {lightboxOpen && (
          <div className="product-lightbox" onClick={closeLightbox}>
            <button
              className="product-lightbox__close"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              ×
            </button>
            <button
              className="product-lightbox__nav product-lightbox__nav--prev"
              onClick={(e) => {
                e.stopPropagation()
                navigateLightbox('prev')
              }}
              aria-label="Previous image"
            >
              ←
            </button>
            <button
              className="product-lightbox__nav product-lightbox__nav--next"
              onClick={(e) => {
                e.stopPropagation()
                navigateLightbox('next')
              }}
              aria-label="Next image"
            >
              →
            </button>
            <div className="product-lightbox__content" onClick={(e) => e.stopPropagation()}>
              <div className="product-lightbox__image-wrapper">
                <img
                  src={galleryImages[lightboxIndex].src}
                  alt={galleryImages[lightboxIndex].alt}
                  className="product-lightbox__image"
                />
              </div>
              <div className="product-lightbox__info">
                <span className="product-lightbox__counter">
                  {lightboxIndex + 1} / {galleryImages.length}
                </span>
                <span className="product-lightbox__label">{galleryImages[lightboxIndex].label}</span>
              </div>
            </div>
            <div className="product-lightbox__thumbnails">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  className={`product-lightbox__thumbnail ${index === lightboxIndex ? 'is-active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    setLightboxIndex(index)
                  }}
                  aria-label={`View ${image.label}`}
                >
                  <img src={image.src} alt={image.alt} />
                </button>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default GloveBox

