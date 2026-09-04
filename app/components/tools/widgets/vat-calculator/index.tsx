'use client';

import React, { useState, useMemo } from 'react';

export default function VatCalculatorWidget() {
  const [mode, setMode] = useState<'add' | 'remove'>('add');
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('20');

  const result = useMemo(() => {
    const amt = parseFloat(amount);
    const r = parseFloat(rate);
    if (isNaN(amt) || amt < 0 || isNaN(r) || r < 0 || r > 100) return null;
    if (mode === 'add') {
      const vat = (amt * r) / 100;
      return { net: amt, vat, gross: amt + vat };
    } else {
      const gross = amt;
      const net = gross / (1 + r / 100);
      const vat = gross - net;
      return { net, vat, gross };
    }
  }, [amount, rate, mode]);

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setMode('add')}
          className={`px-4 py-2 rounded-xl text-sm font-medium ${mode === 'add' ? 'bg-[#14171F] text-[#F6F4EC]' : 'bg-[#14171F]/10 text-[#14171F]'}`}
        >
          Add VAT
        </button>
        <button
          type="button"
          onClick={() => setMode('remove')}
          className={`px-4 py-2 rounded-xl text-sm font-medium ${mode === 'remove' ? 'bg-[#14171F] text-[#F6F4EC]' : 'bg-[#14171F]/10 text-[#14171F]'}`}
        >
          Remove VAT
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label>
          <span className="text-sm font-medium text-[#14171F] block mb-2">{mode === 'add' ? 'Net amount' : 'Gross amount'}</span>
          <input
            type="number"
            min="0"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#14171F]/20 bg-[#F6F4EC]"
          />
        </label>
        <label>
          <span className="text-sm font-medium text-[#14171F] block mb-2">VAT rate %</span>
          <input
            type="number"
            min="0"
            max="100"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#14171F]/20 bg-[#F6F4EC]"
          />
        </label>
      </div>
      {result && (
        <div className="rounded-xl border border-[#14171F]/10 bg-[#ECE7D9]/30 p-6 space-y-2">
          <p className="text-[#14171F]/70">Net: {result.net.toFixed(2)}</p>
          <p className="text-[#14171F]/70">VAT: {result.vat.toFixed(2)}</p>
          <p className="text-xl font-bold text-[#14171F]">Total: {result.gross.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}
