import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { AboutSection } from './sections/AboutSection'
import { CertificateCta } from './sections/CertificateCta'
import { FaqSection } from './sections/FaqSection'
import { ExperiencesSection } from './sections/ExperiencesSection'
import { GallerySection } from './sections/GallerySection'
import { Hero } from './sections/Hero'
import { StatsBar } from './sections/StatsBar'

export function HomePage() {
  useDocumentTitle()

  return (
    <>
      <Hero />
      <StatsBar />
      <ExperiencesSection />
      <GallerySection />
      <AboutSection />
      <CertificateCta />
      <FaqSection />
    </>
  )
}
