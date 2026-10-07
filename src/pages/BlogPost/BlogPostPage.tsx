import { useParams } from 'react-router'
import { Button } from '@/components/ui/Button/Button'
import { Icon } from '@/components/ui/Icon/Icon'
import { blogPosts } from '@/data/blogs'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { BlogMeta } from '@/pages/Blogs/components/BlogMeta'
import { NotFoundPage } from '@/pages/NotFound/NotFoundPage'
import { paths } from '@/routes/paths'
import { BlogContent } from './components/BlogContent'
import styles from './BlogPostPage.module.css'

export function BlogPostPage() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)
  // Matches NotFoundPage's title; this effect runs after the child's, so it would otherwise overwrite it.
  useDocumentTitle(post?.title ?? 'Lost in space')

  if (!post) return <NotFoundPage />

  return (
    <article className={styles.page}>
      <div className={styles.inner}>
        <Button to={paths.blogs} variant="ghost" size="sm" className={styles.back}>
          <Icon name="arrowLeft" size={16} />
          All blogs
        </Button>
        <img className={styles.banner} src={post.banner.src} alt={post.banner.alt} />
        <header className={styles.header}>
          <h1 className={styles.title}>{post.title}</h1>
          <BlogMeta post={post} />
        </header>
        <BlogContent content={post.content} />
        <footer className={styles.footer}>
          <Button to={paths.book()}>Book a Session</Button>
          <Button to={paths.blogs} variant="outline">
            More blogs
          </Button>
        </footer>
      </div>
    </article>
  )
}
