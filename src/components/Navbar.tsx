'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '../utils/cn';
import { BracketLink } from './BracketLink';
import { Logo } from './Logo';
import { BRAND_PHONE, BRAND_CITY } from '@/lib/seo';
import { SERVICE_SLUGS, SERVICES_DATA } from '@/lib/servicesData';

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
const SERVICE_NAV_NAMES: Record<(typeof SERVICE_SLUGS)[number], string> = {
  'web-development': 'Web Development',
  'nextjs-development': 'Next.js Development',
  'ecommerce-development': 'E-Commerce Development',
  'ui-ux-design': 'UI/UX Design',
  'seo-optimization': 'SEO Optimization',
  'mobile-app-development': 'Mobile App Development',
  'brand-identity-design': 'Brand Identity Design',
};
const serviceLinks = SERVICE_SLUGS.map((slug) => ({
  name: SERVICE_NAV_NAMES[slug],
  tagline: SERVICES_DATA[slug].shortDesc,
  path: `/services/${slug}`,
}));

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
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
        isScrolled ? 'bg-paper/85 backdrop-blur-md py-3 border-b border-ink/10' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group" aria-label="CodexStudio home">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          <span className="hidden xl:inline font-mono text-xs text-ink/50">
            {BRAND_PHONE} · {BRAND_CITY}, PK
          </span>
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
            >
              {link.name === 'Services' ? (
                <div className="relative group">
                  <Link
                    href={link.path}
                    className={cn(
                      'text-sm font-medium transition-colors hover:text-gold',
                      pathname.startsWith('/services') ? 'text-ink font-bold' : 'text-ink/60'
                    )}
                  >
                    Services
                  </Link>
                  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute top-full left-0 mt-3 w-80 rounded-lg border border-ink/10 bg-paper shadow-xl p-2 transition-all">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.path}
                        href={service.path}
                        className="block rounded-md px-3 py-2 hover:bg-ink/5"
                      >
                        <span className="block text-sm font-semibold text-ink">{service.name}</span>
                        <span className="block text-xs text-ink/60 mt-0.5">{service.tagline}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={link.path}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-gold relative group/link',
                    pathname === link.path ? 'text-ink font-bold' : 'text-ink/60'
                  )}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover/link:w-full" />
                </Link>
              )}
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: navLinks.length * 0.06 }}
          >
            <BracketLink href="/contact" variant="solid">
              Start a project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </BracketLink>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="md:hidden w-12 h-12 flex items-center justify-center text-ink rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
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
            className="fixed inset-0 z-[60] bg-ink flex flex-col md:hidden"
          >
            <div className="flex items-center justify-between p-6 pb-4 flex-shrink-0">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
                <Logo dark />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-12 h-12 rounded-full border border-paper/10 flex items-center justify-center text-paper shrink-0"
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
                    {link.name === 'Services' ? (
                      <div className="border-b border-paper/5">
                        <div className="flex items-center justify-between">
                          <Link
                            href={link.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={cn(
                              'flex items-center gap-3 py-3 text-[1.15rem] sm:text-[1.35rem] leading-tight tracking-tight font-display font-semibold transition-colors',
                              pathname.startsWith('/services') ? 'text-gold' : 'text-paper/90 hover:text-paper'
                            )}
                          >
                            <span className="font-mono text-xs text-paper/30">
                              {String(i + 1).padStart(2, '0')}
                            </span>
                            Services
                          </Link>
                          <button
                            type="button"
                            onClick={() => setIsMobileServicesOpen((open) => !open)}
                            aria-label={isMobileServicesOpen ? 'Collapse services list' : 'Expand services list'}
                            aria-expanded={isMobileServicesOpen}
                            className="p-3 text-paper/70"
                          >
                            <ChevronDown
                              className={cn('w-5 h-5 transition-transform', isMobileServicesOpen && 'rotate-180')}
                              aria-hidden
                            />
                          </button>
                        </div>
                        <AnimatePresence>
                          {isMobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <ul className="pb-3 pl-8 space-y-1">
                                {serviceLinks.map((service) => (
                                  <li key={service.path}>
                                    <Link
                                      href={service.path}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="block py-2 text-sm font-medium text-paper/70 hover:text-paper"
                                    >
                                      {service.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          'flex items-center gap-3 py-3 text-[1.15rem] sm:text-[1.35rem] leading-tight tracking-tight font-display font-semibold transition-colors border-b border-paper/5 last:border-0',
                          pathname === link.path ? 'text-gold' : 'text-paper/90 hover:text-paper'
                        )}
                      >
                        <span className="font-mono text-xs text-paper/30">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                </li>
              ))}
            </ul>

            <div className="flex-shrink-0 p-6 pt-6 pb-8 border-t border-paper/10">
              <BracketLink
                href="/contact"
                variant="invert"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 text-base sm:text-lg"
              >
                Start a project
                <ArrowRight className="w-5 h-5" />
              </BracketLink>
              <div className="mt-6 flex justify-center gap-6">
                <a href="https://www.instagram.com/codexstudio2026/" target="_blank" rel="noopener noreferrer" className="text-paper/40 text-sm font-bold tracking-widest hover:text-gold transition-colors" aria-label="Instagram">IG</a>
                <a href="https://www.facebook.com/profile.php?id=61582748907285" target="_blank" rel="noopener noreferrer" className="text-paper/40 text-sm font-bold tracking-widest hover:text-gold transition-colors" aria-label="Facebook">FB</a>
                <a href="https://linkedin.com/company/codexstudio" target="_blank" rel="noopener noreferrer" className="text-paper/40 text-sm font-bold tracking-widest hover:text-gold transition-colors" aria-label="LinkedIn">LI</a>
                <a href="https://github.com/codexstudio" target="_blank" rel="noopener noreferrer" className="text-paper/40 text-sm font-bold tracking-widest hover:text-gold transition-colors" aria-label="GitHub">GH</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
