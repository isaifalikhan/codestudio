import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/constants';
import { tools, categories } from '@/lib/resources-data';
import { JsonLd } from '@/app/components/JsonLd';
import { ResourcesFilter } from '@/app/components/ResourcesFilter';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '50 Best Free Online Tools for Developers & Businesses | CodexStudio Resources',
  description:
    'Curated list of 50 free tools every developer, designer, and business owner needs. Design, SEO, writing, AI, video, and productivity tools — handpicked by CodexStudio.',
  keywords: [
    'free online tools',
    'best free tools for developers',
    'free design tools',
    'free SEO tools',
    'free tools for small business',
    'online productivity tools',
    'free web development tools',
    'best free AI tools 2026',
    'free tools for startups',
    'digital tools for business',
  ],
  alternates: {
    canonical: `${SITE_URL}/resources`,
  },
  openGraph: {
    title: '50 Best Free Online Tools for Developers & Businesses | CodexStudio',
    description:
      'Curated list of 50 free tools every developer, designer, and business owner needs. Handpicked by the CodexStudio team.',
    url: `${SITE_URL}/resources`,
    siteName: 'CodexStudio',
    images: [
      {
        url: `${SITE_URL}/og-resources.jpg`,
        width: 1200,
        height: 630,
        alt: '50 Free Tools for Developers and Businesses — CodexStudio Resources',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: '50 Best Free Online Tools for Developers & Businesses',
    description:
      'Curated list of 50 free tools every developer and business owner needs. Handpicked by CodexStudio.',
    images: [`${SITE_URL}/og-resources.jpg`],
  },
};

const resourcesSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: '50 Best Free Online Tools for Developers & Businesses',
  description:
    'Curated list of 50 free tools every developer, designer, and business owner needs.',
  url: `${SITE_URL}/resources`,
  author: {
    '@type': 'Organization',
    name: 'CodexStudio',
    url: SITE_URL,
  },
  mainEntity: {
    '@type': 'ItemList',
    name: '50 Free Online Tools',
    numberOfItems: 50,
    itemListElement: tools.map((tool, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: tool.name,
      description: tool.description,
      url: tool.url,
    })),
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Resources', item: `${SITE_URL}/resources` },
  ],
};

