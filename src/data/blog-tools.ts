import type { BlogPost } from '@/src/data/blog-types';
import type { Tool } from '@/lib/tools-data';

function categoryImage(category: string): string {
  // Stable, high-quality OG-like cover images (Unsplash hotlinks)
  const map: Record<string, string> = {
    'Image Tools':
      'https://images.unsplash.com/photo-1618005182384-a4a7ede6fb46?auto=format&fit=crop&q=80&w=1200',
    'Image Editing':
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&q=80&w=1200',
    'PDF Tools':
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1200',
    'Text Tools':
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1200',
    'Security Tools':
      'https://images.unsplash.com/photo-1633265486064-086b31f3c8c8?auto=format&fit=crop&q=80&w=1200',
    'Developer Tools':
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
    Calculators:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200',
    'SEO & Marketing':
      'https://images.unsplash.com/photo-1432888622747-4eb9a8f2e037?auto=format&fit=crop&q=80&w=1200',
    'Video Tools':
      'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&q=80&w=1200',
    'Social Media':
      'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&q=80&w=1200',
    Finance:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200',
    'AI Tools':
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
    Writing:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=1200',
    Health:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200',
    Business:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1200',
    Education:
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1200',
  };
  return (
    map[category] ??
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
  );
}

function toolBlogSlug(tool: Tool) {
  // Deterministic, short, and unique from editorial posts.
  return `tool-${tool.slug}`;
}

function toolBlogTitle(tool: Tool) {
  // More click-friendly + matches the intent query.
  return `${tool.name} (Free Online Tool) — ${tool.tagline}`;
}

function truncate(text: string, maxLen: number) {
  const s = text.replace(/\s+/g, ' ').trim();
  if (s.length <= maxLen) return s;
  return `${s.slice(0, maxLen - 1).trimEnd()}…`;
}

function toolExcerpt(tool: Tool) {
  return truncate(`${tool.tagline}. ${tool.description}`, 180);
}

function toolContent(tool: Tool) {
  const toolUrl = `https://www.codexstudio2026.com/tools/${tool.slug}`;

  const howTo = tool.howToSteps.map((s, i) => `${i + 1}. ${s}`).join('\n');

  const keywords =
    tool.keywords?.length ? tool.keywords.slice(0, 8).map((k) => `- **${k}**`).join('\n') : '';

  return [
    `If you searched for a **${tool.name}** or a fast way to ${tool.tagline.toLowerCase()}, this guide is for you. Use the tool instantly here: ${toolUrl}.`,
    `## What the ${tool.name} does`,
    tool.longDescription,
    `## How to use the ${tool.name} (step-by-step)`,
    howTo,
    `## Best use cases (real-world examples)`,
    `People commonly use ${tool.name} for:`,
    `- Cleaning up a quick task before publishing to a website or social platform`,
    `- Checking results before sending a file, link, or document to a client`,
    `- Saving time when you only need a one-off utility (no software install)`,
    `- Working on mobile when you’re away from your laptop`,
    `## Tips for better results`,
    `- Use the simplest input first, then adjust settings to match your exact output needs.`,
    `- If you’re working with sensitive data, prefer tools that run client-side (in-browser) and avoid uploading to unknown services.`,
    `- For SEO work, always review generated text before publishing to match your brand and avoid duplicates.`,
    keywords ? `## Keywords people search for\n${keywords}` : '',
    `## Try more free tools from CodexStudio`,
    `Browse all tools at https://www.codexstudio2026.com/tools — or if you need a **custom tool**, **SEO**, or a **modern business website**, check our Services page and Contact us for a quote.`,
  ]
    .filter(Boolean)
    .join('\n\n');
}

export function buildToolBlogPosts(tools: Tool[]): BlogPost[] {
  // Use a consistent date string format (matches existing posts like "Mar 12, 2026").
  const date = 'Mar 26, 2026';

  return tools.map((tool) => ({
    title: toolBlogTitle(tool),
    slug: toolBlogSlug(tool),
    excerpt: toolExcerpt(tool),
    category: tool.category,
    author: 'CodexStudio Team',
    date,
    image: categoryImage(tool.category),
    content: toolContent(tool),
  }));
}

