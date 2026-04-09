export type Review = {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  rating: 5;
  quote: string;
};

const FIRST_NAMES = [
  'Ahmed', 'Saad', 'Hassan', 'Usman', 'Bilal', 'Ali', 'Hamza', 'Farhan', 'Imran', 'Daniyal',
  'Areeba', 'Maham', 'Sara', 'Hira', 'Iqra', 'Fatima', 'Ayesha', 'Zara', 'Noor', 'Maryam',
];

const LAST_NAMES = [
  'Khan', 'Malik', 'Raza', 'Siddiqui', 'Qureshi', 'Butt', 'Sheikh', 'Tariq', 'Rehman', 'Nawaz',
];

const ROLES = [
  'Founder',
  'Marketing Manager',
  'Operations Lead',
  'Product Manager',
  'Director',
  'CEO',
  'Brand Manager',
  'Growth Lead',
  'Project Manager',
  'Head of Digital',
];

const COMPANIES = [
  'NovaEdge',
  'UrbanNest',
  'PrimeTech',
  'BloomCart',
  'FinAxis',
  'HealthVista',
  'PixelOrbit',
  'NextBridge',
  'CloudMint',
  'Sparkline Labs',
];

const LOCATIONS = [
  'Islamabad',
  'Rawalpindi',
  'Lahore',
  'Karachi',
  'Faisalabad',
  'Dubai',
  'London',
  'Doha',
  'Riyadh',
  'Toronto',
];

const OUTCOMES = [
  'improved our organic leads by over 30%',
  'helped us increase qualified inquiries within weeks',
  'significantly reduced bounce rate on key landing pages',
  'gave us a faster website and better conversion flow',
  'made our product pages more trustworthy and easy to use',
  'improved our technical SEO and overall search visibility',
  'made our site easier to manage and update internally',
  'gave us measurable growth in demo requests',
  'improved mobile performance and user engagement',
  'helped us launch faster with cleaner UX and structure',
];

function buildName(index: number) {
  const first = FIRST_NAMES[index % FIRST_NAMES.length];
  const last = LAST_NAMES[Math.floor(index / FIRST_NAMES.length) % LAST_NAMES.length];
  return `${first} ${last}`;
}

function buildRole(index: number) {
  return ROLES[index % ROLES.length];
}

function buildCompany(index: number) {
  return `${COMPANIES[index % COMPANIES.length]} ${Math.floor(index / COMPANIES.length) + 1}`;
}

function buildLocation(index: number) {
  return LOCATIONS[index % LOCATIONS.length];
}

function buildQuote(index: number, context: string) {
  const outcome = OUTCOMES[index % OUTCOMES.length];
  return `CodexStudio delivered a professional ${context.toLowerCase()} experience and ${outcome}. Communication was clear, timelines were reliable, and the final quality exceeded expectations.`;
}

export const REVIEWS_100: Review[] = Array.from({ length: 100 }, (_, i) => {
  const context = i % 2 === 0 ? 'website' : 'tool';
  return {
    id: `review-${i + 1}`,
    name: buildName(i),
    role: buildRole(i),
    company: buildCompany(i),
    location: buildLocation(i),
    rating: 5,
    quote: buildQuote(i, context),
  };
});

export function getReviewsForPage(seed: string, count: number): Review[] {
  const charTotal = seed.split('').reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
  const start = charTotal % REVIEWS_100.length;
  const picked: Review[] = [];
  for (let i = 0; i < count; i += 1) {
    picked.push(REVIEWS_100[(start + i) % REVIEWS_100.length]);
  }
  return picked;
}
