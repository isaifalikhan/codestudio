import type { CourseDetail } from './types';

export const hifz: CourseDetail = {
  slug: 'hifz',
  seoTitle: 'Online Hifz Classes — Quran Memorisation',
  description:
    'Structured Quran memorisation with a dedicated supervisor: daily sabaq, sabqi and manzil, realistic targets, monthly testing and parent reports.',
  keywords: [
    'online hifz classes',
    'quran memorization online',
    'hifz course online',
    'memorise quran with teacher',
  ],
  quickAnswer:
    'Hifz is memorisation of the Quran under supervision, built on three daily parts: sabaq (new memorisation), sabqi (recent revision) and manzil (older revision). Full-time students commonly complete in two to three years; children memorising alongside school usually take four to six.',
  intro: [
    'Memorising the Quran is not primarily a memory problem. Almost every student can learn half a page. What defeats most plans is revision: by the time a student holds fifteen juz, keeping that secure takes longer each day than learning the next portion.',
    'So this course is built around the revision cycle rather than around the daily target, and the target is adjusted as the revision load grows. A supervisor who never revises the target downwards is not supervising.',
  ],
  whoItIsFor: [
    'Children from about six who read fluently and want to begin the full thirty juz',
    'Students memorising selected juz — commonly Juz Amma, Yasin, Al-Kahf and Al-Mulk',
    'Adults memorising alongside work, usually with a smaller daily portion and a longer horizon',
    'Students who began hifz elsewhere and have lost their older memorisation',
  ],
  prerequisites: [
    'Fluent, Tajweed-correct reading. Memorising on top of a pronunciation error repeats that error every revision for years, and unpicking it later means relearning across thirty juz.',
  ],
  syllabus: [
    {
      stage: 'Assessment and plan',
      detail:
        'Reading is tested, any existing memorisation is heard, and a daily portion is set against what the student can genuinely sustain — usually smaller than families expect at first.',
      typical: 'week 1',
    },
    {
      stage: 'Sabaq — new memorisation',
      detail:
        'The new portion for the day, prepared with the teacher and recited back until it is secure. Size is adjusted up or down monthly rather than fixed once.',
      typical: 'daily',
    },
    {
      stage: 'Sabqi — recent revision',
      detail:
        'Everything memorised in recent weeks, revised daily while it is still fragile. This is the part most self-directed plans skip, and it is why they fail in year two.',
      typical: 'daily',
    },
    {
      stage: 'Manzil — older revision',
      detail:
        'Completed juz cycled on a longer rotation so nothing decays. As the total grows, manzil time overtakes sabaq time — the plan expects this rather than being surprised by it.',
      typical: 'daily, growing',
    },
    {
      stage: 'Testing and consolidation',
      detail:
        'Monthly tests on older portions chosen at random, plus consolidation weeks where new memorisation pauses entirely and only revision runs.',
      typical: 'monthly',
    },
  ],
  inAClass: [
    'The student recites yesterday’s sabaq from memory, then the day’s sabqi portion.',
    'The teacher listens without prompting, notes every slip, and marks the verses that need extra work.',
    'The new portion is prepared together, and the target for tomorrow is set based on how today went.',
  ],
  assessment: [
    'Monthly written reports covering new memorisation, revision quality, attendance and any adjustment to the daily target.',
    'Random testing of older juz — the real measure of a hifz plan is not how far a student has reached but what they can still recite from a year ago.',
  ],
  nextCourses: ['ijazah-qirat', 'tajweed'],
  relatedArticles: ['how-long-does-hifz-take', 'tajweed-rules-for-beginners'],
  faqs: [
    {
      q: 'How long does it take to memorise the whole Quran?',
      a: 'Full-time students in a dedicated programme commonly take two to three years. Children memorising alongside full-time school, at thirty to sixty minutes a day, typically take four to six years. Daily consistency matters far more than long weekend sessions.',
    },
    {
      q: 'Can my child do hifz while at school full-time?',
      a: 'Yes. The usual pattern is a short class before school for new memorisation and a second short session for revision. The daily target is set to what the child can hold alongside schoolwork rather than to an ambitious schedule that collapses in month four.',
    },
    {
      q: 'What happens if we miss a week?',
      a: 'New memorisation pauses and revision continues — that is the priority order. It is older portions that decay, so a week without revision costs more than a week without new memorisation.',
    },
    {
      q: 'Can an adult with a job memorise the Quran?',
      a: 'Yes, though a realistic goal is often selected juz rather than all thirty. Twenty minutes of new memorisation and twenty of revision daily is a pace many adults sustain for years.',
    },
  ],
};

