import { useState, useEffect } from 'react'
import styles from './Header.module.css'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      closeMobileMenu()
    }
  }

  const navLinks = [
    { label: 'Features', href: 'features' },
    { label: 'Specs', href: 'specifications' },
    { label: 'Reviews', href: 'reviews' },
    { label: 'FAQ', href: 'faq' },
    { label: 'Support', href: 'footer' }
  ]

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          <svg className={styles.logoIcon} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="url(#logoGradient)"/>
            <path d="M10 8L18 16L10 24" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 8L24 16L16 24" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
            <defs>
              <linearGradient id="logoGradient" x1="0" y1="0" x2="32" y2="32">
                <stop stopColor="#0066ff"/>
                <stop offset="1" stopColor="#00ccff"/>
              </linearGradient>
            </defs>
          </svg>
          <span className={styles.logoText}>VOLTIX</span>
        </a>

        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            {navLinks.map(link => (
              <li key={link.href}>
                <a 
                  href={`#${link.href}`}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={styles.navLink}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <a 
            href="#buy" 
            onClick={(e) => scrollToSection(e, 'cta')}
            className={styles.buyButton}
          >
            Buy Now
          </a>
          
          <button 
            className={`${styles.menuButton} ${isMobileMenuOpen ? styles.menuOpen : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileNavList}>
            {navLinks.map(link => (
              <li key={link.href}>
                <a 
                  href={`#${link.href}`}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={styles.mobileNavLink}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header
