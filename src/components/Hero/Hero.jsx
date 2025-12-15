import styles from './Hero.module.css'
import heroBackground from '../../assets/images/hero/hero-background.jpg'
import heroPowerbankPhone from '../../assets/images/hero/hero-powerbank-phone.png'

function Hero() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${heroBackground})` }}>
      <div className={styles.backgroundOverlay}></div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span>10000mAh</span>
            <span className={styles.separator}>|</span>
            <span>PD 22.5W</span>
            <span className={styles.separator}>|</span>
            <span>15W Wireless</span>
          </div>
          
          <h1 className={styles.title}>
            VOLTIX Pro 10K
          </h1>
          
          <p className={styles.tagline}>
            Magnetic Wireless Power Bank
          </p>
          
          <p className={styles.description}>
            The ultimate portable power solution. Magnetically attach, wirelessly charge, 
            and experience lightning-fast PD charging—all in one sleek, pocket-friendly design.
          </p>
          
          <div className={styles.price}>
            <span className={styles.priceValue}>$49.99</span>
            <span className={styles.priceOriginal}>$69.99</span>
            <span className={styles.priceBadge}>Save 28%</span>
          </div>
          
          <div className={styles.cta}>
            <a 
              href="#buy" 
              onClick={(e) => scrollToSection(e, 'cta')}
              className={styles.primaryButton}
            >
              <span>Buy Now</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a 
              href="#features" 
              onClick={(e) => scrollToSection(e, 'features')}
              className={styles.secondaryButton}
            >
              Learn More
            </a>
          </div>
        </div>
        
        <div className={styles.visual}>
          <div className={styles.productWrapper}>
            <img 
              src={heroPowerbankPhone} 
              alt="VOLTIX Pro 10K Power Bank with phone attached" 
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>
      
      <div className={styles.scrollIndicator}>
        <span>Scroll to explore</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  )
}

export default Hero
