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
  Landmark,
  Languages,
  Mic,
  MoonStar,
  ScrollText,
} from 'lucide-react';
import { AcademyHeader } from '../components/academy/AcademyHeader';
import { AcademyFooter } from '../components/academy/AcademyFooter';
import { ACADEMY_PATH, BRAND, COURSES, PLANS, type CourseIcon } from '@/lib/quranAcademyData';
import { coursePath, getCourseDetail } from '@/lib/academy-courses';

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

/** The order a student normally moves through the syllabus. */
const PATHWAY = [
  { step: 'Start here', slugs: ['noorani-qaida', 'salah-duas'] },
  { step: 'Read the Quran', slugs: ['quran-reading', 'tajweed'] },
  { step: 'Go deeper', slugs: ['hifz', 'translation-tafseer', 'arabic-language', 'islamic-studies'] },
  { step: 'Specialise', slugs: ['ijazah-qirat'] },
];

export const QuranAcademyCourses = () => {
  const fromPrice = Math.min(...PLANS.map((plan) => plan.price));

  return (
    <div className="theme-academy min-h-screen bg-paper font-sans text-ink">
      <AcademyHeader hrefPrefix={ACADEMY_PATH} />

      <section className="relative overflow-hidden px-6 pb-16 pt-36 md:pt-44">
        <div className="pattern-star pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden />
        <div className="relative mx-auto max-w-3xl text-center">
          <nav aria-label="Breadcrumb" className="mb-8 flex justify-center">
            <ol className="flex items-center gap-2 text-sm text-ink/60">
              <li>
                <Link href={ACADEMY_PATH} className="font-semibold hover:text-pine">
                  {BRAND.shortName}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-ink">Courses</li>
            </ol>
          </nav>

          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            Online Quran and Islamic studies courses
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">
            {COURSES.length} one-to-one courses covering the whole journey — from a child who does
            not yet know the Arabic letters to an adult reciting the full Quran for ijazah. Every
            course is private, paced to the student, and starts with {BRAND.trialClasses} free
            classes.
          </p>
          <p className="mt-4 text-sm font-semibold text-pine">
            From ${fromPrice} per student per month · male or female teachers · any time zone
          </p>
        </div>
      </section>

      {/* Pathway — the order courses are normally taken in. */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl space-y-14">
          {PATHWAY.map((group) => (
            <div key={group.step}>
              <h2 className="flex items-center gap-3 font-display text-2xl font-bold tracking-tight text-ink">
                <span className="rounded-full bg-pine/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-pine">
                  {group.step}
                </span>
              </h2>

              <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {group.slugs.map((slug) => {
                  const course = COURSES.find((c) => c.slug === slug);
                  const detail = getCourseDetail(slug);
                  if (!course || !detail) return null;
                  const Icon = COURSE_ICONS[course.icon];

                  return (
                    <article
                      key={slug}
                      className="group flex flex-col rounded-2xl border border-ink/10 bg-paper p-7 transition-all hover:-translate-y-1 hover:border-pine/30 hover:shadow-lift"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pine/10 text-pine transition-colors group-hover:bg-pine group-hover:text-paper">
                          <Icon className="h-6 w-6" aria-hidden />
                        </span>
                        <span lang="ar" className="arabic text-lg text-gold">
                          {course.arabic}
                        </span>
                      </div>

                      <h3 className="mt-5 font-display text-xl font-bold text-ink group-hover:text-pine">
                        <Link href={coursePath(slug)}>{course.title}</Link>
                      </h3>

                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="rounded-full bg-ink/5 px-3 py-1 text-xs font-semibold text-ink/70">
                          {course.level}
                        </span>
                        <span className="rounded-full bg-ink/5 px-3 py-1 text-xs font-semibold text-ink/70">
                          {course.duration}
                        </span>
                      </div>

                      <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/70">
                        {course.blurb}
                      </p>

                      <ul className="mt-5 space-y-2">
                        {course.outcomes.slice(0, 2).map((outcome) => (
                          <li key={outcome} className="flex items-start gap-2 text-sm text-ink/80">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                            {outcome}
                          </li>
                        ))}
                      </ul>

                      <Link
                        href={coursePath(slug)}
                        className="mt-6 inline-flex items-center gap-2 border-t border-ink/10 pt-5 text-sm font-bold text-pine transition-colors hover:text-gold"
                      >
                        Course details
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                      </Link>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="rounded-2xl bg-ink p-8 text-paper sm:p-10">
            <h2 className="font-display text-2xl font-bold">Not sure which course to start with?</h2>
            <p className="mt-3 max-w-xl leading-relaxed text-paper/75">
              Book a free trial and the teacher will assess the student in the first session and
              recommend where to begin. There is no charge and no obligation either way.
            </p>
            <Link
              href={`${ACADEMY_PATH}#enrol`}
              className="mt-6 inline-block rounded-xl bg-gold px-6 py-3.5 font-bold text-ink transition-transform hover:-translate-y-0.5"
            >
              Book {BRAND.trialClasses} free classes
            </Link>
          </div>
        </div>
      </section>

      <AcademyFooter />
    </div>
  );
};
