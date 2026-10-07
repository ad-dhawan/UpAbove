import { cancellationPolicy } from '@/data/policies'
import { paths } from '@/routes/paths'
import { PolicyPage } from './PolicyPage'

export function CancellationPolicyPage() {
  return (
    <PolicyPage
      title="Cancellation Policy"
      description="Plans change — and so does the sky. Here’s what happens to your advance if a session is cancelled."
      items={cancellationPolicy}
      related={{ to: paths.pricing, label: 'Prices & booking' }}
    />
  )
}
