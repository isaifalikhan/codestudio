'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Reveal } from './Reveal';

export const ProcessSection = () => (
  <section
    className="py-24 px-6 bg-[#FDF8EC] perspective-1000 content-visibility-auto"
    aria-labelledby="process-heading"
  >
    <div className="max-w-7xl mx-auto">
      <Reveal width="100%">
        <div className="text-center mb-20">
          <h2 id="process-heading" className="text-4xl md:text-6xl font-display font-bold mb-4 text-[#2F281D]">
            Our <span className="text-[#2F281D]/70 italic">Process</span>
          </h2>
          <p className="text-[#2F281D]/75 max-w-2xl mx-auto text-lg">
            A clear, professional workflow from idea to launch.
          </p>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { step: '01', title: 'Discovery', desc: 'Understanding business goals and project requirements.' },
          { step: '02', title: 'Design', desc: 'Creating wireframes and modern UI/UX designs.' },
          { step: '03', title: 'Development', desc: 'Building fast and scalable applications.' },
          { step: '04', title: 'Launch', desc: 'Testing, deploying, and optimizing performance.' },
        ].map((item, i) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl bg-[#E8E2D2] border border-[#2F281D]/10 shadow-sm hover:shadow-xl transition-all cursor-default"
          >
            <span className="text-4xl font-display font-bold text-[#997F6C] mb-4 block">{item.step}</span>
            <h3 className="text-xl font-bold mb-2 text-[#2F281D]">{item.title}</h3>
            <p className="text-[#2F281D]/75 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
