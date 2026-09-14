'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Award,
  BookMarked,
  BookOpen,
  Brain,
  Check,
  Clock,
  Landmark,
  Languages,
  MessageCircle,
  Mic,
  MoonStar,
  ScrollText,
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
  WHATSAPP_LINK,
  type Course,
  type CourseIcon,
} from '@/lib/quranAcademyData';
import { ARTICLES, ARTICLES_PATH } from '@/lib/academy-articles';
import { COURSES_PATH, coursePath, type CourseDetail } from '@/lib/academy-courses';

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

export const QuranAcademyCourse = ({
  course,
  detail,
}: {
  course: Course;
  detail: CourseDetail;
}) => {
  const Icon = COURSE_ICONS[course.icon];
  const fromPrice = Math.min(...PLANS.map((plan) => plan.price));
  const nextCourses = detail.nextCourses
    .map((slug) => COURSES.find((c) => c.slug === slug))
    .filter((c): c is Course => Boolean(c));
  const articles = ARTICLES.filter((article) => detail.relatedArticles.includes(article.slug));

  return (
    <div className="theme-academy min-h-screen bg-paper font-sans text-ink">
      <AcademyHeader hrefPrefix={ACADEMY_PATH} />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 pb-16 pt-36 md:pt-44">
        <div className="pattern-star pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden />
        <div
          className="pointer-events-none absolute -left-40 -top-32 h-[28rem] w-[28rem] rounded-full bg-pine/10 blur-[120px]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-ink/60">
              <li>
                <Link href={ACADEMY_PATH} className="font-semibold hover:text-pine">
                  {BRAND.shortName}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href={COURSES_PATH} className="font-semibold hover:text-pine">
                  Courses
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-ink">{course.title}</li>
            </ol>
          </nav>

          <div className="grid items-start gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pine/10 text-pine">
                  <Icon className="h-7 w-7" aria-hidden />
                </span>
                <span lang="ar" className="arabic text-2xl text-gold">
                  {course.arabic}
                </span>
              </div>

              <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">
                {course.title}
              </h1>

              {/* Direct answer, first thing after the H1 — the block search
                  engines and assistants lift as the summary. */}
              <p id="quick-answer" className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/80">
                {detail.quickAnswer}
              </p>

              <div className="mt-6 space-y-4 leading-relaxed text-ink/70">
                {detail.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

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
                  Ask about this course
                </a>
              </div>
            </div>

            {/* Facts panel */}
            <div className="rounded-2xl border border-ink/10 bg-paper-dim p-8 shadow-lift-sm">
              <h2 className="font-display text-xl font-bold text-ink">Course at a glance</h2>
              <dl className="mt-6 space-y-5">
                {[
                  { label: 'Level', value: course.level },
                  { label: 'Typical duration', value: course.duration },
                  { label: 'Suitable for', value: course.ages },
                  { label: 'Format', value: 'One-to-one live video classes' },
                  { label: 'Class length', value: '30, 45 or 60 minutes' },
                  { label: 'Teachers', value: 'Male or female, your choice' },
                  { label: 'Fees', value: `From $${fromPrice} per student per month` },
                  { label: 'Free trial', value: `${BRAND.trialClasses} classes, no card details` },
                ].map((row) => (
                  <div key={row.label}>
                    <dt className="text-xs font-bold uppercase tracking-[0.16em] text-mist">
                      {row.label}
                    </dt>
                    <dd className="mt-1 font-medium text-ink">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ── Outcomes ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink px-6 py-16 text-paper">
        <div className="pattern-star-light absolute inset-0 opacity-[0.07]" aria-hidden />
        <div className="relative mx-auto max-w-7xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">What you will be able to do</h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {course.outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-3 text-paper/85">
                <Check className="mt-1 h-4 w-4 shrink-0 text-gold-light" aria-hidden />
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Who it is for / prerequisites ────────────────────────────── */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="flex items-center gap-3 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              <Users className="h-6 w-6 text-pine" aria-hidden />
              Who this course is for
            </h2>
            <ul className="mt-6 space-y-3">
              {detail.whoItIsFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink/80">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="flex items-center gap-3 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              <BookOpen className="h-6 w-6 text-pine" aria-hidden />
              What you need before starting
            </h2>
            <ul className="mt-6 space-y-3">
              {detail.prerequisites.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink/80">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Syllabus ─────────────────────────────────────────────────── */}
      <section
        id="syllabus"
        className="relative scroll-mt-24 overflow-hidden bg-paper-dim px-6 py-20"
      >
        <div className="pattern-star pointer-events-none absolute inset-0 opacity-[0.04]" aria-hidden />
        <div className="relative mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            What the course covers
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/70">
            Stages run in order, each one assuming the last is secure. Timings assume two to three
            classes a week and are adjusted to the individual student.
          </p>

          <ol className="mt-12 space-y-8">
            {detail.syllabus.map((stage, i) => (
              <li key={stage.stage} className="flex gap-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-paper font-display font-bold text-gold">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-ink">{stage.stage}</h3>
                  {stage.typical && (
                    <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-pine">
                      <Clock className="h-3.5 w-3.5" aria-hidden />
                      {stage.typical}
                    </p>
                  )}
                  <p className="mt-2 leading-relaxed text-ink/70">{stage.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── In a class / assessment ──────────────────────────────────── */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              What a class looks like
            </h2>
            <ul className="mt-6 space-y-4">
              {detail.inAClass.map((item) => (
                <li key={item} className="flex items-start gap-3 leading-relaxed text-ink/75">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pine" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              How progress is measured
            </h2>
            <ul className="mt-6 space-y-4">
              {detail.assessment.map((item) => (
                <li key={item} className="flex items-start gap-3 leading-relaxed text-ink/75">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section id="course-faq" className="scroll-mt-24 px-6 pb-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {course.title} — common questions
          </h2>
          <dl className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
            {detail.faqs.map((faq) => (
              <div key={faq.q} className="py-6">
                <dt className="font-display text-lg font-bold text-ink">{faq.q}</dt>
                <dd className="mt-3 leading-relaxed text-ink/70">{faq.a}</dd>
              </div>
            ))}
          </dl>
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
              Try {course.title} free
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-paper/75">
              {BRAND.trialClasses} one-to-one classes with a teacher matched to this course, in your
              own time zone. No card details, no obligation.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex max-w-md items-center gap-3 rounded-xl border border-paper/15 bg-paper/5 px-5 py-4 font-semibold transition-colors hover:border-gold/50 hover:text-gold-light"
            >
              <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
              Prefer to chat? WhatsApp {BRAND.phone}
            </a>
          </div>

          <div className="rounded-2xl bg-paper p-7 text-ink shadow-lift-lg sm:p-9">
            <h3 className="font-display text-2xl font-bold">Free trial registration</h3>
            <p className="mt-2 text-sm text-ink/60">
              Select {course.title} in the course list and we will match a specialist teacher.
            </p>
            <div className="mt-6">
              <TrialForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Next steps ───────────────────────────────────────────────── */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          {nextCourses.length > 0 && (
            <>
              <h2 className="font-display text-xl font-bold text-ink">What usually comes next</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {nextCourses.map((next) => {
                  const NextIcon = COURSE_ICONS[next.icon];
                  return (
                    <Link
                      key={next.slug}
                      href={coursePath(next.slug)}
                      className="group flex items-start gap-3 rounded-2xl border border-ink/10 bg-paper p-5 transition-colors hover:border-pine/40"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pine/10 text-pine">
                        <NextIcon className="h-5 w-5" aria-hidden />
                      </span>
                      <span>
                        <span className="block font-bold text-ink group-hover:text-pine">
                          {next.title}
                        </span>
                        <span className="block text-sm text-mist">
                          {next.level} · {next.duration}
                        </span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </>
          )}

          {articles.length > 0 && (
            <>
              <h2 className="mt-12 font-display text-xl font-bold text-ink">Further reading</h2>
              <ul className="mt-5 space-y-3">
                {articles.map((article) => (
                  <li key={article.slug}>
                    <Link
                      href={`${ARTICLES_PATH}/${article.slug}`}
                      className="group flex items-start justify-between gap-4 rounded-xl border border-ink/10 bg-paper p-5 transition-colors hover:border-pine/40"
                    >
                      <span>
                        <span className="block font-display font-bold text-ink group-hover:text-pine">
                          {article.title}
                        </span>
                        <span className="mt-1 block text-sm text-ink/60">{article.excerpt}</span>
                      </span>
                      <ArrowRight
                        className="mt-1 h-4 w-4 shrink-0 text-mist transition-transform group-hover:translate-x-1 group-hover:text-pine"
                        aria-hidden
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}

          <Link
            href={COURSES_PATH}
            className="mt-10 inline-flex items-center gap-2 font-bold text-pine transition-colors hover:text-gold"
          >
            All {COURSES.length} courses
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>

      <AcademyFooter />
    </div>
  );
};
