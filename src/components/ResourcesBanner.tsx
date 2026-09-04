'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { BracketLink } from './BracketLink';

export const ResourcesBanner = () => {
  return (
    <section className="py-16 px-6" aria-labelledby="resources-banner-heading">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl bg-ink py-12 px-8 md:px-16 text-center grid-backdrop overflow-hidden"
        >
          <h2 id="resources-banner-heading" className="relative z-10 text-2xl md:text-3xl font-display font-bold text-paper mb-4">
            Free tools for your business
          </h2>
          <p className="relative z-10 max-w-2xl mx-auto text-paper/70 text-lg mb-8">
            Browse our curated list of 50 free tools every business owner and developer needs.
          </p>
          <div className="relative z-10">
            <BracketLink href="/resources" variant="invert">
              Explore free tools <ArrowRight className="w-5 h-5" />
            </BracketLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
