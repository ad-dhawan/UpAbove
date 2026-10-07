import { Link } from 'react-router'
import { paths } from '@/routes/paths'
import type { BlogPost } from '@/types'
import { BlogMeta } from './BlogMeta'
import styles from './BlogCard.module.css'

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className={styles.card}>
      <img className={styles.banner} src={post.banner.src} alt="" loading="lazy" decoding="async" />
      <div className={styles.body}>
        <h2 className={styles.title}>
          <Link to={paths.blog(post.slug)} className={styles.link}>
            {post.title}
          </Link>
        </h2>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <BlogMeta post={post} />
      </div>
    </article>
  )
}
