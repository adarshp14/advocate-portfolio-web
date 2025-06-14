import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LegalDisclaimer from '@/components/LegalDisclaimer'
import { HelmetProvider } from 'react-helmet-async'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
})

export const metadata: Metadata = {
  title: {
    default: 'Muhammad Obaid - Trusted Lawyer in Kolkata & Howrah, India',
    template: '%s | Muhammad Obaid - Advocate'
  },
  description: 'Muhammad Obaid provides expert legal representation at Calcutta High Court and trial courts across West Bengal. Book a consultation today!',
  keywords: 'lawyer in Kolkata, lawyer in Howrah, Advocate Obaid, legal services India, civil litigation Kolkata, criminal defense West Bengal',
  authors: [{ name: 'Muhammad Obaid' }],
  creator: 'Muhammad Obaid',
  publisher: 'Muhammad Obaid',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  verification: {
    google: 'google-site-verification-code',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://advocate-obaid.vercel.app/',
    siteName: 'Muhammad Obaid - Advocate',
    title: 'Muhammad Obaid - Trusted Lawyer in Kolkata & Howrah, India',
    description: 'Expert legal representation at Calcutta High Court and trial courts across West Bengal.',
    images: [
      {
        url: 'https://advocate-obaid.vercel.app/lovable-uploads/381ae573-3196-4996-adc1-acbc78af6037.png',
        width: 1200,
        height: 630,
        alt: 'Muhammad Obaid - Advocate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ObaidAdvocate',
    creator: '@ObaidAdvocate',
    title: 'Muhammad Obaid - Trusted Lawyer in Kolkata & Howrah, India',
    description: 'Expert legal representation at Calcutta High Court and trial courts across West Bengal.',
    images: ['https://advocate-obaid.vercel.app/lovable-uploads/381ae573-3196-4996-adc1-acbc78af6037.png'],
  },
  alternates: {
    canonical: 'https://advocate-obaid.vercel.app/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/lovable-uploads/381ae573-3196-4996-adc1-acbc78af6037.png" />
        <meta name="theme-color" content="#1e3a5f" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Muhammad Obaid - Legal Practice",
              "description": "Expert legal representation at Calcutta High Court and trial courts across West Bengal",
              "url": "https://advocate-obaid.vercel.app/",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kolkata & Howrah",
                "addressRegion": "West Bengal",
                "addressCountry": "India"
              },
              "telephone": "+91-9123058260",
              "email": "obaidmu018@gmail.com",
              "serviceArea": "Kolkata, Howrah, West Bengal",
              "availableChannel": {
                "@type": "ServiceChannel",
                "serviceUrl": "https://advocate-obaid.vercel.app/contact",
                "serviceSmsNumber": "+91-9123058260"
              }
            })
          }}
        />
      </head>
      <body className="font-inter">
        <HelmetProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <LegalDisclaimer />
          <Toaster position="bottom-right" />
        </HelmetProvider>
      </body>
    </html>
  )
}