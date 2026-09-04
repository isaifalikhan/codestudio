'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import { ContactFormWithEmailJS } from './ContactFormWithEmailJS';
import { TagChip } from './TagChip';

export const ContactForm = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-paper relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mb-4"
            >
              <TagChip name="GetInTouch" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-display font-bold tracking-tight mb-8 text-ink"
            >
              Let&apos;s build <br />
              <span className="text-ink/40">something great</span>
            </motion.h2>

            <p className="text-ink/50 text-xl mb-12 max-w-md leading-relaxed">
              Have a project in mind? We&apos;d love to hear about it. Send us a message
              and we&apos;ll get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-xl bg-ink/5 flex items-center justify-center group-hover:bg-ink transition-colors">
                  <Mail className="w-6 h-6 text-ink group-hover:text-paper transition-colors" />
                </div>
                <div>
                  <p className="font-mono text-mist text-xs mb-1">// email us</p>
                  <Link href="/contact" className="text-xl font-bold text-ink hover:text-gold transition-colors">Send a message →</Link>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <a href="https://wa.me/447923122356" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group w-full">
                  <div className="w-14 h-14 rounded-xl bg-ink/5 flex items-center justify-center group-hover:bg-gold transition-colors">
                    <Phone className="w-6 h-6 text-gold group-hover:text-paper transition-colors" aria-hidden />
                  </div>
                  <div>
                    <p className="font-mono text-mist text-xs mb-1">// whatsapp us</p>
                    <p className="text-xl font-bold text-ink group-hover:text-gold transition-colors">{process.env.NEXT_PUBLIC_WHATSAPP_DISPLAY || '+44 7923 122356'}</p>
                  </div>
                </a>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-xl bg-ink/5 flex items-center justify-center group-hover:bg-pine transition-colors">
                  <MapPin className="w-6 h-6 text-pine group-hover:text-paper transition-colors" />
                </div>
                <div>
                  <p className="font-mono text-mist text-xs mb-1">// visit us</p>
                  <p className="text-xl font-bold text-ink">Islamabad, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-2xl bg-paper-dim border border-ink/10 shadow-xl"
          >
            <ContactFormWithEmailJS variant="light" showCompany />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
