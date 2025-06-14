'use client'

import React from 'react';
import Link from 'next/link';
import ConsultationButton from '@/components/ConsultationButton';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ServicesContent() {
  // Use custom hook for scroll animations
  useScrollAnimation();
  
  const services = [
    {
      id: 1,
      title: "Criminal Defense",
      description: "Representation in criminal cases with a focus on protecting your rights.",
      details: [
        "Handling all types of criminal cases from minor offenses to serious crimes",
        "Bail applications and anticipatory bail",
        "Trial representation and cross-examination of witnesses",
        "Building strong defense strategies",
        "Protection of fundamental rights during proceedings"
      ],
      image: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Family Law",
      description: "Expert advice on divorce, child custody, and alimony matters.",
      details: [
        "Divorce proceedings and mutual consent divorce",
        "Child custody, visitation rights, and support",
        "Alimony and maintenance disputes",
        "Domestic violence cases and protection",
        "Marriage registration and prenuptial agreements"
      ],
      image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Property Disputes",
      description: "Legal support for property-related conflicts and documentation.",
      details: [
        "Title disputes and ownership conflicts",
        "Landlord-tenant disputes",
        "Property registration and transfer issues",
        "Boundary disputes and encroachment matters",
        "Joint family property division"
      ],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Civil Litigation",
      description: "Representation in civil cases involving disputes between individuals and organizations.",
      details: [
        "Contract disputes and breaches",
        "Consumer complaints and protection",
        "Recovery of money and damages",
        "Injunctions and specific performance",
        "Appeals in civil matters"
      ],
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Corporate Law",
      description: "Legal support for businesses, from startups to established corporations.",
      details: [
        "Company incorporation and compliance",
        "Contract drafting and negotiations",
        "Mergers and acquisitions",
        "Corporate governance and advisory",
        "Business dispute resolution"
      ],
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Documentation",
      description: "Professional drafting and vetting of legal documents and agreements.",
      details: [
        "Drafting and review of contracts",
        "Will preparation and execution",
        "Power of Attorney documentation",
        "Affidavits and legal notices",
        "Partnership and shareholder agreements"
      ],
      image: "https://images.unsplash.com/photo-1556741533-411cf82e4e2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
            backgroundPosition: 'center 30%',
            height: '50%'
          }}
        />
        <div className="absolute inset-0 bg-lawyer-navy bg-opacity-70" style={{ height: '50%' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Legal Services Offered
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
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
                    alt={service.title}
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
              <ConsultationButton variant="prominent" />
              <Link href="/contact" className="btn-secondary">
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
              {[
                {
                  step: "Initial Consultation",
                  description: "We discuss your case in detail, assess the legal issues, and outline potential approaches.",
                  position: "left"
                },
                {
                  step: "Case Analysis",
                  description: "I conduct thorough research and analysis to understand all aspects of your legal situation.",
                  position: "right"
                },
                {
                  step: "Strategy Development",
                  description: "Together, we develop a tailored legal strategy that aligns with your goals and priorities.",
                  position: "left"
                },
                {
                  step: "Implementation",
                  description: "I execute the agreed strategy, handling all necessary documentation and representation.",
                  position: "right"
                },
                {
                  step: "Resolution",
                  description: "We work toward a favorable resolution, whether through negotiation, settlement, or court judgment.",
                  position: "left"
                }
              ].map((item, index) => (
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
}