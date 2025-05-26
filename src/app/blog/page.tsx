import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Latest Articles</h1>
      <ul className="space-y-4">
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="text-indigo-600 hover:underline text-xl">
              {post.meta.title}
            </Link>
            <p className="text-sm text-gray-600">{post.meta.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
