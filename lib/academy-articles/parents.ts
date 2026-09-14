import type { Article } from './types';

const PUBLISHED = '2026-09-14';

export const teachChildAtHome: Article = {
  slug: 'teach-your-child-quran-at-home',
  title: 'How to teach your child to read the Quran at home',
  description:
    'A practical order of work for parents teaching Quran at home: what to start with, how long sessions should be, and the mistakes that stall children.',
  excerpt:
    'Most parents start in the wrong place and give up by week three. Here is the order of work that actually holds, and how long each stage really takes.',
  category: 'For parents',
  readingMinutes: 8,
  published: PUBLISHED,
  updated: PUBLISHED,
  intro: [
    'Nearly every Muslim parent intends to teach their child to read the Quran. Far fewer get past the first few weeks — not through lack of sincerity, but because the work is usually started in the wrong place and measured the wrong way.',
    'What follows is the order of work our teachers use with beginners, written so a parent can run it at home. It assumes no Arabic on your part beyond recognising the letters.',
  ],
  takeaways: [
    'Start with letter recognition and pronunciation, not with surahs to memorise.',
    'Ten focused minutes a day beats an hour on Sunday. Consistency is the whole game.',
    'Do not correct every mistake in a sitting — pick one thing to fix per session.',
    'Memorisation and reading are separate skills; running them together confuses beginners.',
  ],
  sections: [
    {
      heading: 'Start with the letters, not with surahs',
      body: [
        'The instinct is to begin with Surah al-Fatihah, because the child already half-knows it from salah. It feels like progress, and for a week or two it is. Then you reach a verse they have not heard before and discover they cannot read a single word — they were reciting from memory the whole time.',
        'Reading and memorisation are different skills. A child who has memorised twenty surahs by ear may still not be able to identify a single letter on the page. Begin instead with the Arabic alphabet: the shape of each letter, its name, and crucially its sound.',
      ],
      bullets: [
        'Teach the sound, not just the name — "ba", not only "baa".',
        'Cover the letters that look alike as pairs: ba/ta/tha, jim/ha/kha, dal/dhal.',
        'Only once recognition is instant should you move to joining letters.',
      ],
    },
    {
      heading: 'Keep sessions short and daily',
      body: [
        'Ten to fifteen minutes every day will take a child further in a month than two hours every Saturday. Attention is the limiting resource, not time. A young child who is still enjoying the lesson when you stop will come back willingly tomorrow; one who has been pushed to the end of their concentration will start dreading it.',
        'Fix the session to an anchor in the day — after Maghrib, or straight after school before screens come out. A slot that has to be negotiated each day will quietly disappear within a fortnight.',
      ],
    },
    {
      heading: 'Correct one thing at a time',
      body: [
        'When a child reads a line with four mistakes, the temptation is to fix all four. Do not. Pick the one that matters most — usually a letter sound coming from the wrong place in the mouth — and work on that alone for the session.',
        'This is the single hardest discipline for a parent, and it is also what separates a child who keeps going from one who decides they are "bad at Quran". Accuracy builds in layers, and each layer needs time to settle before the next goes on top.',
      ],
    },
    {
      heading: 'Use a structured primer rather than improvising',
      body: [
        'Noorani Qaida exists precisely because teaching Arabic reading in a sensible order is a solved problem. It introduces letters, then joins, then vowels, then sukoon, madd and tanween, each building on the last, with drill pages that are deliberately repetitive.',
        'Working from a Qaida also removes the "what do I teach today?" problem that ends most home teaching. You open at the page you reached yesterday. That alone keeps many families going.',
      ],
    },
    {
      heading: 'Know when to bring in a teacher',
      body: [
        'There are two points where parents commonly hit a wall. The first is pronunciation: letters like ص, ض, ط, ظ, ع, ح and ق have no English equivalent, and if you cannot produce them yourself you cannot teach or correct them. The second is the point where your child starts resisting the lesson specifically because it is you giving it — a very ordinary dynamic, and not a failure on anyone’s part.',
        'Neither means stopping. It usually means the teaching moves to someone qualified while you keep the routine, the encouragement and the listening at home — which is the part a teacher cannot do for you.',
      ],
    },
    {
      heading: 'A realistic first-year plan',
      body: [
        'For a child of six or seven, starting from nothing, a workable year looks roughly like this: three to four months on letters and joining, two to three months on vowels, sukoon and madd, then moving into short surahs read from the Mushaf rather than recited from memory. By the end of the year most children are reading simple pages slowly but accurately.',
        'Slowly but accurately is the goal. Speed arrives on its own; accuracy, once skipped, takes years to repair.',
      ],
    },
  ],
  faqs: [
    {
      q: 'What age should a child start learning to read the Quran?',
      a: 'Around four or five for letter recognition, as a game rather than a lesson, and five to seven for structured reading. There is no lateness to worry about — children who start at nine or ten often move faster because their concentration is better developed.',
    },
    {
      q: 'Should my child memorise surahs at the same time as learning to read?',
      a: 'Yes, but keep them separate in the day. Memorisation by listening and repeating is how children learn what they need for salah. Reading is a different skill that has to be built from the letters. Mixing the two in one sitting tends to blur both.',
    },
    {
      q: 'I cannot pronounce Arabic properly myself. Can I still teach my child?',
      a: 'You can teach recognition, routine and discipline, which matter enormously. Pronunciation needs someone who can produce the sounds correctly, since a mistake learned early is very hard to unlearn later. Many families combine home practice with a few short classes a week for exactly this reason.',
    },
  ],
  relatedCourses: ['noorani-qaida', 'quran-reading', 'salah-duas'],
  keywords: [
    'teach child quran at home',
    'how to teach quran to kids',
    'quran reading for beginners kids',
    'noorani qaida at home',
  ],
};

