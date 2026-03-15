'use client';

import React, { useState, useCallback } from 'react';

export default function UrlEncoderWidget() {
  const [input, setInput] = useState('');
  const [encodedComponent, setEncodedComponent] = useState('');
  const [encodedUri, setEncodedUri] = useState('');
  const [decoded, setDecoded] = useState('');
  const [copied, setCopied] = useState<string | null>(null);

  const doEncode = useCallback(() => {
    setEncodedComponent(encodeURIComponent(input));
    setEncodedUri(encodeURI(input));
  }, [input]);

  const doDecode = useCallback(() => {
    try {
      setDecoded(decodeURIComponent(input));
    } catch {
      try {
        setDecoded(decodeURI(input));
      } catch {
        setDecoded('(invalid encoding)');
      }
    }
  }, [input]);

  const copy = async (value: string, label: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="space-y-6">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter URL or text to encode/decode..."
        className="w-full min-h-[100px] px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D] placeholder:text-[#2F281D]/40 focus:outline-none focus:ring-2 focus:ring-[#997F6C]/50 resize-y font-mono text-sm"
      />
      <div className="flex gap-2">
        <button
          type="button"
          onClick={doEncode}
          className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold hover:bg-[#997F6C]"
        >
          Encode
        </button>
        <button
          type="button"
          onClick={doDecode}
          className="px-5 py-2.5 rounded-xl border border-[#2F281D]/30 text-[#2F281D] font-bold hover:bg-[#2F281D]/5"
        >
          Decode
        </button>
      </div>
      {(encodedComponent || encodedUri) && (
        <div className="space-y-3">
          <div>
            <p className="text-sm font-medium text-[#2F281D] mb-1">encodeURIComponent (for query params)</p>
            <div className="flex gap-2">
              <input
                type="text"
                readOnly
                value={encodedComponent}
                className="flex-1 px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#E8E2D2]/50 font-mono text-sm"
              />
              <button
                type="button"
                onClick={() => copy(encodedComponent, 'component')}
                className="px-4 py-2 rounded-lg bg-[#2F281D] text-[#FDF8EC] text-sm font-bold"
              >
                {copied === 'component' ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-[#2F281D] mb-1">encodeURI (full URL)</p>
            <div className="flex gap-2">
              <input
                type="text"
                readOnly
                value={encodedUri}
                className="flex-1 px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#E8E2D2]/50 font-mono text-sm"
              />
              <button
                type="button"
                onClick={() => copy(encodedUri, 'uri')}
                className="px-4 py-2 rounded-lg bg-[#2F281D] text-[#FDF8EC] text-sm font-bold"
              >
                {copied === 'uri' ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>
        </div>
      )}
      {decoded && (
        <div>
          <p className="text-sm font-medium text-[#2F281D] mb-1">Decoded</p>
          <input
            type="text"
            readOnly
            value={decoded}
            className="w-full px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#E8E2D2]/50 font-mono text-sm"
          />
        </div>
      )}
    </div>
  );
}
