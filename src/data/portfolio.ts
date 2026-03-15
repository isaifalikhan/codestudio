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

/** Projects from public/projects folder – paths are relative to site root */
export const portfolioProjects: PortfolioProject[] = [
  {
    title: 'Developer Portfolio Website',
    category: 'Web Design',
    description: 'Modern developer portfolio with project showcases and clean typography.',
    technology: ['React', 'Tailwind', 'Vite'],
    image: '/projects/developer_portfolio_website_examples.webp',
  },
  {
    title: 'Landing & Home Experience',
    category: 'Web Design',
    description: 'High-converting landing page with clear CTAs and responsive layout.',
    technology: ['HTML', 'CSS', 'JavaScript'],
    image: '/projects/home.png',
  },
  {
    title: 'CRM HubSpot Dashboard',
    category: 'Development',
    description: 'Custom CRM dashboard for HubSpot with analytics and pipeline views.',
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
    title: 'Blog & Single Post Layout',
    category: 'Web Design',
    description: 'Content-focused blog layout with readable typography and sharing.',
    technology: ['Next.js', 'MDX', 'Tailwind'],
    image: '/projects/single-post.webp',
  },
  {
    title: 'Portfolio Template UI',
    category: 'Branding',
    description: 'Designer portfolio template with project grid and case studies.',
    technology: ['Figma', 'Webflow', 'Responsive'],
    image: '/projects/margon-designer-portfolio-website-design-template-ui8-preview-18_1754145350829.webp',
  },
  {
    title: 'ML Monitoring Dashboard',
    category: 'Development',
    description: 'Machine learning monitoring and model performance dashboard.',
    technology: ['React', 'Python', 'Data Viz'],
    image: '/projects/6625e0d443fc3144a6037626_64ba6af883918b941bcedf85_01_mlmonitoring_header-min.png',
  },
  {
    title: 'SaaS Product Cover',
    category: 'Web Design',
    description: 'SaaS product landing and feature showcase design.',
    technology: ['React', 'Tailwind', 'Framer'],
    image: '/projects/9a87e5b8-db7e-4041-982b-26587dde52cc-cover.png',
  },
  {
    title: 'Creative Agency Cover',
    category: 'Branding',
    description: 'Bold cover and hero section for creative agencies.',
    technology: ['Design', 'Branding', 'Web'],
    image: '/projects/cover.avif',
  },
  {
    title: 'App Interface Design',
    category: 'Web Design',
    description: 'Modern app interface with clear hierarchy and components.',
    technology: ['UI/UX', 'Figma', 'React'],
    image: '/projects/40eac85a-8712-455d-b8c3-fa057b591342-cover.png',
  },
  {
    title: 'Marketing & Analytics',
    category: 'Development',
    description: 'Marketing analytics and campaign tracking dashboard.',
    technology: ['React', 'Analytics', 'Charts'],
    image: '/projects/615d34124229923.60ffe9a997396.png',
  },
  {
    title: 'Brand Identity Project',
    category: 'Branding',
    description: 'Full brand identity and visual system for a product launch.',
    technology: ['Branding', 'Illustration', 'Web'],
    image: '/projects/8fdca325876813.56352d5c10e3a.jpg',
  },
];
