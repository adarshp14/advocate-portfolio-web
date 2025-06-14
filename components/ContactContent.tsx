import type { Metadata } from 'next'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact Muhammad Obaid - Lawyer in Kolkata & Howrah | Book Consultation',
  description: 'Contact Muhammad Obaid, experienced advocate in Kolkata & Howrah. Book a legal consultation today. Call +91-9123058260 or email obaidmu018@gmail.com for professional legal services.',
  openGraph: {
    title: 'Contact Muhammad Obaid - Lawyer in Kolkata & Howrah | Book Consultation',
    description: 'Contact Muhammad Obaid for legal consultation in Kolkata & Howrah.',
    url: 'https://advocate-obaid.vercel.app/contact',
  },
  alternates: {
    canonical: 'https://advocate-obaid.vercel.app/contact',
  },
}

export default function ContactPage() {
  return <ContactContent />
}