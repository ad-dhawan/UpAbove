import { Icon } from '@/components/ui/Icon/Icon'
import type { BlogBlock, IconName } from '@/types'
import { RichText } from './RichText'
import styles from './BlogContent.module.css'

const calloutIcons: Record<Extract<BlogBlock, { type: 'callout' }>['tone'], IconName> = {
  fact: 'sparkles',
  tip: 'star',
  warning: 'sun',
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case 'heading':
      return <h2 className={styles.heading}>{block.text}</h2>
    case 'paragraph':
      return (
        <p className={styles.paragraph}>
          <RichText text={block.text} />
        </p>
      )
    case 'list': {
      const List = block.ordered ? 'ol' : 'ul'
      return (
        <List className={styles.list}>
          {block.items.map((item) => (
            <li key={item}>
              <RichText text={item} />
            </li>
          ))}
        </List>
      )
    }
    case 'image':
      return (
        <figure className={`${styles.figure} ${styles[block.size ?? 'wide']}`}>
          <img src={block.src} alt={block.alt} loading="lazy" decoding="async" />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      )
    case 'table':
      return (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            {block.caption && <caption>{block.caption}</caption>}
            <thead>
              <tr>
                {block.columns.map((column) => (
                  <th key={column} scope="col">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map(([first, ...rest]) => (
                <tr key={first}>
                  <th scope="row">{first}</th>
                  {rest.map((cell, i) => (
                    <td key={i}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    case 'callout':
      return (
        <aside className={`${styles.callout} ${styles[block.tone]}`}>
          <p className={styles.calloutTitle}>
            <Icon name={calloutIcons[block.tone]} size={20} />
            {block.title}
          </p>
          <p>
            <RichText text={block.text} />
          </p>
        </aside>
      )
  }
}

/** Renders the body of a blog post from its content blocks. */
export function BlogContent({ content }: { content: BlogBlock[] }) {
  return (
    <div className={styles.content}>
      {content.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </div>
  )
}
