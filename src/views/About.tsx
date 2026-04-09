'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import Link from 'next/link';
import {
  Target,
  Eye,
  Heart,
  Sparkles,
  GraduationCap,
  MapPin,
  Code2,
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react';
import { CTA } from '../components/CTA';

const values = [
  {
    title: 'Innovation',
    desc: 'Pushing what is possible on the web—without chasing trends that do not serve your business.',
    icon: Target,
  },
  {
    title: 'Creativity',
    desc: 'Interfaces and experiences that feel intentional: typography, motion, and clarity in every detail.',
    icon: Heart,
  },
  {
    title: 'Transparency',
    desc: 'Straight timelines, honest scope, and clear communication from discovery to launch.',
    icon: Eye,
  },
  {
    title: 'Quality',
    desc: 'Performance, accessibility, and maintainable code—so your product stays fast as it grows.',
    icon: Sparkles,
  },
];

const expertise = [
  'Next.js & React',
  'Node.js & Express',
  'REST APIs & JWT',
  'MongoDB & database design',
  'Tailwind CSS & UI systems',
  'WordPress & Elementor',
  'Deployment & hosting',
];

const stats = [
  { label: 'Years building', value: '10+' },
  { label: 'Lead on your build', value: '1' },
  { label: 'Regions served', value: 'Global' },
];

export const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#FDF8EC]"
    >
      {/* —— Split hero —— */}
      <header className="relative overflow-hidden lg:min-h-[min(92vh,900px)]">
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#FDF8EC_0%,#FDF8EC_45%,#E8E2D2_100%)]"
          aria-hidden
        />
        <div className="pointer-events-none absolute -right-20 top-1/4 h-[min(70vw,520px)] w-[min(70vw,520px)] rounded-full border border-[#2F281D]/[0.07]" aria-hidden />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-[#2F281D]/10" aria-hidden />

        <div className="relative mx-auto grid max-w-[1600px] lg:grid-cols-2 lg:items-stretch">
          <div className="flex flex-col justify-center px-6 pb-16 pt-28 lg:px-12 lg:pb-24 lg:pl-16 lg:pr-10 lg:pt-32 xl:pl-24">
            <motion.p
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-6 font-mono text-[11px] font-bold uppercase tracking-[0.35em] text-[#997F6C]"
            >
              About · CodexStudio
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04 }}
              className="font-display text-[clamp(2.25rem,5vw,4.25rem)] font-bold leading-[0.98] tracking-tight text-[#2F281D]"
            >
              Founder-led
              <br />
              <span className="text-[#997F6C]">full-stack</span>
              <br />
              studio.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-8 max-w-md text-base leading-relaxed text-[#2F281D]/65 md:text-lg"
            >
              <strong className="font-semibold text-[#2F281D]/90">Saif Ali</strong> is Founder &amp; CEO—shipping Next.js
              and Node.js products, APIs, and high-performance marketing sites for clients worldwide from{' '}
              <strong className="font-semibold text-[#2F281D]/90">Islamabad, Pakistan</strong>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2F281D] px-8 py-4 text-sm font-bold text-[#FDF8EC] transition hover:bg-[#997F6C]"
              >
                Start a project
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#2F281D]/15 bg-[#FDF8EC]/60 px-8 py-4 text-sm font-bold text-[#2F281D] backdrop-blur-sm transition hover:border-[#997F6C]/40 hover:text-[#997F6C]"
              >
                View work
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.22 }}
              className="mt-12 flex flex-col gap-3 border-t border-[#2F281D]/10 pt-10 text-sm text-[#2F281D]/60"
            >
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-[#997F6C]" aria-hidden />
                Islamabad, Pakistan
              </li>
              <li className="flex items-center gap-3">
                <GraduationCap className="h-4 w-4 shrink-0 text-[#997F6C]" aria-hidden />
                B.Sc. Computer Science — HITEC University
              </li>
              <li className="flex items-center gap-3">
                <Code2 className="h-4 w-4 shrink-0 text-[#997F6C]" aria-hidden />
                Building on the web since 2016
              </li>
            </motion.ul>
          </div>

          <div className="relative min-h-[320px] lg:min-h-0">
            <div className="absolute inset-0 lg:left-8 lg:right-0">
              <div className="relative h-full min-h-[380px] overflow-hidden rounded-tl-[clamp(2rem,8vw,4rem)] border-t border-l border-[#2F281D]/10 bg-[#2F281D] shadow-2xl shadow-[#2F281D]/20 lg:min-h-full lg:rounded-none lg:rounded-bl-[clamp(2.5rem,10vw,5rem)] lg:border-0">
                <Image
                  src="/images/unnamed.jpg"
                  alt="Saif Ali — Founder and CEO of CodexStudio, full-stack web developer in Islamabad, Pakistan"
                  fill
                  className="object-cover object-[center_20%] opacity-95"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2F281D] via-[#2F281D]/20 to-transparent lg:bg-gradient-to-l lg:from-[#2F281D]/90 lg:via-transparent lg:to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:bottom-12 lg:left-12 lg:right-auto lg:max-w-sm">
                  <p className="font-display text-2xl font-bold leading-tight text-[#FDF8EC] md:text-3xl">
                    One lead.
                    <br />
                    <span className="text-[#997F6C]">End-to-end</span> delivery.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#FDF8EC]/70">
                    Strategy, build, and launch—without hand-offs through a large agency floor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* —— Cred strip —— */}
      <div className="border-y border-[#2F281D]/10 bg-[#2F281D] px-6 py-5 text-[#FDF8EC]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 text-center text-xs font-bold uppercase tracking-[0.2em] text-[#FDF8EC]/75 md:justify-between md:text-left">
          <span>CodexStudio · 2026</span>
          <span className="hidden h-4 w-px bg-[#FDF8EC]/20 md:block" aria-hidden />
          <span>Next.js · Node · MongoDB</span>
          <span className="hidden h-4 w-px bg-[#FDF8EC]/20 md:block" aria-hidden />
          <span>Founder-led · Islamabad</span>
        </div>
      </div>

      {/* —— Bento story —— */}
      <section id="story" aria-labelledby="about-story-heading" className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-12 md:gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-[#2F281D]/10 bg-[#FDF8EC] p-8 shadow-sm md:col-span-7 md:p-10 lg:p-12"
          >
            <h2
              id="about-story-heading"
              className="font-display text-3xl font-bold leading-tight text-[#2F281D] md:text-4xl lg:text-5xl"
            >
              Clarity, speed, and work that{' '}
              <span className="underline decoration-[#997F6C]/40 decoration-2 underline-offset-8">lasts</span>.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-[#2F281D]/65 md:text-lg">
              <p>
                CodexStudio launched in <strong className="font-semibold text-[#2F281D]/85">2026</strong> with a single
                focus: reliable full-stack delivery—dashboards, APIs, marketing sites, and product UI—without sacrificing
                craft. You work directly with the founder, so decisions stay fast and accountability stays visible.
              </p>
              <p>
                The default stack is modern: <strong className="font-semibold text-[#2F281D]/85">Next.js</strong>,{' '}
                <strong className="font-semibold text-[#2F281D]/85">Node.js</strong>, thoughtful{' '}
                <strong className="font-semibold text-[#2F281D]/85">MongoDB</strong> modeling, JWT-backed auth when
                needed, and WordPress or managed hosting when that is the right fit.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#997F6C] underline decoration-[#997F6C]/35 underline-offset-4 hover:decoration-[#997F6C]"
              >
                See the portfolio
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#2F281D]/50 underline decoration-[#2F281D]/20 underline-offset-4 hover:text-[#2F281D] hover:decoration-[#2F281D]/40"
              >
                Explore services
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="flex flex-col gap-4 md:col-span-5"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-1 flex-col justify-center rounded-[2rem] border border-[#2F281D]/10 bg-[#E8E2D2]/40 px-8 py-7"
              >
                <p className="font-display text-4xl font-bold text-[#2F281D] md:text-5xl">{s.value}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-[#2F281D]/45">{s.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[2rem] border border-[#2F281D]/10 md:col-span-5"
          >
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[280px]">
              <Image
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=900"
                alt="Web development workspace — design and engineering focus at CodexStudio"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="rounded-[2rem] border border-[#2F281D]/10 bg-[#2F281D] p-8 text-[#FDF8EC] md:col-span-7 md:p-10"
          >
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-[#997F6C]">Stack &amp; scope</p>
            <p className="mt-4 text-lg leading-relaxed text-[#FDF8EC]/75">
              From marketing sites to authenticated dashboards and APIs—scoped honestly, built to perform.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {expertise.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-[#FDF8EC]/10 bg-[#FDF8EC]/5 px-4 py-3 text-sm font-medium text-[#FDF8EC]/90"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#997F6C]" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* —— Founder narrative —— */}
      <section
        id="founder"
        aria-labelledby="founder-heading"
        className="border-t border-[#2F281D]/10 bg-[#E8E2D2]/25 px-6 py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2.5rem] border border-[#2F281D]/10 bg-[#FDF8EC] shadow-xl shadow-[#2F281D]/[0.06]">
            <div className="grid lg:grid-cols-5">
              <div className="relative min-h-[280px] lg:col-span-2 lg:min-h-[420px]">
                <Image
                  src="/images/unnamed.jpg"
                  alt="Saif Ali — Founder and CEO of CodexStudio"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2F281D]/40 to-transparent lg:bg-gradient-to-r" />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12 lg:col-span-3 lg:p-14">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-[#997F6C]">
                  Founder &amp; CEO
                </p>
                <h2 id="founder-heading" className="mt-3 font-display text-3xl font-bold text-[#2F281D] md:text-4xl">
                  Saif Ali
                </h2>
                <p className="mt-6 text-base leading-relaxed text-[#2F281D]/65 md:text-lg">
                  I lead CodexStudio end to end: architecture, implementation, and launch. That means fewer layers between
                  your goals and the code—whether you need a marketing site, a secure admin dashboard, or APIs that scale
                  with your product.
                </p>
                <blockquote className="mt-8 border-l-2 border-[#997F6C] pl-6 font-display text-xl italic leading-snug text-[#2F281D]/90 md:text-2xl">
                  &ldquo;Ship work that looks exceptional and holds up under traffic, security review, and time.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* —— Values rail —— */}
      <section id="values" aria-labelledby="values-heading" className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <h2 id="values-heading" className="font-display text-3xl font-bold text-[#2F281D] md:text-5xl">
              What you can expect
            </h2>
            <p className="mt-4 text-lg text-[#2F281D]/60">
              Principles behind every engagement—from a single landing page to a long-term product partnership.
            </p>
          </div>

          <div className="space-y-0 divide-y divide-[#2F281D]/10 border-y border-[#2F281D]/10">
            {values.map((value, i) => (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="grid gap-6 py-10 md:grid-cols-12 md:items-center md:gap-8 md:py-12"
              >
                <div className="flex items-center gap-5 md:col-span-3">
                  <span className="font-display text-4xl font-bold tabular-nums text-[#2F281D]/20 md:text-5xl">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#E8E2D2]/80 text-[#2F281D]">
                    <value.icon className="h-7 w-7" aria-hidden />
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-[#2F281D] md:col-span-3 md:text-2xl">{value.title}</h3>
                <p className="text-base leading-relaxed text-[#2F281D]/60 md:col-span-6 md:text-lg">{value.desc}</p>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 md:justify-start">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#2F281D] px-8 py-4 text-sm font-bold text-[#FDF8EC] transition hover:bg-[#997F6C]"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#997F6C] underline decoration-[#997F6C]/35 underline-offset-4 hover:decoration-[#997F6C]"
            >
              Browse portfolio
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </motion.div>
  );
};
