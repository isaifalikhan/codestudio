/**
 * Shared blog posts for homepage preview and blog page.
 */

export interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    title: 'Why Every Business Needs a Website in 2026',
    excerpt: 'A strong online presence is no longer optional. Discover how a professional website builds trust, reaches global customers, and drives growth in the digital-first economy.',
    category: 'Business',
    author: 'CodexStudio Team',
    date: 'Mar 12, 2026',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    featured: true,
  },
  {
    title: 'How Good UI/UX Increases Conversions',
    excerpt: 'User experience directly impacts your bottom line. Learn the design principles and data-backed strategies that turn visitors into customers and improve retention.',
    category: 'Design',
    author: 'CodexStudio Team',
    date: 'Mar 10, 2026',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Top Web Development Trends in 2026',
    excerpt: 'From AI-augmented development to edge computing and modern frameworks—stay ahead with the technologies shaping the next generation of web applications.',
    category: 'Development',
    author: 'CodexStudio Team',
    date: 'Mar 08, 2026',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
  },
];
