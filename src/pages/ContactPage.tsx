import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Globe } from 'lucide-react';

export const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#FDF8EC]"
    >
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#997F6C] font-bold tracking-widest uppercase text-sm block"
          >
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-9xl font-display font-bold text-[#2F281D]"
          >
            Let's <span className="text-[#2F281D]/40 italic">Collaborate</span>
          </motion.h1>
        </div>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="space-y-16">
            <div className="space-y-8">
              <h2 className="text-4xl font-display font-bold text-[#2F281D]">Ready to start your next big project?</h2>
              <p className="text-xl text-[#2F281D]/60 leading-relaxed">
                We're always looking for new challenges and exciting collaborations. 
                Fill out the form or reach out directly to our team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-[#E8E2D2] space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#2F281D] text-[#FDF8EC] flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-[#2F281D]">Email Us</h3>
                <a href="mailto:hello@codexstudio.com" className="text-[#2F281D]/60 hover:text-[#997F6C] transition-colors">hello@codexstudio.com</a>
              </div>
              <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="p-8 rounded-3xl bg-[#E8E2D2] space-y-4 block hover:bg-[#E8E2D2]/90 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-[#997F6C] text-[#FDF8EC] flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-[#2F281D]">WhatsApp Us</h3>
                <p className="text-[#2F281D]/60 hover:text-[#997F6C] transition-colors">+92 300 1234567</p>
              </a>
              <div className="p-8 rounded-3xl bg-[#E8E2D2] space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#5F634D] text-[#FDF8EC] flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-[#2F281D]">Visit Us</h3>
                <p className="text-[#2F281D]/60">Islamabad, Pakistan</p>
              </div>
              <div className="p-8 rounded-3xl bg-[#E8E2D2] space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#BCAF9B] text-[#2F281D] flex items-center justify-center">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-[#2F281D]">Socials</h3>
                <div className="flex flex-wrap gap-3">
                  <a href="https://www.instagram.com/codexstudio2026/" target="_blank" rel="noopener noreferrer" className="text-[#2F281D]/60 hover:text-[#997F6C] transition-colors">Instagram</a>
                  <a href="https://www.facebook.com/profile.php?id=61582748907285" target="_blank" rel="noopener noreferrer" className="text-[#2F281D]/60 hover:text-[#997F6C] transition-colors">Facebook</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#2F281D] rounded-[4rem] p-8 md:p-16 space-y-12"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-display font-bold text-[#FDF8EC]">Send a Message</h3>
              <p className="text-[#FDF8EC]/60">Tell us about your project and we'll get back to you within 24 hours.</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#FDF8EC]/40">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-[#FDF8EC]/5 border border-[#FDF8EC]/10 rounded-2xl px-6 py-4 text-[#FDF8EC] focus:outline-none focus:border-[#997F6C] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#FDF8EC]/40">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-[#FDF8EC]/5 border border-[#FDF8EC]/10 rounded-2xl px-6 py-4 text-[#FDF8EC] focus:outline-none focus:border-[#997F6C] transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#FDF8EC]/40">Subject</label>
                <select className="w-full bg-[#FDF8EC]/5 border border-[#FDF8EC]/10 rounded-2xl px-6 py-4 text-[#FDF8EC] focus:outline-none focus:border-[#997F6C] transition-colors appearance-none">
                  <option className="bg-[#2F281D]">Web Development</option>
                  <option className="bg-[#2F281D]">UI/UX Design</option>
                  <option className="bg-[#2F281D]">Branding</option>
                  <option className="bg-[#2F281D]">Marketing</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#FDF8EC]/40">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-[#FDF8EC]/5 border border-[#FDF8EC]/10 rounded-2xl px-6 py-4 text-[#FDF8EC] focus:outline-none focus:border-[#997F6C] transition-colors resize-none"
                />
              </div>
              <button className="w-full bg-[#997F6C] hover:bg-[#997F6C]/90 text-[#FDF8EC] font-bold py-6 rounded-2xl flex items-center justify-center gap-3 transition-all group">
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};
