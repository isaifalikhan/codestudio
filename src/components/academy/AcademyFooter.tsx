'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MessageCircle, Facebook, Instagram, Youtube } from 'lucide-react';
import { BRAND, COURSES, WHATSAPP_LINK } from '@/lib/quranAcademyData';

const SOCIALS = [
  { href: BRAND.social.facebook, label: 'Facebook', Icon: Facebook },
  { href: BRAND.social.instagram, label: 'Instagram', Icon: Instagram },
  { href: BRAND.social.youtube, label: 'YouTube', Icon: Youtube },
];

export const AcademyFooter = () => (
  <footer className="relative overflow-hidden border-t border-gold/20 bg-ink px-6 pb-10 pt-20 text-paper">
    <div className="pattern-star-light pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden />

    <div className="relative mx-auto max-w-7xl">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <p className="font-display text-2xl font-bold">{BRAND.shortName}</p>
          <p lang="ar" className="arabic mt-1 text-xl text-gold-light">{BRAND.arabicName}</p>
          <p className="mt-5 max-w-xs leading-relaxed text-paper/70">
            One-to-one live Quran classes for children and adults, taught by certified male and
            female teachers since {BRAND.foundedYear}.
          </p>
          <ul className="mt-6 flex gap-3">
            {SOCIALS.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${BRAND.shortName} on ${label}`}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-paper/15 bg-paper/5 transition-colors hover:bg-gold hover:text-ink"
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-gold">Courses</h2>
          <ul className="space-y-3">
            {COURSES.slice(0, 6).map((course) => (
              <li key={course.slug}>
                <a href="#courses" className="text-paper/70 transition-colors hover:text-gold">
                  {course.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-gold">Academy</h2>
          <ul className="space-y-3">
            {[
              { label: 'Why choose us', href: '#why-us' },
              { label: 'How it works', href: '#how-it-works' },
              { label: 'Our teachers', href: '#teachers' },
              { label: 'Fees and plans', href: '#fees' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Book a free trial', href: '#enrol' },
            ].map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-paper/70 transition-colors hover:text-gold">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-gold">Contact</h2>
          <ul className="space-y-4">
            <li>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-paper/80 transition-colors hover:text-gold"
              >
                <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
                WhatsApp us
              </a>
            </li>
            <li>
              <a
                href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-paper/80 transition-colors hover:text-gold"
              >
                <Phone className="h-5 w-5 shrink-0" aria-hidden />
                {BRAND.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-3 break-words text-paper/80 transition-colors hover:text-gold"
              >
                <Mail className="h-5 w-5 shrink-0" aria-hidden />
                {BRAND.email}
              </a>
            </li>
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-paper/50">
            Classes available across {BRAND.regions.join(', ')}.
          </p>
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-4 border-t border-paper/10 pt-8 text-sm text-paper/50 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </p>
        <p>
          <Link href="/" className="transition-colors hover:text-gold">
            Website by CodexStudio
          </Link>
        </p>
      </div>
    </div>
  </footer>
);
