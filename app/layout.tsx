import type { Metadata, Viewport } from 'next';
import { Inter, Fraunces, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import { Navbar } from '@/src/components/Navbar';
import { Footer } from '@/src/components/Footer';
import { DeferredTopWidgets, DeferredBottomWidgets } from '@/app/components/DeferredLayoutWidgets';
import { ConsentAwareTracking } from '@/app/components/ConsentAwareTracking';
import {
  SITE_URL,
  defaultOgImage,
  buildLocalBusinessSchema,
  buildOrganizationSchema,
  buildWebsiteSchema,
} from '@/lib/seo';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  axes: ['opsz', 'SOFT', 'WONK'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-fraunces',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'CodexStudio — Web Development & Digital Solutions Agency in Islamabad, Pakistan',
    template: '%s | CodexStudio',
  },
  description:
    'CodexStudio is a web development agency in Islamabad, Pakistan. We build modern websites, web apps, e-commerce stores & 100+ free online tools. Get a free quote today.',
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
    icon: [
      { url: '/icon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/icon-48.png',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.webmanifest',
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
    url: SITE_URL,
    siteName: 'CodexStudio',
    title: 'CodexStudio — Web Development & Digital Solutions Agency in Islamabad, Pakistan',
    description:
      'CodexStudio builds modern websites, web apps & digital tools for startups and businesses. Based in Islamabad, Pakistan. Get a free quote today.',
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: 'CodexStudio — Web Development Agency in Islamabad, Pakistan',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@codexstudio',
    creator: '@codexstudio',
    title: 'CodexStudio — Web Development Agency in Islamabad',
    description: 'Modern websites, web apps & 100+ free browser tools. Based in Islamabad, Pakistan.',
    images: [defaultOgImage],
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      en: SITE_URL,
      'en-PK': SITE_URL,
      'en-GB': SITE_URL,
    },
  },
  verification: {
    google: 'T_Rj7smmXjAkbQnIFybMDmAHO7nrmyl3C_vo2zzTiWM',
  },
};

export const viewport: Viewport = {
  themeColor: '#14171F',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const organizationSchema = buildOrganizationSchema();
  const localBusinessSchema = buildLocalBusinessSchema();
  const websiteSchema = buildWebsiteSchema();
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta name="google-adsense-account" content="ca-pub-7165996801022980" />
        {/* Google Consent Mode v2 defaults. Must execute before AdSense or GA
            loads, so it is inlined here rather than shipped via next/script. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'granted',security_storage:'granted',wait_for_update:500});gtag('set','ads_data_redaction',true);gtag('js',new Date());`,
          }}
        />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://cdn.worldvectorlogo.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen bg-paper flex flex-col antialiased font-sans text-base leading-relaxed">
        <ConsentAwareTracking 
          gaId={gaId} 
          adsensePublisherId="ca-pub-7165996801022980" 
        />
        <a
          href="#main-content"
          id="skip-link"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[9999] focus:px-4 focus:py-3 focus:bg-[#14171F] focus:text-[#F6F4EC] focus:rounded-lg"
        >
          Skip to main content
        </a>
        <DeferredTopWidgets />
        <Navbar />
        <main id="main-content" className="flex-grow" role="main">
          {children}
        </main>
        <Footer />
        <DeferredBottomWidgets />
        <Analytics />
      </body>
    </html>
  );
}
