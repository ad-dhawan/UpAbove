import moonPhasesBanner from '@/assets/blogs/moon-phases/banner.svg'
import moonPhasesDiagram from '@/assets/blogs/moon-phases/how-phases-work.svg'
import telescopesBanner from '@/assets/blogs/types-of-telescopes/banner.svg'
import telescopesDiagram from '@/assets/blogs/types-of-telescopes/how-telescopes-work.svg'
import telescopesMoonCraters from '@/assets/blogs/types-of-telescopes/moon-craters.jpg'
import type { BlogPost } from '@/types'

/** Every blog post on the site, newest first. */
export const blogPosts: BlogPost[] = [
  {
    slug: 'moon-phases',
    title: 'Understanding Moon Phases (and the Best Nights to Look Up)',
    excerpt:
      'Why does the Moon change shape? Meet all eight Moon phases, find out when each one is in the sky, and learn which phase is best for craters, planets and galaxies.',
    date: '2026-10-07',
    author: 'Ankit Dhawan',
    banner: { src: moonPhasesBanner, alt: 'The eight phases of the Moon arranged in an arc over a dark horizon' },
    content: [
      {
        type: 'paragraph',
        text: 'Some nights the Moon is a perfect silver circle. A week later it’s a half, then a thin smile, then it disappears completely! The Moon isn’t really changing shape — we’re just seeing **different amounts of its sunny side**. Let’s find out how.',
      },

      { type: 'heading', text: 'Why does the Moon have phases?' },
      {
        type: 'list',
        items: [
          'The Moon **doesn’t make its own light**. It shines because the Sun lights it up — just like a ball in a torch beam.',
          'The Sun always lights up **exactly half** of the Moon. The other half is in darkness.',
          'The Moon travels **around the Earth** once every month. As it moves, we see a different mix of its bright half and its dark half.',
        ],
      },
      {
        type: 'image',
        src: moonPhasesDiagram,
        alt: 'Diagram of the Moon at eight points around the Earth, with the Sun on the left and how the Moon looks from Earth at each point',
        caption: 'The Sun always lights the Moon’s side facing it (inner ring). From Earth, we see that lit side from a different angle each night (outer ring).',
        size: 'wide',
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Try it at home',
        text: 'In a dark room, switch on one lamp (the Sun). Hold a ball at arm’s length (the Moon) and slowly turn around on the spot (the Earth). Watch the ball go from dark, to a crescent, to half, to full — and back again!',
      },

      { type: 'heading', text: 'The eight phases of the Moon' },
      {
        type: 'table',
        caption: 'One full cycle takes about 29½ days',
        columns: ['Phase', 'What you see', 'When it’s in the sky'],
        rows: [
          ['New Moon', 'Nothing! The dark side faces us', 'Up in the daytime, lost in the Sun’s glare'],
          ['Waxing Crescent', 'A thin smile, lit on the right', 'Low in the west just after sunset'],
          ['First Quarter', 'A half Moon, lit on the right', 'High in the sky at sunset, sets around midnight'],
          ['Waxing Gibbous', 'More than half, still growing', 'Most of the evening'],
          ['Full Moon', 'A complete bright circle', 'Rises at sunset, up all night'],
          ['Waning Gibbous', 'More than half, now shrinking', 'Rises a couple of hours after sunset'],
          ['Last Quarter', 'A half Moon, lit on the left', 'Rises around midnight, up in the morning'],
          ['Waning Crescent', 'A thin smile, lit on the left', 'Rises just before dawn'],
        ],
      },
      {
        type: 'list',
        items: [
          '**Waxing** means *growing* — the lit part gets bigger each night.',
          '**Waning** means *shrinking* — the lit part gets smaller each night.',
          '**Crescent** is less than half lit, **gibbous** (say *GIB-us*) is more than half lit.',
        ],
      },
      {
        type: 'callout',
        tone: 'fact',
        title: 'Fun fact',
        text: 'On a crescent Moon you can often see the “dark” part glowing faintly. That’s **earthshine** — sunlight bouncing off the Earth, onto the Moon, and back to your eyes!',
      },

      { type: 'heading', text: 'A trick to tell waxing from waning' },
      {
        type: 'paragraph',
        text: 'Here in India (and the rest of the northern half of the world), a Moon that is **lit on the right is growing**, and a Moon that is **lit on the left is shrinking**. Just remember: *right is bright and getting brighter*.',
      },

      { type: 'heading', text: 'Which phase is best for stargazing?' },
      {
        type: 'paragraph',
        text: 'Surprise — the Full Moon is *not* the best night to look at the Moon! When the Sun shines straight onto it, there are no shadows, so craters look flat.',
      },
      {
        type: 'table',
        columns: ['If you want to see…', 'Choose', 'Why'],
        rows: [
          ['Craters and mountains', 'First Quarter or a crescent', 'Long shadows along the edge make craters pop out in 3D'],
          ['The Moon’s dark “seas”', 'Full Moon', 'The whole face is lit, so the patterns are easy to spot'],
          ['Galaxies and nebulae', 'New Moon or Last Quarter', 'No Moon in the evening sky means darker skies for faint things'],
          ['Planets', 'Any phase', 'Planets are bright enough to shine through moonlight'],
        ],
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Moonlight is bright!',
        text: 'A Full Moon through a telescope is completely safe to look at, but it can be dazzling! Keep your other eye open and look for a few seconds at a time — your eyes will thank you.',
      },

      { type: 'heading', text: 'Plan your night with UpAbove' },
      {
        type: 'paragraph',
        text: 'When you book a session, our calendar shows the **Moon phase** and the **planets in the evening sky** for every date — so you can pick a crater-tastic First Quarter, a dazzling Full Moon, or a night when Saturn’s rings are on show. We only run sessions when at least a third of the Moon is lit, so there’s always something bright to look at. Look up — the Moon is waiting!',
      },
    ],
  },
  {
    slug: 'types-of-telescopes',
    title: 'Types of Telescopes (and What They Can See)',
    excerpt:
      'Lenses, mirrors or both? Meet the three kinds of telescopes, find out what each one can spot, and learn how to snap your first Moon photo.',
    date: '2026-10-05',
    author: 'Ankit Dhawan',
    banner: { src: telescopesBanner, alt: 'Three telescopes on tripods pointing at a starry sky with the Moon' },
    content: [
      {
        type: 'paragraph',
        text: 'A telescope is like a **giant eye**. It catches far more light than your eye can, so faint things look brighter and tiny things look bigger. There are three main kinds — let’s meet them!',
      },

      { type: 'heading', text: 'The three types of telescopes' },
      {
        type: 'image',
        src: telescopesDiagram,
        alt: 'Diagram of light travelling through a refractor, a reflector and a catadioptric telescope',
        caption: 'How light travels inside each kind of telescope.',
        size: 'wide',
      },
      {
        type: 'list',
        items: [
          '**Refractor** — uses *lenses*, like a magnifying glass. Light goes straight through the big front lens to your eye.',
          '**Reflector** — uses *mirrors*. Light bounces off a curved mirror at the bottom and back up to the eyepiece.',
          '**Catadioptric** (say *cat-a-dye-OP-trick*) — uses *both*. Light folds back and forth, so a long telescope fits in a short tube.',
        ],
      },
      {
        type: 'table',
        caption: 'Quick comparison',
        columns: ['Type', 'Uses', 'Best for', 'Good to know'],
        rows: [
          ['Refractor', 'Lenses', 'Moon and planets', 'Sturdy and easy to use'],
          ['Reflector', 'Mirrors', 'Galaxies, nebulae, star clusters', 'Most light for the money'],
          ['Catadioptric', 'Lenses + mirrors', 'Planets, travelling', 'Short and easy to carry'],
        ],
      },
      {
        type: 'callout',
        tone: 'fact',
        title: 'Fun fact',
        text: 'Isaac Newton built the first reflector telescope in 1668. The Hubble Space Telescope is a reflector too — its mirror is 2.4 metres wide, taller than a grown-up!',
      },

      { type: 'heading', text: 'The telescopes UpAbove uses' },
      {
        type: 'paragraph',
        text: 'At our sessions you’ll get to look through **two** telescopes — one of each of the first two types!',
      },
      {
        type: 'table',
        columns: ['Telescope', 'Type', 'Size', 'Great for'],
        rows: [
          ['Pie Matrix Pegasus 76700', 'Reflector', '76 mm mirror, 700 mm long light path', 'Moon craters, Saturn’s rings, Jupiter’s moons'],
          ['Pie Matrix Neo 50360', 'Refractor', '50 mm lens, 360 mm long light path', 'The Moon, bright planets, first-time stargazers'],
        ],
      },
      {
        type: 'list',
        items: [
          'The **Pegasus 76700** has a mirror a little wider than a tennis ball, so it catches lots of light for sharper, brighter views.',
          'The **Neo 50360** is small and light — perfect for **little hands to aim and focus themselves**.',
          'Both are **quick to set up**, so we can bring them to your home, school or event.',
        ],
      },

      { type: 'heading', text: 'Which telescope can see what?' },
      {
        type: 'paragraph',
        text: 'The bigger the opening at the front of a telescope, the more light it catches — and the *fainter* the things it can show you.',
      },
      {
        type: 'table',
        columns: ['What to look at', 'Just your eyes', 'Small telescope (like ours)', 'Big telescope'],
        rows: [
          ['The Moon', 'Light and dark patches', 'Hundreds of craters and mountains', 'Tiny craters and valleys'],
          ['Jupiter', 'A bright “star”', 'Cloud stripes and 4 moons', 'The Great Red Spot'],
          ['Saturn', 'A golden “star”', 'Its rings!', 'A gap in the rings and more moons'],
          ['Venus', 'The brightest “star”', 'Phases, like a mini Moon', 'Phases, sharper'],
          ['Orion Nebula', 'A fuzzy star', 'A glowing cloud with baby stars', 'Wispy wings of gas'],
          ['Andromeda Galaxy', 'A faint smudge (dark skies only)', 'A soft, bright centre', 'Dark dust lanes'],
        ],
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Planet or star?',
        text: 'Stars *twinkle*. Planets shine with a steady light. If a bright “star” isn’t twinkling, it’s probably a planet — point your telescope there!',
      },

      { type: 'heading', text: 'What we should never look at' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Never look at the Sun',
        text: 'A telescope gathers sunlight and can **hurt your eyes in less than a second** — forever. Not at noon, not at sunset. The only safe way is a proper solar filter covering the *front* of the telescope, fitted by an adult who knows how.',
      },
      {
        type: 'list',
        items: [
          '**Bright lights** — streetlights, car headlights and lasers dazzle your eyes and spoil your night vision.',
          '**Other people’s windows** — be a good neighbour and keep your telescope pointed at the sky.',
          '**Things that are too big or too fast** — whole constellations, shooting stars and the Milky Way look best with just your eyes.',
        ],
      },

      { type: 'heading', text: 'Taking photos through a telescope' },
      {
        type: 'paragraph',
        text: 'You can take your first space photo with just a **phone**! Here’s how:',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Start with the **Moon** — it’s big, bright and easy to find.',
          'Focus the telescope with your eye first, using the low-zoom eyepiece.',
          'Hold your phone camera **right over the eyepiece** and move it slowly until the Moon fills the screen. A phone clamp makes this easy.',
          'Tap the Moon to focus, then **slide the brightness down** so it isn’t a white blob.',
          'Use the **3-second timer** so your tap doesn’t shake the picture.',
          'Take lots of photos and keep the sharpest one!',
        ],
      },
      {
        type: 'image',
        src: telescopesMoonCraters,
        alt: 'Close-up of craters along the edge of the Moon',
        caption: 'Look how many craters you can catch on camera!',
        size: 'wide',
      },
      {
        type: 'table',
        caption: 'Ready for more?',
        columns: ['Method', 'What you need', 'Great for'],
        rows: [
          ['Phone at the eyepiece', 'A phone (and a clamp)', 'The Moon, bright planets'],
          ['Camera on the telescope', 'A camera and an adapter ring', 'Sharp close-ups of the Moon'],
          ['Long-exposure photos', 'A camera and a motorised mount', 'Nebulae and galaxies'],
        ],
      },
      {
        type: 'paragraph',
        text: 'Want to try it for real? Book a session and we’ll help you take your very own Moon photo. Clear skies!',
      },
    ],
  },
]