export const teachingChildrenSalah: Article = {
  slug: 'teaching-children-salah',
  title: 'Teaching your child salah, step by step',
  description:
    'How to teach a child to pray: the order to introduce wudu, positions and words, what to expect at each age, and how to build the habit without force.',
  excerpt:
    'The words are the easy part. Here is how to build the habit, in the order children actually absorb it, from age four through to the age of obligation.',
  category: 'For parents',
  readingMinutes: 7,
  published: PUBLISHED,
  updated: PUBLISHED,
  intro: [
    'Teaching salah is less about memorising Arabic than about building a habit that survives adolescence. The words can be learned in a few months; the habit takes years, and it is formed mostly by what a child sees at home.',
    'This is the sequence our teachers use, along with what is reasonable to expect at each stage.',
  ],
  takeaways: [
    'Let children imitate the movements long before they learn the words.',
    'Teach wudu physically, at the sink, not from a diagram.',
    'Introduce one prayer as the family anchor rather than demanding all five at once.',
    'Expect to repeat everything many times — this is normal, not a sign of failure.',
  ],
  sections: [
    {
      heading: 'Stage one: imitation, from about four',
      body: [
        'Small children learn salah the way they learn everything else — by copying. Long before a child can recite anything, they can stand beside you, bow when you bow and prostrate when you prostrate. Let them, even when it is chaotic and they are doing sujud on your prayer mat while you are still in ruku.',
        'This stage has one purpose: to make prayer a normal, expected part of the day rather than something introduced later as a duty.',
      ],
    },
    {
      heading: 'Stage two: wudu, taught at the sink',
      body: [
        'Wudu is physical and should be taught physically. Stand with the child at the sink and do it together, naming each step as you go, in whatever order you follow. Diagrams and videos are useful for revision but do not replace doing it.',
        'Two things are worth insisting on early: washing the whole limb rather than splashing it, and doing the steps in order. Both are much harder to correct once a careless habit has formed.',
      ],
    },
    {
      heading: 'Stage three: the words, in small pieces',
      body: [
        'Start with what is repeated most: the takbir, Surah al-Fatihah, the tasbih of ruku and sujud. Teach each in short daily pieces rather than as a block to be memorised in a week.',
        'Explain the meaning as you go, even to young children, and especially for al-Fatihah. A child who knows they are asking to be guided is doing something different from a child producing sounds.',
      ],
      bullets: [
        'Takbir and the opening of the prayer',
        'Surah al-Fatihah, then one short surah',
        'Tasbih for ruku and sujud',
        'Tashahhud, then the salawat and the salam',
      ],
    },
    {
      heading: 'Stage four: building the habit',
      body: [
        'Rather than demanding all five prayers the day a child turns seven, pick one prayer that the family reliably prays together — usually Maghrib — and make it the anchor. When that is genuinely established, add a second.',
        'The Prophet ﷺ instructed that children be told to pray at seven, with correction coming only at ten. That three-year gap is instructive: the expectation comes first, and years of patient repetition come before any insistence. Prayer enforced by anger tends to end the moment supervision does.',
      ],
    },
    {
      heading: 'What to expect, and what not to worry about',
      body: [
        'Expect a child to forget the order of the rak‘ahs, to rush, to recite the wrong surah, and to ask to be excused. All of this is ordinary. What matters over a period of years is that prayer stays a normal part of the household and that asking questions about it is safe.',
        'Children who are taught salah alongside an explanation of what they are saying tend to keep it. Children who learn it only as a set of movements to be performed correctly often do not.',
      ],
    },
  ],
  faqs: [
    {
      q: 'At what age should a child start praying?',
      a: 'Children are instructed to pray from around the age of seven, with firmer correction from ten. Before that, imitation and attendance are the goal — a four-year-old standing beside you in salah is learning exactly what they should be.',
    },
    {
      q: 'My child rushes through salah. How do I fix it?',
      a: 'Pray beside them rather than watching them. Children match the pace of the person next to them far more readily than they respond to being told to slow down. Praying the same prayer together every day, unhurriedly, fixes it faster than any instruction.',
    },
    {
      q: 'Should my child learn the meanings or just the Arabic?',
      a: 'Both, and earlier than most people expect. The Arabic has to be correct, but a child who understands that al-Fatihah is a request for guidance prays differently from one repeating memorised sounds. Teach one short meaning per week alongside the words.',
    },
  ],
  relatedCourses: ['salah-duas', 'islamic-studies', 'noorani-qaida'],
  keywords: [
    'teach child to pray salah',
    'how to teach kids namaz',
    'when should children start praying',
    'teaching wudu to children',
  ],
};
