// src/app/components/HomeHeader.tsx

'use client';

import Link from 'next/link';
import Image from 'next/image';
import DarkModeToggle from './DarkModeToggle';

export default function HomeHeader() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center space-x-2">
        <Image src="/logo.png" alt="Logo" width={60} height={60} />
        <span className="text-xl font-bold">AI Fintech Blog</span>
      </div>
      <nav className="flex space-x-4">
        <Link href="/" className="hover:text-indigo-800">Home</Link>
        <Link href="/about" className="hover:text-indigo-800">About</Link>
        <Link href="/contact" className="hover:text-indigo-800">Contact</Link>
      </nav>
      <DarkModeToggle />
    </header>
  );
}
