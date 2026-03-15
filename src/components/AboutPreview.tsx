'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const AboutPreview = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

  return (
    <section ref={containerRef} className="py-24 px-6 bg-[#FDF8EC] overflow-hidden">
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
            <div className="aspect-square rounded-[3rem] overflow-hidden">
              <img
                src="/images/saif.jpeg"
                alt="Saif Ali - Founder of CodexStudio digital agency"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 bg-[#2F281D] text-[#FDF8EC] p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl max-w-[200px] md:max-w-xs"
            >
              <p className="text-xl md:text-2xl font-display font-bold mb-1 md:mb-2">10+ Years</p>
              <p className="text-xs md:text-sm text-[#FDF8EC]/60">Of experience in digital transformation and creative excellence.</p>
            </motion.div>
          </motion.div>

          <div className="space-y-8">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#997F6C] font-bold tracking-widest uppercase text-sm block"
            >
              Who We Are
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-display font-bold text-[#2F281D] leading-tight"
            >
              We blend <span className="text-[#2F281D]/40 italic">creativity</span> with technical precision.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-[#2F281D]/60 leading-relaxed"
            >
              CodexStudio is a forward-thinking digital agency dedicated to crafting premium experiences. 
              We don't just build websites; we create digital ecosystems that drive growth and inspire users.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-6"
            >
              <Link href="/about" className="inline-flex items-center gap-3 text-[#2F281D] font-bold group">
                Learn More About Us
                <div className="w-10 h-10 rounded-full border border-[#2F281D]/10 flex items-center justify-center group-hover:bg-[#2F281D] group-hover:text-[#FDF8EC] transition-all">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 text-[#2F281D]/70 hover:text-[#997F6C] font-bold transition-colors">
                Our Services
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
