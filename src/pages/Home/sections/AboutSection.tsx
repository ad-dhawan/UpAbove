import ankitPhoto from '@/assets/about/ankit-rooftop-telescope.jpg'
import { Logo } from '@/components/common/Logo/Logo'
import { SocialLinks } from '@/components/common/SocialLinks/SocialLinks'
import { Icon } from '@/components/ui/Icon/Icon'
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading'
import { homeSections } from '@/routes/paths'
import type { IconName } from '@/types'
import styles from './AboutSection.module.css'

const JOURNEY: Array<{ icon: IconName; title: string; text: string }> = [
  {
    icon: 'telescope',
    title: 'One telescope on a rooftop',
    text: 'It began with a single telescope pointed at the Moon from a city rooftop — and the gasp of the first person who saw its craters with their own eyes.',
  },
  {
    icon: 'users',
    title: 'A queue at the eyepiece',
    text: 'Word spread. Neighbours brought their kids, the kids brought their friends, and every night ended with the same question: “Can we do this again?”',
  },
  {
    icon: 'school',
    title: 'Schools came calling',
    text: 'Teachers asked if we could bring the sky into their classrooms and playgrounds. Turning wonder into lessons kids actually remember became the mission.',
  },
  {
    icon: 'rocket',
    title: 'UpAbove was born',
    text: 'Today we carry the whole observatory to homes, schools and events — telescopes, stories and certificates included — so no one has to just read about the stars.',
  },
]

const WONDERS = [
  {
    figure: '2.5 million',
    unit: 'years',
    text: 'The light from the Andromeda Galaxy that reaches your eye tonight set off before the first humans walked the Earth.',
  },
  {
    figure: '1,300',
    unit: 'Earths',
    text: 'could fit inside Jupiter — and through our telescopes you can watch four of its moons change places in a single evening.',
  },
  {
    figure: '400',
    unit: 'years',
    text: 'since Galileo first turned a telescope to the sky. The same thrill is waiting for every child who looks through one today.',
  },
]

const PILLARS = ['Education', 'Observation', 'Exploration', 'Technology', 'Adventure']

const FAVOURITE_TARGETS = ['Saturn’s rings', 'Lunar craters', 'The Orion Nebula', 'Jupiter’s moons', 'Meteor showers']

export function AboutSection() {
  return (
    <section id={homeSections.about} className="section">
      <div className="container">
        <SectionHeading
          eyebrow="About us"
          title={
            <>
              Born under a <span className="text-gradient">night sky</span>
            </>
          }
          description="UpAbove started the way most love stories with the universe do — with one look through a telescope that changed everything."
        />

        <div className={styles.origin}>
          <div className={styles.why}>
            <h3 className={styles.subheading}>Why we started</h3>
            <p>
              The universe is constantly above us, yet most of us rarely stop to truly <strong>look</strong> at it.
              City lights, busy schedules and the belief that telescopes are expensive, fragile and complicated keep
              the sky out of reach — especially for kids, whose curiosity is at its brightest.
            </p>
            <p>
              We started UpAbove because we couldn’t stand to see that curiosity fade. We wanted people not just to{' '}
              <strong>learn about astronomy</strong>, but to <strong>look up, observe, question and discover</strong>{' '}
              the universe for themselves — and to feel the jaw-dropping moment when Saturn’s rings first swim into
              focus.
            </p>
            <ul className={styles.pillars} aria-label="What UpAbove connects">
              {PILLARS.map((pillar) => (
                <li key={pillar}>{pillar}</li>
              ))}
            </ul>
          </div>

          <ol className={styles.journey} aria-label="How UpAbove started">
            {JOURNEY.map((step) => (
              <li key={step.title} className={styles.step}>
                <span className={styles.stepIcon}>
                  <Icon name={step.icon} size={20} />
                </span>
                <div>
                  <h4 className={styles.stepTitle}>{step.title}</h4>
                  <p className={styles.stepText}>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className={styles.wonder}>
          <h3 className={styles.wonderTitle}>
            <Icon name="sparkles" size={22} /> Why we never stop looking up
          </h3>
          <div className={styles.wonderGrid}>
            {WONDERS.map((item) => (
              <article key={item.figure} className={styles.wonderCard}>
                <p className={styles.figure}>
                  {item.figure} <span>{item.unit}</span>
                </p>
                <p className={styles.wonderText}>{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <article className={styles.teacher} aria-labelledby="teacher-name">
          <figure className={styles.portrait}>
            <img
              className={styles.photo}
              src={ankitPhoto}
              alt="Ankit Dhawan looking through a Pegasus 76700 telescope on a rooftop, with Jupiter, Sirius and Orion overhead"
              loading="lazy"
              decoding="async"
            />
            <Logo variant="mark" height={34} className={styles.portraitBadge} />
          </figure>

          <div className={styles.teacherBody}>
            <span className={styles.teacherEyebrow}>Meet your guide</span>
            <h3 id="teacher-name" className={styles.teacherName}>
              Ankit Dhawan
            </h3>
            <p className={styles.teacherRole}>Founder · Enthusiast astronomer · Lead sky guide</p>
            <p>
              Ankit has been hooked on the night sky since first seeing the Moon’s craters through a telescope.
              Countless late nights behind the eyepiece have followed — chasing planets, hunting
              faint nebulae, waking up for meteor showers and photographing the Moon from rooftops.
            </p>
            <p>
              UpAbove was founded to share that thrill. In every session Ankit sets up the telescopes, tells the stories
              behind the constellations and answers the big questions — from “why does the Moon change shape?” to
              “what is inside a black hole?” — in a way that makes every age group want to keep looking up.
            </p>

            <ul className={styles.targets} aria-label="Ankit’s favourite things to observe">
              {FAVOURITE_TARGETS.map((target) => (
                <li key={target}>
                  <Icon name="star" size={12} /> {target}
                </li>
              ))}
            </ul>

            <blockquote className={styles.quote}>
              “The best moment in any session is the silence right before someone whispers ‘wow’ at the eyepiece.”
            </blockquote>

            <SocialLinks variant="pill" />
          </div>
        </article>
      </div>
    </section>
  )
}
