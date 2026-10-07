/**
 * Lightweight night-sky calculations for the booking calendar.
 *
 * Accuracy is "good enough to plan a stargazing evening": Moon phases come from
 * the mean synodic month (within ~half a day) and planet positions from JPL's
 * approximate Keplerian elements (within a degree or two for 1800–2050).
 */

export type MoonPhaseName =
  | 'New Moon'
  | 'Waxing Crescent'
  | 'First Quarter'
  | 'Waxing Gibbous'
  | 'Full Moon'
  | 'Waning Gibbous'
  | 'Last Quarter'
  | 'Waning Crescent'

/** The eight phases in order; the index is used as the phase id throughout the app. */
export const MOON_PHASES: MoonPhaseName[] = [
  'New Moon',
  'Waxing Crescent',
  'First Quarter',
  'Waxing Gibbous',
  'Full Moon',
  'Waning Gibbous',
  'Last Quarter',
  'Waning Crescent',
]

export type PlanetName = 'Mercury' | 'Venus' | 'Mars' | 'Jupiter' | 'Saturn'

export interface SkyForecast {
  /** 0–7, an index into MOON_PHASES. */
  phase: number
  phaseName: MoonPhaseName
  /** Fraction of the Moon's disc that is lit, 0–1. */
  illumination: number
  /** Planets above the horizon at some point during the evening (roughly 7–11 pm). */
  planets: PlanetName[]
}

const DAY_MS = 86_400_000
const SYNODIC_MONTH = 29.530588853
/** A known New Moon: 6 January 2000, 18:14 UTC. */
const REFERENCE_NEW_MOON = Date.UTC(2000, 0, 6, 18, 14)
/** J2000.0 epoch: 1 January 2000, 12:00 UTC. */
const J2000 = Date.UTC(2000, 0, 1, 12)
const RAD = Math.PI / 180

/** Moon age in days (0 = new, ~14.77 = full) at the given instant. */
const moonAge = (date: Date) => {
  const days = (date.getTime() - REFERENCE_NEW_MOON) / DAY_MS
  return ((days % SYNODIC_MONTH) + SYNODIC_MONTH) % SYNODIC_MONTH
}

export const getMoonPhase = (date: Date) => {
  const age = moonAge(date)
  // Each named phase is centred on its moment (e.g. Full Moon spans ±1/16 of a cycle around full).
  const phase = Math.round((age / SYNODIC_MONTH) * 8) % 8
  const illumination = (1 - Math.cos((age / SYNODIC_MONTH) * 2 * Math.PI)) / 2
  return { phase, phaseName: MOON_PHASES[phase], illumination }
}

/* ---------- Planets ---------- */

interface Elements {
  /** Semi-major axis (AU), eccentricity, inclination, mean longitude, longitude of perihelion, ascending node — with rates per century for the angles. */
  a: number
  e: number
  i: number
  L: [number, number]
  peri: [number, number]
  node: [number, number]
}

// JPL "Approximate Positions of the Planets", Table 1 (valid 1800–2050).
const ELEMENTS: Record<PlanetName | 'Earth', Elements> = {
  Mercury: { a: 0.38709927, e: 0.20563593, i: 7.00497902, L: [252.2503235, 149472.67411175], peri: [77.45779628, 0.16047689], node: [48.33076593, -0.12534081] },
  Venus: { a: 0.72333566, e: 0.00677672, i: 3.39467605, L: [181.9790995, 58517.81538729], peri: [131.60246718, 0.00268329], node: [76.67984255, -0.27769418] },
  Earth: { a: 1.00000261, e: 0.01671123, i: 0, L: [100.46457166, 35999.37244981], peri: [102.93768193, 0.32327364], node: [0, 0] },
  Mars: { a: 1.52371034, e: 0.0933941, i: 1.84969142, L: [-4.55343205, 19140.30268499], peri: [-23.94362959, 0.44441088], node: [49.55953891, -0.29257343] },
  Jupiter: { a: 5.202887, e: 0.04838624, i: 1.30439695, L: [34.39644051, 3034.74612775], peri: [14.72847983, 0.21252668], node: [100.47390909, 0.20469106] },
  Saturn: { a: 9.53667594, e: 0.05386179, i: 2.48599187, L: [49.95424423, 1222.49362201], peri: [92.59887831, -0.41897216], node: [113.66242448, -0.28867794] },
}

/** Heliocentric ecliptic x/y/z (AU) of a body at T Julian centuries since J2000. */
const heliocentric = ({ a, e, i, L, peri, node }: Elements, T: number) => {
  const meanLong = L[0] + L[1] * T
  const varpi = peri[0] + peri[1] * T
  const omega = node[0] + node[1] * T
  const M = (((meanLong - varpi) % 360) + 360) % 360

  // Solve Kepler's equation M = E − e·sin E by Newton iteration.
  let E = M * RAD + e * Math.sin(M * RAD)
  for (let k = 0; k < 6; k++) E -= (E - e * Math.sin(E) - M * RAD) / (1 - e * Math.cos(E))

  const xp = a * (Math.cos(E) - e)
  const yp = a * Math.sqrt(1 - e * e) * Math.sin(E)
  const w = (varpi - omega) * RAD
  const O = omega * RAD
  const I = i * RAD
  const cw = Math.cos(w), sw = Math.sin(w), cO = Math.cos(O), sO = Math.sin(O), cI = Math.cos(I), sI = Math.sin(I)
  return {
    x: (cw * cO - sw * sO * cI) * xp + (-sw * cO - cw * sO * cI) * yp,
    y: (cw * sO + sw * cO * cI) * xp + (-sw * sO + cw * cO * cI) * yp,
    z: sw * sI * xp + cw * sI * yp,
  }
}

/** Minimum angle from the Sun (degrees) for a planet to clear the twilight glow. */
const MIN_ELONGATION: Record<PlanetName, number> = { Mercury: 18, Venus: 15, Mars: 20, Jupiter: 20, Saturn: 20 }

/**
 * Signed elongation of a planet from the Sun, in degrees: positive means east of
 * the Sun (it sets after the Sun, so it's in the evening sky).
 */
export const getElongation = (planet: PlanetName, date: Date) => {
  const T = (date.getTime() - J2000) / DAY_MS / 36525
  const earth = heliocentric(ELEMENTS.Earth, T)
  const p = heliocentric(ELEMENTS[planet], T)
  const planetLong = Math.atan2(p.y - earth.y, p.x - earth.x) / RAD
  const sunLong = Math.atan2(-earth.y, -earth.x) / RAD
  return ((((planetLong - sunLong + 540) % 360) + 360) % 360) - 180
}

/**
 * Evening visibility: a planet east of the Sun is up after sunset; one far west
 * of the Sun (more than ~120°) rises within a few hours of sunset.
 */
const isVisibleInEvening = (planet: PlanetName, date: Date) => {
  const elongation = getElongation(planet, date)
  return elongation >= MIN_ELONGATION[planet] || elongation <= -120
}

const PLANETS: PlanetName[] = ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn']

/** Sky forecast for the evening of a calendar date (computed at 8 pm local time). */
export const getSkyForecast = (year: number, month: number, day: number): SkyForecast => {
  const evening = new Date(year, month, day, 20)
  return {
    ...getMoonPhase(evening),
    planets: PLANETS.filter((planet) => isVisibleInEvening(planet, evening)),
  }
}
