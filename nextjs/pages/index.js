import Link from 'next/link';
import { getAllPosts } from '../lib/posts';

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
