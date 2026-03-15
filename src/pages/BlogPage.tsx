import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { CTA } from '../components/CTA';
import { blogPosts } from '../data/blog';

export const BlogPage = () => {
  const featuredPost = blogPosts.find((p) => p.featured);
  const regularPosts = blogPosts.filter((p) => !p.featured);

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
            Our Journal
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-9xl font-display font-bold text-[#2F281D]"
          >
            Latest <span className="text-[#2F281D]/40 italic">Insights</span>
          </motion.h1>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative rounded-[4rem] overflow-hidden bg-[#2F281D] flex flex-col lg:flex-row"
            >
              <div className="flex-1 aspect-[16/10] lg:aspect-auto overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={`${featuredPost.title} - CodexStudio blog featured`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 p-8 md:p-16 flex flex-col justify-center space-y-8">
                <div className="flex items-center gap-6 text-[#FDF8EC]/60 text-sm font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-2"><Tag className="w-4 h-4" /> {featuredPost.category}</span>
                  <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {featuredPost.date}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-[#FDF8EC] group-hover:text-[#997F6C] transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-xl text-[#FDF8EC]/60 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-[#FDF8EC]">
                  <User className="w-5 h-5 text-[#997F6C]" />
                  <span className="font-bold">{featuredPost.author}</span>
                </div>
                <button className="inline-flex items-center gap-3 text-[#FDF8EC] font-bold group/btn">
                  Read Full Article 
                  <div className="w-12 h-12 rounded-full border border-[#FDF8EC]/20 flex items-center justify-center group-hover/btn:bg-[#FDF8EC] group-hover/btn:text-[#2F281D] transition-all">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Regular Posts Grid */}
      <section className="pb-32 px-6" aria-label="Blog posts">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {regularPosts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] rounded-3xl overflow-hidden mb-8">
                <img
                  src={post.image}
                  alt={`${post.title} - CodexStudio blog`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-[#997F6C]">
                  <span>{post.category}</span>
                  <span className="w-1 h-1 rounded-full bg-[#2F281D]/20" />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-[#2F281D] group-hover:text-[#997F6C] transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-[#2F281D]/60 line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <CTA />
    </motion.div>
  );
};
