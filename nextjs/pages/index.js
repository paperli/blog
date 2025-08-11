import Link from 'next/link';
import { getAllPosts } from '../lib/posts';

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}

function groupByTag(posts) {
  const tagMap = {};
  posts.forEach((post) => {
    (post.tags || []).forEach((tag) => {
      if (!tagMap[tag]) tagMap[tag] = [];
      tagMap[tag].push(post);
    });
  });
  return tagMap;
}

export default function Home({ posts }) {
  const tagMap = groupByTag(posts);
  const tags = Object.keys(tagMap).sort();
  return (
    <div className="grid">
      {tags.map((tag) => (
        <section key={tag} className="category">
          <h2>{tag}</h2>
          <ul>
            {tagMap[tag].map((post) => (
              <li key={post.slug}>
                <Link href={`/${post.slug}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
