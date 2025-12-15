import styles from './Footer.module.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'Specifications', href: '#specifications' },
      { label: 'Reviews', href: '#reviews' },
      { label: 'FAQ', href: '#faq' }
    ],
    support: [
      { label: 'Help Center', href: '#' },
      { label: 'Warranty', href: '#' },
      { label: 'Returns', href: '#' },
      { label: 'Contact Us', href: '#' }
    ],
    company: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Blog', href: '#' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' }
    ]
  }

  const socialLinks = [
    {
      name: 'Twitter',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="18" cy="6" r="1" fill="currentColor"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
  ]

  const handleLinkClick = (e, href) => {
    if (href.startsWith('#') && href !== '#') {
      e.preventDefault()
      const element = document.getElementById(href.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#" className={styles.logo}>
              <svg className={styles.logoIcon} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="url(#footerLogoGrad)"/>
                <path d="M10 8L18 16L10 24" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 8L24 16L16 24" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
                <defs>
                  <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="32" y2="32">
                    <stop stopColor="#0066ff"/>
                    <stop offset="1" stopColor="#00ccff"/>
                  </linearGradient>
                </defs>
              </svg>
              <span className={styles.logoText}>VOLTIX</span>
            </a>
            <p className={styles.tagline}>
              Premium portable power, engineered for modern life.
            </p>
            <div className={styles.social}>
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className={styles.socialLink}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4>Product</h4>
              <ul>
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4>Support</h4>
              <ul>
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4>Company</h4>
              <ul>
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4>Legal</h4>
              <ul>
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} VOLTIX. All rights reserved.
          </p>
          <div className={styles.paymentMethods}>
            <span className={styles.paymentLabel}>We accept:</span>
            <div className={styles.paymentIcons}>
              <svg viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="38" height="24" rx="4" fill="#1A1F71"/>
                <text x="19" y="15" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">VISA</text>
              </svg>
              <svg viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="38" height="24" rx="4" fill="#f0f0f0"/>
                <circle cx="15" cy="12" r="7" fill="#EB001B"/>
                <circle cx="23" cy="12" r="7" fill="#F79E1B"/>
                <path d="M19 7a7 7 0 000 10 7 7 0 000-10z" fill="#FF5F00"/>
              </svg>
              <svg viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="38" height="24" rx="4" fill="#000"/>
                <text x="19" y="15" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">AMEX</text>
              </svg>
              <svg viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="38" height="24" rx="4" fill="#003087"/>
                <text x="19" y="15" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">PayPal</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
