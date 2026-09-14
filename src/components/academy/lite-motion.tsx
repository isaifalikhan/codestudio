'use client';

import React, { useEffect, useRef, useState } from 'react';

/**
 * A tiny stand-in for the handful of `motion/react` features the academy pages
 * use: fade/rise on mount (`initial` + `animate`) and fade/rise on scroll
 * (`initial` + `whileInView`).
 *
 * Why: the animation library pulled roughly 110 kB of JavaScript into every
 * academy route for four effects CSS does natively. These are conversion
 * landing pages competing on Core Web Vitals, so the trade is not worth it.
 * Call sites keep the same props — swapping the import is the only change.
 *
 * Both paths degrade to visible content if JavaScript never runs, which the
 * animation library does not do:
 *
 *  - Mount reveals are a pure CSS animation with `fill-mode: both`. No JS is
 *    involved at all, so the element always ends up visible.
 *  - Scroll reveals are visible by default. The hidden state only applies
 *    under `.js-reveal`, a class this module adds to <html> once it is
 *    running. If hydration fails, nothing is ever hidden.
 *
 * Deliberately unsupported: keyframes, variants, layout animation, gestures,
 * exit animation. Use the real library if a page needs those.
 */

type Vec = { opacity?: number; y?: number; x?: number; scale?: number };

type MotionProps = {
  initial?: Vec;
  animate?: Vec;
  whileInView?: Vec;
  viewport?: { once?: boolean; margin?: string };
  transition?: { duration?: number; delay?: number };
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: unknown;
};

type Tag =
  | 'div'
  | 'span'
  | 'p'
  | 'h1'
  | 'h2'
  | 'section'
  | 'article'
  | 'li'
  | 'ol'
  | 'ul'
  | 'figure';

/** Marks the document as JS-capable so the hidden scroll state can apply. */
function useJsRevealFlag() {
  useEffect(() => {
    document.documentElement.classList.add('js-reveal');
  }, []);
}

function useInView(margin?: string) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: margin ?? '0px 0px -60px 0px', threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [margin]);

  return { ref, visible };
}

/** Custom properties the CSS in globals.css reads. */
function revealVars(from: Vec, duration: number, delay: number): React.CSSProperties {
  return {
    ['--lite-from-opacity' as string]: String(from.opacity ?? 0),
    ['--lite-from-y' as string]: `${from.y ?? 0}px`,
    ['--lite-from-scale' as string]: String(from.scale ?? 1),
    ['--lite-duration' as string]: `${duration}s`,
    ['--lite-delay' as string]: `${delay}s`,
  };
}

function createComponent(Tag: Tag) {
  const Component = ({
    initial,
    animate,
    whileInView,
    viewport,
    transition,
    className,
    style,
    children,
    ...rest
  }: MotionProps) => {
    useJsRevealFlag();
    const onMount = Boolean(animate);
    const { ref, visible } = useInView(viewport?.margin);

    const from = initial ?? {};
    const duration = transition?.duration ?? 0.5;
    const delay = transition?.delay ?? 0;

    const classes = [
      onMount ? 'lite-rise' : whileInView ? 'lite-inview' : '',
      !onMount && whileInView && visible ? 'is-visible' : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return React.createElement(
      Tag,
      {
        // Only scroll reveals need the observer handle.
        ref: onMount ? undefined : (ref as React.Ref<never>),
        className: classes,
        style: { ...revealVars(from, duration, delay), ...style },
        ...rest,
      },
      children
    );
  };

  Component.displayName = `lite.${Tag}`;
  return Component;
}

export const motion = {
  div: createComponent('div'),
  span: createComponent('span'),
  p: createComponent('p'),
  h1: createComponent('h1'),
  h2: createComponent('h2'),
  section: createComponent('section'),
  article: createComponent('article'),
  li: createComponent('li'),
  ol: createComponent('ol'),
  ul: createComponent('ul'),
  figure: createComponent('figure'),
};
