import type { CSSProperties } from 'react'
import moon from '@/assets/solar-system/moon.svg'
import { MOON_PHASES } from '@/utils/sky'
import styles from './MoonPhase.module.css'

const STEPS = 24

/** A point on the unit disc → CSS percentage coordinates. */
const pt = (x: number, y: number) => `${(50 + 50 * x).toFixed(2)}% ${(50 + 50 * y).toFixed(2)}%`

/**
 * clip-path polygon for the unlit part of the Moon. The dark side is bounded by
 * one limb (half circle) and the terminator (half ellipse whose width depends
 * on the phase). Lit side is on the right while waxing, as seen from the
 * northern hemisphere.
 */
const shadowPolygon = (phase: number) => {
  const cycle = phase / 8
  const k = Math.cos(cycle * 2 * Math.PI)
  const waxing = cycle <= 0.5
  const limbSide = waxing ? -1 : 1
  const terminatorSide = waxing ? k : -k
  const points: string[] = []
  for (let s = 0; s <= STEPS; s++) {
    const y = -1 + (2 * s) / STEPS
    points.push(pt(limbSide * Math.sqrt(1 - y * y), y))
  }
  for (let s = STEPS; s >= 0; s--) {
    const y = -1 + (2 * s) / STEPS
    points.push(pt(terminatorSide * Math.sqrt(1 - y * y), y))
  }
  return `polygon(${points.join(', ')})`
}

const SHADOWS = MOON_PHASES.map((_, phase) => (phase === 4 ? 'none' : shadowPolygon(phase)))

interface MoonPhaseProps {
  /** 0–7, an index into MOON_PHASES (0 = New Moon, 4 = Full Moon). */
  phase: number
  /** Diameter in px. */
  size?: number
  className?: string
}

/** The Home Page Moon artwork with its unlit part dimmed by an 80% black overlay. */
export function MoonPhase({ phase, size = 32, className }: MoonPhaseProps) {
  return (
    <span
      className={`${styles.moon} ${className ?? ''}`}
      style={{ '--size': `${size}px` } as CSSProperties}
      role="img"
      aria-label={MOON_PHASES[phase]}
    >
      <img src={moon} alt="" className={styles.image} draggable={false} />
      {phase !== 4 && <span className={styles.shadow} style={{ clipPath: SHADOWS[phase] }} />}
    </span>
  )
}
