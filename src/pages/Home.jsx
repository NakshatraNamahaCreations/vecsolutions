import { useEffect, useMemo, useState } from 'react'
import heroBanner from '../assets/home_banner/home1.jpg'
import globalBackdrop from '../assets/home_banner/home2.jpg'
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
import homeImage1 from '../assets/home_iamges/vec_home.png'
import homeImage2 from '../assets/home_iamges/home2_vec.jpg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Home.css'

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

const aboutSteps = [
  {
    id: 'overview',
    label: 'Overview',
    headline: 'Welcome to VEC Solutions',
    copy:
      "Welcome to VEC Solutions, your trusted partner in the realm of vacuum technology. As one of India's foremost manufacturers of vacuum equipment, we specialize in crafting precision-engineered solutions that meet the exacting standards of diverse industries.",
  },
  {
    id: 'expertise',
    label: 'Engineering Expertise',
    headline: 'Precision engineered solutions for every requirement',
    copy:
      'From gloveboxes and custom purification systems to induction furnaces and thin-film deposition platforms, our teams build systems that empower researchers and manufacturers to explore new frontiers with confidence.',
  },
  {
    id: 'legacy',
    label: 'Legacy & Reach',
    headline: 'Decades of leadership across India and beyond',
    copy:
      'With over two decades of experience, we have cemented our position as pioneers in the field, delivering cutting-edge products and responsive support to clients across India and beyond.',
  },
]

