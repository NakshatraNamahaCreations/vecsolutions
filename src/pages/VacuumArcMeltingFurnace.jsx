import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import arcFurnaceImage from '../assets/explore_section/GAF.jpg'
import arcFurnaceHeroImage from '../assets/glove_box/pexels-pixabay-414579.jpg'
import './Home.css'
import './About.css'
import './VacuumArcMeltingFurnace.css'

function VacuumArcMeltingFurnace() {
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
      title: 'High-Purity Melting',
      description: 'Our Vacuum ARC Melting Furnaces are engineered to produce metals and alloys with extremely high purity. By melting materials in a high-vacuum environment, contamination is minimized, ensuring the highest quality end products.'
    },
    {
      title: 'Precise Control',
      description: 'Equipped with advanced control systems, our furnaces offer precise management of melting parameters, including temperature, power input, and melting time. This precision ensures consistent and repeatable results, essential for both research and production.'
    },
    {
      title: 'Robust Construction',
      description: 'Designed with durability in mind, our furnaces feature high-quality materials and robust construction. This ensures long-term reliability and minimal maintenance, even under the most demanding conditions.'
    },
    {
      title: 'User-Friendly Operation',
      description: 'Our furnaces come with an intuitive user interface, making them easy to operate and program. This allows users to quickly set up and execute complex melting processes with ease, enhancing productivity and efficiency.'
    },
    {
      title: 'Safety Features',
      description: 'Safety is paramount in high-temperature melting operations. Our Vacuum ARC Melting Furnaces are equipped with comprehensive safety features, including over-temperature protection, vacuum integrity monitoring, and emergency shut-off systems. These features ensure safe operation and protection for both users and equipment.'
    }
  ]

  const applications = [
    'Metallurgical Research: Ideal for studying the properties and behaviors of different metals and alloys under controlled environments.',
    'Alloy Development: Facilitates the creation and testing of new metal alloys with precise compositional control.',
    'Material Processing: Suitable for refining and purifying metals for high-tech applications.',
    'Quality Control: Provides reliable testing and analysis for quality assurance in metal production processes.',
    'Academic Research: Supports cutting-edge research projects in universities and research institutions.'
  ]

  const whyChoose = [
    'Expertise and Innovation: With years of experience in vacuum arc melting technology, we offer unparalleled expertise and knowledge.',
    'Customized Solutions: We provide tailored solutions to meet the specific needs of your laboratory or production facility, ensuring optimal performance and results.',
    'Comprehensive Support: From initial consultation to installation and ongoing maintenance, our dedicated support team is here to assist you every step of the way.'
  ]

  return (
    <div className="app-shell">
      <Navbar />
      <main className="main">
        <section
          id="vamf-hero"
          className="about-hero"
        >
          <div className="about-hero__image" style={{ backgroundImage: `url(${arcFurnaceHeroImage})` }} />
          <div className="about-hero__overlay" />
          <div className="about-hero__content about-hero__content--left">
            <h1 className="about-hero__title">
              <span className="about-hero__title-line">Vacuum Arc Melting Furnace</span>
            </h1>
            <p className="about-hero__subtitle">
              <span className="about-hero__subtitle-line">A vacuum arc melting furnace is a specialized industrial furnace that utilizes an electric arc under a vacuum to melt and refine metals and alloys. This process is essential for producing materials with high purity and homogeneous compositions.</span>
            </p>
          </div>
        </section>

        <div className="about-hero-spacer" />

        <section className="vamf-intro" data-animate="fade-up" data-delay="0.15s">
          <div className="vamf-intro__container">
            <div className="vamf-intro__content">
              <div className="vamf-intro__text" data-animate="fade-up" data-delay="0.16s">
                <h2 className="vamf-intro__title">Vacuum ARC Melting Furnace</h2>
                <p className="vamf-intro__description">
                  We provide advanced Vacuum ARC Melting Furnaces designed to meet the demanding needs of metallurgical research and production. Our furnaces offer precise control, exceptional performance, and unmatched reliability, making them the ideal choice for laboratories and industrial applications focused on high-purity metal and alloy production.
                </p>
              </div>
              <div className="vamf-intro__image" data-animate="fade-left" data-delay="0.18s">
                <img src={arcFurnaceImage} alt="Vacuum Arc Melting Furnace" />
              </div>
            </div>
          </div>
        </section>

        <section className="vamf-features" data-animate="fade-up" data-delay="0.2s">
          <div className="vamf-features__container">
            <header className="vamf-features__header" data-animate="fade-up" data-delay="0.22s">
              <span className="vamf-features__kicker">Features</span>
              <h2 className="vamf-features__title">Key Features and Benefits</h2>
            </header>
            <div className="vamf-features__grid">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="vamf-feature__card"
                  data-animate="fade-up"
                  data-delay={`${0.24 + index * 0.08}s`}
                >
                  <h3 className="vamf-feature__title">{feature.title}</h3>
                  <p className="vamf-feature__description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="vamf-applications" data-animate="fade-up" data-delay="0.3s">
          <div className="vamf-applications__container">
            <header className="vamf-applications__header" data-animate="fade-up" data-delay="0.32s">
              <span className="vamf-applications__kicker">Applications</span>
              <h2 className="vamf-applications__title">Applications</h2>
            </header>
            <ul className="vamf-applications__list">
              {applications.map((app, index) => (
                <li
                  key={index}
                  className="vamf-applications__item"
                  data-animate="fade-left"
                  data-delay={`${0.34 + index * 0.06}s`}
                >
                  <span className="vamf-applications__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="vamf-applications__text">{app}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="vamf-why-choose" data-animate="fade-up" data-delay="0.4s">
          <div className="vamf-why-choose__container">
            <header className="vamf-why-choose__header" data-animate="fade-up" data-delay="0.42s">
              <span className="vamf-why-choose__kicker">Why Choose Us</span>
              <h2 className="vamf-why-choose__title">Why Choose VEC Solutions?</h2>
            </header>
            <div className="vamf-why-choose__grid">
              {whyChoose.map((item, index) => (
                <div
                  key={index}
                  className="vamf-why-choose__card"
                  data-animate="zoom-in"
                  data-delay={`${0.44 + index * 0.08}s`}
                >
                  <div className="vamf-why-choose__number">{String(index + 1).padStart(2, '0')}</div>
                  <p className="vamf-why-choose__text">{item}</p>
                </div>
              ))}
            </div>
            <div className="vamf-why-choose__cta" data-animate="fade-up" data-delay="0.5s">
              <p className="vamf-why-choose__cta-text">
                Invest in the future of your research and production with our high-performance Vacuum ARC Melting Furnaces. Contact us today to learn more about our products and how they can enhance your laboratory or industrial processes.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default VacuumArcMeltingFurnace



