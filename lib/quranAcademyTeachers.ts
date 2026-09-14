/**
 * Faculty data for /quran-academy/teachers.
 *
 * ⚠️ REAL PEOPLE ONLY. Everything in this file is published as fact and is
 * emitted as `Person` structured data, so a fabricated entry is a fabricated
 * credential — the fastest way to lose trust with both families and Google for
 * religious-education content. Leave the array empty until you have the real
 * details; the page is built to behave correctly while it is empty.
 *
 * While TEACHERS is empty:
 *   - the faculty grid is replaced by an honest "profiles coming" note
 *   - the page is set to noindex, so a thin "our teachers" page with no
 *     teachers never enters the index
 *   - it is left out of the sitemap, the nav and the footer
 *
 * Add one entry and all four of those flip automatically.
 */

export type Ijazah = {
  /** e.g. "Hafs an Asim" or "the ten qiraat (Shatibiyyah & Durrah)". */
  recitation: string;
  /** The sheikh who granted it, if you publish that. */
  grantedBy?: string;
  /** Say so only if the chain is genuinely documented. */
  connectedSanad?: boolean;
};

export type Teacher = {
  slug: string;
  /** Published name. A kunya or first name only is fine if preferred. */
  name: string;
  arabicName?: string;
  /** e.g. "Quran & Tajweed teacher", "Hifz supervisor". */
  role: string;
  gender: 'male' | 'female';
  /** Only true if they have completed memorisation of the full Quran. */
  hafiz: boolean;
  ijazah: Ijazah[];
  /** Degrees, diplomas, institutions — as awarded, not paraphrased. */
  qualifications: string[];
  /** Course slugs from quranAcademyData COURSES. */
  teaches: string[];
  languages: string[];
  yearsTeaching?: number;
  /** One or two short paragraphs, written by or approved by the teacher. */
  bio: string[];
  /** Path under /public, e.g. "/images/teachers/name.jpg". Published with consent only. */
  photo?: string;
};

/**
 * Populate with real faculty. Shape reference:
 *
 * {
 *   slug: 'ustadh-example',
 *   name: 'Ustadh Example Name',
 *   arabicName: 'الاسم',
 *   role: 'Quran & Tajweed teacher',
 *   gender: 'male',
 *   hafiz: true,
 *   ijazah: [{ recitation: 'Hafs an Asim', grantedBy: 'Sheikh Full Name', connectedSanad: true }],
 *   qualifications: ['BA in Islamic Studies, Al-Azhar University (2014)'],
 *   teaches: ['noorani-qaida', 'tajweed', 'hifz'],
 *   languages: ['English', 'Arabic', 'Urdu'],
 *   yearsTeaching: 9,
 *   bio: ['Two or three sentences in the teacher’s own words.'],
 *   photo: '/images/teachers/example.jpg',
 * }
 */
export const TEACHERS: Teacher[] = [];

export const hasTeachers = (): boolean => TEACHERS.length > 0;

export const teachersByGender = (gender: Teacher['gender']): Teacher[] =>
  TEACHERS.filter((teacher) => teacher.gender === gender);

/* Evergreen explainer ────────────────────────────────────────────────
   What the credentials mean. This is general, verifiable knowledge about
   Quranic certification — it makes no claim about this academy, so it is
   safe to publish before any faculty profile exists, and it is the kind of
   definitional content answer engines quote. */

export const CREDENTIAL_EXPLAINERS = [
  {
    term: 'Hafiz / Hafizah',
    plain: 'Someone who has memorised the entire Quran.',
    detail:
      'The title is used once the full thirty juz have been committed to memory and can be recited from memory. It says nothing on its own about teaching ability or about mastery of Tajweed rules, which is why the other credentials below matter too.',
  },
  {
    term: 'Ijazah',
    plain: 'A licence to transmit the Quran, granted after reciting it in full to a certified teacher.',
    detail:
      'The student recites the entire Quran aloud to a sheikh who already holds an ijazah. The sheikh certifies that the recitation was accurate and grants permission to teach and transmit it. It is an assessment of demonstrated accuracy, not a course that is attended.',
  },
  {
    term: 'Sanad',
    plain: 'The named chain of teachers an ijazah is transmitted through.',
    detail:
      'A connected sanad lists each teacher in turn, back through the generations. When an academy says a teacher holds "an ijazah with a connected sanad", it is reasonable to ask to see that chain — a genuine one can be named.',
  },
  {
    term: 'Hafs an Asim',
    plain: 'The recitation style used in most printed Mushafs and by most of the Muslim world.',
    detail:
      'Hafs is one narration of the reading of Asim, and it is what the overwhelming majority of students learn. Some teachers are certified in several of the ten qiraat, which is a further specialisation rather than a requirement for ordinary study.',
  },
  {
    term: 'Qari / Qariah',
    plain: 'A reciter trained in the rules and art of recitation.',
    detail:
      'Used for someone whose recitation has been formally studied and corrected, usually alongside Tajweed certification. For a beginner, a teacher’s ability to hear and correct your articulation matters more than the beauty of their own recitation.',
  },
];

export const TEACHER_FAQS = [
  {
    q: 'What is an ijazah, and does my teacher need one?',
    a: 'An ijazah is a licence to transmit the Quran, granted after reciting it in full to a certified teacher who then vouches for the accuracy of that recitation. For ordinary reading and Tajweed lessons it is a strong signal of competence rather than a strict requirement; for memorisation supervision and certification it matters a great deal.',
  },
  {
    q: 'What should I ask before choosing a Quran teacher?',
    a: 'Ask what the ijazah is in and who granted it, whether the class is genuinely one-to-one, how progress is measured and reported, and what the safeguarding arrangements are for a child alone in a video call. A qualified teacher will answer all four without hesitation.',
  },
  {
    q: 'Can my daughter be taught by a female teacher?',
    a: 'Yes. Female teachers are available for sisters and young girls, and you can request one when you book your free trial classes. Parents are welcome to sit in on any class.',
  },
  {
    q: 'Does a hafiz automatically make a good teacher?',
    a: 'No. Memorisation of the Quran and the ability to teach a seven-year-old to pronounce the letter ص correctly are different skills. Look for teaching experience with students of your own age group and background alongside the memorisation credential.',
  },
];
