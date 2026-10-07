import logo from '@/assets/brand/logo.webp'
import styles from './Logo.module.css'

interface LogoProps {
  /** Rendered height in px; width follows the logo's aspect ratio. */
  height?: number
  className?: string
}

/** The UpAbove telescope-and-planet mark. Decorative: pair it with the brand name. */
export function Logo({ height = 40, className }: LogoProps) {
  return (
    <img
      className={`${styles.logo} ${className ?? ''}`}
      src={logo}
      alt=""
      height={height}
      style={{ height }}
      decoding="async"
    />
  )
}
