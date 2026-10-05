import { Icon } from '@/components/ui/Icon/Icon'
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading'
import { learningTopics } from '@/data/learning'
import { homeSections } from '@/routes/paths'
import styles from './LearningSection.module.css'

export function LearningSection() {
  return (
    <section id={homeSections.learning} className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Learning"
          title="Know what you’re looking at"
          description="Bite-sized guides to the objects you’ll meet in our sessions — from the Moon next door to black holes far away."
        />
        <div className={styles.grid}>
          {learningTopics.map((topic) => (
            <article key={topic.id} className={styles.card}>
              <div className={styles.top}>
                <span className={styles.icon}>
                  <Icon name={topic.icon} size={22} />
                </span>
                <span className={styles.level}>{topic.level}</span>
              </div>
              <h3 className={styles.title}>{topic.title}</h3>
              <p className={styles.summary}>{topic.summary}</p>
              <ul className={styles.facts}>
                {topic.facts.map((fact) => (
                  <li key={fact}>
                    <Icon name="sparkles" size={14} /> {fact}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
