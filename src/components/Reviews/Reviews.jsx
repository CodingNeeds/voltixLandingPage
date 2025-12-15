import styles from './Reviews.module.css'

function Reviews() {
  const reviews = [
    {
      rating: 5,
      title: 'Best power bank I\'ve owned',
      text: 'The magnetic attachment is a game-changer. I use it daily with my iPhone and it\'s incredibly convenient. Fast charging too!',
      author: 'Michael T.',
      verified: true
    },
    {
      rating: 5,
      title: 'Perfect for travel',
      text: 'Took this on a 2-week trip and it was perfect. Charged my phone and earbuds multiple times. Compact enough to fit in my pocket.',
      author: 'Sarah K.',
      verified: true
    },
    {
      rating: 4,
      title: 'Great quality, fast delivery',
      text: 'Really impressed with the build quality. The matte finish looks premium and doesn\'t attract fingerprints. Wireless charging works great.',
      author: 'James L.',
      verified: true
    },
    {
      rating: 5,
      title: 'Finally, a reliable power bank',
      text: 'I\'ve tried many power banks before, but this one is different. The 22.5W charging is incredibly fast and the wireless feature is super convenient.',
      author: 'Emily R.',
      verified: true
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`${styles.star} ${i < rating ? styles.starFilled : ''}`}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          fill={i < rating ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ))
  }

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('')
  }

  return (
    <section id="reviews" className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.header} reveal`}>
          <span className={styles.subtitle}>Customer Love</span>
          <h2 className={styles.title}>What People Are Saying</h2>
          <div className={styles.overallRating}>
            <div className={styles.starsLarge}>
              {renderStars(5)}
            </div>
            <span className={styles.ratingText}>4.9 out of 5 based on 2,847 reviews</span>
          </div>
        </div>

        <div className={styles.reviewsGrid}>
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className={`${styles.reviewCard} reveal`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.reviewHeader}>
                <div className={styles.stars}>
                  {renderStars(review.rating)}
                </div>
                {review.verified && (
                  <span className={styles.verified}>
                    <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
                      <circle cx="12" cy="12" r="10" fill="#28a745"/>
                      <path d="M8 12l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Verified Purchase
                  </span>
                )}
              </div>
              
              <h3 className={styles.reviewTitle}>{review.title}</h3>
              <p className={styles.reviewText}>"{review.text}"</p>
              
              <div className={styles.reviewAuthor}>
                <div className={styles.avatar}>
                  {getInitials(review.author)}
                </div>
                <span className={styles.authorName}>{review.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
