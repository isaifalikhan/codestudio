import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What services does CodexStudio offer?',
    answer: 'We offer a full range of digital services including Website Development, UI/UX Design, Social Media Management, Graphic Design, Branding, and SEO & Digital Marketing.',
    link: { href: '/services', text: 'View our services →' },
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary depending on complexity. A standard website usually takes 4-8 weeks, while larger platforms or branding projects can take 3-4 months.',
    link: null as { href: string; text: string } | null,
  },
  {
    question: 'Do you work with startups?',
    answer: 'Yes! We love working with startups. We offer scalable solutions that grow with your business and help you make a strong first impression.',
    link: { href: '/portfolio', text: 'View our portfolio →' },
  },
  {
    question: 'What is your pricing model?',
    answer: 'We offer both project-based pricing and monthly retainers. Every project is unique, so we provide custom quotes after an initial discovery call.',
    link: { href: '/contact', text: 'Get a free quote →' },
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 bg-[#FDF8EC]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#997F6C] font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Questions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-[#2F281D]"
          >
            Frequently Asked <span className="text-[#2F281D]/40">Questions</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="border-b border-[#2F281D]/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="text-xl font-bold text-[#2F281D] group-hover:text-[#997F6C] transition-colors">
                  {faq.question}
                </span>
                <div className="w-8 h-8 rounded-full bg-[#2F281D]/5 flex items-center justify-center group-hover:bg-[#2F281D] group-hover:text-[#FDF8EC] transition-all">
                  {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className={`text-[#2F281D]/60 leading-relaxed ${faq.link ? 'pb-2' : 'pb-6'}`}>
                      {faq.answer}
                    </p>
                    {faq.link && (
                      <p className="pb-6">
                        <Link href={faq.link.href} className="text-[#997F6C] font-semibold hover:underline">
                          {faq.link.text}
                        </Link>
                      </p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
