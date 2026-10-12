import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import { Logo } from '@/components/common/Logo/Logo'
import { Button } from '@/components/ui/Button/Button'
import { Icon } from '@/components/ui/Icon/Icon'
import { mainNav } from '@/data/navigation'
import { paths } from '@/routes/paths'
import styles from './Navbar.module.css'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname, hash } = useLocation()
  const current = `${pathname}${hash}`

  const closeMenu = () => setIsOpen(false)

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`} aria-label="Main">
        <Link to={paths.home} className={styles.brand} aria-label="UpAbove home" onClick={closeMenu}>
          <Logo height={30} />
        </Link>

        <ul id="main-menu" className={`${styles.links} ${isOpen ? styles.open : ''}`}>
          {mainNav.map((item) => {
            const isActive = current === item.to
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`${styles.link} ${isActive ? styles.active : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
          <li className={styles.mobileCta} onClick={closeMenu}>
            <Button to={paths.book()} fullWidth>
              Book a Session
            </Button>
          </li>
        </ul>

        <div className={styles.actions}>
          <Button to={paths.book()} size="sm" className={styles.desktopCta}>
            Book a Session
          </Button>
          <button
            type="button"
            className={styles.menuToggle}
            aria-expanded={isOpen}
            aria-controls="main-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsOpen((open) => !open)}
          >
            <Icon name={isOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </nav>
    </header>
  )
}
