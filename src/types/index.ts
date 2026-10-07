export interface SessionPackage {
  id: string
  slug: string
  title: string
  ageLabel: string
  tagline: string
  description: string
  durationMins: number
  maxGuests: number
  highlights: string[]
  includesCertificate: boolean
}

export interface Stat {
  id: string
  value: string
  label: string
  icon: IconName
}

export interface Faq {
  id: string
  question: string
  answer: string
}

/**
 * One piece of a blog post. Text in `paragraph`, `list` and `callout` blocks
 * supports **bold** and *italic*.
 */
export type BlogBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'image'; src: string; alt: string; caption?: string; size?: 'wide' | 'narrow' }
  | { type: 'table'; caption?: string; columns: string[]; rows: string[][] }
  | { type: 'callout'; tone: 'fact' | 'tip' | 'warning'; title: string; text: string }

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  /** ISO date, e.g. `2026-10-05`. */
  date: string
  author: string
  banner: { src: string; alt: string }
  content: BlogBlock[]
}

export interface NavItem {
  label: string
  to: string
}

export type IconName =
  | 'planet'
  | 'users'
  | 'rocket'
  | 'box'
  | 'star'
  | 'arrowDown'
  | 'arrowRight'
  | 'arrowLeft'
  | 'calendar'
  | 'clock'
  | 'mapPin'
  | 'check'
  | 'menu'
  | 'close'
  | 'award'
  | 'telescope'
  | 'eye'
  | 'sparkles'
  | 'home'
  | 'school'
  | 'moon'
  | 'sun'
  | 'mail'
  | 'phone'
  | 'image'
  | 'instagram'
  | 'whatsapp'
  | 'chevronDown'
