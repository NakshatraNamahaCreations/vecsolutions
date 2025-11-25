import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import galleryHeroImage from '../assets/home_banner/aboutbanner.jpg'
import gloveBox2Port from '../assets/glove_box/2_Port Glovebox.jpg'
import gloveBox4Port from '../assets/glove_box/4_Glovebox-Machine.jpg'
import gloveBoxCustom from '../assets/glove_box/Custom Glovebox.jpg'
import gloveBoxCustomizable from '../assets/glove_box/Customizable Glovebox.jpg'
import vacuumInductionFurnace from '../assets/glove_box/Vacuum Induction Furnace.jpg'
import thermalEvaporator from '../assets/glove_box/Thermal-Evaporator-Systems.jpg'
import rfdcSputtering from '../assets/glove_box/RF-DC Sputtering System.jpg'
import productVIFurnace from '../assets/explore_section/VIFurnace.jpg'
import productGloveBox from '../assets/explore_section/glovebox.jpg'
import productArcFurnace from '../assets/explore_section/GAF.jpg'
import productRFDC from '../assets/explore_section/RFDC 5.jpg'
import gallery1 from '../assets/gallery/1.jpg'
import gallery2 from '../assets/gallery/2.jpg'
import gallery3 from '../assets/gallery/3.jpg'
import gallery4 from '../assets/gallery/4.jpg'
import gallery5 from '../assets/gallery/5.jpg'
import gallery6 from '../assets/gallery/6.jpg'
import gallery7 from '../assets/gallery/7.jpg'
import gallery8 from '../assets/gallery/8.jpg'
import gallery9 from '../assets/gallery/9.jpg'
import gallery10 from '../assets/gallery/10.jpg'
import gallery11 from '../assets/gallery/11.jpg'
import gallery12 from '../assets/gallery/12.jpg'
import gallery13 from '../assets/gallery/13.jpg'
import gallery14 from '../assets/gallery/14.jpg'
import gallery15 from '../assets/gallery/15.jpg'
import gallery16 from '../assets/gallery/16.jpg'
import gallery17 from '../assets/gallery/17.jpg'
import gallery18 from '../assets/gallery/18.jpg'
import gallery19 from '../assets/gallery/19.jpg'
import gallery20 from '../assets/gallery/20.jpg'
import gallery21 from '../assets/gallery/21.jpg'
import gallery22 from '../assets/gallery/22.jpg'
import gallery23 from '../assets/gallery/23.jpg'
import gallery24 from '../assets/gallery/24.jpg'
import gallery25 from '../assets/gallery/25.jpg'
import gallery26 from '../assets/gallery/26.jpg'
import gallery28 from '../assets/gallery/28.jpg'
import gallery29 from '../assets/gallery/29.jpg'
import gallery30 from '../assets/gallery/30.jpg'
import gallery31 from '../assets/gallery/31.jpg'
import gallery32 from '../assets/gallery/32.jpg'
import gallery33 from '../assets/gallery/33.jpg'
import gallery34 from '../assets/gallery/34.jpg'
import gallery36 from '../assets/gallery/36.jpg'
import gallery39 from '../assets/gallery/39.jpg'
import gallery41 from '../assets/gallery/41.jpg'
import gallery44 from '../assets/gallery/44.jpg'
import gallery46 from '../assets/gallery/46.jpg'
import gallery47 from '../assets/gallery/47.jpg'
import gallery48 from '../assets/gallery/48.jpg'
import gallery50 from '../assets/gallery/50.jpg'
import gallery51 from '../assets/gallery/51.jpg'
import './Home.css'
import './About.css'
import './Gallery.css'

