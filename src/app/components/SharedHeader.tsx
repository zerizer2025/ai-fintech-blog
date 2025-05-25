// src/app/components/SharedHeader.tsx

'use client';

import Link from 'next/link';
import Image from 'next/image';
import DarkModeToggle from './DarkModeToggle';

export default function SharedHeader() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <Link href="/" className="flex items-center space-x-2">
        <Image src="/logo.png" alt="AI Fintech Blog Logo" width={40} height={40} />
        <span className="text-xl font-bold">AI Fintech Blog</span>
      </Link>
      <DarkModeToggle />
    </header>
  );
}
