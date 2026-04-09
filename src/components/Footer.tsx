'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Github, Twitter, Linkedin, Instagram, Facebook, ArrowUp } from 'lucide-react';
import Link from 'next/link';
import { BRAND_CITY, BRAND_EMAIL, BRAND_PHONE } from '@/lib/seo';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FDF8EC] pt-24 pb-12 px-6 border-t border-[#2F281D]/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20"
        >
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-[#2F281D] rounded-lg flex items-center justify-center font-bold text-xl text-[#FDF8EC]">
                C
              </div>
              <span className="text-2xl font-display font-bold tracking-tighter text-[#2F281D]">
                CODEX<span className="text-[#997F6C]">STUDIO</span>
              </span>
            </Link>
            <p className="text-[#2F281D]/75 text-lg max-w-md mb-8 leading-relaxed">
              We are a team of passionate designers and developers dedicated to 
              creating high-end digital experiences that push the boundaries 
              of what's possible.
            </p>
            <p className="text-[#2F281D]/65 text-sm mb-6 leading-relaxed">
              CodexStudio, {BRAND_CITY}, Pakistan<br />
              {BRAND_PHONE} · {BRAND_EMAIL}
            </p>
            <ul className="flex gap-4 list-none m-0 p-0">
              <li>
                <motion.a
                  href="https://www.instagram.com/codexstudio2026/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CodexStudio on Instagram"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-[#2F281D]/5 border border-[#2F281D]/10 flex items-center justify-center hover:bg-[#2F281D] hover:text-[#FDF8EC] transition-all"
                >
                  <Instagram className="w-5 h-5" aria-hidden />
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="https://www.facebook.com/profile.php?id=61582748907285"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CodexStudio on Facebook"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-[#2F281D]/5 border border-[#2F281D]/10 flex items-center justify-center hover:bg-[#2F281D] hover:text-[#FDF8EC] transition-all"
                >
                  <Facebook className="w-5 h-5" aria-hidden />
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="https://linkedin.com/company/codexstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CodexStudio on LinkedIn"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-[#2F281D]/5 border border-[#2F281D]/10 flex items-center justify-center hover:bg-[#2F281D] hover:text-[#FDF8EC] transition-all"
                >
                  <Linkedin className="w-5 h-5" aria-hidden />
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="https://twitter.com/codexstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CodexStudio on Twitter"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-[#2F281D]/5 border border-[#2F281D]/10 flex items-center justify-center hover:bg-[#2F281D] hover:text-[#FDF8EC] transition-all"
                >
                  <Twitter className="w-5 h-5" aria-hidden />
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="https://github.com/codexstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CodexStudio on GitHub"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-[#2F281D]/5 border border-[#2F281D]/10 flex items-center justify-center hover:bg-[#2F281D] hover:text-[#FDF8EC] transition-all"
                >
                  <Github className="w-5 h-5" aria-hidden />
                </motion.a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-8 text-[#2F281D]">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Tools', 'Resources', 'Team', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-[#2F281D]/75 hover:text-[#997F6C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#997F6C] focus-visible:ring-offset-2 focus-visible:rounded"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-8 text-[#2F281D]">Popular Tools</h3>
            <ul className="space-y-4">
              <li><Link href="/tools/word-counter" className="text-[#2F281D]/75 hover:text-[#997F6C] transition-colors">Word Counter</Link></li>
              <li><Link href="/tools/image-compressor" className="text-[#2F281D]/75 hover:text-[#997F6C] transition-colors">Image Compressor</Link></li>
              <li><Link href="/tools/password-generator" className="text-[#2F281D]/75 hover:text-[#997F6C] transition-colors">Password Generator</Link></li>
              <li><Link href="/tools/qr-code-generator" className="text-[#2F281D]/75 hover:text-[#997F6C] transition-colors">QR Code Generator</Link></li>
              <li><Link href="/tools/age-calculator" className="text-[#2F281D]/75 hover:text-[#997F6C] transition-colors">Age Calculator</Link></li>
              <li><Link href="/tools/merge-pdf" className="text-[#2F281D]/75 hover:text-[#997F6C] transition-colors">PDF Merger</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-8 text-[#2F281D]">Stay in touch</h3>
            <p className="text-[#2F281D]/75 text-sm mb-4">
              Want updates or have a project in mind? Get in touch.
            </p>
            <p className="text-sm mb-4">
              <Link href="/tools" className="text-[#997F6C] font-semibold hover:underline">Try our free tools</Link>
              {' · '}
              <Link href="/resources" className="text-[#997F6C] font-semibold hover:underline">Resources</Link>
              {' · '}
              <Link href="/blog" className="text-[#997F6C] font-semibold hover:underline">Blog</Link>
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#2F281D] text-[#FDF8EC] px-5 py-3 rounded-xl font-bold hover:bg-[#997F6C] transition-colors"
            >
              Contact us
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="pt-12 border-t border-[#2F281D]/5 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="text-[#2F281D]/30 text-sm">
            © {new Date().getFullYear()} CodexStudio. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm text-[#2F281D]/30">
            <Link href="/privacy-policy" className="hover:text-[#2F281D] transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-[#2F281D] transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-[#2F281D] transition-colors">Sitemap</Link>
            <Link href="/editorial" className="hover:text-[#2F281D] transition-colors">Editorial standards</Link>
          </div>
          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            aria-label="Scroll back to top"
            className="w-12 h-12 rounded-full bg-[#2F281D]/5 border border-[#2F281D]/10 flex items-center justify-center hover:bg-[#2F281D] hover:text-[#FDF8EC] transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#997F6C] focus-visible:ring-offset-2"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};
