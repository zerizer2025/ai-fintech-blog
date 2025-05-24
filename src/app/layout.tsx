import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

// استيراد خط Inter من Google Fonts
const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'AI Fintech Blog',
  description: 'Discover AI tools and trends shaping the future of fintech.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

