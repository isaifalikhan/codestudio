import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Fragment } from 'react';
import { blogPosts } from '@/src/data/blog';
import { getRelatedTools, getToolBySlug } from '@/lib/tools-data';
import { JsonLd } from '@/app/components/JsonLd';

function RichParagraph({ text }: { text: string }) {
  const parts = text.split(/(\*\*.+?\*\*)/g);
  return (
    <p className="mt-4 leading-relaxed">
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={i} className="font-semibold text-[#2F281D]">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </p>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | CodexStudio Blog`,
    description: post.excerpt,
    alternates: { canonical: `https://www.codexstudio2026.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.codexstudio2026.com/blog/${post.slug}`,
      images: [{ url: post.image, width: 1200, height: 630 }],
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.lastModified ?? post.date,
      authors: ['Saif Ali'],
      section: post.category,
      siteName: 'CodexStudio',
    },
    twitter: { card: 'summary_large_image', images: [post.image] },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const toolSlug = slug.startsWith('tool-') ? slug.replace(/^tool-/, '') : null;
  const tool = toolSlug ? getToolBySlug(toolSlug) : undefined;
  const relatedTools = tool ? getRelatedTools(tool.slug, 3) : [];

  const SITE = 'https://www.codexstudio2026.com';
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.lastModified ?? post.date,
    author: {
      '@type': 'Person',
      name: 'Saif Ali',
      url: `${SITE}/team`,
      jobTitle: 'Founder & CEO',
      worksFor: { '@type': 'Organization', name: 'CodexStudio' },
    },
    publisher: {
      '@type': 'Organization',
      name: 'CodexStudio',
      logo: { '@type': 'ImageObject', url: `${SITE}/og-image.jpg` },
    },
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE}/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <article className="bg-[#FDF8EC] min-h-screen">
      <header className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#997F6C] font-bold uppercase tracking-widest text-sm">{post.category}</p>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-[#2F281D] mt-2">{post.title}</h1>
          <p className="text-[#2F281D]/60 mt-4">{post.date} · {post.author}</p>
        </div>
      </header>
      <div className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-[16/10] rounded-3xl overflow-hidden mb-12 relative">
            <Image
              src={post.image}
              alt={`Featured image for ${post.title}`}
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />
          </div>
          <div className="prose prose-lg max-w-none text-[#2F281D] prose-headings:font-display prose-headings:text-[#2F281D] prose-p:text-[#2F281D]/80 prose-a:text-[#997F6C]">
            <p className="text-xl text-[#2F281D]/70 leading-relaxed">{post.excerpt}</p>
            {post.content?.split('\n\n').map((block, i) => {
              if (block.startsWith('## ')) {
                return <h2 key={i} className="text-2xl font-display font-bold mt-12 mb-4 text-[#2F281D]">{block.slice(3)}</h2>;
              }
              return <RichParagraph key={i} text={block} />;
            })}
          </div>
          <div className="mt-12 pt-8 border-t border-[#2F281D]/10">
            <p className="text-[#2F281D]/70">
              Looking for free tools? Try our{' '}
              <Link href="/tools/word-counter" className="text-[#997F6C] font-semibold hover:underline">word counter</Link>
              ,{' '}
              <Link href="/tools/image-compressor" className="text-[#997F6C] font-semibold hover:underline">image compressor</Link>
              , or{' '}
              <Link href="/tools/password-generator" className="text-[#997F6C] font-semibold hover:underline">password generator</Link>
              — or browse all 140+ free tools in our <Link href="/tools" className="text-[#997F6C] font-semibold hover:underline">Tools</Link> section.
            </p>
          </div>

          {/* Related Tools */}
          <section className="mt-12 pt-10 border-t border-[#2F281D]/10">
            <h3 className="text-xl font-display font-bold text-[#2F281D] mb-4">Free Tools You Might Find Useful</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {tool ? (
                <>
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="block p-4 rounded-xl border border-[#2F281D]/10 bg-[#FDF8EC] hover:border-[#997F6C]/30 transition-colors"
                  >
                    <span className="text-[#997F6C] font-semibold">{tool.name} →</span>
                    <p className="text-[#2F281D]/70 mt-2 text-sm">{tool.tagline}</p>
                  </Link>
                  {relatedTools.slice(0, 2).map((t) => (
                    <Link
                      key={t.slug}
                      href={`/tools/${t.slug}`}
                      className="block p-4 rounded-xl border border-[#2F281D]/10 bg-[#FDF8EC] hover:border-[#997F6C]/30 transition-colors"
                    >
                      <span className="text-[#997F6C] font-semibold">{t.name} →</span>
                      <p className="text-[#2F281D]/70 mt-2 text-sm">{t.tagline}</p>
                    </Link>
                  ))}
                </>
              ) : (
                <>
                  <Link href="/tools/qr-code-generator" className="block p-4 rounded-xl border border-[#2F281D]/10 bg-[#FDF8EC] hover:border-[#997F6C]/30 transition-colors">
                    <span className="text-[#997F6C] font-semibold">Create a QR code for your business →</span>
                  </Link>
                  <Link href="/tools/image-compressor" className="block p-4 rounded-xl border border-[#2F281D]/10 bg-[#FDF8EC] hover:border-[#997F6C]/30 transition-colors">
                    <span className="text-[#997F6C] font-semibold">Compress your website images →</span>
                  </Link>
                  <Link href="/tools/meta-description-generator" className="block p-4 rounded-xl border border-[#2F281D]/10 bg-[#FDF8EC] hover:border-[#997F6C]/30 transition-colors">
                    <span className="text-[#997F6C] font-semibold">Generate your meta description →</span>
                  </Link>
                </>
              )}
            </div>
          </section>

          {/* Related Services */}
          <section className="mt-10 pt-10 border-t border-[#2F281D]/10">
            <h3 className="text-xl font-display font-bold text-[#2F281D] mb-2">Need help building your website?</h3>
            <p className="text-[#2F281D]/70 mb-4">CodexStudio builds fast, SEO-optimized websites for businesses in Islamabad and worldwide.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/services" className="text-[#997F6C] font-semibold hover:underline">View our services →</Link>
              <Link href="/contact" className="text-[#997F6C] font-semibold hover:underline">Get a free quote →</Link>
            </div>
          </section>

          {/* Related Blog Posts */}
          <section className="mt-10 pt-10 border-t border-[#2F281D]/10">
            <h3 className="text-xl font-display font-bold text-[#2F281D] mb-4">More from our blog</h3>
            <ul className="space-y-2">
              {blogPosts
                .filter((p) => p.slug !== post.slug)
                .filter((p) => (tool ? !p.slug.startsWith('tool-') : true))
                .slice(0, 2)
                .map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="text-[#997F6C] font-semibold hover:underline">
                    {p.title} →
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </article>
    </>
  );
}
