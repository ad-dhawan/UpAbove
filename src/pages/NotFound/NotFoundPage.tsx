import { Moon } from '@/components/common/Moon/Moon'
import { Button } from '@/components/ui/Button/Button'
import { Icon } from '@/components/ui/Icon/Icon'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { paths } from '@/routes/paths'
import styles from './NotFoundPage.module.css'

export function NotFoundPage() {
  useDocumentTitle('Lost in space')

  return (
    <section className={styles.page}>
      <div className={styles.content}>
        <h1 className={styles.code} aria-label="404">
          <span className="text-gradient">4</span>
          <span className={styles.moonWrap}>
            <Moon className={styles.moon} />
            <span className={styles.orbit}>
              <Icon name="rocket" size={28} className={styles.rocket} />
            </span>
          </span>
          <span className="text-gradient">4</span>
        </h1>
        <p className={styles.title}>Houston, we have a problem.</p>
        <p className={styles.text}>This page drifted out of orbit — even our telescopes can’t find it.</p>
        <div className={styles.actions}>
          <Button to={paths.home}>Return to Earth</Button>
          <Button to={paths.book()} variant="outline">
            Book a Session
          </Button>
        </div>
      </div>
    </section>
  )
}
