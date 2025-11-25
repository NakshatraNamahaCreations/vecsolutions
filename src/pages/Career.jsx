import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import careerHeroImage from '../assets/home_banner/aboutbanner.jpg'
import './Home.css'
import './About.css'
import './Career.css'

function Career() {
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
          id="career-hero"
          className="about-hero"
        >
          <div className="about-hero__image" style={{ backgroundImage: `url(${careerHeroImage})` }} />
          <div className="about-hero__overlay" />
          <div className="about-hero__content about-hero__content--left">
            <h1 className="about-hero__title">
              <span className="about-hero__title-line">Career Opportunities</span>
            </h1>
            <p className="about-hero__subtitle">
              <span className="about-hero__subtitle-line">Join our team and be part of innovative solutions in vacuum technology. We're looking for talented individuals who are passionate about engineering excellence.</span>
            </p>
          </div>
        </section>

        <div className="about-hero-spacer" />
      </main>

      <Footer />
    </div>
  )
}

export default Career

