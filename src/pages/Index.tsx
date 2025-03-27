
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ConsultationButton from '../components/ConsultationButton';
import { Helmet } from 'react-helmet-async';

const Index = () => {
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
  
  return (
    <>
      <Helmet>
        <title>Muhammad Obaid - Trusted Lawyer in Kolkata & Howrah, India</title>
        <meta name="description" content="Muhammad Obaid provides expert legal representation at Calcutta High Court and trial courts across West Bengal. Book a consultation today!" />
        <link rel="canonical" href="https://advocate-obaid.vercel.app/" />
        <meta property="og:url" content="https://advocate-obaid.vercel.app/" />
        <script type="application/ld+json">
          {`
            {
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
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Legal Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Civil Litigation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Criminal Defense"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Arbitration & ADR"
                    }
                  }
                ]
              }
            }
          `}
        </script>
      </Helmet>
      
      {/* Hero Section - Added mt-16 to create proper spacing after navbar */}
      <section className="relative h-screen mt-16 flex items-center justify-center text-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-lawyer-navy bg-opacity-75"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Muhammad Obaid - Legal Solutions in Kolkata & Howrah
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Trusted legal representation at Calcutta High Court and district courts across West Bengal. Dedicated to excellence and committed to your success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <ConsultationButton />
            <Link to="/services" className="btn-secondary">
              Explore Legal Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <img 
                src="/lovable-uploads/381ae573-3196-4996-adc1-acbc78af6037.png" 
                alt="Muhammad Obaid, Advocate at Calcutta High Court" 
                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="md:w-1/2 opacity-0 reveal">
              <h2 className="section-title pb-3">About Me - Lawyer in Kolkata</h2>
              <p className="text-lg text-gray-700 mb-6">
                Welcome to Muhammad Obaid's legal practice. I am a dedicated and experienced lawyer practicing at the Calcutta High Court and district courts across West Bengal. With specialized expertise in civil and criminal matters, I provide personalized legal solutions tailored to each client's needs.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                As an advocate based in Kolkata and Howrah, I handle both civil and criminal matters with a focus on providing tailored legal solutions for each client. I also specialize in arbitration and facilitate the Alternate Dispute Resolution (ADR) process.
              </p>
              <Link to="/about" className="text-lawyer-navy font-medium inline-flex items-center group">
                Learn More About My Legal Practice
                <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Me Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 opacity-0 reveal">
            <h2 className="section-title inline-block pb-3 mb-4 after:left-1/2 after:-translate-x-1/2">Why Choose Me As Your Lawyer in Kolkata</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              With a commitment to excellence and a client-first approach, I provide legal services in Kolkata and Howrah that stand out.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Experienced Advocate",
                description: "Three years of practice at the Calcutta High Court, with a track record of successful cases across West Bengal.",
                delay: 100
              },
              {
                title: "Client-Focused Legal Services",
                description: "Your needs and objectives are my priority. I ensure personalized attention to every legal case in Kolkata and Howrah.",
                delay: 200
              },
              {
                title: "Specialized Legal Expertise",
                description: "Expert in civil and criminal matters, arbitration, and Alternative Dispute Resolution (ADR) across West Bengal courts.",
                delay: 300
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="glass-card text-center opacity-0 reveal"
                style={{ animationDelay: `${item.delay}ms` }}
              >
                <h3 className="text-xl font-bold text-lawyer-navy mb-4">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Preview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 opacity-0 reveal">
            <h2 className="section-title inline-block pb-3 mb-4 after:left-1/2 after:-translate-x-1/2">Legal Services in Kolkata & Howrah</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive legal solutions tailored to your specific needs across West Bengal courts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Civil Litigation",
                description: "Expert representation in all types of civil disputes and proceedings in Calcutta High Court and district courts."
              },
              {
                title: "Criminal Defense",
                description: "Strong defense strategies and representation in criminal cases with a focus on protecting your rights across West Bengal courts."
              },
              {
                title: "Arbitration & ADR",
                description: "Specialized services for resolving disputes outside the traditional court system in Kolkata and throughout West Bengal."
              }
            ].map((service, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 opacity-0 reveal">
                <h3 className="text-xl font-bold text-lawyer-navy mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <Link to="/services" className="text-lawyer-navy font-medium inline-flex items-center group">
                  Explore Legal Services 
                  <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center opacity-0 reveal">
            <p className="text-xl font-medium text-lawyer-navy mb-6">Need legal help in Kolkata or Howrah? Contact me today!</p>
            <ConsultationButton />
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 opacity-0 reveal">
            <h2 className="section-title inline-block pb-3 mb-4 after:left-1/2 after:-translate-x-1/2">Proudly Serving Clients in Kolkata & Howrah</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Providing legal representation at Hon'ble Calcutta High Court and learned trial courts across the state of West Bengal.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl p-8 opacity-0 reveal">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0 md:pr-6">
                <h3 className="text-xl font-bold text-lawyer-navy mb-4">Kolkata Chamber</h3>
                <p className="text-gray-700 mb-2">2ND FLOOR (BACK SIDE)</p>
                <p className="text-gray-700 mb-2">7A KIRAN SHANKAR ROY ROAD</p>
                <p className="text-gray-700 mb-6">KOLKATA, WEST BENGAL, PIN 700001</p>
                <p className="text-gray-700">Specializing in Calcutta High Court representation and civil litigation matters.</p>
              </div>
              <div className="pt-6 md:pt-0 md:pl-6">
                <h3 className="text-xl font-bold text-lawyer-navy mb-4">Howrah Chamber/Residence</h3>
                <p className="text-gray-700 mb-2">47 PILKHANA 3RD LANE</p>
                <p className="text-gray-700 mb-6">HOWRAH, WEST BENGAL, PIN 711101</p>
                <p className="text-gray-700">Providing legal services for local Howrah matters and district court cases.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
