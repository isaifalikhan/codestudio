'use client';

import React, { useState, useMemo } from 'react';

export default function CoverLetterGeneratorWidget() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');

  const letter = useMemo(() => {
    if (!name.trim() || !company.trim() || !role.trim()) return '';
    const sk = skills.trim() || 'relevant skills';
    const exp = experience.trim() || 'my background';
    return `Dear Hiring Manager,

I am writing to apply for the ${role} position at ${company}. I am excited about the opportunity to contribute to your team.

${exp} has prepared me well for this role. My experience includes ${sk}. I am eager to bring this experience to ${company} and help achieve your goals.

Thank you for considering my application. I look forward to discussing this opportunity further.

Sincerely,
${name.trim()}`;
  }, [name, company, role, skills, experience]);

  return (
    <div className="space-y-6">
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Your name</span>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
      </label>
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Company name</span>
        <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
      </label>
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Job title / role</span>
        <input type="text" value={role} onChange={(e) => setRole(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
      </label>
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Key skills (optional)</span>
        <input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} placeholder="e.g. React, project management" className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
      </label>
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Brief experience (optional)</span>
        <textarea value={experience} onChange={(e) => setExperience(e.target.value)} placeholder="A sentence about your background" className="w-full min-h-[80px] px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] resize-y" />
      </label>
      {letter && (
        <>
          <textarea readOnly value={letter} className="w-full min-h-[240px] px-4 py-3 rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/50 resize-y" />
          <button type="button" onClick={() => navigator.clipboard.writeText(letter)} className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold">Copy letter</button>
        </>
      )}
    </div>
  );
}
