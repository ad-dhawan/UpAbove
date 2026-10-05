import { Icon } from '@/components/ui/Icon/Icon'
import { stats } from '@/data/stats'
import styles from './StatsBar.module.css'

export function StatsBar() {
  return (
    <section id="stats" className={styles.wrapper} aria-label="UpAbove in numbers">
      <div className="container">
        <ul className={styles.bar}>
          {stats.map((stat) => (
            <li key={stat.id} className={styles.item}>
              <span className={styles.icon}>
                <Icon name={stat.icon} size={22} />
              </span>
              <span>
                <strong className={styles.value}>{stat.value}</strong>
                <span className={styles.label}>{stat.label}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
