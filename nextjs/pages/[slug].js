import Link from 'next/link';
import { getAllPosts, getPostData } from '../lib/posts';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

export async function getStaticPaths() {
  const posts = getAllPosts();
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const post = getPostData(`${slug}.markdown`);
  const mdxSource = await serialize(post.content);
  return { props: { post, mdxSource } };
}

export default function PostPage({ post, mdxSource }) {
  return (
    <article>
      <h1>{post.title}</h1>
      {post.tags && (
        <p>
          {post.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </p>
      )}
      <MDXRemote {...mdxSource} />
      <p>
        <Link href="/">← Back to home</Link>
      </p>
    </article>
  );
}
