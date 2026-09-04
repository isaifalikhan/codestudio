'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Code, Palette, ShoppingCart, Sparkles, Search, Smartphone, Layout, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { TechStack } from '../components/TechStack';
import { CTA } from '../components/CTA';
import { SERVICES_DATA, type ServiceSlug } from '@/lib/servicesData';

const ICONS: Record<ServiceSlug, typeof Code> = {
  'web-development': Code,
  'nextjs-development': Layout,
  'ecommerce-development': ShoppingCart,
  'ui-ux-design': Palette,
  'seo-optimization': Search,
  'mobile-app-development': Smartphone,
  'brand-identity-design': Sparkles,
};

const services = (Object.keys(SERVICES_DATA) as ServiceSlug[]).map((slug) => {
  const s = SERVICES_DATA[slug];
  return {
    slug,
    title: s.title,
    desc: s.shortDesc,
    icon: ICONS[slug],
    details: s.details,
    image: s.image,
    startingFrom: s.startingFrom,
  };
});

export const ServicesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#F6F4EC]"
    >
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#D98A2C] font-bold tracking-widest uppercase text-sm block"
          >
            Our Expertise
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-9xl font-display font-bold text-[#14171F]"
          >
            Digital <span className="text-[#14171F]/40 italic">Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#14171F]/60 leading-relaxed max-w-2xl mx-auto"
          >
            We provide a comprehensive suite of services designed to elevate your brand and drive digital success.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/portfolio" className="px-6 py-3 rounded-full font-bold bg-[#14171F] text-[#F6F4EC] hover:bg-[#D98A2C] transition-colors inline-flex items-center gap-2">
              View Portfolio <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="px-6 py-3 rounded-full font-bold border border-[#14171F]/20 text-[#14171F] hover:bg-[#14171F]/5 transition-colors">
              Start a Project
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
            >
              <div className="flex-1 space-y-8">
                <div className="w-16 h-16 rounded-2xl bg-[#14171F] text-[#F6F4EC] flex items-center justify-center">
                  <service.icon className="w-8 h-8" />
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-[#14171F]">{service.title}</h2>
                <p className="text-lg text-[#14171F]/60 leading-relaxed">{service.desc}</p>
                <p className="text-[#D98A2C] font-bold text-lg">Starting from ${service.startingFrom?.toLocaleString()}</p>
                <ul className="grid grid-cols-2 gap-4">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-[#14171F] font-bold">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D98A2C]" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-2 px-8 py-4 bg-[#14171F] text-[#F6F4EC] rounded-full font-bold hover:bg-[#D98A2C] transition-all group">
                    Learn More <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 border border-[#14171F]/20 text-[#14171F] rounded-full font-bold hover:bg-[#14171F]/5 transition-colors">
                    Get Started
                  </Link>
                </div>
                {service.slug === 'seo-optimization' && (
                  <p className="mt-4 text-[#14171F]/70">
                    Try our free SEO tools: <Link href="/tools/keyword-density" className="text-[#D98A2C] font-semibold hover:underline">Keyword Density Checker</Link> and <Link href="/tools/meta-description-generator" className="text-[#D98A2C] font-semibold hover:underline">Meta Description Generator</Link>.
                  </p>
                )}
                {(service.slug === 'web-development' || service.slug === 'ui-ux-design') && (
                  <p className="mt-4 text-[#14171F]/70">
                    <Link href="/portfolio" className="text-[#D98A2C] font-semibold hover:underline">View our portfolio</Link> to see recent work.
                  </p>
                )}
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-[16/10] rounded-[3rem] overflow-hidden shadow-2xl relative">
                  <Image
                    src={service.image}
                    alt={`${service.title} - CodexStudio service`}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <TechStack />

      <section className="py-16 px-6 border-t border-[#14171F]/10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#14171F]/80 text-lg mb-4">
            Not sure which service you need? <Link href="/contact" className="text-[#D98A2C] font-semibold hover:underline">Talk to us for free →</Link>
          </p>
          <p className="text-[#14171F]/70">
            Read our blog for tips: <Link href="/blog" className="text-[#D98A2C] font-semibold hover:underline">Web Development Insights →</Link>
          </p>
        </div>
      </section>

      <CTA />
    </motion.div>
  );
};
