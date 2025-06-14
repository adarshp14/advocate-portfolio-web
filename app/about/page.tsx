import type { Metadata } from 'next'

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
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-lawyer-navy mb-8">About Muhammad Obaid</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 mb-6">
            Welcome to my legal practice. I am Muhammad Obaid, a dedicated advocate practicing at the Calcutta High Court 
            and district courts across West Bengal. With extensive experience in civil and criminal matters, I provide 
            personalized legal solutions tailored to each client's unique needs.
          </p>
          
          <h2 className="text-2xl font-bold text-lawyer-navy mt-8 mb-4">Professional Background</h2>
          <p className="text-gray-700 mb-6">
            As an advocate based in Kolkata and Howrah, I handle both civil and criminal matters with a focus on 
            providing tailored legal solutions for each client. I also specialize in arbitration and facilitate 
            the Alternate Dispute Resolution (ADR) process.
          </p>
          
          <h2 className="text-2xl font-bold text-lawyer-navy mt-8 mb-4">Areas of Practice</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Civil Litigation at Calcutta High Court</li>
            <li>Criminal Defense and Representation</li>
            <li>Arbitration and Alternative Dispute Resolution</li>
            <li>Legal Consultation and Advisory Services</li>
            <li>Document Drafting and Legal Documentation</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-lawyer-navy mt-8 mb-4">Contact Information</h2>
          <p className="text-gray-700">
            For legal consultation or to schedule an appointment, please contact me at +91-9123058260 or 
            email obaidmu018@gmail.com. I maintain chambers in both Kolkata and Howrah for your convenience.
          </p>
        </div>
      </div>
    </div>
  )
}