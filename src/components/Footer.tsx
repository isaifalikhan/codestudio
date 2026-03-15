import React from 'react';
import { motion } from 'motion/react';
import { Github, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FDF8EC] pt-24 pb-12 px-6 border-t border-[#2F281D]/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20"
        >
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-[#2F281D] rounded-lg flex items-center justify-center font-bold text-xl text-[#FDF8EC]">
                C
              </div>
              <span className="text-2xl font-display font-bold tracking-tighter text-[#2F281D]">
                CODEX<span className="text-[#997F6C]">STUDIO</span>
              </span>
            </Link>
            <p className="text-[#2F281D]/50 text-lg max-w-md mb-8 leading-relaxed">
              We are a team of passionate designers and developers dedicated to 
              creating high-end digital experiences that push the boundaries 
              of what's possible.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin, Instagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-[#2F281D]/5 border border-[#2F281D]/10 flex items-center justify-center hover:bg-[#2F281D] hover:text-[#FDF8EC] transition-all"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 text-[#2F281D]">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-[#2F281D]/50 hover:text-[#997F6C] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 text-[#2F281D]">Newsletter</h4>
            <p className="text-[#2F281D]/50 text-sm mb-6">
              Subscribe to get the latest insights and digital trends.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-[#2F281D]/5 border border-[#2F281D]/10 rounded-xl px-4 py-3 flex-1 focus:outline-none focus:border-[#997F6C] transition-colors text-sm text-[#2F281D]"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#2F281D] text-[#FDF8EC] px-4 py-3 rounded-xl font-bold hover:bg-[#997F6C] transition-colors"
              >
                Join
              </motion.button>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="pt-12 border-t border-[#2F281D]/5 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="text-[#2F281D]/30 text-sm">
            © 2026 CodexStudio. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-[#2F281D]/30">
            <a href="#" className="hover:text-[#2F281D] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#2F281D] transition-colors">Terms of Service</a>
          </div>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="w-12 h-12 rounded-full bg-[#2F281D]/5 border border-[#2F281D]/10 flex items-center justify-center hover:bg-[#2F281D] hover:text-[#FDF8EC] transition-all group"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};
