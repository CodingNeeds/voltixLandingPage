import { useState } from 'react'
import styles from './FAQ.module.css'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'How long does it take to fully charge the power bank?',
      answer: 'Using the included USB-C cable with a 20W adapter, the VOLTIX Pro 10K charges from 0% to 100% in approximately 3-4 hours. We recommend using a PD-compatible charger for the fastest charging experience.'
    },
    {
      question: 'Is magnetic wireless charging compatible with all phones?',
      answer: 'The magnetic attachment works best with phones that have built-in magnetic alignment (like iPhone 12 and newer with MagSafe). For other phones, you can use a magnetic case or simply place the phone on the charging surface—wireless charging will still work for any Qi-compatible device.'
    },
    {
      question: 'Can I charge two devices at the same time?',
      answer: 'Yes! You can use wireless charging and wired charging simultaneously. For example, charge your phone wirelessly while charging your earbuds case via USB-A or USB-C. The power bank intelligently distributes power between connected devices.'
    },
    {
      question: 'Is this power bank safe? Will it overheat?',
      answer: 'Absolutely. The VOLTIX Pro 10K features multi-layer protection including overcharge protection, over-discharge protection, short circuit protection, and temperature monitoring. If the device detects overheating, it automatically reduces output to safe levels. It\'s CE, FCC, and RoHS certified.'
    },
    {
      question: 'Can I take this power bank on an airplane?',
      answer: 'Yes, the VOLTIX Pro 10K is airline-approved for carry-on luggage. With a 10,000mAh (37Wh) capacity, it falls well within the TSA and international aviation limits of 100Wh for lithium batteries. Please keep it in your carry-on bag, not checked luggage.'
    },
    {
      question: 'How many times can it charge my phone?',
      answer: 'This depends on your phone\'s battery capacity. For a typical smartphone with a 3,000-4,000mAh battery, you can expect 2-3 full charges. For larger phones with 4,500-5,000mAh batteries, expect 1.5-2 full charges. Wireless charging is slightly less efficient than wired charging.'
    },
    {
      question: 'What warranty does the product include?',
      answer: 'The VOLTIX Pro 10K comes with an 18-month manufacturer warranty covering defects in materials and workmanship. Our customer support team is available via email for any issues or questions. We also offer a 30-day satisfaction guarantee—if you\'re not happy, return it for a full refund.'
    }
  ]

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.header} reveal`}>
          <span className={styles.subtitle}>Got Questions?</span>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.description}>
            Everything you need to know about the VOLTIX Pro 10K
          </p>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${openIndex === index ? styles.open : ''} reveal`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <svg 
                  className={styles.chevron}
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
              <div className={styles.faqAnswer}>
                <div className={styles.faqAnswerInner}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.contactCta} reveal`}>
          <p>Still have questions?</p>
          <a href="#footer" className={styles.contactLink}>
            Contact our support team
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ
