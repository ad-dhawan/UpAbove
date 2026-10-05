import type { SessionPackage } from '@/types'

export const sessionPackages: SessionPackage[] = [
  {
    id: 'pkg-little-stargazers',
    slug: 'little-stargazers',
    title: 'Little Stargazers',
    ageLabel: 'Age 4 to 6',
    tagline: 'A gentle first look at the Moon and stars',
    description:
      'A playful, story-led introduction to the night sky. Little ones meet the Moon up close through the telescope, spot the brightest stars and planets, and hear the stories behind them — paced for short attention spans and big imaginations.',
    durationMins: 45,
    maxGuests: 8,
    highlights: ['Moon and bright-planet viewing', 'Star stories and sky songs', 'Glow-in-the-dark star cards', 'Little Stargazer certificate'],
    includesCertificate: true,
  },
  {
    id: 'pkg-sky-explorers',
    slug: 'sky-explorers',
    title: 'Sky Explorers',
    ageLabel: 'Age 7 to 9',
    tagline: 'Planets, constellations and the stories behind them',
    description:
      'Explorers learn to find planets and constellations on their own, see Saturn’s rings and Jupiter’s moons through the telescope, and discover why the Moon changes shape — with hands-on activities between each view.',
    durationMins: 60,
    maxGuests: 12,
    highlights: ['Planet viewing through a real telescope', 'Constellation hunting', 'Moon-phase activity', 'Sky Explorer certificate'],
    includesCertificate: true,
  },
  {
    id: 'pkg-junior-astronomers',
    slug: 'junior-astronomers',
    title: 'Junior Astronomers',
    ageLabel: 'Age 10 to 13',
    tagline: 'Hands-on telescope skills and real observing',
    description:
      'Junior Astronomers take the controls: aligning and focusing the telescope, star-hopping to targets and keeping an observation log. They leave understanding how telescopes work and what they are really looking at.',
    durationMins: 90,
    maxGuests: 15,
    highlights: ['Align and focus the telescope yourself', 'Star-hopping navigation', 'Observation logbook', 'Junior Astronomer certificate'],
    includesCertificate: true,
  },
  {
    id: 'pkg-cosmos-curious',
    slug: 'cosmos-curious',
    title: 'Cosmos Curious',
    ageLabel: 'Age 14+',
    tagline: 'Deep sky, astrophysics and astrophotography',
    description:
      'For teens and adults who want to go deeper: galaxies, nebulae and star clusters, the life and death of stars, black holes, and a hands-on introduction to capturing the sky with your phone or camera.',
    durationMins: 120,
    maxGuests: 20,
    highlights: ['Deep-sky objects: galaxies and nebulae', 'Astrophysics talk and Q&A', 'Phone astrophotography', 'Cosmos Curious certificate'],
    includesCertificate: true,
  },
]
