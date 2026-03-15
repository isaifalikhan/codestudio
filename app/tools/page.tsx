import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/constants';
import { tools, toolCategories } from '@/lib/tools-data';
import { ToolsHubClient } from '@/app/components/tools/ToolsHubClient';
import { JsonLd } from '@/app/components/JsonLd';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '40 Free Online Tools — Image, PDF, SEO & Dev Tools | CodexStudio',
  description:
    'Free online tools built by CodexStudio. Image compressor, PDF merger, password generator, word counter, QR code maker & 35 more. No signup, works in browser.',
  alternates: {
    canonical: `${SITE_URL}/tools`,
  },
  openGraph: {
    title: '40 Free Online Tools — Image, PDF, SEO & Dev Tools | CodexStudio',
    description:
      'Free online tools built by CodexStudio. Image compressor, PDF merger, password generator, word counter, QR code maker & 35 more. No signup, works in browser.',
    url: `${SITE_URL}/tools`,
    siteName: 'CodexStudio',
    type: 'website',
  },
};

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: '40 Free Online Tools — No Signup, Works in Browser',
  description:
    'Free online tools built by CodexStudio. Image compressor, PDF merger, password generator, word counter, QR code maker and more. All run 100% in your browser.',
  url: `${SITE_URL}/tools`,
  publisher: { '@type': 'Organization', name: 'CodexStudio', url: SITE_URL },
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: tools.length,
    itemListElement: tools.map((tool, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: tool.name,
      description: tool.tagline,
      url: `${SITE_URL}/tools/${tool.slug}`,
    })),
  },
};

export default function ToolsHubPage() {
  return (
    <>
      <JsonLd data={collectionSchema} />

      {/* Hero */}
      <section className="h-screen flex items-center justify-center pt-12 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#997F6C] font-bold uppercase tracking-widest text-sm mb-4">
            Free Tools
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-[#2F281D] mb-6 leading-tight">
            40 Free Online Tools — No Signup, Works in Browser
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-[#2F281D]/70 leading-relaxed mb-10">
            CodexStudio built these tools for developers, designers, and businesses. All tools run
            100% in your browser — nothing is ever uploaded to our servers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#tools-grid"
              className="inline-flex items-center gap-2 bg-[#2F281D] text-[#FDF8EC] px-6 py-3 rounded-full font-bold hover:bg-[#997F6C] transition-colors"
            >
              Browse Tools ↓
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-[#2F281D]/30 text-[#2F281D] px-6 py-3 rounded-full font-bold hover:bg-[#2F281D]/5 transition-colors"
            >
              Start a Project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-6 px-6 border-y border-[#2F281D]/10 bg-[#E8E2D2]/50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 md:gap-12 text-center">
          <span className="text-[#2F281D] font-bold">40 Tools</span>
          <span className="text-[#2F281D]/60">·</span>
          <span className="text-[#2F281D] font-bold">8 Categories</span>
          <span className="text-[#2F281D]/60">·</span>
          <span className="text-[#2F281D] font-bold">100% Free</span>
          <span className="text-[#2F281D]/60">·</span>
          <span className="text-[#2F281D] font-bold">No Signup</span>
        </div>
      </section>

      {/* Filter + Grid */}
      <section id="tools-grid" className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <ToolsHubClient tools={tools} />
        </div>
      </section>

      {/* SEO content ~400 words */}
      <section className="py-16 px-6 border-t border-[#2F281D]/10">
        <div className="max-w-3xl mx-auto prose prose-lg prose-[#2F281D]">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-[#2F281D] mt-0 mb-4">
            Why Use CodexStudio&apos;s Free Online Tools?
          </h2>
          <p className="text-[#2F281D]/80 leading-relaxed">
            Whether you need to compress an image, merge PDFs, count words, generate a strong
            password, or create a QR code, our free online tools get the job done without signup or
            uploads to our servers. Every tool runs entirely in your browser. That means your files
            and data stay on your device — we never see them. Developers love our JSON formatter,
            CSS and JavaScript minifiers, regex tester, and URL encoder. Designers use our image
            compressor, resizer, and format converter daily. Writers rely on our word counter and
            character counter for articles and social posts. Small businesses use our PDF tools,
            favicon generator, and meta tag generator to look professional without paying for
            expensive software.
          </p>

          <h2 className="text-2xl md:text-3xl font-display font-bold text-[#2F281D] mt-12 mb-4">
            Image Tools &amp; PDF Tools — No Account Required
          </h2>
          <p className="text-[#2F281D]/80 leading-relaxed">
            Our image compressor reduces PNG, JPG, and WebP file sizes by up to 80% so your website
            loads faster. The image resizer lets you set exact dimensions or scale by percentage
            while keeping aspect ratio. Need a different format? The image converter outputs JPG,
            PNG, WebP, and AVIF. For favicons we generate all standard sizes and give you the HTML
            snippet. PDF tools include merge, split, compress, and PDF to JPG — all powered by
            pdf-lib in the browser. Convert Word to PDF without sending your document anywhere.
            Every tool is free and works on desktop and mobile.
          </p>

          <h2 className="text-2xl md:text-3xl font-display font-bold text-[#2F281D] mt-12 mb-4">
            Text Tools, Security Tools &amp; Developer Tools
          </h2>
          <p className="text-[#2F281D]/80 leading-relaxed">
            Paste text into our word counter to see words, characters, sentences, paragraphs, and
            reading time. The character counter shows limits for Twitter, SMS, and meta
            descriptions with a live bar. Case converter handles UPPERCASE, lowercase, Title Case,
            camelCase, and snake_case. Generate Lorem Ipsum, convert titles to URL slugs, and remove
            duplicate lines in one click. For security we offer a strong password generator and
            password strength checker, plus hash generator (MD5, SHA-256, SHA-512) and Base64
            encoder/decoder — all client-side. Developers get a JSON formatter, CSS minifier,
            JavaScript minifier, HTML formatter, color picker, regex tester, URL encoder, meta tag
            generator, and live Markdown preview.
          </p>

          <h2 className="text-2xl md:text-3xl font-display font-bold text-[#2F281D] mt-12 mb-4">
            Calculators, QR Codes &amp; SEO Tools
          </h2>
          <p className="text-[#2F281D]/80 leading-relaxed">
            Calculate your age, BMI, percentages, tips, and splits with our calculator suite. The
            currency converter uses live exchange rates for 150+ currencies including PKR and USD.
            The unit converter handles length, weight, temperature, volume, area, speed, and
            digital storage. Create QR codes for URLs, WiFi, vCards, and plain text — then download
            as PNG. SEO and marketing tools include keyword density checker, meta description
            generator, privacy policy generator, and XML sitemap generator. Bookmark the tools you
            use most and come back anytime — they will always be free and private.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#2F281D] mb-4">
            Need a custom tool built for your business?
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
    </>
  );
}
