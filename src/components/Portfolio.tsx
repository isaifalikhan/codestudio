'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { ThreeDProjectCard } from './ThreeDProjectCard';
import { featuredPortfolioProjects } from '../data/portfolio';

export const Portfolio = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

  return (
    <section ref={containerRef} className="py-32 px-6 bg-[#F6F4EC] overflow-hidden">
      <motion.div 
        style={{ scale: springScale }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#2F7A6D] font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Selected Works
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-display font-bold tracking-tight text-[#14171F] leading-none"
            >
              Featured <span className="text-[#14171F]/40 italic">Branding</span> & <span className="text-[#D98A2C]">Websites</span>
            </motion.h2>
          </div>
          <Link href="/portfolio">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 md:mt-0 inline-flex px-10 py-5 bg-[#14171F] text-[#F6F4EC] rounded-full font-bold hover:bg-[#D98A2C] transition-all items-center gap-3"
            >
              View All Projects <ArrowUpRight className="w-5 h-5" />
            </motion.span>
          </Link>
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
