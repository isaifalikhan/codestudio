/**
 * Shared portfolio projects for homepage and portfolio page.
 * Live client work uses projectUrl + placeholder showcase imagery; local assets under public/projects.
 */

const BASE = (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_SITE_URL) || '';

/** Resolve image URL: external URLs unchanged, local paths get base URL prepended */
export function getProjectImageUrl(imagePath: string): string {
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) return imagePath;
  const path = imagePath.replace(/^\//, '');
  const base = BASE ? BASE.replace(/\/?$/, '') + '/' : '/';
  return base + path;
}

export interface PortfolioProject {
  title: string;
  category: string;
  description: string;
  technology: string[];
  image: string;
  slug?: string;
  /** If set, "View Project" links here; otherwise show non-clickable "In Portfolio" */
  projectUrl?: string;
}

/** Unsplash placeholders — varied visuals for case-study cards */
const U = {
  dev: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200',
  ecommerce: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=1200',
  dashboard: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
  mobile: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1200',
  saas: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&q=80&w=1200',
  code: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
  analytics: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
  creative: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200',
  hospitality: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200',
  transport: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1200',
  health: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200',
  sports: 'https://images.unsplash.com/photo-1461896836934-66fe380ee7f5?auto=format&fit=crop&q=80&w=1200',
};

/** Flagship product & platform experience */
const productExperience: PortfolioProject[] = [
  {
    title: 'Employee Management System (MarQ Networks)',
    category: 'Development',
    description:
      'Role-based employee management with dashboards, MongoDB data design, REST APIs, and JWT authentication—built with Next.js and Node.js.',
    technology: ['Next.js', 'Node.js', 'MongoDB', 'JWT', 'REST APIs'],
    image: U.dashboard,
    projectUrl: 'https://marqnetworks.com/',
  },
  {
    title: 'Meet Ezri — AI Companion & Therapist',
    category: 'Development',
    description:
      'Full-stack Next.js platform: API integration, backend logic, and a scalable database layer for AI-driven companion experiences.',
    technology: ['Next.js', 'API Integration', 'Database Design'],
    image: U.saas,
  },
  {
    title: 'Crescent Tracking — Vehicle Tracking',
    category: 'Development',
    description:
      'Real-time tracking dashboard with GPS data processing, backend APIs, and analytics-ready database design.',
    technology: ['Next.js', 'Real-time', 'GPS', 'MongoDB'],
    image: U.transport,
    projectUrl: 'https://www.crescenttrack.com/',
  },
];

