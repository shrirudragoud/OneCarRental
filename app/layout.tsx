import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OneCarRentals - Premium Car Rental Service',
  description: 'OneCarRentals provides the best car rental options and expert services for the greatest customer experience. Rent premium cars for your adventures with friends and family.',
  keywords: 'car rental, OneCarRentals, premium cars, family rental, adventure travel, Maruti Suzuki, Tata, car booking',
  authors: [{ name: 'OneCarRentals' }],
  creator: 'OneCarRentals',
  publisher: 'OneCarRentals',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://onecarrentals.netlify.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'OneCarRentals - Premium Car Rental Service',
    description: 'OneCarRentals provides the best car rental options and expert services for the greatest customer experience.',
    url: 'https://onecarrentals.netlify.app',
    siteName: 'OneCarRentals',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'OneCarRentals Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OneCarRentals - Premium Car Rental Service',
    description: 'OneCarRentals provides the best car rental options and expert services for the greatest customer experience.',
    images: ['/logo.png'],
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#fbbf24" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="OneCarRentals" />
      </head>
      <body className={`font-sans antialiased ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
