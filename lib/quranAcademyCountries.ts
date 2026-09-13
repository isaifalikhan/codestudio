/**
 * Country landing pages for the academy (/quran-academy/[country]).
 *
 * Each entry carries genuinely local detail — school hours, community
 * languages, time zones, currency and payment habits — rather than the same
 * paragraph with the country name swapped in. Near-identical pages across a
 * list of locations are doorway pages, which Google demotes; pages that answer
 * "what does this look like for a family in *my* country" are what rank.
 */

export type CountryFaq = { q: string; a: string };

export type CountryPage = {
  slug: string;
  country: string;
  /** Adjective form, e.g. "British" — used in headings and copy. */
  adjective: string;
  region: string;
  /** Time zone label with UTC offsets, spelled out for clarity. */
  timezone: string;
  /** Concrete class slots in local time. */
  slots: string[];
  cities: string[];
  /** Languages our tutors share with that country's Muslim communities. */
  communityLanguages: string[];
  currency: { code: string; symbol: string; note: string };
  /** One or two sentences of genuinely local context. */
  intro: string;
  /** Three locally specific reasons, not generic selling points. */
  highlights: string[];
  faqs: CountryFaq[];
};

export const COUNTRY_PAGES: CountryPage[] = [
  {
    slug: 'uk',
    country: 'the United Kingdom',
    adjective: 'British',
    region: 'United Kingdom & Ireland',
    timezone: 'GMT in winter, BST in summer (UTC+0 / UTC+1)',
    slots: [
      '4:00pm – 7:00pm on weekdays, straight after the school run',
      'After Isha, which runs from about 6pm in December to 10:30pm in June',
      'Saturday and Sunday mornings for hifz students',
    ],
    cities: ['London', 'Birmingham', 'Manchester', 'Bradford', 'Leicester', 'Glasgow', 'Cardiff'],
    communityLanguages: ['English', 'Urdu', 'Bengali', 'Arabic', 'Gujarati'],
    currency: { code: 'GBP', symbol: '£', note: 'Pay by UK bank transfer, card or PayPal.' },
    intro:
      'Most British families already send their children to a local madrasah two or three evenings a week, and find the class sizes make individual correction impossible. Our classes sit alongside that: one child, one teacher, the same evenings, without the drive.',
    highlights: [
      'Slots that fit around a 3:15pm school finish and GCSE revision timetables',
      'Teachers who speak Urdu, Bengali and Gujarati as well as English, so grandparents can follow the lesson too',
      'Summer timetable that shifts with Isha when it moves past 10pm in June',
    ],
    faqs: [
      {
        q: 'Do your timings work around British school hours?',
        a: 'Yes. The busiest slots for UK families are 4pm to 7pm on weekdays, after the school run and before dinner, plus weekend mornings. We schedule in GMT or BST and shift automatically when the clocks change.',
      },
      {
        q: 'Can this replace our local madrasah?',
        a: 'Many families use it as a replacement, others as a supplement. Because the class is one-to-one, an hour a week here typically covers more ground than several evenings in a group of twenty — but we are happy to follow your madrasah syllabus so the child is not learning two different things.',
      },
      {
        q: 'How do we pay from the UK?',
        a: 'Fees are quoted in USD but can be paid in pounds by UK bank transfer, debit or credit card, or PayPal. There is no registration fee and no contract.',
      },
    ],
  },
  {
    slug: 'ireland',
    country: 'Ireland',
    adjective: 'Irish',
    region: 'United Kingdom & Ireland',
    timezone: 'GMT in winter, IST in summer (UTC+0 / UTC+1)',
    slots: [
      '3:30pm – 7:00pm on weekdays',
      'Evening classes after Isha',
      'Weekend mornings for adults and hifz students',
    ],
    cities: ['Dublin', 'Cork', 'Galway', 'Limerick', 'Waterford'],
    communityLanguages: ['English', 'Arabic', 'Urdu'],
    currency: { code: 'EUR', symbol: '€', note: 'Pay by SEPA transfer, card or Revolut.' },
    intro:
      'Outside Dublin and Cork there are few weekend Islamic schools within a reasonable drive, so Irish families often carry the whole burden of teaching Quran at home. A scheduled one-to-one class removes the driving and the guesswork.',
    highlights: [
      'No travel — the same standard of teaching in Galway or Waterford as in Dublin',
      'Classes in Irish school-term hours, with flexibility during midterm breaks',
      'Fees payable in euro by SEPA transfer or Revolut',
    ],
    faqs: [
      {
        q: 'We live far from a mosque or Islamic school. Does that matter?',
        a: 'Not at all. Every class is delivered online, so a family in rural Galway gets exactly the same teacher and syllabus as one in Dublin 15. All you need is a laptop, tablet or phone.',
      },
      {
        q: 'Do you teach adult reverts in Ireland?',
        a: 'Yes, and a good share of our Irish students are adults starting from the Arabic alphabet. Classes are private, so there is no group to feel self-conscious in front of.',
      },
      {
        q: 'Can we pay in euro?',
        a: 'Yes — SEPA bank transfer, card or Revolut. Fees are listed in USD and converted at the rate on the day you pay.',
      },
    ],
  },
  {
    slug: 'germany',
    country: 'Germany',
    adjective: 'German',
    region: 'Western Europe',
    timezone: 'CET in winter, CEST in summer (UTC+1 / UTC+2)',
    slots: [
      '2:00pm – 6:00pm, after Grundschule and Ganztagsschule finish',
      'Evening classes from 7pm for working adults',
      'Saturday mornings, when most Koranschulen are full',
    ],
    cities: ['Berlin', 'Hamburg', 'Cologne', 'Frankfurt', 'Munich', 'Duisburg', 'Stuttgart'],
    communityLanguages: ['English', 'Arabic', 'Turkish-friendly tutors', 'Urdu'],
    currency: { code: 'EUR', symbol: '€', note: 'Pay by SEPA-Überweisung, card or PayPal.' },
    intro:
      'German school days end anywhere between 1pm and 4pm depending on the Bundesland and whether the child is in a Ganztagsschule, so a fixed evening madrasah slot rarely suits everyone in a family. We schedule each child individually around their own Stundenplan.',
    highlights: [
      'Afternoon slots from 2pm that use the gap between school finishing and dinner',
      'Teachers used to students whose first language is German, not Arabic or Urdu',
      'Fees in euro, paid by SEPA transfer — no international card charges',
    ],
    faqs: [
      {
        q: 'Do your teachers understand students who grew up speaking German?',
        a: 'Yes. Our teachers instruct in clear, simple English and are used to students whose everyday language is German rather than Arabic or Urdu. Pronunciation is taught from the makharij, so no prior Arabic is assumed.',
      },
      {
        q: 'Can each of our children have a different class time?',
        a: 'Yes, and most German families do exactly that, because siblings often finish school at different times. Each child gets their own teacher, timetable and progress report, with a 10% discount from the second student onwards.',
      },
      {
        q: 'What about Ramadan and school holidays?',
        a: 'We shift timetables during Ramadan — many families move to after Taraweeh — and pause or reduce classes during Sommerferien without any cancellation fee.',
      },
    ],
  },
  {
    slug: 'france',
    country: 'France',
    adjective: 'French',
    region: 'Western Europe',
    timezone: 'CET in winter, CEST in summer (UTC+1 / UTC+2)',
    slots: [
      'Wednesday afternoons, when French primary schools are closed',
      '5:00pm – 8:00pm on weekdays after collège and lycée',
      'Saturday mornings for hifz',
    ],
    cities: ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Lille', 'Strasbourg', 'Nice'],
    communityLanguages: ['English', 'Arabic', 'Maghrebi Arabic-friendly tutors'],
    currency: { code: 'EUR', symbol: '€', note: 'Pay by virement SEPA, card or PayPal.' },
    intro:
      'French families have a standing advantage: Wednesday afternoons are free in most primary schools, and it is by far our most requested slot for children in France. Older students take evening classes after collège or lycée.',
    highlights: [
      'Wednesday-afternoon classes, the natural slot in the French school week',
      'Teachers comfortable with students from Maghrebi and West African families',
      'Private classes at home, with no association or mosque timetable to fit into',
    ],
    faqs: [
      {
        q: 'Are Wednesday afternoon classes available?',
        a: 'Yes, and they are our most popular slot for French children, since most primary schools are closed on Wednesday afternoons. Book early — those slots fill first each term.',
      },
      {
        q: 'Do you teach Arabic as a language as well as Quran?',
        a: 'Yes. Alongside Quran recitation we teach classical and conversational Arabic — grammar, morphology and vocabulary — which many French families take together with Quran classes.',
      },
      {
        q: 'Can adults take classes after work?',
        a: 'Yes. Adult students in France usually take 7pm to 9:30pm slots, and classes are private, so beginning as an adult is completely normal here.',
      },
    ],
  },
  {
    slug: 'netherlands',
    country: 'the Netherlands',
    adjective: 'Dutch',
    region: 'Western Europe',
    timezone: 'CET in winter, CEST in summer (UTC+1 / UTC+2)',
    slots: [
      '3:00pm – 6:00pm on weekdays, after basisschool',
      'Wednesday afternoons, which are short school days',
      'Evening slots from 7:30pm for adults',
    ],
    cities: ['Amsterdam', 'Rotterdam', 'The Hague', 'Utrecht', 'Eindhoven', 'Tilburg'],
    communityLanguages: ['English', 'Arabic', 'Turkish-friendly tutors', 'Berber-friendly tutors'],
    currency: { code: 'EUR', symbol: '€', note: 'Pay by SEPA transfer or card; iDEAL on request.' },
    intro:
      'Dutch basisschool days end early, often by 3pm and earlier on Wednesdays, which leaves a long afternoon that suits Quran study far better than a late evening class after a full day.',
    highlights: [
      'Afternoon slots from 3pm, while children are still fresh',
      'Teachers experienced with Dutch-Moroccan and Dutch-Turkish families',
      'Euro fees, no travel across Randstad traffic',
    ],
    faqs: [
      {
        q: 'Is there a slot after basisschool finishes?',
        a: 'Yes, 3pm to 6pm on weekdays is our main slot for Dutch children, with extra availability on Wednesday afternoons when school finishes at midday.',
      },
      {
        q: 'Our children speak Dutch at home. Can they still start?',
        a: 'Yes. Teaching is in clear English and everything begins from the Arabic letters and their articulation points, so no Arabic, Turkish or Berber background is assumed.',
      },
      {
        q: 'Can we pause over the school holidays?',
        a: 'Yes. Tell the coordinator in advance and classes are paused or rescheduled with no charge. There is no contract or notice period.',
      },
    ],
  },
  {
    slug: 'belgium',
    country: 'Belgium',
    adjective: 'Belgian',
    region: 'Western Europe',
    timezone: 'CET in winter, CEST in summer (UTC+1 / UTC+2)',
    slots: [
      'Wednesday afternoons, free in most Belgian schools',
      '4:00pm – 7:30pm on weekdays',
      'Weekend mornings for memorisation students',
    ],
    cities: ['Brussels', 'Antwerp', 'Ghent', 'Charleroi', 'Liège', 'Molenbeek'],
    communityLanguages: ['English', 'Arabic', 'Maghrebi Arabic-friendly tutors', 'Turkish-friendly tutors'],
    currency: { code: 'EUR', symbol: '€', note: 'Pay by SEPA transfer, card or Bancontact on request.' },
    intro:
      'Belgian schools finish early on Wednesdays, which gives families in Brussels and Antwerp a midweek afternoon that works far better than squeezing a class in after a long Thursday.',
    highlights: [
      'Wednesday-afternoon and weekday evening slots in CET',
      'Teaching in English, with tutors used to French- and Dutch-speaking students',
      'One-to-one classes — no waiting list for a place at a local Quran school',
    ],
    faqs: [
      {
        q: 'Do you teach in French or Dutch?',
        a: 'Classes are taught in English, Arabic or Urdu. Most Belgian students take them in English, and our teachers are used to students whose home language is French, Dutch, Arabic or Turkish.',
      },
      {
        q: 'Is Wednesday afternoon available?',
        a: 'Yes, it is one of our most requested Belgian slots because most schools finish at midday. Weekday evenings up to 9pm are also available.',
      },
      {
        q: 'How quickly can we start?',
        a: 'Usually within 24 to 48 hours. Send a WhatsApp message or fill in the trial form and a coordinator will confirm your teacher and timings in CET.',
      },
    ],
  },
  {
    slug: 'spain',
    country: 'Spain',
    adjective: 'Spanish',
    region: 'Southern Europe',
    timezone: 'CET in winter, CEST in summer (UTC+1 / UTC+2)',
    slots: [
      '6:00pm – 9:30pm, which fits the later Spanish evening routine',
      'Afternoon slots for schools with jornada continua',
      'Weekend mornings for adults',
    ],
    cities: ['Madrid', 'Barcelona', 'Valencia', 'Málaga', 'Murcia', 'Ceuta', 'Melilla'],
    communityLanguages: ['English', 'Arabic', 'Maghrebi Arabic-friendly tutors'],
    currency: { code: 'EUR', symbol: '€', note: 'Pay by SEPA transfer or card.' },
    intro:
      'Spanish evenings run later than most of Europe, and our timetable follows that: classes at 8pm or 9pm are normal for families in Madrid, Barcelona and Murcia, not an exception we squeeze in.',
    highlights: [
      'Late-evening slots up to 9:30pm CET, matching the Spanish day',
      'Afternoon availability for schools on jornada continua',
      'Teachers used to Moroccan and Pakistani families settled in Spain',
    ],
    faqs: [
      {
        q: 'Can we have classes at 8pm or 9pm?',
        a: 'Yes. Late-evening slots are standard for our Spanish students, and our teachers work across time zones so a 9:30pm class in Madrid is an ordinary booking.',
      },
      {
        q: 'Do you teach in Spanish?',
        a: 'Classes are taught in English, Arabic or Urdu. Students who speak Spanish at home manage well in English-medium classes, as all Quran instruction is built on Arabic pronunciation rather than translation.',
      },
      {
        q: 'What if we live in Ceuta or Melilla?',
        a: 'No difference at all — classes are online, so the same teachers and timetable apply.',
      },
    ],
  },
  {
    slug: 'italy',
    country: 'Italy',
    adjective: 'Italian',
    region: 'Southern Europe',
    timezone: 'CET in winter, CEST in summer (UTC+1 / UTC+2)',
    slots: [
      '2:30pm – 6:00pm, after Italian schools finish at lunchtime',
      'Evening slots from 7:30pm',
      'Saturday mornings',
    ],
    cities: ['Milan', 'Rome', 'Turin', 'Brescia', 'Bologna', 'Naples'],
    communityLanguages: ['English', 'Arabic', 'Urdu', 'Bengali'],
    currency: { code: 'EUR', symbol: '€', note: 'Pay by SEPA transfer or card.' },
    intro:
      'Italian schools often finish around 1pm, which leaves a long free afternoon. Families in Milan, Brescia and Rome use it for Quran classes rather than waiting for a crowded weekend session at the local centre.',
    highlights: [
      'Early-afternoon slots from 2:30pm, when children are still alert',
      'Teachers who speak Urdu and Bengali as well as Arabic and English',
      'No travel to a regional Islamic centre — classes happen at home',
    ],
    faqs: [
      {
        q: 'Are afternoon classes available in Italy?',
        a: 'Yes. With most Italian schools finishing near 1pm, a 2:30pm to 6pm slot is the most common booking for Italian children, with evening slots available for teenagers and adults.',
      },
      {
        q: 'There is no Islamic school near us. Can we still enrol?',
        a: 'Yes, and that is the usual reason Italian families come to us. Everything is delivered online with a private teacher, so where you live makes no difference to the quality of the class.',
      },
      {
        q: 'Do you teach girls with a female teacher?',
        a: 'Yes. We have a separate female faculty, and you can request a female teacher when you book your free trial classes.',
      },
    ],
  },
  {
    slug: 'sweden',
    country: 'Sweden',
    adjective: 'Swedish',
    region: 'Scandinavia',
    timezone: 'CET in winter, CEST in summer (UTC+1 / UTC+2)',
    slots: [
      '3:00pm – 7:00pm on weekdays',
      'Winter evening classes, when Isha comes early in December',
      'Weekend mornings for hifz students',
    ],
    cities: ['Stockholm', 'Gothenburg', 'Malmö', 'Uppsala', 'Västerås', 'Örebro'],
    communityLanguages: ['English', 'Arabic', 'Somali-friendly tutors', 'Urdu'],
    currency: { code: 'SEK', symbol: 'kr', note: 'Pay by card or bank transfer; Swish on request.' },
    intro:
      'Prayer times in Sweden swing enormously between December and June, and a fixed madrasah slot rarely survives that. We reschedule with the seasons, so classes stay in the part of the day that actually works for your family.',
    highlights: [
      'Timetables that adjust between the long winter nights and the midnight-sun summer',
      'Teachers experienced with Swedish-Somali, Swedish-Arab and Swedish-Pakistani families',
      'Classes after fritids and school, from 3pm',
    ],
    faqs: [
      {
        q: 'Our prayer times change hugely through the year. Is that a problem?',
        a: 'No. We reschedule seasonally at no charge — many Swedish families move their class earlier in summer when Isha is very late, and keep a late-afternoon slot in the dark winter months.',
      },
      {
        q: 'Do you teach children who only speak Swedish and English?',
        a: 'Yes. Teaching is in English and starts from the Arabic letters, so no Arabic or Somali background is needed. Parents are welcome to sit in on early classes.',
      },
      {
        q: 'How do we pay from Sweden?',
        a: 'By card or international bank transfer, with Swish available on request. Fees are quoted in USD and converted at the day rate.',
      },
    ],
  },
  {
    slug: 'norway',
    country: 'Norway',
    adjective: 'Norwegian',
    region: 'Scandinavia',
    timezone: 'CET in winter, CEST in summer (UTC+1 / UTC+2)',
    slots: [
      '2:30pm – 6:30pm after SFO and school',
      'Evening classes for working adults',
      'Weekend mornings',
    ],
    cities: ['Oslo', 'Bergen', 'Trondheim', 'Stavanger', 'Drammen'],
    communityLanguages: ['English', 'Arabic', 'Urdu', 'Somali-friendly tutors'],
    currency: { code: 'NOK', symbol: 'kr', note: 'Pay by card or international bank transfer; Vipps on request.' },
    intro:
      'Outside Oslo and Drammen, Norwegian families often have no Quran teacher within an hour’s drive. An online one-to-one class puts a qualified teacher in the living room instead.',
    highlights: [
      'Afternoon slots after school and SFO, from 2:30pm CET',
      'Same teaching quality in Tromsø or Bergen as in Oslo',
      'Seasonal rescheduling for Norway’s extreme summer and winter daylight',
    ],
    faqs: [
      {
        q: 'We are far from any mosque. Does the class still work?',
        a: 'Yes. Everything happens over Zoom, Skype or Google Meet with a private teacher, so distance from a mosque or Islamic centre makes no difference.',
      },
      {
        q: 'Can classes be booked after SFO?',
        a: 'Yes, and it is the usual Norwegian booking — 2:30pm to 6:30pm CET on weekdays, with weekend mornings for memorisation students.',
      },
      {
        q: 'Is there a discount for two or more children?',
        a: 'Yes, 10% from the second student onwards, and each child still gets their own teacher and timetable.',
      },
    ],
  },
  {
    slug: 'denmark',
    country: 'Denmark',
    adjective: 'Danish',
    region: 'Scandinavia',
    timezone: 'CET in winter, CEST in summer (UTC+1 / UTC+2)',
    slots: [
      '2:00pm – 6:00pm after folkeskole',
      'Evening slots from 7pm',
      'Saturday mornings for adults and hifz',
    ],
    cities: ['Copenhagen', 'Aarhus', 'Odense', 'Aalborg', 'Esbjerg'],
    communityLanguages: ['English', 'Arabic', 'Urdu', 'Turkish-friendly tutors'],
    currency: { code: 'DKK', symbol: 'kr', note: 'Pay by card or bank transfer; MobilePay on request.' },
    intro:
      'Danish folkeskole days end early enough that Quran study fits into the afternoon rather than competing with homework and bedtime — which is why most of our Danish students book between 2pm and 6pm.',
    highlights: [
      'Early-afternoon slots that leave evenings free for family time',
      'Teachers used to Danish-Arab, Danish-Turkish and Danish-Pakistani families',
      'Free tutor change if the match is not right for your child',
    ],
    faqs: [
      {
        q: 'What is the usual class time for Danish families?',
        a: 'Between 2pm and 6pm CET on weekdays, straight after folkeskole. Evening slots from 7pm are available for teenagers and working adults.',
      },
      {
        q: 'What if my child does not get on with the teacher?',
        a: 'Tell the coordinator and we change the teacher free of charge, at any point. Matching the right teacher to the child matters more than anything else in the first few months.',
      },
      {
        q: 'Do you teach adults from scratch?',
        a: 'Yes. Adult beginners are a large part of our student body, and classes are private, so no one is learning the alphabet in front of a group.',
      },
    ],
  },
  {
    slug: 'usa',
    country: 'the United States',
    adjective: 'American',
    region: 'North America',
    timezone: 'EST, CST, MST and PST (UTC−5 to UTC−8)',
    slots: [
      '4:00pm – 9:00pm in your own time zone on weekdays',
      'Before school, from 6:30am, for hifz students',
      'Weekend classes for full-time students',
    ],
    cities: ['New York', 'Chicago', 'Houston', 'Dallas', 'Detroit', 'Los Angeles', 'Atlanta'],
    communityLanguages: ['English', 'Arabic', 'Urdu', 'Bengali'],
    currency: { code: 'USD', symbol: '$', note: 'Pay by card, bank transfer, Zelle or PayPal.' },
    intro:
      'American families are spread across four mainland time zones, so a single evening timetable never works. Each student is scheduled in their own local time, whether that is Eastern, Central, Mountain or Pacific.',
    highlights: [
      'Classes scheduled in EST, CST, MST or PST — not converted from someone else’s clock',
      'Early-morning hifz slots before school, a common choice for serious memorisation',
      'Teachers familiar with students raised speaking only English',
    ],
    faqs: [
      {
        q: 'Which US time zones do you cover?',
        a: 'All of them, including Alaska and Hawaii. Classes run from early morning to late evening in your own local time, and daylight-saving changes are handled automatically.',
      },
      {
        q: 'Can my child do hifz alongside full-time school?',
        a: 'Yes. The common pattern is a 30 to 45-minute class before school for new memorisation, plus a second short session for revision. Your supervisor sets a daily target the child can actually sustain.',
      },
      {
        q: 'How do we pay in the US?',
        a: 'Card, bank transfer, Zelle or PayPal in US dollars. No registration fee, no contract, cancel any time.',
      },
    ],
  },
  {
    slug: 'canada',
    country: 'Canada',
    adjective: 'Canadian',
    region: 'North America',
    timezone: 'EST, CST, MST and PST (UTC−5 to UTC−8)',
    slots: [
      '3:30pm – 9:00pm local time on weekdays',
      'Early-morning slots before school for hifz',
      'Weekend mornings',
    ],
    cities: ['Toronto', 'Mississauga', 'Montreal', 'Calgary', 'Edmonton', 'Vancouver', 'Ottawa'],
    communityLanguages: ['English', 'Arabic', 'Urdu', 'Bengali', 'Somali-friendly tutors'],
    currency: { code: 'CAD', symbol: '$', note: 'Pay by Interac e-Transfer, card or PayPal.' },
    intro:
      'Winter in Canada makes a weekday drive to a weekend Islamic school a real commitment. Online classes keep the routine going in January exactly as it runs in September.',
    highlights: [
      'Scheduling in Eastern, Central, Mountain and Pacific time',
      'No school run in −20°C — classes happen at the kitchen table',
      'Interac e-Transfer accepted for fees in Canadian dollars',
    ],
    faqs: [
      {
        q: 'Do you schedule in Canadian time zones?',
        a: 'Yes, in your own local time — Eastern, Central, Mountain or Pacific — and we adjust automatically for daylight saving.',
      },
      {
        q: 'Can we pay by Interac e-Transfer?',
        a: 'Yes, along with card and PayPal. Fees are quoted in USD and can be settled in Canadian dollars.',
      },
      {
        q: 'Do you teach French-speaking families in Quebec?',
        a: 'Classes are taught in English, Arabic or Urdu. Students from French-speaking homes in Montreal and Laval study with us regularly, since Quran instruction is built on Arabic pronunciation rather than translation.',
      },
    ],
  },
  {
    slug: 'australia',
    country: 'Australia',
    adjective: 'Australian',
    region: 'Australia & New Zealand',
    timezone: 'AEST / AEDT, ACST and AWST (UTC+8 to UTC+11)',
    slots: [
      '4:00pm – 8:30pm on weekdays in your own state time',
      'Before school, from 6:30am, for hifz students',
      'Weekend mornings',
    ],
    cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Auckland'],
    communityLanguages: ['English', 'Arabic', 'Urdu', 'Turkish-friendly tutors'],
    currency: { code: 'AUD', symbol: '$', note: 'Pay by card, PayPal or international bank transfer.' },
    intro:
      'Australia sits far ahead of our teachers’ local time, which works in your favour: our teachers take Australian students during their own morning, so you get consistent, alert teaching in your after-school hours.',
    highlights: [
      'Slots in AEST, AEDT, ACST and AWST — Perth included, not an afterthought',
      'Teachers scheduled so your evening is their morning, not their midnight',
      'Fees payable in Australian dollars',
    ],
    faqs: [
      {
        q: 'Does the time difference make this difficult?',
        a: 'No. We assign teachers whose working day lines up with Australian afternoons and evenings, so classes are taught by someone fresh rather than at the end of a long shift.',
      },
      {
        q: 'Do you cover Western Australia?',
        a: 'Yes. Perth students are scheduled in AWST, and we also teach families in New Zealand in NZST.',
      },
      {
        q: 'Can we start during the summer holidays?',
        a: 'Yes, and December and January are good months to start, since the trial classes can run daily while school is out.',
      },
    ],
  },
];

export const COUNTRY_SLUGS = COUNTRY_PAGES.map((page) => page.slug);

export function getCountryPage(slug: string): CountryPage | undefined {
  return COUNTRY_PAGES.find((page) => page.slug === slug);
}

/** Other countries, for the cross-links at the foot of each country page. */
export function otherCountries(slug: string): CountryPage[] {
  return COUNTRY_PAGES.filter((page) => page.slug !== slug);
}
