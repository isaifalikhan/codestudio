'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import { ContactFormWithEmailJS } from './ContactFormWithEmailJS';

export const ContactForm = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-[#FDF8EC] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#997F6C]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#997F6C] font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Get In Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-display font-bold tracking-tight mb-8 text-[#2F281D]"
            >
              Let&apos;s Build <br />
              <span className="text-[#2F281D]/40">Something Great</span>
            </motion.h2>
            
            <p className="text-[#2F281D]/50 text-xl mb-12 max-w-md leading-relaxed">
              Have a project in mind? We&apos;d love to hear about it. Send us a message 
              and we&apos;ll get back to you within 24 hours.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-[#2F281D]/5 flex items-center justify-center group-hover:bg-[#2F281D] transition-colors">
                  <Mail className="w-6 h-6 text-[#2F281D] group-hover:text-[#FDF8EC] transition-colors" />
                </div>
                <div>
                  <p className="text-[#2F281D]/40 text-xs font-bold uppercase tracking-widest mb-1">Email Us</p>
                  <Link href="/contact" className="text-xl font-bold text-[#2F281D] hover:text-[#997F6C] transition-colors">Send a message →</Link>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <a href="https://wa.me/447923122356" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group w-full">
                  <div className="w-14 h-14 rounded-2xl bg-[#2F281D]/5 flex items-center justify-center group-hover:bg-[#997F6C] transition-colors">
                    <Phone className="w-6 h-6 text-[#997F6C] group-hover:text-[#FDF8EC] transition-colors" aria-hidden />
                  </div>
                  <div>
                    <p className="text-[#2F281D]/40 text-xs font-bold uppercase tracking-widest mb-1">WhatsApp Us</p>
                    <p className="text-xl font-bold text-[#2F281D] group-hover:text-[#997F6C] transition-colors">{process.env.NEXT_PUBLIC_WHATSAPP_DISPLAY || '+44 7923 122356'}</p>
                  </div>
                </a>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-[#2F281D]/5 flex items-center justify-center group-hover:bg-[#5F634D] transition-colors">
                  <MapPin className="w-6 h-6 text-[#5F634D] group-hover:text-[#FDF8EC] transition-colors" />
                </div>
                <div>
                  <p className="text-[#2F281D]/40 text-xs font-bold uppercase tracking-widest mb-1">Visit Us</p>
                  <p className="text-xl font-bold text-[#2F281D]">Islamabad, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[2.5rem] bg-[#E8E2D2] border border-[#2F281D]/10 shadow-xl"
          >
            <ContactFormWithEmailJS variant="light" showCompany />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
