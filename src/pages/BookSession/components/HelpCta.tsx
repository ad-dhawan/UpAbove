import { Button } from '@/components/ui/Button/Button'
import { Icon } from '@/components/ui/Icon/Icon'
import { contact } from '@/data/contact'
import styles from './HelpCta.module.css'

const message = 'Hi UpAbove! I’d like help planning a stargazing event or choosing the right package.'
const whatsappHref = `https://wa.me/${contact.phoneHref.replace('+', '')}?text=${encodeURIComponent(message)}`

/** Below the packages: for events, or anyone unsure which package fits. */
export function HelpCta() {
  return (
    <div className={styles.card}>
      <span className={styles.icon}>
        <Icon name="telescope" size={32} />
      </span>
      <div className={styles.copy}>
        <h2 className={styles.title}>Planning an event, or not sure which package to pick?</h2>
        <p className={styles.text}>
          From birthday parties and school trips to society and corporate nights, we’ll shape a session around your
          group. Message us and we’ll help you choose.
        </p>
      </div>
      <Button href={whatsappHref} target="_blank" rel="noopener noreferrer" size="lg">
        <Icon name="whatsapp" size={18} /> Chat on WhatsApp
      </Button>
    </div>
  )
}
