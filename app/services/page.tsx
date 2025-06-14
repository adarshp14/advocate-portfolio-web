import type { Metadata } from 'next'
import ServicesContent from './ServicesContent'

export const metadata: Metadata = {
  title: 'Legal Services in Kolkata & Howrah - Muhammad Obaid Advocate',
  description: 'Comprehensive legal services by Muhammad Obaid in Kolkata & Howrah. Civil litigation, criminal defense, family law, property disputes, corporate law, and document drafting.',
  openGraph: {
    title: 'Legal Services in Kolkata & Howrah - Muhammad Obaid Advocate',
    description: 'Comprehensive legal services including civil litigation, criminal defense, family law, and property disputes.',
    url: 'https://advocate-obaid.vercel.app/services',
  },
  alternates: {
    canonical: 'https://advocate-obaid.vercel.app/services',
  },
}

export default function ServicesPage() {
  return <ServicesContent />
}