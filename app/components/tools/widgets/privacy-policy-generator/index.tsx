'use client';

import React, { useState, useCallback } from 'react';

export default function PrivacyPolicyGeneratorWidget() {
  const [siteName, setSiteName] = useState('');
  const [siteUrl, setSiteUrl] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [country, setCountry] = useState('');
  const [collectsPersonal, setCollectsPersonal] = useState(true);
  const [usesCookies, setUsesCookies] = useState(true);
  const [usesAnalytics, setUsesAnalytics] = useState(true);
  const [thirdParty, setThirdParty] = useState(true);
  const [output, setOutput] = useState('');

  const generate = useCallback(() => {
    const name = siteName || 'Our Website';
    const url = siteUrl || 'https://example.com';
    const email = contactEmail || 'privacy@example.com';
    const lines = [
      `Privacy Policy for ${name}`,
      `Last updated: ${new Date().toISOString().split('T')[0]}`,
      '',
      `This Privacy Policy describes how ${name} ("we", "us") collects, uses, and shares your information when you use our website ${url}.`,
      '',
      '1. Information We Collect',
      collectsPersonal
        ? 'We may collect personal information such as your name, email address, and other contact details when you submit forms, create an account, or contact us.'
        : 'We do not collect personal information beyond what is necessary to provide our services.',
      '',
      '2. How We Use Your Information',
      'We use the information we collect to operate our website, respond to your requests, and improve our services.',
      usesAnalytics && 'We use analytics to understand how visitors use our site and to improve user experience.',
      '',
      '3. Cookies',
      usesCookies
        ? 'We use cookies and similar technologies to remember your preferences and understand how you use our site. You can control cookies through your browser settings.'
        : 'We do not use cookies for tracking purposes.',
      '',
      '4. Third-Party Services',
      thirdParty
        ? 'Our website may use third-party services (e.g. analytics, payment processors). These services have their own privacy policies governing the use of your information.'
        : 'We do not share your data with third parties for marketing purposes.',
      '',
      '5. Data Retention & Security',
      'We retain your information only as long as necessary to fulfill the purposes described in this policy. We implement appropriate security measures to protect your data.',
      '',
      '6. Your Rights',
      `Depending on your location (e.g. ${country || 'your country'}), you may have rights to access, correct, or delete your personal data. Contact us at ${email} to exercise these rights.`,
      '',
      '7. Contact',
      `For questions about this Privacy Policy, contact us at ${email}.`,
    ].filter(Boolean);
    setOutput(lines.join('\n'));
  }, [
    siteName,
    siteUrl,
    contactEmail,
    country,
    collectsPersonal,
    usesCookies,
    usesAnalytics,
    thirdParty,
  ]);

  const download = () => {
    if (!output) return;
    const blob = new Blob([output], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'privacy-policy.txt';
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Website name</span>
          <input
            type="text"
            value={siteName}
            onChange={(e) => setSiteName(e.target.value)}
            placeholder="My Site"
            className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]"
          />
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Website URL</span>
          <input
            type="url"
            value={siteUrl}
            onChange={(e) => setSiteUrl(e.target.value)}
            placeholder="https://example.com"
            className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]"
          />
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Contact email</span>
          <input
            type="email"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            placeholder="privacy@example.com"
            className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]"
          />
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Country / region</span>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="e.g. United Kingdom"
            className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]"
          />
        </label>
      </div>
      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={collectsPersonal} onChange={(e) => setCollectsPersonal(e.target.checked)} className="rounded" />
          <span className="text-sm text-[#2F281D]">Collects personal data</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={usesCookies} onChange={(e) => setUsesCookies(e.target.checked)} className="rounded" />
          <span className="text-sm text-[#2F281D]">Uses cookies</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={usesAnalytics} onChange={(e) => setUsesAnalytics(e.target.checked)} className="rounded" />
          <span className="text-sm text-[#2F281D]">Uses analytics</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={thirdParty} onChange={(e) => setThirdParty(e.target.checked)} className="rounded" />
          <span className="text-sm text-[#2F281D]">Uses third-party services</span>
        </label>
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={generate}
          className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold hover:bg-[#997F6C]"
        >
          Generate privacy policy
        </button>
        {output && (
          <button
            type="button"
            onClick={download}
            className="px-5 py-2.5 rounded-xl border border-[#2F281D]/30 text-[#2F281D] font-bold hover:bg-[#2F281D]/5"
          >
            Download .txt
          </button>
        )}
      </div>
      {output && (
        <textarea
          readOnly
          value={output}
          className="w-full min-h-[300px] px-4 py-3 rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/50 text-[#2F281D] text-sm resize-y"
        />
      )}
    </div>
  );
}
