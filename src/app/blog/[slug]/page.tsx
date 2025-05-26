// 📁 src/app/articles/[slug]/page.tsx
import { notFound } from 'next/navigation';

interface Params {
  slug: string;
}

// بيانات تجريبية
const articles = [
  {
    slug: 'ai-in-banking',
    title: 'AI in Banking',
    content: 'This is a full article about AI revolutionizing banking.',
  },
  {
    slug: 'fintech-tools',
    title: 'Top Fintech Tools',
    content: 'Here is a list of AI-powered fintech tools.',
  },
];

export default function ArticlePage({ params }: { params: Params }) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) return notFound();

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-700 dark:text-gray-300">{article.content}</p>
    </div>
  );
}

