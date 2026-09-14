import type { CourseDetail } from './types';
import { nooraniQaida, quranReading, tajweed } from './foundation';
import { hifz, translationTafseer, ijazahQirat } from './advanced';
import { islamicStudies, salahDuas, arabicLanguage } from './practice';
import { COURSES } from '@/lib/quranAcademyData';

export type { CourseDetail, SyllabusStage } from './types';

export const COURSES_PATH = '/quran-academy/courses';

const DETAILS: CourseDetail[] = [
  nooraniQaida,
  quranReading,
  tajweed,
  hifz,
  translationTafseer,
  islamicStudies,
  salahDuas,
  arabicLanguage,
  ijazahQirat,
];

/**
 * Detail pages exist for every course in COURSES. If that ever stops being
 * true the build fails here rather than shipping a link to a 404.
 */
const missing = COURSES.filter((course) => !DETAILS.some((d) => d.slug === course.slug));
if (missing.length > 0) {
  throw new Error(
    `Missing course detail for: ${missing.map((c) => c.slug).join(', ')} — add it in lib/academy-courses/`
  );
}

export const COURSE_DETAILS = DETAILS;
export const COURSE_DETAIL_SLUGS = DETAILS.map((detail) => detail.slug);

export function getCourseDetail(slug: string): CourseDetail | undefined {
  return DETAILS.find((detail) => detail.slug === slug);
}

/** Course page URL for a slug — the single place this path is constructed. */
export const coursePath = (slug: string): string => `${COURSES_PATH}/${slug}`;
