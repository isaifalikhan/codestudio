import React from 'react';
import { motion } from 'motion/react';

const logos = [
  { name: 'TechFlow', url: 'https://cdn.worldvectorlogo.com/logos/techflow.svg' },
  { name: 'Pulse', url: 'https://cdn.worldvectorlogo.com/logos/pulse-6.svg' },
  { name: 'Vertex', url: 'https://cdn.worldvectorlogo.com/logos/vertex-2.svg' },
  { name: 'Nexus', url: 'https://cdn.worldvectorlogo.com/logos/nexus-6.svg' },
  { name: 'Orbit', url: 'https://cdn.worldvectorlogo.com/logos/orbit-1.svg' },
  { name: 'Aura', url: 'https://cdn.worldvectorlogo.com/logos/aura-1.svg' },
];

export const LogoSlider = () => {
  return (
    <div className="py-12 lg:py-20 bg-[#FDF8EC] border-y border-[#2F281D]/5 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-8 lg:mb-12 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-8">
        <div className="hidden md:block h-px flex-1 bg-[#2F281D]/10" />
        <p className="text-[#2F281D]/30 text-[10px] lg:text-xs font-bold uppercase tracking-[0.4em] whitespace-nowrap px-4 lg:px-8 text-center">
          Strategic Partners & Collaborators
        </p>
        <div className="hidden md:block h-px flex-1 bg-[#2F281D]/10" />
      </div>
      
      <div className="relative">
        {/* Edge Masks */}
        <div className="absolute inset-y-0 left-0 w-16 lg:w-32 bg-gradient-to-r from-[#FDF8EC] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-16 lg:w-32 bg-gradient-to-l from-[#FDF8EC] to-transparent z-10" />

        <div className="flex">
          <motion.div
            animate={{
              x: [0, -1200],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-12 lg:gap-24 items-center whitespace-nowrap"
          >
            {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
              <div key={i} className="flex items-center gap-3 lg:gap-4 grayscale opacity-20 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-pointer group">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-[#2F281D]/5 flex items-center justify-center group-hover:bg-[#2F281D] group-hover:rotate-6 transition-all duration-500">
                  <span className="text-xl lg:text-2xl font-display font-bold text-[#2F281D] group-hover:text-[#FDF8EC]">{logo.name[0]}</span>
                </div>
                <span className="text-xl lg:text-2xl font-display font-bold text-[#2F281D] tracking-tighter">{logo.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
