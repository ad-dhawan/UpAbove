import type { PlanetName, SkyForecast } from '@/utils/sky'

/** Rules for which evenings can be booked. Edit these to open or close dates. */
export const bookingRules = {
  /** How many months ahead (including the current one) customers can browse. */
  monthsAhead: 12,
  /** Days of notice needed: 1 means the earliest bookable evening is tomorrow. */
  minNoticeDays: 1,
  /** Weekdays with no sessions (0 = Sunday … 6 = Saturday). */
  closedWeekdays: [] as number[],
  /** Specific evenings that are already taken or unavailable, as `YYYY-MM-DD`. */
  blockedDates: [] as string[],
  /** Evenings when less than this fraction of the Moon is lit (0–1) can't be booked. */
  minMoonIllumination: 0.3,
}

/** What the Moon is doing in the evening sky for each of the 8 phases (index matches MOON_PHASES). */
export const moonPhaseNotes = [
  'No Moon tonight — the darkest skies of the month, perfect for star clusters, nebulae and galaxies.',
  'A slim crescent low in the west after sunset. Look for earthshine on the dark part and craters along the edge.',
  'A half Moon high in the evening sky — long shadows make this the best night for craters and mountains.',
  'A bright, fat Moon up all evening, with plenty of craters still in sharp relief along its edge.',
  'The Full Moon rises at sunset — dazzling, and great for spotting the dark “seas” and bright ray craters.',
  'The Moon rises an hour or two after sunset, so the early evening stays dark for stars and planets.',
  'The Moon rises around midnight — dark evening skies for stars, planets and deep-sky objects.',
  'The Moon only rises before dawn, leaving dark evening skies for deep-sky objects.',
]

/** One-line teaser for what each planet looks like through our telescopes. */
export const planetNotes: Record<PlanetName, string> = {
  Mercury: 'The smallest planet, low in the twilight — a rare catch!',
  Venus: 'The brightest “star” in the sky, showing Moon-like phases.',
  Mars: 'The Red Planet — a rusty-orange disc.',
  Jupiter: 'Cloud belts and four moons that change places every night.',
  Saturn: 'Its rings — the view everyone remembers.',
}

/**
 * What makes an evening especially good for each package. Matching dates get a
 * “Great night” marker in the calendar.
 */
export const greatNights: Record<string, { label: string; test: (sky: SkyForecast) => boolean }> = {
  'little-stargazers': {
    label: 'The Moon is big and bright all evening',
    test: (sky) => sky.phase >= 2 && sky.phase <= 4,
  },
  'sky-explorers': {
    label: 'Several planets and the Moon to explore',
    test: (sky) => sky.planets.length >= 2 && sky.phase >= 1 && sky.phase <= 4,
  },
  'junior-astronomers': {
    label: 'Crisp crater shadows plus planets to star-hop to',
    test: (sky) => sky.phase >= 1 && sky.phase <= 3 && sky.planets.length >= 1,
  },
  'cosmos-curious': {
    label: 'The Moon rises late, leaving dark early-evening skies for galaxies and nebulae',
    test: (sky) => sky.phase === 5 || sky.phase === 6,
  },
}
