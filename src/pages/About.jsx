import { useEffect, useState, useMemo } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import aboutBanner from '../assets/home_banner/aboutbanner.jpg'
import home2Image from '../assets/home_banner/home2.jpg'
import productVIFurnace from '../assets/explore_section/VIFurnace.jpg'
import productGloveBox from '../assets/explore_section/glovebox.jpg'
import productArcFurnace from '../assets/explore_section/GAF.jpg'
import productRFDC from '../assets/explore_section/RFDC 5.jpg'
import logoAmrita from '../assets/logo\'s/amrita-university-logo.png'
import logoBARC from '../assets/logo\'s/BARC_LOGO.png'
import logoBITS from '../assets/logo\'s/BITS_Pilani-Logo.png'
import logoBuusch from '../assets/logo\'s/buusch.png'
import logoCPRI from '../assets/logo\'s/CPRI.png'
import logoCryolor from '../assets/logo\'s/Cryolor.png'
import logoCSIR from '../assets/logo\'s/CSIR-CGCRI.png'
import logoDeccan from '../assets/logo\'s/Deccan.png'
import logoDRDL from '../assets/logo\'s/dmrl-logo.png'
import logoGTRE from '../assets/logo\'s/GTRE Logo.png'
import logoGulbrandsen from '../assets/logo\'s/Gulbrandsen-Logo.png'
import logoHBL from '../assets/logo\'s/hbl-batteries.png'
import './Home.css'
import './About.css'

const whyChooseItems = [
  {
    id: 'professional',
    label: 'Professional Team',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Professional Team',
    description: 'With years of experience and a passion for innovation, our team ensures the highest standards in every project we undertake. Our experts bring deep industry knowledge and a commitment to excellence that sets us apart.',
  },
  {
    id: 'certified',
    label: 'Certified Engineers',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Certified Engineers',
    description: 'Our certified engineers bring unparalleled expertise and a commitment to quality in every project. Each team member is rigorously trained and continuously updated with the latest industry standards and technologies.',
  },
  {
    id: 'technology',
    label: 'Latest Technology',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 9H15V15H9V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 9H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 9H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 15H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 15H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Latest Technology',
    description: 'We utilize the latest technology to provide innovative and efficient solutions tailored to your needs. Our state-of-the-art equipment and cutting-edge methodologies ensure optimal performance and results.',
  },
  {
    id: 'reliability',
    label: 'Reliability',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Reliability',
    description: 'Count on us for consistent, reliable performance that meets and exceeds expectations. Our proven track record and commitment to quality assurance ensure dependable solutions you can trust.',
  },
]

const testimonials = [
  {
    quote:
      "We're thrilled with the outstanding quality of the products! They've exceeded our expectations, and we're eagerly looking forward to adding more to our collection.",
    name: 'Sujan',
    role: 'Client',
    company: 'Research Partner',
  },
  {
    quote:
      "Absolutely blown away by the exceptional quality of these products! We're not just satisfied, we're already planning our next purchase.",
    name: 'Chetan',
    role: 'Client',
    company: 'Industrial Fabrication',
  },
  {
    quote:
      "These products have set a new standard for excellence in our book, and we can't wait to see what else this innovative brand has in store for us.",
    name: 'Sachin M',
    role: 'Client',
  },
]

const clientLogos = [
  { src: logoAmrita, alt: 'Amrita University' },
  { src: logoBARC, alt: 'BARC' },
  { src: logoBITS, alt: 'BITS Pilani' },
  { src: logoBuusch, alt: 'Buusch' },
  { src: logoCPRI, alt: 'CPRI' },
  { src: logoCryolor, alt: 'Cryolor' },
  { src: logoCSIR, alt: 'CSIR CGCRI' },
  { src: logoDeccan, alt: 'Deccan University' },
  { src: logoDRDL, alt: 'DRDL' },
  { src: logoGTRE, alt: 'GTRE' },
  { src: logoGulbrandsen, alt: 'Gulbrandsen' },
  { src: logoHBL, alt: 'HBL Batteries' },
]

