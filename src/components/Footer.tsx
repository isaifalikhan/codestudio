'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Github, Twitter, Linkedin, Instagram, Facebook, ArrowUp } from 'lucide-react';
import Link from 'next/link';
import { BracketLink } from './BracketLink';
import { Logo } from './Logo';
import { BRAND_CITY, BRAND_EMAIL, BRAND_PHONE } from '@/lib/seo';

const socials = [
  { href: 'https://www.instagram.com/codexstudio2026/', label: 'Instagram', Icon: Instagram },
  { href: 'https://www.facebook.com/profile.php?id=61582748907285', label: 'Facebook', Icon: Facebook },
  { href: 'https://linkedin.com/company/codexstudio', label: 'LinkedIn', Icon: Linkedin },
  { href: 'https://twitter.com/codexstudio', label: 'Twitter', Icon: Twitter },
  { href: 'https://github.com/codexstudio', label: 'GitHub', Icon: Github },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-paper pt-24 pb-8 px-6 border-t border-ink/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20"
        >
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-8">
              <Logo />
            </Link>
            <p className="text-ink/75 text-lg max-w-md mb-8 leading-relaxed">
              We are a team of passionate designers and developers dedicated to
              creating high-end digital experiences that push the boundaries
              of what's possible.
            </p>
            <p className="font-mono text-xs text-mist mb-6 leading-relaxed">
              CodexStudio, {BRAND_CITY}, Pakistan
              <br />
              {BRAND_PHONE} · {BRAND_EMAIL}
            </p>
            <ul className="flex gap-4 list-none m-0 p-0">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <motion.a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`CodexStudio on ${label}`}
                    whileHover={{ y: -4 }}
                    className="w-11 h-11 rounded-lg bg-ink/5 border border-ink/10 flex items-center justify-center hover:bg-ink hover:text-paper transition-all"
                  >
                    <Icon className="w-5 h-5" aria-hidden />
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="tag-chip text-gold mb-8">
              <span className="text-mist">&lt;</span>QuickLinks<span className="text-mist">/&gt;</span>
            </h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Tools', 'Resources', 'Team', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-ink/75 hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:rounded"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="tag-chip text-gold mb-8">
              <span className="text-mist">&lt;</span>PopularTools<span className="text-mist">/&gt;</span>
            </h3>
            <ul className="space-y-4">
              <li><Link href="/tools/word-counter" className="text-ink/75 hover:text-gold transition-colors">Word Counter</Link></li>
              <li><Link href="/tools/image-compressor" className="text-ink/75 hover:text-gold transition-colors">Image Compressor</Link></li>
              <li><Link href="/tools/password-generator" className="text-ink/75 hover:text-gold transition-colors">Password Generator</Link></li>
              <li><Link href="/tools/qr-code-generator" className="text-ink/75 hover:text-gold transition-colors">QR Code Generator</Link></li>
              <li><Link href="/tools/age-calculator" className="text-ink/75 hover:text-gold transition-colors">Age Calculator</Link></li>
              <li><Link href="/tools/merge-pdf" className="text-ink/75 hover:text-gold transition-colors">PDF Merger</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="tag-chip text-gold mb-8">
              <span className="text-mist">&lt;</span>StayInTouch<span className="text-mist">/&gt;</span>
            </h3>
            <p className="text-ink/75 text-sm mb-4">
              Want updates or have a project in mind? Get in touch.
            </p>
            <p className="text-sm mb-6">
              <Link href="/tools" className="text-gold font-semibold hover:underline">Try our free tools</Link>
              {' · '}
              <Link href="/resources" className="text-gold font-semibold hover:underline">Resources</Link>
              {' · '}
              <Link href="/blog" className="text-gold font-semibold hover:underline">Blog</Link>
            </p>
            <BracketLink href="/contact" variant="solid">
              Contact us
            </BracketLink>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="pt-8 border-t border-ink/10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="text-ink/30 text-sm">
            © {new Date().getFullYear()} CodexStudio. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm text-ink/30">
            <Link href="/privacy" className="hover:text-ink transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-ink transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-ink transition-colors">Sitemap</Link>
            <Link href="/editorial" className="hover:text-ink transition-colors">Editorial standards</Link>
          </div>
          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{ y: -4 }}
            aria-label="Scroll back to top"
            className="w-11 h-11 rounded-lg bg-ink/5 border border-ink/10 flex items-center justify-center hover:bg-ink hover:text-paper transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>

        <p className="mt-8 pt-4 border-t border-ink/5 text-center font-mono text-[11px] text-ink/25 tracking-wide">
          UTF-8 · Next.js · Built with care in Islamabad, Pakistan
        </p>
      </div>
    </footer>
  );
};
