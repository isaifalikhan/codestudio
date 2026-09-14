import type { CourseDetail } from './types';

export const islamicStudies: CourseDetail = {
  slug: 'islamic-studies',
  seoTitle: 'Online Islamic Studies Classes',
  description:
    'Structured Islamic studies one-to-one: aqeedah, the pillars, seerah of the Prophet ﷺ, hadith, everyday fiqh and manners, taught at the student’s level.',
  keywords: [
    'online islamic studies classes',
    'islamic studies for kids online',
    'learn seerah online',
    'online aqeedah classes',
  ],
  quickAnswer:
    'Islamic studies covers the knowledge every Muslim needs outside recitation: belief, the pillars, the life of the Prophet ﷺ, selected hadith, everyday fiqh and manners. It runs alongside Quran classes rather than replacing them, and continues for as long as the student wants.',
  intro: [
    'Children who can recite beautifully but cannot say why we pray, or who the Prophet ﷺ was beyond a name, have been taught half of what they need. This course covers the other half.',
    'Content is pitched to the student — stories and practice for young children, evidence and reasoning for teenagers and adults — and follows mainstream, authentic sources.',
  ],
  whoItIsFor: [
    'Children growing up outside a Muslim-majority environment, where assumed knowledge is not absorbed by osmosis',
    'Teenagers who are starting to ask harder questions and deserve real answers',
    'Adults and reverts who need the fundamentals laid out in order rather than picked up piecemeal',
    'Families who want their children taught alongside their Quran classes',
  ],
  prerequisites: ['None. Content is matched to the student’s age and existing knowledge.'],
  syllabus: [
    {
      stage: 'Aqeedah — belief',
      detail:
        'The six pillars of iman, the names and attributes of Allah, and what belief in the unseen actually means, taught at an age-appropriate depth.',
    },
    {
      stage: 'The five pillars in practice',
      detail:
        'Shahadah, salah, zakah, fasting and hajj — what each requires, how it is performed, and the wisdom behind it.',
    },
    {
      stage: 'Seerah',
      detail:
        'The life of the Prophet ﷺ in sequence, from before prophethood through to the farewell sermon, along with the lives of the companions.',
    },
    {
      stage: 'Hadith',
      detail:
        'Selected hadith memorised with explanation — commonly the Forty Hadith of Imam an-Nawawi for older students.',
    },
    {
      stage: 'Everyday fiqh',
      detail:
        'Purity, prayer, fasting and zakah in practice, with the rulings a student actually encounters rather than edge cases.',
    },
    {
      stage: 'Adab and akhlaq',
      detail:
        'Manners with parents, neighbours and strangers; honesty, patience and the character the Prophet ﷺ was sent to perfect.',
    },
  ],
  inAClass: [
    'A short recap of the previous topic, then new material taught conversationally rather than dictated.',
    'Questions are encouraged — for teenagers especially, the class is the place where difficult questions should be safe to ask.',
    'Each session ends with one thing to apply that week.',
  ],
  assessment: [
    'Understanding is checked by asking the student to explain a topic in their own words.',
    'Monthly reports cover topics completed and what the student has grasped, not just attended.',
  ],
  nextCourses: ['translation-tafseer', 'arabic-language'],
  relatedArticles: ['teaching-children-salah', 'teach-your-child-quran-at-home'],
  faqs: [
    {
      q: 'Which school of thought do you teach?',
      a: 'Teaching follows mainstream, authentic sources, and where the four schools differ on a practical matter the difference is explained rather than hidden. Tell us which your family follows and we will match you with a teacher accordingly.',
    },
    {
      q: 'Can Islamic studies run alongside Quran classes?',
      a: 'Yes, and most families do exactly that — for example three Quran classes and one Islamic studies class a week. It can also be taken on its own.',
    },
    {
      q: 'My teenager has difficult questions about Islam. Is that a problem?',
      a: 'It is the opposite of a problem. Questions asked at fifteen and answered honestly are far better than questions suppressed. Our teachers are used to them, and a private class is the right setting for it.',
    },
  ],
};

