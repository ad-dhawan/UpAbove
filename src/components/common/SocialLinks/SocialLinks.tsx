import { Icon } from '@/components/ui/Icon/Icon'
import { contact } from '@/data/contact'
import type { IconName } from '@/types'
import styles from './SocialLinks.module.css'

const LINKS: Array<{ icon: IconName; label: string; href: string; className: string }> = [
  { icon: 'instagram', label: 'Instagram', href: contact.instagram, className: styles.instagram },
  { icon: 'whatsapp', label: 'WhatsApp', href: contact.whatsapp, className: styles.whatsapp },
]

interface SocialLinksProps {
  /** `icon` shows round icon buttons; `pill` adds the network name next to the icon. */
  variant?: 'icon' | 'pill'
  className?: string
}

export function SocialLinks({ variant = 'icon', className }: SocialLinksProps) {
  return (
    <ul className={`${styles.list} ${className ?? ''}`} aria-label="UpAbove on social media">
      {LINKS.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.link} ${styles[variant]} ${link.className}`}
            aria-label={variant === 'icon' ? `UpAbove on ${link.label}` : undefined}
          >
            <Icon name={link.icon} size={variant === 'icon' ? 20 : 18} />
            {variant === 'pill' && <span>{link.label}</span>}
          </a>
        </li>
      ))}
    </ul>
  )
}
