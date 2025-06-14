import type { Metadata } from 'next'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About Muhammad Obaid - Experienced Lawyer in Kolkata & Howrah',
  description: 'Learn about Muhammad Obaid, experienced advocate practicing at Calcutta High Court. Specializing in civil litigation, criminal defense, and legal consultation in West Bengal.',
  openGraph: {
    title: 'About Muhammad Obaid - Experienced Lawyer in Kolkata & Howrah',
    description: 'Learn about Muhammad Obaid, experienced advocate practicing at Calcutta High Court.',
    url: 'https://advocate-obaid.vercel.app/about',
  },
  alternates: {
    canonical: 'https://advocate-obaid.vercel.app/about',
  },
}

export default function AboutPage() {
  return <AboutContent />
}