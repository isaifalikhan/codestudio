import type { Metadata } from 'next';
import { Inter, Space_Grotesk, Cormorant_Garamond } from 'next/font/google';
import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import { Navbar } from '@/src/components/Navbar';
import { Footer } from '@/src/components/Footer';
import { CustomCursor } from '@/src/components/CustomCursor';
import { NProgressBar } from '@/src/components/NProgressBar';
import { WhatsAppFloat } from '@/src/components/WhatsAppFloat';
import { CookieBanner } from '@/app/components/CookieBanner';
import { GAConsentWrapper } from '@/app/components/GAConsentWrapper';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-cormorant',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.codexstudio2026.com'),
  title: {
    default: 'Web Development Agency in Islamabad, Pakistan | CodexStudio',
    template: '%s | CodexStudio',
  },
  description:
    'CodexStudio is a web development agency in Islamabad, Pakistan. We build modern websites, web apps, e-commerce stores & 140 free online tools. Get a free quote today.',
  keywords: [
    'web development agency islamabad',
    'website development pakistan',
    'next.js developer pakistan',
    'web design islamabad',
    'codexstudio',
  ],
  authors: [{ name: 'CodexStudio', url: 'https://www.codexstudio2026.com' }],
  creator: 'CodexStudio',
  publisher: 'CodexStudio',
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.codexstudio2026.com',
    siteName: 'CodexStudio',
    title: 'Web Development Agency in Islamabad, Pakistan | CodexStudio',
    description:
      'CodexStudio builds modern websites, web apps & digital tools for startups and businesses. Based in Islamabad, Pakistan. Get a free quote today.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CodexStudio — Web Development Agency in Islamabad, Pakistan',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@codexstudio2026',
    creator: '@codexstudio2026',
    title: 'CodexStudio — Web Development Agency in Islamabad',
    description: 'Modern websites, web apps & 140 free browser tools. Based in Islamabad, Pakistan.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.codexstudio2026.com',
  },
  verification: {
    google: 'T_Rj7smmXjAkbQnIFybMDmAHO7nrmyl3C_vo2zzTiWM',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${cormorantGaramond.variable}`}>
      <head>
        <meta name="google-site-verification" content="T_Rj7smmXjAkbQnIFybMDmAHO7nrmyl3C_vo2zzTiWM" />
        <meta name="google-adsense-account" content="ca-pub-7165996801022980" />
      </head>
      <body className="min-h-screen bg-[#FDF8EC] flex flex-col antialiased font-sans text-base leading-relaxed">
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7165996801022980"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        <a
          href="#main-content"
          id="skip-link"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[9999] focus:px-4 focus:py-3 focus:bg-[#2F281D] focus:text-[#FDF8EC] focus:rounded-lg"
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
        {gaId && <GAConsentWrapper gaId={gaId} />}
        <Analytics />
      </body>
    </html>
  );
}
