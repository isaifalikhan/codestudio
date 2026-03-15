'use client';

import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/lib/constants';

export function WhatsAppFloat() {
  const waUrl = `https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || WHATSAPP_NUMBER).replace(/\D/g, '')}`;
  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
    >
      <MessageCircle className="w-7 h-7" aria-hidden />
    </a>
  );
}
