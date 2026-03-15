import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import { Navbar } from '@/src/components/Navbar';
import { Footer } from '@/src/components/Footer';
import { CustomCursor } from '@/src/components/CustomCursor';
import { NProgressBar } from '@/src/components/NProgressBar';
import { WhatsAppFloat } from '@/src/components/WhatsAppFloat';
import { CookieBanner } from '@/app/components/CookieBanner';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.codexstudio2026.com'),
  title: {
    default: 'Web Development Agency in Islamabad, Pakistan | CodexStudio',
    template: '%s | CodexStudio',
  },
  description: 'CodexStudio is a web development agency in Islamabad, Pakistan. We build modern websites, web apps & e-commerce stores. Get a free quote today.',
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'CodexStudio',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'CodexStudio — Web Development Agency' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: '#skip-link:focus{left:1rem;top:1rem;}' }} />
      </head>
      <body className="min-h-screen bg-[#FDF8EC] flex flex-col antialiased font-sans">
        <a
          href="#main-content"
          id="skip-link"
          className="fixed left-[-9999px] z-[9999] px-4 py-2 bg-[#2F281D] text-[#FDF8EC] rounded-lg focus:left-4 focus:top-4"
        >
          Skip to main content
        </a>
        <CustomCursor />
        <NProgressBar />
        <Navbar />
        <main id="main-content" className="flex-grow" role="main">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <CookieBanner />
        {gaId && <GoogleAnalytics gaId={gaId} />}
        <Analytics />
      </body>
    </html>
  );
}
