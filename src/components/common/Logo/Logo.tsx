import wordmark from '@/assets/brand/wordmark.webp'
import mark from '@/assets/brand/mark.webp'
import styles from './Logo.module.css'

interface LogoProps {
  /** Rendered height in px; width follows the logo's aspect ratio. */
  height?: number
  /** `wordmark` is the full "UpAbove" lettering; `mark` is the starred "A" on its own. */
  variant?: 'wordmark' | 'mark'
  className?: string
}

/** The UpAbove silver logo. The wordmark carries the brand name, so it doubles as the accessible label. */
export function Logo({ height = 32, variant = 'wordmark', className }: LogoProps) {
  const isWordmark = variant === 'wordmark'
  return (
    <img
      className={`${styles.logo} ${className ?? ''}`}
      src={isWordmark ? wordmark : mark}
      alt={isWordmark ? 'UpAbove' : ''}
      height={height}
      style={{ height }}
      decoding="async"
    />
  )
}
