'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '../utils/cn';

type Variant = 'solid' | 'invert' | 'outline' | 'ghost-dark';

const variants: Record<Variant, string> = {
  solid: 'bg-ink text-paper hover:bg-gold',
  invert: 'bg-paper text-ink hover:bg-gold',
  outline: 'border border-ink/15 text-ink hover:border-gold hover:text-gold',
  'ghost-dark': 'border border-paper/20 text-paper hover:bg-paper/10',
};

interface BracketLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
}

/**
 * Primary CTA style for the site: brackets slide in on hover, a nod to the
 * code-editor identity. Used instead of the generic rounded-pill button so
 * every "real" call to action shares one signature.
 */
export const BracketLink = ({ href, children, variant = 'solid', className, onClick }: BracketLinkProps) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'group relative inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-bold transition-colors duration-200',
        variants[variant],
        className
      )}
    >
      <span
        aria-hidden
        className="font-mono opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-60 group-hover:translate-x-0"
      >
        [
      </span>
      <span className="inline-flex items-center gap-2">{children}</span>
      <span
        aria-hidden
        className="font-mono opacity-0 translate-x-1 transition-all duration-200 group-hover:opacity-60 group-hover:translate-x-0"
      >
        ]
      </span>
    </Link>
  );
};
