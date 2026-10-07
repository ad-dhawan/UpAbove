/** Section ids on the Home page, used for in-page navigation. */
export const homeSections = {
  experiences: 'experiences',
  gallery: 'gallery',
  about: 'about',
  faq: 'faq',
} as const

/** Single source of truth for every URL in the app. */
export const paths = {
  home: '/',
  experiences: `/#${homeSections.experiences}`,
  about: `/#${homeSections.about}`,
  blogs: '/blogs',
  pricing: '/pricing',
  cancellationPolicy: '/cancellation-policy',
  blog: (slug: string) => `/blogs/${slug}`,
  /** Opens the booking page; with a slug, that package is expanded and scrolled into view. */
  book: (packageSlug?: string) =>
    packageSlug ? `/book?package=${encodeURIComponent(packageSlug)}#${packageSlug}` : '/book',
  /** Date picker for a package; `month` is `YYYY-MM` and defaults to the current month. */
  bookDates: (packageSlug: string, month?: string) =>
    `/book/${encodeURIComponent(packageSlug)}${month ? `?month=${month}` : ''}`,
} as const
