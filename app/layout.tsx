import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  // Base URL for relative images/links
  metadataBase: new URL('https://aurabotanica.com'), 

  title: {
    default: 'Aura Botanica | Artisanal Forest Coffee & Micro-Roastery',
    template: '%s | Aura Botanica',
  },
  description: 
    'Discover Aura Botanica: A high-end botanical coffee experience. Micro-roasted single-estate beans crafted with precision extraction ratios.',
  keywords: [
    'Artisanal Coffee',
    'Specialty Coffee',
    'Micro-Roastery',
    'Botanical Cafe',
    'Single Origin Coffee',
    'Precision Brewing',
  ],
  authors: [{ name: 'Aura Botanica' }],
  creator: 'Aura Botanica',

  // Open Graph for Facebook, LinkedIn, Discord
  openGraph: {
    title: 'Aura Botanica | Artisanal Forest Coffee',
    description: 'Where deep wild nature meets exceptional, micro-roasted coffee.',
    url: 'https://aurabotanica.com',
    siteName: 'Aura Botanica',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'Aura Botanica Forest Atmosphere',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    title: 'Aura Botanica | Artisanal Forest Coffee',
    description: 'Craft coffee inspired by nature and brewing precision.',
    images: ['https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&h=630&q=80'],
  },

  // Search Engine Crawling Instructions
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}