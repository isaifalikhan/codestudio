'use client';

import React, { useState, useCallback } from 'react';

const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const NUM = '0123456789';
const SYM = '!@#$%^&*()_+-=[]{}|;:,.<>?';

function estimateCrackTime(password: string): string {
  const charset = new Set(password).size;
  const combinations = Math.pow(charset, password.length);
  const perSecond = 1e9;
  const seconds = combinations / perSecond;
  if (seconds < 60) return 'Instant';
  if (seconds < 3600) return `${Math.ceil(seconds / 60)} minutes`;
  if (seconds < 86400) return `${(seconds / 3600).toFixed(1)} hours`;
  if (seconds < 31536000) return `${(seconds / 86400).toFixed(0)} days`;
  if (seconds < 31536000 * 100) return `${(seconds / 31536000).toFixed(0)} years`;
  return 'Centuries';
}

function getStrength(password: string): { score: number; label: string } {
  let score = 0;
  if (password.length >= 8) score += 20;
  if (password.length >= 12) score += 15;
  if (password.length >= 16) score += 10;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score += 15;
  if (/\d/.test(password)) score += 15;
  if (/[^A-Za-z0-9]/.test(password)) score += 25;
  if (password.length >= 20) score += 10;
  if (score >= 80) return { score: 100, label: 'Very Strong' };
  if (score >= 60) return { score: 75, label: 'Strong' };
  if (score >= 40) return { score: 50, label: 'Medium' };
  return { score: 25, label: 'Weak' };
}

export default function PasswordGeneratorWidget() {
  const [length, setLength] = useState(16);
  const [useUpper, setUseUpper] = useState(true);
  const [useLower, setUseLower] = useState(true);
  const [useNum, setUseNum] = useState(true);
  const [useSym, setUseSym] = useState(true);
  const [password, setPassword] = useState('');

  const generate = useCallback(() => {
    let pool = '';
    if (useUpper) pool += UPPER;
    if (useLower) pool += LOWER;
    if (useNum) pool += NUM;
    if (useSym) pool += SYM;
    if (!pool) pool = LOWER;
    const arr = new Uint32Array(length);
    crypto.getRandomValues(arr);
    setPassword(Array.from(arr, (i) => pool[i % pool.length]).join(''));
  }, [length, useUpper, useLower, useNum, useSym]);

  const strength = password ? getStrength(password) : null;
  const crackTime = password ? estimateCrackTime(password) : '';

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 items-center">
        <label className="flex items-center gap-2">
          <span className="text-sm text-[#2F281D]">Length: {length}</span>
          <input
            type="range"
            min={8}
            max={64}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-32"
          />
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={useUpper} onChange={(e) => setUseUpper(e.target.checked)} className="rounded" />
          <span className="text-sm text-[#2F281D]">Uppercase</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={useLower} onChange={(e) => setUseLower(e.target.checked)} className="rounded" />
          <span className="text-sm text-[#2F281D]">Lowercase</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={useNum} onChange={(e) => setUseNum(e.target.checked)} className="rounded" />
          <span className="text-sm text-[#2F281D]">Numbers</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={useSym} onChange={(e) => setUseSym(e.target.checked)} className="rounded" />
          <span className="text-sm text-[#2F281D]">Symbols</span>
        </label>
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={generate}
          className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold hover:bg-[#997F6C] transition-colors"
        >
          Generate New
        </button>
        {password && (
          <button
            type="button"
            onClick={() => navigator.clipboard.writeText(password)}
            className="px-5 py-2.5 rounded-xl border border-[#2F281D]/30 text-[#2F281D] font-bold hover:bg-[#2F281D]/5"
          >
            Copy
          </button>
        )}
      </div>
      {password && (
        <>
          <div className="flex items-center gap-2">
            <code className="flex-1 px-4 py-3 rounded-xl bg-[#2F281D]/10 text-[#2F281D] font-mono break-all">
              {password}
            </code>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex-1 min-w-[120px]">
              <p className="text-xs text-[#2F281D]/60 mb-1">Strength</p>
              <div className="h-2 rounded-full bg-[#2F281D]/10 overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    (strength?.score ?? 0) >= 75 ? 'bg-green-600' : (strength?.score ?? 0) >= 50 ? 'bg-amber-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${strength?.score ?? 0}%` }}
                />
              </div>
              <p className="text-sm font-medium text-[#2F281D] mt-1">{strength?.label}</p>
            </div>
            <p className="text-sm text-[#2F281D]/70">Est. crack time: {crackTime}</p>
          </div>
        </>
      )}
    </div>
  );
}
