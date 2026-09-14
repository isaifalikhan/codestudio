'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, CalendarDays, Check, Clock, MessageCircle } from 'lucide-react';
import { AcademyHeader } from '../components/academy/AcademyHeader';
import { AcademyFooter } from '../components/academy/AcademyFooter';
import { ACADEMY_PATH, BRAND, COURSES, WHATSAPP_LINK } from '@/lib/quranAcademyData';
import {
  ARTICLES_PATH,
  ARTICLE_AUTHOR,
  relatedArticles,
  type Article,
} from '@/lib/academy-articles';
import { coursePath } from '@/lib/academy-courses';

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

export const QuranAcademyArticle = ({ article }: { article: Article }) => {
  const related = relatedArticles(article.slug);
  const courses = COURSES.filter((course) => article.relatedCourses.includes(course.slug));

  return (
    <div className="theme-academy min-h-screen bg-paper font-sans text-ink">
      <AcademyHeader hrefPrefix={ACADEMY_PATH} />

      <article className="px-6 pb-20 pt-36 md:pt-40">
        <div className="mx-auto max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-ink/60">
              <li>
                <Link href={ACADEMY_PATH} className="font-semibold hover:text-pine">
                  {BRAND.shortName}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href={ARTICLES_PATH} className="font-semibold hover:text-pine">
                  Articles
                </Link>
              </li>
            </ol>
          </nav>

          <span className="inline-block rounded-full bg-pine/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-pine">
            {article.category}
          </span>

          <h1 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            {article.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-mist">
            <span>{ARTICLE_AUTHOR}</span>
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" aria-hidden />
              <time dateTime={article.published}>{formatDate(article.published)}</time>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" aria-hidden />
              {article.readingMinutes} min read
            </span>
          </div>

          <div className="mt-10 space-y-5 text-lg leading-relaxed text-ink/80">
            {article.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {/* Summary box: the block an AI assistant is most likely to quote. */}
          <aside
            id="key-points"
            className="mt-10 rounded-2xl border border-gold/30 bg-gold/[0.06] p-7"
            aria-labelledby="key-points-heading"
          >
            <h2 id="key-points-heading" className="font-display text-lg font-bold text-ink">
              In short
            </h2>
            <ul className="mt-4 space-y-3">
              {article.takeaways.map((point) => (
                <li key={point} className="flex items-start gap-3 text-ink/80">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
          </aside>

          <div className="mt-12 space-y-12">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-5 space-y-5 leading-relaxed text-ink/80">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets && (
                  <ul className="mt-6 space-y-3 rounded-2xl border border-ink/10 bg-paper-dim p-6">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-ink/80">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pine" aria-hidden />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* FAQ — rendered as content and mirrored into FAQPage schema. */}
          <section id="article-faq" className="mt-16">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Common questions
            </h2>
            <dl className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
              {article.faqs.map((faq) => (
                <div key={faq.q} className="py-6">
                  <dt className="font-display text-lg font-bold text-ink">{faq.q}</dt>
                  <dd className="mt-3 leading-relaxed text-ink/70">{faq.a}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* CTA */}
          <aside className="mt-14 overflow-hidden rounded-2xl bg-ink p-8 text-paper">
            <h2 className="font-display text-2xl font-bold">
              Try it with a teacher, free
            </h2>
            <p className="mt-3 max-w-xl leading-relaxed text-paper/75">
              {BRAND.trialClasses} one-to-one trial classes, male or female teacher, in your own
              time zone. No card details.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`${ACADEMY_PATH}#enrol`}
                className="rounded-xl bg-gold px-6 py-3.5 font-bold text-ink transition-transform hover:-translate-y-0.5"
              >
                Book free classes
              </Link>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-paper/25 px-6 py-3.5 font-bold transition-colors hover:border-gold/60 hover:text-gold-light"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Ask a question
              </a>
            </div>
          </aside>

          {courses.length > 0 && (
            <section className="mt-14">
              <h2 className="font-display text-xl font-bold text-ink">Courses mentioned here</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {courses.map((course) => (
                  <li key={course.slug}>
                    <Link
                      href={coursePath(course.slug)}
                      className="flex items-start gap-3 rounded-xl border border-ink/10 bg-paper p-4 transition-colors hover:border-pine/40"
                    >
                      <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-pine" aria-hidden />
                      <span>
                        <span className="block font-bold text-ink">{course.title}</span>
                        <span className="block text-sm text-mist">
                          {course.level} · {course.duration}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {related.length > 0 && (
            <section className="mt-14 border-t border-ink/10 pt-10">
              <h2 className="font-display text-xl font-bold text-ink">Read next</h2>
              <ul className="mt-5 space-y-3">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`${ARTICLES_PATH}/${item.slug}`}
                      className="group flex items-start justify-between gap-4 rounded-xl border border-ink/10 bg-paper p-5 transition-colors hover:border-pine/40"
                    >
                      <span>
                        <span className="block font-display font-bold text-ink group-hover:text-pine">
                          {item.title}
                        </span>
                        <span className="mt-1 block text-sm text-ink/60">{item.excerpt}</span>
                      </span>
                      <ArrowRight
                        className="mt-1 h-4 w-4 shrink-0 text-mist transition-transform group-hover:translate-x-1 group-hover:text-pine"
                        aria-hidden
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </article>

      <AcademyFooter />
    </div>
  );
};
