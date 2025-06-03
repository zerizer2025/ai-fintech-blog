'use client';

import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from './theme-provider';

interface ProvidersProps {
  children: React.ReactNode;
  attribute?: string;
  defaultTheme?: string;
  enableSystem?: boolean;
}

export function Providers({
  children,
  attribute = 'class',
  defaultTheme = 'system',
  enableSystem = true,
}: ProvidersProps) {
  return (
    <SessionProvider>
      <ThemeProvider
        attribute={attribute}
        defaultTheme={defaultTheme}
        enableSystem={enableSystem}
      >
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
}
