import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legal Blog - Muhammad Obaid Advocate',
  description: 'Stay informed with legal insights, updates, and guidance from Muhammad Obaid, experienced advocate in Kolkata and Howrah.',
  openGraph: {
    title: 'Legal Blog - Muhammad Obaid Advocate',
    description: 'Stay informed with legal insights, updates, and guidance from Muhammad Obaid.',
    url: 'https://advocate-obaid.vercel.app/blog',
  },
  alternates: {
    canonical: 'https://advocate-obaid.vercel.app/blog',
  },
}

export default function BlogPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-lawyer-navy mb-8">Legal Blog</h1>
        <p className="text-lg text-gray-700 mb-8">
          Stay informed with the latest legal insights, updates, and guidance from Muhammad Obaid's practice.
        </p>
        
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-lawyer-navy mb-4">Coming Soon</h2>
          <p className="text-gray-700">
            Our legal blog is currently under development. Check back soon for valuable legal insights 
            and updates from our practice.
          </p>
        </div>
      </div>
    </div>
  )
}