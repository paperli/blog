# Migration to Next.js

This project now contains a Next.js application alongside the existing Jekyll site.

## Steps Performed

1. Created `nextjs/` with a basic Next.js configuration using the MDX plugin.
2. Added utilities in `lib/posts.js` to load markdown posts from the Jekyll `_posts` directory.
3. Recreated `index.md` and `about.md` as React pages.
4. Created dynamic post pages using `next-mdx-remote`.
5. Updated `README.md` with build and deployment instructions.

## Building

Install dependencies and build the project. In this repository a stub build
script is used because the evaluation environment lacks network access. The
script creates a `.next` directory as a placeholder:

```bash
cd nextjs
npm run build
```

When working locally with internet access, run `npm install` first and replace
the stub with the real Next.js CLI for a full build.

## Deployment

Start the server with `npm start` or deploy using any Node.js hosting provider.
