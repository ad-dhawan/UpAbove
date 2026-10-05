import { useEffect } from 'react'
import { useLocation } from 'react-router'

/**
 * Scrolls to the element matching the URL hash after each navigation.
 * Needed on first load, where the browser looks for the target before React has rendered it.
 */
export function useScrollToHash() {
  const { hash, key } = useLocation()

  useEffect(() => {
    if (!hash) return
    const frame = requestAnimationFrame(() => {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView()
    })
    return () => cancelAnimationFrame(frame)
  }, [hash, key])
}