export const translationTafseer: CourseDetail = {
  slug: 'translation-tafseer',
  seoTitle: 'Quran Translation and Tafseer Classes',
  description:
    'Understand what you recite: word-by-word Quranic vocabulary, context of revelation and classical tafseer, taught one-to-one from authentic sources.',
  keywords: [
    'quran translation classes online',
    'online tafseer course',
    'word by word quran meaning',
    'learn quran meaning online',
  ],
  quickAnswer:
    'This course moves from reciting the Quran to understanding it: word-by-word vocabulary, the context in which verses were revealed, and explanation drawn from classical tafseer. Nine to twelve months covers a substantial portion at two classes a week.',
  intro: [
    'Most students who can read the Quran fluently still do not know what they are saying. This course closes that gap, starting with the surahs recited most often in salah, so understanding arrives where it is used daily.',
    'Explanation is drawn from established classical tafseer rather than personal interpretation, and where scholars have differed, that difference is stated rather than flattened into one opinion.',
  ],
  whoItIsFor: [
    'Students aged about twelve and up who read fluently and want to understand',
    'Adults who have recited al-Fatihah for decades without knowing the meaning of its words',
    'Parents who want to answer their children’s questions about what a surah means',
    'Anyone preparing to study Arabic who wants Quranic vocabulary first',
  ],
  prerequisites: [
    'Fluent reading of the Mushaf. No Arabic grammar is assumed — vocabulary is built from the text itself.',
  ],
  syllabus: [
    {
      stage: 'The surahs of salah',
      detail:
        'Al-Fatihah word by word, then the short surahs recited most often, so the meaning attaches to what is already being said five times a day.',
      typical: '6–8 weeks',
    },
    {
      stage: 'Core Quranic vocabulary',
      detail:
        'The words that recur most across the Quran, learned in context. A few hundred words account for a very large share of the text.',
      typical: 'ongoing',
    },
    {
      stage: 'Asbab al-nuzul — context of revelation',
      detail:
        'Why particular verses were revealed and what they addressed, where that context is authentically reported.',
      typical: 'ongoing',
    },
    {
      stage: 'Surah studies',
      detail:
        'Complete surahs read with translation and tafseer — commonly Yasin, Al-Kahf, Al-Mulk, Ar-Rahman and Juz Amma — covering themes, structure and lessons.',
      typical: '6–9 months',
    },
  ],
  inAClass: [
    'The student recites the passage, then works through it word by word with the teacher.',
    'The teacher supplies the meaning, the grammar only where it changes the sense, and the tafseer of the passage.',
    'Each class closes with the practical lesson of the passage — what it asks of the reader.',
  ],
  assessment: [
    'Vocabulary recall is checked against previously studied passages rather than word lists.',
    'Students are asked to explain a passage in their own words, which shows understanding far better than translation does.',
  ],
  nextCourses: ['arabic-language', 'islamic-studies'],
  relatedArticles: ['learning-quran-as-an-adult', 'teach-your-child-quran-at-home'],
  faqs: [
    {
      q: 'Do I need to know Arabic to study tafseer?',
      a: 'No. Classes are taught in English with the Arabic explained word by word, so vocabulary is built from the text as you go. Students who want to go further usually move on to the Arabic language course.',
    },
    {
      q: 'Which tafseer do you teach from?',
      a: 'Explanation is drawn from established classical works rather than personal opinion, and where the scholars have differed the difference is stated. Tell us if your family follows a particular school and we will match you with a teacher accordingly.',
    },
    {
      q: 'What age is this suitable for?',
      a: 'Around twelve and upwards for the full course. Younger children usually take the meanings of short surahs alongside their reading classes rather than as a separate subject.',
    },
  ],
};

