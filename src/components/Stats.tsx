import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'motion/react';

const Counter = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const count = useMotionValue(0);
  const rounded = useSpring(count, { stiffness: 100, damping: 30 });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (isInView) {
      count.set(numericValue);
    }
  }, [isInView, numericValue, count]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      setDisplayValue(Math.floor(latest).toString() + (value.includes('+') ? '+' : ''));
    });
  }, [rounded, value]);

  return <span ref={ref}>{displayValue}</span>;
};

const stats = [
  { label: 'Projects Completed', value: '250+' },
  { label: 'Happy Clients', value: '120+' },
  { label: 'Years Experience', value: '8+' },
  { label: 'Design Awards', value: '15' },
];

export const Stats = () => {
  return (
    <section className="py-20 px-6 border-y border-[#2F281D]/5 bg-[#FDF8EC]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-6xl font-display font-bold text-gradient mb-2">
                <Counter value={stat.value} />
              </h3>
              <p className="text-[#2F281D]/40 text-sm font-bold uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