const galleryImages = [
  {
    category: 'Glove Box',
    images: [
      { src: gloveBox2Port, alt: '2 Port Glovebox', title: '2 Port Glovebox' },
      { src: gloveBox4Port, alt: '4 Port Glovebox Machine', title: '4 Port Glovebox Machine' },
      { src: gloveBoxCustom, alt: 'Custom Glovebox', title: 'Custom Glovebox' },
      { src: gloveBoxCustomizable, alt: 'Customizable Glovebox', title: 'Customizable Glovebox' },
      { src: productGloveBox, alt: 'Glove Box System', title: 'Glove Box System' },
    ]
  },
  {
    category: 'Vacuum Induction Furnace',
    images: [
      { src: vacuumInductionFurnace, alt: 'Vacuum Induction Furnace', title: 'Vacuum Induction Furnace' },
      { src: productVIFurnace, alt: 'Lab Scale Vacuum Induction Furnace', title: 'Lab Scale VIF' },
    ]
  },
  {
    category: 'Vacuum Arc Melting Furnace',
    images: [
      { src: productArcFurnace, alt: 'Vacuum Arc Melting Furnace', title: 'Vacuum Arc Melting Furnace' },
    ]
  },
  {
    category: 'Thermal Evaporator System',
    images: [
      { src: thermalEvaporator, alt: 'Thermal Evaporator System', title: 'Thermal Evaporator System' },
    ]
  },
  {
    category: 'RF/DC Sputtering System',
    images: [
      { src: rfdcSputtering, alt: 'RF/DC Sputtering System', title: 'RF/DC Sputtering System' },
      { src: productRFDC, alt: 'RF/DC Sputtering System', title: 'RF/DC Sputtering System' },
    ]
  },
]

// Gallery images from assets/gallery
const additionalGalleryImages = [
  { src: gallery1, alt: 'Gallery Image 1', title: 'Gallery Image 1' },
  { src: gallery2, alt: 'Gallery Image 2', title: 'Gallery Image 2' },
  { src: gallery3, alt: 'Gallery Image 3', title: 'Gallery Image 3' },
  { src: gallery4, alt: 'Gallery Image 4', title: 'Gallery Image 4' },
  { src: gallery5, alt: 'Gallery Image 5', title: 'Gallery Image 5' },
  { src: gallery6, alt: 'Gallery Image 6', title: 'Gallery Image 6' },
  { src: gallery7, alt: 'Gallery Image 7', title: 'Gallery Image 7' },
  { src: gallery8, alt: 'Gallery Image 8', title: 'Gallery Image 8' },
  { src: gallery9, alt: 'Gallery Image 9', title: 'Gallery Image 9' },
  { src: gallery10, alt: 'Gallery Image 10', title: 'Gallery Image 10' },
  { src: gallery11, alt: 'Gallery Image 11', title: 'Gallery Image 11' },
  { src: gallery12, alt: 'Gallery Image 12', title: 'Gallery Image 12' },
  { src: gallery13, alt: 'Gallery Image 13', title: 'Gallery Image 13' },
  { src: gallery14, alt: 'Gallery Image 14', title: 'Gallery Image 14' },
  { src: gallery15, alt: 'Gallery Image 15', title: 'Gallery Image 15' },
  { src: gallery16, alt: 'Gallery Image 16', title: 'Gallery Image 16' },
  { src: gallery17, alt: 'Gallery Image 17', title: 'Gallery Image 17' },
  { src: gallery18, alt: 'Gallery Image 18', title: 'Gallery Image 18' },
  { src: gallery19, alt: 'Gallery Image 19', title: 'Gallery Image 19' },
  { src: gallery20, alt: 'Gallery Image 20', title: 'Gallery Image 20' },
  { src: gallery21, alt: 'Gallery Image 21', title: 'Gallery Image 21' },
  { src: gallery22, alt: 'Gallery Image 22', title: 'Gallery Image 22' },
  { src: gallery23, alt: 'Gallery Image 23', title: 'Gallery Image 23' },
  { src: gallery24, alt: 'Gallery Image 24', title: 'Gallery Image 24' },
  { src: gallery25, alt: 'Gallery Image 25', title: 'Gallery Image 25' },
  { src: gallery26, alt: 'Gallery Image 26', title: 'Gallery Image 26' },
  { src: gallery28, alt: 'Gallery Image 28', title: 'Gallery Image 28' },
  { src: gallery29, alt: 'Gallery Image 29', title: 'Gallery Image 29' },
  { src: gallery30, alt: 'Gallery Image 30', title: 'Gallery Image 30' },
  { src: gallery31, alt: 'Gallery Image 31', title: 'Gallery Image 31' },
  { src: gallery32, alt: 'Gallery Image 32', title: 'Gallery Image 32' },
  { src: gallery33, alt: 'Gallery Image 33', title: 'Gallery Image 33' },
  { src: gallery34, alt: 'Gallery Image 34', title: 'Gallery Image 34' },
  { src: gallery36, alt: 'Gallery Image 36', title: 'Gallery Image 36' },
  { src: gallery39, alt: 'Gallery Image 39', title: 'Gallery Image 39' },
  { src: gallery41, alt: 'Gallery Image 41', title: 'Gallery Image 41' },
  { src: gallery44, alt: 'Gallery Image 44', title: 'Gallery Image 44' },
  { src: gallery46, alt: 'Gallery Image 46', title: 'Gallery Image 46' },
  { src: gallery47, alt: 'Gallery Image 47', title: 'Gallery Image 47' },
  { src: gallery48, alt: 'Gallery Image 48', title: 'Gallery Image 48' },
  { src: gallery50, alt: 'Gallery Image 50', title: 'Gallery Image 50' },
  { src: gallery51, alt: 'Gallery Image 51', title: 'Gallery Image 51' },
]

