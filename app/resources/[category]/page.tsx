import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE_URL } from '@/lib/constants';
import { tools, categories } from '@/lib/resources-data';
import { ResourceCard } from '@/app/components/ResourceCard';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const categoryMeta: Record<
  string,
  { title: string; description: string }
> = {
  design: {
    title: '6 Best Free Design Tools for Designers & Businesses | CodexStudio',
    description:
      'Top free design tools including Canva, Figma, Coolors, Google Fonts, Flaticon, and Undraw. Free resources curated by CodexStudio.',
  },
  writing: {
    title: '6 Best Free Writing & Productivity Tools | CodexStudio Resources',
    description:
      'Free writing tools: Grammarly, QuillBot, Hemingway Editor, DeepL, Notion, and more. Handpicked by the CodexStudio team.',
  },
  'dev-tools': {
    title: '7 Best Free Developer Tools Every Dev Needs | CodexStudio',
    description:
      'Essential free developer tools: VS Code, CodePen, GitHub, Postman, Regex101, JSONFormatter, Crontab Guru. Curated by CodexStudio.',
  },
  images: {
    title: '6 Best Free Image Tools for Designers | CodexStudio Resources',
    description:
      'Free image tools: Unsplash, Pexels, TinyPNG, Remove.bg, Squoosh, Favicon.io. Handpicked free resources by CodexStudio.',
  },
  ai: {
    title: '6 Best Free AI Tools for Businesses in 2026 | CodexStudio',
    description:
      'Top free AI tools: ChatGPT, Claude, Perplexity, Gamma, v0 by Vercel, Runway ML. Curated by CodexStudio web development agency.',
  },
  seo: {
    title: '5 Best Free SEO Tools to Rank Higher on Google | CodexStudio',
    description:
      'Free SEO tools: Google Search Console, Ahrefs Webmaster, PageSpeed Insights, Ubersuggest, GTmetrix. Curated by CodexStudio.',
  },
  convert: {
    title: '5 Best Free File Converter Tools Online | CodexStudio Resources',
    description:
      'Free file conversion tools: Smallpdf, ILovePDF, CloudConvert, Convertio, QR Code Generator. Curated by CodexStudio.',
  },
  video: {
    title: '4 Best Free Video Tools for Content Creators | CodexStudio',
    description:
      'Free video tools: Loom, CapCut, Descript, OBS Studio. The best free video recording and editing tools curated by CodexStudio.',
  },
  utilities: {
    title: '5 Best Free Utility Tools for Developers & Teams | CodexStudio',
    description:
      'Essential free utilities: Google Analytics, Calendly, Whimsical, VirusTotal, Have I Been Pwned. Curated by CodexStudio.',
  },
};

export async function generateStaticParams() {
  return categories
    .filter((c) => c.id !== 'all')
    .map((cat) => ({ category: cat.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const meta = categoryMeta[category];
  if (!meta) return { title: 'Resources | CodexStudio' };
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `${SITE_URL}/resources/${category}` },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${SITE_URL}/resources/${category}`,
      siteName: 'CodexStudio',
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function ResourceCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = categories.find((c) => c.id === category);
  if (!cat || category === 'all') notFound();

  const categoryTools = tools.filter((t) => t.category === category);

  const introText: Record<string, string> = {
    design:
      'Our favorite free design tools for creating graphics, UI mockups, and branding. From Canva for quick social posts to Figma for professional UI/UX design, these six tools cover everything a designer or business needs without spending a dime.',
    writing:
      'Write better, faster, and clearer with these free writing and productivity tools. Grammar checkers, paraphrasing tools, translators, and all-in-one workspaces like Notion — handpicked for content creators and teams.',
    'dev-tools':
      'The free developer tools we use every day: from VS Code and GitHub to Postman and Regex101. Whether you\'re building APIs, debugging regex, or managing cron jobs, this list has you covered.',
    images:
      'Free stock photos, image compression, background removal, and favicon generators. Everything you need to source and optimize images for the web — all free.',
    ai:
      'The best free AI tools in 2026 for writing, coding, research, and content creation. ChatGPT, Claude, Perplexity, Gamma, v0, and Runway ML — all with strong free tiers.',
    seo:
      'Free SEO tools to improve your Google rankings: search console, backlink analysis, page speed, keyword research, and performance testing. No subscription required.',
    convert:
      'Convert PDFs, images, video, and more with these free online file converters. Merge, split, compress, and convert between 200+ formats without installing software.',
    video:
      'Free video tools for recording, editing, and streaming. From quick screen recordings with Loom to professional streaming with OBS Studio — all free to get started.',
    utilities:
      'Analytics, scheduling, wireframing, and security — these free utility tools keep our projects and teams running smoothly.',
  };

  return (
    <div className="bg-[#FDF8EC] min-h-screen">
      <section className="pt-12 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-[#997F6C] font-semibold hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all tools
          </Link>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-[#2F281D] mb-4">
            Best Free {cat.label} Tools — Curated by CodexStudio
          </h1>
          <p className="max-w-2xl text-[#2F281D]/70 leading-relaxed">
            {introText[category] ?? `Handpicked free ${cat.label.toLowerCase()} tools we use and recommend.`}
          </p>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryTools.map((tool) => (
              <ResourceCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-[#2F281D]/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-display font-bold text-[#2F281D] mb-4">
            Need a custom tool or website built for your business?
          </h2>
          <p className="text-[#2F281D]/70 mb-8">
            The CodexStudio team builds fast, SEO-optimized websites and web apps. Let&apos;s build
            something great together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#2F281D] text-[#FDF8EC] px-8 py-4 rounded-full font-bold hover:bg-[#997F6C] transition-colors"
          >
            Start a Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
