import type { BlogBlock } from '@/types'

/** Slower than the usual ~230 wpm, since our posts are written to be read by kids too. */
const WORDS_PER_MINUTE = 180

const blockText = (block: BlogBlock): string => {
  switch (block.type) {
    case 'heading':
    case 'paragraph':
      return block.text
    case 'list':
      return block.items.join(' ')
    case 'callout':
      return `${block.title} ${block.text}`
    case 'table':
      return [...block.columns, ...block.rows.flat()].join(' ')
    case 'image':
      return block.caption ?? ''
  }
}

/** Estimated minutes to read a post, rounded up, at least 1. */
export const readingTime = (content: BlogBlock[]) => {
  const words = content.map(blockText).join(' ').split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE))
}
