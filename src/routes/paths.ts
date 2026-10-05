/** Section ids on the Home page, used for in-page navigation. */
export const homeSections = {
  experiences: 'experiences',
  learning: 'learning',
  about: 'about',
  faq: 'faq',
} as const

/** Single source of truth for every URL in the app. */
export const paths = {
  home: '/',
  experiences: `/#${homeSections.experiences}`,
  learning: `/#${homeSections.learning}`,
  about: `/#${homeSections.about}`,
  /** Opens the booking page; with a slug, that package is expanded and scrolled into view. */
  book: (packageSlug?: string) =>
    packageSlug ? `/book?package=${encodeURIComponent(packageSlug)}#${packageSlug}` : '/book',
} as const
