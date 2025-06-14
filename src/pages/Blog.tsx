
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ConsultationButton from '../components/ConsultationButton';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { blogPosts } from '../data/blog';

const Blog: React.FC = () => {
  // Use custom hook for scroll animations
  useScrollAnimation();
  
  // Scroll to top when blog page loads
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Helmet>
        <title>Legal Blog | Muhammad Obaid - Lawyer in Kolkata & Howrah</title>
        <meta name="description" content="Expert legal insights and advice from Muhammad Obaid, Advocate at Calcutta High Court. Browse articles on civil litigation, criminal defense, and legal tips for Kolkata and Howrah residents." />
        <meta name="keywords" content="legal blog Kolkata, lawyer articles West Bengal, legal advice blog, civil litigation insights, criminal defense tips, property law guidance, Muhammad Obaid blog" />
        <meta name="author" content="Muhammad Obaid" />
        <link rel="canonical" href="https://advocate-obaid.vercel.app/blog" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="3 days" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Legal Blog | Muhammad Obaid - Lawyer in Kolkata & Howrah" />
        <meta property="og:description" content="Expert legal insights and advice from Muhammad Obaid, Advocate at Calcutta High Court. Browse articles on civil litigation, criminal defense, and legal tips." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://advocate-obaid.vercel.app/blog" />
        <meta property="og:image" content="https://advocate-obaid.vercel.app/lovable-uploads/381ae573-3196-4996-adc1-acbc78af6037.png" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ObaidAdvocate" />
        <meta name="twitter:title" content="Legal Blog | Muhammad Obaid - Lawyer in Kolkata & Howrah" />
        <meta name="twitter:description" content="Expert legal insights and advice from Muhammad Obaid, Advocate at Calcutta High Court." />
        <meta name="twitter:image" content="https://advocate-obaid.vercel.app/lovable-uploads/381ae573-3196-4996-adc1-acbc78af6037.png" />
        
        {/* Structured Data for Blog */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "Muhammad Obaid Legal Blog",
              "description": "Expert legal insights and advice from Muhammad Obaid, Advocate at Calcutta High Court",
              "url": "https://advocate-obaid.vercel.app/blog",
              "author": {
                "@type": "Person",
                "name": "Muhammad Obaid",
                "jobTitle": "Advocate",
                "affiliation": {
                  "@type": "Organization",
                  "name": "Calcutta High Court"
                }
              },
              "publisher": {
                "@type": "Organization",
                "name": "Muhammad Obaid Legal Practice",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://advocate-obaid.vercel.app/lovable-uploads/381ae573-3196-4996-adc1-acbc78af6037.png"
                }
              },
              "inLanguage": "en-IN",
              "about": [
                {
                  "@type": "Thing",
                  "name": "Legal Services"
                },
                {
                  "@type": "Thing",
                  "name": "Civil Litigation"
                },
                {
                  "@type": "Thing",
                  "name": "Criminal Defense"
                }
              ],
              "blogPost": [
                {
                  "@type": "BlogPosting",
                  "headline": "How to Find the Best Lawyer in Kolkata",
                  "url": "https://advocate-obaid.vercel.app/blog/how-to-find-best-lawyer-kolkata",
                  "datePublished": "2023-08-15",
                  "author": {
                    "@type": "Person",
                    "name": "Muhammad Obaid"
                  }
                },
                {
                  "@type": "BlogPosting",
                  "headline": "Key Civil Litigation Laws in India Explained",
                  "url": "https://advocate-obaid.vercel.app/blog/civil-litigation-laws-india-explained",
                  "datePublished": "2023-09-22",
                  "author": {
                    "@type": "Person",
                    "name": "Muhammad Obaid"
                  }
                },
                {
                  "@type": "BlogPosting",
                  "headline": "Avoid These Legal Mistakes in Kolkata and Howrah",
                  "url": "https://advocate-obaid.vercel.app/blog/avoid-legal-mistakes-kolkata-howrah",
                  "datePublished": "2023-10-10",
                  "author": {
                    "@type": "Person",
                    "name": "Muhammad Obaid"
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>
      
      {/* Hero Section with fixed height for consistency */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: "url('/lovable-uploads/381ae573-3196-4996-adc1-acbc78af6037.png')",
            backgroundPosition: 'center 30%',
            height: '50%'
          }}
        />
        <div className="absolute inset-0 bg-lawyer-navy bg-opacity-70" style={{ height: '50%' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Legal Insights & Resources
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Expert analysis and advice from Muhammad Obaid, Advocate at Calcutta High Court
          </p>
          <div className="h-1 w-20 bg-lawyer-gold mx-auto mb-12"></div>
        </div>
      </section>
      
      {/* Blog Posts Section */}
      <section className="py-16 -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-10">
                {blogPosts.map((post, index) => (
                  <div 
                    key={post.id} 
                    className="bg-white rounded-lg shadow-lg overflow-hidden opacity-0 reveal"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="md:flex">
                      <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="md:w-3/5 p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.categories.map((category, i) => (
                            <span key={i} className="text-xs font-medium bg-gray-100 text-lawyer-navy px-2 py-1 rounded">
                              {category}
                            </span>
                          ))}
                        </div>
                        <h2 className="text-2xl font-bold text-lawyer-navy mb-3">{post.title}</h2>
                        <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                        <p className="text-gray-700 mb-4">{post.excerpt}</p>
                        <Link 
                          to={`/blog/${post.slug}`} 
                          className="text-lawyer-navy font-medium inline-flex items-center group"
                        >
                          Read Full Article
                          <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="mb-8 opacity-0 reveal">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-lawyer-navy mb-4">About the Author</h3>
                    <div className="flex items-center mb-4">
                      <img 
                        src="/lovable-uploads/96b51200-5773-42b6-ad91-3ba7c7d42bd0.png" 
                        alt="Muhammad Obaid" 
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-bold">Muhammad Obaid</h4>
                        <p className="text-sm text-gray-600">Advocate at Calcutta High Court</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Practicing advocate with expertise in civil and criminal matters across West Bengal courts.
                    </p>
                    <Link 
                      to="/about" 
                      className="text-lawyer-navy font-medium inline-flex items-center group"
                    >
                      Learn More
                      <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </Link>
                  </CardContent>
                </Card>
                
                <div className="bg-lawyer-navy rounded-lg shadow-lg p-6 text-white opacity-0 reveal">
                  <h3 className="text-xl font-bold mb-4">Need Legal Help?</h3>
                  <p className="mb-6">
                    Contact me for a consultation about your legal matters in Kolkata, Howrah, or anywhere in West Bengal.
                  </p>
                  <ConsultationButton fullWidth />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
