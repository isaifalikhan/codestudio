'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Award,
  BookMarked,
  BookOpen,
  Brain,
  Check,
  Clock,
  CreditCard,
  Globe,
  Landmark,
  Languages,
  MapPin,
  MessageCircle,
  Mic,
  MoonStar,
  Plus,
  ScrollText,
  Star,
  Users,
} from 'lucide-react';
import { AcademyHeader } from '../components/academy/AcademyHeader';
import { AcademyFooter } from '../components/academy/AcademyFooter';
import { TrialForm } from '../components/academy/TrialForm';
import {
  ACADEMY_PATH,
  BRAND,
  COURSES,
  PLANS,
  PRICING_NOTES,
  WHATSAPP_LINK,
  type CourseIcon,
} from '@/lib/quranAcademyData';
import { otherCountries, type CountryPage } from '@/lib/quranAcademyCountries';

const COURSE_ICONS: Record<CourseIcon, typeof BookOpen> = {
  qaida: BookOpen,
  recitation: BookMarked,
  tajweed: Mic,
  hifz: Brain,
  tafseer: ScrollText,
  islamic: Landmark,
  salah: MoonStar,
  arabic: Languages,
  ijazah: Award,
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-70px' },
  transition: { duration: 0.45 },
};

export const QuranAcademyCountry = ({ page }: { page: CountryPage }) => {
  const siblings = otherCountries(page.slug);
  const fromPrice = Math.min(...PLANS.map((plan) => plan.price));

  return (
    <div className="theme-academy min-h-screen bg-paper font-sans text-ink">
      <AcademyHeader hrefPrefix={ACADEMY_PATH} />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 pb-20 pt-36 md:pt-44">
        <div className="pattern-star pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden />
        <div
          className="pointer-events-none absolute -left-40 -top-32 h-[28rem] w-[28rem] rounded-full bg-pine/10 blur-[120px]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl">
          {/* Breadcrumb — also the main internal link back to the hub page. */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-ink/60">
              <li>
                <Link href={ACADEMY_PATH} className="font-semibold hover:text-pine">
                  {BRAND.shortName}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-ink">Quran classes in {page.country}</li>
            </ol>
          </nav>

          <div className="grid items-start gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-pine/25 bg-pine/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-pine">
                <MapPin className="h-3.5 w-3.5" aria-hidden />
                {page.region}
              </span>

              <h1 className="mt-7 font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl">
                Online Quran classes in{' '}
                <span className="italic text-gold">{page.country}</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
                One-to-one live Quran classes for {page.adjective} families — Noorani Qaida,
                Tajweed, Hifz, Tafseer, Islamic studies and Arabic, taught by certified male and
                female teachers in {page.timezone}.
              </p>

              <p className="mt-5 max-w-xl leading-relaxed text-ink/70">{page.intro}</p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#enrol"
                  className="rounded-xl bg-pine px-7 py-4 font-bold text-paper shadow-lift transition-all hover:-translate-y-0.5 hover:bg-gold"
                >
                  Book {BRAND.trialClasses} free classes
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-ink/15 px-7 py-4 font-bold text-ink transition-all hover:-translate-y-0.5 hover:border-pine hover:text-pine"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  WhatsApp us
                </a>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink/60">
                <span className="flex items-center gap-2">
                  <span className="flex" aria-hidden>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </span>
                  {BRAND.studentsTaught} families taught
                </span>
                <span className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-pine" aria-hidden />
                  Male and female teachers
                </span>
              </div>
            </div>

            {/* Local facts panel — the block search engines and assistants lift. */}
            <div id="local-facts" className="rounded-2xl border border-ink/10 bg-paper-dim p-8 shadow-lift-sm">
              <h2 className="font-display text-xl font-bold text-ink">
                Quran classes in {page.country}: the details
              </h2>
              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.16em] text-mist">
                    Time zone
                  </dt>
                  <dd className="mt-1 font-medium text-ink">{page.timezone}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.16em] text-mist">
                    Popular class times
                  </dt>
                  <dd className="mt-2">
                    <ul className="space-y-2">
                      {page.slots.map((slot) => (
                        <li key={slot} className="flex items-start gap-2 text-sm text-ink/80">
                          <Clock className="mt-0.5 h-4 w-4 shrink-0 text-pine" aria-hidden />
                          {slot}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.16em] text-mist">
                    Students across
                  </dt>
                  <dd className="mt-1 font-medium text-ink">{page.cities.join(' · ')}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.16em] text-mist">
                    Teaching languages
                  </dt>
                  <dd className="mt-1 font-medium text-ink">
                    {page.communityLanguages.join(', ')}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.16em] text-mist">
                    Fees and payment
                  </dt>
                  <dd className="mt-1 flex items-start gap-2 font-medium text-ink">
                    <CreditCard className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden />
                    <span>
                      From ${fromPrice} per student per month ({page.currency.code}{' '}
                      {page.currency.symbol} accepted). {page.currency.note}
                    </span>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.16em] text-mist">
                    Free trial
                  </dt>
                  <dd className="mt-1 font-medium text-ink">
                    {BRAND.trialClasses} classes, no card details required
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why local families choose us ─────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink px-6 py-16 text-paper">
        <div className="pattern-star-light absolute inset-0 opacity-[0.07]" aria-hidden />
        <div className="relative mx-auto max-w-7xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Built around the {page.adjective} week
          </h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {page.highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-2xl border border-paper/15 bg-paper/5 p-6 leading-relaxed text-paper/85"
              >
                <Check className="mb-4 h-5 w-5 text-gold-light" aria-hidden />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Courses ──────────────────────────────────────────────────── */}
      <section id="country-courses" className="scroll-mt-24 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeUp} className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Courses available in {page.country}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/70">
              The full syllabus is open to every student, whichever course you start with. Each one
              is taught one-to-one and paced to the individual child or adult.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {COURSES.map((course) => {
              const Icon = COURSE_ICONS[course.icon];
              return (
                <div
                  key={course.slug}
                  className="flex items-start gap-4 rounded-2xl border border-ink/10 bg-paper p-6 transition-colors hover:border-pine/30"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-pine/10 text-pine">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink">{course.title}</h3>
                    <p className="mt-1 text-sm text-mist">
                      {course.level} · {course.duration}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink/70">{course.blurb}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <Link
            href={`${ACADEMY_PATH}#courses`}
            className="mt-10 inline-flex items-center gap-2 font-bold text-pine transition-colors hover:text-gold"
          >
            See the full syllabus and learning outcomes
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>

      {/* ── Fees ─────────────────────────────────────────────────────── */}
      <section id="country-fees" className="relative scroll-mt-24 overflow-hidden bg-paper-dim px-6 py-20">
        <div className="pattern-star pointer-events-none absolute inset-0 opacity-[0.04]" aria-hidden />
        <div className="relative mx-auto max-w-7xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Fees for {page.adjective} families
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/70">
            Quoted per student, per month. {page.currency.note} No registration fee, no contract.
          </p>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={
                  plan.featured
                    ? 'rounded-2xl border-2 border-gold bg-paper p-7'
                    : 'rounded-2xl border border-ink/10 bg-paper p-7'
                }
              >
                <h3 className="font-display text-lg font-bold text-ink">{plan.name}</h3>
                <p className="mt-1 text-sm text-mist">{plan.bestFor}</p>
                <p className="mt-5 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold text-ink">${plan.price}</span>
                  <span className="text-sm font-semibold text-mist">/ month</span>
                </p>
                <p className="mt-2 text-sm font-bold text-pine">
                  {plan.classesPerWeek} · {plan.monthlyClasses}
                </p>
                <a
                  href="#enrol"
                  className={
                    plan.featured
                      ? 'mt-6 block rounded-xl bg-pine py-3.5 text-center font-bold text-paper transition-colors hover:bg-gold'
                      : 'mt-6 block rounded-xl border border-ink/15 py-3.5 text-center font-bold text-ink transition-colors hover:border-pine hover:text-pine'
                  }
                >
                  Start free
                </a>
              </div>
            ))}
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {PRICING_NOTES.map((note) => (
              <li key={note} className="flex items-start gap-3 text-sm text-ink/65">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-pine" aria-hidden />
                {note}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Local FAQ ────────────────────────────────────────────────── */}
      <section id="country-faq" className="scroll-mt-24 px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Questions from {page.adjective} families
          </h2>

          <ul className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
            {page.faqs.map((faq) => (
              <li key={faq.q} className="py-7">
                <h3 className="flex items-start gap-3 font-display text-lg font-bold text-ink">
                  <Plus className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden />
                  {faq.q}
                </h3>
                <p className="mt-3 pl-7 leading-relaxed text-ink/70">{faq.a}</p>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-center text-ink/70">
            More answers on the{' '}
            <Link
              href={`${ACADEMY_PATH}#faq`}
              className="font-bold text-pine underline decoration-gold/50 underline-offset-4 hover:text-gold"
            >
              main academy FAQ
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── Enrolment ────────────────────────────────────────────────── */}
      <section id="enrol" className="relative scroll-mt-24 overflow-hidden bg-ink px-6 py-20 text-paper">
        <div className="pattern-star-light pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-gold-light">
              Free trial
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Start this week in {page.country}
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-paper/75">
              Tell us the student&apos;s age and the times that suit you, and we will confirm a
              teacher and your slots in {page.timezone} within 24 hours.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                `${BRAND.trialClasses} free classes, no card details`,
                'Male or female teacher, your choice',
                `Scheduled in your own local time`,
                `Fees payable in ${page.currency.code}`,
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-paper/85">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-gold-light" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 flex max-w-md items-center gap-3 rounded-xl border border-paper/15 bg-paper/5 px-5 py-4 font-semibold transition-colors hover:border-gold/50 hover:text-gold-light"
            >
              <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
              Prefer to chat? WhatsApp {BRAND.phone}
            </a>
          </div>

          <div className="rounded-2xl bg-paper p-7 text-ink shadow-lift-lg sm:p-9">
            <h3 className="font-display text-2xl font-bold">Free trial registration</h3>
            <p className="mt-2 text-sm text-ink/60">
              Mention your city and preferred times and we will match a teacher to them.
            </p>
            <div className="mt-6">
              <TrialForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Other countries ──────────────────────────────────────────── */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="flex items-center gap-3 font-display text-xl font-bold text-ink">
            <Globe className="h-5 w-5 text-pine" aria-hidden />
            We also teach families in
          </h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {siblings.map((sibling) => (
              <li key={sibling.slug}>
                <Link
                  href={`${ACADEMY_PATH}/${sibling.slug}`}
                  className="inline-block rounded-full border border-ink/15 px-4 py-2 text-sm font-semibold text-ink/75 transition-colors hover:border-pine hover:text-pine"
                >
                  Quran classes in {sibling.country}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <AcademyFooter />
    </div>
  );
};
