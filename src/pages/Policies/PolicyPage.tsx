import type { ReactNode } from 'react'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { Button } from '@/components/ui/Button/Button'
import { Icon } from '@/components/ui/Icon/Icon'
import { contact } from '@/data/contact'
import type { PolicyItem } from '@/data/policies'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { paths } from '@/routes/paths'
import styles from './PolicyPage.module.css'

interface PolicyPageProps {
  title: string
  description: string
  items: PolicyItem[]
  /** Extra content shown above the policy cards. */
  intro?: ReactNode
  /** The other policy page, linked at the bottom. */
  related: { to: string; label: string }
}

/** Shared layout for the Prices & Booking and Cancellation Policy pages. */
export function PolicyPage({ title, description, items, intro, related }: PolicyPageProps) {
  useDocumentTitle(title)

  return (
    <>
      <PageHeader eyebrow="Policies" title={title} description={description} />
      <section className={styles.section}>
        <div className="container">
          <div className={styles.inner}>
            {intro}
            <ol className={styles.items}>
              {items.map((item) => (
                <li key={item.title} className={`${styles.item} ${item.tone ? styles[item.tone] : ''}`}>
                  <span className={styles.icon}>
                    <Icon name={item.icon} size={22} />
                  </span>
                  <div>
                    <div className={styles.itemHeader}>
                      <h2 className={styles.itemTitle}>{item.title}</h2>
                      {item.badge && <span className={styles.badge}>{item.badge}</span>}
                    </div>
                    <p className={styles.itemText}>{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className={styles.help}>
              <p>
                Questions? Message us on{' '}
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>{' '}
                or email <a href={`mailto:${contact.email}`}>{contact.email}</a>.
              </p>
              <div className={styles.actions}>
                <Button to={paths.book()}>Book a Session</Button>
                <Button to={related.to} variant="outline">
                  {related.label} <Icon name="arrowRight" size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
