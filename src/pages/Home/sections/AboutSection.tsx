import { Icon } from '@/components/ui/Icon/Icon'
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading'
import { homeSections } from '@/routes/paths'
import type { IconName } from '@/types'
import styles from './AboutSection.module.css'

const STORY: Array<{ icon: IconName; title: string; text: string }> = [
  {
    icon: 'eye',
    title: 'The problem',
    text: 'Today’s kids — and many adults — have a remarkably thin relationship with the sky above. Without early, hands-on chances to interact with space, curiosity simply stalls.',
  },
  {
    icon: 'telescope',
    title: 'The barrier',
    text: 'Telescopes have a reputation: expensive, fragile, hard to assemble and tedious to focus. Too often one frustrating night ends with the gear gathering dust in a closet.',
  },
  {
    icon: 'rocket',
    title: 'Our solution',
    text: 'We bring the full observatory experience to your home, school or event — without the cost, the setup or the storage — so you can explore stars, planets and black holes rather than just know they exist.',
  },
  {
    icon: 'award',
    title: 'The reward',
    text: 'Every journey deserves recognition. Graduates of UpAbove sessions earn an official certificate celebrating their curiosity.',
  },
]

const PILLARS = ['Education', 'Observation', 'Exploration', 'Technology', 'Adventure']

export function AboutSection() {
  return (
    <section id={homeSections.about} className="section">
      <div className="container">
        <SectionHeading
          eyebrow="About us"
          title={
            <>
              Making astronomy <span className="text-gradient">experiential</span>
            </>
          }
          description="The universe is constantly above us, yet most people rarely get to truly observe it. UpAbove exists to change that."
        />

        <div className={styles.intro}>
          <p>
            We want to create experiences where people don’t simply <strong>learn about astronomy</strong> — they
            actually <strong>look up, observe, question, discover and experience</strong> the universe for themselves.
          </p>
          <ul className={styles.pillars} aria-label="What UpAbove connects">
            {PILLARS.map((pillar) => (
              <li key={pillar}>{pillar}</li>
            ))}
          </ul>
        </div>

        <div className={styles.story}>
          {STORY.map((item) => (
            <article key={item.title} className={styles.card}>
              <span className={styles.icon}>
                <Icon name={item.icon} size={24} />
              </span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
