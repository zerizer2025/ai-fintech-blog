// src/app/components/HeaderSwitcher.tsx

'use client';

import { usePathname } from 'next/navigation';
import SharedHeader from './SharedHeader';
import HomeHeader from './HomeHeader';

export default function HeaderSwitcher() {
  const pathname = usePathname();

  return pathname === '/' ? <HomeHeader /> : <SharedHeader />;
}
