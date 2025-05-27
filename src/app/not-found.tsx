// 📁 src/app/not-found.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-white dark:bg-gray-900">
      <Ghost className="w-16 h-16 text-indigo-600 mb-4" />
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">404 - Page Not Found</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <Link href="/">
        <Button className="px-6 py-2 rounded-xl text-white bg-indigo-600 hover:bg-indigo-700">
          Go back home
        </Button>
      </Link>
    </div>
  );
}
