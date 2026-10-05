import { paths } from '@/routes/paths'
import type { NavItem } from '@/types'

export const mainNav: NavItem[] = [
  { label: 'Home', to: paths.home },
  { label: 'Experiences', to: paths.experiences },
  { label: 'Learning', to: paths.learning },
  { label: 'About', to: paths.about },
]
