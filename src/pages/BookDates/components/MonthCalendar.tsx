import { useParams } from 'react-router'
import { MoonPhase } from '@/components/common/MoonPhase/MoonPhase'
import { PlanetIcon } from '@/components/common/PlanetIcon/PlanetIcon'
import { Icon } from '@/components/ui/Icon/Icon'
import { bookingRules, greatNights } from '@/data/booking'
import { getSkyForecast } from '@/utils/sky'
import { addMonths, dateKey, formatMonth, isBookable, isMoonTooDim, parseMonthKey } from '../calendar'
import styles from './MonthCalendar.module.css'

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MIN_LIT = Math.round(bookingRules.minMoonIllumination * 100)
const DIM_REASON = `less than ${MIN_LIT}% of the Moon is lit`

interface MonthCalendarProps {
  /** `YYYY-MM`. */
  month: string
  selectedDate: string | null
  canGoBack: boolean
  canGoForward: boolean
  onMonthChange: (month: string) => void
  onSelect: (date: string) => void
}

/** One month of evenings, each showing its Moon phase and the planets in the evening sky. */
export function MonthCalendar({ month, selectedDate, canGoBack, canGoForward, onMonthChange, onSelect }: MonthCalendarProps) {
  const { slug = '' } = useParams()
  const { year, month: monthIndex } = parseMonthKey(month)!
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate()
  const leadingBlanks = new Date(year, monthIndex, 1).getDay()
  const great = greatNights[slug]

  return (
    <div className={styles.calendar}>
      <div className={styles.toolbar}>
        <button
          type="button"
          className={styles.navButton}
          onClick={() => onMonthChange(addMonths(month, -1))}
          disabled={!canGoBack}
          aria-label="Previous month"
        >
          <Icon name="arrowLeft" size={18} />
        </button>
        <h2 className={styles.month} aria-live="polite">
          {formatMonth(month)}
        </h2>
        <button
          type="button"
          className={styles.navButton}
          onClick={() => onMonthChange(addMonths(month, 1))}
          disabled={!canGoForward}
          aria-label="Next month"
        >
          <Icon name="arrowRight" size={18} />
        </button>
      </div>

      {great && (
        <p className={styles.greatKey}>
          <Icon name="sparkles" size={14} /> Great night — {great.label}
        </p>
      )}
      <p className={styles.dimKey}>
        <span className={styles.dimSwatch} aria-hidden="true" /> Not bookable — {DIM_REASON}
      </p>

      <div className={styles.grid} role="grid" aria-label={`Evenings in ${formatMonth(month)}`}>
        {WEEKDAYS.map((day) => (
          <div key={day} className={styles.weekday} role="columnheader">
            {day}
          </div>
        ))}
        {Array.from({ length: leadingBlanks }, (_, i) => (
          <div key={`blank-${i}`} aria-hidden="true" />
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1
          const key = dateKey(year, monthIndex, day)
          const sky = getSkyForecast(year, monthIndex, day)
          const bookable = isBookable(year, monthIndex, day)
          const tooDim = isMoonTooDim(year, monthIndex, day)
          const isGreat = bookable && great?.test(sky)
          const isSelected = key === selectedDate
          const label = `${new Date(year, monthIndex, day).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}: ${sky.phaseName}${
            sky.planets.length ? `, ${sky.planets.join(', ')} visible` : ''
          }${isGreat ? ', great night' : ''}${bookable ? '' : tooDim ? `, unavailable: ${DIM_REASON}` : ', unavailable'}`

          return (
            <button
              key={key}
              type="button"
              role="gridcell"
              className={`${styles.day} ${isSelected ? styles.selected : ''} ${isGreat ? styles.great : ''} ${tooDim ? styles.dim : ''}`}
              disabled={!bookable}
              title={tooDim ? DIM_REASON : undefined}
              aria-selected={isSelected}
              aria-label={label}
              onClick={() => onSelect(key)}
            >
              <span className={styles.dayTop}>
                <span className={styles.dayNumber}>{day}</span>
                {tooDim && <Icon name="close" size={11} className={styles.dimIcon} />}
                {isGreat && <Icon name="sparkles" size={12} className={styles.greatIcon} />}
              </span>
              <MoonPhase phase={sky.phase} size={30} className={styles.moon} />
              <span className={styles.planets}>
                {sky.planets.map((planet) => (
                  <PlanetIcon key={planet} planet={planet} size={13} labelled={false} />
                ))}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
