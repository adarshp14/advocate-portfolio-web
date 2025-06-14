
import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ConsultationButton from '../components/ConsultationButton';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { blogData } from '../data/blog';


const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? blogData[slug as keyof typeof blogData] : null;
  
  // Use custom hook for scroll animations
  useScrollAnimation();
  
  useEffect(() => {
    if (!post) {
      navigate('/blog');
      return;
    }
    
    // Scroll to top when blog post loads
    window.scrollTo(0, 0);
  }, [post, navigate]);
  
  if (!post) return null;
  
  return (
    <>
      <Helmet>
        <title>{post.title} | Muhammad Obaid - Lawyer in Kolkata</title>
        <meta name="description" content={`${post.title} - Legal insights from Muhammad Obaid, Advocate at Calcutta High Court. Expert advice for residents and businesses in Kolkata and Howrah.`} />
        <meta name="keywords" content={`${post.categories.join(', ')}, Muhammad Obaid, legal advice Kolkata, lawyer insights West Bengal, Calcutta High Court advocate`} />
        <meta name="author" content="Muhammad Obaid" />
        <link rel="canonical" href={`https://advocate-obaid.vercel.app/blog/${slug}`} />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={`${post.title} | Muhammad Obaid - Lawyer in Kolkata`} />
        <meta property="og:description" content={`${post.title} - Legal insights from Muhammad Obaid, Advocate at Calcutta High Court. Expert advice for residents and businesses in Kolkata and Howrah.`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://advocate-obaid.vercel.app/blog/${slug}`} />
        <meta property="og:image" content={post.image} />
        <meta property="article:author" content="Muhammad Obaid" />
        <meta property="article:published_time" content={new Date(post.date).toISOString()} />
        <meta property="article:section" content="Legal" />
        {post.categories.map((category, index) => (
          <meta key={index} property="article:tag" content={category} />
        ))}
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ObaidAdvocate" />
        <meta name="twitter:title" content={`${post.title} | Muhammad Obaid - Lawyer in Kolkata`} />
        <meta name="twitter:description" content={`${post.title} - Legal insights from Muhammad Obaid, Advocate at Calcutta High Court.`} />
        <meta name="twitter:image" content={post.image} />
        
        {/* Structured Data for Article */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "${post.title}",
              "description": "${post.title} - Legal insights from Muhammad Obaid, Advocate at Calcutta High Court",
              "image": "${post.image}",
              "datePublished": "${new Date(post.date).toISOString()}",
              "dateModified": "${new Date().toISOString()}",
              "author": {
                "@type": "Person",
                "name": "Muhammad Obaid",
                "jobTitle": "Advocate",
                "affiliation": {
                  "@type": "Organization",
                  "name": "Calcutta High Court"
                },
                "email": "obaidmu018@gmail.com",
                "telephone": "+91-9123058260",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "7A Kiran Shankar Roy Road",
                  "addressLocality": "Kolkata",
                  "addressRegion": "West Bengal",
                  "postalCode": "700001",
                  "addressCountry": "India"
                }
              },
              "publisher": {
                "@type": "Organization",
                "name": "Muhammad Obaid Legal Practice",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://advocate-obaid.vercel.app/lovable-uploads/381ae573-3196-4996-adc1-acbc78af6037.png"
                },
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "7A Kiran Shankar Roy Road",
                  "addressLocality": "Kolkata",
                  "addressRegion": "West Bengal",
                  "postalCode": "700001",
                  "addressCountry": "India"
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://advocate-obaid.vercel.app/blog/${slug}"
              },
              "url": "https://advocate-obaid.vercel.app/blog/${slug}",
              "keywords": "${post.categories.join(', ')}, legal advice, Kolkata lawyer, West Bengal advocate",
              "articleSection": "Legal",
              "inLanguage": "en-IN",
              "about": [
                {
                  "@type": "Thing",
                  "name": "Legal Services"
                },
                {
                  "@type": "Place",
                  "name": "Kolkata"
                },
                {
                  "@type": "Place",
                  "name": "West Bengal"
                }
              ]
            }
          `}
        </script>
      </Helmet>
      
      {/* Hero Section with adjusted padding to account for fixed header */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: `url('${post.image}')`,
            backgroundPosition: 'center 30%',
            height: '50%'
          }}
        />
        <div className="absolute inset-0 bg-lawyer-navy bg-opacity-70" style={{ height: '50%' }}></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {post.categories.map((category, index) => (
              <span key={index} className="text-xs font-medium bg-white bg-opacity-20 text-white px-3 py-1 rounded-full">
                {category}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in">
            {post.title}
          </h1>
          <div className="flex items-center justify-center text-white mb-8">
            <img 
              src="/lovable-uploads/96b51200-5773-42b6-ad91-3ba7c7d42bd0.png" 
              alt={post.author} 
              className="w-10 h-10 rounded-full object-cover mr-3"
            />
            <span className="mr-3">{post.author}</span>
            <span className="text-gray-300">|</span>
            <span className="ml-3">{post.date}</span>
          </div>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-16 -mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-6 md:p-10 opacity-0 reveal">
            <article className="prose prose-lg max-w-none blog-post">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-xl font-bold text-lawyer-navy mb-2">About the Author</h3>
                  <div className="flex items-center">
                    <img 
                      src="/lovable-uploads/96b51200-5773-42b6-ad91-3ba7c7d42bd0.png" 
                      alt="Muhammad Obaid" 
                      className="w-12 h-12 rounded-full object-cover mr-3"
                    />
                    <div>
                      <p className="font-bold">Muhammad Obaid</p>
                      <p className="text-sm text-gray-600">Advocate at Calcutta High Court</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-lawyer-navy mb-3">Share This Article</h3>
                  <div className="flex space-x-4">
                    <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700">
                      f
                    </button>
                    <button className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500">
                      t
                    </button>
                    <button className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700">
                      w
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/blog" className="text-lawyer-navy font-medium inline-flex items-center group">
              <svg className="mr-2 w-4 h-4 transition-transform duration-300 group-hover:-translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to All Articles
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-lawyer-navy rounded-lg shadow-xl p-8 md:p-12 text-center opacity-0 reveal">
            <h2 className="text-3xl font-bold text-white mb-6">Need Legal Assistance in Kolkata or Howrah?</h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-8">
              If you have questions about a legal issue discussed in this article or need representation in a similar matter, contact me for professional assistance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <ConsultationButton />
              <Link to="/contact" className="btn-secondary">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
