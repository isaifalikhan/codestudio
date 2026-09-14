/**
 * Long-form detail for each course page (/quran-academy/courses/[slug]).
 *
 * The shared basics — title, level, ages, duration, outcomes — stay in
 * `lib/quranAcademyData.ts` because the hub, the country pages and the trial
 * form all read them. This file holds what only a dedicated course page needs:
 * syllabus stages, prerequisites, pace, assessment and course-specific FAQs.
 *
 * Every course page must say something the hub does not, or it is a duplicate
 * of a section that already ranks — that is the whole reason these pages exist.
 */

export type SyllabusStage = {
  stage: string;
  /** What is actually covered, concretely enough to be useful. */
  detail: string;
  /** Rough time for this stage at 2–3 classes a week. */
  typical?: string;
};

export type CourseDetail = {
  /** Matches a slug in COURSES (lib/quranAcademyData.ts). */
  slug: string;
  /** Title tag, kept short enough to survive the SERP. */
  seoTitle: string;
  description: string;
  keywords: string[];
  /** Two or three paragraphs under the H1. */
  intro: string[];
  /** Direct answer block — the extractable summary near the top. */
  quickAnswer: string;
  whoItIsFor: string[];
  prerequisites: string[];
  syllabus: SyllabusStage[];
  /** How a typical class in this course actually runs. */
  inAClass: string[];
  /** How progress is judged, and what "finished" means here. */
  assessment: string[];
  /** Course slugs that usually follow this one. */
  nextCourses: string[];
  /** Article slugs from lib/academy-articles. */
  relatedArticles: string[];
  faqs: { q: string; a: string }[];
};
