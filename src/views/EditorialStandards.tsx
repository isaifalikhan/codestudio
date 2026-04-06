'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export const EditorialStandards = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#FDF8EC]"
    >
      <article className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
        <p className="text-[#997F6C] font-bold uppercase tracking-widest text-sm mb-4">Publisher standards</p>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-[#2F281D] mb-8">
          Editorial &amp; content <span className="text-[#2F281D]/40 italic">standards</span>
        </h1>
        <p className="text-[#2F281D]/60 mb-12">Last updated: April 2026</p>

        <div className="prose prose-lg text-[#2F281D]/80 space-y-8 max-w-none">
          <section>
            <h2 className="text-2xl font-display font-bold text-[#2F281D] mt-12 mb-4">Why this page exists</h2>
            <p>
              CodexStudio is a web development agency in Islamabad, Pakistan. We publish this site to explain our services, share practical articles, and offer
              free browser-based tools. This page describes how we create and maintain that content so visitors and advertising partners can see that the site is
              built around original, useful material—not placeholder pages or copied articles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#2F281D] mt-12 mb-4">What we publish</h2>
            <p>
              <strong>Blog and guides.</strong> Our blog posts are written for business owners, marketers, and developers. Topics include web strategy, UI/UX,
              performance, SEO, and regional context for Pakistan where it helps readers. Articles are drafted by our team, edited for clarity, and updated when
              facts or products change in a meaningful way.
            </p>
            <p>
              <strong>Free tools.</strong> We design and ship utilities that run in the browser (image, PDF, text, developer, and other categories). Each tool
              page includes a clear description, step-by-step usage, and frequently asked questions. Where processing happens only on your device, we say so
              plainly so expectations stay accurate.
            </p>
            <p>
              <strong>Resources.</strong> Our resources section lists external tools we find useful, with short original commentary and disclosure when links are
              affiliate or promotional. We do not present those lists as exhaustive industry rankings unless we state the criteria.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#2F281D] mt-12 mb-4">Originality and attribution</h2>
            <p>
              We do not copy full articles from other publishers. When we quote or summarize third-party sources, we attribute them. Our tools are implemented by
              our team; where we rely on open standards or libraries, the product pages describe what the tool does in plain language rather than duplicating
              documentation verbatim without added context.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#2F281D] mt-12 mb-4">Responsible use of media and download tools</h2>
            <p>
              Some utilities help users work with publicly available links or files. You are responsible for complying with copyright law and the terms of
              service of any platform you use. Only download or reuse content you have the right to use. CodexStudio does not encourage infringement or
              circumvention of technical protection measures.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#2F281D] mt-12 mb-4">Transparency and identity</h2>
            <p>
              We are CodexStudio, an independent studio. We do not claim to be Google, Meta, or any other company. Our{' '}
              <Link href="/about" className="text-[#997F6C] font-bold hover:underline">
                About
              </Link>{' '}
              and{' '}
              <Link href="/team" className="text-[#997F6C] font-bold hover:underline">
                Team
              </Link>{' '}
              pages describe who we are. Contact details on{' '}
              <Link href="/contact" className="text-[#997F6C] font-bold hover:underline">
                Contact
              </Link>{' '}
              are genuine for project inquiries and feedback.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#2F281D] mt-12 mb-4">Corrections and feedback</h2>
            <p>
              If you spot an error in an article or a bug in a tool, please email{' '}
              <a href="mailto:hello@codexstudio.com" className="text-[#997F6C] font-bold hover:underline">
                hello@codexstudio.com
              </a>
              . We review substantive feedback and fix mistakes when we can verify them.
            </p>
          </section>
        </div>

        <p className="mt-16 flex flex-wrap gap-4">
          <Link href="/privacy" className="text-[#997F6C] font-bold hover:underline">
            Privacy Policy
          </Link>
          <span className="text-[#2F281D]/30">·</span>
          <Link href="/terms" className="text-[#997F6C] font-bold hover:underline">
            Terms &amp; Conditions
          </Link>
          <span className="text-[#2F281D]/30">·</span>
          <Link href="/" className="text-[#997F6C] font-bold hover:underline">
            ← Home
          </Link>
        </p>
      </article>
    </motion.div>
  );
};
