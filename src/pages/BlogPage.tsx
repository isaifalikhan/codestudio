import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { CTA } from '../components/CTA';

const posts = [
  {
    title: 'The Future of Web Design in 2026',
    excerpt: 'Exploring the latest trends in immersive digital experiences and AI-driven design.',
    category: 'Design',
    author: 'Alex Rivera',
    date: 'Mar 12, 2026',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200',
    featured: true
  },
  {
    title: 'Maximizing ROI with Digital Marketing',
    excerpt: 'How to leverage data-driven strategies to grow your business effectively.',
    category: 'Marketing',
    author: 'Elena Vance',
    date: 'Mar 10, 2026',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Why Next.js is the King of Frameworks',
    excerpt: 'A deep dive into why Next.js is the preferred choice for modern web development.',
    category: 'Development',
    author: 'Sarah Chen',
    date: 'Mar 08, 2026',
    image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'The Power of Minimalist Branding',
    excerpt: 'Why less is more when it comes to building a memorable brand identity.',
    category: 'Branding',
    author: 'Marcus Thorne',
    date: 'Mar 05, 2026',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
  }
];

export const BlogPage = () => {
  const featuredPost = posts.find(p => p.featured);
  const regularPosts = posts.filter(p => !p.featured);

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
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
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
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {regularPosts.map((post, i) => (
            <motion.div
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
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
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
            </motion.div>
          ))}
        </div>
      </section>

      <CTA />
    </motion.div>
  );
};
