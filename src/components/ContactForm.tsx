import React from 'react';
import { motion } from 'motion/react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export const ContactForm = () => {
  return (
    <section className="py-24 px-6 bg-[#FDF8EC] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#997F6C]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#997F6C] font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Get In Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-display font-bold tracking-tight mb-8 text-[#2F281D]"
            >
              Let's Build <br />
              <span className="text-[#2F281D]/40">Something Great</span>
            </motion.h2>
            
            <p className="text-[#2F281D]/50 text-xl mb-12 max-w-md leading-relaxed">
              Have a project in mind? We'd love to hear about it. Send us a message 
              and we'll get back to you within 24 hours.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-[#2F281D]/5 flex items-center justify-center group-hover:bg-[#2F281D] transition-colors">
                  <Mail className="w-6 h-6 text-[#2F281D] group-hover:text-[#FDF8EC] transition-colors" />
                </div>
                <div>
                  <p className="text-[#2F281D]/40 text-xs font-bold uppercase tracking-widest mb-1">Email Us</p>
                  <a href="mailto:hello@codexstudio.com" className="text-xl font-bold text-[#2F281D] hover:text-[#997F6C] transition-colors">hello@codexstudio.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group w-full">
                  <div className="w-14 h-14 rounded-2xl bg-[#2F281D]/5 flex items-center justify-center group-hover:bg-[#997F6C] transition-colors">
                    <Phone className="w-6 h-6 text-[#997F6C] group-hover:text-[#FDF8EC] transition-colors" />
                  </div>
                  <div>
                    <p className="text-[#2F281D]/40 text-xs font-bold uppercase tracking-widest mb-1">WhatsApp Us</p>
                    <p className="text-xl font-bold text-[#2F281D] group-hover:text-[#997F6C] transition-colors">+92 300 1234567</p>
                  </div>
                </a>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-[#2F281D]/5 flex items-center justify-center group-hover:bg-[#5F634D] transition-colors">
                  <MapPin className="w-6 h-6 text-[#5F634D] group-hover:text-[#FDF8EC] transition-colors" />
                </div>
                <div>
                  <p className="text-[#2F281D]/40 text-xs font-bold uppercase tracking-widest mb-1">Visit Us</p>
                  <p className="text-xl font-bold text-[#2F281D]">Islamabad, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[2.5rem] bg-[#E8E2D2] border border-[#2F281D]/10 shadow-xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()} aria-label="Contact form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-widest text-[#2F281D]/40 ml-2">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your name"
                    autoComplete="name"
                    className="w-full bg-[#FDF8EC] border border-[#2F281D]/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#997F6C] transition-colors text-[#2F281D]"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-widest text-[#2F281D]/40 ml-2">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                    className="w-full bg-[#FDF8EC] border border-[#2F281D]/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#997F6C] transition-colors text-[#2F281D]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-company" className="text-xs font-bold uppercase tracking-widest text-[#2F281D]/40 ml-2">Company</label>
                <input
                  id="contact-company"
                  type="text"
                  placeholder="Company name (optional)"
                  autoComplete="organization"
                  className="w-full bg-[#FDF8EC] border border-[#2F281D]/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#997F6C] transition-colors text-[#2F281D]"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contact-project-type" className="text-xs font-bold uppercase tracking-widest text-[#2F281D]/40 ml-2">Project Type</label>
                  <select id="contact-project-type" className="w-full bg-[#FDF8EC] border border-[#2F281D]/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#997F6C] transition-colors appearance-none text-[#2F281D]/60" aria-label="Project type">
                    <option value="">Select type</option>
                    <option>Website Development</option>
                    <option>Web Application</option>
                    <option>E-commerce</option>
                    <option>UI/UX Design</option>
                    <option>SEO / Marketing</option>
                    <option>Mobile App</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-budget" className="text-xs font-bold uppercase tracking-widest text-[#2F281D]/40 ml-2">Budget</label>
                  <select id="contact-budget" className="w-full bg-[#FDF8EC] border border-[#2F281D]/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#997F6C] transition-colors appearance-none text-[#2F281D]/60" aria-label="Budget range">
                    <option value="">Select range</option>
                    <option>$1k – $5k</option>
                    <option>$5k – $15k</option>
                    <option>$15k – $50k</option>
                    <option>$50k+</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-widest text-[#2F281D]/40 ml-2">Message</label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full bg-[#FDF8EC] border border-[#2F281D]/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#997F6C] transition-colors resize-none text-[#2F281D]"
                  aria-label="Your message"
                />
              </div>
              
              <button type="button" className="w-full py-5 bg-[#2F281D] text-[#FDF8EC] rounded-2xl font-bold text-lg hover:bg-[#997F6C] transition-all flex items-center justify-center gap-3 group shadow-lg shadow-[#2F281D]/20">
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
