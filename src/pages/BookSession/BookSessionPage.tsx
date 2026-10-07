import { useSearchParams } from 'react-router'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { sessionPackages } from '@/data/sessions'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { PackageCard } from './components/PackageCard'
import styles from './BookSessionPage.module.css'

export function BookSessionPage() {
  useDocumentTitle('Book a Session')
  const [searchParams, setSearchParams] = useSearchParams()

  // Expanded packages live in the URL (?package=a&package=b) so they can be linked to; any number can be open.
  const openSlugs = searchParams.getAll('package')

  const toggle = (slug: string) => {
    const next = openSlugs.includes(slug) ? openSlugs.filter((s) => s !== slug) : [...openSlugs, slug]
    setSearchParams({ package: next }, { replace: true, preventScrollReset: true })
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
            <PackageCard key={pkg.id} pkg={pkg} isOpen={openSlugs.includes(pkg.slug)} onToggle={() => toggle(pkg.slug)} />
          ))}
        </div>
      </section>
    </>
  )
}
