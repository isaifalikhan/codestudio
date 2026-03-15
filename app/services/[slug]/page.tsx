import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SITE_URL } from '@/lib/constants';
import { JsonLd } from '@/app/components/JsonLd';
import {
  SERVICE_SLUGS,
  getServiceBySlug,
  type ServiceSlug,
} from '@/lib/servicesData';

export async function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: 'Service | CodexStudio' };
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${SITE_URL}/services/${service.slug}`,
      siteName: 'CodexStudio',
      images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
      images: [`${SITE_URL}/og-image.jpg`],
    },
    alternates: { canonical: `${SITE_URL}/services/${service.slug}` },
  };
}

function ServiceJsonLd({ service }: { service: NonNullable<ReturnType<typeof getServiceBySlug>> }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.shortDesc,
    provider: { '@type': 'Organization', name: 'CodexStudio', url: SITE_URL },
    areaServed: 'Worldwide',
    offers: {
      '@type': 'Offer',
      price: service.startingFrom,
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: service.startingFrom,
        priceCurrency: 'USD',
        unitText: 'minimum',
      },
    },
  };
  return <JsonLd data={data} />;
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <ServiceJsonLd service={service} />
      <div className="bg-[#FDF8EC] min-h-screen">
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-[#997F6C] font-bold tracking-widest uppercase text-sm">
              Service
            </p>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-[#2F281D]">
              {service.title}
            </h1>
            <p className="text-xl text-[#2F281D]/60">
              {service.shortDesc}
            </p>
            <p className="text-[#997F6C] font-bold text-lg">
              Starting from ${service.startingFrom.toLocaleString()}
            </p>
          </div>
        </section>

        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none text-[#2F281D]/80 leading-relaxed space-y-4">
              {service.longContent.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-display font-bold text-[#2F281D] mb-6">
              What&apos;s included
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.details.map((d) => (
                <li key={d} className="flex items-center gap-2 text-[#2F281D] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#997F6C]" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-display font-bold text-[#2F281D] mb-6">
              Frequently asked questions
            </h2>
            <dl className="space-y-6">
              {service.faqs.map((faq, i) => (
                <div key={i}>
                  <dt className="font-bold text-[#2F281D] mb-1">{faq.question}</dt>
                  <dd className="text-[#2F281D]/70 pl-0">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-[#2F281D]/60">
              Ready to get started? We&apos;ll reply within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#2F281D] text-[#FDF8EC] rounded-full font-bold hover:bg-[#997F6C] transition-colors"
              >
                Get a quote <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 border border-[#2F281D]/20 text-[#2F281D] rounded-full font-bold hover:bg-[#2F281D]/5 transition-colors"
              >
                All services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
