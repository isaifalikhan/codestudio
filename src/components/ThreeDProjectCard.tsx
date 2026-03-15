import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { PortfolioProject } from '../data/portfolio';

interface ThreeDProjectCardProps {
  project: PortfolioProject;
  index: number;
}

export const ThreeDProjectCard: React.FC<ThreeDProjectCardProps> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -5]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-2, 0, 2]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2]);

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);
  const springScale = useSpring(scale, springConfig);
  const springOpacity = useSpring(opacity, springConfig);
  const springImageScale = useSpring(imageScale, springConfig);

  return (
    <div ref={cardRef} className="perspective-1000 py-12">
      <motion.div
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          scale: springScale,
          opacity: springOpacity,
          transformStyle: 'preserve-3d',
        }}
        className="group relative aspect-[16/9] rounded-[2rem] overflow-hidden bg-[#2F281D]/5"
      >
        <motion.img
          src={project.image}
          alt={`${project.title} - ${project.category} project by CodexStudio`}
          style={{ scale: springImageScale }}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        
        {/* Overlay text that fades in */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <Link to="/portfolio" className="text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#997F6C] focus-visible:ring-offset-2 rounded-lg">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
              className="text-[#FDF8EC] font-bold uppercase tracking-[0.2em] text-sm mb-2 block"
            >
              View Project
            </motion.span>
            <div className="w-12 h-0.5 bg-[#997F6C] mx-auto" />
          </Link>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#2F281D]/80 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none" />
        
        <div 
          style={{ transform: 'translateZ(30px)' }}
          className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end pointer-events-none"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-[#997F6C] font-bold text-xs uppercase tracking-[0.3em] mb-4 block">
                  {project.category}
                </span>
                <h3 className="text-4xl md:text-7xl font-display font-bold text-[#FDF8EC] leading-[0.9] tracking-tighter">
                  {project.title}
                </h3>
              </motion.div>
            </div>
            <Link
              to="/portfolio"
              className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#FDF8EC] text-[#2F281D] flex items-center justify-center cursor-pointer self-start md:self-end group/btn overflow-hidden relative pointer-events-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-[#997F6C] focus-visible:ring-offset-2"
              aria-label={`View ${project.title} project`}
            >
              <motion.div
                className="absolute inset-0 bg-[#997F6C] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"
              />
              <ExternalLink className="w-6 h-6 md:w-8 md:h-8 relative z-10 group-hover/btn:text-white transition-colors" />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
