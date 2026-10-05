import { useMemo } from 'react'
import { gaussian, mulberry32 } from '@/utils/random'
import styles from './Galaxy.module.css'

interface GalaxyProps {
  className?: string
  particles?: number
  arms?: number
  seed?: number
}

const SIZE = 1000
const CENTER = SIZE / 2
const RADIUS = SIZE * 0.46

/** Mixes two hex colours; t = 0 gives `a`, t = 1 gives `b`. */
function mix(a: string, b: string, t: number) {
  const pa = parseInt(a.slice(1), 16)
  const pb = parseInt(b.slice(1), 16)
  const ch = (shift: number) => Math.round(((pa >> shift) & 255) * (1 - t) + ((pb >> shift) & 255) * t)
  return `rgb(${ch(16)}, ${ch(8)}, ${ch(0)})`
}

/** Procedurally generated spiral galaxy, slowly rotating. */
export function Galaxy({ className, particles = 1600, arms = 3, seed = 2026 }: GalaxyProps) {
  const stars = useMemo(() => {
    const random = mulberry32(seed)
    return Array.from({ length: particles }, (_, i) => {
      const distance = Math.pow(random(), 0.65)
      const armAngle = ((i % arms) / arms) * Math.PI * 2
      const angle = armAngle + distance * 3.6 + gaussian(random) * (0.42 - distance * 0.22)
      const r = distance * RADIUS + gaussian(random) * 12
      const outerColor = random() < 0.25 ? '#e59ad6' : '#8fa8ff'
      return {
        id: i,
        x: CENTER + r * Math.cos(angle),
        y: CENTER + r * Math.sin(angle),
        r: random() < 0.04 ? random() * 1.6 + 1.6 : random() * 1.3 + 0.4,
        fill: distance < 0.25 ? mix('#fff3dc', '#f8b48d', distance * 4) : mix('#f8b48d', outerColor, (distance - 0.25) / 0.75),
        opacity: random() * 0.55 + 0.35,
      }
    })
  }, [particles, arms, seed])

  return (
    <svg className={`${styles.galaxy} ${className ?? ''}`} viewBox={`0 0 ${SIZE} ${SIZE}`} aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="galaxy-core">
          <stop offset="0" stopColor="#fff6e6" stopOpacity="0.95" />
          <stop offset="0.18" stopColor="#f8c39a" stopOpacity="0.6" />
          <stop offset="0.5" stopColor="#c27a9c" stopOpacity="0.18" />
          <stop offset="1" stopColor="#6d7bd9" stopOpacity="0" />
        </radialGradient>
        <filter id="galaxy-blur">
          <feGaussianBlur stdDeviation="14" />
        </filter>
      </defs>
      <g transform={`translate(${CENTER} ${CENTER}) rotate(-28) scale(1 0.42) translate(${-CENTER} ${-CENTER})`}>
        <g className={styles.spin}>
          <circle cx={CENTER} cy={CENTER} r={RADIUS} fill="url(#galaxy-core)" filter="url(#galaxy-blur)" opacity="0.7" />
          {stars.map((s) => (
            <circle key={s.id} cx={s.x} cy={s.y} r={s.r} fill={s.fill} opacity={s.opacity} />
          ))}
          <circle cx={CENTER} cy={CENTER} r={RADIUS * 0.18} fill="url(#galaxy-core)" />
        </g>
      </g>
    </svg>
  )
}
