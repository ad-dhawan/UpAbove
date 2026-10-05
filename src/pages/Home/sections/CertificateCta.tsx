import { Button } from '@/components/ui/Button/Button'
import { Icon } from '@/components/ui/Icon/Icon'
import { paths } from '@/routes/paths'
import styles from './CertificateCta.module.css'

export function CertificateCta() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.card}>
          <span className={styles.icon}>
            <Icon name="award" size={36} />
          </span>
          <div className={styles.copy}>
            <h2 className={styles.title}>Every journey deserves recognition</h2>
            <p className={styles.text}>
              Graduates of our sessions earn an official UpAbove certificate — celebrating their curiosity and setting
              them apart as young explorers reaching beyond the ordinary.
            </p>
          </div>
          <Button to={paths.book()} size="lg">
            Book a Session
          </Button>
        </div>
      </div>
    </section>
  )
}
