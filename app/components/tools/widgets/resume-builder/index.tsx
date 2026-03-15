'use client';

import React, { useState } from 'react';

export default function ResumeBuilderWidget() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [summary, setSummary] = useState('');
  const [experience, setExperience] = useState('');
  const [education, setEducation] = useState('');
  const [skills, setSkills] = useState('');

  const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Resume - ${name || 'My Resume'}</title><style>body{font-family:system-ui;max-width:700px;margin:2rem auto;padding:2rem;color:#2F281D;line-height:1.5;}h1{font-size:1.75rem;margin-bottom:0.25rem;} .contact{color:#666;font-size:0.9rem;margin-bottom:1.5rem;} section{margin-bottom:1.5rem;} h2{font-size:1.1rem;border-bottom:1px solid #ddd;padding-bottom:0.25rem;margin-bottom:0.5rem;} ul{margin:0;padding-left:1.25rem;} li{margin-bottom:0.25rem;}</style></head><body><h1>${name || 'Your Name'}</h1><p class="contact">${email || ''} ${phone ? ' · ' + phone : ''}</p>${summary ? `<section><h2>Summary</h2><p>${summary.replace(/\n/g, '<br>')}</p></section>` : ''}${experience ? `<section><h2>Experience</h2><p>${experience.replace(/\n/g, '<br>')}</p></section>` : ''}${education ? `<section><h2>Education</h2><p>${education.replace(/\n/g, '<br>')}</p></section>` : ''}${skills ? `<section><h2>Skills</h2><p>${skills.replace(/\n/g, '<br>')}</p></section>` : ''}</body></html>`;

  const download = () => {
    const blob = new Blob([html], { type: 'text/html' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'resume.html';
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <div className="space-y-6">
      <label><span className="text-sm font-medium text-[#2F281D] block mb-2">Full name</span><input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" /></label>
      <label><span className="text-sm font-medium text-[#2F281D] block mb-2">Email</span><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" /></label>
      <label><span className="text-sm font-medium text-[#2F281D] block mb-2">Phone</span><input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" /></label>
      <label><span className="text-sm font-medium text-[#2F281D] block mb-2">Summary</span><textarea value={summary} onChange={(e) => setSummary(e.target.value)} placeholder="Brief professional summary" className="w-full min-h-[80px] px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] resize-y" /></label>
      <label><span className="text-sm font-medium text-[#2F281D] block mb-2">Experience</span><textarea value={experience} onChange={(e) => setExperience(e.target.value)} placeholder="Job title, company, dates, bullet points" className="w-full min-h-[120px] px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] resize-y" /></label>
      <label><span className="text-sm font-medium text-[#2F281D] block mb-2">Education</span><textarea value={education} onChange={(e) => setEducation(e.target.value)} placeholder="Degree, school, year" className="w-full min-h-[80px] px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] resize-y" /></label>
      <label><span className="text-sm font-medium text-[#2F281D] block mb-2">Skills</span><input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} placeholder="e.g. JavaScript, React, Python" className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" /></label>
      <button type="button" onClick={download} className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold">Download as HTML</button>
    </div>
  );
}
