export type ServiceSlug =
  | 'web-development'
  | 'nextjs-development'
  | 'ecommerce-development'
  | 'ui-ux-design'
  | 'seo-optimization'
  | 'mobile-app-development'
  | 'brand-identity-design';

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
  process: string[];
  faqs: ServiceFaq[];
  metaTitle: string;
  metaDescription: string;
  image: string;
}

export const SERVICE_SLUGS: ServiceSlug[] = [
  'web-development',
  'nextjs-development',
  'ecommerce-development',
  'ui-ux-design',
  'seo-optimization',
  'mobile-app-development',
  'brand-identity-design',
];

export const SERVICES_DATA: Record<ServiceSlug, ServiceData> = {
  'web-development': {
    slug: 'web-development',
    title: 'Custom Website Development Services in Pakistan',
    shortDesc: 'Professional custom website development for startups and businesses across Pakistan and worldwide.',
    longContent: `Our custom website development service is designed for businesses that need more than a template. We plan each project around your revenue goals, audience, and conversion funnel. From structure and messaging to speed and SEO, every decision is made to help your website become a growth channel, not just a digital brochure. We build with Next.js and React to deliver fast pages, clean architecture, and long-term scalability.

We begin with discovery and sitemap planning, then design key sections around user intent and trust signals. During development, we focus on responsive behavior, Core Web Vitals, schema markup, analytics events, and clear CTAs. We can integrate payment gateways, booking systems, CRM tools, WhatsApp click actions, and lead forms. You receive a maintainable codebase, deployment support, and practical guidance for future updates.

This service is ideal for companies rebuilding outdated sites, startups launching new products, and service businesses targeting local SEO in Pakistan. We keep communication clear, timelines realistic, and quality measurable. The result is a site that loads quickly, ranks better, and converts visitors into qualified leads.`,
    startingFrom: 50000,
    details: ['Custom UI sections', 'SEO-ready architecture', 'CMS integration', 'Analytics + events', 'Responsive performance', 'Technical QA'],
    process: ['Discovery and website strategy', 'UI planning and wireframes', 'Development and SEO implementation', 'QA, launch, and handover'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    metaTitle: 'Custom Website Development Services in Pakistan',
    metaDescription: 'Professional custom website development in Pakistan. We build fast, scalable websites using Next.js, React, and modern tech. Get a free quote.',
    faqs: [
      { question: 'How long does a custom website project take?', answer: 'Most projects take 3 to 8 weeks depending on pages, features, and content readiness.' },
      { question: 'Will my website be SEO-friendly?', answer: 'Yes. We implement metadata, schema, internal linking, and performance best practices from the start.' },
      { question: 'Can you migrate my existing website?', answer: 'Yes, we can redesign and migrate content from your existing website with redirect planning.' },
      { question: 'Do you provide support after launch?', answer: 'Yes, we offer post-launch support, maintenance, and feature iteration packages.' },
      { question: 'Can you build bilingual websites?', answer: 'Yes, we can structure websites for English and Urdu content where required.' },
    ],
  },
  'nextjs-development': {
    slug: 'nextjs-development',
    title: 'Next.js Web Application Development Services',
    shortDesc: 'Expert Next.js development for fast, scalable, and SEO-friendly web applications.',
    longContent: `Next.js is one of the best frameworks for businesses that need speed, strong SEO, and a modern developer workflow. Our Next.js development service focuses on building production-grade applications that remain fast under growth. We design systems that support server rendering, static generation, clean routing, and scalable component architecture so your product can evolve without constant rewrites.

We build marketing websites, SaaS dashboards, internal admin tools, and custom portals using Next.js with React and TypeScript. We optimize for Core Web Vitals, structured data, accessibility, and secure API integration. Whether your project needs authenticated dashboards, billing flows, role-based access, or multilingual support, we implement a foundation that is maintainable for the long term.

Our process includes discovery, architecture planning, UI implementation, and technical QA before launch. We also support migrations from older stacks to Next.js with careful URL mapping and SEO protection. If your team already has designers or backend developers, we collaborate effectively with clear documentation and iterative delivery. This helps you release faster while reducing technical risk.`,
    startingFrom: 120000,
    details: ['Next.js App Router', 'TypeScript architecture', 'API integrations', 'Performance optimization', 'SEO implementation', 'Deployment pipelines'],
    process: ['Technical scoping and architecture', 'Design system and app build', 'Integrations and QA', 'Launch and optimization'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    metaTitle: 'Next.js Web Application Development Services',
    metaDescription: 'Expert Next.js development for fast, SEO-friendly web apps. CodexStudio builds scalable Next.js applications for businesses worldwide.',
    faqs: [
      { question: 'Do you build with the latest Next.js version?', answer: 'Yes, we use stable modern Next.js releases and follow best practices for App Router and metadata.' },
      { question: 'Can you improve an existing Next.js app?', answer: 'Yes, we can audit and improve performance, SEO, and architecture of existing projects.' },
      { question: 'Do you work with headless CMS?', answer: 'Yes, we integrate headless CMS solutions and traditional CMS options based on your workflow.' },
      { question: 'Do you offer API and backend support?', answer: 'Yes, we build and integrate APIs, authentication, and database-backed features.' },
      { question: 'Can you deploy on Vercel or custom servers?', answer: 'Yes, we support Vercel and custom cloud deployments based on your needs.' },
    ],
  },
  'ecommerce-development': {
    slug: 'ecommerce-development',
    title: 'E-Commerce Development Services | Shopify & Custom Stores',
    shortDesc: 'Build conversion-focused online stores with secure checkout and scalable operations.',
    longContent: `Our e-commerce development service helps businesses launch stores that are fast, trustworthy, and easy to manage. We build on Shopify, WooCommerce, and custom stacks depending on your catalog complexity, growth goals, and operational needs. Every store is designed to reduce drop-off, improve product discovery, and increase completed checkouts.

We implement category structure, product pages, filtering, cart optimization, and payment gateway integrations. From delivery settings and tax handling to order notifications and analytics tracking, we cover the details required for stable daily operations. We also optimize mobile experience, since most e-commerce traffic in Pakistan and global markets now comes from smartphones.

Beyond launch, we help you improve conversion rates through landing pages, upsell flows, and better trust sections. We can integrate ERP, inventory, or CRM tools where needed. Our approach balances speed and flexibility so your team can add products and campaigns quickly while the platform remains reliable as sales volume grows.`,
    startingFrom: 100000,
    details: ['Shopify and WooCommerce', 'Custom storefronts', 'Secure checkout setup', 'Analytics tracking', 'Mobile-first UX', 'Conversion improvements'],
    process: ['Store strategy and platform choice', 'Design and product architecture', 'Development and payment integration', 'Testing, launch, and CRO support'],
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=800',
    metaTitle: 'E-Commerce Development Services | Shopify & Custom Stores',
    metaDescription: 'Build your online store with CodexStudio. We develop Shopify, WooCommerce, and custom e-commerce solutions with secure checkout.',
    faqs: [
      { question: 'Which platform is best for my store?', answer: 'We recommend Shopify, WooCommerce, or custom development based on product complexity and budget.' },
      { question: 'Can you migrate my current store?', answer: 'Yes, we handle migration of products, pages, and SEO URLs from existing platforms.' },
      { question: 'Do you integrate local payment gateways?', answer: 'Yes, we support local and international gateways depending on your market.' },
      { question: 'Can you improve conversion rates after launch?', answer: 'Yes, we provide CRO support including checkout and product-page optimization.' },
      { question: 'Will the store be mobile optimized?', answer: 'Yes, mobile usability and speed are core requirements in every build.' },
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
    details: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design', 'Design systems'],
    process: ['Discovery and user flows', 'Wireframes and UX testing', 'High-fidelity UI design', 'Handoff and iteration support'],
    image: 'https://images.unsplash.com/photo-1581291518151-0e07553d2085?auto=format&fit=crop&q=80&w=800',
    metaTitle: 'UI/UX Design Services for Websites & Apps',
    metaDescription: 'User-centered UI/UX design that improves engagement and conversions. CodexStudio designs interfaces that users love.',
    faqs: [
      { question: 'What deliverables do I get?', answer: 'You receive wireframes, high-fidelity mockups, an interactive prototype (where useful), and a design system or style guide. We also provide specs and assets for developers.' },
      { question: 'Do you do user testing?', answer: 'Yes. We can run usability tests on prototypes or live sites and translate findings into clear recommendations and design updates.' },
      { question: 'How do you work with our development team?', answer: 'We hand off in Figma with components, specs, and assets. We’re happy to join kickoff or sync calls with your developers to clarify interactions and edge cases.' },
      { question: 'Can you design just one section or feature?', answer: 'Yes. We take on full-product projects as well as single flows, landing pages, or feature-level UX and UI.' },
    ],
  },
  'brand-identity-design': {
    slug: 'brand-identity-design',
    title: 'Brand Identity & Logo Design Services',
    shortDesc: 'Comprehensive brand identities that resonate with your target audience.',
    longContent: `Your brand is more than a logo: it’s how people recognize, trust, and choose you. We build brand identities that are clear, consistent, and aligned with your vision and audience.

Our branding process includes discovery (your story, audience, and market), naming and tagline options if needed, logo design and variations, color palette and typography, voice and tone guidelines, and a simple brand book so your team and partners can apply the brand correctly. We deliver logo files, templates, and usage rules so the identity scales across website, social, print, and partnerships.

We work with startups, small businesses, and teams launching new products. The outcome is a cohesive identity that you can use confidently everywhere and that sets the foundation for all future design and marketing.`,
    startingFrom: 70000,
    details: ['Logo design', 'Brand strategy', 'Visual language', 'Brand guidelines', 'Social templates'],
    process: ['Discovery and mood direction', 'Logo and identity concepts', 'Refinement and guideline system', 'Asset delivery and launch support'],
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
    metaTitle: 'Brand Identity & Logo Design Services',
    metaDescription: 'Create a memorable brand with CodexStudio. Logo design, brand guidelines, and visual identity for businesses of all sizes.',
    faqs: [
      { question: 'What is included in a brand identity package?', answer: 'Typically: logo (primary and variants), color palette, typography, voice/tone guidelines, and a short brand book. We can add templates, icons, or social kits as add-ons.' },
      { question: 'How many logo concepts do I get?', answer: 'We usually present 2–3 distinct directions. After you choose one, we refine it and then create lockups, clear space, and usage rules.' },
      { question: 'Can you help with naming?', answer: 'Yes. We can suggest name options and check availability (domain, social handles) as a separate phase or as part of a full branding project.' },
      { question: 'Do you design for specific industries?', answer: 'We work across industries. The process is the same; we adapt research and visual direction to your sector and audience.' },
    ],
  },
  'seo-optimization': {
    slug: 'seo-optimization',
    title: 'SEO Optimization Services in Pakistan',
    shortDesc: 'Data-driven strategies to increase visibility and drive organic traffic.',
    longContent: `If your website doesn’t show up in search, you’re missing leads and sales. Our SEO and marketing service focuses on sustainable, white-hat tactics to improve rankings, traffic, and conversions over time.

We start with an audit: technical SEO, on-page structure, keywords, and competitors. We then create a plan that includes keyword research, on-page optimization (titles, meta descriptions, headings, content), content strategy or blog posts, and link-building outreach where it fits. We use tools like Google Search Console and analytics to track progress and adjust.

We work with businesses that have a website (or are launching one) and want to rank for relevant terms in their market. We don’t promise overnight results; we focus on steady gains and reporting you can understand. Optional add-ons include local SEO, schema markup, and coordination with paid campaigns.`,
    startingFrom: 45000,
    details: ['Technical SEO', 'On-page optimization', 'Content strategy', 'Schema implementation', 'Local SEO'],
    process: ['SEO audit and keyword mapping', 'Technical and on-page fixes', 'Content and internal linking rollout', 'Reporting and growth iterations'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    metaTitle: 'SEO Optimization Services in Pakistan',
    metaDescription: "Rank higher on Google with CodexStudio's SEO services. Technical SEO, content strategy, and on-page optimization for Pakistani businesses.",
    faqs: [
      { question: 'How long until we see results?', answer: 'SEO typically shows meaningful movement in 3–6 months. We share monthly reports so you see trends and wins along the way.' },
      { question: 'Do you write blog content?', answer: 'Yes. We can create SEO-focused blog posts and landing pages as part of your content strategy. We align topics with your keywords and business goals.' },
      { question: 'What if our site has technical issues?', answer: 'We include technical recommendations in the audit and can fix critical issues ourselves or provide a clear brief for your developer.' },
      { question: 'Do you do local SEO?', answer: 'Yes. We optimize for local search (Google Business Profile, local keywords, schema) for businesses that serve a specific city or region.' },
    ],
  },
  'mobile-app-development': {
    slug: 'mobile-app-development',
    title: 'Mobile App Development Services | iOS & Android',
    shortDesc: 'Native and cross-platform mobile app development for startups and growing businesses.',
    longContent: `Our mobile app development service helps businesses launch reliable iOS and Android apps with strong UX and scalable architecture. We build products for founders who need speed-to-market and companies that need secure, production-ready applications. From idea validation to release, we focus on usability, performance, and measurable business outcomes.

We start by clarifying user journeys, core features, and launch priorities. Then we design app screens, create the technical architecture, and implement APIs, authentication, notifications, and data handling. Depending on your goals, we can deliver cross-platform builds for faster delivery or native-focused experiences where deeper device integration is required.

Quality assurance is built into every sprint so your app works consistently across devices and screen sizes. We assist with store readiness, app metadata, visual assets, and release strategy. After launch, we can support roadmap execution and feature growth. This gives your business a stable product foundation instead of a one-time app build that becomes hard to maintain.`,
    startingFrom: 180000,
    details: ['iOS and Android apps', 'Cross-platform builds', 'Secure API integration', 'Push notifications', 'App store readiness', 'Post-launch support'],
    process: ['Product discovery and roadmap', 'UI/UX and prototyping', 'Development and testing', 'Store launch and iteration'],
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800',
    metaTitle: 'Mobile App Development Services | iOS & Android',
    metaDescription: 'Native and cross-platform mobile app development. We build iOS and Android apps for startups and businesses. Get a free consultation.',
    faqs: [
      { question: 'Do you build both iOS and Android apps?', answer: 'Yes, we build cross-platform and platform-specific apps depending on requirements.' },
      { question: 'Can you design and develop the full app?', answer: 'Yes, we handle product planning, UI/UX, development, testing, and deployment support.' },
      { question: 'Do you integrate APIs and payment systems?', answer: 'Yes, we integrate secure APIs, auth systems, and payment gateways where needed.' },
      { question: 'How long does app development take?', answer: 'Most MVP app projects take 8 to 16 weeks depending on complexity and feature count.' },
      { question: 'Do you provide app maintenance?', answer: 'Yes, we provide ongoing updates, bug fixes, and roadmap enhancements.' },
    ],
  },
};

export function getServiceBySlug(slug: string): ServiceData | null {
  if (SERVICE_SLUGS.includes(slug as ServiceSlug)) {
    return SERVICES_DATA[slug as ServiceSlug];
  }
  return null;
}
