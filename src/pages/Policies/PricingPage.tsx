import { formatRupees, priceFactors, pricingPolicy, startingPrice } from '@/data/policies'
import { paths } from '@/routes/paths'
import { PolicyPage } from './PolicyPage'
import styles from './PolicyPage.module.css'

export function PricingPage() {
  return (
    <PolicyPage
      title="Prices & Booking"
      description={`Astronomy sessions starting from ${formatRupees(startingPrice)}. Here’s how pricing works and how to lock in your night under the stars.`}
      items={pricingPolicy}
      intro={
        <ul className={styles.factors} aria-label="What the price depends on">
          <li>Price depends on:</li>
          {priceFactors.map((factor) => (
            <li key={factor}>{factor}</li>
          ))}
        </ul>
      }
      related={{ to: paths.cancellationPolicy, label: 'Cancellation policy' }}
    />
  )
}
