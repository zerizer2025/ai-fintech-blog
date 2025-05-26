// 📁 src/components/ArticleCard.tsx
import Link from 'next/link';

interface ArticleCardProps {
  title: string;
  description: string;
  slug: string;
}

export default function ArticleCard({ title, description, slug }: ArticleCardProps) {
  return (
    <div className="border rounded p-4 shadow-sm bg-white dark:bg-gray-800">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <Link href={`/articles/${slug}`} className="text-indigo-600 hover:underline">
        Read More
      </Link>
    </div>
  );
}
