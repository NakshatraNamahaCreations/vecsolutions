import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import vacuumInductionFurnaceImage from '../assets/glove_box/Vacuum Induction Furnace.jpg'
import './Home.css'
import './About.css'
import './VacuumInductionFurnace.css'

function VacuumInductionFurnace() {
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
      title: 'Precision Control',
      description: 'Our Lab Scale Vacuum Induction Furnaces offer precise control over temperature and atmosphere, allowing researchers to conduct experiments with high accuracy. The advanced control systems ensure consistent and repeatable results, critical for scientific research.'
    },
    {
      title: 'High Efficiency',
      description: 'Designed for efficiency, our furnaces utilize cutting-edge induction heating technology. This ensures rapid heating and cooling cycles, reducing processing time and increasing throughput. The efficient design also helps in minimizing energy consumption, making it an eco-friendly choice.'
    },
    {
      title: 'Versatility',
      description: 'Our vacuum induction furnaces are highly versatile, capable of handling a wide range of materials, including metals, alloys, and ceramics. This makes them suitable for various applications such as melting, casting, and alloy development, among others.'
    },
    {
      title: 'Enhanced Safety',
      description: 'Safety is paramount in laboratory environments. Our furnaces come equipped with comprehensive safety features, including over-temperature protection, vacuum integrity monitoring, and emergency shut-off systems. These features ensure safe operation and protection for both users and equipment.'
    },
    {
      title: 'Compact Design',
      description: 'Despite their advanced capabilities, our Lab Scale Vacuum Induction Furnaces are designed with a compact footprint. This makes them ideal for laboratory settings where space is at a premium. The ergonomic design ensures ease of use and maintenance.'
    }
  ]

  const applications = [
    'Materials Research: Conduct experiments on new materials and alloys with precise control over processing conditions.',
    'Metallurgical Studies: Explore the properties and behaviours of different metals and alloys under controlled environments.',
    'Quality Control: Perform high-precision testing and analysis for quality assurance in production processes.',
    'Academic Research: Support cutting-edge research projects in universities and research institutions.'
  ]

  const whyChoose = [
    'Expertise and Experience: With years of experience in the field, we offer unparalleled expertise and knowledge in vacuum induction furnace technology.',
    'Customized Solutions: We provide tailored solutions to meet the specific needs of your laboratory, ensuring optimal performance and results.',
    'Comprehensive Support: From installation to maintenance, our dedicated support team is here to assist you every step of the way.'
  ]

  return (
    <div className="app-shell">
      <Navbar />
      <main className="main">
        <section
          id="vif-hero"
          className="about-hero"
        >
          <div className="about-hero__image" style={{ backgroundImage: `url(${vacuumInductionFurnaceImage})` }} />
          <div className="about-hero__overlay" />
          <div className="about-hero__content about-hero__content--left">
            <h1 className="about-hero__title">
              <span className="about-hero__title-line">Vacuum Induction Furnace</span>
            </h1>
            <p className="about-hero__subtitle">
              <span className="about-hero__subtitle-line">A Vacuum Induction Furnace is an advanced metallurgical equipment used for the melting, refining, and casting of high-purity metals and specialty alloys. It operates under a vacuum or controlled atmosphere to prevent contamination from oxidation and other impurities.</span>
            </p>
          </div>
        </section>

        <div className="about-hero-spacer" />

        <section className="vif-intro" data-animate="fade-up" data-delay="0.15s">
          <div className="vif-intro__container">
            <div className="vif-intro__content">
              <div className="vif-intro__text" data-animate="fade-up" data-delay="0.16s">
                <h2 className="vif-intro__title">Lab Scale Vacuum Induction Furnace</h2>
                <p className="vif-intro__description">
                  At VEC Solutions, we are proud to offer state-of-the-art Lab Scale Vacuum Induction Furnaces, designed to meet the rigorous demands of modern research and development environments. Our furnaces are engineered to provide precise control, exceptional performance, and unmatched reliability, making them the ideal choice for laboratories working on advanced materials and metallurgical processes.
                </p>
              </div>
              <div className="vif-intro__image" data-animate="fade-left" data-delay="0.18s">
                <img src={vacuumInductionFurnaceImage} alt="Vacuum Induction Furnace" />
              </div>
            </div>
          </div>
        </section>

        <section className="vif-features" data-animate="fade-up" data-delay="0.2s">
          <div className="vif-features__container">
            <header className="vif-features__header" data-animate="fade-up" data-delay="0.22s">
              <span className="vif-features__kicker">Features</span>
              <h2 className="vif-features__title">Key Features and Benefits</h2>
            </header>
            <div className="vif-features__grid">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="vif-feature__card"
                  data-animate="fade-up"
                  data-delay={`${0.24 + index * 0.08}s`}
                >
                  <h3 className="vif-feature__title">{feature.title}</h3>
                  <p className="vif-feature__description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="vif-applications" data-animate="fade-up" data-delay="0.3s">
          <div className="vif-applications__container">
            <header className="vif-applications__header" data-animate="fade-up" data-delay="0.32s">
              <span className="vif-applications__kicker">Applications</span>
              <h2 className="vif-applications__title">Applications</h2>
            </header>
            <ul className="vif-applications__list">
              {applications.map((app, index) => (
                <li
                  key={index}
                  className="vif-applications__item"
                  data-animate="fade-left"
                  data-delay={`${0.34 + index * 0.06}s`}
                >
                  <span className="vif-applications__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="vif-applications__text">{app}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="vif-why-choose" data-animate="fade-up" data-delay="0.4s">
          <div className="vif-why-choose__container">
            <header className="vif-why-choose__header" data-animate="fade-up" data-delay="0.42s">
              <span className="vif-why-choose__kicker">Why Choose Us</span>
              <h2 className="vif-why-choose__title">Why Choose VEC Solutions?</h2>
            </header>
            <div className="vif-why-choose__grid">
              {whyChoose.map((item, index) => (
                <div
                  key={index}
                  className="vif-why-choose__card"
                  data-animate="zoom-in"
                  data-delay={`${0.44 + index * 0.08}s`}
                >
                  <div className="vif-why-choose__number">{String(index + 1).padStart(2, '0')}</div>
                  <p className="vif-why-choose__text">{item}</p>
                </div>
              ))}
            </div>
            <div className="vif-why-choose__cta" data-animate="fade-up" data-delay="0.5s">
              <p className="vif-why-choose__cta-text">
                Invest in the future of your research with our Lab Scale Vacuum Induction Furnaces. Contact us today to learn more about our products and how they can enhance your laboratory's capabilities.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default VacuumInductionFurnace



