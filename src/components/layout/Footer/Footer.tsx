import { Link } from 'react-router'
import { Galaxy } from '@/components/common/Galaxy/Galaxy'
import { Logo } from '@/components/common/Logo/Logo'
import { SocialLinks } from '@/components/common/SocialLinks/SocialLinks'
import { Starfield } from '@/components/common/Starfield/Starfield'
import { Icon } from '@/components/ui/Icon/Icon'
import { contact } from '@/data/contact'
import { mainNav } from '@/data/navigation'
import { paths } from '@/routes/paths'
import styles from './Footer.module.css'

const CURRENT_YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.backdrop} aria-hidden="true">
        <Starfield count={180} seed={11} />
        <div className={styles.nebula} />
        <Galaxy className={styles.galaxy} />
      </div>

      <div className={`container ${styles.grid}`}>
        <div>
          <Link to={paths.home} className={styles.brand}>
            <Logo height={48} />
            UpAbove
          </Link>
          <p className={styles.tagline}>
            Bringing people closer to the night sky — one telescope, one question, one discovery at a time.
          </p>
          <SocialLinks className={styles.social} />
        </div>

        <nav aria-label="Footer">
          <h3 className={styles.heading}>Explore</h3>
          <ul className={styles.list}>
            {mainNav.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link to={paths.book()}>Book a Session</Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Policies">
          <h3 className={styles.heading}>Policies</h3>
          <ul className={styles.list}>
            <li>
              <Link to={paths.pricing}>Prices &amp; Booking</Link>
            </li>
            <li>
              <Link to={paths.cancellationPolicy}>Cancellation Policy</Link>
            </li>
          </ul>
        </nav>

        <div>
          <h3 className={styles.heading}>Get in touch</h3>
          <ul className={styles.list}>
            <li>
              <a href={`mailto:${contact.email}`} className={styles.contact}>
                <Icon name="mail" size={16} /> {contact.email}
              </a>
            </li>
            <li>
              <a href={`tel:${contact.phoneHref}`} className={styles.contact}>
                <Icon name="phone" size={16} /> {contact.phone}
              </a>
            </li>
            <li>
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.contact}>
                <Icon name="whatsapp" size={16} /> Chat on WhatsApp
              </a>
            </li>
            <li>
              <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className={styles.contact}>
                <Icon name="instagram" size={16} /> {contact.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`container ${styles.bottom}`}>© {CURRENT_YEAR} UpAbove. Keep looking up.</div>
    </footer>
  )
}