export const salahDuas: CourseDetail = {
  slug: 'salah-duas',
  seoTitle: 'Learn Salah & Daily Duas Online',
  description:
    'A short practical course on wudu, the prayer step by step, and the masnoon duas for daily life — for children, new Muslims and anyone correcting their salah.',
  keywords: [
    'learn salah online',
    'how to pray namaz course',
    'daily duas for kids',
    'salah classes for new muslims',
  ],
  quickAnswer:
    'A practical two to three month course covering wudu, every word and action of the five daily prayers, and the masnoon duas for waking, eating, travelling and sleeping. Suitable for children from about five and for adults learning or correcting their prayer.',
  intro: [
    'Salah is the first thing a Muslim is asked about and the thing most often learned by imitation, with mistakes carried for decades. This course teaches it deliberately: the actions, the words, their meanings, and the conditions that make the prayer valid.',
    'It is short by design. Most students finish in two to three months and continue with reading or memorisation.',
  ],
  whoItIsFor: [
    'Children from about five learning to pray properly for the first time',
    'New Muslims who need salah before anything else',
    'Adults who pray but were never taught the words correctly',
    'Anyone unsure whether their wudu or prayer is valid and reluctant to ask in person',
  ],
  prerequisites: ['None. Arabic is taught by sound, so reading ability is not required to start.'],
  syllabus: [
    {
      stage: 'Purity and wudu',
      detail:
        'The conditions of purity, wudu step by step, what breaks it, ghusl, and tayammum where water is unavailable.',
      typical: '2–3 weeks',
    },
    {
      stage: 'The prayer, action by action',
      detail:
        'Standing, ruku, sujud and sitting — each position with the words said in it, learned one at a time rather than as a block.',
      typical: '3–4 weeks',
    },
    {
      stage: 'The words and their meanings',
      detail:
        'Takbir, al-Fatihah, the tasbih of ruku and sujud, tashahhud, salawat and the salam, with the meaning of each so the prayer is understood and not merely performed.',
      typical: '3–4 weeks',
    },
    {
      stage: 'The five prayers in practice',
      detail:
        'Rak‘ah counts, what is said aloud and what silently, prayer times, sunnah prayers, and what to do when something is forgotten.',
      typical: '2–3 weeks',
    },
    {
      stage: 'Daily duas and adhkar',
      detail:
        'Over forty masnoon duas with meanings — waking, eating, leaving the house, travelling, sleeping — plus the kalimas and the morning and evening adhkar.',
      typical: 'ongoing',
    },
  ],
  inAClass: [
    'The teacher demonstrates the action or the words and the student repeats until it is correct.',
    'For children, parents are encouraged to sit in for the first few sessions so the same thing is practised at home.',
    'Each class ends with one dua or one part of the prayer to use that week.',
  ],
  assessment: [
    'The student performs a full prayer for the teacher, who corrects the actions and the pronunciation.',
    'Duas are checked in use — asked for in context rather than recited from a list.',
  ],
  nextCourses: ['noorani-qaida', 'islamic-studies'],
  relatedArticles: ['teaching-children-salah', 'learning-quran-as-an-adult'],
  faqs: [
    {
      q: 'At what age should a child learn to pray?',
      a: 'Children are instructed to pray from around seven, with firmer correction from ten, but they can join in and learn the actions from four or five. Imitation comes first; the words follow.',
    },
    {
      q: 'I am a revert and know nothing. Where do I start?',
      a: 'Here. Salah first — wudu, the actions and the words you need to pray correctly — and then the Arabic alphabet. Trying to do both at once is the usual reason people stall in the first few months.',
    },
    {
      q: 'Do I need to read Arabic to take this course?',
      a: 'No. Everything is taught by sound and repetition, with transliteration and meaning alongside. Many students take this course while starting Noorani Qaida separately.',
    },
  ],
};

