/**
 * Picks up images from src/assets/sessions automatically. A file named after a
 * session slug (e.g. `sky-explorers.webp`) becomes that session's image.
 */
const modules = import.meta.glob<string>('/src/assets/sessions/*.{jpg,jpeg,png,webp,avif,svg}', {
  eager: true,
  import: 'default',
})

const imagesBySlug: Record<string, string> = Object.fromEntries(
  Object.entries(modules).map(([path, url]) => [path.split('/').pop()!.replace(/\.\w+$/, ''), url]),
)

export const getSessionImage = (slug: string): string | undefined => imagesBySlug[slug]
