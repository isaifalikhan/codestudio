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
          className="rounded-[2rem] md:rounded-[3rem] bg-[#14171F] py-12 px-8 md:px-16 text-center"
        >
          <h2 id="resources-banner-heading" className="text-2xl md:text-3xl font-display font-bold text-[#F6F4EC] mb-4">
            🛠️ Free Tools for Your Business
          </h2>
          <p className="max-w-2xl mx-auto text-[#F6F4EC]/70 text-lg mb-8">
            Browse our curated list of 50 free tools every business owner and developer needs.
          </p>
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 bg-[#F6F4EC] text-[#14171F] px-8 py-4 rounded-full font-bold hover:bg-[#D98A2C] hover:text-[#F6F4EC] transition-colors"
          >
            Explore Free Tools <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
