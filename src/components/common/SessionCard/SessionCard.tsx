import { Link } from 'react-router'
import { SessionImage } from '@/components/common/SessionImage/SessionImage'
import { Icon } from '@/components/ui/Icon/Icon'
import { paths } from '@/routes/paths'
import type { SessionPackage } from '@/types'
import { formatDuration } from '@/utils/format'
import styles from './SessionCard.module.css'

interface SessionCardProps {
  session: SessionPackage
}

export function SessionCard({ session }: SessionCardProps) {
  const { slug, title, ageLabel, tagline, durationMins } = session

  return (
    <article className={styles.card}>
      <SessionImage slug={slug} alt={title} />
      <div className={styles.body}>
        <span className={styles.age}>{ageLabel}</span>
        <h3 className={styles.title}>
          <Link to={paths.book(slug)} className={styles.link}>
            {title}
          </Link>
        </h3>
        <p className={styles.tagline}>{tagline}</p>
        <div className={styles.footer}>
          <span className={styles.meta}>
            <Icon name="clock" size={16} /> {formatDuration(durationMins)}
          </span>
          <span className={styles.cta}>
            Book <Icon name="arrowRight" size={16} />
          </span>
        </div>
      </div>
    </article>
  )
}
