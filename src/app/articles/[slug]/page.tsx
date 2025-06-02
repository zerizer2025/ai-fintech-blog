// 📁 src/app/articles/[slug]/page.tsx

import { connectToDatabase } from '@/lib/mongodb';
import Article from '@/models/article';
import { notFound } from 'next/navigation';

interface ArticleType {
  title: string;
  slug: string;
  content: string;
  createdAt?: string;
}

interface ArticlePageProps {
  params: { slug: string };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  await connectToDatabase();
  const article = await Article.findOne({ slug: params.slug }).lean<ArticleType>();

  if (!article) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{article.content}</p>
    </div>
  );
}
