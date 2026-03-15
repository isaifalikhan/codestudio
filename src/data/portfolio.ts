/**
 * Shared portfolio projects for homepage and portfolio page.
 * Uses images from public/projects and SEO-friendly content.
 */

export interface PortfolioProject {
  title: string;
  category: string;
  description: string;
  technology: string[];
  image: string;
  slug?: string;
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

/** Additional projects from public/projects (optional for portfolio page) */
const localProjects: PortfolioProject[] = [
  {
    title: 'CRM HubSpot Dashboard',
    category: 'Development',
    description: 'Custom CRM dashboard with analytics and pipeline views.',
    technology: ['React', 'HubSpot API', 'Charts'],
    image: '/projects/crm-for-hubspot-dashboard.png',
  },
  {
    title: 'Restaurant Menu App',
    category: 'Development',
    description: 'Digital menu and ordering experience for restaurants.',
    technology: ['React', 'UI/UX', 'Mobile-first'],
    image: '/projects/popup_Restaurant_Menu_NM20210045.jpg',
  },
  {
    title: 'Portfolio Template UI',
    category: 'Branding',
    description: 'Designer portfolio template with project grid.',
    technology: ['Figma', 'Webflow', 'Responsive'],
    image: '/projects/margon-designer-portfolio-website-design-template-ui8-preview-18_1754145350829.webp',
  },
];

export const portfolioProjects: PortfolioProject[] = [...unsplashProjects, ...localProjects];
