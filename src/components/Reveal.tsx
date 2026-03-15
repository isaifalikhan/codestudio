import React from 'react';
import { motion } from 'motion/react';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  y?: number;
  key?: React.Key;
}

export const Reveal = ({ children, width = "fit-content", delay = 0.2, y = 40 }: RevealProps) => {
  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const RevealList = ({ children, staggerDelay = 0.1, y = 40 }: { children: React.ReactNode[], staggerDelay?: number, y?: number }) => {
  return (
    <>
      {React.Children.map(children, (child, i) => (
        <Reveal key={i} delay={i * staggerDelay} y={y} width="100%">
          {child}
        </Reveal>
      ))}
    </>
  );
};
