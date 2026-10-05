import { SessionCard } from '@/components/common/SessionCard/SessionCard'
import { Button } from '@/components/ui/Button/Button'
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading'
import { sessionPackages } from '@/data/sessions'
import { homeSections, paths } from '@/routes/paths'
import styles from './ExperiencesSection.module.css'

export function ExperiencesSection() {
  return (
    <section id={homeSections.experiences} className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Experiences"
          title="A session for every young explorer"
          description="Four age-tailored sessions, each with real telescopes, a guide who loves the sky, and zero setup on your side."
        />
        <div className={styles.grid}>
          {sessionPackages.map((session) => (
            <SessionCard key={session.id} session={session} />
          ))}
        </div>
        <div className={styles.more}>
          <Button to={paths.book()} variant="outline">
            Compare all sessions
          </Button>
        </div>
      </div>
    </section>
  )
}
