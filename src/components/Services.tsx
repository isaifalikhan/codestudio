import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Code, Palette, Share2, Search, Zap, Globe, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Website Development',
    description: 'High-performance, scalable web applications built with the latest technologies.',
    icon: Code,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'UI/UX Design',
    description: 'Immersive and intuitive user experiences that captivate and convert.',
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1581291518151-0e07553d2085?auto=format&fit=crop&q=80&w=800',
    color: 'from-purple-500 to-pink-400',
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven strategies to amplify your brand presence and reach.',
    icon: Share2,
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=800',
    color: 'from-orange-500 to-yellow-400',
  },
  {
    title: 'SEO Optimization',
    description: 'Boosting your visibility and ranking on global search engines.',
    icon: Search,
    image: 'https://images.unsplash.com/photo-1562577353-f5d4030c463f?auto=format&fit=crop&q=80&w=800',
    color: 'from-green-500 to-emerald-400',
  },
  {
    title: 'Branding',
    description: 'Creating unique identities that resonate with your target audience.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
    color: 'from-red-500 to-orange-400',
  },
  {
    title: 'Cloud Solutions',
    description: 'Modern infrastructure to ensure your business stays online and fast.',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    color: 'from-indigo-500 to-blue-400',
  },
];

const ServiceCard: React.FC<{ service: any, index: number }> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -8,
        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
      }}
      className="group relative rounded-3xl bg-[#E8E2D2] border border-[#2F281D]/5 hover:border-[#997F6C]/50 transition-all duration-300 overflow-hidden flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
        <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 15 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <service.icon className="w-6 h-6 text-[#2F281D]" />
          </motion.div>
        </div>
      </div>
      
      <div className="p-8 flex-grow flex flex-col">
        <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-[#997F6C] transition-colors text-[#2F281D]">
          {service.title}
        </h3>
        <p className="text-[#2F281D]/50 leading-relaxed mb-6">
          {service.description}
        </p>
        
        <div className="mt-auto flex items-center gap-2 text-sm font-bold text-[#2F281D]/30 group-hover:text-[#2F281D] transition-colors">
          Learn More <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
};

export const Services = () => {
  return (
    <section className="py-24 px-6 bg-[#FDF8EC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[#997F6C] font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Our Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold tracking-tight text-[#2F281D]"
            >
              Solutions for the <br />
              <span className="text-[#2F281D]/40">Modern Era</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-md text-[#2F281D]/50 text-lg"
          >
            We provide a comprehensive suite of services designed to help your business 
            thrive in an ever-changing digital landscape.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
