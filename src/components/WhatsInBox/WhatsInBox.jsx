import styles from './WhatsInBox.module.css'
import unboxingContents from '../../assets/images/product/unboxing-contents.png'

function WhatsInBox() {
  const items = [
    {
      title: 'VOLTIX Pro 10K',
      description: 'Magnetic Wireless Power Bank'
    },
    {
      title: 'USB-C Cable',
      description: '1m braided charging cable'
    },
    {
      title: 'Quick Start Guide',
      description: 'Setup instructions & safety info'
    },
    {
      title: 'Warranty Card',
      description: '18-month manufacturer warranty'
    }
  ]

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.header} reveal`}>
          <span className={styles.subtitle}>Complete Package</span>
          <h2 className={styles.title}>What's in the Box</h2>
          <p className={styles.description}>
            Everything you need to start charging right out of the box
          </p>
        </div>

        <div className={`${styles.unboxingImage} reveal`}>
          <img 
            src={unboxingContents} 
            alt="VOLTIX Pro 10K package contents - power bank, USB-C cable, quick start guide, and warranty card"
            className={styles.contentsImage}
          />
        </div>

        <div className={styles.itemsList}>
          {items.map((item, index) => (
            <div 
              key={index} 
              className={`${styles.item} reveal`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.itemNumber}>{index + 1}</div>
              <div className={styles.itemContent}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatsInBox
