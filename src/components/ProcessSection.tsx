'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Reveal } from './Reveal';
import { TagChip } from './TagChip';

const steps = [
  { step: '01', title: 'Discovery', desc: 'Understanding business goals and project requirements.' },
  { step: '02', title: 'Design', desc: 'Creating wireframes and modern UI/UX designs.' },
  { step: '03', title: 'Development', desc: 'Building fast and scalable applications.' },
  { step: '04', title: 'Launch', desc: 'Testing, deploying, and optimizing performance.' },
];

export const ProcessSection = () => (
  <section
    className="py-24 px-6 bg-paper perspective-1000 content-visibility-auto"
    aria-labelledby="process-heading"
  >
    <div className="max-w-7xl mx-auto">
      <Reveal width="100%">
        <div className="text-center mb-20">
          <TagChip name="Process" className="mb-4" />
          <h2 id="process-heading" className="text-4xl md:text-6xl font-display font-bold mt-3 mb-4 text-ink">
            How we <span className="text-ink/40">work</span>
          </h2>
          <p className="text-ink/70 max-w-2xl mx-auto text-lg">
            A clear, professional workflow from idea to launch — four stages, always in order.
          </p>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-ink/10 rounded-xl overflow-hidden border border-ink/10">
        {steps.map((item, i) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="p-8 bg-paper hover:bg-paper-dim transition-colors cursor-default"
          >
            <span className="font-mono text-sm font-bold text-gold mb-4 block">[{item.step}]</span>
            <h3 className="text-xl font-bold mb-2 text-ink">{item.title}</h3>
            <p className="text-ink/60 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
