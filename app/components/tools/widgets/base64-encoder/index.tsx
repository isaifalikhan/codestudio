'use client';

import React, { useState, useCallback } from 'react';

export default function Base64EncoderWidget() {
  const [plain, setPlain] = useState('');
  const [base64, setBase64] = useState('');

  const encode = useCallback(() => {
    try {
      setBase64(btoa(unescape(encodeURIComponent(plain))));
    } catch {
      setBase64('(invalid input)');
    }
  }, [plain]);

  const decode = useCallback(() => {
    try {
      setPlain(decodeURIComponent(escape(atob(base64))));
    } catch {
      setPlain('(invalid Base64)');
    }
  }, [base64]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm font-medium text-[#2F281D] block mb-2">Plain text</label>
          <textarea
            value={plain}
            onChange={(e) => setPlain(e.target.value)}
            placeholder="Enter text to encode..."
            className="w-full min-h-[160px] px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D] placeholder:text-[#2F281D]/40 focus:outline-none focus:ring-2 focus:ring-[#997F6C]/50 resize-y font-mono text-sm"
          />
          <button
            type="button"
            onClick={encode}
            className="mt-2 px-4 py-2 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold hover:bg-[#997F6C]"
          >
            Encode → Base64
          </button>
        </div>
        <div>
          <label className="text-sm font-medium text-[#2F281D] block mb-2">Base64</label>
          <textarea
            value={base64}
            onChange={(e) => setBase64(e.target.value)}
            placeholder="Enter Base64 to decode..."
            className="w-full min-h-[160px] px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D] placeholder:text-[#2F281D]/40 focus:outline-none focus:ring-2 focus:ring-[#997F6C]/50 resize-y font-mono text-sm"
          />
          <button
            type="button"
            onClick={decode}
            className="mt-2 px-4 py-2 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold hover:bg-[#997F6C]"
          >
            Decode → Text
          </button>
        </div>
      </div>
    </div>
  );
}
