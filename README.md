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

Because the environment doesn't allow installing packages, the `nextjs` project
uses a stub build script. Running the usual commands will simply create a
placeholder `.next` directory:

```
cd nextjs
npm run build
```

In a real setup, run `npm install` and replace the script entries in
`package.json` to use the actual `next` CLI.

## Deployment

After building, run `npm start` to serve the Next.js site.
Deploy the contents of `.next` using your preferred Node.js hosting platform.
