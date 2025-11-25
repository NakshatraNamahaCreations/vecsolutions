import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import sputteringImage from '../assets/glove_box/RF-DC Sputtering System.jpg'
import sputteringHeroImage from '../assets/glove_box/pexels-pixabay-414579.jpg'
import './Home.css'
import './About.css'
import './RFDCSputteringSystem.css'

function RFDCSputteringSystem() {
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

  const features = [
    {
      title: 'Dual Sputtering Modes',
      description: 'Seamlessly switch between RF and DC sputtering to optimize the deposition process for different materials and applications.'
    },
    {
      title: 'High-Precision Control',
      description: 'Advanced power supply units with fine-tuned control over sputtering parameters ensure uniform thin film coatings with exceptional adhesion and density.'
    },
    {
      title: 'Customizable Configuration',
      description: 'Tailor the system to your specific needs with customizable chamber sizes, target configurations, and substrate holders, accommodating diverse research and production requirements.'
    },
    {
      title: 'Robust Vacuum System',
      description: 'Integrated with a high-performance vacuum pumping system, the RF/DC Sputtering System achieves ultra-high vacuum levels, reducing contamination and ensuring high-purity thin films.'
    }
  ]

  return (
    <div className="app-shell">
      <Navbar />
      <main className="main">
        <section
          id="rfdc-hero"
          className="about-hero"
        >
          <div className="about-hero__image" style={{ backgroundImage: `url(${sputteringHeroImage})` }} />
          <div className="about-hero__overlay" />
          <div className="about-hero__content about-hero__content--left">
            <h1 className="about-hero__title">
              <span className="about-hero__title-line">RF/DC Sputtering System</span>
            </h1>
            <p className="about-hero__subtitle">
              <span className="about-hero__subtitle-line">State-of-the-art system offering both RF and DC sputtering modes for precision thin film deposition on conductive, semiconductive, and insulating materials.</span>
            </p>
          </div>
        </section>

        <div className="about-hero-spacer" />

        <section className="rfdc-intro" data-animate="fade-up" data-delay="0.2s">
          <div className="rfdc-intro__container">
            <div className="rfdc-intro__content" data-animate="fade-up" data-delay="0.22s">
              <h2 className="rfdc-intro__title">RF/DC Sputtering System</h2>
              <p className="rfdc-intro__description">
                Ideal for applications in materials science, semiconductor research, and nanotechnology, our RF/DC Sputtering System delivers unparalleled performance and reliability, making it an essential tool for any advanced laboratory.
              </p>
            </div>
          </div>
        </section>

        <section className="rfdc-features" data-animate="fade-up" data-delay="0.25s">
          <div className="rfdc-features__container">
            <header className="rfdc-features__header" data-animate="fade-up" data-delay="0.27s">
              <span className="rfdc-features__kicker">Features</span>
              <h2 className="rfdc-features__title">Key Features and Benefits</h2>
            </header>
            <div className="rfdc-features__layout">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`rfdc-feature__item ${index % 2 === 0 ? 'rfdc-feature__item--left' : 'rfdc-feature__item--right'}`}
                  data-animate={index % 2 === 0 ? 'slide-right' : 'slide-left'}
                  data-delay={`${0.29 + index * 0.1}s`}
                >
                  <div className="rfdc-feature__content">
                    <div className="rfdc-feature__number">{String(index + 1).padStart(2, '0')}</div>
                    <div className="rfdc-feature__text">
                      <h3 className="rfdc-feature__title">{feature.title}</h3>
                      <p className="rfdc-feature__description">{feature.description}</p>
                    </div>
                  </div>
                  <div className="rfdc-feature__line"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default RFDCSputteringSystem



