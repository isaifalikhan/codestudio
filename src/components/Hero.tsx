'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotate = useTransform(scrollY, [0, 500], [0, 45]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#FDF8EC]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      {/* Floating 3D-like elements */}
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute top-1/4 -left-20 w-64 h-64 md:w-96 md:h-96 bg-[#997F6C]/10 rounded-full blur-[80px] md:blur-[120px]" 
      />
      <motion.div 
        style={{ y: y2, rotate: -rotate }}
        className="absolute bottom-1/4 -right-20 w-64 h-64 md:w-96 md:h-96 bg-[#5F634D]/10 rounded-full blur-[80px] md:blur-[120px]" 
      />

      {/* Abstract 3D Shapes */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-[15%] w-24 h-24 border-2 border-[#997F6C]/20 rounded-2xl hidden lg:block"
        style={{ transformStyle: 'preserve-3d', rotateX: 45, rotateY: 45 }}
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-[10%] w-32 h-32 border-2 border-[#5F634D]/20 rounded-full hidden lg:block"
        style={{ transformStyle: 'preserve-3d', rotateX: -45, rotateY: 30 }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2F281D]/5 border border-[#2F281D]/10 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#5F634D] animate-ping" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#2F281D]/75">
            Web Development & Digital Solutions
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-4xl sm:text-6xl md:text-8xl font-display font-bold leading-[1.1] mb-8 tracking-tighter text-[#2F281D]"
        >
          Build Powerful <br />
          <span className="text-gradient font-serif italic font-light">Websites</span> & Digital Products
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-[#2F281D]/80 mb-12 leading-relaxed"
        >
          CodexStudio helps startups and businesses build modern websites, web apps, and digital experiences that grow revenue.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link href="/contact#main-content" className="w-full sm:w-auto px-8 py-4 bg-[#2F281D] text-[#FDF8EC] rounded-full font-bold text-lg hover:bg-[#997F6C] transition-all transform hover:scale-105 flex items-center justify-center gap-2 group shadow-xl shadow-[#2F281D]/10">
            Get a Free Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/portfolio" className="w-full sm:w-auto px-8 py-4 bg-white/50 border border-[#2F281D]/10 backdrop-blur-md rounded-full font-bold text-lg hover:bg-white transition-all flex items-center justify-center gap-2 group text-[#2F281D]">
            View Our Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#2F281D]/30 font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#997F6C] to-transparent" />
      </motion.div>
    </section>
  );
};
