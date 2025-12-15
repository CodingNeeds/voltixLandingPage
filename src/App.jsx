import { useEffect } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import FeatureStrip from './components/FeatureStrip/FeatureStrip'
import FeatureSection from './components/FeatureSection/FeatureSection'
import Compatibility from './components/Compatibility/Compatibility'
import Specifications from './components/Specifications/Specifications'
import WhatsInBox from './components/WhatsInBox/WhatsInBox'
import Reviews from './components/Reviews/Reviews'
import FAQ from './components/FAQ/FAQ'
import CTA from './components/CTA/CTA'
import Footer from './components/Footer/Footer'
import styles from './App.module.css'

function App() {
  useEffect(() => {
    // Scroll reveal animation using Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach(el => observer.observe(el))

    return () => {
      revealElements.forEach(el => observer.unobserve(el))
    }
  }, [])

  const featureSections = [
    {
      id: 'fast-charging',
      title: 'Lightning-Fast Power Delivery',
      subtitle: 'Zero Downtime, Maximum Performance',
      description: 'Experience unprecedented charging speeds with dual power delivery options. Whether you prefer wired or wireless, VOLTIX Pro 10K delivers.',
      features: [
        'PD 22.5W wired output charges your device up to 3x faster than standard chargers',
        'Up to 15W magnetic wireless charging for cable-free convenience',
        'Smart power distribution automatically optimizes output for your device',
        'Charge your phone from 0% to 50% in just 30 minutes'
      ],
      imagePosition: 'left'
    },
    {
      id: 'travel-ready',
      title: 'Designed for Life on the Move',
      subtitle: 'Compact Power, Endless Possibilities',
      description: 'At just 98 × 64 × 15 mm and weighing only 200g, the VOLTIX Pro 10K slips effortlessly into your pocket, bag, or carry-on.',
      features: [
        'Ultra-slim profile fits in your pocket alongside your phone',
        '10,000mAh capacity provides 2-3 full charges for most smartphones',
        'Airline-approved battery size for worry-free travel',
        'Premium matte finish resists fingerprints and scratches'
      ],
      imagePosition: 'right'
    },
    {
      id: 'safety',
      title: 'Intelligent Protection Technology',
      subtitle: 'Safe, Smart, and Reliable',
      description: 'Built with advanced safety features to protect both the power bank and your devices from potential damage.',
      features: [
        'Multi-layer protection against overcharging, overheating, and short circuits',
        'Smart temperature monitoring automatically adjusts output',
        'Foreign object detection ensures safe wireless charging',
        'CE, FCC, and RoHS certified for international safety standards'
      ],
      imagePosition: 'left'
    }
  ]

  return (
    <div className={styles.app}>
      <Header />
      <main>
        <Hero />
        <FeatureStrip />
        {featureSections.map((section, index) => (
          <FeatureSection
            key={section.id}
            {...section}
            index={index}
          />
        ))}
        <Compatibility />
        <Specifications />
        <WhatsInBox />
        <Reviews />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
