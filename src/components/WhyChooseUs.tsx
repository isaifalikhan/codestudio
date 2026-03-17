import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Check, Cpu, Search, Zap, Smartphone, MessageCircle } from 'lucide-react';

const reasons = [
  {
    icon: Cpu,
    title: 'Modern tech stack',
    description: 'React, Next.js, Node.js—we build with tools that scale and stay maintainable.',
    link: { href: '/services', text: 'See our tech stack →' },
  },
  {
    icon: Search,
    title: 'SEO-optimized development',
    description: 'Sites built for search from day one so you rank better and get more traffic.',
    link: { href: '/services', text: 'Learn about our SEO services →' },
  },
  {
    icon: Zap,
    title: 'Fast loading & scalable architecture',
    description: 'Performance and scalability built in, so growth never slows you down.',
    link: null as { href: string; text: string } | null,
  },
  {
    icon: Smartphone,
    title: 'Mobile-first responsive design',
    description: 'Every project is responsive and tested across devices and screen sizes.',
    link: null as { href: string; text: string } | null,
  },
  {
    icon: MessageCircle,
    title: 'Transparent communication',
    description: 'Clear updates, honest timelines, and a single point of contact throughout.',
    link: null as { href: string; text: string } | null,
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 px-6 bg-[#E8E2D2]/50" aria-labelledby="why-choose-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#997F6C] font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Why CodexStudio
          </motion.span>
          <motion.h2
            id="why-choose-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-[#2F281D]"
          >
            Why Choose <span className="text-[#2F281D]/40">Us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-[#2F281D]/60 text-lg mt-4"
          >
            We combine technical excellence with clear communication so your project delivers results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 p-8 rounded-3xl bg-[#FDF8EC] border border-[#2F281D]/5 hover:border-[#997F6C]/30 transition-colors"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#2F281D]/5 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-[#997F6C]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2F281D] mb-2 flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#5F634D]" aria-hidden />
                    {item.title}
                  </h3>
                  <p className="text-[#2F281D]/60 leading-relaxed">{item.description}</p>
                  {item.link && (
                    <p className="mt-3">
                      <Link href={item.link.href} className="text-[#997F6C] font-semibold hover:underline">
                        {item.link.text}
                      </Link>
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