/** Selected live client & shipped sites (URLs provided by founder) */
const clientShowcase: PortfolioProject[] = [
  {
    title: 'Anemoia',
    category: 'Web Design',
    description: 'Distinctive creative web presence and immersive brand storytelling.',
    technology: ['Next.js', 'JavaScript', 'Performance'],
    image: U.creative,
    projectUrl: 'https://anemoia.dev/',
  },
  {
    title: 'Overnight Glasses',
    category: 'Web Design',
    description: 'E-commerce experience for eyewear with clear merchandising and checkout flows.',
    technology: ['React', 'E-commerce', 'UX'],
    image: U.ecommerce,
    projectUrl: 'https://www.overnightglasses.com/',
  },
  {
    title: 'Lin-Manuel Miranda',
    category: 'Web Design',
    description: 'Official artist presence with rich media and tour-ready layout.',
    technology: ['Next.js', 'Responsive', 'Media'],
    image: U.creative,
    projectUrl: 'https://www.linmanuel.com/',
  },
  {
    title: 'Navia Auto Transport',
    category: 'Web Design',
    description: 'Vehicle logistics and transport company site with trust-building layout.',
    technology: ['WordPress', 'SEO', 'Lead gen'],
    image: U.transport,
    projectUrl: 'https://naviautotransport.com/',
  },
  {
    title: 'Neufluence',
    category: 'Branding',
    description: 'Brand-forward marketing site with polished visuals.',
    technology: ['Web Design', 'Branding', 'Animation'],
    image: U.creative,
    projectUrl: 'https://neufluence.com/',
  },
  {
    title: 'STK Steakhouse',
    category: 'Web Design',
    description: 'Hospitality brand experience with bold typography and reservation CTAs.',
    technology: ['Hospitality', 'Responsive', 'CMS'],
    image: U.hospitality,
    projectUrl: 'https://stksteakhouse.com/',
  },
  {
    title: 'Sparrow MD',
    category: 'Web Design',
    description: 'Healthcare clinic presence with accessible, calm UI.',
    technology: ['Healthcare', 'Accessibility', 'Trust UI'],
    image: U.health,
    projectUrl: 'https://sparrowmd.ca/',
  },
  {
    title: 'The Sports Prophets',
    category: 'Web Design',
    description: 'Sports media and community-focused digital experience.',
    technology: ['Content', 'Media', 'Performance'],
    image: U.sports,
    projectUrl: 'https://thesportsprophets.com/',
  },
  {
    title: 'Digital District — Custom Exhibit',
    category: 'Development',
    description: 'Custom exhibit showcase with tailored layout and interactions.',
    technology: ['Custom Build', 'Interactive', 'Deploy'],
    image: U.creative,
    projectUrl: 'https://digital-district.me/Democustomex/',
  },
  {
    title: 'JD Productions — Commercial Solutions',
    category: 'Web Design',
    description: 'Commercial solutions hub under the Marq Networks ecosystem.',
    technology: ['Next.js', 'B2B', 'Lead capture'],
    image: U.dev,
    projectUrl: 'https://marqnetworks.co/jdproductionsllc/commercial-solutions/',
  },
  {
    title: 'Ease Seating Systems',
    category: 'Web Design',
    description: 'Commercial seating systems with product storytelling.',
    technology: ['B2B', 'Product pages', 'Responsive'],
    image: U.saas,
    projectUrl: 'https://easeseatingsystems.com/',
  },
  {
    title: 'True Smile',
    category: 'Web Design',
    description: 'Dental practice web presence with patient-first messaging.',
    technology: ['Healthcare', 'Multilingual', 'Trust'],
    image: U.health,
    projectUrl: 'https://truesmile.ch/',
  },
  {
    title: 'Marq Networks',
    category: 'Web Design',
    description: 'Corporate technology and services flagship site.',
    technology: ['Corporate', 'Next.js', 'Brand'],
    image: U.dev,
    projectUrl: 'https://marqnetworks.com/',
  },
  {
    title: 'JD Productions (Marq)',
    category: 'Web Design',
    description: 'Production and commercial portfolio entry point.',
    technology: ['Portfolio', 'Video', 'Lead gen'],
    image: U.creative,
    projectUrl: 'https://marqnetworks.co/jdproductionsllc/',
  },
  {
    title: 'Anemoia Brazil',
    category: 'Web Design',
    description: 'Regional Anemoia presence with localized experience.',
    technology: ['Localization', 'Brand', 'Web'],
    image: U.creative,
    projectUrl: 'https://anemoia.br/',
  },
  {
    title: 'Crescent Tracking (Live Demo)',
    category: 'Development',
    description: 'Lightweight live demo of tracking UI and flows on Vercel.',
    technology: ['Next.js', 'Vercel', 'Maps'],
    image: U.dashboard,
    projectUrl: 'https://cresent-tracking-light.vercel.app/',
  },
  {
    title: 'Ammar Designz',
    category: 'Branding',
    description: 'Design studio portfolio and service positioning.',
    technology: ['Portfolio', 'Branding', 'UI'],
    image: U.creative,
    projectUrl: 'https://www.ammardesignz.com/',
  },
  {
    title: 'Fabrics XI',
    category: 'Development',
    description: 'Fabric and textile storefront experience on Vercel.',
    technology: ['Next.js', 'E-commerce', 'Vercel'],
    image: U.ecommerce,
    projectUrl: 'https://fabrics-xi.vercel.app/',
  },
  {
    title: 'Bizcard',
    category: 'Development',
    description: 'Digital business card product—share contacts with a modern UI.',
    technology: ['Next.js', 'Vercel', 'PWA'],
    image: U.mobile,
    projectUrl: 'https://bizcard-ebon.vercel.app/',
  },
  {
    title: 'CodexStudio',
    category: 'Web Design',
    description: 'Agency flagship: tools, services, and portfolio in one fast Next.js experience.',
    technology: ['Next.js', 'Tailwind', 'SEO'],
    image: U.code,
    projectUrl: 'https://www.codexstudio2026.com/',
  },
];

/** Projects from public/projects folder – paths relative to site root */
const localProjects: PortfolioProject[] = [
  {
    title: 'CRM HubSpot Dashboard',
    category: 'Development',
    description: 'Custom CRM dashboard with analytics and pipeline views.',
    technology: ['React', 'HubSpot API', 'Charts'],
    image: 'projects/crm-for-hubspot-dashboard.png',
  },
  {
    title: 'Restaurant Menu App',
    category: 'Development',
    description: 'Digital menu and ordering experience for restaurants.',
    technology: ['React', 'UI/UX', 'Mobile-first'],
    image: 'projects/popup_Restaurant_Menu_NM20210045.jpg',
  },
  {
    title: 'Portfolio Template UI',
    category: 'Branding',
    description: 'Designer portfolio template with project grid.',
    technology: ['Figma', 'Webflow', 'Responsive'],
    image: 'projects/margon-designer-portfolio-website-design-template-ui8-preview-18_1754145350829.webp',
  },
  {
    title: 'Developer Portfolio Website',
    category: 'Web Design',
    description: 'Modern developer portfolio with project showcases and clean typography.',
    technology: ['React', 'Tailwind', 'Vite'],
    image: 'projects/developer_portfolio_website_examples.webp',
  },
  {
    title: 'Landing & Home Experience',
    category: 'Web Design',
    description: 'High-converting landing page with clear CTAs and responsive layout.',
    technology: ['HTML', 'CSS', 'JavaScript'],
    image: 'projects/home.png',
  },
  {
    title: 'Blog & Single Post Layout',
    category: 'Web Design',
    description: 'Content-focused blog layout with readable typography and sharing.',
    technology: ['Next.js', 'MDX', 'Tailwind'],
    image: 'projects/single-post.webp',
  },
];

/** All projects: flagship work, live clients, then internal/template samples */
export const portfolioProjects: PortfolioProject[] = [
  ...productExperience,
  ...clientShowcase,
  ...localProjects,
];

/** First 6 for homepage: flagship + standout live work */
export const featuredPortfolioProjects: PortfolioProject[] = [
  productExperience[0],
  productExperience[1],
  productExperience[2],
  clientShowcase[2],
  clientShowcase[1],
  clientShowcase[clientShowcase.length - 1],
];
