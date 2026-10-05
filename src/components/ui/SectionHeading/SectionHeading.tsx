import type { ReactNode } from 'react'
import { Badge } from '@/components/ui/Badge/Badge'
import styles from './SectionHeading.module.css'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  as?: 'h1' | 'h2'
}

export function SectionHeading({ eyebrow, title, description, align = 'center', as: Heading = 'h2' }: SectionHeadingProps) {
  return (
    <header className={`${styles.heading} ${styles[align]}`}>
      {eyebrow && <Badge>{eyebrow}</Badge>}
      <Heading className={styles.title}>{title}</Heading>
      {description && <p className={styles.description}>{description}</p>}
    </header>
  )
}
