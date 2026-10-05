import { SessionImage } from '@/components/common/SessionImage/SessionImage'
import { Button } from '@/components/ui/Button/Button'
import { Icon } from '@/components/ui/Icon/Icon'
import type { SessionPackage } from '@/types'
import { formatDuration } from '@/utils/format'
import styles from './PackageCard.module.css'

interface PackageCardProps {
  pkg: SessionPackage
  isOpen: boolean
  onToggle: () => void
}

export function PackageCard({ pkg, isOpen, onToggle }: PackageCardProps) {
  const detailsId = `${pkg.slug}-details`

  return (
    <article id={pkg.slug} className={`${styles.card} ${isOpen ? styles.open : ''}`}>
      <SessionImage slug={pkg.slug} alt={pkg.title} />

      <div className={styles.body}>
        <span className={styles.age}>{pkg.ageLabel}</span>
        <h2 className={styles.title}>{pkg.title}</h2>
        <p className={styles.tagline}>{pkg.tagline}</p>

        <Button
          variant={isOpen ? 'outline' : 'primary'}
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={detailsId}
          fullWidth
        >
          {isOpen ? 'Hide details' : 'Book'}
        </Button>

        <div id={detailsId} className={styles.details} inert={!isOpen}>
          <div className={styles.detailsInner}>
            <p className={styles.description}>{pkg.description}</p>

            <dl className={styles.facts}>
              <div>
                <dt>
                  <Icon name="clock" size={16} /> Duration
                </dt>
                <dd>{formatDuration(pkg.durationMins)}</dd>
              </div>
              <div>
                <dt>
                  <Icon name="users" size={16} /> Group size
                </dt>
                <dd>Up to {pkg.maxGuests}</dd>
              </div>
              <div>
                <dt>
                  <Icon name="award" size={16} /> Certificate
                </dt>
                <dd>{pkg.includesCertificate ? 'Included' : 'Not included'}</dd>
              </div>
            </dl>

            <h3 className={styles.subheading}>What’s included</h3>
            <ul className={styles.highlights}>
              {pkg.highlights.map((item) => (
                <li key={item}>
                  <Icon name="check" size={16} /> {item}
                </li>
              ))}
            </ul>

            {/* TODO: wire up the booking flow. Intentionally does nothing for now. */}
            <Button size="lg" fullWidth>
              Book this session
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}
