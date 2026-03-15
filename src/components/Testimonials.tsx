import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Ahmed Khan',
    role: 'Startup Founder',
    content: 'CodexStudio built our website quickly and the performance is amazing. Highly recommend for any business looking to go digital.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Rachel Foster',
    role: 'Founder of Nova',
    content: 'The team is incredibly talented. They didn\'t just build a website; they built an experience that our customers love. The UI/UX work alone has set us apart from competitors.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'David Park',
    role: 'Marketing Director, Zenith',
    content: 'Working with CodexStudio was the best decision for our brand. Our conversion rates have increased by 40% since the launch. Professional, responsive, and results-driven.',
    avatar: 'https://randomuser.me/api/portraits/men/51.jpg',
  },
];

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 lg:py-32 px-6 bg-[#FDF8EC] overflow-hidden" aria-label="Client testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[#997F6C] font-bold tracking-widest uppercase text-xs lg:text-sm mb-4 lg:mb-6 block"
            >
              Client Stories
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-7xl font-display font-bold tracking-tight text-[#2F281D] leading-[0.9] mb-6 lg:mb-8"
            >
              Voices of <br />
              <span className="text-[#2F281D]/40">Success</span>
            </motion.h2>
            <p className="text-[#2F281D]/50 text-base lg:text-lg max-w-md mb-8 lg:mb-12 leading-relaxed">
              We take pride in the partnerships we've built and the digital legacies we've helped create.
            </p>
            
            <div className="flex gap-3 lg:gap-4">
              <button 
                onClick={prev}
                className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border border-[#2F281D]/10 flex items-center justify-center hover:bg-[#2F281D] hover:text-white transition-all group"
              >
                <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 group-hover:-translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={next}
                className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border border-[#2F281D]/10 flex items-center justify-center hover:bg-[#2F281D] hover:text-white transition-all group"
              >
                <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 relative mt-8 lg:mt-0">
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-[#997F6C]/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#5F634D]/5 rounded-full blur-3xl" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative p-8 md:p-12 lg:p-20 rounded-[2.5rem] lg:rounded-[4rem] bg-[#E8E2D2] border border-[#2F281D]/5 shadow-2xl"
              >
                <Quote className="absolute top-8 left-8 lg:top-12 lg:left-12 w-12 h-12 lg:w-24 lg:h-24 text-[#2F281D]/5" />
                
                <div className="relative z-10">
                  <div className="flex gap-1 mb-6 lg:mb-10">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5 text-[#997F6C] fill-[#997F6C]" />
                    ))}
                  </div>
                  
                  <p className="text-[#2F281D] text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-[1.2] mb-10 lg:mb-16 font-display font-medium italic">
                    "{testimonials[current].content}"
                  </p>
                  
                  <div className="flex items-center gap-4 lg:gap-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#997F6C] rounded-full blur-md opacity-20" />
                      <img
                        src={testimonials[current].avatar}
                        alt={`${testimonials[current].name}, ${testimonials[current].role}`}
                        className="w-14 h-14 lg:w-20 lg:h-20 rounded-full object-cover border-2 lg:border-4 border-white relative z-10"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg lg:text-2xl font-display font-bold text-[#2F281D]">{testimonials[current].name}</h4>
                      <p className="text-[#997F6C] text-[10px] lg:text-sm font-bold uppercase tracking-[0.2em] mt-1">{testimonials[current].role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-2 lg:gap-3 mt-8 lg:mt-12">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1 lg:h-1.5 transition-all duration-500 rounded-full ${
                    current === i ? 'w-8 lg:w-12 bg-[#997F6C]' : 'w-2 lg:w-3 bg-[#2F281D]/10'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
