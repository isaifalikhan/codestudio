import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { ThreeDProjectCard } from './ThreeDProjectCard';

const projects = [
  {
    title: 'Sokon Branding Identity',
    category: 'Branding / Strategy',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Khubza House Digital',
    category: 'Website / E-commerce',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Milkor Corporate Identity',
    category: 'Branding / Print',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e12?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Sanbun Web Experience',
    category: 'Website / UI/UX',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200',
  },
];

export const Portfolio = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

  return (
    <section ref={containerRef} className="py-32 px-6 bg-[#FDF8EC] overflow-hidden">
      <motion.div 
        style={{ scale: springScale }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#5F634D] font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Selected Works
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-display font-bold tracking-tight text-[#2F281D] leading-none"
            >
              Featured <span className="text-[#2F281D]/40 italic">Branding</span> & <span className="text-[#997F6C]">Websites</span>
            </motion.h2>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 md:mt-0 px-10 py-5 bg-[#2F281D] text-[#FDF8EC] rounded-full font-bold hover:bg-[#997F6C] transition-all flex items-center gap-3"
          >
            View All Projects <ArrowUpRight className="w-5 h-5" />
          </motion.button>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <ThreeDProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
