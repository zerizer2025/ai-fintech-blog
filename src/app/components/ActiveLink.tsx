// src/components/ActiveLink.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import clsx from 'clsx';

interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
}

const ActiveLink = ({
  href,
  children,
  className = '',
  activeClassName = 'text-indigo-600 font-semibold',
}: ActiveLinkProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(className, isActive && activeClassName)}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
