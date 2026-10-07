/**
 * Picks up every image in src/assets/gallery automatically, ordered by file name.
 * The file name (minus any leading number) doubles as the alt text,
 * e.g. `02-crescent-moon.jpg` → "Crescent moon".
 */
const modules = import.meta.glob<string>('/src/assets/gallery/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
})

const toAlt = (fileName: string) => {
  const words = fileName.replace(/\.\w+$/, '').replace(/^\d+[-_\s]*/, '').replace(/[-_]+/g, ' ').trim()
  return words.charAt(0).toUpperCase() + words.slice(1)
}

export const galleryImages: Array<{ src: string; alt: string }> = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => ({ src, alt: toAlt(path.split('/').pop()!) }))
