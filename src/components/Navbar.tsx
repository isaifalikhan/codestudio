'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '../utils/cn';
import { BRAND_PHONE, BRAND_CITY } from '@/lib/seo';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
  { name: 'Tools', path: '/tools' },
  { name: 'Resources', path: '/resources' },
  { name: 'Team', path: '/team' },
  { name: 'Contact', path: '/contact' },
];
const serviceLinks = [
  { name: 'Web Development', path: '/services/web-development' },
  { name: 'Next.js Development', path: '/services/nextjs-development' },
  { name: 'E-Commerce Development', path: '/services/ecommerce-development' },
  { name: 'UI/UX Design', path: '/services/ui-ux-design' },
  { name: 'SEO Optimization', path: '/services/seo-optimization' },
  { name: 'Mobile App Development', path: '/services/mobile-app-development' },
  { name: 'Brand Identity Design', path: '/services/brand-identity-design' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-[#FDF8EC]/80 backdrop-blur-md py-3 border-b border-[#2F281D]/10' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#2F281D] rounded-lg flex items-center justify-center font-bold text-xl text-[#FDF8EC] transform group-hover:rotate-12 transition-transform">
            C
          </div>
          <span className="text-2xl font-display font-bold tracking-tighter text-[#2F281D]">
            CODEX<span className="text-[#997F6C]">STUDIO</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <span className="hidden xl:inline text-xs font-semibold text-[#2F281D]/65">
            {BRAND_PHONE} | {BRAND_CITY}, Pakistan
          </span>
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {link.name === 'Services' ? (
                <div className="relative group">
                  <Link
                    href={link.path}
                    className={cn(
                      'text-sm font-medium transition-colors hover:text-[#997F6C] relative group/link',
                      pathname.startsWith('/services') ? 'text-[#2F281D] font-bold' : 'text-[#2F281D]/60'
                    )}
                  >
                    Services
                  </Link>
                  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute top-full left-0 mt-3 w-72 rounded-xl border border-[#2F281D]/10 bg-[#FDF8EC] shadow-xl p-2 transition-all">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.path}
                        href={service.path}
                        className="block rounded-lg px-3 py-2 text-sm text-[#2F281D]/80 hover:bg-[#2F281D]/5 hover:text-[#2F281D]"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={link.path}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-[#997F6C] relative group/link',
                    pathname === link.path ? 'text-[#2F281D] font-bold' : 'text-[#2F281D]/60'
                  )}
                >
                  {link.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#997F6C] transition-all group-hover/link:w-full"
                    layoutId={pathname === link.path ? 'nav-underline' : undefined}
                  />
                </Link>
              )}
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: navLinks.length * 0.1 }}
          >
            <Link
              href="/contact"
              className="bg-[#2F281D] text-[#FDF8EC] px-6 py-2 rounded-full text-sm font-bold hover:bg-[#997F6C] transition-colors flex items-center gap-2 group"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="md:hidden w-12 h-12 flex items-center justify-center text-[#2F281D] rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#997F6C] focus-visible:ring-offset-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav-menu"
        >
          {isMobileMenuOpen ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            id="mobile-nav-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="fixed inset-0 z-[60] bg-[#2F281D] flex flex-col md:hidden"
          >
            <div className="flex items-center justify-between p-6 pb-4 flex-shrink-0">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
                <div className="w-10 h-10 bg-[#FDF8EC] rounded-lg flex items-center justify-center font-bold text-xl text-[#2F281D]">
                  C
                </div>
                <span className="text-xl sm:text-2xl font-display font-bold tracking-tighter text-[#FDF8EC]">
                  CODEX<span className="text-[#997F6C]">STUDIO</span>
                </span>
              </Link>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-12 h-12 rounded-full border border-[#FDF8EC]/10 flex items-center justify-center text-[#FDF8EC] shrink-0"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <ul className="flex flex-col gap-0.5 flex-1 min-h-0 overflow-y-auto overscroll-contain px-6 py-2 -mt-1">
              {navLinks.map((link, i) => (
                <li key={link.name}>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: Math.min(i * 0.05, 0.3) }}
                  >
                    <Link
                      href={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        'block py-3 text-[1.15rem] sm:text-[1.35rem] leading-tight tracking-tight font-display font-semibold transition-colors border-b border-[#FDF8EC]/5 last:border-0',
                        pathname === link.path ? 'text-[#997F6C]' : 'text-[#FDF8EC]/90 hover:text-[#FDF8EC]'
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>

            <div className="flex-shrink-0 p-6 pt-6 pb-8 border-t border-[#FDF8EC]/10">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-[#997F6C] text-[#FDF8EC] py-4 rounded-2xl text-center font-bold text-base sm:text-lg flex items-center justify-center gap-3"
              >
                Start a Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <div className="mt-6 flex justify-center gap-6">
                <a href="https://www.instagram.com/codexstudio2026/" target="_blank" rel="noopener noreferrer" className="text-[#FDF8EC]/40 text-sm font-bold tracking-widest hover:text-[#997F6C] transition-colors" aria-label="Instagram">IG</a>
                <a href="https://www.facebook.com/profile.php?id=61582748907285" target="_blank" rel="noopener noreferrer" className="text-[#FDF8EC]/40 text-sm font-bold tracking-widest hover:text-[#997F6C] transition-colors" aria-label="Facebook">FB</a>
                <a href="https://linkedin.com/company/codexstudio" target="_blank" rel="noopener noreferrer" className="text-[#FDF8EC]/40 text-sm font-bold tracking-widest hover:text-[#997F6C] transition-colors" aria-label="LinkedIn">LI</a>
                <a href="https://github.com/codexstudio" target="_blank" rel="noopener noreferrer" className="text-[#FDF8EC]/40 text-sm font-bold tracking-widest hover:text-[#997F6C] transition-colors" aria-label="GitHub">GH</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
