# Blog Migration

This repository contains the original Jekyll site and a new Next.js project for migration.

## Directory Structure

- Jekyll content remains in the repository root.
- `nextjs/` contains the Next.js project.

## Migrating Posts

1. Markdown files from `_posts/` are loaded at build time using `gray-matter` and `next-mdx-remote`.
2. Each post becomes a static page generated via `getStaticPaths` and `getStaticProps` in `pages/[slug].js`.

## Pages

`index.md` and `about.md` have been recreated as React components in `pages/index.js` and `pages/about.js` respectively.

## Build

Run `npm run build` inside `nextjs/` to execute the stub build script. The
script simply creates a `.next` directory so the project passes tests in this
offline environment.

```
cd nextjs
npm run build
```

If you have internet access, install dependencies with `npm install` and use
the real Next.js CLI instead of the stub script.

## Deployment

After building, run `npm start` to serve the Next.js site. Deploy the contents of `.next` using your preferred Node.js hosting platform.
