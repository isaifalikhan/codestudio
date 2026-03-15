'use client';

import React, { useState } from 'react';

export default function ReceiptGeneratorWidget() {
  const [store, setStore] = useState('Store Name');
  const [items, setItems] = useState([{ name: '', price: '' }]);
  const [payment, setPayment] = useState('Cash');

  const total = items.reduce((sum, i) => sum + (parseFloat(i.price) || 0), 0);

  const add = () => setItems((i) => [...i, { name: '', price: '' }]);
  const update = (idx: number, field: 'name' | 'price', value: string) =>
    setItems((i) => i.map((row, j) => (j === idx ? { ...row, [field]: value } : row)));
  const remove = (idx: number) => setItems((i) => i.filter((_, j) => j !== idx));

  const print = () => {
    const content = document.getElementById('receipt-print');
    if (!content) return;
    const win = window.open('', '_blank');
    if (!win) return;
    win.document.write(`<!DOCTYPE html><html><head><title>Receipt</title><style>body{font-family:monospace;width:280px;margin:1rem auto;padding:1rem;font-size:14px;}</style></head><body>${content.innerHTML}</body></html>`);
    win.document.close();
    win.print();
    win.close();
  };

  return (
    <div className="space-y-6">
      <label><span className="text-sm font-medium text-[#2F281D] block mb-2">Store name</span><input type="text" value={store} onChange={(e) => setStore(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" /></label>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex gap-2">
            <input type="text" value={item.name} onChange={(e) => update(i, 'name', e.target.value)} placeholder="Item" className="flex-1 px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC]" />
            <input type="number" min={0} step={0.01} value={item.price} onChange={(e) => update(i, 'price', e.target.value)} placeholder="Price" className="w-24 px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC]" />
            <button type="button" onClick={() => remove(i)} className="text-red-600 text-sm">×</button>
          </div>
        ))}
        <button type="button" onClick={add} className="text-sm text-[#997F6C] font-medium">+ Add item</button>
      </div>
      <label><span className="text-sm font-medium text-[#2F281D] block mb-2">Payment</span><input type="text" value={payment} onChange={(e) => setPayment(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" /></label>
      <div id="receipt-print" className="hidden">
        <p style={{ textAlign: 'center', fontWeight: 'bold' }}>{store}</p>
        <p style={{ textAlign: 'center', fontSize: '12px' }}>{new Date().toLocaleString()}</p>
        <hr />
        {items.filter((i) => i.name || i.price).map((i, idx) => (<p key={idx}>{i.name} ... ${(parseFloat(i.price) || 0).toFixed(2)}</p>))}
        <hr />
        <p><strong>Total: ${total.toFixed(2)}</strong></p>
        <p>Payment: {payment}</p>
      </div>
      <p className="text-xl font-bold text-[#2F281D]">Total: ${total.toFixed(2)}</p>
      <button type="button" onClick={print} className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold">Print receipt</button>
    </div>
  );
}
