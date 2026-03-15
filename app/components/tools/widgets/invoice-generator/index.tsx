'use client';

import React, { useState } from 'react';

export default function InvoiceGeneratorWidget() {
  const [fromName, setFromName] = useState('');
  const [fromAddress, setFromAddress] = useState('');
  const [toName, setToName] = useState('');
  const [toAddress, setToAddress] = useState('');
  const [items, setItems] = useState([{ desc: '', qty: '1', rate: '' }]);
  const [invoiceNum, setInvoiceNum] = useState('INV-001');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  const subtotal = items.reduce((sum, i) => sum + (parseFloat(i.qty) || 0) * (parseFloat(i.rate) || 0), 0);
  const tax = 0;
  const total = subtotal + tax;

  const addLine = () => setItems((i) => [...i, { desc: '', qty: '1', rate: '' }]);
  const update = (idx: number, field: 'desc' | 'qty' | 'rate', value: string) =>
    setItems((i) => i.map((row, j) => (j === idx ? { ...row, [field]: value } : row)));
  const remove = (idx: number) => setItems((i) => i.filter((_, j) => j !== idx));

  const print = () => {
    const content = document.getElementById('invoice-print');
    if (!content) return;
    const win = window.open('', '_blank');
    if (!win) return;
    win.document.write(`<!DOCTYPE html><html><head><title>Invoice ${invoiceNum}</title><style>body{font-family:system-ui;padding:2rem;color:#2F281D;} table{width:100%;border-collapse:collapse;margin-top:1rem;} th,td{border:1px solid #ddd;padding:8px;text-align:left;} th{background:#f5f5f5;} .text-right{text-align:right;}</style></head><body>${content.innerHTML}</body></html>`);
    win.document.close();
    win.print();
    win.close();
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-sm font-bold text-[#2F281D] mb-2">From</p>
          <input type="text" value={fromName} onChange={(e) => setFromName(e.target.value)} placeholder="Your name / company" className="w-full px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC] mb-2" />
          <textarea value={fromAddress} onChange={(e) => setFromAddress(e.target.value)} placeholder="Address" className="w-full px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC] text-sm resize-y" rows={2} />
        </div>
        <div>
          <p className="text-sm font-bold text-[#2F281D] mb-2">Bill to</p>
          <input type="text" value={toName} onChange={(e) => setToName(e.target.value)} placeholder="Client name" className="w-full px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC] mb-2" />
          <textarea value={toAddress} onChange={(e) => setToAddress(e.target.value)} placeholder="Address" className="w-full px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC] text-sm resize-y" rows={2} />
        </div>
      </div>
      <div className="flex gap-4">
        <label><span className="text-sm text-[#2F281D]/70 block mb-1">Invoice #</span><input type="text" value={invoiceNum} onChange={(e) => setInvoiceNum(e.target.value)} className="px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC]" /></label>
        <label><span className="text-sm text-[#2F281D]/70 block mb-1">Date</span><input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC]" /></label>
      </div>
      <div>
        <p className="text-sm font-bold text-[#2F281D] mb-2">Items</p>
        {items.map((item, i) => (
          <div key={i} className="flex gap-2 items-center mb-2">
            <input type="text" value={item.desc} onChange={(e) => update(i, 'desc', e.target.value)} placeholder="Description" className="flex-1 px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC]" />
            <input type="number" min={0} value={item.qty} onChange={(e) => update(i, 'qty', e.target.value)} placeholder="Qty" className="w-20 px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC]" />
            <input type="number" min={0} step={0.01} value={item.rate} onChange={(e) => update(i, 'rate', e.target.value)} placeholder="Rate" className="w-24 px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC]" />
            <button type="button" onClick={() => remove(i)} className="text-red-600 text-sm">Remove</button>
          </div>
        ))}
        <button type="button" onClick={addLine} className="text-sm text-[#997F6C] font-medium">+ Add line</button>
      </div>
      <div id="invoice-print" className="hidden">
        <h1>Invoice {invoiceNum}</h1>
        <p>Date: {date}</p>
        <p><strong>From:</strong> {fromName}<br />{fromAddress}</p>
        <p><strong>To:</strong> {toName}<br />{toAddress}</p>
        <table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
          {items.filter((i) => i.desc || i.rate).map((i, idx) => (<tr key={idx}><td>{i.desc}</td><td>{i.qty}</td><td>{i.rate}</td><td>{(parseFloat(i.qty) || 0) * (parseFloat(i.rate) || 0)}</td></tr>))}
        </tbody></table>
        <p><strong>Total: ${total.toFixed(2)}</strong></p>
      </div>
      <p className="text-xl font-bold text-[#2F281D]">Total: ${total.toFixed(2)}</p>
      <button type="button" onClick={print} className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold">Print / Save as PDF</button>
    </div>
  );
}
