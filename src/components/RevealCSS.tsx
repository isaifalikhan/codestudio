'use client';

import React, { useRef, useState, useEffect } from 'react';

interface RevealCSSProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  y?: number;
}

/**
 * CSS-only reveal on scroll. No motion library — reduces main-thread JS.
 */
export const RevealCSS = ({ children, width = 'fit-content', delay = 0.2, y = 40 }: RevealCSSProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { rootMargin: '0px 0px -80px 0px', threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        width,
        overflow: 'hidden',
        ...(!visible && { ['--reveal-y' as string]: `${y}px`, ['--reveal-delay' as string]: `${delay}s` }),
      }}
      className={visible ? 'reveal-visible' : 'reveal-hidden'}
    >
      <div className="reveal-inner">{children}</div>
    </div>
  );
};