// Get all images for lightbox navigation (product images + gallery images)
const allProductImages = galleryImages.flatMap(cat => cat.images)
const allImages = [...allProductImages, ...additionalGalleryImages]

function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [activeCategory, setActiveCategory] = useState('All')
  const [filteredImages, setFilteredImages] = useState([])

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
    if (activeCategory === 'All') {
      const allImagesWithCategory = galleryImages.flatMap(cat => 
        cat.images.map(img => ({ ...img, category: cat.category }))
      )
      setFilteredImages(allImagesWithCategory)
    } else {
      const category = galleryImages.find(cat => cat.category === activeCategory)
      setFilteredImages(category ? category.images.map(img => ({ ...img, category: activeCategory })) : [])
    }
  }, [activeCategory])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return
      
      if (e.key === 'Escape') {
        setLightboxOpen(false)
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + allImages.length) % allImages.length)
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % allImages.length)
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
      setLightboxIndex((prev) => (prev - 1 + allImages.length) % allImages.length)
    } else {
      setLightboxIndex((prev) => (prev + 1) % allImages.length)
    }
  }

  const categories = ['All', ...galleryImages.map(cat => cat.category)]

  return (
    <div className="app-shell">
      <Navbar />
      <main className="main">
        <section
          id="gallery-hero"
          className="about-hero"
        >
          <div className="about-hero__image" style={{ backgroundImage: `url(${galleryHeroImage})` }} />
          <div className="about-hero__overlay" />
          <div className="about-hero__content about-hero__content--left">
            <h1 className="about-hero__title">
              <span className="about-hero__title-line">Product Gallery</span>
            </h1>
            <p className="about-hero__subtitle">
              <span className="about-hero__subtitle-line">Explore our comprehensive range of vacuum technology solutions and equipment through our visual showcase.</span>
            </p>
          </div>
        </section>

        <div className="about-hero-spacer" />

        <section className="gallery-content" data-animate="fade-up" data-delay="0.15s">
          <div className="gallery-content__container">
            <header className="gallery-content__header" data-animate="fade-up" data-delay="0.12s">
              <span className="gallery-content__kicker">Gallery</span>
              <h1 className="gallery-content__title">Product Gallery</h1>
              <p className="gallery-content__lead">
                Explore our comprehensive range of vacuum technology solutions and equipment through our visual showcase.
              </p>
            </header>
            <div className="gallery-filters" data-animate="fade-up" data-delay="0.17s">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`gallery-filter__button ${activeCategory === category ? 'is-active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="gallery-grid">
              {filteredImages.map((image, index) => (
                <div
                  key={index}
                  className="gallery-item"
                  data-animate="zoom-in"
                  data-delay={`${0.19 + index * 0.05}s`}
                  onClick={() => {
                    const globalIndex = allImages.findIndex(
                      img => img.src === image.src
                    )
                    openLightbox(globalIndex >= 0 ? globalIndex : index)
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      const globalIndex = allImages.findIndex(
                        img => img.src === image.src
                      )
                      openLightbox(globalIndex >= 0 ? globalIndex : index)
                    }
                  }}
                  aria-label={`View ${image.title} in full size`}
                >
                  <div className="gallery-item__image-wrapper">
                    <img src={image.src} alt={image.alt} className="gallery-item__image" loading="lazy" />
                    <div className="gallery-item__overlay">
                      <div className="gallery-item__overlay-content">
                        <span className="gallery-item__category">{image.category}</span>
                        <span className="gallery-item__title">{image.title}</span>
                        <span className="gallery-item__icon" aria-hidden="true">↗</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Gallery Section */}
        <section className="gallery-additional" data-animate="fade-up" data-delay="0.3s">
          <div className="gallery-additional__container">
            <header className="gallery-additional__header" data-animate="fade-up" data-delay="0.32s">
              <span className="gallery-additional__kicker">Showcase</span>
              <h2 className="gallery-additional__title">Our Work Gallery</h2>
              <p className="gallery-additional__lead">
                Browse through our extensive collection of installations, projects, and equipment showcases.
              </p>
            </header>
            <div className="gallery-additional__grid">
              {additionalGalleryImages.map((image, index) => {
                const globalIndex = allProductImages.length + index
                return (
                  <div
                    key={index}
                    className="gallery-additional__item"
                    data-animate="zoom-in"
                    data-delay={`${0.34 + index * 0.03}s`}
                    onClick={() => openLightbox(globalIndex)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        openLightbox(globalIndex)
                      }
                    }}
                    aria-label={`View ${image.title} in full size`}
                  >
                    <div className="gallery-additional__image-wrapper">
                      <img src={image.src} alt={image.alt} className="gallery-additional__image" loading="lazy" />
                      <div className="gallery-additional__overlay">
                        <div className="gallery-additional__overlay-content">
                          <span className="gallery-additional__icon" aria-hidden="true">↗</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {lightboxOpen && (
          <div className="gallery-lightbox" onClick={closeLightbox}>
            <button
              className="gallery-lightbox__close"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              ×
            </button>
            <button
              className="gallery-lightbox__nav gallery-lightbox__nav--prev"
              onClick={(e) => {
                e.stopPropagation()
                navigateLightbox('prev')
              }}
              aria-label="Previous image"
            >
              ←
            </button>
            <button
              className="gallery-lightbox__nav gallery-lightbox__nav--next"
              onClick={(e) => {
                e.stopPropagation()
                navigateLightbox('next')
              }}
              aria-label="Next image"
            >
              →
            </button>
            <div className="gallery-lightbox__content" onClick={(e) => e.stopPropagation()}>
              <div className="gallery-lightbox__image-wrapper">
                <img
                  src={allImages[lightboxIndex]?.src}
                  alt={allImages[lightboxIndex]?.alt}
                  className="gallery-lightbox__image"
                />
              </div>
              <div className="gallery-lightbox__info">
                <span className="gallery-lightbox__counter">
                  {lightboxIndex + 1} / {allImages.length}
                </span>
                <span className="gallery-lightbox__label">
                  {allImages[lightboxIndex]?.title}
                </span>
              </div>
            </div>
            <div className="gallery-lightbox__thumbnails">
              {allImages.map((image, index) => (
                <button
                  key={index}
                  className={`gallery-lightbox__thumbnail ${index === lightboxIndex ? 'is-active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    setLightboxIndex(index)
                  }}
                  aria-label={`View ${image.title}`}
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

export default Gallery

