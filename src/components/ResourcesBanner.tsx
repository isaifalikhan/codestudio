'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const ResourcesBanner = () => {
  return (
    <section className="py-16 px-6" aria-labelledby="resources-banner-heading">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2rem] md:rounded-[3rem] bg-[#2F281D] py-12 px-8 md:px-16 text-center"
        >
          <h2 id="resources-banner-heading" className="text-2xl md:text-3xl font-display font-bold text-[#FDF8EC] mb-4">
            🛠️ Free Tools for Your Business
          </h2>
          <p className="max-w-2xl mx-auto text-[#FDF8EC]/70 text-lg mb-8">
            Browse our curated list of 50 free tools every business owner and developer needs.
          </p>
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 bg-[#FDF8EC] text-[#2F281D] px-8 py-4 rounded-full font-bold hover:bg-[#997F6C] hover:text-[#FDF8EC] transition-colors"
          >
            Explore Free Tools <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
