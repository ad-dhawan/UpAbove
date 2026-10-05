import type { CSSProperties } from 'react'
import comet from '@/assets/solar-system/comet.svg'
import earth from '@/assets/solar-system/earth.svg'
import jupiter from '@/assets/solar-system/jupiter.svg'
import mars from '@/assets/solar-system/mars.svg'
import mercury from '@/assets/solar-system/mercury.svg'
import moon from '@/assets/solar-system/moon.svg'
import neptune from '@/assets/solar-system/neptune.svg'
import pluto from '@/assets/solar-system/pluto.svg'
import saturn from '@/assets/solar-system/saturn.svg'
import sun from '@/assets/solar-system/sun.svg'
import uranus from '@/assets/solar-system/uranus.svg'
import venus from '@/assets/solar-system/venus.svg'
import styles from './SolarSystem.module.css'

interface Planet {
  name: string
  src: string
  /** Orbit radius, as a % of the scene width. */
  orbit: number
  /** Position on the orbit in degrees: 0 is directly left of the sun, positive is above. */
  angle: number
  /** Diameter of the planet's disc, as a % of the scene width. */
  size: number
  /** Artwork width ÷ disc diameter, for planets whose rings overhang the disc. */
  ratio?: number
  /** Seconds for one gentle back-and-forth drift along the orbit. */
  drift: number
  hasMoon?: boolean
}

const planets: Planet[] = [
  { name: 'mercury', src: mercury, orbit: 20, angle: -40, size: 3.6, drift: 14 },
  { name: 'venus', src: venus, orbit: 27, angle: 28, size: 5.2, drift: 18 },
  { name: 'earth', src: earth, orbit: 35, angle: -12, size: 6, drift: 22, hasMoon: true },
  { name: 'mars', src: mars, orbit: 43, angle: 40, size: 4.4, drift: 26 },
  { name: 'jupiter', src: jupiter, orbit: 53, angle: -32, size: 11.5, drift: 34 },
  { name: 'saturn', src: saturn, orbit: 64, angle: 22, size: 9, ratio: 597 / 375, drift: 40 },
  { name: 'uranus', src: uranus, orbit: 75, angle: -9, size: 7, ratio: 551 / 375, drift: 46 },
  { name: 'neptune', src: neptune, orbit: 85, angle: 30, size: 6.6, drift: 52 },
  { name: 'pluto', src: pluto, orbit: 95, angle: -27, size: 3.2, drift: 60 },
]

/** Illustrated solar system that fills the right half of the hero. */
export function SolarSystem({ className }: { className?: string }) {
  return (
    <div className={`${styles.system} ${className ?? ''}`} aria-hidden="true">
      <div className={styles.glow} />

      {planets.map((planet) => (
        <div
          key={planet.name}
          className={styles.orbit}
          style={
            {
              '--orbit': planet.orbit,
              '--angle': planet.angle,
              '--size': planet.size,
              '--ratio': planet.ratio ?? 1,
              '--drift': planet.drift,
            } as CSSProperties
          }
        >
          <div className={styles.arm}>
            <div className={styles.body}>
              <div className={styles.upright}>
                <img src={planet.src} alt="" className={styles.image} draggable={false} />
              </div>
              <div className={styles.shade} />
              {planet.hasMoon && (
                <div className={styles.moonOrbit}>
                  <img src={moon} alt="" className={styles.moon} draggable={false} />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      <img src={sun} alt="" className={styles.sun} draggable={false} />
      <img src={comet} alt="" className={styles.comet} draggable={false} />
    </div>
  )
}
