'use client';

import React from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const MagneticButton = ({ children, className, href }: { children: React.ReactNode, className?: string, href: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width - 0.5) * 40;
    const yPct = (mouseY / height - 0.5) * 40;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        x: mouseXSpring,
        y: mouseYSpring,
      }}
    >
      <Link
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={className}
      >
        {children}
      </Link>
    </motion.div>
  );
};

export const CTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[4rem] bg-[#2F281D] overflow-hidden py-24 px-8 md:px-16 text-center"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#997F6C]/20 blur-[100px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#5F634D]/20 blur-[120px] translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-bold text-[#FDF8EC] leading-tight"
            >
              Start Your Project <span className="text-[#FDF8EC]/40 italic">Today</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-[#FDF8EC]/60"
            >
              We help businesses build modern digital products.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
            >
              <MagneticButton
                href="/contact"
                className="w-full sm:w-auto px-12 py-6 bg-[#FDF8EC] text-[#2F281D] rounded-full font-bold text-lg hover:bg-[#997F6C] hover:text-[#FDF8EC] hover:shadow-[0_0_20px_rgba(253,248,236,0.3)] transition-all flex items-center justify-center gap-3 group"
              >
                Get a Free Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </MagneticButton>
              <MagneticButton
                href="/portfolio"
                className="w-full sm:w-auto px-12 py-6 border border-[#FDF8EC]/20 text-[#FDF8EC] rounded-full font-bold text-lg hover:bg-[#FDF8EC]/10 hover:shadow-[0_0_20px_rgba(253,248,236,0.1)] transition-all flex items-center justify-center"
              >
                View Our Work
              </MagneticButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
