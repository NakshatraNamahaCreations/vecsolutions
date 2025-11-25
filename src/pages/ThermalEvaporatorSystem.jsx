import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import thermalEvaporatorImage from '../assets/glove_box/Thermal-Evaporator-Systems.jpg'
import thermalEvaporatorHeroImage from '../assets/home_banner/aboutbanner.jpg'
import './Home.css'
import './About.css'
import './ThermalEvaporatorSystem.css'

function ThermalEvaporatorSystem() {
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
      title: 'Superior Deposition Quality',
      description: 'Our Thermal Evaporator Systems are engineered to deliver exceptional film uniformity and purity. With advanced thermal management and precise control over deposition parameters, you can achieve high-quality thin films that meet the strictest standards.'
    },
    {
      title: 'Versatile Applications',
      description: 'Designed for versatility, our thermal evaporators can handle a wide range of materials, including metals, insulators, and semiconductors. This makes them suitable for various applications such as microelectronics, photovoltaic cells, optical coatings, and nanotechnology research.'
    },
    {
      title: 'Precision Control',
      description: 'Equipped with state-of-the-art control systems, our thermal evaporators offer precise management of temperature, deposition rate, and film thickness. This ensures reproducibility and accuracy in every deposition process, essential for high-end research and production.'
    },
    {
      title: 'Robust Design',
      description: 'Built with durability in mind, our Thermal Evaporator Systems feature high-quality materials and robust construction. This ensures long-term reliability and minimal maintenance, even under demanding operating conditions.'
    },
    {
      title: 'User-Friendly Interface',
      description: 'Our systems come with an intuitive user interface, making them easy to operate and program. This allows users to quickly set up and execute complex deposition processes with ease, enhancing productivity and efficiency.'
    }
  ]

  const pumpOptions = [
    {
      title: 'Turbo Pump Based Thermal Evaporators',
      description: 'Our turbo pump-based systems provide rapid pump-down times and achieve high vacuum levels, ideal for applications requiring ultra-clean environments and high deposition rates. These systems are perfect for producing high-purity thin films and for use in high-vacuum applications.'
    },
    {
      title: 'Diffusion Pump (DP) Based Thermal Evaporators',
      description: 'Our diffusion pump-based systems are cost-effective solutions for achieving high vacuum levels suitable for many thin film deposition applications. These systems are known for their robustness and reliability, making them an excellent choice for general-purpose thermal evaporation processes.'
    }
  ]

  const applications = [
    'Microelectronics: Deposition of thin metal layers for integrated circuits and semiconductor devices.',
    'Optical Coatings: Production of anti-reflective coatings, mirrors, and other optical components.',
    'Nanotechnology: Fabrication of nanostructures and thin films for advanced research',
    'Photovoltaics: Development of thin-film solar cells and other photovoltaic devices.',
    'Material Science: Study of material properties and development of new materials.'
  ]

  const whyChoose = [
    'Expertise and Innovation: With years of experience and a commitment to innovation, we provide cutting-edge solutions that meet the evolving needs of our customers.',
    'Customization: We offer tailored solutions to fit your specific requirements, ensuring optimal performance for your applications.',
    'Comprehensive Support: From initial consultation to installation and ongoing maintenance, our dedicated support team is here to assist you at every step.'
  ]

  return (
    <div className="app-shell">
      <Navbar />
      <main className="main">
        <section
          id="tes-hero"
          className="about-hero"
        >
          <div className="about-hero__image" style={{ backgroundImage: `url(${thermalEvaporatorHeroImage})` }} />
          <div className="about-hero__overlay" />
          <div className="about-hero__content about-hero__content--left">
            <h1 className="about-hero__title">
              <span className="about-hero__title-line">Thermal Evaporator System</span>
            </h1>
            <p className="about-hero__subtitle">
              <span className="about-hero__subtitle-line">Industrial equipment for concentrating solutions through heat-driven solvent evaporation, used in wastewater treatment, chemical processing, and food production.</span>
            </p>
          </div>
        </section>

        <div className="about-hero-spacer" />

        <section className="tes-intro" data-animate="fade-up" data-delay="0.15s">
          <div className="tes-intro__container">
            <div className="tes-intro__content">
              <div className="tes-intro__text" data-animate="fade-up" data-delay="0.16s">
                <h2 className="tes-intro__title">Thermal Evaporator Systems</h2>
                <p className="tes-intro__description">
                  At VEC Solutions, we offer top-of-the-line Thermal Evaporator Systems designed to meet the precise requirements of modern laboratories and industrial applications. Our systems provide reliable, efficient, and high-quality thin film deposition, essential for advanced material research, electronics, optics, and more.
                </p>
              </div>
              <div className="tes-intro__image" data-animate="fade-left" data-delay="0.18s">
                <img src={thermalEvaporatorImage} alt="Thermal Evaporator System" />
              </div>
            </div>
          </div>
        </section>

        <section className="tes-features" data-animate="fade-up" data-delay="0.2s">
          <div className="tes-features__container">
            <header className="tes-features__header" data-animate="fade-up" data-delay="0.22s">
              <span className="tes-features__kicker">Features</span>
              <h2 className="tes-features__title">Key Features and Benefits</h2>
            </header>
            <div className="tes-features__grid">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="tes-feature__card"
                  data-animate="fade-up"
                  data-delay={`${0.24 + index * 0.08}s`}
                >
                  <h3 className="tes-feature__title">{feature.title}</h3>
                  <p className="tes-feature__description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="tes-pump-options" data-animate="fade-up" data-delay="0.3s">
          <div className="tes-pump-options__container">
            <header className="tes-pump-options__header" data-animate="fade-up" data-delay="0.32s">
              <span className="tes-pump-options__kicker">Pump Options</span>
              <h2 className="tes-pump-options__title">Pump Options</h2>
              <p className="tes-pump-options__subtitle">
                To cater to diverse operational requirements, we offer two types of pump-based Thermal Evaporator Systems:
              </p>
            </header>
            <div className="tes-pump-options__grid">
              {pumpOptions.map((option, index) => (
                <div
                  key={index}
                  className="tes-pump-option__card"
                  data-animate="zoom-in"
                  data-delay={`${0.34 + index * 0.1}s`}
                >
                  <div className="tes-pump-option__badge">
                    {index === 0 ? 'Turbo' : 'DP'}
                  </div>
                  <h3 className="tes-pump-option__title">{option.title}</h3>
                  <p className="tes-pump-option__description">{option.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="tes-applications" data-animate="fade-up" data-delay="0.4s">
          <div className="tes-applications__container">
            <header className="tes-applications__header" data-animate="fade-up" data-delay="0.42s">
              <span className="tes-applications__kicker">Applications</span>
              <h2 className="tes-applications__title">Applications</h2>
            </header>
            <ul className="tes-applications__list">
              {applications.map((app, index) => (
                <li
                  key={index}
                  className="tes-applications__item"
                  data-animate="fade-left"
                  data-delay={`${0.44 + index * 0.06}s`}
                >
                  <span className="tes-applications__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="tes-applications__text">{app}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="tes-why-choose" data-animate="fade-up" data-delay="0.5s">
          <div className="tes-why-choose__container">
            <header className="tes-why-choose__header" data-animate="fade-up" data-delay="0.52s">
              <span className="tes-why-choose__kicker">Why Choose Us</span>
              <h2 className="tes-why-choose__title">Why Choose VEC Solutions?</h2>
            </header>
            <div className="tes-why-choose__grid">
              {whyChoose.map((item, index) => (
                <div
                  key={index}
                  className="tes-why-choose__card"
                  data-animate="zoom-in"
                  data-delay={`${0.54 + index * 0.08}s`}
                >
                  <div className="tes-why-choose__number">{String(index + 1).padStart(2, '0')}</div>
                  <p className="tes-why-choose__text">{item}</p>
                </div>
              ))}
            </div>
            <div className="tes-why-choose__cta" data-animate="fade-up" data-delay="0.6s">
              <p className="tes-why-choose__cta-text">
                Enhance your research and production capabilities with our high-performance Thermal Evaporator Systems. Contact us today to learn more about our products and how they can benefit your laboratory or industrial processes.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ThermalEvaporatorSystem