export default function ResourcesPage() {
  return (
    <div className="bg-[#FDF8EC] min-h-screen">
      <JsonLd data={resourcesSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="pt-12 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#997F6C] font-bold uppercase tracking-widest text-sm mb-4">
            Free Resources
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-[#2F281D] mb-6 leading-tight">
            50 Free Tools Every Business & Developer Should Know
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-[#2F281D]/70 leading-relaxed mb-10">
            Whether you&apos;re a developer, designer, or business owner, the right free online tools
            can save you time and money. We&apos;ve handpicked 50 of the best free tools for developers,
            free design tools for businesses, and free SEO and productivity tools — so you can
            focus on building instead of searching. From best free AI tools in 2026 to free web
            development tools and free tools for small business, this list has everything you need
            to work smarter.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#tools-grid"
              className="inline-flex items-center gap-2 bg-[#2F281D] text-[#FDF8EC] px-6 py-3 rounded-full font-bold hover:bg-[#997F6C] transition-colors"
            >
              Browse Tools ↓
            </a>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-[#2F281D]/30 text-[#2F281D] px-6 py-3 rounded-full font-bold hover:bg-[#2F281D]/5 transition-colors"
            >
              Our Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-6 px-6 border-y border-[#2F281D]/10 bg-[#E8E2D2]/50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 md:gap-12 text-center">
          <span className="text-[#2F281D] font-bold">50 Tools Curated</span>
          <span className="text-[#2F281D]/60">·</span>
          <span className="text-[#2F281D] font-bold">9 Categories</span>
          <span className="text-[#2F281D]/60">·</span>
          <span className="text-[#2F281D] font-bold">100% Free</span>
          <span className="text-[#2F281D]/60">·</span>
          <span className="text-[#2F281D] font-bold">Updated 2026</span>
        </div>
      </section>

      {/* Filter + Grid */}
      <section id="tools-grid" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <ResourcesFilter tools={tools} categories={categories} />
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 px-6 border-t border-[#2F281D]/10">
        <div className="max-w-3xl mx-auto prose prose-lg prose-[#2F281D]">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-[#2F281D] mt-12 mb-4">
            Why We Curated These 50 Free Tools
          </h2>
          <p className="text-[#2F281D]/80 leading-relaxed">
            At CodexStudio we use dozens of free online tools every day — for design, development,
            SEO, and client work. We know how overwhelming it can be to find the best free tools for
            developers and the best free design tools for businesses. So we built this resource page
            to share our go-to list: 50 free tools that we actually use. Whether you need free SEO
            tools to rank higher on Google, free web development tools for your stack, or free tools
            for small business and startups, you&apos;ll find them here. We&apos;ve included free AI tools
            that are essential in 2026, online productivity tools for teams, and free image and
            video tools for content creators. Every tool has a solid free tier — no credit card
            required — and we&apos;ve noted which ones offer paid upgrades if you need more later.
          </p>

          <h2 className="text-2xl md:text-3xl font-display font-bold text-[#2F281D] mt-12 mb-4">
            Free Design Tools — Our Top Picks
          </h2>
          <p className="text-[#2F281D]/80 leading-relaxed">
            Canva, Figma, Coolors, Google Fonts, Flaticon, and Undraw are our top free design tools
            for creating graphics, UI mockups, color palettes, and illustrations. Perfect for
            startups and small businesses that need professional-looking assets without a big
            budget. Explore all six in our{' '}
            <Link href="/resources/design" className="text-[#997F6C] font-semibold hover:underline">
              Design category
            </Link>
            .
          </p>

          <h2 className="text-2xl md:text-3xl font-display font-bold text-[#2F281D] mt-12 mb-4">
            Best Free AI Tools in 2026
          </h2>
          <p className="text-[#2F281D]/80 leading-relaxed">
            ChatGPT, Claude, Perplexity, Gamma, v0 by Vercel, and Runway ML are the free AI tools we
            use most for writing, coding, research, presentations, and video. They&apos;re the best free
            AI tools for businesses and developers in 2026. See the full list in our{' '}
            <Link href="/resources/ai" className="text-[#997F6C] font-semibold hover:underline">
              AI Tools category
            </Link>
            .
          </p>

          <h2 className="text-2xl md:text-3xl font-display font-bold text-[#2F281D] mt-12 mb-4">
            Free SEO Tools to Rank on Google
          </h2>
          <p className="text-[#2F281D]/80 leading-relaxed">
            Google Search Console, Ahrefs Webmaster Tools, PageSpeed Insights, Ubersuggest, and
            GTmetrix are the free SEO tools we recommend to improve search rankings and site speed.
            Use them to fix crawl errors, check backlinks, and hit Core Web Vitals. Browse all five
            in our{' '}
            <Link href="/resources/seo" className="text-[#997F6C] font-semibold hover:underline">
              SEO category
            </Link>
            .
          </p>

          <h2 className="text-2xl md:text-3xl font-display font-bold text-[#2F281D] mt-12 mb-4">
            Free Developer Tools Every Dev Needs
          </h2>
          <p className="text-[#2F281D]/80 leading-relaxed">
            VS Code, CodePen, GitHub, Postman, Regex101, JSON Formatter, and Crontab Guru are
            essential free developer tools for coding, API testing, and DevOps. Check out all seven
            in our{' '}
            <Link href="/resources/dev-tools" className="text-[#997F6C] font-semibold hover:underline">
              Dev Tools category
            </Link>
            .
          </p>

          <h2 className="text-2xl md:text-3xl font-display font-bold text-[#2F281D] mt-12 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2 not-prose">
            <details className="group rounded-xl border border-[#2F281D]/10 bg-[#FDF8EC] overflow-hidden">
              <summary className="px-5 py-4 font-semibold text-[#2F281D] cursor-pointer list-none flex items-center justify-between">
                Are all these tools really free?
                <span className="text-[#997F6C] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="px-5 pb-4 text-[#2F281D]/70 leading-relaxed">
                Yes, all 50 tools have a free tier or are completely free. Some offer paid upgrades
                for advanced features, which we&apos;ve noted, but the core functionality is always free.
              </p>
            </details>
            <details className="group rounded-xl border border-[#2F281D]/10 bg-[#FDF8EC] overflow-hidden">
              <summary className="px-5 py-4 font-semibold text-[#2F281D] cursor-pointer list-none flex items-center justify-between">
                Which free tool is best for small business owners?
                <span className="text-[#997F6C] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="px-5 pb-4 text-[#2F281D]/70 leading-relaxed">
                For small businesses, we recommend starting with: Canva (design), Google Analytics
                (tracking), Grammarly (writing), Google Search Console (SEO), and Calendly
                (scheduling). These 5 tools cover your most essential needs at zero cost.
              </p>
            </details>
            <details className="group rounded-xl border border-[#2F281D]/10 bg-[#FDF8EC] overflow-hidden">
              <summary className="px-5 py-4 font-semibold text-[#2F281D] cursor-pointer list-none flex items-center justify-between">
                What is the best free SEO tool?
                <span className="text-[#997F6C] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="px-5 pb-4 text-[#2F281D]/70 leading-relaxed">
                Google Search Console is the most important free SEO tool — it&apos;s made by Google and
                shows you exactly how your site performs in search. Combine it with Ahrefs
                Webmaster Tools for backlink analysis and you have a powerful free SEO stack.
              </p>
            </details>
            <details className="group rounded-xl border border-[#2F281D]/10 bg-[#FDF8EC] overflow-hidden">
              <summary className="px-5 py-4 font-semibold text-[#2F281D] cursor-pointer list-none flex items-center justify-between">
                What are the best free AI tools in 2026?
                <span className="text-[#997F6C] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="px-5 pb-4 text-[#2F281D]/70 leading-relaxed">
                ChatGPT (OpenAI), Claude (Anthropic), and Perplexity are the top three free AI
                assistants. For generating UI components, v0 by Vercel is unmatched. For AI
                presentations, Gamma is the fastest way to create slides from a prompt.
              </p>
            </details>
            <details className="group rounded-xl border border-[#2F281D]/10 bg-[#FDF8EC] overflow-hidden">
              <summary className="px-5 py-4 font-semibold text-[#2F281D] cursor-pointer list-none flex items-center justify-between">
                Which free tool should I use to speed up my website?
                <span className="text-[#997F6C] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="px-5 pb-4 text-[#2F281D]/70 leading-relaxed">
                Start with Google PageSpeed Insights to identify issues, then use TinyPNG or Squoosh
                to compress images, which is usually the biggest performance win. GTmetrix gives a
                detailed waterfall view to spot slower resources.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#2F281D] mb-4">
            Need a custom tool or website built for your business?
          </h2>
          <p className="text-[#2F281D]/70 text-lg mb-8">
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

      {/* Related */}
      <section className="py-12 px-6 border-t border-[#2F281D]/10 bg-[#E8E2D2]/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-display font-bold text-[#2F281D] mb-6 text-center">
            Explore Our Work
          </h2>
          <p className="text-[#2F281D]/70 text-center mb-6">
            We also build our own tools — try them free at <Link href="/tools" className="text-[#997F6C] font-semibold hover:underline">/tools</Link>.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/tools" className="text-[#997F6C] font-semibold hover:underline">
              Free Tools (40)
            </Link>
            <Link href="/portfolio" className="text-[#997F6C] font-semibold hover:underline">
              Portfolio
            </Link>
            <Link href="/services" className="text-[#997F6C] font-semibold hover:underline">
              Services
            </Link>
            <Link href="/blog" className="text-[#997F6C] font-semibold hover:underline">
              Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
