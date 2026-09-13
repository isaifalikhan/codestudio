'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  Award,
  BookMarked,
  BookOpen,
  Brain,
  Check,
  Clock,
  Globe,
  GraduationCap,
  Landmark,
  Languages,
  LineChart,
  MessageCircle,
  Mic,
  MoonStar,
  Quote,
  ScrollText,
  ShieldCheck,
  Star,
  UserCheck,
  Users,
  Video,
  Wallet,
} from 'lucide-react';
import { AcademyHeader } from '../components/academy/AcademyHeader';
import { AcademyFooter } from '../components/academy/AcademyFooter';
import { AcademyFaq } from '../components/academy/AcademyFaq';
import { TrialForm } from '../components/academy/TrialForm';
import {
  BRAND,
  COURSES,
  COVERAGE,
  FEATURES,
  PLANS,
  PRICING_NOTES,
  STEPS,
  TESTIMONIALS,
  TUTOR_CREDENTIALS,
  WHATSAPP_LINK,
  type CourseIcon,
  type FeatureIcon,
} from '@/lib/quranAcademyData';

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

const FEATURE_ICONS: Record<FeatureIcon, typeof BookOpen> = {
  oneToOne: UserCheck,
  tutors: GraduationCap,
  female: Users,
  clock: Clock,
  trial: Video,
  reports: LineChart,
  price: Wallet,
  guarantee: ShieldCheck,
};

const QUICK_FACTS = [
  { label: 'Class format', value: 'Private one-to-one live video classes' },
  { label: 'Courses', value: `${COURSES.length} courses, from Noorani Qaida to ijazah` },
  { label: 'Student ages', value: '4 years to adult, including new Muslims' },
  { label: 'Teachers', value: `${BRAND.tutors} certified huffaz and qurra, male and female` },
  { label: 'Class length', value: '30, 45 or 60 minutes' },
  { label: 'Platforms', value: 'Zoom, Skype or Google Meet' },
  { label: 'Languages of instruction', value: 'English, Arabic and Urdu' },
  { label: 'Timings', value: '24/7 slots in your own time zone' },
  {
    label: 'Fees',
    value: `From $${Math.min(...PLANS.map((plan) => plan.price))} per student per month, no registration fee`,
  },
  { label: 'Free trial', value: `${BRAND.trialClasses} classes, no card details required` },
  { label: 'Countries served', value: BRAND.regions.join(', ') },
  { label: 'Teaching since', value: String(BRAND.foundedYear) },
];

const STATS = [
  { value: BRAND.studentsTaught, label: 'Students taught' },
  { value: BRAND.tutors, label: 'Certified teachers' },
  { value: BRAND.countries, label: 'Countries served' },
  { value: `${BRAND.rating}/5`, label: 'Average parent rating' },
];

/** Section eyebrow: a small label between two fading rules. Centred by
 *  default; `align="left"` for the two-column blocks. */
const Eyebrow = ({
  children,
  align = 'center',
}: {
  children: React.ReactNode;
  align?: 'center' | 'left';
}) => (
  <span
    className={`arabesque flex w-full max-w-xs items-center gap-4 text-xs font-bold uppercase tracking-[0.22em] text-gold ${
      align === 'center' ? 'mx-auto' : 'mx-0'
    }`}
  >
    {children}
  </span>
);

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
};

