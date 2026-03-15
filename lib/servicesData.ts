export type ServiceSlug =
  | 'website-development'
  | 'ui-ux-design'
  | 'social-media-management'
  | 'graphic-design'
  | 'branding'
  | 'seo-marketing';

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: ServiceSlug;
  title: string;
  shortDesc: string;
  longContent: string;
  startingFrom: number;
  details: string[];
  faqs: ServiceFaq[];
  metaTitle: string;
  metaDescription: string;
  image: string;
}

export const SERVICE_SLUGS: ServiceSlug[] = [
  'website-development',
  'ui-ux-design',
  'social-media-management',
  'graphic-design',
  'branding',
  'seo-marketing',
];

export const SERVICES_DATA: Record<ServiceSlug, ServiceData> = {
  'website-development': {
    slug: 'website-development',
    title: 'Website Development',
    shortDesc: 'High-performance, scalable web applications built with modern frameworks.',
    longContent: `We build custom websites and web applications that are fast, secure, and scalable. Whether you need a marketing site, a web app, or an e-commerce store, we use modern stacks like Next.js and React to deliver solutions that perform on all devices and rank well in search.

Our website development process starts with understanding your goals, audience, and brand. We then plan the information architecture, design key screens, and develop using component-based architecture so your site is easy to maintain and extend. We integrate with your existing tools (CRM, payment gateways, analytics) and ensure responsive design, accessibility, and SEO best practices.

For businesses in Pakistan and abroad, we offer fixed-scope packages and flexible ongoing support. Every project includes deployment, basic training, and documentation so your team can manage content where needed. We focus on clean code, performance budgets, and security so your site stays reliable as you grow.`,
    startingFrom: 2500,
    details: ['Next.js & React', 'E-commerce Solutions', 'Custom CMS', 'API Integration'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    metaTitle: 'Website Development Services in Pakistan | CodexStudio',
    metaDescription: 'Custom website development in Islamabad: Next.js, React, e-commerce & CMS. Fast, scalable sites from $2,500. Get a free quote.',
    faqs: [
      { question: 'How long does a typical website project take?', answer: 'A standard marketing or business website usually takes 4–8 weeks from kickoff to launch. E-commerce and custom web apps can take 8–16 weeks depending on scope.' },
      { question: 'Do you offer hosting and maintenance?', answer: 'We can recommend and set up hosting (e.g. Vercel, AWS) and provide optional maintenance packages for updates, backups, and small content changes.' },
      { question: 'What if I need changes after launch?', answer: 'We offer post-launch support and retainer options. Small tweaks are often included in a handover period; larger changes are quoted as separate projects or monthly retainers.' },
      { question: 'Do you build e-commerce stores?', answer: 'Yes. We build e-commerce sites using modern stacks (e.g. Next.js with headless commerce or integrated platforms) so you get a fast, customizable store.' },
    ],
  },
  'ui-ux-design': {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    shortDesc: 'Intuitive and visually stunning interfaces that prioritize user experience.',
    longContent: `Great design is invisible: users achieve their goals without friction. Our UI/UX design service focuses on research, structure, and visual craft so your product or website feels clear, consistent, and trustworthy.

We start with user research and context: who your users are, what they need, and how they behave. From there we create sitemaps, user flows, and wireframes so the structure supports both business goals and usability. We then apply your brand to high-fidelity mockups and interactive prototypes you can test with real users before development.

Our designers work in Figma and use design systems so every screen stays consistent and handoff to development is smooth. We design for accessibility (WCAG), responsiveness, and performance so the final product works for everyone. Whether you need a full product redesign or a new feature’s UX, we deliver designs that are ready for development and easy to iterate on.`,
    startingFrom: 2000,
    details: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
    image: 'https://images.unsplash.com/photo-1581291518151-0e07553d2085?auto=format&fit=crop&q=80&w=800',
    metaTitle: 'UI/UX Design Services in Pakistan | CodexStudio',
    metaDescription: 'Professional UI/UX design in Islamabad: user research, wireframes, prototypes & visual design. Improve conversions and usability. From $2,000.',
    faqs: [
      { question: 'What deliverables do I get?', answer: 'You receive wireframes, high-fidelity mockups, an interactive prototype (where useful), and a design system or style guide. We also provide specs and assets for developers.' },
      { question: 'Do you do user testing?', answer: 'Yes. We can run usability tests on prototypes or live sites and translate findings into clear recommendations and design updates.' },
      { question: 'How do you work with our development team?', answer: 'We hand off in Figma with components, specs, and assets. We’re happy to join kickoff or sync calls with your developers to clarify interactions and edge cases.' },
      { question: 'Can you design just one section or feature?', answer: 'Yes. We take on full-product projects as well as single flows, landing pages, or feature-level UX and UI.' },
    ],
  },
  'social-media-management': {
    slug: 'social-media-management',
    title: 'Social Media Management',
    shortDesc: 'Strategic content creation and community management to grow your brand.',
    longContent: `Social media is where your audience spends time. We help you show up consistently with a clear strategy, on-brand content, and community management that builds trust and drives traffic to your website or store.

Our social media management includes strategy (goals, platforms, tone, and content pillars), content planning and creation (posts, stories, reels), scheduling and publishing, and community management (replies, DMs, and moderation). We use analytics to see what works and refine the plan over time.

We work with businesses in Pakistan and internationally across Instagram, Facebook, LinkedIn, and Twitter/X. Whether you need full management or a content calendar and templates for your team, we tailor the scope to your budget and goals. The aim is a recognizable voice, steady growth, and more leads or sales from social.`,
    startingFrom: 800,
    details: ['Content Strategy', 'Growth Hacking', 'Analytics', 'Ad Management'],
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800',
    metaTitle: 'Social Media Management in Pakistan | CodexStudio',
    metaDescription: 'Social media management in Islamabad: strategy, content, and community management for Instagram, Facebook & LinkedIn. From $800/month.',
    faqs: [
      { question: 'Which platforms do you manage?', answer: 'We typically manage Instagram, Facebook, LinkedIn, and Twitter/X. We recommend focusing on 2–3 platforms where your audience is most active.' },
      { question: 'Do you run paid ads?', answer: 'Yes. We can create and manage paid campaigns (e.g. Meta, LinkedIn) as part of a retainer or as a separate service. We set clear targets and report on performance.' },
      { question: 'How often will we post?', answer: 'Frequency depends on the platform and your goals. We usually suggest 3–5 posts per week on main channels and adjust based on engagement and capacity.' },
      { question: 'What reporting do I get?', answer: 'You get monthly reports with reach, engagement, follower growth, and top posts. We can add conversion tracking and custom dashboards if you use paid ads or specific goals.' },
    ],
  },
  'graphic-design': {
    slug: 'graphic-design',
    title: 'Graphic Design',
    shortDesc: 'Compelling visual assets that communicate your brand message effectively.',
    longContent: `Strong visuals make your brand memorable and credible. Our graphic design service covers marketing materials, digital assets, and print-ready files so your messaging looks consistent and professional everywhere it appears.

We create logos, social graphics, banners, brochures, presentations, and packaging concepts that align with your brand guidelines. We work in Adobe Creative Suite and Figma and deliver files in the formats you need for web, print, and social. Whether you need a one-off campaign or ongoing design support, we scale the scope to your needs.

For startups and small businesses, we often start with a core set of assets (logo, business card, social templates) and then add more as you launch campaigns or events. We keep file naming and versioning tidy so your team can reuse and update designs easily.`,
    startingFrom: 500,
    details: ['Marketing Materials', 'Illustrations', 'Print Design', 'Digital Assets'],
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800',
    metaTitle: 'Graphic Design Services in Pakistan | CodexStudio',
    metaDescription: 'Professional graphic design in Islamabad: logos, marketing materials, print & digital assets. From $500. Get a quote today.',
    faqs: [
      { question: 'What file formats do I receive?', answer: 'We deliver source files (e.g. AI, PSD, Figma) and export web/print-ready formats (PNG, JPG, PDF, SVG) as agreed per project.' },
      { question: 'Do you do illustration from scratch?', answer: 'Yes. We create custom illustrations, icons, and simple animations that fit your brand. Complex illustration work is quoted separately.' },
      { question: 'Can you match our existing brand?', answer: 'Yes. If you have brand guidelines or references, we follow them. If not, we can help define a simple style guide as part of the project.' },
      { question: 'What is the typical turnaround?', answer: 'Simple assets (e.g. social posts, one-page flyers) often ship within 3–5 days. Larger projects (brochures, multi-page layouts) are scheduled in phases; we agree on dates at kickoff.' },
    ],
  },
  'branding': {
    slug: 'branding',
    title: 'Branding',
    shortDesc: 'Comprehensive brand identities that resonate with your target audience.',
    longContent: `Your brand is more than a logo: it’s how people recognize, trust, and choose you. We build brand identities that are clear, consistent, and aligned with your vision and audience.

Our branding process includes discovery (your story, audience, and market), naming and tagline options if needed, logo design and variations, color palette and typography, voice and tone guidelines, and a simple brand book so your team and partners can apply the brand correctly. We deliver logo files, templates, and usage rules so the identity scales across website, social, print, and partnerships.

We work with startups, small businesses, and teams launching new products. The outcome is a cohesive identity that you can use confidently everywhere and that sets the foundation for all future design and marketing.`,
    startingFrom: 1500,
    details: ['Logo Design', 'Brand Strategy', 'Voice & Tone', 'Brand Guidelines'],
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
    metaTitle: 'Branding & Identity Design in Pakistan | CodexStudio',
    metaDescription: 'Brand identity design in Islamabad: logo, strategy, voice & guidelines. Stand out with a cohesive brand. From $1,500.',
    faqs: [
      { question: 'What is included in a brand identity package?', answer: 'Typically: logo (primary and variants), color palette, typography, voice/tone guidelines, and a short brand book. We can add templates, icons, or social kits as add-ons.' },
      { question: 'How many logo concepts do I get?', answer: 'We usually present 2–3 distinct directions. After you choose one, we refine it and then create lockups, clear space, and usage rules.' },
      { question: 'Can you help with naming?', answer: 'Yes. We can suggest name options and check availability (domain, social handles) as a separate phase or as part of a full branding project.' },
      { question: 'Do you design for specific industries?', answer: 'We work across industries. The process is the same; we adapt research and visual direction to your sector and audience.' },
    ],
  },
  'seo-marketing': {
    slug: 'seo-marketing',
    title: 'SEO & Marketing',
    shortDesc: 'Data-driven strategies to increase visibility and drive organic traffic.',
    longContent: `If your website doesn’t show up in search, you’re missing leads and sales. Our SEO and marketing service focuses on sustainable, white-hat tactics to improve rankings, traffic, and conversions over time.

We start with an audit: technical SEO, on-page structure, keywords, and competitors. We then create a plan that includes keyword research, on-page optimization (titles, meta descriptions, headings, content), content strategy or blog posts, and link-building outreach where it fits. We use tools like Google Search Console and analytics to track progress and adjust.

We work with businesses that have a website (or are launching one) and want to rank for relevant terms in their market. We don’t promise overnight results; we focus on steady gains and reporting you can understand. Optional add-ons include local SEO, schema markup, and coordination with paid campaigns.`,
    startingFrom: 600,
    details: ['Keyword Research', 'On-page SEO', 'Content Marketing', 'Link Building'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    metaTitle: 'SEO & Digital Marketing in Pakistan | CodexStudio',
    metaDescription: 'SEO and digital marketing in Islamabad: keyword research, on-page SEO, content & link building. Grow organic traffic. From $600/month.',
    faqs: [
      { question: 'How long until we see results?', answer: 'SEO typically shows meaningful movement in 3–6 months. We share monthly reports so you see trends and wins along the way.' },
      { question: 'Do you write blog content?', answer: 'Yes. We can create SEO-focused blog posts and landing pages as part of your content strategy. We align topics with your keywords and business goals.' },
      { question: 'What if our site has technical issues?', answer: 'We include technical recommendations in the audit and can fix critical issues ourselves or provide a clear brief for your developer.' },
      { question: 'Do you do local SEO?', answer: 'Yes. We optimize for local search (Google Business Profile, local keywords, schema) for businesses that serve a specific city or region.' },
    ],
  },
};

export function getServiceBySlug(slug: string): ServiceData | null {
  if (SERVICE_SLUGS.includes(slug as ServiceSlug)) {
    return SERVICES_DATA[slug as ServiceSlug];
  }
  return null;
}
