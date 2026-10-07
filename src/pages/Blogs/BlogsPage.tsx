import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { Icon } from '@/components/ui/Icon/Icon'
import { blogPosts } from '@/data/blogs'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { BlogCard } from './components/BlogCard'
import styles from './BlogsPage.module.css'

export function BlogsPage() {
  useDocumentTitle('Blogs')

  return (
    <>
      <PageHeader
        eyebrow="Blogs"
        title="Notes from under the sky"
        description="Stories, observing tips and sky guides from the UpAbove team."
      />
      <section className="section">
        <div className="container">
          {blogPosts.length > 0 ? (
            <ul className={styles.grid}>
              {blogPosts.map((post) => (
                <li key={post.slug}>
                  <BlogCard post={post} />
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles.empty}>
              <Icon name="telescope" size={32} />
              <p className={styles.emptyTitle}>Our first posts are on their way</p>
              <p className={styles.emptyText}>Check back soon — we’re busy looking up.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
