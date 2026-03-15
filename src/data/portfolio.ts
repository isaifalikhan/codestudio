/**
 * Shared portfolio projects for homepage and portfolio page.
 * Uses images from public/projects and SEO-friendly content.
 * Local project images use paths relative to site root (no leading slash) so they work with Vite's base URL.
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

/** Featured portfolio projects – high-quality Unsplash images for showcase */
const unsplashProjects: PortfolioProject[] = [
  {
    title: 'Developer Platform & Blog',
    category: 'Web Design',
    description: 'Modern developer platform with blog, docs, and clean typography.',
    technology: ['Next.js', 'React', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'E-Commerce Brand Store',
    category: 'Development',
    description: 'Full-featured online store with checkout and inventory.',
    technology: ['Next.js', 'Stripe', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Fintech Mobile Banking',
    category: 'Development',
    description: 'Secure mobile banking experience with modern UX.',
    technology: ['React Native', 'Node.js', 'AWS'],
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'SaaS Product Dashboard',
    category: 'Web Design',
    description: 'Clean dashboard for SaaS teams and subscriptions.',
    technology: ['React', 'Tailwind', 'Figma'],
    image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Code Editor Web App',
    category: 'Development',
    description: 'Browser-based code editor with live preview.',
    technology: ['React', 'Monaco', 'WebSocket'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Analytics Dashboard',
    category: 'Web Design',
    description: 'Real-time business analytics and team collaboration.',
    technology: ['React', 'TypeScript', 'D3.js'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
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

/** All projects: Unsplash first, then local from public/projects */
export const portfolioProjects: PortfolioProject[] = [...unsplashProjects, ...localProjects];

/** First 6 for homepage: mix of local (so public/projects show) and Unsplash */
export const featuredPortfolioProjects: PortfolioProject[] = [
  ...localProjects.slice(0, 3),
  ...unsplashProjects.slice(0, 3),
];
