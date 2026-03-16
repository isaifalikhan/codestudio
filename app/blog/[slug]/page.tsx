import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/src/data/blog';
import { JsonLd } from '@/app/components/JsonLd';

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
      authors: ['CodexStudio Team'],
      siteName: 'CodexStudio',
    },
    twitter: { card: 'summary_large_image', images: [post.image] },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const SITE = 'https://www.codexstudio2026.com';
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
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
      <header className="pt-40 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="text-[#997F6C] font-bold text-sm hover:underline mb-6 inline-block">
            ← Back to Blog
          </Link>
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
              return <p key={i} className="mt-4 leading-relaxed">{block}</p>;
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
              — or browse all 40 free tools in our <Link href="/tools" className="text-[#997F6C] font-semibold hover:underline">Tools</Link> section.
            </p>
          </div>
        </div>
      </div>
    </article>
    </>
  );
}
