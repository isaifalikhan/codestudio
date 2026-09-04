import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/constants';
import { tools } from '@/lib/tools-data';
import { ToolsHubClient } from '@/app/components/tools/ToolsHubClient';
import { JsonLd } from '@/app/components/JsonLd';
import { ArrowRight } from 'lucide-react';
import { AdPlacement } from '@/app/components/AdPlacement';

const SITE = 'https://www.codexstudio2026.com';
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    { '@type': 'ListItem', position: 2, name: 'Tools', item: `${SITE}/tools` },
  ],
};

export const metadata: Metadata = {
  title: '100+ Free Online Tools — Image, PDF, AI, Video & More | CodexStudio',
  description:
    '100+ free online tools: image compressor, PDF merger, TikTok downloader, password generator, invoice maker, age calculator, AI writer & more. No signup, works in browser. Built by CodexStudio.',
  keywords: [
    'free online tools',
    'image compressor free',
    'pdf merger online',
    'password generator',
    'word counter online',
    'qr code generator free',
  ],
  alternates: { canonical: 'https://www.codexstudio2026.com/tools' },
  openGraph: {
    title: '100+ Free Online Tools — No Signup | CodexStudio',
    description: '100+ free browser tools. Image, PDF, video, AI, finance, health & more. All free.',
    url: 'https://www.codexstudio2026.com/tools',
    images: [{ url: '/og-tools.jpg', width: 1200, height: 630 }],
    type: 'website',
    siteName: 'CodexStudio',
  },
  twitter: { card: 'summary_large_image', images: ['/og-tools.jpg'] },
};

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: '100+ Free Online Tools — No Signup, Works in Browser',
  description:
    'Free online tools built by CodexStudio. Image compressor, PDF merger, video downloaders, password generator, word counter, QR code maker and more. Most calculators and file tools run in your browser; video and AI tools use our secure APIs.',
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
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="h-screen flex items-center justify-center pt-12 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#D98A2C] font-bold uppercase tracking-widest text-sm mb-4">
            Free Tools
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-[#14171F] mb-6 leading-tight">
            {tools.length}+ Free Online Tools — No Signup, Works in Browser
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-[#14171F]/70 leading-relaxed mb-10">
            CodexStudio built these tools for developers, designers, and businesses. Most tools run in your browser with no signup. Video downloaders and AI
            writers use our secure servers only to complete those tasks — see each tool&apos;s page for details.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#tools-grid"
              className="inline-flex items-center gap-2 bg-[#14171F] text-[#F6F4EC] px-6 py-3 rounded-full font-bold hover:bg-[#D98A2C] transition-colors"
            >
              Browse Tools ↓
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-[#14171F]/30 text-[#14171F] px-6 py-3 rounded-full font-bold hover:bg-[#14171F]/5 transition-colors"
            >
              Start a Project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-6 px-6 border-y border-[#14171F]/10 bg-[#ECE7D9]/50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 md:gap-12 text-center">
          <span className="text-[#14171F] font-bold">{tools.length}+ Tools</span>
          <span className="text-[#14171F]/60">·</span>
          <span className="text-[#14171F] font-bold">17 Categories</span>
          <span className="text-[#14171F]/60">·</span>
          <span className="text-[#14171F] font-bold">100% Free</span>
          <span className="text-[#14171F]/60">·</span>
          <span className="text-[#14171F] font-bold">No Signup</span>
        </div>
      </section>

      {/* Ad placement */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <AdPlacement slot="top" />
      </div>

      {/* Filter + Grid */}
      <section id="tools-grid" className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <ToolsHubClient tools={tools} />
        </div>
      </section>

      {/* SEO content ~400 words */}
      <section className="py-16 px-6 border-t border-[#14171F]/10">
        <div className="max-w-3xl mx-auto prose prose-lg prose-[#14171F]">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-[#14171F] mt-0 mb-4">
            Why Use CodexStudio&apos;s Free Online Tools?
          </h2>
          <p className="text-[#14171F]/80 leading-relaxed">
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

          <h2 className="text-2xl md:text-3xl font-display font-bold text-[#14171F] mt-12 mb-4">
            Image Tools &amp; PDF Tools — No Account Required
          </h2>
          <p className="text-[#14171F]/80 leading-relaxed">
            Our image compressor reduces PNG, JPG, and WebP file sizes by up to 80% so your website
            loads faster. The image resizer lets you set exact dimensions or scale by percentage
            while keeping aspect ratio. Need a different format? The image converter outputs JPG,
            PNG, WebP, and AVIF. For favicons we generate all standard sizes and give you the HTML
            snippet. PDF tools include merge, split, compress, and PDF to JPG — all powered by
            pdf-lib in the browser. Convert Word to PDF without sending your document anywhere.
            Every tool is free and works on desktop and mobile.
          </p>

          <h2 className="text-2xl md:text-3xl font-display font-bold text-[#14171F] mt-12 mb-4">
            Text Tools, Security Tools &amp; Developer Tools
          </h2>
          <p className="text-[#14171F]/80 leading-relaxed">
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

          <h2 className="text-2xl md:text-3xl font-display font-bold text-[#14171F] mt-12 mb-4">
            Calculators, QR Codes &amp; SEO Tools
          </h2>
          <p className="text-[#14171F]/80 leading-relaxed">
            Calculate your age, BMI, percentages, tips, and splits with our calculator suite. The
            currency converter uses live exchange rates for 150+ currencies including PKR and USD.
            The unit converter handles length, weight, temperature, volume, area, speed, and
            digital storage. Create QR codes for URLs, WiFi, vCards, and plain text — then download
            as PNG. SEO and marketing tools include keyword density checker, meta description
            generator, privacy policy generator, and XML sitemap generator. Bookmark the tools you
            use most and come back anytime — they will always be free and private.
          </p>

          <h2 className="text-2xl md:text-3xl font-display font-bold text-[#14171F] mt-12 mb-4">
            Video Downloaders — TikTok, YouTube, Instagram &amp; More
          </h2>
          <p className="text-[#14171F]/80 leading-relaxed">
            Download videos from TikTok without watermark, save YouTube videos in MP4 or MP3, and
            grab Instagram Reels, photos, and stories. Our Facebook, Twitter/X, Pinterest, and
            Vimeo downloaders work the same way: paste the URL and download. We also offer a
            YouTube thumbnail downloader, video-to-GIF converter, and audio trimmer. All run in
            your browser — no software to install.
          </p>
          <p className="text-[#14171F]/80 leading-relaxed mt-4">
            <strong className="text-[#14171F]">Responsible use:</strong> Only download or reuse content you have the right to use. Respect copyright and each
            platform&apos;s terms of service. CodexStudio does not encourage infringement or unauthorized redistribution.
          </p>

          <h2 className="text-2xl md:text-3xl font-display font-bold text-[#14171F] mt-12 mb-4">
            Finance Tools — Invoices, Loans &amp; Calculators
          </h2>
          <p className="text-[#14171F]/80 leading-relaxed">
            Create professional invoices and download as PDF with our free invoice generator. Calculate
            loan EMI, mortgage payments, compound interest, VAT, discounts, profit margins, and
            salary-to-hourly conversions. Whether you run a small business or manage personal
            finances, these tools help you save time and make better decisions — no signup required.
          </p>

          <h2 className="text-2xl md:text-3xl font-display font-bold text-[#14171F] mt-12 mb-4">
            AI Tools — Blog Writer, Grammar Checker &amp; Summarizer
          </h2>
          <p className="text-[#14171F]/80 leading-relaxed">
            Use our free AI-powered writing tools: blog post generator, grammar checker, text
            summarizer, and more. Generate headlines, meta descriptions, and social captions in
            seconds. All tools run in your browser and respect your privacy. Perfect for content
            creators, students, and marketers who want to work faster without expensive subscriptions.
          </p>

          <h2 className="text-2xl md:text-3xl font-display font-bold text-[#14171F] mt-12 mb-4">
            Health Tools — Calorie Calculator, BMI &amp; Sleep
          </h2>
          <p className="text-[#14171F]/80 leading-relaxed">
            Track your wellness with our free health tools: calorie calculator, BMI calculator,
            sleep calculator, water intake tracker, and more. Get quick estimates and daily
            recommendations. No account needed — just open the tool and use it. Ideal for anyone
            focused on fitness, diet, or better sleep habits.
          </p>

          <h2 className="text-2xl md:text-3xl font-display font-bold text-[#14171F] mt-12 mb-4">
            Business Tools — Pomodoro Timer, URL Shortener &amp; More
          </h2>
          <p className="text-[#14171F]/80 leading-relaxed">
            Stay productive with our Pomodoro timer, URL shortener, and meeting cost calculator.
            Create professional quotes and invoices, generate placeholder content, and manage
            simple project lists. These free business tools help freelancers and small teams work
            smarter without extra software or signup.
          </p>
        </div>
      </section>

      {/* Ad placement */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <AdPlacement slot="bottom" />
      </div>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#14171F] mb-4">
            Need a custom tool built for your business?
          </h2>
          <p className="text-[#14171F]/70 text-lg mb-8">
            The CodexStudio team builds fast, SEO-optimized websites and web apps. Let&apos;s build
            something great together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#14171F] text-[#F6F4EC] px-8 py-4 rounded-full font-bold hover:bg-[#D98A2C] transition-colors"
          >
            Start a Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
