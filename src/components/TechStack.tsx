import React from 'react';
import { motion } from 'motion/react';

const technologies = [
  { name: 'Next.js', icon: 'https://cdn.worldvectorlogo.com/logos/next-js.svg' },
  { name: 'React', icon: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
  { name: 'Node.js', icon: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' },
  { name: 'TypeScript', icon: 'https://cdn.worldvectorlogo.com/logos/typescript.svg' },
  { name: 'Tailwind', icon: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg' },
  { name: 'Framer Motion', icon: 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg' },
  { name: 'Shopify', icon: 'https://cdn.worldvectorlogo.com/logos/shopify.svg' },
  { name: 'WordPress', icon: 'https://cdn.worldvectorlogo.com/logos/wordpress-icon.svg' },
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
            Our Arsenal
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-[#2F281D]"
          >
            Powered by <span className="text-[#2F281D]/40">Modern Tech</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-[#FDF8EC] border border-[#2F281D]/5 flex flex-col items-center justify-center gap-4 group hover:shadow-xl transition-all"
            >
              <img
                src={tech.icon}
                alt={`${tech.name} - Technology used by CodexStudio`}
                className="w-12 h-12 grayscale group-hover:grayscale-0 transition-all duration-500"
                loading="lazy"
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
