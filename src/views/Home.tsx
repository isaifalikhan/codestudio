'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { RevealCSS } from '../components/RevealCSS';

/* Above-the-fold: Hero. Below-the-fold: everything else in separate chunks to cut main-thread work */
const Hero = dynamic(
  () => import('../components/Hero').then((m) => ({ default: m.Hero })),
  { ssr: true }
);
const Stats = dynamic(
  () => import('../components/Stats').then((m) => ({ default: m.Stats })),
  { ssr: true }
);
const AboutPreview = dynamic(
  () => import('../components/AboutPreview').then((m) => ({ default: m.AboutPreview })),
  { ssr: true }
);
const ProjectSlider = dynamic(
  () => import('../components/ProjectSlider').then((m) => ({ default: m.ProjectSlider })),
  { ssr: true }
);
const Services = dynamic(
  () => import('../components/Services').then((m) => ({ default: m.Services })),
  { ssr: true }
);
const ToolsTeaser = dynamic(
  () => import('../components/ToolsTeaser').then((m) => ({ default: m.ToolsTeaser })),
  { ssr: true }
);
const ResourcesBanner = dynamic(
  () => import('../components/ResourcesBanner').then((m) => ({ default: m.ResourcesBanner })),
  { ssr: true }
);
const WhyChooseUs = dynamic(
  () => import('../components/WhyChooseUs').then((m) => ({ default: m.WhyChooseUs })),
  { ssr: true }
);
const Portfolio = dynamic(
  () => import('../components/Portfolio').then((m) => ({ default: m.Portfolio })),
  { ssr: true }
);
const TechStack = dynamic(
  () => import('../components/TechStack').then((m) => ({ default: m.TechStack })),
  { ssr: true }
);
const ProcessSection = dynamic(
  () => import('../components/ProcessSection').then((m) => ({ default: m.ProcessSection })),
  { ssr: true }
);
const Testimonials = dynamic(
  () => import('../components/Testimonials').then((m) => ({ default: m.Testimonials })),
  { ssr: true }
);
const BlogPreview = dynamic(
  () => import('../components/BlogPreview').then((m) => ({ default: m.BlogPreview })),
  { ssr: true }
);
const FAQ = dynamic(
  () => import('../components/FAQ').then((m) => ({ default: m.FAQ })),
  { ssr: true }
);
const CTA = dynamic(
  () => import('../components/CTA').then((m) => ({ default: m.CTA })),
  { ssr: true }
);
const ContactForm = dynamic(
  () => import('../components/ContactForm').then((m) => ({ default: m.ContactForm })),
  { ssr: true }
);

export const Home = () => {
  return (
    <div className="bg-[#FDF8EC] page-enter">
      <Hero />
      <RevealCSS width="100%">
        <Stats />
      </RevealCSS>
      <RevealCSS width="100%">
        <AboutPreview />
      </RevealCSS>
      <div className="content-visibility-auto">
        <ProjectSlider />
      </div>
      <RevealCSS width="100%">
        <div className="content-visibility-auto">
          <Services />
        </div>
      </RevealCSS>
      <RevealCSS width="100%">
        <div className="content-visibility-auto">
          <ToolsTeaser />
        </div>
      </RevealCSS>
      <RevealCSS width="100%">
        <div className="content-visibility-auto">
          <ResourcesBanner />
        </div>
      </RevealCSS>
      <RevealCSS width="100%">
        <div className="content-visibility-auto">
          <WhyChooseUs />
        </div>
      </RevealCSS>
      <div className="content-visibility-auto">
        <Portfolio />
      </div>
      <RevealCSS width="100%">
        <div className="content-visibility-auto">
          <TechStack />
        </div>
      </RevealCSS>
      <ProcessSection />
      <RevealCSS width="100%">
        <div className="content-visibility-auto">
          <Testimonials />
        </div>
      </RevealCSS>
      <RevealCSS width="100%">
        <div className="content-visibility-auto">
          <BlogPreview />
        </div>
      </RevealCSS>
      <RevealCSS width="100%">
        <div className="content-visibility-auto">
          <FAQ />
        </div>
      </RevealCSS>
      <div className="content-visibility-auto">
        <CTA />
      </div>
      <RevealCSS width="100%">
        <div className="content-visibility-auto">
          <ContactForm />
        </div>
      </RevealCSS>
    </div>
  );
};
