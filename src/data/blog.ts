/**
 * Shared blog posts for homepage preview and blog page.
 */

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
  featured?: boolean;
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: 'Why Every Business Needs a Website in 2026',
    slug: 'why-every-business-needs-a-website',
    excerpt: 'A strong online presence is no longer optional. Discover how a professional website builds trust, reaches global customers, and drives growth in the digital-first economy.',
    category: 'Business',
    author: 'CodexStudio Team',
    date: 'Mar 12, 2026',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    featured: true,
    content: 'A strong online presence is no longer optional. In 2026, customers expect to find you online before they ever walk through your door or pick up the phone. A professional website builds trust, reaches global customers, and drives growth in the digital-first economy.\n\n## Why it matters\n\nYour website is your digital storefront. It works 24/7, reaches anyone with internet access, and gives you control over your brand story. We help businesses like yours launch fast, scalable sites that convert visitors into customers.',
  },
  {
    title: 'How Good UI/UX Increases Conversions',
    slug: 'ui-ux-increases-conversions',
    excerpt: 'User experience directly impacts your bottom line. Learn the design principles and data-backed strategies that turn visitors into customers and improve retention.',
    category: 'Design',
    author: 'CodexStudio Team',
    date: 'Mar 10, 2026',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=800',
    content: 'User experience directly impacts your bottom line. Learn the design principles and data-backed strategies that turn visitors into customers and improve retention.\n\n## Design that converts\n\nGood UI/UX is invisible when it works: clear navigation, fast load times, and intuitive flows. We combine research and design to create interfaces that users love and that drive measurable results.',
  },
  {
    title: 'Top Web Development Trends in 2026',
    slug: 'web-development-trends-2026',
    excerpt: 'From AI-augmented development to edge computing and modern frameworks—stay ahead with the technologies shaping the next generation of web applications.',
    category: 'Development',
    author: 'CodexStudio Team',
    date: 'Mar 08, 2026',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    content: 'From AI-augmented development to edge computing and modern frameworks—stay ahead with the technologies shaping the next generation of web applications.\n\n## What we use\n\nWe build with Next.js, React, and TypeScript to deliver fast, SEO-friendly sites. Edge computing and modern APIs keep your product scalable and secure.',
  },
];
