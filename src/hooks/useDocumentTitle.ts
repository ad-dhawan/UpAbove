import { useEffect } from 'react'

const BASE_TITLE = 'UpAbove'

export function useDocumentTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${BASE_TITLE}` : `${BASE_TITLE} — The Universe Closer to You`
  }, [title])
}
