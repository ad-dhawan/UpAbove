import styles from './Moon.module.css'

interface MoonProps {
  className?: string
}

/** CSS-drawn full Moon with craters. Sized by its font-size (1em wide). */
export function Moon({ className }: MoonProps) {
  return (
    <span className={`${styles.moon} ${className ?? ''}`} aria-hidden="true">
      <span className={`${styles.crater} ${styles.c1}`} />
      <span className={`${styles.crater} ${styles.c2}`} />
      <span className={`${styles.crater} ${styles.c3}`} />
      <span className={`${styles.crater} ${styles.c4}`} />
      <span className={`${styles.crater} ${styles.c5}`} />
      <span className={`${styles.crater} ${styles.c6}`} />
    </span>
  )
}
