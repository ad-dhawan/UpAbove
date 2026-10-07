import { Icon } from '@/components/ui/Icon/Icon'
import type { BlogPost } from '@/types'
import { formatDate } from '@/utils/format'
import { readingTime } from '@/utils/readingTime'
import styles from './BlogMeta.module.css'

/** Author, date and reading time for a post. */
export function BlogMeta({ post }: { post: BlogPost }) {
  return (
    <ul className={styles.meta}>
      <li>
        <Icon name="users" size={16} />
        {post.author}
      </li>
      <li>
        <Icon name="calendar" size={16} />
        <time dateTime={post.date}>{formatDate(post.date)}</time>
      </li>
      <li>
        <Icon name="clock" size={16} />
        {readingTime(post.content)} min read
      </li>
    </ul>
  )
}
