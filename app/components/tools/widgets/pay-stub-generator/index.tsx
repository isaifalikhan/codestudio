'use client';

import React, { useState } from 'react';

export default function PayStubGeneratorWidget() {
  const [employee, setEmployee] = useState('');
  const [payPeriod, setPayPeriod] = useState('');
  const [gross, setGross] = useState('2500');
  const [tax, setTax] = useState('400');
  const [deductions, setDeductions] = useState('100');
  const net = (parseFloat(gross) || 0) - (parseFloat(tax) || 0) - (parseFloat(deductions) || 0);

  const print = () => {
    const content = document.getElementById('paystub-print');
    if (!content) return;
    const win = window.open('', '_blank');
    if (!win) return;
    win.document.write(`<!DOCTYPE html><html><head><title>Pay Stub</title><style>body{font-family:system-ui;max-width:400px;margin:1rem auto;padding:1rem;} table{width:100%;} td:last-child{text-align:right;}</style></head><body>${content.innerHTML}</body></html>`);
    win.document.close();
    win.print();
    win.close();
  };

  return (
    <div className="space-y-6">
      <label><span className="text-sm font-medium text-[#2F281D] block mb-2">Employee name</span><input type="text" value={employee} onChange={(e) => setEmployee(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" /></label>
      <label><span className="text-sm font-medium text-[#2F281D] block mb-2">Pay period</span><input type="text" value={payPeriod} onChange={(e) => setPayPeriod(e.target.value)} placeholder="e.g. Jan 1 - Jan 15, 2025" className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" /></label>
      <label><span className="text-sm font-medium text-[#2F281D] block mb-2">Gross pay ($)</span><input type="number" min={0} value={gross} onChange={(e) => setGross(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" /></label>
      <label><span className="text-sm font-medium text-[#2F281D] block mb-2">Tax withheld ($)</span><input type="number" min={0} value={tax} onChange={(e) => setTax(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" /></label>
      <label><span className="text-sm font-medium text-[#2F281D] block mb-2">Other deductions ($)</span><input type="number" min={0} value={deductions} onChange={(e) => setDeductions(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" /></label>
      <div id="paystub-print" className="hidden">
        <h2>Pay Stub</h2>
        <p><strong>{employee || 'Employee'}</strong><br />{payPeriod || 'Pay period'}</p>
        <table><tr><td>Gross</td><td>${(parseFloat(gross) || 0).toFixed(2)}</td></tr><tr><td>Tax</td><td>-${(parseFloat(tax) || 0).toFixed(2)}</td></tr><tr><td>Deductions</td><td>-${(parseFloat(deductions) || 0).toFixed(2)}</td></tr><tr><td><strong>Net</strong></td><td><strong>${net.toFixed(2)}</strong></td></tr></table>
      </div>
      <p className="text-xl font-bold text-[#2F281D]">Net pay: ${net.toFixed(2)}</p>
      <button type="button" onClick={print} className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold">Print pay stub</button>
    </div>
  );
}
