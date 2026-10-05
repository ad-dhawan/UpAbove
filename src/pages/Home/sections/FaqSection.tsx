import { useState } from 'react'
import { Icon } from '@/components/ui/Icon/Icon'
import { contact } from '@/data/contact'
import { faqs } from '@/data/faqs'
import { homeSections } from '@/routes/paths'
import styles from './FaqSection.module.css'

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => setOpenId((current) => (current === id ? null : id))

  return (
    <section id={homeSections.faq} className="section">
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>Frequently Asked Questions</h2>

        <ul className={styles.list}>
          {faqs.map((faq) => {
            const isOpen = openId === faq.id
            const buttonId = `faq-${faq.id}-question`
            const panelId = `faq-${faq.id}-answer`
            return (
              <li key={faq.id} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
                <h3 className={styles.question}>
                  <button
                    id={buttonId}
                    type="button"
                    className={styles.trigger}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(faq.id)}
                  >
                    <span>{faq.question}</span>
                    <Icon name="chevronDown" size={22} strokeWidth={2.5} className={styles.chevron} />
                  </button>
                </h3>
                <div id={panelId} role="region" aria-labelledby={buttonId} className={styles.panel} inert={!isOpen}>
                  <div className={styles.panelInner}>
                    <p className={styles.answer}>{faq.answer}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>

        <p className={styles.more}>
          Have more questions?{' '}
          <a href={`mailto:${contact.email}`} className={styles.link}>
            Contact us today!
          </a>
        </p>
      </div>
    </section>
  )
}
