import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { TagChip } from './TagChip';

const technologies = [
  { name: 'Stripe', icon: 'https://cdn.worldvectorlogo.com/logos/stripe-4.svg' },
  { name: 'Shopify', icon: 'https://cdn.worldvectorlogo.com/logos/shopify.svg' },
  { name: 'AWS', icon: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg' },
  { name: 'Vercel', icon: 'https://cdn.worldvectorlogo.com/logos/vercel.svg' },
  { name: 'Next.js', icon: 'https://cdn.worldvectorlogo.com/logos/next-js.svg' },
  { name: 'React', icon: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
];

export const TechStack = () => {
  return (
    <section className="py-24 px-6 bg-paper-dim/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-4 flex justify-center"
          >
            <TagChip name="TechStack" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-ink"
          >
            Trusted <span className="text-ink/40">technologies</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-8 rounded-xl bg-paper border border-ink/5 flex flex-col items-center justify-center gap-4 group hover:shadow-xl hover:border-gold/30 transition-all"
            >
              <Image
                src={tech.icon}
                alt={`${tech.name} - Technology used by CodexStudio`}
                width={80}
                height={40}
                className="w-12 h-12 grayscale group-hover:grayscale-0 transition-all duration-500 object-contain"
                loading="lazy"
                sizes="80px"
              />
              <span className="font-mono text-xs font-bold text-ink/40 group-hover:text-ink transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
