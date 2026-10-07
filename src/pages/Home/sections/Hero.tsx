import { SocialLinks } from '@/components/common/SocialLinks/SocialLinks'
import { Badge } from '@/components/ui/Badge/Badge'
import { Button } from '@/components/ui/Button/Button'
import { Icon } from '@/components/ui/Icon/Icon'
import { formatRupees, startingPrice } from '@/data/policies'
import { paths } from '@/routes/paths'
import { SolarSystem } from './SolarSystem'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero}>
      <SolarSystem className={styles.solarSystem} />

      <div className={`container ${styles.content}`}>
        <Badge>Explore • Observe • Learn</Badge>
        <h1 className={styles.title}>
          The Universe
          <br />
          <span className="text-gradient">Closer to You</span>
        </h1>
        <p className={styles.subtitle}>
          Hands-on astronomy experiences at your home, school or event. Look up, explore, and experience the cosmos
          with real telescopes.
        </p>
        <div className={styles.actions}>
          <Button to={paths.book()} size="lg">
            Book a Session
          </Button>
          <Button to={paths.experiences} variant="outline" size="lg">
            Explore Experiences
          </Button>
        </div>
        <p className={styles.price}>
          Starting from <strong>{formatRupees(startingPrice)}</strong>
        </p>
        <div className={styles.social}>
          <span className={styles.socialLabel}>Follow our sky adventures</span>
          <SocialLinks variant="pill" />
        </div>
      </div>

      <a href="#stats" className={styles.scrollCue} aria-label="Scroll to learn more">
        <Icon name="arrowDown" size={18} />
      </a>
    </section>
  )
}
