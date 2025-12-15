import styles from './FeatureStrip.module.css'

function FeatureStrip() {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="24" cy="24" r="8" fill="currentColor"/>
          <path d="M24 4v4M24 40v4M4 24h4M40 24h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Magnetic Wireless',
      description: 'Snap on and charge wirelessly with perfect alignment every time.'
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28 8L16 24h10l-4 16 12-16H24l4-16z" fill="currentColor"/>
          <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      title: 'PD 22.5W Fast Charge',
      description: 'Blazing fast wired charging that fills your battery in record time.'
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="14" width="32" height="20" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/>
          <rect x="40" y="20" width="4" height="8" rx="1" fill="currentColor"/>
          <rect x="12" y="18" width="20" height="12" rx="2" fill="currentColor"/>
          <path d="M14 24h6M18 22v4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: '10000mAh Capacity',
      description: 'Power to charge your devices multiple times on a single charge.'
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="14" y="6" width="20" height="36" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="24" cy="36" r="2" fill="currentColor"/>
          <rect x="20" y="10" width="8" height="3" rx="1" fill="currentColor"/>
          <path d="M6 24c0-4 4-6 8-6M42 24c0-4-4-6-8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="6" cy="24" r="2" fill="currentColor"/>
          <circle cx="42" cy="24" r="2" fill="currentColor"/>
        </svg>
      ),
      title: 'Multi-Device Ready',
      description: 'Dual outputs let you power two devices simultaneously.'
    }
  ]

  return (
    <section id="features" className={styles.strip}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`${styles.feature} reveal`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.iconWrapper}>
                {feature.icon}
              </div>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.description}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureStrip
