// src/app/layout.tsx

import './globals.css';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { ThemeProvider } from './theme-provider';
import HeaderSwitcher from './components/HeaderSwitcher';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AI Fintech Blog',
  description: 'Explore AI-powered tools and insights in the fintech world.',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* ✅ هيدر يتغير تلقائياً */}
          <HeaderSwitcher />

          <main className="min-h-screen px-4 py-6">{children}</main>

          <footer className="bg-indigo-600 text-white py-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
              <p className="mb-4 md:mb-0 text-white text-sm">
                &copy; 2025 <span className="font-semibold">AI Fintech Blog</span>. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center items-center space-x-4 text-sm">
                <a href="https://github.com/zerizer2025/ai-fintech-blog" target="_blank" className="hover:underline text-white">
                  GitHub
                </a>
                <a href="https://twitter.com/zerizer2025" target="_blank" className="hover:underline text-white">
                  Twitter
                </a>
                <a href="/privacy" className="hover:underline text-white">
                  Privacy
                </a>
                <a href="/terms" className="hover:underline text-white">
                  Terms
                </a>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
