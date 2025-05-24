import Link from 'next/link';

export default function Home() {
  return (
    <main className="font-sans">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">AI Fintech Blog</h1>
          <nav className="space-x-6 text-gray-700">
            <Link href="/" className="hover:text-indigo-600">Home</Link>
            <Link href="/about" className="hover:text-indigo-600">About</Link>
            <Link href="/contact" className="hover:text-indigo-600">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-indigo-50 py-20 text-center px-6">
        <h2 className="text-4xl font-bold text-indigo-700 mb-4">Explore the Future of Finance</h2>
        <p className="text-lg text-gray-600 mb-6">Discover the latest AI tools transforming the fintech industry.</p>
        <a href="#blog" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition">Start Reading</a>
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
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-indigo-700">Top 10 AI Tools for Fintech 2025</h3>
              <p className="text-gray-600 mt-2">A curated list of the most promising AI tools revolutionizing finance.</p>
              <Link href="#" className="text-indigo-600 mt-4 inline-block hover:underline">Read More</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-indigo-700">How AI is Disrupting Traditional Banking</h3>
              <p className="text-gray-600 mt-2">Explore how artificial intelligence is changing the financial industry forever.</p>
              <Link href="#" className="text-indigo-600 mt-4 inline-block hover:underline">Read More</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-indigo-700">Getting Started with Fintech Apps</h3>
              <p className="text-gray-600 mt-2">A beginner’s guide to building and using fintech-powered applications.</p>
              <Link href="#" className="text-indigo-600 mt-4 inline-block hover:underline">Read More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-600 text-white py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <p className="mb-4 md:mb-0">&copy; 2025 AI Fintech Blog. All rights reserved.</p>
          <div className="space-x-6">
            <Link href="https://github.com/zerizer2025/ai-fintech-blog" target="_blank" className="hover:underline">GitHub</Link>
            <Link href="https://twitter.com/zerizer2025" target="_blank" className="hover:underline">Twitter</Link>
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <Link href="/terms" className="hover:underline">Terms</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

