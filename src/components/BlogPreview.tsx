'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { blogPosts } from '../data/blog';
import { TagChip } from './TagChip';
import { BracketLink } from './BracketLink';

export const BlogPreview = () => {
  return (
    <section className="py-24 px-6 bg-paper">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mb-4"
            >
              <TagChip name="Journal" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-display font-bold text-ink"
            >
              Latest <span className="text-ink/40 italic">insights</span>
            </motion.h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <BracketLink href="/blog" variant="outline">
              View all posts <ArrowRight className="w-5 h-5" />
            </BracketLink>
            <BracketLink href="/services" variant="outline">
              Explore services
            </BracketLink>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <Link key={post.title} href={`/blog/${post.slug}`} className="group">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="cursor-pointer"
              >
                <div className="aspect-[16/10] rounded-xl overflow-hidden mb-6 relative border border-ink/10">
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
                  <div className="flex items-center gap-3 font-mono text-xs font-bold text-gold">
                    <span>{post.category}</span>
                    <span className="w-1 h-1 rounded-full bg-ink/20" />
                    <span className="text-mist">{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-ink group-hover:text-gold transition-colors">
                    {post.title}
                  </h3>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
        <p className="mt-10 text-center text-ink/70">
          Read more insights on our <Link href="/blog" className="text-gold font-semibold hover:underline">blog →</Link>
        </p>
      </div>
    </section>
  );
};
