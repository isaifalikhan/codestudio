'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { ThreeDProjectCard } from './ThreeDProjectCard';
import { featuredPortfolioProjects } from '../data/portfolio';
import { TagChip } from './TagChip';
import { BracketLink } from './BracketLink';

export const Portfolio = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

  return (
    <section ref={containerRef} className="py-32 px-6 bg-paper overflow-hidden">
      <motion.div
        style={{ scale: springScale }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mb-4"
            >
              <TagChip name="SelectedWorks" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-display font-bold tracking-tight text-ink leading-none"
            >
              Featured <span className="text-ink/40 italic">branding</span> & <span className="text-gold">websites</span>
            </motion.h2>
          </div>
          <BracketLink href="/portfolio" variant="solid" className="px-10 py-5">
            View all projects <ArrowUpRight className="w-5 h-5" />
          </BracketLink>
        </div>

        <div className="space-y-12">
          {featuredPortfolioProjects.map((project, index) => (
            <ThreeDProjectCard key={`${project.title}-${index}`} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
