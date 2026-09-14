'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, MessageCircle } from 'lucide-react';
import { cn } from '../../utils/cn';
import { BRAND, WHATSAPP_LINK } from '@/lib/quranAcademyData';

const LINKS: { label: string; href: string; absolute?: boolean }[] = [
  { label: 'Courses', href: '#courses' },
  { label: 'Why us', href: '#why-us' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Teachers', href: '#teachers' },
  { label: 'Fees', href: '#fees' },
  { label: 'Guides', href: '/quran-academy/articles', absolute: true },
  { label: 'FAQ', href: '#faq' },
];

/** Anchors are relative to the hub page; real paths are used as they are. */
const linkHref = (link: (typeof LINKS)[number], prefix: string) =>
  link.absolute ? link.href : `${prefix}${link.href}`;

/** Brand mark: an open Mushaf on a stand, drawn rather than imported so it
 *  inherits the scope palette and stays crisp at any size. */
const Mark = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" aria-hidden className={className} fill="none">
    <path
      d="M24 14c-4-3-9-4-14-4v24c5 0 10 1 14 4 4-3 9-4 14-4V10c-5 0-10 1-14 4Z"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    <path d="M24 14v24" stroke="currentColor" strokeWidth="2.2" />
    <path
      d="M10 38 24 44l14-6"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    <circle cx="24" cy="7" r="3" stroke="currentColor" strokeWidth="2" />
  </svg>
);

/**
 * @param hrefPrefix  Country pages pass "/quran-academy" so the section links
 *                    point back at the main page's anchors instead of at
 *                    sections that do not exist on a country page.
 */
export const AcademyHeader = ({ hrefPrefix = '' }: { hrefPrefix?: string }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock the page behind the mobile sheet so the body does not scroll under it.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-paper/85 backdrop-blur-xl border-b border-ink/10 shadow-lift-sm py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link href="/quran-academy" className="group flex items-center gap-3" aria-label={`${BRAND.name} home`}>
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-pine text-paper shadow-lift-sm transition-colors group-hover:bg-gold">
            <Mark className="h-6 w-6" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold tracking-tight text-ink">
              {BRAND.shortName}
            </span>
            <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-mist">
              Online Quran Classes
            </span>
          </span>
        </Link>

        <nav aria-label="Academy navigation" className="hidden items-center gap-7 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={linkHref(link, hrefPrefix)}
              className="group relative text-sm font-semibold text-ink/70 transition-colors hover:text-pine"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-ink/15 px-4 py-2.5 text-sm font-bold text-ink transition-colors hover:border-pine/50 hover:text-pine"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            WhatsApp
          </a>
          <a
            href="#enrol"
            className="rounded-xl bg-pine px-5 py-2.5 text-sm font-bold text-paper shadow-lift transition-all hover:-translate-y-0.5 hover:bg-gold"
          >
            Free trial class
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="academy-mobile-menu"
          className="flex h-12 w-12 items-center justify-center rounded-xl text-ink lg:hidden"
        >
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </div>

      {open && (
        <div
          id="academy-mobile-menu"
          className="fixed inset-0 top-0 z-[60] flex flex-col bg-ink text-paper lg:hidden"
        >
          <div className="flex items-center justify-between px-6 py-5">
            <span className="font-display text-lg font-bold">{BRAND.shortName}</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-paper/15"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>
          <ul className="flex-1 overflow-y-auto px-6">
            {LINKS.map((link, i) => (
              <li key={link.href} className="border-b border-paper/10">
                <a
                  href={linkHref(link, hrefPrefix)}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-4 py-4 font-display text-2xl font-semibold"
                >
                  <span className="font-mono text-xs text-paper/40">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="space-y-3 border-t border-paper/10 px-6 py-6">
            <a
              href="#enrol"
              onClick={() => setOpen(false)}
              className="block rounded-xl bg-gold py-4 text-center font-bold text-ink"
            >
              Book a free trial class
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-paper/25 py-4 text-center font-bold"
            >
              Message us on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
