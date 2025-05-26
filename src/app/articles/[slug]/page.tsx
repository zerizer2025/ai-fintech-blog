// 📁 src/app/articles/[slug]/page.tsx

interface Article {
    slug: string;
    title: string;
    content: string;
  }
  
  const articles: Article[] = [
    {
      slug: 'top-10-ai-tools',
      title: 'Top 10 AI Tools for Fintech 2025',
      content: 'Here is a detailed look at the top AI tools transforming fintech in 2025...',
    },
    {
      slug: 'ai-in-banking',
      title: 'How AI is Disrupting Traditional Banking',
      content: 'AI is revolutionizing banking through automation, fraud detection, and personalized experiences...',
    },
    {
      slug: 'getting-started-fintech',
      title: 'Getting Started with Fintech Apps',
      content: 'Fintech apps are apps that use modern technology to offer financial services...',
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
  