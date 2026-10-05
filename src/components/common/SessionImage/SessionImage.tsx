import { Icon } from '@/components/ui/Icon/Icon'
import { getSessionImage } from '@/utils/sessionImages'
import styles from './SessionImage.module.css'

interface SessionImageProps {
  slug: string
  alt: string
  className?: string
}

/**
 * Fixed 4:3 image slot for a session. Shows the image from src/assets/sessions
 * when one exists, otherwise a themed placeholder of the same size.
 */
export function SessionImage({ slug, alt, className }: SessionImageProps) {
  const src = getSessionImage(slug)

  return (
    <div className={`${styles.frame} ${className ?? ''}`}>
      {src ? (
        <img className={styles.image} src={src} alt={alt} loading="lazy" decoding="async" />
      ) : (
        <div className={styles.placeholder} aria-hidden="true">
          <Icon name="image" size={28} />
          <span>Image coming soon</span>
        </div>
      )}
    </div>
  )
}
