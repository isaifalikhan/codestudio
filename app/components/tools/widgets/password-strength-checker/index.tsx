'use client';

import React, { useState, useMemo } from 'react';

function getStrength(password: string): { score: number; label: string; color: string; tips: string[] } {
  const tips: string[] = [];
  let score = 0;
  if (password.length >= 8) score += 15;
  else tips.push('Use at least 8 characters');
  if (password.length >= 12) score += 10;
  if (password.length >= 16) score += 10;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score += 20;
  else if (/[a-zA-Z]/.test(password)) tips.push('Add both upper and lowercase');
  if (/\d/.test(password)) score += 15;
  else tips.push('Add numbers');
  if (/[^A-Za-z0-9]/.test(password)) score += 20;
  else tips.push('Add symbols (!@#$...)');
  if (password.length >= 20) score += 10;
  const hasRepeat = /(.)\1{2,}/.test(password);
  if (hasRepeat) tips.push('Avoid repeated characters');
  if (score >= 80) return { score: 100, label: 'Very Strong', color: 'bg-green-600', tips };
  if (score >= 60) return { score: 75, label: 'Strong', color: 'bg-green-500', tips };
  if (score >= 40) return { score: 50, label: 'Medium', color: 'bg-amber-500', tips };
  if (score >= 20) return { score: 35, label: 'Weak', color: 'bg-orange-500', tips };
  return { score: 15, label: 'Very Weak', color: 'bg-red-500', tips };
}

function crackTime(password: string): string {
  if (!password) return '—';
  const charset = new Set(password).size;
  const comb = Math.pow(charset, password.length);
  const sec = comb / 1e9;
  if (sec < 1) return 'Instant';
  if (sec < 60) return `${sec.toFixed(0)} seconds`;
  if (sec < 3600) return `${(sec / 60).toFixed(0)} minutes`;
  if (sec < 86400) return `${(sec / 3600).toFixed(1)} hours`;
  if (sec < 31536000) return `${(sec / 86400).toFixed(0)} days`;
  return `${(sec / 31536000).toFixed(0)} years`;
}

export default function PasswordStrengthCheckerWidget() {
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  const strength = useMemo(() => getStrength(password), [password]);
  const time = crackTime(password);

  return (
    <div className="space-y-6">
      <label className="block">
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Enter password to check</span>
        <div className="flex gap-2">
          <input
            type={show ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Type or paste password..."
            className="flex-1 px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D] placeholder:text-[#2F281D]/40 focus:outline-none focus:ring-2 focus:ring-[#997F6C]/50"
          />
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="px-4 py-3 rounded-xl border border-[#2F281D]/20 text-[#2F281D] font-medium"
          >
            {show ? 'Hide' : 'Show'}
          </button>
        </div>
      </label>
      {password && (
        <>
          <div>
            <p className="text-sm text-[#2F281D]/60 mb-1">Strength: {strength.label}</p>
            <div className="h-3 rounded-full bg-[#2F281D]/10 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all ${strength.color}`}
                style={{ width: `${Math.max(10, strength.score)}%` }}
              />
            </div>
          </div>
          <p className="text-sm text-[#2F281D]/70">Estimated crack time: {time}</p>
          {strength.tips.length > 0 && (
            <div>
              <p className="text-sm font-medium text-[#2F281D] mb-2">Suggestions</p>
              <ul className="list-disc list-inside text-sm text-[#2F281D]/70 space-y-1">
                {strength.tips.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
}
