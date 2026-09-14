'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { AcademyHeader } from '../components/academy/AcademyHeader';
import { AcademyFooter } from '../components/academy/AcademyFooter';
import { ACADEMY_PATH, BRAND } from '@/lib/quranAcademyData';
import { ARTICLES, ARTICLES_PATH, ARTICLE_CATEGORIES } from '@/lib/academy-articles';

export const QuranAcademyArticles = () => (
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
            <li className="text-ink">Articles</li>
          </ol>
        </nav>

        <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
          Guides for parents and students
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink/70">
          Practical writing from our teaching faculty on how Quran learning actually works — what
          to teach first, how long each stage takes, and how to tell whether it is going well.
        </p>

        <ul className="mt-8 flex flex-wrap justify-center gap-2">
          {ARTICLE_CATEGORIES.map((category) => (
            <li
              key={category}
              className="rounded-full border border-ink/15 px-3 py-1 text-xs font-semibold text-ink/60"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="px-6 pb-24">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        {ARTICLES.map((article) => (
          <article
            key={article.slug}
            className="group flex flex-col rounded-2xl border border-ink/10 bg-paper p-7 transition-all hover:-translate-y-1 hover:border-pine/30 hover:shadow-lift"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full bg-pine/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-pine">
                {article.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-mist">
                <Clock className="h-3.5 w-3.5" aria-hidden />
                {article.readingMinutes} min
              </span>
            </div>

            <h2 className="mt-5 font-display text-xl font-bold leading-snug text-ink group-hover:text-pine">
              <Link href={`${ARTICLES_PATH}/${article.slug}`}>{article.title}</Link>
            </h2>

            <p className="mt-3 flex-1 leading-relaxed text-ink/70">{article.excerpt}</p>

            <Link
              href={`${ARTICLES_PATH}/${article.slug}`}
              className="mt-6 inline-flex items-center gap-2 font-bold text-pine transition-colors hover:text-gold"
              aria-label={`Read ${article.title}`}
            >
              Read the guide
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-14 max-w-6xl rounded-2xl bg-ink p-8 text-paper sm:p-10">
        <h2 className="font-display text-2xl font-bold">Rather ask a teacher directly?</h2>
        <p className="mt-3 max-w-xl leading-relaxed text-paper/75">
          Book {BRAND.trialClasses} free one-to-one classes and put your questions to the person who
          would be teaching your child.
        </p>
        <Link
          href={`${ACADEMY_PATH}#enrol`}
          className="mt-6 inline-block rounded-xl bg-gold px-6 py-3.5 font-bold text-ink transition-transform hover:-translate-y-0.5"
        >
          Book free trial classes
        </Link>
      </div>
    </section>

    <AcademyFooter />
  </div>
);
