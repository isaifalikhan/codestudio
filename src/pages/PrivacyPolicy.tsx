import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export const PrivacyPolicy = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#FDF8EC]"
    >
      <section className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-[#2F281D] mb-8">
          Privacy <span className="text-[#2F281D]/40 italic">Policy</span>
        </h1>
        <p className="text-[#2F281D]/60 mb-12">Last updated: March 2026</p>

        <div className="prose prose-lg text-[#2F281D]/80 space-y-8">
          <section>
            <h2 className="text-2xl font-display font-bold text-[#2F281D] mt-12 mb-4">1. Introduction</h2>
            <p>
              CodexStudio (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#2F281D] mt-12 mb-4">2. Information We Collect</h2>
            <p>
              We may collect information you provide directly (e.g. name, email, company, project details when you contact us), usage data (e.g. pages visited, device type), and cookies or similar technologies where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#2F281D] mt-12 mb-4">3. How We Use Your Information</h2>
            <p>
              We use your information to respond to inquiries, deliver services, improve our website and services, send relevant updates (with your consent), and comply with legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#2F281D] mt-12 mb-4">4. Sharing and Disclosure</h2>
            <p>
              We do not sell your personal information. We may share data with service providers who assist our operations, or when required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#2F281D] mt-12 mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#2F281D] mt-12 mb-4">6. Your Rights</h2>
            <p>
              Depending on your location, you may have rights to access, correct, delete, or restrict processing of your personal data. Contact us at hello@codexstudio.com to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#2F281D] mt-12 mb-4">7. Contact</h2>
            <p>
              For privacy-related questions: <a href="mailto:hello@codexstudio.com" className="text-[#997F6C] font-bold hover:underline">hello@codexstudio.com</a>. Location: Islamabad, Pakistan.
            </p>
          </section>
        </div>

        <p className="mt-16">
          <Link to="/" className="text-[#997F6C] font-bold hover:underline">← Back to Home</Link>
        </p>
      </section>
    </motion.div>
  );
};