const productHighlights = [
  {
    id: 'vacuum-induction-furnace',
    title: 'Vaccum Induction Furnace',
    summary:
      'State-of-the-art lab scale vacuum induction furnaces engineered to support modern research and development environments with dependable performance.',
    features: [
      'Supports complex alloy development with controlled vacuum conditions',
      'Programmable temperature profiles for repeatable experiments',
      'Compact footprint suited for laboratories and pilot facilities',
      'Delivered with application-focused commissioning and training',
    ],
    anchor: '#vacuum-induction-furnace',
    visual: productVIFurnace,
  },
  {
    id: 'glove-box',
    title: 'Glove Box',
    summary:
      'Configurable gloveboxes offered in 2, 3, and 4 port configurations with tailored purification systems to match unique laboratory workflows.',
    features: [
      'Multiple port layouts for ergonomic sample handling',
      'High-capacity purification columns for extended uptime',
      'Integrated monitoring of O₂ and H₂O for critical processes',
      'Modular accessories for deposition, weighing, and transfer',
    ],
    anchor: '#glove-box',
    visual: productGloveBox,
  },
  {
    id: 'vacuum-arc-melting-furnace',
    title: 'Vacuum ARC Melting Furnace',
    summary:
      'Advanced vacuum ARC melting furnaces that deliver precise temperature control and reliable performance for metallurgical research and production.',
    features: [
      'Stabilised arc column for repeatable melting and alloying',
      'High-purity crucibles and chambers to limit contamination',
      'Rapid solidification support for specialised metallurgical studies',
      'Built for continuous operation with intuitive control interfaces',
    ],
    anchor: '#vacuum-arc-melting-furnace',
    visual: productArcFurnace,
  },
  {
    id: 'rf-dc-sputtering-system',
    title: 'RF/DC Sputtering System',
    summary:
      'Precision RF/DC sputtering platforms built to provide consistent thin film deposition and repeatable, high-quality results for researchers.',
    features: [
      'RF and DC sources for conductive and insulating targets',
      'Uniform thin films with finely tuned deposition rates',
      'Multi-target carousel enabling rapid process changes',
      'Process automation with recipe-driven sequencing',
    ],
    anchor: '#rf-dc-sputtering-system',
    visual: productRFDC,
  },
]

