import type { LearningTopic } from '@/types'

export const learningTopics: LearningTopic[] = [
  {
    id: 'moon',
    title: 'Our Moon',
    level: 'Beginner',
    summary: 'Why the Moon has phases, where its craters came from, and how it shapes tides on Earth.',
    facts: ['About 384,400 km from Earth', 'Always shows us the same face', 'Phases repeat every ~29.5 days'],
    icon: 'moon',
  },
  {
    id: 'planets',
    title: 'The Planets',
    level: 'Beginner',
    summary: 'Rocky worlds and gas giants — which ones you can see tonight and what to look for in a telescope.',
    facts: ['Jupiter’s four big moons are visible in small telescopes', 'Saturn’s rings are mostly ice', 'Planets don’t twinkle like stars'],
    icon: 'planet',
  },
  {
    id: 'stars',
    title: 'Life of Stars',
    level: 'Intermediate',
    summary: 'How stars are born in nebulae, why they have different colours, and how they end their lives.',
    facts: ['A star’s colour reveals its temperature', 'The Sun is a middle-aged star', 'We are made of elements forged in stars'],
    icon: 'sun',
  },
  {
    id: 'constellations',
    title: 'Reading the Sky',
    level: 'Beginner',
    summary: 'Learn the main constellations and use star-hopping to find your way around the night sky.',
    facts: ['There are 88 official constellations', 'Orion is easiest to spot in winter', 'Polaris barely moves through the night'],
    icon: 'sparkles',
  },
  {
    id: 'telescopes',
    title: 'How Telescopes Work',
    level: 'Intermediate',
    summary: 'Lenses, mirrors, aperture and magnification — what actually makes a telescope useful.',
    facts: ['Aperture matters more than magnification', 'Mirrors gather light in reflectors', 'Eyes need ~20 min to dark-adapt'],
    icon: 'telescope',
  },
  {
    id: 'blackholes',
    title: 'Black Holes',
    level: 'Advanced',
    summary: 'What happens when gravity wins, how we detect objects we cannot see, and the first image of one.',
    facts: ['Nothing, not even light, escapes the event horizon', 'There is a supermassive one at our galaxy’s centre', 'First imaged in 2019'],
    icon: 'eye',
  },
]
