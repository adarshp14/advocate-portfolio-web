
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ConsultationButton from '../components/ConsultationButton';
import OptimizedImage from '../components/OptimizedImage';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { services, legalProcessSteps } from '../data/services';

const Services: React.FC = () => {
  // Use custom hook for scroll animations
  useScrollAnimation();
  
  return (
    <>
      <Helmet>
        <title>Legal Services in Kolkata & Howrah - Muhammad Obaid Advocate</title>
        <meta name="description" content="Comprehensive legal services by Muhammad Obaid in Kolkata & Howrah. Civil litigation, criminal defense, family law, property disputes, corporate law, and document drafting. Expert representation at Calcutta High Court." />
        <meta name="keywords" content="legal services Kolkata, lawyer services Howrah, civil litigation Kolkata, criminal defense attorney, family law lawyer West Bengal, property dispute lawyer, corporate law services Kolkata, legal documentation services" />
        <meta name="author" content="Muhammad Obaid" />
        <link rel="canonical" href="https://advocate-obaid.vercel.app/services" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Legal Services in Kolkata & Howrah - Muhammad Obaid Advocate" />
        <meta property="og:description" content="Comprehensive legal services including civil litigation, criminal defense, family law, and property disputes. Expert representation at Calcutta High Court." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://advocate-obaid.vercel.app/services" />
        <meta property="og:image" content="https://advocate-obaid.vercel.app/lovable-uploads/381ae573-3196-4996-adc1-acbc78af6037.png" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ObaidAdvocate" />
        <meta name="twitter:title" content="Legal Services in Kolkata & Howrah - Muhammad Obaid Advocate" />
        <meta name="twitter:description" content="Comprehensive legal services including civil litigation, criminal defense, family law, and property disputes. Expert representation at Calcutta High Court." />
        <meta name="twitter:image" content="https://advocate-obaid.vercel.app/lovable-uploads/381ae573-3196-4996-adc1-acbc78af6037.png" />
        
        {/* Structured Data for Service */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Legal Services",
              "description": "Comprehensive legal services including civil litigation, criminal defense, family law, property disputes, corporate law, and legal documentation",
              "provider": {
                "@type": "LegalService",
                "name": "Muhammad Obaid Legal Practice",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "7A Kiran Shankar Roy Road",
                  "addressLocality": "Kolkata",
                  "addressRegion": "West Bengal",
                  "postalCode": "700001",
                  "addressCountry": "India"
                },
                "telephone": "+91-9123058260",
                "email": "obaidmu018@gmail.com"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Kolkata"
                },
                {
                  "@type": "City", 
                  "name": "Howrah"
                },
                {
                  "@type": "State",
                  "name": "West Bengal"
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Legal Services Catalog",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Civil Litigation",
                      "description": "Expert representation in civil cases including contract disputes, property matters, and consumer rights"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Criminal Defense",
                      "description": "Professional representation in criminal proceedings with focus on client rights protection"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Family Law",
                      "description": "Expert advice on divorce, child custody, alimony, and domestic relations matters"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Property Disputes",
                      "description": "Legal support for property-related conflicts, title disputes, and documentation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Corporate Law",
                      "description": "Legal support for businesses from startups to established corporations"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Legal Documentation",
                      "description": "Professional drafting and vetting of legal documents and agreements"
                    }
                  }
                ]
              }
            }
          `}
        </script>
        
        {/* FAQ Schema for Common Legal Questions */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What legal services do you offer in Kolkata and Howrah?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "I offer comprehensive legal services including civil litigation, criminal defense, family law, property disputes, corporate law, and legal documentation. I practice at Calcutta High Court and district courts across West Bengal."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much do legal services cost in Kolkata?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Legal service fees vary depending on the complexity of the case, court level, and time required. I offer transparent pricing and will discuss fees during our initial consultation based on your specific legal needs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you handle cases outside Kolkata and Howrah?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, I handle cases throughout West Bengal, including representation at the Calcutta High Court and various district courts across the state."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What languages do you speak for legal consultation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "I provide legal consultation and services in English, Hindi, and Bengali, ensuring clear communication with clients from diverse backgrounds."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I schedule a consultation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can schedule a consultation by calling +91-9123058260, emailing obaidmu018@gmail.com, or using the contact form on this website. I offer both in-person meetings at my Kolkata and Howrah chambers."
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop')",
            backgroundPosition: 'center 30%',
            height: '50%'
          }}
        />
        <div className="absolute inset-0 bg-lawyer-navy bg-opacity-70" style={{ height: '50%' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 animate-fade-in">
            Legal Services Offered
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Comprehensive legal solutions tailored to protect your rights and interests
          </p>
          <div className="h-1 w-20 bg-lawyer-gold mx-auto mb-12"></div>
        </div>
      </section>
      
      {/* Services List */}
      <section className="py-16 -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden opacity-0 reveal"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={`${service.title} legal services provided by Muhammad Obaid in Kolkata and Howrah`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-lawyer-navy mb-2">{service.title}</h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1">
                    {service.details.map((detail, i) => (
                      <li key={i} className="text-sm">{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-lawyer-navy rounded-lg shadow-xl p-8 md:p-12 text-center opacity-0 reveal">
            <h2 className="text-3xl font-bold text-white mb-6">Need legal help? Contact me today!</h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-8">
              Whether you're facing a complex legal challenge or simply need advice, I'm here to help you navigate the legal system with confidence.
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
      
      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 opacity-0 reveal">
            <h2 className="section-title inline-block pb-3 mb-4 after:left-1/2 after:-translate-x-1/2">My Legal Process</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              I follow a structured approach to ensure that all aspects of your case are handled with care and precision.
            </p>
          </div>
          
          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
            
            <div className="space-y-12 md:space-y-0">
              {legalProcessSteps.map((item, index) => (
                <div key={index} className="relative md:flex items-center opacity-0 reveal">
                  <div className={`md:w-1/2 ${item.position === 'right' ? 'md:ml-auto' : ''} mb-8 md:mb-0 ${item.position === 'right' ? 'md:pl-16' : 'md:pr-16'}`}>
                    <div className="glass-card">
                      <h3 className="text-xl font-bold text-lawyer-navy mb-2">Step {index + 1}: {item.step}</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-lawyer-navy text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
