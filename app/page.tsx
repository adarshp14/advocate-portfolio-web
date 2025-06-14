import type { Metadata } from 'next'
import HomeContent from './HomeContent'

export const metadata: Metadata = {
  title: 'Muhammad Obaid - Trusted Lawyer in Kolkata & Howrah, India',
  description: 'Muhammad Obaid provides expert legal representation at Calcutta High Court and trial courts across West Bengal. Book a consultation today!',
  keywords: 'lawyer in Kolkata, lawyer in Howrah, Advocate Obaid, legal services India, civil litigation Kolkata, criminal defense West Bengal',
  authors: [{ name: 'Muhammad Obaid' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Muhammad Obaid - Trusted Lawyer in Kolkata & Howrah, India',
    description: 'Expert legal representation at Calcutta High Court and trial courts across West Bengal',
    url: 'https://advocate-obaid.vercel.app/',
  },
  alternates: {
    canonical: 'https://advocate-obaid.vercel.app/',
  },
}

export default function HomePage() {
  return <HomeContent />
}