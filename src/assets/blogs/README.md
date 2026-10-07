# Blog images

Each blog post keeps its images in its own folder here, named after the post slug
(e.g. `types-of-telescopes/`). Posts themselves live in `src/data/blogs.ts`.

To add a post:

1. Create `src/assets/blogs/<slug>/` with a `banner` image (wide, ~16:7) and any inline images.
2. Import the images at the top of `src/data/blogs.ts` and add a `BlogPost` to `blogPosts` (newest first).
3. Build the body from content blocks: `heading`, `paragraph`, `list`, `image`, `table`, `callout`.
   Text supports `**bold**` and `*italic*`. Reading time is worked out automatically.

The post appears on `/blogs` and at `/blogs/<slug>`.
