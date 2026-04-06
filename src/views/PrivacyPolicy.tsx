'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

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
        <p className="text-[#2F281D]/60 mb-12">Last updated: April 2026</p>

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
              We may collect information you provide directly (e.g. name, email, company, project details when you contact us), usage data (e.g. pages visited,
              device type, general region), and cookies or similar technologies where applicable. When ads are displayed, advertising partners may set or read
              cookies or use identifiers as described in sections 7 and 8 below.
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
            <h2 className="text-2xl font-display font-bold text-[#2F281D] mt-12 mb-4">7. Cookies and similar technologies</h2>
            <p>
              We and our partners may use cookies, local storage, pixels, and similar technologies to remember preferences, measure traffic, reduce fraud, and
              deliver relevant advertising. You can control cookies through your browser settings. Blocking some cookies may limit certain features of the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#2F281D] mt-12 mb-4">8. Third-party advertising (Google)</h2>
            <p>
              We use Google AdSense to show ads on some pages. Google and its partners may use cookies or similar technologies to serve ads based on your prior
              visits to this or other websites. Google&apos;s use of advertising cookies enables it and its partners to serve ads to you based on your visit to
              our site and/or other sites on the Internet.
            </p>
            <p>
              You may opt out of personalized advertising by visiting{' '}
              <a
                href="https://www.google.com/settings/ads"
                className="text-[#997F6C] font-bold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Ads Settings
              </a>
              . Alternatively, you can opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting{' '}
              <a href="https://www.aboutads.info" className="text-[#997F6C] font-bold hover:underline" target="_blank" rel="noopener noreferrer">
                aboutads.info
              </a>
              .
            </p>
            <p>
              For more on how Google uses data when you use our site or apps from partners, see{' '}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                className="text-[#997F6C] font-bold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                How Google uses information from sites or apps that use our services
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#2F281D] mt-12 mb-4">9. Analytics</h2>
            <p>
              We may use Google Analytics or similar services to understand how visitors use our website (for example, pages viewed and general device and
              region information). Those providers process data under their own policies and our instructions. Where required, we rely on your consent as described
              in our cookie notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#2F281D] mt-12 mb-4">10. Children&apos;s privacy</h2>
            <p>
              Our services are not directed at children under 13, and we do not knowingly collect personal information from children under 13. If you believe we
              have collected such information, contact us and we will take steps to delete it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#2F281D] mt-12 mb-4">11. Contact</h2>
            <p>
              For privacy-related questions:{' '}
              <a href="mailto:hello@codexstudio.com" className="text-[#997F6C] font-bold hover:underline">
                hello@codexstudio.com
              </a>
              . Location: Islamabad, Pakistan.               You may also read our{' '}
              <Link href="/editorial" className="text-[#997F6C] font-bold hover:underline">
                editorial standards
              </Link>{' '}
              for how we publish content.
            </p>
          </section>
        </div>

        <p className="mt-16">
          <Link href="/" className="text-[#997F6C] font-bold hover:underline">← Back to Home</Link>
        </p>
      </section>
    </motion.div>
  );
};
