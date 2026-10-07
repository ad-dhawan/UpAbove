# Session images

Drop one image per session here, named after the session slug:

| Session             | File name                                    |
| ------------------- | -------------------------------------------- |
| Little Stargazers   | `little-stargazers.(jpg\|jpeg\|png\|webp\|avif\|svg)`   |
| Sky Explorers       | `sky-explorers.(jpg\|jpeg\|png\|webp\|avif\|svg)`       |
| Junior Astronomers  | `junior-astronomers.(jpg\|jpeg\|png\|webp\|avif\|svg)`  |
| Cosmos Curious      | `cosmos-curious.(jpg\|jpeg\|png\|webp\|avif\|svg)`      |

They are picked up automatically (see `src/utils/sessionImages.ts`) and shown at a
4:3 ratio, so ~1200×900 px is plenty. Images are compressed at build time by
`vite-plugin-image-optimizer` and lazy-loaded in the browser. Until a file exists,
a placeholder is shown.

The current `.svg` files are illustrations of each session's syllabus. To use a
real photo instead, delete the `.svg` and drop a photo with the same name.
