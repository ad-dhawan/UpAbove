import type { ReactNode } from 'react'
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading'
import styles from './PageHeader.module.css'

interface PageHeaderProps {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
}

/** Banner used at the top of every inner page. */
export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} description={description} />
      </div>
    </section>
  )
}
