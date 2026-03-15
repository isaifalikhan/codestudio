'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const popularTools = [
  { slug: 'word-counter', name: 'Word Counter', emoji: '🔢', tagline: 'Count words, characters, reading time' },
  { slug: 'password-generator', name: 'Password Generator', emoji: '🔐', tagline: 'Strong random passwords instantly' },
  { slug: 'image-compressor', name: 'Image Compressor', emoji: '🗜️', tagline: 'Compress images up to 80%' },
  { slug: 'qr-code-generator', name: 'QR Code Generator', emoji: '📱', tagline: 'URLs, WiFi, vCards' },
];

export function ToolsTeaser() {
  return (
    <section className="py-24 px-6 bg-[#FDF8EC]" aria-labelledby="tools-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 id="tools-heading" className="text-4xl md:text-5xl font-display font-bold mb-4 text-[#2F281D]">
            Free Tools for Everyone
          </h2>
          <p className="text-[#2F281D]/70 max-w-2xl mx-auto text-lg">
            We built 40 free online tools that run 100% in your browser — no signup, no uploads to our servers.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {popularTools.map((tool, i) => (
            <motion.div
              key={tool.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={`/tools/${tool.slug}`}
                className="block p-6 rounded-2xl border border-[#2F281D]/10 bg-[#FDF8EC] hover:border-[#997F6C]/30 hover:shadow-md transition-all h-full"
              >
                <span className="text-2xl mb-3 block">{tool.emoji}</span>
                <h3 className="font-display font-bold text-[#2F281D] text-lg mb-1">{tool.name}</h3>
                <p className="text-[#2F281D]/70 text-sm">{tool.tagline}</p>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 bg-[#2F281D] text-[#FDF8EC] px-6 py-3 rounded-full font-bold hover:bg-[#997F6C] transition-colors"
          >
            View All 40 Free Tools <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
