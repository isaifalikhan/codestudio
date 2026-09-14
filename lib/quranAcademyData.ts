/**
 * Content for the standalone Online Quran Academy landing page (/quran-academy).
 *
 * Everything the page renders — brand details, courses, plans, FAQs — lives
 * here so copy can be edited without touching layout code.
 *
 * Contact runs through the shared CodexStudio WhatsApp line. Social URLs are
 * empty until the academy has its own profiles — the footer renders only the
 * ones that are set.
 */

import { WHATSAPP_DISPLAY, WHATSAPP_LINK_NUMBER } from '@/lib/constants';

export const ACADEMY_PATH = '/quran-academy';

export const BRAND = {
  name: 'Al-Noor Online Quran Academy',
  shortName: 'Al-Noor Academy',
  arabicName: 'أكاديمية النور',
  tagline: 'Learn the Quran at home, one-to-one, with certified teachers.',
  // Shared with the main CodexStudio line — same phone and WhatsApp inbox.
  phone: WHATSAPP_DISPLAY,
  whatsapp: WHATSAPP_LINK_NUMBER, // digits only, used for wa.me links
  // Not rendered anywhere right now — WhatsApp and phone are the only
  // published contact routes. Set a real address and re-add it to the footer
  // and schema if you want email enquiries.
  email: '',
  /** Add the academy's own profile URLs here and the footer icons appear. */
  social: {
    facebook: '',
    instagram: '',
    youtube: '',
  },
  foundedYear: 2016,
  studentsTaught: '3,500+',
  countries: '20+',
  tutors: '45+',
  rating: '4.9',
  trialClasses: 3,
  regions: ['USA', 'UK', 'Canada', 'Australia', 'Europe', 'Middle East'],
} as const;

