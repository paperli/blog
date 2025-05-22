const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Posts live in the Jekyll `_posts` directory at the repo root. This file
// resides in `nextjs/lib`, so we need to go two directories up to reach the
// repository root and then `_posts`.
const postsDirectory = path.join(__dirname, '..', '..', '_posts');

function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith('.markdown'));
}

function getPostData(slug) {
  const fullPath = path.join(postsDirectory, slug);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return {
    slug: slug.replace(/\.markdown$/, ''),
    ...data,
    content,
  };
}

function getAllPosts() {
  return getPostSlugs().map(getPostData);
}

module.exports = { getAllPosts, getPostData };
