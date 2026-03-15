import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Portfolio } from '../components/Portfolio';
import { Stats } from '../components/Stats';
import { Testimonials } from '../components/Testimonials';
import { ContactForm } from '../components/ContactForm';
import { RevealSection } from '../components/RevealSection';
import { ProjectSlider } from '../components/ProjectSlider';
import { LogoSlider } from '../components/LogoSlider';
import { AboutPreview } from '../components/AboutPreview';
import { TechStack } from '../components/TechStack';
import { BlogPreview } from '../components/BlogPreview';
import { FAQ } from '../components/FAQ';
import { CTA } from '../components/CTA';
import { motion } from 'motion/react';

import { Reveal } from '../components/Reveal';

const ProcessSection = () => (
  <section className="py-24 px-6 bg-[#FDF8EC] perspective-1000" aria-label="Our process">
    <div className="max-w-7xl mx-auto">
      <Reveal width="100%">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-[#2F281D]">Our <span className="text-[#2F281D]/40 italic">Process</span></h2>
          <p className="text-[#2F281D]/40 max-w-2xl mx-auto text-lg">
            A systematic approach to delivering excellence.
          </p>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { step: '01', title: 'Strategy', desc: 'Defining goals and roadmap.' },
          { step: '02', title: 'Design', desc: 'Crafting the visual experience.' },
          { step: '03', title: 'Develop', desc: 'Building with precision.' },
          { step: '04', title: 'Launch', desc: 'Deploying to the world.' },
        ].map((item, i) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl bg-[#E8E2D2] border border-[#2F281D]/10 shadow-sm hover:shadow-xl transition-all cursor-default"
          >
            <span className="text-4xl font-display font-bold text-[#997F6C] mb-4 block">{item.step}</span>
            <h3 className="text-xl font-bold mb-2 text-[#2F281D]">{item.title}</h3>
            <p className="text-[#2F281D]/50 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#FDF8EC]"
    >
      <Hero />
      <LogoSlider />
      <Reveal width="100%">
        <Stats />
      </Reveal>
      <Reveal width="100%">
        <AboutPreview />
      </Reveal>
      <ProjectSlider />
      <Reveal width="100%">
        <Services />
      </Reveal>
      <Portfolio />
      <Reveal width="100%">
        <TechStack />
      </Reveal>
      <ProcessSection />
      <Reveal width="100%">
        <Testimonials />
      </Reveal>
      <Reveal width="100%">
        <BlogPreview />
      </Reveal>
      <Reveal width="100%">
        <FAQ />
      </Reveal>
      <CTA />
      <Reveal width="100%">
        <ContactForm />
      </Reveal>
    </motion.div>
  );
};
