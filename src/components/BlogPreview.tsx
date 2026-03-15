'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { blogPosts } from '../data/blog';

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
          <div className="mt-8 md:mt-0 flex flex-wrap gap-4">
            <Link href="/blog" className="px-8 py-4 border border-[#2F281D]/10 rounded-full font-bold hover:bg-[#2F281D] hover:text-[#FDF8EC] transition-all flex items-center gap-2 text-[#2F281D]">
              View All Posts <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/services" className="px-8 py-4 rounded-full font-bold bg-[#2F281D]/5 hover:bg-[#2F281D]/10 text-[#2F281D] transition-all flex items-center gap-2">
              Explore Services
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <Link key={post.title} href="/blog" className="group">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="cursor-pointer"
              >
                <div className="aspect-[16/10] rounded-3xl overflow-hidden mb-6 relative">
                  <Image
                    src={post.image}
                    alt={`${post.title} - CodexStudio blog`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
