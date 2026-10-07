import { useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router'
import { MoonPhase } from '@/components/common/MoonPhase/MoonPhase'
import { Button } from '@/components/ui/Button/Button'
import { Icon } from '@/components/ui/Icon/Icon'
import { bookingRules } from '@/data/booking'
import { sessionPackages } from '@/data/sessions'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { NotFoundPage } from '@/pages/NotFound/NotFoundPage'
import { paths } from '@/routes/paths'
import { formatDuration } from '@/utils/format'
import { MOON_PHASES } from '@/utils/sky'
import { addMonths, firstCalendarMonth, parseMonthKey } from './calendar'
import { DayDetails } from './components/DayDetails'
import { MonthCalendar } from './components/MonthCalendar'
import styles from './BookDatesPage.module.css'

export function BookDatesPage() {
  const { slug } = useParams()
  const pkg = sessionPackages.find((p) => p.slug === slug)
  useDocumentTitle(pkg ? `Pick a date — ${pkg.title}` : 'Lost in space')
  const [searchParams, setSearchParams] = useSearchParams()
  const [firstMonth] = useState(firstCalendarMonth)

  if (!pkg) return <NotFoundPage />

  // Month and selected date live in the URL (?month=YYYY-MM&date=YYYY-MM-DD) so a choice can be shared.
  const lastMonth = addMonths(firstMonth, bookingRules.monthsAhead - 1)
  const requested = searchParams.get('month')
  const month = requested && parseMonthKey(requested) && requested >= firstMonth && requested <= lastMonth ? requested : firstMonth
  const selectedDate = searchParams.get('date')

  const update = (next: { month: string; date?: string | null }) => {
    const params: Record<string, string> = { month: next.month }
    if (next.date) params.date = next.date
    setSearchParams(params, { replace: true, preventScrollReset: true })
  }

  return (
    <section className={styles.page}>
      <div className="container">
        <Button to={paths.book(pkg.slug)} variant="ghost" size="sm" className={styles.back}>
          <Icon name="arrowLeft" size={16} />
          All packages
        </Button>

        <header className={styles.header}>
          <span className={styles.eyebrow}>
            {pkg.title} · {pkg.ageLabel}
          </span>
          <h1 className={styles.title}>
            Pick your <span className="text-gradient">night under the stars</span>
          </h1>
          <p className={styles.description}>
            Every evening below shows the Moon’s phase and the planets you can catch through our telescopes. Choose
            one and we’ll confirm it with you.
          </p>
          <ul className={styles.facts}>
            <li>
              <Icon name="clock" size={16} /> {formatDuration(pkg.durationMins)}
            </li>
            <li>
              <Icon name="users" size={16} /> Up to {pkg.maxGuests} guests
            </li>
            <li>
              <Icon name="award" size={16} /> Certificate and goodies included
            </li>
          </ul>
        </header>

        <div className={styles.legend}>
          <ul className={styles.phases} aria-label="The eight Moon phases">
            {MOON_PHASES.map((name, phase) => (
              <li key={name}>
                <MoonPhase phase={phase} size={28} />
                <span>{name}</span>
              </li>
            ))}
          </ul>
          <Link to={paths.blog('moon-phases')} className={styles.learnLink}>
            <Icon name="moon" size={14} /> Understanding Moon phases
          </Link>
        </div>

        <div className={styles.layout}>
          <MonthCalendar
            month={month}
            selectedDate={selectedDate}
            canGoBack={month > firstMonth}
            canGoForward={month < lastMonth}
            onMonthChange={(next) => update({ month: next })}
            onSelect={(date) => update({ month, date })}
          />
          <DayDetails pkg={pkg} date={selectedDate} />
        </div>

        <p className={styles.disclaimer}>
          Moon phases and planet visibility are calculated for the evening (around 8 pm) and are approximate — the
          weather always gets the final say. If it’s cloudy, we’ll reschedule for free.
        </p>
      </div>
    </section>
  )
}
