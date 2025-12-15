import styles from './FeatureSection.module.css'
import featureFastCharging from '../../assets/images/features/feature-fast-charging.png'
import featureTravel from '../../assets/images/features/feature-travel.png'
import featureSafety from '../../assets/images/features/feature-safety.png'

function FeatureSection({ id, title, subtitle, description, features, imagePosition, index }) {
  const images = [featureFastCharging, featureTravel, featureSafety]
  const alts = [
    'Fast charging power bank with USB-C cable',
    'Compact power bank perfect for travel',
    'Safe and protected power bank with certifications'
  ]

  return (
    <section 
      id={id}
      className={`${styles.section} ${imagePosition === 'right' ? styles.reversed : ''}`}
    >
      <div className={styles.container}>
        <div className={`${styles.imageWrapper} reveal`}>
          <img 
            src={images[index]} 
            alt={alts[index]}
            className={styles.featureImage}
          />
        </div>
        
        <div className={`${styles.content} reveal`}>
          <span className={styles.subtitle}>{subtitle}</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          
          <ul className={styles.featureList}>
            {features.map((feature, idx) => (
              <li key={idx} className={styles.featureItem}>
                <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="var(--color-primary)" opacity="0.1"/>
                  <path d="M8 12l3 3 5-6" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