export const QuranAcademy = () => {
  return (
    <div className="theme-academy min-h-screen bg-paper font-sans text-ink">
      <AcademyHeader />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 pb-24 pt-36 md:pt-44">
        <div className="pattern-star pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden />
        <div
          className="pointer-events-none absolute -left-40 -top-32 h-[30rem] w-[30rem] rounded-full bg-pine/10 blur-[120px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-32 top-40 h-[26rem] w-[26rem] rounded-full bg-gold/10 blur-[120px]"
          aria-hidden
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-pine/25 bg-pine/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-pine"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pine opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-pine" />
              </span>
              Now enrolling · {BRAND.trialClasses} free trial classes
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="mt-7 font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl"
            >
              Learn the Quran online,{' '}
              <span className="italic text-gold">with a teacher of your own</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70"
            >
              One-to-one live classes in Noorani Qaida, Tajweed, Hifz, Tafseer, Islamic studies and
              Arabic — for children, adults and new Muslims. Certified male and female teachers,
              your timings, anywhere in the world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <a
                href="#enrol"
                className="rounded-xl bg-pine px-7 py-4 font-bold text-paper shadow-lift transition-all hover:-translate-y-0.5 hover:bg-gold"
              >
                Book {BRAND.trialClasses} free classes
              </a>
              <a
                href="#courses"
                className="rounded-xl border border-ink/15 px-7 py-4 font-bold text-ink transition-all hover:-translate-y-0.5 hover:border-pine hover:text-pine"
              >
                Browse the courses
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.34 }}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-ink/60"
            >
              <span className="flex items-center gap-2">
                <span className="flex" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </span>
                <strong className="font-bold text-ink">{BRAND.rating}</strong> from{' '}
                {BRAND.studentsTaught} families
              </span>
              <span className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-pine" aria-hidden />
                {BRAND.regions.slice(0, 4).join(' · ')}
              </span>
            </motion.div>
          </div>

          {/* Mihrab panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="arch relative overflow-hidden bg-gradient-to-b from-pine to-ink p-8 pb-10 pt-20 text-paper shadow-lift-lg">
              <div className="pattern-star-light absolute inset-0 opacity-10" aria-hidden />
              <div className="relative text-center">
                <p lang="ar" className="arabic text-2xl text-gold-light">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
                <p lang="ar" className="arabic mt-6 text-xl leading-[2.2] text-paper">
                  وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ
                </p>
                <p className="mx-auto mt-5 max-w-xs text-sm leading-relaxed text-paper/70">
                  “And We have certainly made the Quran easy to remember. So is there any who will
                  take heed?”
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">
                  Al-Qamar 54:17
                </p>
              </div>

              <div className="relative mt-9 space-y-3">
                {[
                  { icon: Video, text: 'Live on Zoom, Skype or Google Meet' },
                  { icon: UserCheck, text: 'One student, one teacher, every class' },
                  { icon: Clock, text: 'Class slots open 24 hours a day' },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-3 rounded-xl border border-paper/15 bg-paper/5 px-4 py-3 text-sm backdrop-blur-sm"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-gold-light" aria-hidden />
                    {text}
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-ink/10 bg-paper px-5 py-4 shadow-lift sm:block">
              <p className="font-display text-2xl font-bold text-pine">{BRAND.trialClasses} free</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-mist">trial classes</p>
            </div>
            <div className="absolute -right-4 top-10 hidden rounded-2xl border border-ink/10 bg-paper px-5 py-4 shadow-lift sm:block">
              <p className="font-display text-2xl font-bold text-gold">Female</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-mist">teachers available</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats band ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink px-6 py-12 text-paper">
        <div className="pattern-star-light absolute inset-0 opacity-[0.07]" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-bold text-gold-light sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-paper/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Quick facts ──────────────────────────────────────────────
          A flat, labelled summary of the academy. Search engines and AI
          assistants quote this kind of block directly, so every fact a
          prospective parent asks about is stated once, in plain text. */}
      <section id="quick-facts" className="scroll-mt-24 border-b border-ink/10 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
            {BRAND.name} at a glance
          </h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-ink/70">
            {BRAND.name} is an online Quran academy teaching Noorani Qaida, Quran reading, Tajweed,
            Hifz, translation and tafseer, Islamic studies, Salah and duas, Arabic language and
            ijazah. Every class is a private one-to-one live video lesson with a certified male or
            female teacher, for students aged four to adult, anywhere in the world.
          </p>
          <dl className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {QUICK_FACTS.map((fact) => (
              <div key={fact.label} className="border-t border-ink/10 pt-4">
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-mist">
                  {fact.label}
                </dt>
                <dd className="mt-2 font-medium text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Courses ──────────────────────────────────────────────────── */}
      <section id="courses" className="scroll-mt-24 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <Eyebrow>Our courses</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl">
              Everything we teach online
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/70">
              Nine structured courses covering the whole journey — from a child who does not yet
              know the Arabic letters to an adult reciting the full Quran for ijazah.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {COURSES.map((course, i) => {
              const Icon = COURSE_ICONS[course.icon];
              return (
                <motion.article
                  key={course.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                  className="group flex flex-col rounded-2xl border border-ink/10 bg-paper p-7 transition-all hover:-translate-y-1 hover:border-pine/30 hover:shadow-lift"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pine/10 text-pine transition-colors group-hover:bg-pine group-hover:text-paper">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <span lang="ar" className="arabic text-lg text-gold">{course.arabic}</span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold text-ink">{course.title}</h3>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-ink/5 px-3 py-1 text-xs font-semibold text-ink/70">
                      {course.level}
                    </span>
                    <span className="rounded-full bg-ink/5 px-3 py-1 text-xs font-semibold text-ink/70">
                      {course.duration}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-ink/70">{course.blurb}</p>

                  <ul className="mt-5 space-y-2">
                    {course.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2 text-sm text-ink/80">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                        {outcome}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-mist">
                      {course.ages}
                    </span>
                    <a
                      href="#enrol"
                      className="text-sm font-bold text-pine transition-colors hover:text-gold"
                    >
                      Free trial →
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why us ───────────────────────────────────────────────────── */}
      <section id="why-us" className="relative scroll-mt-24 overflow-hidden bg-paper-dim px-6 py-24">
        <div className="pattern-star pointer-events-none absolute inset-0 opacity-[0.04]" aria-hidden />
        <div className="relative mx-auto max-w-7xl">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <Eyebrow>Why families choose us</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl">
              A real teacher, not a recorded app
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/70">
              Quran learning needs correction, patience and someone who notices when a child is
              struggling. That is what every class here is built around.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((feature, i) => {
              const Icon = FEATURE_ICONS[feature.icon];
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: (i % 4) * 0.07 }}
                  className="rounded-2xl border border-ink/10 bg-paper p-7"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/12 text-gold">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{feature.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────── */}
      <section id="how-it-works" className="scroll-mt-24 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl">
              From enquiry to first class in 24 hours
            </h2>
          </motion.div>

          <div className="relative mt-16">
            <div
              className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent lg:block"
              aria-hidden
            />
            <ol className="relative grid gap-10 lg:grid-cols-4">
              {STEPS.map((step, i) => (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/30 bg-paper font-display text-2xl font-bold text-gold shadow-lift-sm lg:mx-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold text-ink">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{step.body}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── Teachers ─────────────────────────────────────────────────── */}
      <section id="teachers" className="scroll-mt-24 px-6 pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <motion.div {...fadeUp} className="relative mx-auto w-full max-w-md">
            <div className="arch relative overflow-hidden bg-gradient-to-b from-ink to-pine-dark p-10 pt-20 text-center text-paper shadow-lift-lg">
              <div className="pattern-star-light absolute inset-0 opacity-10" aria-hidden />
              <div className="relative">
                <GraduationCap className="mx-auto h-12 w-12 text-gold-light" aria-hidden />
                <p lang="ar" className="arabic mt-6 text-2xl text-gold-light">
                  خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
                </p>
                <p className="mx-auto mt-5 max-w-xs text-sm leading-relaxed text-paper/75">
                  “The best of you are those who learn the Quran and teach it.”
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">
                  Sahih al-Bukhari
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp}>
            <Eyebrow align="left">Our teachers</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Taught by huffaz and qurra with ijazah
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/70">
              Every teacher is interviewed, tested on recitation and trained in teaching online
              before taking a single student. Sisters and young girls are taught by our female
              faculty, and parents are always welcome to sit in.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {TUTOR_CREDENTIALS.map((credential) => (
                <li key={credential} className="flex items-start gap-3 text-sm font-medium text-ink/80">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-pine" aria-hidden />
                  {credential}
                </li>
              ))}
            </ul>
            <a
              href="#enrol"
              className="mt-9 inline-block rounded-xl bg-ink px-7 py-4 font-bold text-paper shadow-lift transition-all hover:-translate-y-0.5 hover:bg-gold hover:text-ink"
            >
              Meet your teacher in a free class
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Fees ─────────────────────────────────────────────────────── */}
      <section
        id="fees"
        className="relative scroll-mt-24 overflow-hidden bg-paper-dim px-6 py-24"
      >
        <div className="pattern-star pointer-events-none absolute inset-0 opacity-[0.04]" aria-hidden />
        <div className="relative mx-auto max-w-7xl">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <Eyebrow>Fees and plans</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl">
              Simple monthly fees
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/70">
              Pay per student, per month. No registration fee, no contract, and you can pause or
              cancel whenever you need to.
            </p>
          </motion.div>

          <div className="mt-16 grid items-start gap-6 lg:grid-cols-3">
            {PLANS.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className={
                  plan.featured
                    ? 'relative rounded-2xl border-2 border-gold bg-paper p-8 shadow-lift-lg lg:-mt-4 lg:pb-12'
                    : 'relative rounded-2xl border border-ink/10 bg-paper p-8'
                }
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-bold uppercase tracking-wider text-ink">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-xl font-bold text-ink">{plan.name}</h3>
                <p className="mt-1 text-sm text-mist">{plan.bestFor}</p>

                <p className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-bold text-ink">${plan.price}</span>
                  <span className="text-sm font-semibold text-mist">/ month</span>
                </p>
                <p className="mt-2 text-sm font-bold text-pine">
                  {plan.classesPerWeek} · {plan.monthlyClasses}
                </p>

                <ul className="mt-7 space-y-3">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ink/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#enrol"
                  className={
                    plan.featured
                      ? 'mt-8 block rounded-xl bg-pine py-4 text-center font-bold text-paper shadow-lift transition-all hover:-translate-y-0.5 hover:bg-gold'
                      : 'mt-8 block rounded-xl border border-ink/15 py-4 text-center font-bold text-ink transition-all hover:-translate-y-0.5 hover:border-pine hover:text-pine'
                  }
                >
                  Start with a free trial
                </a>
              </motion.div>
            ))}
          </div>

          <ul className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2">
            {PRICING_NOTES.map((note) => (
              <li key={note} className="flex items-start gap-3 text-sm text-ink/65">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-pine" aria-hidden />
                {note}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────── */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <Eyebrow>Parents and students</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl">
              What our families say
            </h2>
          </motion.div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((testimonial, i) => (
              <motion.figure
                key={testimonial.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex flex-col rounded-2xl border border-ink/10 bg-paper p-8 shadow-lift-sm"
              >
                <Quote className="h-8 w-8 text-gold/40" aria-hidden />
                <blockquote className="mt-5 flex-1 leading-relaxed text-ink/80">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-7 border-t border-ink/10 pt-5">
                  <span className="mb-2 flex" aria-label="Rated 5 out of 5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-gold text-gold" aria-hidden />
                    ))}
                  </span>
                  <p className="font-display font-bold text-ink">{testimonial.name}</p>
                  <p className="text-sm text-mist">{testimonial.location}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Where we teach ───────────────────────────────────────────
          Named regions, countries and time zones. A page that only says
          "worldwide" cannot rank for "online Quran classes in Germany". */}
      <section id="where-we-teach" className="scroll-mt-24 px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <Eyebrow>Where we teach</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl">
              Classes in your time zone
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/70">
              Our teachers work around European, British, North American, Australian and Gulf
              hours — so children study after school and adults after work, not in the middle of
              the night.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {COVERAGE.map((area, i) => (
              <motion.div
                key={area.region}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.07 }}
                className="rounded-2xl border border-ink/10 bg-paper p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-pine/10 text-pine">
                  <Globe className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">{area.region}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{area.countries}</p>
                <p className="mt-4 flex items-start gap-2 text-sm font-medium text-pine">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                  {area.timing}
                </p>
              </motion.div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-ink/60">
            Fees can be paid in USD, GBP, EUR, CAD or AUD, and every class is delivered online, so
            there is no travel and no catchment area — only your own timetable.
          </p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section id="faq" className="scroll-mt-24 px-6 pb-24">
        <div className="mx-auto max-w-3xl">
          <motion.div {...fadeUp} className="text-center">
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl">
              Frequently asked questions
            </h2>
          </motion.div>

          <div className="mt-12">
            <AcademyFaq />
          </div>

          <p className="mt-10 text-center text-ink/70">
            Still have a question?{' '}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-pine underline decoration-gold/50 underline-offset-4 hover:text-gold"
            >
              Message us on WhatsApp
            </a>{' '}
            — we usually reply within the hour.
          </p>
        </div>
      </section>

      {/* ── Enrolment ────────────────────────────────────────────────── */}
      <section id="enrol" className="relative scroll-mt-24 overflow-hidden bg-ink px-6 py-24 text-paper">
        <div className="pattern-star-light pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden />
        <div
          className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-pine/25 blur-[120px]"
          aria-hidden
        />

        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-gold-light">
              Free trial
            </span>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-5xl">
              Book your {BRAND.trialClasses} free classes
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-paper/75">
              Tell us a little about the student and we will match them with a suitable teacher,
              agree times in your own time zone and start this week, in shaa Allah.
            </p>

            <ul className="mt-9 space-y-4">
              {[
                'No payment and no card details for the trial',
                'Male or female teacher, your choice',
                'Classes in English, Arabic or Urdu',
                'Reply within 24 hours',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-paper/85">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-gold-light" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-paper/15 bg-paper/5 px-5 py-4 font-semibold transition-colors hover:border-gold/50 hover:text-gold-light"
              >
                <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
                Prefer to chat? WhatsApp {BRAND.phone}
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-paper p-7 text-ink shadow-lift-lg sm:p-10">
            <h3 className="font-display text-2xl font-bold">Free trial registration</h3>
            <p className="mt-2 text-sm text-ink/60">
              It takes under a minute. Fields marked <span className="text-gold">*</span> are required.
            </p>
            <div className="mt-7">
              <TrialForm />
            </div>
          </div>
        </div>
      </section>

      <AcademyFooter />
    </div>
  );
};
