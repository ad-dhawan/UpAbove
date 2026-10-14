import { useSearchParams } from 'react-router'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { sessionPackages } from '@/data/sessions'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { HelpCta } from './components/HelpCta'
import { PackageCard } from './components/PackageCard'
import styles from './BookSessionPage.module.css'

export function BookSessionPage() {
  useDocumentTitle('Book a Session')
  const [searchParams, setSearchParams] = useSearchParams()

  // Details open and close for every package together, so the cards stay level. The open state
  // lives in the URL (?package=slug) so links to a package show its details.
  const isOpen = searchParams.has('package')

  const toggle = (slug: string) => {
    setSearchParams(isOpen ? {} : { package: slug }, { replace: true, preventScrollReset: true })
  }

  return (
    <>
      <PageHeader
        eyebrow="Book a session"
        title="Choose your package"
        description="Every package includes professional telescopes, an expert guide and zero setup on your side. Pick the one that fits your explorer’s age."
      />
      <section className="section">
        <div className={`container ${styles.grid}`}>
          {sessionPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} isOpen={isOpen} onToggle={() => toggle(pkg.slug)} />
          ))}
        </div>
        <div className="container">
          <HelpCta />
        </div>
      </section>
    </>
  )
}