const whyHighlights = [
  {
    id: 'leading',
    kicker: "India's Leading Manufacturer",
    title: 'Proven excellence across every build',
    body:
      "With a proven track record and a reputation for excellence, we proudly stand as one of India's leading manufacturers of vacuum equipment. Our extensive portfolio and relentless focus on customer success consistently set us apart.",
  },
  {
    id: 'innovation',
    kicker: 'Leadership in Innovation',
    title: 'Engineering breakthroughs without compromise',
    body:
      'Innovation is at the heart of VEC Solutions. Seasoned engineers and technicians leverage decades of expertise to develop advanced solutions that push the boundaries of vacuum technology and empower future-ready research.',
  },
  {
    id: 'certified',
    kicker: 'ISO Certified Excellence',
    title: 'Quality assured, every single time',
    body:
      "Our ISO 9001:2015 certification reinforces an unwavering dedication to quality and reliability. Every system we deliver is built, tested, and validated against stringent benchmarks so you can operate with complete confidence.",
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
    company: 'Lab Services',
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

const supportHighlights = [
  {
    title: 'Professional Team',
    description:
      'Seasoned engineers and technicians who bring decades of collective experience to every engagement.',
  },
  {
    title: 'Certified Engineers',
    description:
      'ISO 9001:2015 certified expertise ensuring stringent quality control across design and manufacturing.',
  },
  {
    title: 'Latest Technology',
    description:
      'Advanced tooling, instrumentation, and automation delivering reliable and innovative solutions.',
  },
  {
    title: 'Reliability',
    description:
      'Long-term partnerships built on dependable performance and responsive service delivery.',
  },
]

const usefulLinks = [
  { label: 'About us', href: '#about' },
  { label: 'Our services', href: '#products' },
  { label: 'Contact us', href: '#contact' },
  { label: 'FAQ', href: '#support' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'News', href: '#gallery' },
]


function Home() {
  const [activeStatement, setActiveStatement] = useState('vision')
  const [activeAboutStep, setActiveAboutStep] = useState(aboutSteps[0].id)
  const [activeProduct, setActiveProduct] = useState(productHighlights[0].id)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const activeProductData = useMemo(
    () => productHighlights.find((product) => product.id === activeProduct) ?? productHighlights[0],
    [activeProduct],
  )
  const totalTestimonials = testimonials.length
  const prevTestimonial = (activeTestimonial + totalTestimonials - 1) % totalTestimonials
  const nextTestimonial = (activeTestimonial + 1) % totalTestimonials

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
    // Wait for DOM to be fully ready
    const initAnimations = () => {
      const animatedElements = document.querySelectorAll('[data-animate]')
      
      if (animatedElements.length === 0) return

      const elementsToAnimate = []

      animatedElements.forEach((el, index) => {
        // Skip hero section elements as they're always visible
        if (el.closest('.hero')) {
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

          // Check if element is in viewport (with some offset)
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

      // Observe all elements except hero section
      elementsToAnimate.forEach((el) => {
        observer.observe(el)
      })

      // Initial check
      checkVisibility()

      // Also check on scroll as backup
      window.addEventListener('scroll', checkVisibility, { passive: true })
      window.addEventListener('resize', checkVisibility, { passive: true })

      return () => {
        observer.disconnect()
        window.removeEventListener('scroll', checkVisibility)
        window.removeEventListener('resize', checkVisibility)
      }
    }

    // Initialize after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(initAnimations, 100)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])


  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % totalTestimonials)
    }, 6000)

    return () => window.clearInterval(timer)
  }, [totalTestimonials])

  const handleTestimonialNav = (direction) => {
    setActiveTestimonial((prev) => {
      if (direction === 'prev') {
        return (prev + totalTestimonials - 1) % totalTestimonials
      }
      if (direction === 'next') {
        return (prev + 1) % totalTestimonials
      }
      return prev
    })
  }

  return (
    <div className="app-shell">
      <Navbar />
      <main className="main">
        <section
          id="home"
          className="hero hero--visual"
          data-animate="fade-up"
          data-delay="0.05s"
        >
          <video className="hero__video" src="/video (2).mp4" autoPlay muted loop playsInline />
          <div className="hero__overlay" />
          <div className="hero__content hero__content--left" data-animate="fade-up" data-delay="0.12s">
            <h1 className="hero__title">
              <span className="hero__title-line">Vacuum ecosystems engineered for breakthrough outcomes</span>
            </h1>
            <p className="hero__subtitle">
              <span className="hero__subtitle-line">Precision platforms for research • Reliable manufacturing • Expert partnership</span>
            </p>
          </div>
        </section>

        <div className="hero-spacer" style={{ height: '100vh' }} />

        <section
          id="about"
          className="section section--about"
          data-animate="fade-up"
          data-delay="0.1s"
        >
          <div className="about-section">
            <div className="about-section__container">
              <div className="about-section__images" data-animate="fade-right" data-delay="0.2s">
                <div className="about-section__image-grid">
                  <div className="about-section__image-card about-section__image-card--one">
                    <img src={homeImage1} alt="VEC Solutions vacuum equipment" loading="lazy" />
                  </div>
                  <div className="about-section__image-card about-section__image-card--two">
                    <img src={homeImage2} alt="VEC Solutions advanced technology" loading="lazy" />
                  </div>
                </div>
              </div>

              <div className="about-section__content" data-animate="fade-left" data-delay="0.3s">
                <div className="about-section__header">
                  <span className="about-section__kicker">About Us</span>
                  <h2 className="about-section__title">Innovating the Future of Vacuum Technology</h2>
                </div>

                <div className="about-section__tabs">
                  <button
                    type="button"
                    className={`about-section__tab ${activeAboutStep === 'overview' ? 'is-active' : ''}`}
                    onClick={() => setActiveAboutStep('overview')}
                  >
                    Wide Range of Equipment
                  </button>
                  <button
                    type="button"
                    className={`about-section__tab ${activeAboutStep === 'expertise' ? 'is-active' : ''}`}
                    onClick={() => setActiveAboutStep('expertise')}
                  >
                    Expert Support
                  </button>
                </div>

                <div className="about-section__panel">
                  {activeAboutStep === 'overview' && (
                    <div className="about-section__panel-content">
                      <p className="about-section__description">
                        Welcome to VEC Solutions, your trusted partner in the realm of vacuum technology. As one of India's foremost manufacturers of vacuum equipment, we specialize in crafting precision-engineered solutions that meet the exacting standards of diverse industries.
                      </p>
                      <p className="about-section__description">
                        With over two decades of experience, we have cemented our position as pioneers in the field, offering a comprehensive range of cutting-edge products to clients across India and beyond.
                      </p>
                    </div>
                  )}

                  {activeAboutStep === 'expertise' && (
                    <div className="about-section__panel-content">
                      <p className="about-section__description">
                        Our team of seasoned engineers and technicians brings decades of collective experience to every project. We work closely with you to design and deliver solutions that perfectly match your needs.
                      </p>
                      <p className="about-section__description">
                        From initial consultation through installation, training, and ongoing maintenance, we provide comprehensive support at every stage. Our ISO 9001:2015 certification ensures the highest standards of quality and reliability.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="why-vec"
          className="section section--why"
          data-animate="fade-up"
          data-delay="0.1s"
        >
          <div className="why-vec">
            <div className="why-vec__halo" aria-hidden="true" />
            <div className="why-vec__spark why-vec__spark--one" aria-hidden="true" />
            <div className="why-vec__spark why-vec__spark--two" aria-hidden="true" />
            <header className="why-vec__header" data-animate="fade-up" data-delay="0.1s">
              <span className="why-vec__kicker">Why VEC Solutions?</span>
              <h2 className="why-vec__title">The benchmark for vacuum technology in India</h2>
              <p className="why-vec__lead">
                A legacy of leadership, innovation, and certified excellence makes VEC Solutions the partner of choice for laboratories, manufacturing
                houses, and research institutions nationwide.
              </p>
            </header>
            <div className="why-vec__canvas" data-animate="zoom-in" data-delay="0.18s">
              <div className="why-vec__orbit why-vec__orbit--one" aria-hidden="true" />
              <div className="why-vec__orbit why-vec__orbit--two" aria-hidden="true" />
              <div className="why-vec__track">
                {whyHighlights.map((item, index) => (
                  <article key={item.id} className="why-vec__panel" style={{ '--index': index }}>
                    <header className="why-vec__panel-header">
                      <span className="why-vec__panel-index">{String(index + 1).padStart(2, '0')}</span>
                      <span className="why-vec__panel-kicker">{item.kicker}</span>
                    </header>
                    <div className="why-vec__panel-body">
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </div>
                    <footer className="why-vec__panel-footer">
                      <span className="why-vec__panel-shimmer" aria-hidden="true" />
                      <span className="why-vec__panel-spark" aria-hidden="true" />
                    </footer>
                  </article>
                ))}
              </div>
              {/* <aside className="why-vec__meta">
                <div className="why-vec__meta-pill">
                  <span className="why-vec__meta-label">Legacy Timeline</span>
                  <span className="why-vec__meta-value">1999 → today</span>
                </div>
                <div className="why-vec__meta-pill">
                  <span className="why-vec__meta-label">Installations</span>
                  <span className="why-vec__meta-value">150+ worldwide</span>
                </div>
                <div className="why-vec__meta-pill">
                  <span className="why-vec__meta-label">Certifications</span>
                  <span className="why-vec__meta-value">ISO 9001:2015</span>
                </div>
              </aside> */}
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
          id="global-scale"
          className="section section--global"
          data-animate="fade-left"
          data-delay="0.08s"
        >
          <div className="global">
            <div className="global__background" style={{ '--global-image': `url(${globalBackdrop})` }} aria-hidden="true" />
            <div className="global__layout">
              <div className="global__content">
                <span className="global__kicker">Global scale</span>
                <h2 className="global__title">The backbone for global commerce</h2>
                <p className="global__lead">
                  VEC Solutions makes moving innovation as programmable as data, partnering with research labs and advanced manufacturers across
                  continents. Our systems are installed worldwide, keeping mission-critical environments stable and operational.
                </p>
                <div className="global__metrics">
                  <div className="global__metric">
                    <span className="global__metric-value">20+</span>
                    <span className="global__metric-label">Years accelerating vacuum research</span>
                  </div>
                  <div className="global__metric">
                    <span className="global__metric-value">150+</span>
                    <span className="global__metric-label">Deployments across India & beyond</span>
                  </div>
                  <div className="global__metric">
                    <span className="global__metric-value">ISO 9001:2015</span>
                    <span className="global__metric-label">Certified manufacturing excellence</span>
                  </div>
                </div>
              </div>
              <div className="global__visual" aria-hidden="true">
                <div className="global__visual-glow" />
                <span className="global__beam global__beam--primary" />
                <span className="global__beam global__beam--secondary" />
                <span className="global__beam global__beam--tertiary" />
                <span className="global__spark global__spark--one" />
                <span className="global__spark global__spark--two" />
              </div>
            </div>
          </div>
        </section>

        <section
          id="products"
          className="section section--products"
          data-animate="fade-up"
          data-delay="0.1s"
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
                  “
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

        {/* <section id="career" className="section section--career" data-animate>
          <div className="section__header section__header--center">
            <span className="section__kicker">Career</span>
            <h2 className="section__title">Join the VEC Solutions family</h2>
            <p className="section__description section__description--narrow">
              We&apos;re always searching for dedicated professionals who share our passion for innovation, precision, and client success. Explore
              opportunities to contribute to the future of vacuum technology.
            </p>
            <a className="button button--outline" href="#contact">
              Explore Careers
            </a>
          </div>
        </section>

        <section id="support" className="section section--support" data-animate="fade-up" data-delay="0.1s">
          <div className="section__header section__header--center" data-animate="fade-up" data-delay="0.12s">
            <span className="section__kicker">Unmatched service</span>
            <h2 className="section__title">Experience comprehensive support at every stage</h2>
            <p className="section__description section__description--narrow">
              From consultation to installation, training, and ongoing maintenance, we partner with you to ensure dependable performance throughout your equipment lifecycle.
            </p>
          </div>
          <div className="support-grid" data-animate="fade-up" data-delay="0.18s">
            {supportHighlights.map((highlight) => (
              <div key={highlight.title} className="support-card">
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </div>
            ))}
          </div>
        </section> */}

        <section id="contact" className="section section--contact" data-animate="fade-up" data-delay="0.12s">
          <div className="section__header" data-animate="fade-up" data-delay="0.14s">
            <span className="section__kicker">Contact</span>
            <h2 className="section__title">Request a quote</h2>
            <p className="section__description">
              Fill in your details and our team will reach out with tailored solutions for your specific requirements.
            </p>
          </div>
          <div className="contact-grid" data-animate="fade-up" data-delay="0.2s">
            <form className="contact-form" data-animate="fade-right" data-delay="0.24s">
              <label className="form-field">
                <span>Full Name</span>
                <input type="text" name="name" placeholder="Enter your full name" />
              </label>
              <label className="form-field">
                <span>Email</span>
                <input type="email" name="email" placeholder="Enter your email address" />
              </label>
              <label className="form-field">
                <span>Phone Number</span>
                <input type="tel" name="phone" placeholder="Enter your phone number" />
              </label>
              <label className="form-field">
                <span>Business Type</span>
                <select name="businessType" defaultValue="">
                  <option value="" disabled>
                    -- Select One --
                  </option>
                  <option value="glove-box">Glove Box</option>
                  <option value="vacuum-induction-furnace">Vacuum Induction Furnace</option>
                  <option value="vacuum-arc-melting-furnace">Vacuum Arc Melting Furnace</option>
                  <option value="thermal-evaporator-system">Thermal Evaporator System</option>
                  <option value="rf-dc-sputtering-system">RF/DC Sputtering System</option>
                </select>
              </label>
              <button className="button button--primary form-submit" type="button">
                Submit
              </button>
            
            </form>
            <div className="contact-info" data-animate="fade-left" data-delay="0.28s">
              <div className="contact-card">
                <h3>Call us</h3>
                <a href="tel:+919535433436">+91-9535433436</a>
              </div>
              <div className="contact-card">
                <h3>Email us</h3>
                <a href="mailto:info@vecsolutions.com">info@vecsolutions.com</a>
              </div>
              <div className="contact-card">
                <h3>Visit us</h3>
                <p>#C-284, 7th Cross, Peenya 1st Stage, Peenya Industrial Estate, Bangalore - 560058</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}

export default Home
