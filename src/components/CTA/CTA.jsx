import styles from './CTA.module.css'
import ctaProduct from '../../assets/images/hero/hero-powerbank-phone.png'

function CTA() {
  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const badges = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="M7 15h0M2 9h20"/>
        </svg>
      ),
      text: 'Secure Checkout'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 12l3 3 5-6"/>
        </svg>
      ),
      text: '30-Day Returns'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="3" width="15" height="13" rx="2"/>
          <path d="M16 8h4l3 3v5a2 2 0 01-2 2h-5"/>
          <circle cx="5.5" cy="18.5" r="2.5"/>
          <circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
      ),
      text: 'Fast Shipping'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      ),
      text: '18-Month Warranty'
    }
  ]

  return (
    <section id="cta" className={styles.section}>
      <div className={styles.backgroundShapes}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
      </div>
      
      <div className={styles.container}>
        <div className={`${styles.content} reveal`}>
          <span className={styles.subtitle}>Ready to Power Up?</span>
          <h2 className={styles.title}>
            Get Your VOLTIX Pro 10K Today
          </h2>
          <p className={styles.description}>
            Join thousands of satisfied customers who never worry about running out of battery. 
            Premium portable power, engineered for modern life.
          </p>

          <div className={styles.priceBox}>
            <div className={styles.priceMain}>
              <span className={styles.priceValue}>$49.99</span>
              <span className={styles.priceOriginal}>$69.99</span>
            </div>
            <span className={styles.priceSave}>You save $20.00 (28%)</span>
          </div>

          <div className={styles.buttons}>
            <a href="#" className={styles.primaryButton}>
              <span>Buy Now</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a 
              href="#specifications" 
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('specifications')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className={styles.secondaryButton}
            >
              View Full Specs
            </a>
          </div>

          <div className={styles.badges}>
            {badges.map((badge, index) => (
              <div key={index} className={styles.badge}>
                <span className={styles.badgeIcon}>{badge.icon}</span>
                <span className={styles.badgeText}>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.visual} reveal`}>
          <div className={styles.imageWrapper}>
            <img 
              src={ctaProduct} 
              alt="VOLTIX Pro 10K Magnetic Wireless Power Bank"
              className={styles.productImage}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
