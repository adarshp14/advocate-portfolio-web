
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ConsultationButton from '../components/ConsultationButton';

const Blog = () => {
  // Animation on scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal');
      
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('animate-fade-in');
          element.classList.remove('opacity-0');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const blogPosts = [
    {
      id: 1,
      title: "How to Find the Best Lawyer in Kolkata",
      slug: "how-to-find-best-lawyer-kolkata",
      excerpt: "Navigating the legal landscape in Kolkata can be challenging. Learn key factors to consider when choosing the right advocate for your legal needs in West Bengal.",
      date: "August 15, 2023",
      image: "https://images.unsplash.com/photo-1589394101658-49c8ae636826?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      categories: ["Legal Advice", "Kolkata"]
    },
    {
      id: 2,
      title: "Key Civil Litigation Laws in India Explained",
      slug: "civil-litigation-laws-india-explained",
      excerpt: "Understanding the fundamentals of civil litigation in India. This guide breaks down essential laws and procedures for cases in the Calcutta High Court and beyond.",
      date: "September 22, 2023",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      categories: ["Civil Law", "Legal Education"]
    },
    {
      id: 3,
      title: "Avoid These Legal Mistakes in Kolkata and Howrah",
      slug: "avoid-legal-mistakes-kolkata-howrah",
      excerpt: "Common legal pitfalls that residents and businesses in Kolkata and Howrah should be aware of. Learn how to protect your interests and navigate legal challenges.",
      date: "October 10, 2023",
      image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      categories: ["Legal Tips", "Risk Management"]
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>Legal Blog | Muhammad Obaid - Lawyer in Kolkata & Howrah</title>
        <meta name="description" content="Expert legal insights and advice from Muhammad Obaid, Advocate at Calcutta High Court. Browse articles on civil litigation, criminal defense, and legal tips for Kolkata and Howrah residents." />
        <link rel="canonical" href="/blog" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1423592707957-3b212afa6733?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
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
                      <div className="md:w-2/5">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-64 md:h-full object-cover"
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
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8 opacity-0 reveal">
                  <h3 className="text-xl font-bold text-lawyer-navy mb-4">About the Author</h3>
                  <div className="flex items-center mb-4">
                    <img 
                      src="/lovable-uploads/381ae573-3196-4996-adc1-acbc78af6037.png" 
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
                </div>
                
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
