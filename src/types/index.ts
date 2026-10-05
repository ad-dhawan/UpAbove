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

export interface LearningTopic {
  id: string
  title: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  summary: string
  facts: string[]
  icon: IconName
}

export interface Faq {
  id: string
  question: string
  answer: string
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
  | 'chevronDown'
