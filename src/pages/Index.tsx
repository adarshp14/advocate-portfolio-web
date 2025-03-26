
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ConsultationButton from '../components/ConsultationButton';

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
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1589994965851-a418e271b4cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
            backgroundPosition: 'center 65%'
          }}
        />
        <div className="absolute inset-0 bg-lawyer-navy bg-opacity-70"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Your Trusted Legal Partner in Kolkata, India
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Dedicated to excellence and committed to your success
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <ConsultationButton />
            <Link to="/services" className="btn-secondary">
              Explore Services
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
                alt="Mohammad Obaid, Advocate" 
                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="md:w-1/2 opacity-0 reveal">
              <h2 className="section-title pb-3">About Me</h2>
              <p className="text-lg text-gray-700 mb-6">
                I am Mohammad Obaid, a dedicated and experienced lawyer practicing at the Calcutta High Court. With a passion for justice and specialized expertise, I provide personalized legal solutions to my clients.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                As an experienced advocate, I handle both civil and criminal matters with a focus on providing tailored legal solutions for each client. I also specialize in arbitration and facilitate the Alternate Dispute Resolution (ADR) process.
              </p>
              <Link to="/about" className="text-lawyer-navy font-medium inline-flex items-center group">
                Learn More 
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
            <h2 className="section-title inline-block pb-3 mb-4 after:left-1/2 after:-translate-x-1/2">Why Choose Me?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              With a commitment to excellence and a client-first approach, I provide legal services that stand out.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Experienced Lawyer",
                description: "Three years of practice at the Calcutta High Court, with a track record of successful cases.",
                delay: 100
              },
              {
                title: "Client-Focused Approach",
                description: "Your needs and objectives are my priority. I ensure personalized attention to every case.",
                delay: 200
              },
              {
                title: "Specialized Expertise",
                description: "Expert in civil and criminal matters, arbitration, and Alternative Dispute Resolution (ADR).",
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
            <h2 className="section-title inline-block pb-3 mb-4 after:left-1/2 after:-translate-x-1/2">Legal Services Offered</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive legal solutions tailored to your specific needs and circumstances.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Civil Litigation",
                description: "Expert representation in all types of civil disputes and proceedings."
              },
              {
                title: "Criminal Defense",
                description: "Representation in criminal cases with a focus on protecting your rights."
              },
              {
                title: "Arbitration & ADR",
                description: "Specialized services for resolving disputes outside the traditional court system."
              }
            ].map((service, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 opacity-0 reveal">
                <h3 className="text-xl font-bold text-lawyer-navy mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <Link to="/services" className="text-lawyer-navy font-medium inline-flex items-center group">
                  Learn More 
                  <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center opacity-0 reveal">
            <p className="text-xl font-medium text-lawyer-navy mb-6">Need legal help? Contact me today!</p>
            <ConsultationButton />
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
