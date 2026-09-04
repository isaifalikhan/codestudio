import React from 'react';
import { cn } from '../utils/cn';

/**
 * Section eyebrow styled like a JSX tag, e.g. <Services/>. The sections it
 * labels genuinely are components in this codebase, so the tag is a real
 * reference rather than decoration.
 */
export const TagChip = ({ name, className }: { name: string; className?: string }) => (
  <span className={cn('tag-chip inline-flex items-center text-gold', className)}>
    <span className="text-mist">&lt;</span>
    {name}
    <span className="text-mist">/&gt;</span>
  </span>
);
