
import React, { useEffect } from 'react';

const About = () => {
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
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1589994965851-a418e271b4cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
            backgroundPosition: 'center 30%',
            height: '50%'
          }}
        />
        <div className="absolute inset-0 bg-lawyer-navy bg-opacity-70" style={{ height: '50%' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            About Mohammad Obaid
          </h1>
          <div className="h-1 w-20 bg-lawyer-gold mx-auto mb-12"></div>
        </div>
      </section>
      
      {/* About Content */}
      <section className="py-12 pb-24 -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              {/* Profile Image Section */}
              <div className="md:w-1/3 bg-lawyer-navy p-8 flex flex-col justify-center items-center text-center">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Mohammad Obaid" 
                  className="w-48 h-48 rounded-full object-cover border-4 border-white mb-6"
                />
                <h3 className="text-white text-xl font-bold mb-2">Mohammad Obaid</h3>
                <p className="text-gray-300 mb-4">Advocate & Legal Consultant</p>
                <div className="bg-white/10 rounded-lg p-4 w-full">
                  <h4 className="text-white font-medium mb-2">Contact Information</h4>
                  <div className="text-gray-300 text-sm space-y-1">
                    <p>Calcutta High Court</p>
                    <p>Kolkata, West Bengal</p>
                    <p>obaidmu018@gmail.com</p>
                    <p>+91-9123058260</p>
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="md:w-2/3 p-8 md:p-12">
                <div className="mb-10 opacity-0 reveal">
                  <h2 className="section-title pb-3">Professional Background</h2>
                  <p className="text-gray-700 mb-4">
                    As an experienced advocate, I handle both civil and criminal matters with a focus on providing tailored legal solutions for each client. I also specialize in arbitration and facilitate the Alternate Dispute Resolution (ADR) process, offering efficient and effective methods for resolving disputes outside the courtroom.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Having practiced law at the Hon'ble High Court at Calcutta for the past three years, I have built a strong reputation for my commitment to achieving the best outcomes through diligent advocacy and expert legal advice.
                  </p>
                  <p className="text-gray-700">
                    Whether you're facing a civil case, criminal charges, arbitration proceedings, or seeking ADR options, I am here to provide you with comprehensive, professional legal support.
                  </p>
                </div>
                
                <div className="mb-10 opacity-0 reveal">
                  <h2 className="section-title pb-3">Education & Credentials</h2>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-lawyer-navy mb-2">Advocate Certificate</h3>
                    <p className="text-gray-600">Bar Council of India, 2023</p>
                    <div className="mt-4 border rounded-lg p-2 shadow-sm max-w-lg mx-auto md:mx-0">
                      <img 
                        src="/lovable-uploads/4e94bb51-40a2-456b-8dfd-8eeb8f380002.png" 
                        alt="Mohammad Obaid's Certificate of Practice" 
                        className="w-full rounded"
                      />
                      <p className="text-sm text-gray-500 mt-2 text-center">Certificate of Practice - Enrollment No. F/1220/867/2022</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-lawyer-navy mb-2">Bar Council Registration</h3>
                    <p className="text-gray-600">Bar Council of India, 2023</p>
                    <p className="text-gray-700 mt-2">
                      Registered advocate with the Bar Council of India, authorized to practice law across India. Successfully qualified in the All India Bar Examination-XVII.
                    </p>
                  </div>
                </div>
                
                <div className="opacity-0 reveal">
                  <h2 className="section-title pb-3">Professional Philosophy</h2>
                  <p className="text-gray-700 mb-4">
                    I believe in justice and fairness for all. Throughout my career, I have worked with clients from diverse backgrounds, always maintaining the highest standards of professionalism and ethics.
                  </p>
                  <p className="text-gray-700">
                    My goal is to demystify the legal process for my clients, providing clear communication and transparent guidance at every step. I am committed to offering realistic assessments and practical solutions that serve my clients' best interests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 opacity-0 reveal">
            <h2 className="section-title inline-block pb-3 mb-4 after:left-1/2 after:-translate-x-1/2">Areas of Expertise</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              With extensive experience across multiple legal domains, I offer comprehensive representation for a variety of cases.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                area: "Civil Litigation",
                details: "Handling contract disputes, property matters, and consumer rights cases."
              },
              {
                area: "Criminal Defense",
                details: "Representing clients in criminal proceedings with a focus on due process and rights protection."
              },
              {
                area: "Family Law",
                details: "Managing divorce, child custody, alimony, and domestic relations cases with sensitivity."
              },
              {
                area: "Arbitration",
                details: "Providing specialized arbitration services to help resolve disputes outside the traditional court system."
              },
              {
                area: "Alternative Dispute Resolution",
                details: "Facilitating efficient and cost-effective dispute resolution through mediation and negotiation."
              },
              {
                area: "Constitutional Law",
                details: "Addressing matters related to fundamental rights and constitutional provisions."
              }
            ].map((expertise, index) => (
              <div key={index} className="glass-card opacity-0 reveal">
                <h3 className="text-xl font-bold text-lawyer-navy mb-3">{expertise.area}</h3>
                <p className="text-gray-700">{expertise.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
