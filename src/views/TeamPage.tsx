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
      className="bg-[#F6F4EC]"
    >
      <section className="pt-40 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#D98A2C] font-bold tracking-widest uppercase text-sm block"
          >
            Our Team
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-9xl font-display font-bold text-[#14171F]"
          >
            Meet the <span className="text-[#14171F]/40 italic">People</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#14171F]/60 leading-relaxed max-w-2xl mx-auto"
          >
            CodexStudio is a founder-led studio in Islamabad. You work with the person who
            builds the thing, not an account manager relaying messages to a team you never meet.
          </motion.p>
        </div>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {teamMembers.map((member, i) => (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group text-center"
              >
                <div className="relative aspect-square rounded-3xl overflow-hidden mb-6 max-w-xs mx-auto">
                  <Image
                    src={member.photo}
                    alt={`${member.name} - ${member.role} at CodexStudio`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                </div>
                <h3 className="text-2xl font-display font-bold text-[#14171F]">{member.name}</h3>
                <p className="text-[#D98A2C] font-bold uppercase tracking-widest text-sm mt-1">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#14171F]/5 border border-[#14171F]/10 mt-4 hover:bg-[#14171F] hover:text-[#F6F4EC] transition-colors"
                >
                  <Linkedin className="w-5 h-5" aria-hidden />
                </a>
              </motion.article>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-[#ECE7D9] border border-[#14171F]/10 p-12 flex flex-col items-center justify-center text-center"
            >
              <p className="text-[#D98A2C] font-bold uppercase tracking-widest text-sm mb-4">We&apos;re growing</p>
              <h3 className="text-2xl font-display font-bold text-[#14171F] mb-2">Join us</h3>
              <p className="text-[#14171F]/60 text-sm mb-8 max-w-xs">Want to build great digital products? Get in touch.</p>
              <Link href="/contact" className="px-8 py-4 bg-[#14171F] text-[#F6F4EC] rounded-full font-bold hover:bg-[#D98A2C] transition-colors">
                Get in touch
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-[#14171F]">How a small studio works</h2>
          <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-[#14171F]/75">
            <p>
              Most agencies of this size present themselves as larger than they are. We would rather
              be straightforward about it, because the structure is the point rather than something to
              apologise for. A founder-led studio means the person who scopes your project is the
              person who writes the code, and the person who is still there when something needs
              fixing six months later.
            </p>
            <p>
              The practical difference shows up in the parts of a project that normally go wrong.
              Nothing is lost in translation between a salesperson who promised something and a
              developer who has to build it. Decisions get made in one conversation rather than three.
              And when a requirement turns out to be more complicated than it looked, you hear that
              directly and early rather than discovering it at the deadline.
            </p>
            <p>
              The honest trade-off is capacity. We take on a limited number of projects at a time,
              which means we occasionally cannot start when you would like us to. For work that needs
              a larger team — a long-running product with several parallel workstreams — we will say
              so rather than stretch to fit.
            </p>
            <p>
              For specialist work outside the core of design and web engineering we bring in trusted
              collaborators — illustration, photography, copywriting, motion — and tell you when that
              is happening and who is doing it.
            </p>
          </div>

          <h2 className="mt-12 font-display text-3xl font-bold text-[#14171F]">Who we work with</h2>
          <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-[#14171F]/75">
            <p>
              Clients are generally in one of three situations. Some are established businesses whose
              site has fallen behind — slow, awkward on a phone, or invisible in search. Some are
              earlier stage and need a first real presence rather than a social profile and a WhatsApp
              number. Others have outgrown spreadsheets and need an internal tool built around how
              they actually work.
            </p>
            <p>
              We work with clients in Pakistan and internationally, and quote in USD in both cases.
              Most collaboration happens asynchronously, with scheduled calls at the points where a
              conversation is genuinely faster than writing.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </motion.div>
  );
}
