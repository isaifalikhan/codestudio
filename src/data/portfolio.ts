/**
 * Shared portfolio projects for homepage and portfolio page.
 * Uses high-quality Unsplash images and SEO-friendly content.
 */

export interface PortfolioProject {
  title: string;
  category: string;
  description: string;
  technology: string[];
  image: string;
  slug?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    title: 'Analytics Dashboard',
    category: 'Web Design',
    description: 'Real-time business analytics platform with interactive charts and team collaboration.',
    technology: ['React', 'TypeScript', 'D3.js', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'E-Commerce Brand Store',
    category: 'Development',
    description: 'Full-featured online store with checkout, inventory, and marketing integrations.',
    technology: ['Next.js', 'Stripe', 'Tailwind', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Fintech Mobile Banking App',
    category: 'Development',
    description: 'Secure mobile banking experience with biometric login and instant transfers.',
    technology: ['React Native', 'Node.js', 'AWS', 'REST API'],
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'SaaS Product Dashboard',
    category: 'Web Design',
    description: 'Clean, scalable dashboard for SaaS teams to manage users and subscriptions.',
    technology: ['Vue.js', 'Firebase', 'Tailwind', 'Figma'],
    image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Developer Portfolio & Blog',
    category: 'Branding',
    description: 'Modern portfolio site with blog, dark mode, and contact integration.',
    technology: ['Next.js', 'MDX', 'Vercel', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Code Editor Web App',
    category: 'Development',
    description: 'Browser-based code editor with live preview and team sharing.',
    technology: ['Monaco', 'WebSocket', 'React', 'Redis'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
  },
];
