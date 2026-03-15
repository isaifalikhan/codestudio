import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    title: 'The Future of Web Design in 2026',
    category: 'Design',
    date: 'Mar 12, 2026',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Maximizing ROI with Digital Marketing',
    category: 'Marketing',
    date: 'Mar 10, 2026',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Why Next.js is the King of Frameworks',
    category: 'Development',
    date: 'Mar 08, 2026',
    image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?auto=format&fit=crop&q=80&w=800',
  },
];

export const BlogPreview = () => {
  return (
    <section className="py-24 px-6 bg-[#FDF8EC]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#997F6C] font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Our Journal
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-display font-bold text-[#2F281D]"
            >
              Latest <span className="text-[#2F281D]/40 italic">Insights</span>
            </motion.h2>
          </div>
          <Link 
            to="/blog"
            className="mt-8 md:mt-0 px-8 py-4 border border-[#2F281D]/10 rounded-full font-bold hover:bg-[#2F281D] hover:text-[#FDF8EC] transition-all flex items-center gap-2 text-[#2F281D]"
          >
            View All Posts <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] rounded-3xl overflow-hidden mb-6">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-[#997F6C]">
                  <span>{post.category}</span>
                  <span className="w-1 h-1 rounded-full bg-[#2F281D]/20" />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-[#2F281D] group-hover:text-[#997F6C] transition-colors">
                  {post.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