function About() {
  const [activeStatement, setActiveStatement] = useState('vision')
  const [activeProduct, setActiveProduct] = useState(productHighlights[0].id)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const activeProductData = useMemo(
    () => productHighlights.find((product) => product.id === activeProduct) ?? productHighlights[0],
    [activeProduct],
  )

  const totalTestimonials = testimonials.length
  const prevTestimonial = (activeTestimonial + totalTestimonials - 1) % totalTestimonials
  const nextTestimonial = (activeTestimonial + 1) % totalTestimonials

  const handleTestimonialNav = (direction) => {
    setActiveTestimonial((prev) => {
      if (direction === 'prev') {
        return (prev + totalTestimonials - 1) % totalTestimonials
      }
      return (prev + 1) % totalTestimonials
    })
  }

  const statements = {
    vision: {
      title: 'Our Vision',
      heading: "Engineering tomorrow's vacuum excellence",
      body:
        "Our vision at VEC Solutions is to be recognized as the foremost authority and preferred partner in vacuum equipment manufacturing, setting the standard for excellence and innovation in the industry. We aspire to continue our legacy of leadership by leveraging our expertise, fostering collaborative partnerships, and driving transformative advancements that shape the future of vacuum technology. Through our unwavering dedication to quality, integrity, and customer satisfaction, we aim to inspire progress and empower success in every endeavor we undertake.",
    },
    mission: {
      title: 'Our Mission',
      heading: 'Accelerating innovation for industries worldwide',
      body:
        'At VEC Solutions, our mission is to lead the advancement of vacuum technology in India and beyond by delivering innovative, high-quality solutions that empower our clients to achieve their goals. We are committed to exceeding customer expectations through excellence in craftsmanship, reliability, and unparalleled customer service, thereby contributing to the growth and success of industries worldwide.',
    },
  }

  useEffect(() => {
    const initAnimations = () => {
      const animatedElements = document.querySelectorAll('[data-animate]')
      
      if (animatedElements.length === 0) return

      const elementsToAnimate = []

      animatedElements.forEach((el, index) => {
        if (el.closest('.about-hero')) {
          el.classList.add('is-visible')
          return
        }

        elementsToAnimate.push(el)

        const delay = el.getAttribute('data-delay')
        if (delay) {
          el.style.setProperty('--reveal-delay', delay)
        } else if (!el.style.getPropertyValue('--reveal-delay')) {
          el.style.setProperty('--reveal-delay', `${Math.min(index * 0.08, 0.6)}s`)
        }
      })

      const checkVisibility = () => {
        const windowHeight = window.innerHeight
        const scrollY = window.scrollY || window.pageYOffset

        elementsToAnimate.forEach((el) => {
          if (el.classList.contains('is-visible')) return

          const rect = el.getBoundingClientRect()
          const elementTop = rect.top + scrollY
          const elementBottom = elementTop + rect.height
          const viewportTop = scrollY
          const viewportBottom = scrollY + windowHeight

          if (elementBottom > viewportTop + 100 && elementTop < viewportBottom - 100) {
            setTimeout(() => {
              el.classList.add('is-visible')
            }, 50)
          }
        })
      }

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

      elementsToAnimate.forEach((el) => {
        observer.observe(el)
      })

      checkVisibility()

      window.addEventListener('scroll', checkVisibility, { passive: true })
      window.addEventListener('resize', checkVisibility, { passive: true })

      return () => {
        observer.disconnect()
        window.removeEventListener('scroll', checkVisibility)
        window.removeEventListener('resize', checkVisibility)
      }
    }

    const timeoutId = setTimeout(initAnimations, 100)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div className="app-shell">
      <Navbar />
      <main className="main">
        <section
          id="about-hero"
          className="about-hero"
        >
          <div className="about-hero__image" style={{ backgroundImage: `url(${aboutBanner})` }} />
          <div className="about-hero__overlay" />
          <div className="about-hero__content about-hero__content--left">
            <h1 className="about-hero__title">
              <span className="about-hero__title-line">About VEC Solutions</span>
            </h1>
            <p className="about-hero__subtitle">
              <span className="about-hero__subtitle-line">Two decades of excellence in vacuum engineering</span>
            </p>
          </div>
        </section>

        <div className="about-hero-spacer" />

        <section className="about-section about-why-choose" data-animate="fade-up" data-delay="0.1s">
          <div className="about-why-choose__container">
            <div className="about-why-choose__background" style={{ '--about-why-image': `url(${home2Image})` }} aria-hidden="true" />
            <header className="about-why-choose__header" data-animate="fade-up" data-delay="0.12s">
              <span className="about-why-choose__kicker">Why Choose Us</span>
              <h2 className="about-why-choose__title">Excellence in Every Detail</h2>
              <p className="about-why-choose__lead">
                Discover what makes us the preferred partner for vacuum technology solutions. Explore our key strengths and commitment to quality.
              </p>
            </header>
            <div className="about-why-choose__features">
              {whyChooseItems.map((item, index) => (
                <div
                  key={item.id}
                  className="about-why-choose__feature"
                  data-animate="fade-up"
                  data-delay={`${0.15 + index * 0.1}s`}
                >
                  <div className="about-why-choose__feature-number">0{index + 1}</div>
                  <div className="about-why-choose__feature-content">
                    <div className="about-why-choose__feature-icon">
                      {item.icon}
                    </div>
                    <div className="about-why-choose__feature-text">
                      <h3 className="about-why-choose__feature-title">{item.title}</h3>
                      <p className="about-why-choose__feature-description">{item.description}</p>
                    </div>
                  </div>
                  <div className="about-why-choose__feature-line"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="vision-mission" className="section section--vision" data-animate="fade-right" data-delay="0.12s">
          <div className="vision-tabs">
            <header className="vision-tabs__header">
              <span className="vision-tabs__kicker">Guiding principles</span>
              <h2 className="vision-tabs__title">Vision & Mission</h2>
            </header>
            <div className="vision-tabs__controls" role="tablist" aria-label="Vision and mission statements">
              {Object.entries(statements).map(([key, value]) => (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={activeStatement === key}
                  aria-controls={`vision-panel-${key}`}
                  id={`vision-tab-${key}`}
                  className={`vision-tabs__button${activeStatement === key ? ' is-active' : ''}`}
                  onClick={() => setActiveStatement(key)}
                >
                  {value.title}
                </button>
              ))}
              <span className="vision-tabs__indicator" data-active={activeStatement} />
            </div>
            {Object.entries(statements).map(([key, value]) => (
              <article
                key={key}
                role="tabpanel"
                id={`vision-panel-${key}`}
                aria-labelledby={`vision-tab-${key}`}
                className={`vision-tabs__panel${activeStatement === key ? ' is-visible' : ''}`}
                hidden={activeStatement !== key}
              >
                <h3>{value.heading}</h3>
                <p>{value.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="products"
          className="section section--products"
          data-animate="fade-up"
          data-delay="0.1s"
          data-parallax
          data-parallax-ratio="0.1"
        >
          <div className="products-deck">
            <aside
              className="products-deck__nav"
              role="tablist"
              aria-label="Explore our comprehensive range of products"
              data-animate="fade-right"
              data-delay="0.15s"
            >
              <span className="products-deck__nav-kicker">Explore our comprehensive range of products</span>
              {productHighlights.map((product, index) => (
                <button
                  key={product.id}
                  type="button"
                  role="tab"
                  id={`products-tab-${product.id}`}
                  aria-controls={`products-panel-${product.id}`}
                  aria-selected={activeProduct === product.id}
                  className={`products-deck__tab${activeProduct === product.id ? ' is-active' : ''}`}
                  onClick={() => setActiveProduct(product.id)}
                  onMouseEnter={() => setActiveProduct(product.id)}
                  style={{ '--tab-index': index }}
                >
                  <span className="products-deck__tab-index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="products-deck__tab-label">{product.title}</span>
                </button>
              ))}
            </aside>

            <article
              key={activeProduct}
              className="products-deck__detail"
              role="tabpanel"
              id={`products-panel-${activeProduct}`}
              aria-labelledby={`products-tab-${activeProduct}`}
            >
              <header className="products-deck__detail-header">
                <span className="products-deck__detail-kicker">VEC Solutions</span>
                <h2>{activeProductData.title}</h2>
                <p>{activeProductData.summary}</p>
              </header>
              <ul className="products-deck__detail-list">
                {activeProductData.features.map((feature) => (
                  <li key={feature}>
                    <span className="products-deck__detail-bullet" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a className="products-deck__detail-cta" href={activeProductData.anchor}>
                View specification
                <span aria-hidden="true">↗</span>
              </a>
            </article>

            <div className="products-deck__visual" aria-hidden="true">
              <div
                className="products-deck__visual-image"
                style={{ '--product-image': `url(${activeProductData.visual})` }}
              />
              <div className="products-deck__visual-meta">
                <span>
                  <strong>Legacy timeline</strong>
                  <span>1999 → Present</span>
                </span>
                <span>
                  <strong>Installations</strong>
                  <span>150+ worldwide</span>
                </span>
                <span>
                  <strong>Certification</strong>
                  <span>ISO 9001:2015</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="section section--testimonials" data-animate="zoom-in" data-delay="0.12s">
          <div className="testimonials-galaxy">
            <header className="testimonials-galaxy__header" data-animate="fade-up" data-delay="0.12s">
              <span className="testimonials-galaxy__kicker">Testimonials</span>
              <h2 className="testimonials-galaxy__title">Champions of innovation, speaking for VEC</h2>
              <p className="testimonials-galaxy__lead">
                From university labs to high-production manufacturing, organisations partner with us to build and sustain vacuum environments they can
                trust.
              </p>
            </header>

            <div className="testimonials-galaxy__layout">
              <aside className="testimonials-galaxy__orbit" data-animate="fade-right" data-delay="0.18s">
                {testimonials.map((item, index) => (
                  <button
                    key={item.name}
                    type="button"
                    className={`testimonials-galaxy__orbit-chip${index === activeTestimonial ? ' is-active' : ''}`}
                    onMouseEnter={() => setActiveTestimonial(index)}
                    onFocus={() => setActiveTestimonial(index)}
                    onClick={() => setActiveTestimonial(index)}
                    aria-label={`Highlight testimonial ${index + 1} from ${item.name}`}
                  >
                    <span className="testimonials-galaxy__orbit-index">{String(index + 1).padStart(2, '0')}</span>
                    <span className="testimonials-galaxy__orbit-label">{item.name}</span>
                  </button>
                ))}
              </aside>

              <div className="testimonials-galaxy__card" data-animate="zoom-in" data-delay="0.26s">
                <div className="testimonials-galaxy__halo" aria-hidden="true" />
                <div className="testimonials-galaxy__burst" aria-hidden="true" />
                <span className="testimonials-galaxy__quote-icon" aria-hidden="true">
                  "
                </span>
                <p className="testimonials-galaxy__quote">{testimonials[activeTestimonial].quote}</p>
                <footer className="testimonials-galaxy__meta">
                  <div className="testimonials-galaxy__identity">
                    <strong>{testimonials[activeTestimonial].name}</strong>
                    <span>{testimonials[activeTestimonial].role}</span>
                    {testimonials[activeTestimonial].company && <span>{testimonials[activeTestimonial].company}</span>}
                  </div>
                  <div className="testimonials-galaxy__controls">
                    <button
                      type="button"
                      onClick={() => handleTestimonialNav('prev')}
                      className="testimonials-galaxy__control"
                      aria-label="Previous testimonial"
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      onClick={() => handleTestimonialNav('next')}
                      className="testimonials-galaxy__control"
                      aria-label="Next testimonial"
                    >
                      →
                    </button>
                  </div>
                </footer>
              </div>

              <div className="testimonials-galaxy__timeline" aria-hidden="true" data-animate="fade-up" data-delay="0.32s">
                {testimonials.map((item, index) => (
                  <span
                    key={item.name}
                    className={`testimonials-galaxy__timeline-node${index === activeTestimonial ? ' is-active' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="section section--gallery" data-animate="fade-up" data-delay="0.1s">
          <div className="clients-marquee">
            <header className="clients-marquee__header" data-animate="fade-up" data-delay="0.1s">
              <span className="clients-marquee__kicker">Our clients</span>
              <h2 className="clients-marquee__title">Trusted by leading research organisations & industries</h2>
              <p className="clients-marquee__lead">
                Institutions across academia and industry choose VEC Solutions for vacuum systems that deliver precision and reliability.
              </p>
            </header>
            <div className="clients-marquee__ticker" role="presentation" data-animate="fade-up" data-delay="0.18s">
              <div className="clients-marquee__track">
                {clientLogos.map((logo) => (
                  <div key={logo.alt} className="clients-marquee__logo">
                    <img src={logo.src} alt={`${logo.alt} logo`} loading="lazy" />
                  </div>
                ))}
                {clientLogos.map((logo) => (
                  <div key={`${logo.alt}-repeat`} className="clients-marquee__logo">
                    <img src={logo.src} alt={`${logo.alt} logo duplicate`} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default About

