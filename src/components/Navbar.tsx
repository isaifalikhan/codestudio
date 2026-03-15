'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '../utils/cn';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
  { name: 'Team', path: '/team' },
  { name: 'Contact', path: '/contact' },
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
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
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
                  layoutId={pathname === link.path ? "nav-underline" : undefined}
                />
              </Link>
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
          className="md:hidden text-[#2F281D]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
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
            className="fixed inset-0 z-[60] bg-[#2F281D] p-8 flex flex-col md:hidden"
          >
            <div className="flex items-center justify-between mb-12">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
                <div className="w-10 h-10 bg-[#FDF8EC] rounded-lg flex items-center justify-center font-bold text-xl text-[#2F281D]">
                  C
                </div>
                <span className="text-2xl font-display font-bold tracking-tighter text-[#FDF8EC]">
                  CODEX<span className="text-[#997F6C]">STUDIO</span>
                </span>
              </Link>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-12 h-12 rounded-full border border-[#FDF8EC]/10 flex items-center justify-center text-[#FDF8EC]"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'text-4xl font-display font-bold transition-colors',
                      pathname === link.path ? 'text-[#997F6C]' : 'text-[#FDF8EC]/60'
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pt-12 border-t border-[#FDF8EC]/10">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-[#997F6C] text-[#FDF8EC] py-5 rounded-2xl text-center font-bold text-lg flex items-center justify-center gap-3"
              >
                Start a Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <div className="mt-8 flex justify-center gap-6">
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
