import { useMemo } from 'react'
import { mulberry32 } from '@/utils/random'
import styles from './Starfield.module.css'

interface StarfieldProps {
  count?: number
  seed?: number
  className?: string
}

export function Starfield({ count = 220, seed = 42, className }: StarfieldProps) {
  const stars = useMemo(() => {
    const random = mulberry32(seed)
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: random() * 100,
      y: random() * 100,
      r: random() < 0.92 ? random() * 0.9 + 0.3 : random() * 1.2 + 1.1,
      opacity: random() * 0.6 + 0.35,
      twinkle: random() < 0.18,
      delay: random() * 6,
    }))
  }, [count, seed])

  return (
    <div className={`${styles.starfield} ${className ?? ''}`} aria-hidden="true">
      <div className={styles.milkyWay} />
      <svg className={styles.stars} width="100%" height="100%">
        {stars.map((s) => (
          <circle
            key={s.id}
            cx={`${s.x}%`}
            cy={`${s.y}%`}
            r={s.r}
            fill="#fff"
            opacity={s.opacity}
            className={s.twinkle ? styles.twinkle : undefined}
            style={s.twinkle ? { animationDelay: `${s.delay}s` } : undefined}
          />
        ))}
      </svg>
    </div>
  )
}
