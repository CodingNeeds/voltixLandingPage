import styles from './Compatibility.module.css'

function Compatibility() {
  const devices = [
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="4" width="24" height="40" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="24" cy="38" r="2" fill="currentColor"/>
          <rect x="18" y="8" width="12" height="3" rx="1.5" fill="currentColor"/>
        </svg>
      ),
      title: 'iPhone',
      description: 'iPhone 8 and newer, including Pro & Pro Max models'
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="4" width="24" height="40" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="24" cy="38" r="2" fill="currentColor"/>
          <path d="M20 18l4 3 4-3M20 24l4 3 4-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Android',
      description: 'Samsung, Huawei, Xiaomi, and other Qi-enabled phones'
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="24" cy="30" rx="16" ry="10" stroke="currentColor" strokeWidth="2" fill="none"/>
          <ellipse cx="16" cy="20" rx="6" ry="10" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1"/>
          <ellipse cx="32" cy="20" rx="6" ry="10" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1"/>
        </svg>
      ),
      title: 'Earbuds',
      description: 'Wireless charging cases for AirPods, Galaxy Buds & more'
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="24" cy="24" r="4" fill="currentColor"/>
          <path d="M24 6v4M24 38v4M6 24h4M38 24h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Qi Wireless',
      description: 'Any device supporting Qi wireless charging standard'
    }
  ]

  const brands = [
    { name: 'Apple', letter: '' },
    { name: 'Samsung', letter: 'S' },
    { name: 'Huawei', letter: 'H' },
    { name: 'Xiaomi', letter: 'Mi' },
    { name: 'Google', letter: 'G' },
    { name: 'OnePlus', letter: '1+' }
  ]

  return (
    <section id="compatibility" className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.header} reveal`}>
          <span className={styles.subtitle}>Universal Power</span>
          <h2 className={styles.title}>Works Seamlessly With Your Devices</h2>
          <p className={styles.description}>
            Whether you're in the Apple ecosystem, Android world, or somewhere in between, 
            VOLTIX Pro 10K has you covered with universal Qi wireless and PD fast charging support.
          </p>
        </div>

        <div className={styles.devicesGrid}>
          {devices.map((device, index) => (
            <div 
              key={index} 
              className={`${styles.deviceCard} reveal`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.deviceIcon}>
                {device.icon}
              </div>
              <h3 className={styles.deviceTitle}>{device.title}</h3>
              <p className={styles.deviceDescription}>{device.description}</p>
            </div>
          ))}
        </div>

        <div className={`${styles.brandsSection} reveal`}>
          <p className={styles.brandsLabel}>Compatible with major brands</p>
          <div className={styles.brandsGrid}>
            {brands.map((brand, index) => (
              <div key={index} className={styles.brandBadge}>
                {brand.name === 'Apple' ? (
                  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                ) : (
                  <span className={styles.brandLetter}>{brand.letter}</span>
                )}
                <span className={styles.brandName}>{brand.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.techInfo} reveal`}>
          <div className={styles.techCard}>
            <div className={styles.techIcon}>
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="2" fill="none"/>
                <text x="24" y="28" textAnchor="middle" fill="currentColor" fontSize="10" fontWeight="bold">Qi</text>
              </svg>
            </div>
            <div className={styles.techContent}>
              <h4>Qi Certified Wireless</h4>
              <p>Industry-standard wireless charging at 7.5W, 10W, and 15W output levels for optimized device charging.</p>
            </div>
          </div>
          
          <div className={styles.techCard}>
            <div className={styles.techIcon}>
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="16" width="32" height="16" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M16 22h16M24 20v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <text x="24" y="44" textAnchor="middle" fill="currentColor" fontSize="8" fontWeight="bold">PD</text>
              </svg>
            </div>
            <div className={styles.techContent}>
              <h4>USB Power Delivery</h4>
              <p>PD 3.0 protocol support with intelligent power negotiation for the fastest safe charging speeds.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Compatibility