export const WHATSAPP_LINK = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
  'Assalamu alaikum, I would like to book a free trial Quran class.'
)}`;

/* Courses ────────────────────────────────────────────────────────────── */

export type CourseIcon =
  | 'qaida'
  | 'recitation'
  | 'tajweed'
  | 'hifz'
  | 'tafseer'
  | 'islamic'
  | 'salah'
  | 'arabic'
  | 'ijazah';

export type Course = {
  slug: string;
  title: string;
  arabic: string;
  icon: CourseIcon;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All levels';
  ages: string;
  duration: string;
  blurb: string;
  outcomes: string[];
};

export const COURSES: Course[] = [
  {
    slug: 'noorani-qaida',
    title: 'Noorani Qaida',
    arabic: 'القاعدة النورانية',
    icon: 'qaida',
    level: 'Beginner',
    ages: 'Ages 4+ and adult beginners',
    duration: '3–6 months',
    blurb:
      'The foundation course. Students learn the Arabic alphabet, letter shapes, joining, vowels and basic pronunciation rules before opening the Mushaf.',
    outcomes: [
      'Recognise and pronounce all 28 Arabic letters',
      'Read harakat, tanween, madd and sukoon correctly',
      'Join letters into words and short sentences',
      'Move confidently into Quran reading',
    ],
  },
  {
    slug: 'quran-reading',
    title: 'Quran Reading (Nazra)',
    arabic: 'ناظرة',
    icon: 'recitation',
    level: 'Beginner',
    ages: 'Kids, teens and adults',
    duration: '6–12 months',
    blurb:
      'Read the Quran fluently from the Mushaf with correct articulation, guided page by page by your own teacher at your own pace.',
    outcomes: [
      'Fluent, mistake-free reading from any page',
      'Correct makharij (articulation points)',
      'Basic Tajweed applied while reading',
      'Complete a full Quran khatam with your tutor',
    ],
  },
  {
    slug: 'tajweed',
    title: 'Tajweed Mastery',
    arabic: 'التجويد',
    icon: 'tajweed',
    level: 'Intermediate',
    ages: 'Ages 8+ and adults',
    duration: '6–9 months',
    blurb:
      'Learn the rules that beautify recitation — noon sakinah, meem sakinah, madd, qalqalah, ghunnah — with live correction on every verse.',
    outcomes: [
      'Rules of noon and meem sakinah and tanween',
      'All types of madd with correct counts',
      'Qalqalah, ghunnah, idgham, ikhfa and iqlab',
      'Recite in the style of professional qurra',
    ],
  },
  {
    slug: 'hifz',
    title: 'Hifz — Quran Memorisation',
    arabic: 'حفظ القرآن',
    icon: 'hifz',
    level: 'All levels',
    ages: 'Ages 6+ and adults',
    duration: 'Flexible — 2 to 4 years',
    blurb:
      'A structured memorisation plan with daily sabaq, sabqi and manzil revision, plus monthly tests so nothing that is memorised is ever lost.',
    outcomes: [
      'Personalised daily memorisation targets',
      'Sabaq, sabqi and manzil revision cycle',
      'Monthly assessment and parent reports',
      'Memorise selected surahs or the full 30 juz',
    ],
  },
  {
    slug: 'translation-tafseer',
    title: 'Translation and Tafseer',
    arabic: 'الترجمة والتفسير',
    icon: 'tafseer',
    level: 'Intermediate',
    ages: 'Ages 12+ and adults',
    duration: '9–12 months',
    blurb:
      'Understand what you recite. Word-by-word translation plus classical tafseer covering the meanings, context and lessons of each surah.',
    outcomes: [
      'Word-by-word Quranic vocabulary',
      'Context of revelation (asbab al-nuzul)',
      'Tafseer from classical, authentic sources',
      'Apply Quranic lessons to daily life',
    ],
  },
  {
    slug: 'islamic-studies',
    title: 'Islamic Studies',
    arabic: 'الدراسات الإسلامية',
    icon: 'islamic',
    level: 'All levels',
    ages: 'Kids, teens and adults',
    duration: 'Ongoing',
    blurb:
      'Core deen knowledge: aqeedah, the pillars of Islam, seerah of the Prophet ﷺ, hadith, everyday fiqh and Islamic manners.',
    outcomes: [
      'Six pillars of iman and five pillars of Islam',
      'Seerah of the Prophet ﷺ and the companions',
      'Selected hadith with explanation',
      'Everyday fiqh: purity, prayer, fasting, zakah',
    ],
  },
  {
    slug: 'salah-duas',
    title: 'Salah and Daily Duas',
    arabic: 'الصلاة والأدعية',
    icon: 'salah',
    level: 'Beginner',
    ages: 'Ages 5+ and new Muslims',
    duration: '2–3 months',
    blurb:
      'A short, practical course covering wudu, the full prayer step by step, and the masnoon duas for every part of the day.',
    outcomes: [
      'Wudu, ghusl and the conditions of prayer',
      'Every word and action of salah, correctly',
      '40+ daily duas with their meanings',
      'Kalimas, adhkar and Friday sunnahs',
    ],
  },
  {
    slug: 'arabic-language',
    title: 'Arabic Language',
    arabic: 'اللغة العربية',
    icon: 'arabic',
    level: 'All levels',
    ages: 'Ages 10+ and adults',
    duration: '6–12 months',
    blurb:
      'Classical and conversational Arabic — nahw, sarf and vocabulary — taught so you can read the Quran and hadith in the original.',
    outcomes: [
      'Arabic grammar (nahw) and morphology (sarf)',
      'Core Quranic vocabulary',
      'Read and understand simple Arabic texts',
      'Everyday conversational Arabic',
    ],
  },
  {
    slug: 'ijazah-qirat',
    title: 'Ijazah and Qirat',
    arabic: 'الإجازة والقراءات',
    icon: 'ijazah',
    level: 'Advanced',
    ages: 'Adults and advanced students',
    duration: '1–2 years',
    blurb:
      'Recite the full Quran to an ijazah-holding sheikh and earn a certificate with a connected sanad, in Hafs or the ten qiraat.',
    outcomes: [
      'Recitation of the full Quran to a qualified sheikh',
      'Ijazah certificate with a connected sanad',
      'Hafs an Asim and other qiraat',
      'Qualification to teach the Quran',
    ],
  },
];

/* Why families choose us ─────────────────────────────────────────────── */

export type FeatureIcon =
  | 'oneToOne'
  | 'tutors'
  | 'female'
  | 'clock'
  | 'trial'
  | 'reports'
  | 'price'
  | 'guarantee';

export type Feature = { icon: FeatureIcon; title: string; body: string };

export const FEATURES: Feature[] = [
  {
    icon: 'oneToOne',
    title: 'One-to-one live classes',
    body: 'Never a crowded group call. Every class is a private live session between one student and one teacher, so the whole lesson is built around your pace.',
  },
  {
    icon: 'tutors',
    title: 'Certified, qualified tutors',
    body: 'Our teachers are huffaz and qurra with ijazah, many of them graduates of Al-Azhar and established madaris, trained to teach students living outside the Muslim world.',
  },
  {
    icon: 'female',
    title: 'Male and female teachers',
    body: 'Sisters and young girls can request a dedicated female tutor, so every family can learn in a setting they are comfortable with.',
  },
  {
    icon: 'clock',
    title: 'Flexible 24/7 timetable',
    body: 'Classes run around the clock across US, UK, Canadian, Australian and Gulf time zones. Pick your slots and reschedule when life happens.',
  },
  {
    icon: 'trial',
    title: `${BRAND.trialClasses} free trial classes`,
    body: 'Meet your teacher, sit through real lessons and judge the method for yourself before paying anything. No card details required.',
  },
  {
    icon: 'reports',
    title: 'Progress reports for parents',
    body: 'Monthly written assessments, attendance records and a direct line to the academic supervisor, so parents always know where their child stands.',
  },
  {
    icon: 'price',
    title: 'Affordable, honest fees',
    body: 'Clear monthly pricing with no registration fee and no hidden charges, plus sibling discounts for larger families.',
  },
  {
    icon: 'guarantee',
    title: 'Satisfaction guarantee',
    body: 'Not happy with your tutor? Change them free of charge, any time. Cancel whenever you like — there is no long-term contract.',
  },
];

/* How it works ───────────────────────────────────────────────────────── */

export const STEPS = [
  {
    title: 'Register for a free trial',
    body: 'Fill in the short form or send a WhatsApp message with your name, country and the course you want. It takes under a minute.',
  },
  {
    title: 'Meet your teacher',
    body: 'We assess the student, match them with a suitable male or female tutor, and agree class times in your own time zone.',
  },
  {
    title: 'Start your classes',
    body: `Take ${BRAND.trialClasses} free classes on Zoom, Skype or Google Meet. If you are happy, choose a plan and continue.`,
  },
  {
    title: 'Track the progress',
    body: 'Follow the monthly reports and assessments right through to completing the course and receiving a certificate.',
  },
];

/* Teachers ───────────────────────────────────────────────────────────── */

export const TUTOR_CREDENTIALS = [
  'Hafiz-e-Quran with ijazah and connected sanad',
  'Al-Azhar and Darul Uloom graduates',
  'Fluent English, Arabic and Urdu speakers',
  'Trained in teaching children online',
  'Background-checked and supervised',
  'Separate female faculty for sisters',
];

/* Where we teach ─────────────────────────────────────────────────────
   Named regions, countries and time zones. Queries like "online Quran
   classes in Germany" or "Quran teacher UK evenings" only match a page
   that actually says those words, so coverage is stated explicitly
   rather than left as a generic "worldwide". */

export type Coverage = { region: string; countries: string; timing: string };

export const COVERAGE: Coverage[] = [
  {
    region: 'United Kingdom & Ireland',
    countries: 'England, Scotland, Wales, Northern Ireland, Republic of Ireland',
    timing: 'GMT / BST — before school, after school and late-evening slots',
  },
  {
    region: 'Western & Northern Europe',
    countries: 'France, Germany, Netherlands, Belgium, Spain, Italy, Portugal, Austria, Switzerland',
    timing: 'CET / CEST — after-school and post-Maghrib slots',
  },
  {
    region: 'Scandinavia & the Nordics',
    countries: 'Sweden, Norway, Denmark, Finland, Iceland',
    timing: 'CET / EET — evening slots that work around long winter nights',
  },
  {
    region: 'North America',
    countries: 'United States and Canada, all states and provinces',
    timing: 'EST, CST, MST and PST — early morning, evening and weekend slots',
  },
  {
    region: 'Australia & New Zealand',
    countries: 'Australia and New Zealand',
    timing: 'AEST / AEDT and NZST — morning and after-school slots',
  },
  {
    region: 'Middle East, Gulf & beyond',
    countries: 'UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, and every other time zone',
    timing: 'AST / GST — tell us your hours and we schedule a teacher around them',
  },
];

/** Flat country list for schema.org areaServed. */
export const COUNTRIES_SERVED = [
  'United Kingdom',
  'Ireland',
  'France',
  'Germany',
  'Netherlands',
  'Belgium',
  'Spain',
  'Italy',
  'Portugal',
  'Austria',
  'Switzerland',
  'Sweden',
  'Norway',
  'Denmark',
  'Finland',
  'United States',
  'Canada',
  'Australia',
  'New Zealand',
  'United Arab Emirates',
  'Saudi Arabia',
  'Qatar',
  'Kuwait',
];

/* Pricing ────────────────────────────────────────────────────────────── */

export type Plan = {
  name: string;
  classesPerWeek: string;
  monthlyClasses: string;
  price: number;
  featured?: boolean;
  bestFor: string;
  includes: string[];
};

/** Placeholder fees — confirm the real fee structure before launch. */
export const PLANS: Plan[] = [
  {
    name: 'Starter',
    classesPerWeek: '2 days a week',
    monthlyClasses: '8 classes per month',
    price: 35,
    bestFor: 'Busy adults and first-time students',
    includes: [
      '30-minute one-to-one classes',
      'Male or female tutor of your choice',
      'Any course from our syllabus',
      'Monthly progress report',
    ],
  },
  {
    name: 'Regular',
    classesPerWeek: '3 days a week',
    monthlyClasses: '12 classes per month',
    price: 45,
    featured: true,
    bestFor: 'Most school-age children',
    includes: [
      '30-minute one-to-one classes',
      'Male or female tutor of your choice',
      'Any course from our syllabus',
      'Monthly progress report and assessment',
      'Free tutor change at any time',
    ],
  },
  {
    name: 'Intensive',
    classesPerWeek: '5 days a week',
    monthlyClasses: '20 classes per month',
    price: 60,
    bestFor: 'Hifz students and fast-track learners',
    includes: [
      '30 or 45-minute one-to-one classes',
      'Dedicated hifz supervisor',
      'Daily sabaq, sabqi and manzil plan',
      'Weekly assessment and parent call',
      'Priority scheduling',
    ],
  },
];

export const PRICING_NOTES = [
  'Fees are per student, per month, in USD. GBP, EUR, CAD and AUD are accepted.',
  'No registration fee and no hidden charges — cancel at any time.',
  '10% sibling discount from the second student onwards.',
  '45 and 60-minute class lengths are available on request.',
];

/* Social proof ───────────────────────────────────────────────────────── */

export const TESTIMONIALS = [
  {
    quote:
      'My two daughters had struggled with Qaida for a year at weekend school. Six months of one-to-one classes here and both read from the Mushaf. Their teacher is patient and never makes them feel slow.',
    name: 'Fatima R.',
    location: 'Birmingham, UK',
  },
  {
    quote:
      'I reverted three years ago and was too embarrassed to ask basic questions in a group. My tutor started me from the alphabet and I have now prayed my first full salah in Arabic.',
    name: 'Daniel A.',
    location: 'Toronto, Canada',
  },
  {
    quote:
      'My son is on juz 14 of his hifz and the daily revision plan is what makes the difference. We get a written report every month and the supervisor actually calls to discuss it.',
    name: 'Imran S.',
    location: 'Houston, USA',
  },
];

/* FAQ ────────────────────────────────────────────────────────────────── */

export const FAQS = [
  {
    q: 'How do the online classes actually work?',
    a: 'Each class is a private live video lesson on Zoom, Skype or Google Meet. Your teacher shares the Quran page on screen, listens to you recite and corrects you in real time. All you need is a phone, tablet or laptop and an internet connection.',
  },
  {
    q: 'Are the trial classes really free?',
    a: `Yes. You get ${BRAND.trialClasses} full trial classes at no cost, and we do not ask for card details to book them. You only pay if you decide to continue afterwards.`,
  },
  {
    q: 'Can my daughter be taught by a female teacher?',
    a: 'Of course. We have qualified female teachers for sisters and young girls, and you can request one when you book your trial. Parents are welcome to sit in on any class.',
  },
  {
    q: 'What ages do you teach?',
    a: 'From about four years old right through to adults and senior learners. Beginners are never too old — a large share of our students are adults starting from the Arabic alphabet.',
  },
  {
    q: 'I live in the USA, UK or Australia. Will the timings work?',
    a: `Yes. We teach around the clock and our teachers already work across ${BRAND.regions.join(', ')}. You choose the slots that suit your family and we schedule the teacher around you.`,
  },
  {
    q: 'What happens if we miss a class?',
    a: 'Let your teacher or the coordinator know in advance and the class is rescheduled at no cost. Missed classes are not deducted from your monthly quota when notice is given.',
  },
  {
    q: 'How long does it take to finish the Quran?',
    a: 'It depends on the student and the course. Noorani Qaida typically takes three to six months, fluent reading six to twelve months, and full hifz two to four years with consistent daily classes.',
  },
  {
    q: 'How do we pay the fees?',
    a: 'Monthly, in advance, by bank transfer, card or the usual online payment services. There is no contract and no cancellation fee — stop whenever you wish.',
  },
];
