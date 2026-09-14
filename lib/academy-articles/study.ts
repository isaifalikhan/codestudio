import type { Article } from './types';

const PUBLISHED = '2026-09-14';

export const howLongDoesHifzTake: Article = {
  slug: 'how-long-does-hifz-take',
  title: 'How long does it take to memorise the Quran?',
  description:
    'Realistic hifz timelines by age and hours per day, why revision takes more time than new memorisation, and how to tell whether a plan is sustainable.',
  excerpt:
    'Two years, five years, or never finished — the difference is almost never talent. It is the revision plan, and here is the arithmetic behind it.',
  category: 'Memorisation',
  readingMinutes: 8,
  published: PUBLISHED,
  updated: PUBLISHED,
  intro: [
    'The honest answer is that it depends on hours per day and on revision discipline, not on talent. Two children of identical ability, one doing forty focused minutes daily and the other doing two hours twice a week, will finish years apart.',
    'Below is the arithmetic, and the part of it that most plans get wrong.',
  ],
  takeaways: [
    'Full-time hifz: commonly two to three years. Part-time alongside school: four to six.',
    'Revision eventually takes more daily time than new memorisation — plan for it from day one.',
    'Daily consistency beats volume; a missed week costs more than a slow week.',
    'Memorising without secure Tajweed locks in mistakes across thirty juz.',
  ],
  sections: [
    {
      heading: 'The three parts of a hifz day',
      body: [
        'Every functioning hifz plan has three components, and skipping any one of them is why plans collapse in the second year.',
      ],
      bullets: [
        'Sabaq — the new portion memorised today',
        'Sabqi — recent memorisation, revised daily for several weeks',
        'Manzil — older memorisation, cycled through on a longer rotation',
      ],
    },
    {
      heading: 'Why revision grows and new memorisation does not',
      body: [
        'Adding half a page a day is roughly the same effort in month one and month thirty. Revision is not: by the time a student holds fifteen juz, keeping that secure takes substantially longer each day than learning the next half page.',
        'This is the arithmetic that defeats most part-time plans. A child memorising a page a day with no revision structure will appear to be flying for six months, then spend the following year discovering that the first ten juz have quietly evaporated. Any plan that does not budget more time for revision than for new memorisation by the second year is not a plan.',
      ],
    },
    {
      heading: 'Realistic timelines',
      body: [
        'Full-time students in a dedicated hifz programme — several hours a day, six days a week — commonly complete in two to three years. Children memorising alongside full-time school, at thirty to sixty minutes a day, typically take four to six years.',
        'Adults with work and family usually work in a different frame: selected juz, or the surahs used most in salah, rather than the full thirty juz. That is a legitimate goal, not a lesser one, and it is far more likely to be completed.',
      ],
    },
    {
      heading: 'Memorise on top of secure Tajweed, not before it',
      body: [
        'A student who memorises with a pronunciation error repeats that error every time they revise, for years. Correcting it later means unpicking a motor habit reinforced hundreds of times across thirty juz.',
        'This is why reputable hifz programmes require fluent, Tajweed-correct reading before memorisation begins. Starting hifz early with weak reading feels faster for about eight months and is slower over the whole journey.',
      ],
    },
    {
      heading: 'Signs a plan is not sustainable',
      body: [
        'Some warning signs show up long before a student stalls.',
      ],
      bullets: [
        'New memorisation happens daily but revision only "when there is time"',
        'The daily target was set once and never adjusted as the load grew',
        'Nobody tests older juz — progress is measured only by how far the student has reached',
        'The student can recite a juz they revised yesterday but not one from last year',
      ],
    },
    {
      heading: 'What a good supervisor actually does',
      body: [
        'Beyond listening to new memorisation, a supervisor sets the daily target against the student’s real capacity, adjusts it as the revision load grows, tests older portions on a schedule, and tells a family honestly when the pace needs to come down.',
        'That last part matters most. A supervisor who never revises the target downward is not supervising; they are just listening.',
      ],
    },
  ],
  faqs: [
    {
      q: 'How long does hifz take for a child at school full-time?',
      a: 'With thirty to sixty minutes of focused work a day, most children take four to six years for the full thirty juz. Shorter, daily sessions work far better than long weekend sessions.',
    },
    {
      q: 'Can an adult with a full-time job memorise the Quran?',
      a: 'Yes, though a realistic goal is usually selected juz rather than all thirty. Twenty minutes of new memorisation and twenty of revision, daily, is a pace many adults sustain for years.',
    },
    {
      q: 'What happens if we miss a week?',
      a: 'New memorisation pauses and revision continues — that is the priority order. A week without revision costs more than a week without new memorisation, because it is older portions that decay.',
    },
  ],
  relatedCourses: ['hifz', 'tajweed', 'quran-reading'],
  keywords: [
    'how long does hifz take',
    'memorise quran timeline',
    'hifz plan for children',
    'quran memorisation revision',
  ],
};

