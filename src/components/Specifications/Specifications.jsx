import styles from './Specifications.module.css'
import specsProductAngles from '../../assets/images/product/specs-product-angles.png'

function Specifications() {
  const specs = [
    { label: 'Battery Capacity', value: '10,000mAh' },
    { label: 'Wireless Output', value: '7.5W / 10W / 15W' },
    { label: 'USB-C Output', value: '5V⎓3A / 9V⎓2.2A (20W max)' },
    { label: 'USB-A Output', value: '5V⎓3A / 9V⎓2A / 12V⎓1.5A (22.5W max)' },
    { label: 'USB-C Input', value: '20W' },
    { label: 'Dimensions', value: '98 × 64 × 15 mm' },
    { label: 'Weight', value: '~200g' },
    { label: 'Material', value: 'Premium matte plastic' },
    { label: 'Ports', value: 'USB-C + USB-A' },
    { label: 'LED Indicators', value: '4-level battery display' },
    { label: 'Certifications', value: 'CE, FCC, RoHS' },
    { label: 'Warranty', value: '18 months' }
  ]

  return (
    <section id="specifications" className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.header} reveal`}>
          <span className={styles.subtitle}>Technical Details</span>
          <h2 className={styles.title}>Specifications</h2>
          <p className={styles.description}>
            Every detail engineered for peak performance
          </p>
        </div>

        <div className={styles.content}>
          <div className={`${styles.specsTable} reveal`}>
            {specs.map((spec, index) => (
              <div 
                key={index} 
                className={`${styles.specRow} ${index % 2 === 0 ? styles.even : ''}`}
              >
                <span className={styles.specLabel}>{spec.label}</span>
                <span className={styles.specValue}>{spec.value}</span>
              </div>
            ))}
          </div>

          <div className={`${styles.productVisual} reveal`}>
            <img 
              src={specsProductAngles} 
              alt="VOLTIX Pro 10K power bank multiple angles view with dimensions"
              className={styles.specsImage}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Specifications
