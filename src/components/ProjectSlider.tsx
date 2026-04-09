import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

type Slide = {
  title: string;
  desc: string;
  image: string;
  tag: string;
  number: string;
  href: string;
  external: boolean;
};

const slides: Slide[] = [
  {
    title: 'Employee Management System',
    desc: 'Role-based Next.js and Node.js platform with MongoDB, REST APIs, and JWT authentication for MarQ Networks.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1920',
    tag: 'Product',
    number: '01',
    href: 'https://marqnetworks.com/',
    external: true,
  },
  {
    title: 'Meet Ezri',
    desc: 'Full-stack AI companion and therapist-style platform—Next.js, integrated APIs, and scalable data design.',
    image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&q=80&w=1920',
    tag: 'AI & Health',
    number: '02',
    href: '/portfolio',
    external: false,
  },
  {
    title: 'Crescent Tracking',
    desc: 'Real-time vehicle tracking dashboard with GPS data processing, backend APIs, and analytics-ready storage.',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1920',
    tag: 'Logistics',
    number: '03',
    href: 'https://www.crescenttrack.com/',
    external: true,
  },
];

export const ProjectSlider = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };
  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 10000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1.1
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    })
  };

  return (
    <section className="relative min-h-[80vh] lg:h-screen overflow-hidden bg-[#2F281D]">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
            scale: { duration: 0.8 }
          }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src={slides[current].image}
            alt={`${slides[current].title} - CodexStudio project showcase`}
            fill
            className="object-cover"
            loading="lazy"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex items-center py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full gap-8 lg:gap-12">
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-4 lg:space-y-6"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[#997F6C] font-mono text-lg lg:text-xl font-bold">{slides[current].number}</span>
                  <div className="h-px w-8 lg:w-12 bg-[#997F6C]" />
                  <span className="text-[#FDF8EC]/60 font-bold uppercase tracking-[0.3em] text-[10px] lg:text-xs">
                    {slides[current].tag}
                  </span>
                </div>
                
                <h2 className="text-2xl sm:text-5xl md:text-4xl lg:text-6xl font-display font-bold text-[#FDF8EC] leading-[0.9] lg:leading-[0.85] tracking-tighter">
                  {slides[current].title.split(' ').map((word, i) => (
                    <span key={i} className="block overflow-hidden">
                      <motion.span
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.8, ease: "circOut" }}
                        className="block"
                      >
                        {word}
                      </motion.span>
                    </span>
                  ))}
                </h2>

                <p className="text-lg lg:text-2xl text-[#FDF8EC]/60 max-w-xl leading-relaxed font-light">
                  {slides[current].desc}
                </p>

                <div className="pt-4 lg:pt-8">
                  {slides[current].external ? (
                    <motion.a
                      href={slides[current].href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative inline-block overflow-hidden bg-[#FDF8EC] text-[#2F281D] px-8 lg:px-10 py-4 lg:py-5 rounded-full font-bold text-base lg:text-lg transition-all"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        View Project <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-[#997F6C] translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                      />
                    </motion.a>
                  ) : (
                    <Link href={slides[current].href} className="inline-block">
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative block overflow-hidden bg-[#FDF8EC] text-[#2F281D] px-8 lg:px-10 py-4 lg:py-5 rounded-full font-bold text-base lg:text-lg transition-all"
                      >
                        <span className="relative z-10 flex items-center gap-3">
                          View Project <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-[#997F6C] translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                        />
                      </motion.span>
                    </Link>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hidden lg:flex lg:col-span-4 flex-col justify-end items-end pb-24">
            <div className="flex flex-col gap-8">
              {slides.map((slide, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  aria-label={`Go to slide ${i + 1}: ${slide.title}`}
                  className="group flex items-center gap-6 text-left"
                >
                  <span className={`text-xs font-mono font-bold transition-colors ${current === i ? 'text-[#997F6C]' : 'text-[#FDF8EC]/20 group-hover:text-[#FDF8EC]/60'}`}>
                    {slide.number}
                  </span>
                  <span className={`text-sm font-bold uppercase tracking-widest transition-all ${current === i ? 'text-[#FDF8EC] translate-x-2' : 'text-[#FDF8EC]/20 group-hover:text-[#FDF8EC]/60'}`}>
                    {slide.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 lg:bottom-12 left-6 right-6 z-30 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={current === i ? 'true' : undefined}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className="h-1 rounded-full border-0 p-0 cursor-pointer min-w-[8px] transition-[width,background-color] duration-300"
                style={{
                  width: current === i ? 40 : 8,
                  backgroundColor: current === i ? '#997F6C' : 'rgba(253, 248, 236, 0.2)',
                }}
              />
            ))}
          </div>
        </div>

        <div className="flex gap-3 lg:gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border border-[#FDF8EC]/20 flex items-center justify-center text-[#FDF8EC] hover:bg-[#FDF8EC] hover:text-[#2F281D] transition-all group"
          >
            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 group-hover:-translate-x-1 transition-transform" aria-hidden />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border border-[#FDF8EC]/20 flex items-center justify-center text-[#FDF8EC] hover:bg-[#FDF8EC] hover:text-[#2F281D] transition-all group"
          >
            <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" aria-hidden />
          </button>
        </div>
      </div>
    </section>
  );
};
