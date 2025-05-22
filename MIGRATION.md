# Migration to Next.js

This project now contains a Next.js application alongside the existing Jekyll site.

## Steps Performed

1. Created `nextjs/` with a basic Next.js configuration using the MDX plugin.
2. Added utilities in `lib/posts.js` to load markdown posts from the Jekyll `_posts` directory.
3. Recreated `index.md` and `about.md` as React pages.
4. Created dynamic post pages using `next-mdx-remote`.
5. Updated `README.md` with build and deployment instructions.

## Building

Install dependencies and build the project:

```bash
cd nextjs
npm install
npm run build
```

## Deployment

Start the server with `npm start` or deploy using any Node.js hosting provider.
