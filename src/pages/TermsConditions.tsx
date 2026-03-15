import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export const TermsConditions = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#FDF8EC]"
    >
      <section className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-[#2F281D] mb-8">
          Terms & <span className="text-[#2F281D]/40 italic">Conditions</span>
        </h1>
        <p className="text-[#2F281D]/60 mb-12">Last updated: March 2026</p>

        <div className="prose prose-lg text-[#2F281D]/80 space-y-8">
          <section>
            <h2 className="text-2xl font-display font-bold text-[#2F281D] mt-12 mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using the CodexStudio website and services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our site or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#2F281D] mt-12 mb-4">2. Services</h2>
            <p>
              CodexStudio provides web development, design, and digital product services. Specific deliverables, timelines, and fees will be set out in separate agreements or statements of work.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#2F281D] mt-12 mb-4">3. Intellectual Property</h2>
            <p>
              Unless otherwise agreed in writing, intellectual property in work product created for you will transfer to you upon full payment. We retain the right to use general skills and non-confidential methods in other projects.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#2F281D] mt-12 mb-4">4. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential any proprietary or sensitive information shared during the engagement, except where disclosure is required by law or with consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#2F281D] mt-12 mb-4">5. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, CodexStudio shall not be liable for indirect, incidental, or consequential damages. Our total liability is limited to the fees paid for the relevant project or service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#2F281D] mt-12 mb-4">6. Changes</h2>
            <p>
              We may update these Terms from time to time. Continued use of our website or services after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#2F281D] mt-12 mb-4">7. Contact</h2>
            <p>
              Questions about these Terms: <a href="mailto:hello@codexstudio.com" className="text-[#997F6C] font-bold hover:underline">hello@codexstudio.com</a>. CodexStudio, Islamabad, Pakistan.
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
