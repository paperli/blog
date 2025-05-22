const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDirectory = path.join(__dirname, '..', '_posts');

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
