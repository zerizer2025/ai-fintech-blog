import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { ThemeProvider } from './theme-provider'
import DarkModeToggle from './components/DarkModeToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AI Fintech Blog',
  description: 'Explore AI-powered tools and insights in the fintech world.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Header with Logo and Toggle */}
          <header className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="AI Fintech Blog Logo" width={40} height={40} />
              <span className="text-xl font-bold">AI Fintech Blog</span>
            </Link>
            <DarkModeToggle />
          </header>

          <main className="min-h-screen px-4 py-6">{children}</main>

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
          {/* Footer */}
<footer className="bg-indigo-600 text-white py-8">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
    <p className="mb-4 md:mb-0 text-white text-sm">
      &copy; 2025 <span className="font-semibold">AI Fintech Blog</span>. All rights reserved.
    </p>
    <div className="flex flex-wrap justify-center items-center space-x-4 text-sm">
      <Link href="https://github.com/zerizer2025/ai-fintech-blog" target="_blank" className="hover:underline text-white">
        GitHub
      </Link>
      <Link href="https://twitter.com/zerizer2025" target="_blank" className="hover:underline text-white">
        Twitter
      </Link>
      <Link href="/privacy" className="hover:underline text-white">
        Privacy
      </Link>
      <Link href="/terms" className="hover:underline text-white">
        Terms
      </Link>
    </div>
  </div>
</footer>
        </ThemeProvider>
      </body>
    </html>
  )
}

