import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Online Tools — Image, PDF, SEO & Dev Tools | CodexStudio',
  description:
    'Free online tools built by CodexStudio. Image compressor, PDF merger, password generator, word counter, QR code maker and more. No signup, works in browser.',
};

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-[#FDF8EC] min-h-screen">{children}</div>;
}
