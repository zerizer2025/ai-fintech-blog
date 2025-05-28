import Link from 'next/link';
import ArticleCard from "./components/ArticleCard";

const articles = [
  {
    slug: 'top-10-ai-tools',
    title: 'Top 10 AI Tools for Fintech 2025',
    description: 'A curated list of the most promising AI tools revolutionizing finance.',
    image: '/images/ai-tools.jpg',
    publishedAt: '2025-05-15',
  },
  {
    slug: 'ai-in-banking',
    title: 'How AI is Disrupting Traditional Banking',
    description: 'Explore how artificial intelligence is changing the financial industry forever.',
    image: '/images/ai-banking.jpg',
    publishedAt: '2025-05-12',
  },
  {
    slug: 'getting-started-fintech',
    title: 'Getting Started with Fintech Apps',
    description: 'A beginner’s guide to building and using fintech-powered applications.',
    image: '/images/fintech-start.jpg',
    publishedAt: '2025-05-10',
  },
];


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
          <Feature title="AI Tools" desc="In-depth guides and reviews of top AI tools in finance." />
          <Feature title="Trends" desc="Stay updated with emerging fintech and AI trends." />
          <Feature title="Insights" desc="Expert opinions and strategic insights into fintech innovation." />
        </div>
      </section>

      {/* Blog Preview */}
      <section id="blog" className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Latest Articles</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard
                key={article.slug}
                title={article.title}
                description={article.description}
                slug={article.slug}
                image={article.image}
                publishedAt={article.publishedAt}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-indigo-600 mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

type ArticleCardProps = {
  title: string;
  description: string;
  slug: string;
};

