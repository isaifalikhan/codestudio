'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { ContactFormWithEmailJS } from '../components/ContactFormWithEmailJS';
import { BRAND_PHONE, BRAND_CITY, BRAND_EMAIL } from '@/lib/seo';

export const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#FDF8EC]"
    >
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#997F6C] font-bold tracking-widest uppercase text-sm block"
          >
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-9xl font-display font-bold text-[#2F281D]"
          >
            Let's <span className="text-[#2F281D]/40 italic">Collaborate</span>
          </motion.h1>
        </div>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-16 text-center">
            <p className="text-[#2F281D]/80">
              Want to see our work first? <Link href="/portfolio" className="text-[#997F6C] font-semibold hover:underline">View our portfolio →</Link>
            </p>
            <p className="text-[#2F281D]/80">
              See our pricing: <Link href="/services" className="text-[#997F6C] font-semibold hover:underline">Our services →</Link>
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="space-y-16">
            <div className="space-y-8">
              <h2 className="text-4xl font-display font-bold text-[#2F281D]">Ready to start your next big project?</h2>
              <p className="text-xl text-[#2F281D]/60 leading-relaxed">
                We&apos;re always looking for new challenges and exciting collaborations. 
                Fill out the form or reach out directly to our team.
              </p>
              <a
                href="https://calendly.com/codexstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold border-2 border-[#997F6C] text-[#2F281D] hover:bg-[#997F6C] hover:text-[#FDF8EC] transition-colors"
              >
                Book a Free 30-min Call →
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-[#E8E2D2] space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#2F281D] text-[#FDF8EC] flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-[#2F281D]">Email Us</h3>
                <p className="text-[#2F281D]/60">Use the form to send a message. We reply within 24 hours.</p>
              </div>
              <a href={`https://wa.me/923001234567`} target="_blank" rel="noopener noreferrer" className="p-8 rounded-3xl bg-[#E8E2D2] space-y-4 block hover:bg-[#E8E2D2]/90 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-[#997F6C] text-[#FDF8EC] flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-[#2F281D]">WhatsApp Us</h3>
                <p className="text-[#2F281D]/60 hover:text-[#997F6C] transition-colors">{BRAND_PHONE}</p>
              </a>
              <div className="p-8 rounded-3xl bg-[#E8E2D2] space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#5F634D] text-[#FDF8EC] flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-[#2F281D]">Visit Us</h3>
                <p className="text-[#2F281D]/60">{BRAND_CITY}, Pakistan</p>
              </div>
              <div className="p-8 rounded-3xl bg-[#E8E2D2] space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#BCAF9B] text-[#2F281D] flex items-center justify-center">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-[#2F281D]">Socials</h3>
                <div className="flex flex-wrap gap-3">
                  <a href="https://www.instagram.com/codexstudio2026/" target="_blank" rel="noopener noreferrer" className="text-[#2F281D]/60 hover:text-[#997F6C] transition-colors">Instagram</a>
                  <a href="https://www.facebook.com/profile.php?id=61582748907285" target="_blank" rel="noopener noreferrer" className="text-[#2F281D]/60 hover:text-[#997F6C] transition-colors">Facebook</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#2F281D] rounded-[4rem] p-8 md:p-16 space-y-12"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-display font-bold text-[#FDF8EC]">Send a Message</h3>
              <p className="text-[#FDF8EC]/60">Tell us about your project and we'll get back to you within 24 hours.</p>
            </div>

            <ContactFormWithEmailJS variant="dark" showCompany />
          </motion.div>
        </div>
        <div className="max-w-7xl mx-auto mt-14">
          <div className="rounded-3xl overflow-hidden border border-[#2F281D]/10">
            <iframe
              title="Google Map - Islamabad, Pakistan"
              src="https://www.google.com/maps?q=Islamabad%2C%20Pakistan&output=embed"
              width="100%"
              height="360"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-3 text-sm text-[#2F281D]/60">CodexStudio · {BRAND_CITY}, Pakistan · {BRAND_PHONE} · {BRAND_EMAIL}</p>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-10 border-t border-[#2F281D]/10 text-center">
          <p className="text-[#2F281D]/70">
            While you wait, try our free tools: <Link href="/tools" className="text-[#997F6C] font-semibold hover:underline">140+ free online tools →</Link>
          </p>
        </div>
      </section>
    </motion.div>
  );
};
