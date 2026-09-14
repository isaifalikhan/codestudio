'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Check,
  GraduationCap,
  Languages,
  MessageCircle,
  ScrollText,
  Users,
} from 'lucide-react';
import { AcademyHeader } from '../components/academy/AcademyHeader';
import { AcademyFooter } from '../components/academy/AcademyFooter';
import { ACADEMY_PATH, BRAND, COURSES, WHATSAPP_LINK } from '@/lib/quranAcademyData';
import { ARTICLES_PATH } from '@/lib/academy-articles';
import {
  CREDENTIAL_EXPLAINERS,
  TEACHERS,
  TEACHER_FAQS,
  type Teacher,
} from '@/lib/quranAcademyTeachers';

const courseTitle = (slug: string) => COURSES.find((course) => course.slug === slug)?.title ?? slug;

const TeacherCard = ({ teacher }: { teacher: Teacher }) => (
  <article className="flex flex-col rounded-2xl border border-ink/10 bg-paper p-7">
    <div className="flex items-start gap-4">
      {teacher.photo ? (
        <Image
          src={teacher.photo}
          alt={`${teacher.name}, ${teacher.role} at ${BRAND.name}`}
          width={88}
          height={88}
          className="h-22 w-22 shrink-0 rounded-2xl object-cover"
        />
      ) : (
        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-pine/10 text-pine">
          <GraduationCap className="h-7 w-7" aria-hidden />
        </span>
      )}
      <div>
        <h3 className="font-display text-xl font-bold text-ink">{teacher.name}</h3>
        {teacher.arabicName && (
          <p lang="ar" className="arabic text-lg text-gold">
            {teacher.arabicName}
          </p>
        )}
        <p className="mt-1 text-sm font-semibold text-pine">{teacher.role}</p>
      </div>
    </div>

    <ul className="mt-5 space-y-2 text-sm">
      {teacher.hafiz && (
        <li className="flex items-start gap-2 text-ink/80">
          <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
          Hafiz of the full Quran
        </li>
      )}
      {teacher.ijazah.map((ijazah) => (
        <li key={ijazah.recitation} className="flex items-start gap-2 text-ink/80">
          <ScrollText className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
          <span>
            Ijazah in {ijazah.recitation}
            {ijazah.grantedBy && <> — granted by {ijazah.grantedBy}</>}
            {ijazah.connectedSanad && <>, with a connected sanad</>}
          </span>
        </li>
      ))}
      {teacher.qualifications.map((qualification) => (
        <li key={qualification} className="flex items-start gap-2 text-ink/80">
          <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
          {qualification}
        </li>
      ))}
      <li className="flex items-start gap-2 text-ink/80">
        <Languages className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
        Teaches in {teacher.languages.join(', ')}
      </li>
      {teacher.yearsTeaching !== undefined && (
        <li className="flex items-start gap-2 text-ink/80">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
          {teacher.yearsTeaching} years teaching
        </li>
      )}
    </ul>

    <div className="mt-5 space-y-3 text-sm leading-relaxed text-ink/70">
      {teacher.bio.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>

    {teacher.teaches.length > 0 && (
      <p className="mt-5 border-t border-ink/10 pt-4 text-xs font-semibold uppercase tracking-wider text-mist">
        {teacher.teaches.map(courseTitle).join(' · ')}
      </p>
    )}
  </article>
);

export const QuranAcademyTeachers = () => {
  const male = TEACHERS.filter((teacher) => teacher.gender === 'male');
  const female = TEACHERS.filter((teacher) => teacher.gender === 'female');

  return (
    <div className="theme-academy min-h-screen bg-paper font-sans text-ink">
      <AcademyHeader hrefPrefix={ACADEMY_PATH} />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
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
              <li className="text-ink">Teachers</li>
            </ol>
          </nav>

          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            Our teachers and their qualifications
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">
            Who teaches your child matters more than any other choice you make here. This page sets
            out what each qualification actually means, so you can judge ours — and anyone
            else&apos;s — on the evidence rather than the adjectives.
          </p>
        </div>
      </section>

      {/* ── Faculty ──────────────────────────────────────────────────── */}
      <section id="faculty" className="scroll-mt-24 px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          {TEACHERS.length > 0 ? (
            <>
              {female.length > 0 && (
                <>
                  <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                    Female faculty
                  </h2>
                  <p className="mt-2 text-ink/70">
                    Teaching sisters, young girls and families who prefer a female teacher.
                  </p>
                  <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {female.map((teacher) => (
                      <TeacherCard key={teacher.slug} teacher={teacher} />
                    ))}
                  </div>
                </>
              )}

              {male.length > 0 && (
                <>
                  <h2 className="mt-16 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                    Male faculty
                  </h2>
                  <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {male.map((teacher) => (
                      <TeacherCard key={teacher.slug} teacher={teacher} />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            /* Honest empty state. No invented profiles, no stock photos, and
               the route stays out of the index until real faculty exist. */
            <div className="mx-auto max-w-2xl rounded-2xl border border-ink/10 bg-paper-dim p-8 text-center">
              <Users className="mx-auto h-10 w-10 text-pine" aria-hidden />
              <h2 className="mt-5 font-display text-2xl font-bold text-ink">
                Individual teacher profiles are being published
              </h2>
              <p className="mt-4 leading-relaxed text-ink/70">
                We would rather show you nothing than a stock photo and a vague claim. Until each
                teacher&apos;s profile and certification are published here, the most direct way to
                judge the teaching is to sit in on a class: book {BRAND.trialClasses} free trial
                sessions and meet the teacher who would be taking your child.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Link
                  href={`${ACADEMY_PATH}#enrol`}
                  className="rounded-xl bg-pine px-6 py-3.5 font-bold text-paper transition-all hover:-translate-y-0.5 hover:bg-gold"
                >
                  Meet a teacher in a free class
                </Link>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-ink/15 px-6 py-3.5 font-bold text-ink transition-all hover:-translate-y-0.5 hover:border-pine hover:text-pine"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  Ask about a specific teacher
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── What the credentials mean ────────────────────────────────── */}
      <section
        id="credentials"
        className="relative scroll-mt-24 overflow-hidden bg-paper-dim px-6 py-20"
      >
        <div className="pattern-star pointer-events-none absolute inset-0 opacity-[0.04]" aria-hidden />
        <div className="relative mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            What the qualifications actually mean
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/70">
            Every academy advertises &quot;certified tutors&quot;. These are the terms behind that
            phrase, in plain English, so the claim can be checked rather than taken on trust.
          </p>

          <dl className="mt-12 space-y-8">
            {CREDENTIAL_EXPLAINERS.map((item) => (
              <div key={item.term} className="border-t border-ink/10 pt-6">
                <dt className="font-display text-xl font-bold text-ink">{item.term}</dt>
                <dd className="mt-2 font-semibold text-pine">{item.plain}</dd>
                <dd className="mt-3 leading-relaxed text-ink/70">{item.detail}</dd>
              </div>
            ))}
          </dl>

          <Link
            href={`${ARTICLES_PATH}/choosing-an-online-quran-teacher`}
            className="mt-10 inline-flex items-center gap-2 font-bold text-pine transition-colors hover:text-gold"
          >
            The 12 questions to ask any online Quran teacher
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section id="teacher-faq" className="scroll-mt-24 px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Questions about our teachers
          </h2>
          <dl className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
            {TEACHER_FAQS.map((faq) => (
              <div key={faq.q} className="py-6">
                <dt className="font-display text-lg font-bold text-ink">{faq.q}</dt>
                <dd className="mt-3 leading-relaxed text-ink/70">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-ink p-8 text-paper sm:p-12">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Judge the teaching, not the marketing
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-paper/75">
            Book {BRAND.trialClasses} free one-to-one classes, sit in on them, and see how your
            child is taught before paying anything.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={`${ACADEMY_PATH}#enrol`}
              className="rounded-xl bg-gold px-6 py-3.5 font-bold text-ink transition-transform hover:-translate-y-0.5"
            >
              Book free trial classes
            </Link>
            <Link
              href={`${ACADEMY_PATH}#courses`}
              className="inline-flex items-center gap-2 rounded-xl border border-paper/25 px-6 py-3.5 font-bold transition-colors hover:border-gold/60 hover:text-gold-light"
            >
              <BookOpen className="h-4 w-4" aria-hidden />
              See the courses
            </Link>
          </div>
        </div>
      </section>

      <AcademyFooter />
    </div>
  );
};
