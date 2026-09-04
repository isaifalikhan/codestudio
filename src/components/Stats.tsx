'use client';

import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../utils/cn';

const stats = [
  { label: 'free tools built', value: '100+' },
  { label: 'happy clients', value: '30+' },
  { label: 'years experience', value: '3+' },
  { label: 'countries served', value: '5+' },
];

export const Stats = () => {
  return (
    <section className="py-20 px-6 border-y border-ink/10 bg-paper" aria-labelledby="stats-heading">
      <div className="max-w-7xl mx-auto">
        <h2 id="stats-heading" className="sr-only">Trust statistics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={cn(
                'text-center px-4 py-6 sm:py-0',
                index !== 0 && 'sm:border-l border-ink/10'
              )}
            >
              <p className="font-mono text-4xl md:text-5xl font-bold text-ink mb-2">{stat.value}</p>
              <p className="font-mono text-xs text-mist">
                <span className="text-gold">//</span> {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