export const arabicLanguage: CourseDetail = {
  slug: 'arabic-language',
  seoTitle: 'Learn Quranic Arabic Online',
  description:
    'One-to-one Arabic classes: nahw, sarf and Quranic vocabulary for understanding the Quran and hadith, plus everyday conversational Arabic.',
  keywords: [
    'learn arabic online',
    'classical arabic course',
    'quranic arabic classes',
    'arabic grammar nahw online',
  ],
  quickAnswer:
    'Arabic here is taught for a purpose: to read the Quran and hadith in the original. The course covers grammar (nahw), morphology (sarf) and Quranic vocabulary, with conversational Arabic available alongside. Six to twelve months builds a working foundation.',
  intro: [
    'Translation will always be someone else’s reading of the text. Arabic gives a student direct access to it — and the variety used in the Quran is more learnable than most beginners expect, because its vocabulary is finite and repeats heavily.',
    'Students who want to speak as well as read can take conversational Arabic alongside the classical track; the two support each other.',
  ],
  whoItIsFor: [
    'Students aged about ten and up who want to understand the Quran without translation',
    'Adults studying tafseer who keep hitting the limits of an English rendering',
    'Hifz students who want to know what they are memorising',
    'Anyone preparing for formal Islamic study, where Arabic is assumed',
  ],
  prerequisites: [
    'Ability to read the Arabic script. Students who cannot yet read should take Noorani Qaida first — it is a few months’ work and makes everything after it faster.',
  ],
  syllabus: [
    {
      stage: 'Script, sounds and basic sentences',
      detail:
        'Reading with understanding rather than only pronunciation; nouns, simple verbal sentences and the pronoun system.',
      typical: '4–6 weeks',
    },
    {
      stage: 'Nahw — grammar',
      detail:
        'Case endings and what they tell you, the nominal and verbal sentence, prepositions, and the structures that carry most Quranic meaning.',
      typical: '3–5 months',
    },
    {
      stage: 'Sarf — morphology',
      detail:
        'Verb forms and patterns: how one root generates a family of related words, which is what turns a small vocabulary into a large one.',
      typical: '2–4 months',
    },
    {
      stage: 'Quranic vocabulary in context',
      detail:
        'The words that recur most across the Quran, learned from verses rather than lists, alongside the hadith vocabulary that overlaps with them.',
      typical: 'ongoing',
    },
    {
      stage: 'Conversational Arabic (optional)',
      detail:
        'Everyday spoken Arabic for students who want to use the language as well as read it — greetings, questions, describing and narrating.',
      typical: 'parallel track',
    },
  ],
  inAClass: [
    'A short grammar point, then immediate application to a Quranic verse containing it.',
    'Reading practice where the student parses a sentence aloud — identifying subject, verb and case — rather than translating word for word.',
    'Vocabulary is revised from earlier verses so it accumulates instead of being forgotten.',
  ],
  assessment: [
    'The measure is an unseen verse: can the student break it down and explain its structure and meaning without help?',
    'Periodic review of grammar covered, applied to new passages rather than to rehearsed examples.',
  ],
  nextCourses: ['translation-tafseer', 'ijazah-qirat'],
  relatedArticles: ['learning-quran-as-an-adult', 'noorani-qaida-explained'],
  faqs: [
    {
      q: 'How long does it take to understand Quranic Arabic?',
      a: 'Six to twelve months of consistent classes builds a working foundation — enough to follow the structure of a verse and recognise most of its vocabulary. Fluency in reading classical texts takes considerably longer.',
    },
    {
      q: 'Do you teach modern standard or classical Arabic?',
      a: 'Classical Arabic is the focus, since the goal is the Quran and hadith. Conversational modern standard Arabic is available as a parallel track for students who want to speak the language too.',
    },
    {
      q: 'My child is learning Arabic at school. Can you follow their syllabus?',
      a: 'Usually yes. Send us the syllabus or textbook and the teacher will work with it, so the child is not learning two conflicting approaches at once.',
    },
  ],
};
