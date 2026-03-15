'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { CTA } from '../components/CTA';
import { getProjectImageUrl, portfolioProjects } from '../data/portfolio';

const categories = ['All', 'Web Design', 'Branding', 'Development'];

export const PortfolioPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState(
    categories.includes(categoryParam || '') ? categoryParam! : 'All'
  );

  useEffect(() => {
    const valid = categories.includes(categoryParam || '') ? categoryParam! : 'All';
    setActiveCategory(valid);
  }, [categoryParam]);

  const setCategory = (cat: string) => {
    setActiveCategory(cat);
    const params = new URLSearchParams(searchParams.toString());
    if (cat === 'All') params.delete('category');
    else params.set('category', cat);
    const q = params.toString();
    router.push(q ? `/portfolio?${q}` : '/portfolio', { scroll: false });
  };

  const filteredProjects = activeCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#FDF8EC]"
    >
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#997F6C] font-bold tracking-widest uppercase text-sm block"
          >
            Our Work
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-9xl font-display font-bold text-[#2F281D]"
          >
            Selected <span className="text-[#2F281D]/40 italic">Projects</span>
          </motion.h1>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-8 py-3 rounded-full font-bold transition-all ${
                activeCategory === cat 
                  ? 'bg-[#2F281D] text-[#FDF8EC]' 
                  : 'bg-[#2F281D]/5 text-[#2F281D] hover:bg-[#2F281D]/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Project Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.article
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="group relative aspect-[16/10] rounded-[3rem] overflow-hidden"
                >
                  <img
                    src={getProjectImageUrl(project.image)}
                    alt={`${project.title} - ${project.category} project by CodexStudio`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2F281D] via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
                  <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-[#997F6C] font-bold uppercase tracking-widest text-sm mb-2">{project.category}</span>
                    <p className="text-[#FDF8EC]/80 text-sm mb-3 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technology.map((tech) => (
                        <span key={tech} className="text-xs px-2 py-1 rounded-full bg-[#FDF8EC]/20 text-[#FDF8EC]">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-[#FDF8EC]">{project.title}</h3>
                      {project.projectUrl ? (
                        <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-[#FDF8EC] text-[#2F281D] text-sm font-bold flex items-center gap-2 hover:bg-[#FDF8EC]/90 transition-colors">
                          View Project <ArrowUpRight className="w-4 h-4" />
                        </a>
                      ) : (
                        <span className="px-4 py-2 rounded-full bg-[#FDF8EC]/60 text-[#2F281D]/80 text-sm font-bold cursor-default" aria-hidden>
                          In Portfolio
                        </span>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTA />
    </motion.div>
  );
};
