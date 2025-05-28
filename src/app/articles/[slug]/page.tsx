// 📁 src/app/articles/[slug]/page.tsx

type Article = {
  slug: string;
  title: string;
  content: string;
  image: string;
  publishedAt: string;
};  
  const articles: Article[] = [
    {
    slug: 'top-10-ai-tools',
    title: 'Top 10 AI Tools for Fintech 2025',
    content: 'A curated list of the most promising AI tools revolutionizing finance.',
    image: '/images/ai-tools.jpg',
    publishedAt: '2025-05-15',
   },
   {
    slug: 'ai-in-banking',
    title: 'How AI is Disrupting Traditional Banking',
    content: 'Explore how artificial intelligence is changing the financial industry forever.',
    image: '/images/ai-banking.jpg',
    publishedAt: '2025-05-12',
   },
   {
    slug: 'getting-started-fintech',
    title: 'Getting Started with Fintech Apps',
    content: 'A beginner’s guide to building and using fintech-powered applications.',
    image: '/images/fintech-start.jpg',
    publishedAt: '2025-05-10',
   },

  ];
  
  export default function ArticlePage({ params }: { params: { slug: string } }) {
    const article = articles.find((a) => a.slug === params.slug);
  
    if (!article) {
      return <div className="p-10 text-center text-red-600">Article not found</div>;
    }
  
    return (
      <div className="max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6">{article.title}</h1>
        <p className="text-gray-800 dark:text-gray-300 leading-relaxed">{article.content}</p>
      </div>
    );
  }
  