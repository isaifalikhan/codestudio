'use client';

import React, { useState, useEffect, useMemo } from 'react';

const CURRENCIES = ['PKR', 'USD', 'GBP', 'EUR', 'AED', 'INR', 'CAD', 'AUD', 'JPY', 'CHF', 'SAR'];

export default function CurrencyConverterWidget() {
  const [amount, setAmount] = useState('100');
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('PKR');
  const [rates, setRates] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [updated, setUpdated] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://api.frankfurter.app/latest?from=USD&to=PKR,GBP,EUR,AED,INR,CAD,AUD,JPY,CHF,SAR')
      .then((r) => r.json())
      .then((data) => {
        const r: Record<string, number> = { USD: 1 };
        if (data.rates) {
          Object.entries(data.rates).forEach(([k, v]) => { r[k] = v as number; });
        }
        setRates(r);
        setUpdated(data.date || null);
      })
      .catch(() => setRates({ USD: 1, PKR: 278, GBP: 0.79, EUR: 0.92 }))
      .finally(() => setLoading(false));
  }, []);

  const converted = useMemo(() => {
    const amt = parseFloat(amount);
    if (isNaN(amt) || !rates[from] || !rates[to]) return null;
    const usd = amt / rates[from];
    return usd * rates[to];
  }, [amount, from, to, rates]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Amount</span>
          <input
            type="number"
            min={0}
            step={0.01}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]"
          />
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">From</span>
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D]"
          >
            {CURRENCIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">To</span>
          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D]"
          >
            {CURRENCIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </label>
      </div>
      {loading && <p className="text-[#2F281D]/70">Loading rates…</p>}
      {converted !== null && !loading && (
        <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-6">
          <p className="text-2xl font-bold text-[#2F281D]">
            {amount} {from} = {converted.toFixed(2)} {to}
          </p>
          {updated && <p className="text-sm text-[#2F281D]/60 mt-2">Rates updated: {updated}</p>}
        </div>
      )}
    </div>
  );
}
