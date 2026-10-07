import { Link } from 'react-router'
import { MoonPhase } from '@/components/common/MoonPhase/MoonPhase'
import { PlanetIcon } from '@/components/common/PlanetIcon/PlanetIcon'
import { Button } from '@/components/ui/Button/Button'
import { Icon } from '@/components/ui/Icon/Icon'
import { contact } from '@/data/contact'
import { greatNights, moonPhaseNotes, planetNotes } from '@/data/booking'
import { paths } from '@/routes/paths'
import type { SessionPackage } from '@/types'
import { getSkyForecast } from '@/utils/sky'
import { isBookable, parseDateKey } from '../calendar'
import styles from './DayDetails.module.css'

interface DayDetailsProps {
  pkg: SessionPackage
  /** `YYYY-MM-DD`, or null when nothing is selected yet. */
  date: string | null
}

/** Sky forecast for the chosen evening, plus the ways to request it. */
export function DayDetails({ pkg, date }: DayDetailsProps) {
  const parsed = date ? parseDateKey(date) : null

  if (!parsed || !isBookable(parsed.year, parsed.month, parsed.day)) {
    return (
      <aside className={`${styles.panel} ${styles.empty}`}>
        <Icon name="calendar" size={32} />
        <p>Pick an evening to see what’s up in the sky that night.</p>
      </aside>
    )
  }

  const { year, month, day } = parsed
  const sky = getSkyForecast(year, month, day)
  const longDate = new Date(year, month, day).toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const great = greatNights[pkg.slug]
  const isGreat = great?.test(sky)

  const message = `Hi UpAbove! I’d like to book the ${pkg.title} session (${pkg.ageLabel}) on ${longDate}. Could you confirm availability?`
  const whatsappHref = `https://wa.me/${contact.phoneHref.replace('+', '')}?text=${encodeURIComponent(message)}`
  const mailHref = `mailto:${contact.email}?subject=${encodeURIComponent(`Booking: ${pkg.title} on ${longDate}`)}&body=${encodeURIComponent(message)}`

  return (
    <aside className={styles.panel} aria-live="polite">
      <span className={styles.eyebrow}>Your evening</span>
      <h2 className={styles.date}>{longDate}</h2>
      {isGreat && (
        <p className={styles.great}>
          <Icon name="sparkles" size={14} /> Great night for {pkg.title} — {great.label}
        </p>
      )}

      <div className={styles.moonRow}>
        <MoonPhase phase={sky.phase} size={72} />
        <div>
          <h3 className={styles.phaseName}>{sky.phaseName}</h3>
          <p className={styles.illumination}>{Math.round(sky.illumination * 100)}% lit</p>
        </div>
      </div>
      <p className={styles.note}>{moonPhaseNotes[sky.phase]}</p>
      <Link to={paths.blog('moon-phases')} className={styles.learnLink}>
        What do Moon phases mean? <Icon name="arrowRight" size={14} />
      </Link>

      <h3 className={styles.subheading}>Planets in the evening sky</h3>
      {sky.planets.length ? (
        <ul className={styles.planets}>
          {sky.planets.map((planet) => (
            <li key={planet}>
              <PlanetIcon planet={planet} size={26} labelled={false} />
              <span>
                <strong>{planet}</strong> — {planetNotes[planet]}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.note}>
          No bright planets this evening — a lovely night for the Moon, stars and constellations instead.
        </p>
      )}

      <div className={styles.actions}>
        <Button href={whatsappHref} target="_blank" rel="noopener noreferrer" size="lg" fullWidth>
          <Icon name="whatsapp" size={18} /> Request on WhatsApp
        </Button>
        <a href={mailHref} className={styles.mailLink}>
          or request by email <Icon name="mail" size={14} />
        </a>
        <p className={styles.policyLinks}>
          <Link to={paths.pricing}>Prices &amp; booking</Link> · <Link to={paths.cancellationPolicy}>Cancellation policy</Link>
        </p>
      </div>
    </aside>
  )
}
