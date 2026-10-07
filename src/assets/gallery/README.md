# Gallery images

Every image in this folder (`jpg`, `jpeg`, `png`, `webp`, `avif`) is shown in the
Gallery section on the Home page — no code changes needed (see `src/utils/galleryImages.ts`).

- Images appear in file-name order, so prefix them with a number: `06-saturn.jpg`.
- The rest of the file name becomes the alt text: `06-saturn-rings.jpg` → "Saturn rings".
- Any aspect ratio works; images are shown at a fixed height. ~1200 px on the long side is plenty.

Images are compressed at build time by `vite-plugin-image-optimizer` and lazy-loaded in the browser.
