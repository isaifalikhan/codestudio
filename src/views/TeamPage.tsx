'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { teamMembers } from '../data/team';
import { CTA } from '../components/CTA';

export const TeamPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#FDF8EC]"
    >
      <section className="pt-40 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#997F6C] font-bold tracking-widest uppercase text-sm block"
          >
            Our Team
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-9xl font-display font-bold text-[#2F281D]"
          >
            Meet the <span className="text-[#2F281D]/40 italic">People</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#2F281D]/60 leading-relaxed max-w-2xl mx-auto"
          >
            The passionate designers and developers behind CodexStudio.
          </motion.p>
        </div>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {teamMembers.map((member, i) => (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group text-center"
              >
                <div className="relative aspect-square rounded-3xl overflow-hidden mb-6">
                  <Image
                    src={member.photo}
                    alt={`${member.name} - ${member.role} at CodexStudio`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <h3 className="text-2xl font-display font-bold text-[#2F281D]">{member.name}</h3>
                <p className="text-[#997F6C] font-bold uppercase tracking-widest text-sm mt-1">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#2F281D]/5 border border-[#2F281D]/10 mt-4 hover:bg-[#2F281D] hover:text-[#FDF8EC] transition-colors"
                >
                  <Linkedin className="w-5 h-5" aria-hidden />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </motion.div>
  );
}
