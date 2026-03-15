import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

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
    <section className="py-24 px-6 bg-[#E8E2D2]/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#997F6C] font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Trusted by developers & businesses
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-[#2F281D]"
          >
            Trusted <span className="text-[#2F281D]/40">Technologies</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-[#FDF8EC] border border-[#2F281D]/5 flex flex-col items-center justify-center gap-4 group hover:shadow-xl transition-all"
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
              <span className="font-bold text-[#2F281D]/40 group-hover:text-[#2F281D] transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
