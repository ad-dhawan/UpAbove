import { Outlet, ScrollRestoration, type Location } from 'react-router'
import { Starfield } from '@/components/common/Starfield/Starfield'
import { Footer } from '@/components/layout/Footer/Footer'
import { Navbar } from '@/components/layout/Navbar/Navbar'
import { useScrollToHash } from '@/hooks/useScrollToHash'
import styles from './MainLayout.module.css'

/**
 * Every fresh page load shares the key "default", so without this a newly opened URL
 * would inherit the scroll position of whatever page was loaded in the tab before.
 */
const getScrollKey = (location: Location) =>
  location.key === 'default' ? `default:${location.pathname}` : location.key

export function MainLayout() {
  useScrollToHash()

  return (
    <div className={styles.shell}>
      {/* One fixed night sky shared by every page, so sections never show a seam between backgrounds. */}
      <div className={styles.sky} aria-hidden="true">
        <Starfield count={160} seed={99} />
      </div>
      <Navbar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration getKey={getScrollKey} />
    </div>
  )
}
