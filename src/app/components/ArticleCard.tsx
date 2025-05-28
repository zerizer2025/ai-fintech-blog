// 📁 src/app/components/ArticleCard.tsx
import Link from "next/link";
import Image from "next/image";
import { CalendarDays } from "lucide-react";

interface ArticleCardProps {
  title: string;
  description: string;
  slug: string;
  image?: string;
  publishedAt?: string;
}

export default function ArticleCard({
  title,
  description,
  slug,
  image,
  publishedAt,
}: ArticleCardProps) {
  return (
    <div className="group rounded-2xl border bg-white dark:bg-gray-900 p-4 shadow transition hover:shadow-lg">
      {image && (
        <div className="relative mb-3 h-40 w-full overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <div className="mb-2 text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
        <CalendarDays size={16} />
        <span>{publishedAt ? new Date(publishedAt).toLocaleDateString() : "Unknown date"}</span>
      </div>

      <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h2>

      <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
        {description}
      </p>

      <Link
        href={`/articles/${slug}`}
        className="mt-3 inline-block text-indigo-600 hover:underline font-medium"
      >
        Read More →
      </Link>
    </div>
  );
}
