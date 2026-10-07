import type { IconName } from '@/types'

/** Lowest session price in Indian rupees, shown as "Starting from ₹799". */
export const startingPrice = 799

export const formatRupees = (amount: number) => `₹${amount.toLocaleString('en-IN')}`

export interface PolicyItem {
  icon: IconName
  title: string
  text: string
  /** Optional short highlight shown as a badge, e.g. "Full refund". */
  badge?: string
  tone?: 'good' | 'warn' | 'bad'
}

/** What the price of a session depends on. */
export const priceFactors = ['Package', 'Type of event', 'Age group', 'Location']

export const pricingPolicy: PolicyItem[] = [
  {
    icon: 'sparkles',
    title: `Prices start from ${formatRupees(startingPrice)}`,
    text: 'The final price depends on the package you choose, the type of event, the age group and the location. Tell us about your event and we’ll share an exact quote.',
  },
  {
    icon: 'calendar',
    title: '50% advance to confirm your slot',
    text: 'A 50% advance is mandatory at the time of booking. Your date is only confirmed once the advance is received.',
  },
]

export const cancellationPolicy: PolicyItem[] = [
  {
    icon: 'check',
    title: 'More than 36 hours before the session',
    text: 'Cancel any time up to 36 hours before your session and your advance is fully refunded.',
    badge: 'Full refund',
    tone: 'good',
  },
  {
    icon: 'clock',
    title: '24 to 36 hours before the session',
    text: '25% of the session fee is deducted from your advance; the rest of the advance is refunded.',
    badge: '25% deducted',
    tone: 'warn',
  },
  {
    icon: 'close',
    title: 'Less than 24 hours before the session',
    text: '50% of the session fee is deducted — the full advance paid at booking.',
    badge: '50% deducted',
    tone: 'bad',
  },
  {
    icon: 'moon',
    title: 'Cancelled by us due to bad weather',
    text: 'If clouds or rain spoil the sky, you get a 100% refund — or we move your session to a clearer night, whichever you prefer.',
    badge: '100% refund or postpone',
    tone: 'good',
  },
]
