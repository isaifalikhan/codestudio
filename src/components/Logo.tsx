import React from 'react';
import { cn } from '../utils/cn';

export const Logo = ({ dark, className }: { dark?: boolean; className?: string }) => (
  <span
    className={cn(
      'font-mono font-bold text-lg sm:text-xl tracking-tight',
      dark ? 'text-paper' : 'text-ink',
      className
    )}
  >
    <span className={dark ? 'text-paper/30' : 'text-ink/25'}>&lt;</span>
    Codex<span className="text-gold">Studio</span>
    <span className={dark ? 'text-paper/30' : 'text-ink/25'}>/&gt;</span>
  </span>
);
