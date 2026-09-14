'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { CTA } from '../components/CTA';
import { blogPosts } from '../data/blog';
import {
  BLOG_CATEGORIES,
  blogHref,
  featuredPost,
  getCategory,
  pagePostsFor,
  totalPagesFor,
} from '@/lib/blog-routes';

type BlogPageProps = {
  page?: number;
  /** Category slug, or 'all' for the unfiltered listing. */
  category?: string;
};

export const BlogPage = ({ page = 1, category = 'all' }: BlogPageProps) => {
  const activeCategory = getCategory(category)?.slug ?? 'all';
  const activeLabel = getCategory(category)?.label ?? 'all';

  const totalPages = totalPagesFor(activeCategory);
  const pageNum = Math.min(Math.max(1, page), totalPages);

  // Featured post sits above the grid on the first unfiltered page only, and is
  // kept out of the grid pool on every page so paging stays consistent.
  const featured = featuredPost();
  const featuredPostToShow = activeCategory === 'all' && pageNum === 1 ? featured : undefined;
  const regularPosts = pagePostsFor(activeCategory, pageNum);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#F6F4EC]"
    >
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#D98A2C] font-bold tracking-widest uppercase text-sm block"
          >
            Our Journal
          </motion.span>
          {/* One H1 per view: a category page that repeats the generic blog
              heading gives Google nothing to tell the pages apart. */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-9xl font-display font-bold text-[#14171F]"
          >
            {activeCategory === 'all' ? (
              <>
                Latest <span className="text-[#14171F]/40 italic">Insights</span>
              </>
            ) : (
              <>
                {activeLabel} <span className="text-[#14171F]/40 italic">Articles</span>
              </>
            )}
          </motion.h1>
          {pageNum > 1 && (
            <p className="text-[#14171F]/60 text-lg">
              Page {pageNum} of {totalPages}
            </p>
          )}
        </div>
      </section>

      {/* Featured Post */}
      {featuredPostToShow && (
        <section className="pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative rounded-[4rem] overflow-hidden bg-[#14171F] flex flex-col lg:flex-row"
            >
              <div className="flex-1 aspect-[16/10] lg:aspect-auto overflow-hidden relative">
                <Image
                  src={featuredPostToShow.image}
                  alt={`${featuredPostToShow.title} - CodexStudio blog featured`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex-1 p-8 md:p-16 flex flex-col justify-center space-y-8">
                <div className="flex items-center gap-6 text-[#F6F4EC]/60 text-sm font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-2"><Tag className="w-4 h-4" /> {featuredPostToShow.category}</span>
                  <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {featuredPostToShow.date}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-[#F6F4EC] group-hover:text-[#D98A2C] transition-colors">
                  {featuredPostToShow.title}
                </h2>
                <p className="text-xl text-[#F6F4EC]/60 leading-relaxed">
                  {featuredPostToShow.excerpt}
                </p>
                <div className="flex items-center gap-4 text-[#F6F4EC]">
                  <User className="w-5 h-5 text-[#D98A2C]" />
                  <span className="font-bold">{featuredPostToShow.author}</span>
                </div>
                <Link href={`/blog/${featuredPostToShow.slug}`} className="inline-flex items-center gap-3 text-[#F6F4EC] font-bold group/btn">
                  Read Full Article 
                  <div className="w-12 h-12 rounded-full border border-[#F6F4EC]/20 flex items-center justify-center group-hover/btn:bg-[#F6F4EC] group-hover/btn:text-[#14171F] transition-all">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Category Filter Tabs */}
      <section className="pb-12 px-6" aria-label="Filter by category">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3">
          {[{ slug: 'all', label: 'All Posts' }, ...BLOG_CATEGORIES].map((cat) => {
            const isActive = cat.slug === activeCategory;
            return (
              <Link
                key={cat.slug}
                href={blogHref(cat.slug)}
                className={
                  isActive
                    ? 'px-5 py-2 rounded-full text-sm font-bold bg-[#14171F] text-[#F6F4EC] transition-colors'
                    : 'px-5 py-2 rounded-full text-sm font-bold bg-[#F6F4EC] text-[#14171F] border border-[#14171F]/15 hover:border-[#D98A2C] hover:text-[#D98A2C] transition-colors'
                }
              >
                {cat.label}
              </Link>
            );
          })}
        </div>
      </section>

      {/* Regular Posts Grid */}
      <section className="pb-16 px-6" aria-label="Blog posts">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {regularPosts.map((post, i) => (
            <Link key={post.title} href={`/blog/${post.slug}`}>
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/10] rounded-3xl overflow-hidden mb-8 relative">
                  <Image
                    src={post.image}
                    alt={`${post.title} - CodexStudio blog`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-[#D98A2C]">
                  <span>{post.category}</span>
                  <span className="w-1 h-1 rounded-full bg-[#14171F]/20" />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-[#14171F] group-hover:text-[#D98A2C] transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-[#14171F]/60 line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </motion.article>
            </Link>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 mt-16">
            {pageNum > 1 ? (
              <Link
                href={blogHref(activeCategory, pageNum - 1)}
                className="px-6 py-3 rounded-full text-sm font-bold border border-[#14171F]/20 text-[#14171F] hover:border-[#D98A2C] hover:text-[#D98A2C] transition-colors"
              >
                ← Previous
              </Link>
            ) : (
              <span className="px-6 py-3 rounded-full text-sm font-bold border border-[#14171F]/10 text-[#14171F]/30 cursor-not-allowed">
                ← Previous
              </span>
            )}
            <span className="text-sm font-bold text-[#14171F]/60">
              Page {pageNum} of {totalPages}
            </span>
            {pageNum < totalPages ? (
              <Link
                href={blogHref(activeCategory, pageNum + 1)}
                className="px-6 py-3 rounded-full text-sm font-bold border border-[#14171F]/20 text-[#14171F] hover:border-[#D98A2C] hover:text-[#D98A2C] transition-colors"
              >
                Next →
              </Link>
            ) : (
              <span className="px-6 py-3 rounded-full text-sm font-bold border border-[#14171F]/10 text-[#14171F]/30 cursor-not-allowed">
                Next →
              </span>
            )}
          </div>
        )}
      </section>

      <CTA />
    </motion.div>
  );
};
