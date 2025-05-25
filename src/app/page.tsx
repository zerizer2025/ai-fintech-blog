// src/app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="font-sans">
      
      {/* Hero Section */}
      <section className="bg-indigo-50 py-20 text-center px-6">
        <h2 className="text-4xl font-bold text-indigo-700 mb-4">Explore the Future of Finance</h2>
        <p className="text-lg text-gray-600 mb-6">Discover the latest AI tools transforming the fintech industry.</p>
        <a href="#blog" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition">
          Start Reading
        </a>
      </section>

      {/* Features */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">AI Tools</h3>
            <p className="text-gray-600">In-depth guides and reviews of top AI tools in finance.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Trends</h3>
            <p className="text-gray-600">Stay updated with emerging fintech and AI trends.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Insights</h3>
            <p className="text-gray-600">Expert opinions and strategic insights into fintech innovation.</p>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section id="blog" className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Latest Articles</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <ArticleCard
              title="Top 10 AI Tools for Fintech 2025"
              description="A curated list of the most promising AI tools revolutionizing finance."
              href="#"
            />
            <ArticleCard
              title="How AI is Disrupting Traditional Banking"
              description="Explore how artificial intelligence is changing the financial industry forever."
              href="#"
            />
            <ArticleCard
              title="Getting Started with Fintech Apps"
              description="A beginner’s guide to building and using fintech-powered applications."
              href="#"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

// 👇 يمكننا إنشاء هذا المكون لزيادة تنظيم الصفحة

type ArticleCardProps = {
  title: string;
  description: string;
  href: string;
};

function ArticleCard({ title, description, href }: ArticleCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
      <h3 className="text-xl font-bold text-indigo-700">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <Link href={href} className="text-indigo-600 mt-4 inline-block hover:underline">
        Read More
      </Link>
    </div>
  );
}
