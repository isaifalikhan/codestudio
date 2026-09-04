'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { BracketLink } from './BracketLink';

const LINE_COUNT = 7;

export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const glowY = useTransform(scrollY, [0, 500], [0, 80]);
  const scrollHintOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-paper"
    >
      {/* Faint blueprint grid, faded toward the edges */}
      <div
        className="absolute inset-0 bg-grid-paper"
        style={{
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 60% 55% at 50% 25%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 55% at 50% 25%, black, transparent)',
        }}
        aria-hidden
      />
      <motion.div
        style={{ y: glowY }}
        className="absolute top-24 left-1/2 -translate-x-1/2 w-[560px] h-[560px] bg-gold/10 rounded-full blur-[140px]"
        aria-hidden
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center gap-2.5 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pine/60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-pine" />
          </span>
          <span className="tag-chip text-ink/60">
            <span className="text-mist">//</span> available for new projects
          </span>
        </motion.div>

        {/* Signature: the page as an open editor window */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-xl border border-ink/10 bg-paper/70 backdrop-blur-sm shadow-[0_40px_90px_-45px_rgba(20,23,31,0.45)] overflow-hidden"
        >
          <div className="flex items-center gap-4 px-5 py-3 border-b border-ink/10 bg-ink/[0.03]">
            <div className="flex items-center gap-1.5" aria-hidden>
              <span className="w-2.5 h-2.5 rounded-full bg-ink/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-gold/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-pine/70" />
            </div>
            <span className="font-mono text-xs text-ink/40">home.tsx</span>
          </div>

          <div className="grid grid-cols-[auto_1fr] gap-x-4 sm:gap-x-7 px-5 sm:px-10 py-10 sm:py-16 text-left">
            <div
              className="hidden sm:flex flex-col items-end gap-1 pt-2 font-mono text-xs text-ink/15 select-none"
              aria-hidden
            >
              {Array.from({ length: LINE_COUNT }).map((_, i) => (
                <span key={i}>{i + 1}</span>
              ))}
            </div>

            <div>
              <p className="font-mono text-xs sm:text-sm text-mist mb-3">// web development agency</p>
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl sm:text-5xl md:text-6xl font-display font-bold leading-[1.1] tracking-tight text-ink"
              >
                Web Development Agency in <span className="text-gold">Islamabad, Pakistan</span>
                <span className="caret-blink text-gold" aria-hidden>
                  &nbsp;
                </span>
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6 max-w-2xl text-lg sm:text-xl text-ink/70 leading-relaxed font-medium"
              >
                We build modern websites, web apps &amp; digital products that grow revenue — for
                startups and businesses across Pakistan and worldwide.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-5 font-mono text-xs sm:text-sm text-mist max-w-xl leading-relaxed"
              >
                /* CodexStudio helps startups and businesses build modern websites, web apps, and
                digital experiences that grow revenue. */
              </motion.p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <BracketLink
            href="/contact#main-content"
            variant="solid"
            className="w-full sm:w-auto px-8 py-4 text-base"
          >
            Get a free quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </BracketLink>
          <BracketLink href="/portfolio" variant="outline" className="w-full sm:w-auto px-8 py-4 text-base">
            View our work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </BracketLink>
        </motion.div>
      </div>

      <motion.div
        style={{ opacity: scrollHintOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/30">scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
};
