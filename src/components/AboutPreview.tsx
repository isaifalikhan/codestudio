'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { TagChip } from './TagChip';

export const AboutPreview = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

  return (
    <section ref={containerRef} className="py-24 px-6 bg-[#F6F4EC] overflow-hidden">
      <motion.div 
        style={{ scale: springScale }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden relative border border-ink/10">
              <Image
                src="/images/unnamed.jpg"
                alt="Saif Ali - Founder of CodexStudio web development agency in Islamabad Pakistan"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 200px"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 bg-ink text-paper p-6 md:p-8 rounded-xl shadow-2xl max-w-[200px] md:max-w-xs"
            >
              <p className="font-mono text-xl md:text-2xl font-bold mb-1 md:mb-2 text-gold">10+ years</p>
              <p className="text-xs md:text-sm text-paper/60">Building full-stack products, APIs, and high-impact sites for teams worldwide.</p>
            </motion.div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <TagChip name="AboutUs" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-display font-bold text-ink leading-tight"
            >
              We blend <span className="text-ink/40 italic">creativity</span> with technical precision.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-ink/60 leading-relaxed"
            >
              CodexStudio pairs creative direction with serious engineering—Next.js and Node.js apps, JWT-secured APIs,
              MongoDB-backed systems, and polished marketing sites for brands from hospitality and retail to healthcare
              and logistics. We ship dashboards, e-commerce, and AI-assisted products end to end.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-6"
            >
              <Link href="/about" className="inline-flex items-center gap-3 text-ink font-bold group">
                Learn more about us
                <div className="w-10 h-10 rounded-lg border border-ink/10 flex items-center justify-center group-hover:bg-ink group-hover:text-paper transition-all">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 text-ink/70 hover:text-gold font-bold transition-colors">
                Our services
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
