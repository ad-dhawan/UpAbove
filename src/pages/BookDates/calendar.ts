import { bookingRules } from '@/data/booking'
import { getMoonPhase } from '@/utils/sky'

/** `YYYY-MM` for a date's month. */
export const monthKey = (date: Date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`

/** `YYYY-MM-DD` for a local calendar day. */
export const dateKey = (year: number, month: number, day: number) =>
  `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`

/** `YYYY-MM` → { year, month (0-based) }, or null if malformed. */
export const parseMonthKey = (key: string) => {
  const match = /^(\d{4})-(\d{2})$/.exec(key)
  if (!match) return null
  const month = Number(match[2]) - 1
  return month >= 0 && month <= 11 ? { year: Number(match[1]), month } : null
}

/** `YYYY-MM-DD` → { year, month (0-based), day }, or null if malformed. */
export const parseDateKey = (key: string) => {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(key)
  if (!match) return null
  const date = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]))
  return dateKey(date.getFullYear(), date.getMonth(), date.getDate()) === key
    ? { year: date.getFullYear(), month: date.getMonth(), day: date.getDate() }
    : null
}

export const addMonths = (key: string, delta: number) => {
  const { year, month } = parseMonthKey(key)!
  return monthKey(new Date(year, month + delta, 1))
}

export const formatMonth = (key: string) => {
  const { year, month } = parseMonthKey(key)!
  return new Date(year, month, 1).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })
}

/** Whether too little of the Moon is lit that evening (checked at 8 pm, like the sky forecast). */
export const isMoonTooDim = (year: number, month: number, day: number) =>
  getMoonPhase(new Date(year, month, day, 20)).illumination < bookingRules.minMoonIllumination

/** First bookable day: the later of `bookingRules.opensOn` and today plus the notice period. */
const earliestBookable = () => {
  const today = new Date()
  const notice = new Date(today.getFullYear(), today.getMonth(), today.getDate() + bookingRules.minNoticeDays)
  const opens = parseDateKey(bookingRules.opensOn)
  const opensOn = opens ? new Date(opens.year, opens.month, opens.day) : notice
  return opensOn > notice ? opensOn : notice
}

/** `YYYY-MM` of the first month shown in the calendar. */
export const firstCalendarMonth = () => {
  const current = monthKey(new Date())
  const start = bookingRules.opensOn.slice(0, 7)
  return parseMonthKey(start) && start > current ? start : current
}

/** `YYYY-MM` of the last month with bookable evenings; later months show “Coming soon”. */
export const lastBookableMonth = () => bookingRules.closesOn.slice(0, 7)

/** Whether a month is past `bookingRules.closesOn`, so its dates aren't open yet. */
export const isComingSoon = (key: string) => key > lastBookableMonth()

/** Whether an evening can be booked under `bookingRules`. */
export const isBookable = (year: number, month: number, day: number) => {
  const earliest = earliestBookable()
  const date = new Date(year, month, day)
  return (
    date >= earliest &&
    dateKey(year, month, day) <= bookingRules.closesOn &&
    !bookingRules.closedWeekdays.includes(date.getDay()) &&
    !bookingRules.blockedDates.includes(dateKey(year, month, day)) &&
    !isMoonTooDim(year, month, day)
  )
}
