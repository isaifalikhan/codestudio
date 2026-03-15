import React from 'react';
import { motion } from 'motion/react';
import { Users, Target, Eye, Heart } from 'lucide-react';
import { CTA } from '../components/CTA';

const team = [
  {
    name: 'Saif Ali',
    role: 'Founder & CEO',
    image: '/images/saif.jpeg',
    bio: 'Visionary entrepreneur dedicated to redefining digital excellence.'
  },
  {
    name: 'Alex Rivera',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    bio: 'Visionary leader with 15+ years in digital design.'
  },
  {
    name: 'Sarah Chen',
    role: 'Head of Development',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
    bio: 'Full-stack expert obsessed with performance and clean code.'
  },
  {
    name: 'Marcus Thorne',
    role: 'UX Strategist',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    bio: 'Crafting intuitive journeys for global brands.'
  }
];

const values = [
  {
    title: 'Innovation',
    desc: 'We push the boundaries of what is possible in the digital realm.',
    icon: Target
  },
  {
    title: 'Creativity',
    desc: 'Every project is a blank canvas for unique, artistic expression.',
    icon: Heart
  },
  {
    title: 'Transparency',
    desc: 'Open communication and honesty are the foundation of our partnerships.',
    icon: Eye
  },
  {
    title: 'Quality',
    desc: 'We never compromise on the precision and excellence of our work.',
    icon: Users
  }
];

export const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#FDF8EC]"
    >
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1920"
            alt="CodexStudio modern office and workspace"
            className="w-full h-full object-cover opacity-20"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FDF8EC]/0 to-[#FDF8EC]" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-7xl md:text-9xl font-display font-bold text-[#2F281D]"
          >
            Our <span className="text-[#2F281D]/40 italic">Story</span>
          </motion.h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#2F281D]">
              Born from a passion for <span className="text-[#997F6C]">excellence</span>.
            </h2>
            <p className="text-lg text-[#2F281D]/60 leading-relaxed">
              Founded in 2016, CodexStudio began with a simple mission: to bridge the gap between complex technology and human-centric design. We believed that digital experiences should be as beautiful as they are functional.
            </p>
            <p className="text-lg text-[#2F281D]/60 leading-relaxed">
              Today, we are a global team of creators, thinkers, and builders. We partner with ambitious brands to navigate the digital landscape and create lasting impact.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" className="rounded-3xl aspect-[3/4] object-cover" alt="CodexStudio team collaboration" loading="lazy" />
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600" className="rounded-3xl aspect-square object-cover" alt="Creative workshop at CodexStudio" loading="lazy" />
            </div>
            <div className="space-y-4 pt-12">
              <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600" className="rounded-3xl aspect-square object-cover" alt="Digital strategy session" loading="lazy" />
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600" className="rounded-3xl aspect-[3/4] object-cover" alt="CodexStudio team meeting" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Vision */}
      <section className="py-24 px-6 bg-[#2F281D] text-[#FDF8EC]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden"
            >
              <img
                src="/images/saif.jpeg"
                alt="Saif Ali - Founder and CEO of CodexStudio"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
            <div className="space-y-8">
              <span className="text-[#997F6C] font-bold tracking-widest uppercase text-sm block">Founder's Vision</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
                "We don't just build products; we build <span className="text-[#997F6C] italic">legacies</span>."
              </h2>
              <p className="text-xl text-[#FDF8EC]/60 leading-relaxed">
                At CodexStudio, our goal is to empower businesses with digital solutions that are not only technologically superior but also emotionally resonant. We believe in the power of design to change the world.
              </p>
              <div className="pt-8">
                <p className="text-2xl font-display font-bold">Saif Ali</p>
                <p className="text-[#997F6C] font-bold uppercase tracking-widest text-sm">Founder & CEO, CodexStudio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-[#E8E2D2]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold text-[#2F281D]"
            >
              Our <span className="text-[#2F281D]/40">Values</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: i * 0.1,
                  duration: 0.8,
                  ease: [0.21, 0.47, 0.32, 0.98]
                }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="p-10 rounded-[2.5rem] bg-[#FDF8EC] border border-[#2F281D]/5 text-center group hover:shadow-2xl transition-all duration-500"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="w-16 h-16 rounded-2xl bg-[#2F281D]/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#2F281D] group-hover:text-[#FDF8EC] transition-all"
                >
                  <value.icon className="w-8 h-8" />
                </motion.div>
                <h3 className="text-xl font-bold mb-4 text-[#2F281D]">{value.title}</h3>
                <p className="text-[#2F281D]/50 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold text-[#2F281D]"
            >
              Meet the <span className="text-[#2F281D]/40 italic">Experts</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                className="group"
              >
                <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-6 relative perspective-1000">
                  <motion.img
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    transition={{ duration: 0.6 }}
                    src={member.image}
                    alt={`${member.name} - ${member.role} at CodexStudio`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2F281D] to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-[#FDF8EC] text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: (i * 0.15) + 0.3 }}
                  className="text-xl font-bold text-[#2F281D]"
                >
                  {member.name}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: (i * 0.15) + 0.4 }}
                  className="text-[#997F6C] font-bold text-sm uppercase tracking-widest"
                >
                  {member.role}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </motion.div>
  );
};
