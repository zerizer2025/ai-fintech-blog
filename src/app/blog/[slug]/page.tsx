// src/app/articles/[slug]/page.tsx
import { notFound } from "next/navigation";

type Article = {
  title: string;
  description: string;
  slug: string;
  image?: string;
  publishedAt?: string;
};

// مثال بيانات تجريبية
const articles: Article[] = [
  {
    slug: "ai-in-banking",
    title: "How AI is Disrupting Traditional Banking",
    description: "AI is transforming the banking industry by automating processes, improving customer service, and reducing costs.",
  },
  {
    slug: "top-10-ai-tools",
    title: "Top 10 AI Tools for Fintech 2025",
    description: "Here’s a curated list of tools leading the AI revolution in financial services.",
  },
];

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound(); // عرض صفحة 404 إن لم يتم العثور على المقال
  }

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">{article.title}</h1>
      <p className="text-gray-700">{article.description}</p>
    </div>
  );
}
