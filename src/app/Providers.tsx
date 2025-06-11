// src/app/providers.tsx
'use client';

import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from './theme-provider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
}

