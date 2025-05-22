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

Run `npm install` inside `nextjs/` to install dependencies and then `npm run build` to generate the production build.

```
cd nextjs
npm install
npm run build
```

## Deployment

After building, run `npm start` to serve the Next.js site. Deploy the contents of `.next` using your preferred Node.js hosting platform.
