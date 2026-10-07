import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading'
import { homeSections } from '@/routes/paths'
import { galleryImages } from '@/utils/galleryImages'
import styles from './GallerySection.module.css'

export function GallerySection() {
  if (galleryImages.length === 0) return null

  return (
    <section id={homeSections.gallery} className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Gallery"
          title="Straight from the eyepiece"
          description="Moments and views captured during our sessions under the night sky."
        />
      </div>
      <div className={styles.viewport}>
        {/* The list is rendered twice so the scroll loops seamlessly; the copy is hidden from screen readers. */}
        <div className={styles.track}>
          {[false, true].map((isCopy) => (
            <ul key={String(isCopy)} className={styles.list} aria-hidden={isCopy || undefined}>
              {galleryImages.map((image) => (
                <li key={image.src} className={styles.item}>
                  <img
                    className={styles.image}
                    src={image.src}
                    alt={isCopy ? '' : image.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
