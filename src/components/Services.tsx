import React from 'react';
import { motion } from 'motion/react';
import { Code, Layout, ShoppingCart, Palette, Search, Sparkles, Smartphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Custom Website Development',
    description: 'Tailored websites built for your business goals, with clean code and scalable architecture.',
    icon: Code,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    to: '/services',
  },
  {
    title: 'Next.js Web Applications',
    description: 'Fast, SEO-friendly web applications using Next.js and modern React patterns.',
    icon: Layout,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    to: '/services',
  },
  {
    title: 'E-commerce Development',
    description: 'Online stores with secure checkout, inventory, and payment integrations.',
    icon: ShoppingCart,
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=800',
    to: '/services',
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered interfaces that improve engagement and conversion rates.',
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&q=80&w=800',
    to: '/services',
  },
  {
    title: 'SEO Optimization',
    description: 'Technical and content SEO so your site ranks higher and attracts more traffic.',
    icon: Search,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    to: '/services',
  },
  {
    title: 'Brand Identity Design',
    description: 'Logo, guidelines, and visual identity that make your brand memorable.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
    to: '/services',
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps for iOS and Android.',
    icon: Smartphone,
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800',
    to: '/services',
  },
];

const ServiceCard: React.FC<{ service: (typeof services)[0]; index: number }> = ({ service, index }) => {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }}
      className="group relative rounded-3xl bg-[#E8E2D2] border border-[#2F281D]/5 hover:border-[#997F6C]/50 transition-all duration-300 overflow-hidden flex flex-col h-full"
    >
      <Link to={service.to} className="flex flex-col h-full">
        <div className="relative h-48 overflow-hidden">
          <img
            src={service.image}
            alt={`${service.title} - CodexStudio service`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
          <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg">
            <Icon className="w-6 h-6 text-[#2F281D]" />
          </div>
        </div>
        <div className="p-8 flex-grow flex flex-col">
          <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-[#997F6C] transition-colors text-[#2F281D]">
            {service.title}
          </h3>
          <p className="text-[#2F281D]/50 leading-relaxed mb-6">{service.description}</p>
          <span className="mt-auto flex items-center gap-2 text-sm font-bold text-[#2F281D]/30 group-hover:text-[#2F281D] transition-colors">
            Learn More <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export const Services = () => {
  return (
    <section className="py-24 px-6 bg-[#FDF8EC] relative overflow-hidden" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[#997F6C] font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Our Services
            </motion.span>
            <motion.h2
              id="services-heading"
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
            From websites to web apps and branding—we help startups and businesses grow with digital products that perform.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-[#2F281D] font-bold hover:text-[#997F6C] transition-colors"
          >
            View all services <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
