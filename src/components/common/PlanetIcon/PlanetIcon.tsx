import jupiter from '@/assets/solar-system/jupiter.svg'
import mars from '@/assets/solar-system/mars.svg'
import mercury from '@/assets/solar-system/mercury.svg'
import saturn from '@/assets/solar-system/saturn.svg'
import venus from '@/assets/solar-system/venus.svg'
import type { PlanetName } from '@/utils/sky'
import styles from './PlanetIcon.module.css'

/** The Home Page solar-system artwork. Saturn is wider than tall because of its rings. */
const ARTWORK: Record<PlanetName, { src: string; ratio: number }> = {
  Mercury: { src: mercury, ratio: 1 },
  Venus: { src: venus, ratio: 1 },
  Mars: { src: mars, ratio: 1 },
  Jupiter: { src: jupiter, ratio: 1 },
  Saturn: { src: saturn, ratio: 597 / 375 },
}

interface PlanetIconProps {
  planet: PlanetName
  /** Height of the planet's disc in px. */
  size?: number
  /** Show the planet's name as a tooltip / accessible label. Off when a visible label sits next to it. */
  labelled?: boolean
}

export function PlanetIcon({ planet, size = 16, labelled = true }: PlanetIconProps) {
  const { src, ratio } = ARTWORK[planet]
  return (
    <img
      className={styles.planet}
      src={src}
      alt={labelled ? planet : ''}
      title={labelled ? planet : undefined}
      width={Math.round(size * ratio)}
      height={size}
      draggable={false}
    />
  )
}
