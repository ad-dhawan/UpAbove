import type { ReactNode } from 'react'
import styles from './Badge.module.css'

interface BadgeProps {
  children: ReactNode
  tone?: 'accent' | 'neutral' | 'primary'
}

export function Badge({ children, tone = 'accent' }: BadgeProps) {
  return <span className={`${styles.badge} ${styles[tone]}`}>{children}</span>
}