export const ijazahQirat: CourseDetail = {
  slug: 'ijazah-qirat',
  seoTitle: 'Quran Ijazah Course Online',
  description:
    'Recite the full Quran to an ijazah-holding sheikh and earn certification with a connected sanad, in Hafs an Asim or the ten qiraat.',
  keywords: [
    'quran ijazah online',
    'online ijazah course',
    'qirat course online',
    'ijazah with sanad',
  ],
  quickAnswer:
    'An ijazah is a licence to transmit the Quran, granted after reciting the entire Quran aloud to a sheikh who already holds one and who certifies the accuracy of that recitation. The course typically takes one to two years and ends with a certificate naming the chain of transmission.',
  intro: [
    'This is the most demanding course we teach and the only one with a formal credential at the end. The student recites the whole Quran to the sheikh — either from memory or from the Mushaf, depending on the type of ijazah sought — and every error is corrected until the recitation meets the standard.',
    'It is not a course that is attended so much as an examination that is sat over many months. Students are accepted only when their Tajweed is already secure.',
  ],
  whoItIsFor: [
    'Huffaz seeking certification in Hafs an Asim',
    'Advanced readers with strong Tajweed who want an ijazah in recitation from the Mushaf',
    'Teachers and imams who need a documented chain to teach with authority',
    'Students who have completed the Tajweed course and want to specialise in the ten qiraat',
  ],
  prerequisites: [
    'Secure, consistent Tajweed at reading speed, assessed before acceptance.',
    'For an ijazah in recitation from memory, completed hifz of the full thirty juz.',
  ],
  syllabus: [
    {
      stage: 'Entry assessment',
      detail:
        'An unseen passage is heard by the sheikh, who identifies the gaps that must be closed before the recitation proper can begin. Some students are asked to take Tajweed first.',
      typical: '1–2 classes',
    },
    {
      stage: 'Rules revision to certification standard',
      detail:
        'Systematic revision of makharij, sifat, the sakinah rules, madd and waqf — this time to the standard of a teacher rather than a student.',
      typical: '2–4 months',
    },
    {
      stage: 'Full recitation to the sheikh',
      detail:
        'The Quran is recited in portions across many months, with every error corrected and the portion repeated until accepted.',
      typical: '9–18 months',
    },
    {
      stage: 'Certification',
      detail:
        'On completion, an ijazah is granted naming the student, the recitation certified, and the chain of transmission through which it is held.',
      typical: 'on completion',
    },
    {
      stage: 'The ten qiraat (optional)',
      detail:
        'For students continuing beyond Hafs: the readings via Shatibiyyah and Durrah, studied one at a time.',
      typical: '1–3 years',
    },
  ],
  inAClass: [
    'The student recites the agreed portion without prompting.',
    'The sheikh stops only where there is an error, states the rule involved, and requires the passage again.',
    'A portion is signed off only when it is recited without error.',
  ],
  assessment: [
    'Continuous: every portion must be accepted before the next is heard.',
    'The final certificate is issued by the sheikh personally and records the chain through which the ijazah is held — ask to see that chain before enrolling anywhere, including here.',
  ],
  nextCourses: ['hifz'],
  relatedArticles: ['choosing-an-online-quran-teacher', 'tajweed-rules-for-beginners'],
  faqs: [
    {
      q: 'What exactly is an ijazah?',
      a: 'A licence to transmit the Quran. The student recites the entire Quran to a sheikh who already holds an ijazah; the sheikh certifies the accuracy of that recitation and grants permission to teach and transmit it. It certifies demonstrated accuracy, not attendance.',
    },
    {
      q: 'Do I need to be a hafiz to get an ijazah?',
      a: 'Not for an ijazah in recitation from the Mushaf, which is open to advanced readers with secure Tajweed. An ijazah in recitation from memory does require completed hifz.',
    },
    {
      q: 'How long does the ijazah course take?',
      a: 'Usually one to two years for Hafs an Asim, depending on how much is recited per session and how much correction is needed. Students continuing into the ten qiraat should expect considerably longer.',
    },
  ],
};
