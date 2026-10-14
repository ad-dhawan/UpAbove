import { SessionImage } from '@/components/common/SessionImage/SessionImage'
import { Button } from '@/components/ui/Button/Button'
import { Icon } from '@/components/ui/Icon/Icon'
import { paths } from '@/routes/paths'
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

      <div className={`${styles.header} ${styles.pad}`}>
        <div>
          <span className={styles.age}>{pkg.ageLabel}</span>
          <h2 className={styles.title}>{pkg.title}</h2>
        </div>
        <button
          type="button"
          className={styles.toggle}
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={detailsId}
          aria-label={`${isOpen ? 'Hide' : 'Show'} package details`}
        >
          <Icon name="chevronDown" size={18} className={styles.chevron} />
        </button>
      </div>
      <p className={`${styles.tagline} ${styles.pad}`}>{pkg.tagline}</p>

      {/* Each details section is its own row of the shared grid, so the same sections line up across cards. */}
      <div id={detailsId} className={styles.details} inert={!isOpen}>
        <div className={styles.collapse}>
          <div>
            <p className={`${styles.description} ${styles.pad}`}>{pkg.description}</p>
          </div>
        </div>

        <div className={styles.collapse}>
          <div>
            <dl className={`${styles.facts} ${styles.pad}`}>
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
              <div>
                <dt>
                  <Icon name="sparkles" size={16} /> Goodies
                </dt>
                <dd>Included</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className={styles.collapse}>
          <div className={styles.pad}>
            <h3 className={styles.subheading}>What’s included</h3>
            <ul className={styles.highlights}>
              {pkg.highlights.map((item) => (
                <li key={item}>
                  <Icon name="check" size={16} /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={`${styles.book} ${styles.pad}`}>
        <Button to={paths.bookDates(pkg.slug)} size="sm" fullWidth>
          Book <Icon name="calendar" size={16} />
        </Button>
      </div>
    </article>
  )
}
