'use client';

import React from 'react';
import { motion } from 'motion/react';

const stats = [
  { label: 'Projects Delivered', value: '25+' },
  { label: 'Happy Clients', value: '30+' },
  { label: 'Years Experience', value: '3+' },
  { label: 'Countries Served', value: '5+' },
];

export const Stats = () => {
  return (
    <section className="py-20 px-6 border-y border-[#2F281D]/5 bg-[#FDF8EC]" aria-labelledby="stats-heading">
      <div className="max-w-7xl mx-auto">
        <h2 id="stats-heading" className="sr-only">Trust statistics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-6xl font-display font-bold text-gradient mb-2">
                {stat.value}
              </h3>
              <p className="text-[#2F281D]/40 text-sm font-bold uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
