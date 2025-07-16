// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Or your preferred font
import './globals.css'; // Your global styles

const inter = Inter({ subsets: ['latin'] }); // Initialize your font

// 1. Metadata for SEO
export const metadata: Metadata = {
  // Essential Metadata
  metadataBase: new URL('https://www.yourdomain.com'), // Replace with your actual domain
  title: {
    default: 'Samuel Kanuna | Expert Content Writer & SEO Consultant', // Default for pages without specific titles
    template: '%s | Samuel Kanuna', // Template for pages that define a title (e.g., "Services | Samuel Kanuna")
  },
  description: 'Boost your online presence with professional content writing and SEO services. Samuel Kanuna offers expert article writing, copywriting, technical writing, and on-site/off-site SEO strategies to drive traffic and conversions.',
  keywords: ['content writing', 'SEO consultant', 'article writing', 'copywriting', 'technical writing', 'on-site SEO', 'off-site SEO', 'freelance writer', 'digital marketing', 'Kenya'], // Relevant keywords

  // Open Graph (for social media sharing)
  openGraph: {
    title: 'Samuel Kanuna | Expert Content Writer & SEO Consultant',
    description: 'Boost your online presence with professional content writing and SEO services. Samuel Kanuna offers expert article writing, copywriting, technical writing, and on-site/off-site SEO strategies to drive traffic and conversions.',
    url: 'https://www.yourdomain.com', // Canonical URL for the homepage
    siteName: 'Samuel Kanuna - Content & SEO',
    images: [
      {
        url: 'https://www.yourdomain.com/og-image.jpg', // Path to your Open Graph image (e.g., 1200x630px)
        width: 1200,
        height: 630,
        alt: 'Samuel Kanuna providing content writing and SEO services',
      },
      // Add more images if needed
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter Card (for Twitter sharing)
  twitter: {
    card: 'summary_large_image', // Or 'summary' for smaller cards
    site: '@yourtwitterhandle', // Your Twitter handle
    creator: '@yourtwitterhandle', // Your Twitter handle
    title: 'Samuel Kanuna | Expert Content Writer & SEO Consultant',
    description: 'Boost your online presence with professional content writing and SEO services. Samuel Kanuna offers expert article writing, copywriting, technical writing, and on-site/off-site SEO strategies to drive traffic and conversions.',
    images: ['https://www.yourdomain.com/twitter-image.jpg'], // Path to your Twitter image
  },

  // Other useful metadata
  authors: [{ name: 'Samuel Kanuna', url: 'https://www.yourdomain.com' }],
  creator: 'Samuel Kanuna',
  publisher: 'Samuel Kanuna', // Could be your company name
  robots: {
    index: true, // Allow search engines to index this page
    follow: true, // Allow search engines to follow links on this page
    nocache: false, // Optional: if you want to prevent caching (usually not needed)
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // viewport: 'width=device-width, initial-scale=1', // Often handled by default in Next.js
  alternates: {
    canonical: 'https://www.yourdomain.com', // Canonical URL for the homepage
    languages: {
      'en-US': 'https://www.yourdomain.com', // If you have different language versions
    },
  },
  // Verification for search engines (optional, but good for proving ownership)
  verification: {
    google: 'your-google-site-verification-code',
    //bing: 'your-bing-site-verification-code',
    yandex: 'your-yandex-site-verification-code',
    yahoo: 'your-yahoo-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}