export const tajweedForBeginners: Article = {
  slug: 'tajweed-rules-for-beginners',
  title: 'Tajweed rules for beginners: where to actually start',
  description:
    'The Tajweed rules that change your recitation first — makharij, noon sakinah, madd and qalqalah — in the order a beginner should learn them.',
  excerpt:
    'There are dozens of rules and you do not need most of them yet. These are the four areas that fix the majority of beginner mistakes.',
  category: 'Tajweed',
  readingMinutes: 8,
  published: PUBLISHED,
  updated: PUBLISHED,
  intro: [
    'Tajweed is often presented as a long list of Arabic terms to be memorised, which is why many students bounce off it. In practice, a small number of rules account for most of what makes recitation correct or incorrect, and they can be learned in a sensible order.',
    'Here is that order, with the reasoning for it.',
  ],
  takeaways: [
    'Articulation points come first — the rules are meaningless if the letters are wrong.',
    'Noon sakinah and tanween cover a large share of everyday recitation.',
    'Madd errors are the most audible mistake a listener notices.',
    'Learn rules by applying them to verses, not by memorising definitions.',
  ],
  sections: [
    {
      heading: 'First: makharij, the articulation points',
      body: [
        'Before any named rule, a student needs each letter to come from the right place — throat, tongue, lips — and with the right quality. Most beginner mistakes are here rather than in the rules: ص read as س, ط as ت, ح as ه, ق as ك.',
        'No amount of rule knowledge compensates for this. A student applying ikhfa perfectly to a mispronounced noon is still reading incorrectly, and rules layered on wrong letters simply preserve the error.',
      ],
    },
    {
      heading: 'Second: noon sakinah and tanween',
      body: [
        'This single family of rules governs an enormous proportion of the text, which is why it is taught early. A noon with sukoon, or a tanween, behaves in one of four ways depending on the letter that follows it.',
      ],
      bullets: [
        'Izhar — pronounced clearly, before the throat letters',
        'Idgham — merged into the following letter, with or without ghunnah',
        'Iqlab — turned into a meem before ب',
        'Ikhfa — hidden, with a nasal sound held before the remaining letters',
      ],
    },
    {
      heading: 'Third: madd, the rules of extension',
      body: [
        'Madd governs how long a vowel is held. Natural madd is two counts; other types extend to four, five or six depending on what follows. Getting these wrong is the most audible error to any listener, because it changes the rhythm of the verse.',
        'Start with natural madd and make it consistent before touching the longer types. A student who holds every madd for an inconsistent, improvised length has a rhythm problem that no later rule will fix.',
      ],
    },
    {
      heading: 'Fourth: qalqalah and ghunnah',
      body: [
        'Qalqalah is the slight echo on ق, ط, ب, ج and د when they carry sukoon. Ghunnah is the nasal sound held on meem and noon with shaddah. Both are quick to learn, immediately audible, and give beginners an early sense of progress — which is exactly why they are worth teaching at this point rather than first.',
      ],
    },
    {
      heading: 'Learn by applying, not by defining',
      body: [
        'A student who can define ikhfa but cannot spot it in a verse has learned nothing usable. The productive method is to take a short surah, find every instance of the rule being studied, mark it, and read the surah repeatedly with a teacher correcting in real time.',
        'This is also why Tajweed is difficult to learn from video alone. You cannot hear your own errors: the whole value is in someone listening and correcting the same mistake until it stops.',
      ],
    },
    {
      heading: 'Roughly how long this takes',
      body: [
        'For a student already reading fluently, six to nine months of two or three classes a week covers the rules above thoroughly and applies them across a range of surahs. Mastery — recitation that stays correct at speed and under fatigue — takes longer, and comes from reading daily with periodic correction rather than from more rules.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Do I need Tajweed to read the Quran?',
      a: 'The rules that prevent changing a letter’s sound or a word’s meaning are obligatory in recitation; the finer points of beautification are a perfection beyond that. In practice, every student should learn correct articulation, and formal rules follow once reading is fluent.',
    },
    {
      q: 'Can I learn Tajweed from videos?',
      a: 'You can learn what the rules are. You cannot learn to apply them, because you cannot hear your own mistakes — that requires someone listening and correcting. Videos work well as revision alongside live classes.',
    },
    {
      q: 'In what order should the rules be learned?',
      a: 'Articulation points first, then noon sakinah and tanween, then madd, then qalqalah and ghunnah. Everything after that builds on those four.',
    },
  ],
  relatedCourses: ['tajweed', 'quran-reading', 'ijazah-qirat'],
  keywords: [
    'tajweed rules for beginners',
    'learn tajweed online',
    'noon sakinah rules',
    'madd rules quran',
  ],
};
