
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { toast } from 'sonner';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';
import GoogleMap from '../components/GoogleMap';
import OptimizedImage from '../components/OptimizedImage';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number>(0);
  
  // Use custom hook for scroll animations
  useScrollAnimation();
  
  // Memoize environment variables with fallbacks
  const emailjsConfig = useMemo(() => ({
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_6managk',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_f5yju3b',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'yo0m4VAbhpETK_JGa'
  }), []);
  
  const googleMapsApiKey = useMemo(() => 
    import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'AIzaSyCNP5jo8FG21OsiqfEgSGEtLcGuWueD6uE',
    []
  );
  
  
  // Memoized validation functions
  const validateField = useCallback((name: string, value: string) => {
    let error = '';
    
    switch (name) {
      case 'name':
        if (!value.trim()) {
          error = 'Name is required';
        } else if (value.trim().length < 2) {
          error = 'Name must be at least 2 characters';
        } else if (!/^[a-zA-Z\s]+$/.test(value.trim())) {
          error = 'Name can only contain letters and spaces';
        }
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          error = 'Please enter a valid email address';
        }
        break;
      case 'phone':
        if (value.trim() && !/^[\d\s\-\+\(\)]+$/.test(value.trim())) {
          error = 'Please enter a valid phone number';
        }
        break;
      case 'message':
        if (!value.trim()) {
          error = 'Message is required';
        } else if (value.trim().length < 10) {
          error = 'Message must be at least 10 characters';
        }
        break;
    }
    
    return error;
  }, []);

  const sanitizeInput = useCallback((value: string) => {
    // Basic HTML sanitization
    return value.replace(/<[^>]*>/g, '').trim();
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
    
    // Real-time validation
    const error = validateField(name, sanitizedValue);
    setFormErrors(prev => ({
      ...prev,
      [name]: error
    }));
  }, [sanitizeInput, validateField]);
  
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting - prevent submissions within 30 seconds
    const currentTime = Date.now();
    if (currentTime - lastSubmissionTime < 30000) {
      toast.error('Please wait 30 seconds before submitting again.');
      return;
    }
    
    // Validate all fields
    const errors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      message: validateField('message', formData.message)
    };
    
    setFormErrors(errors);
    
    // Check if there are any errors
    if (Object.values(errors).some(error => error !== '')) {
      toast.error('Please fix the errors in the form before submitting.');
      return;
    }
    
    setIsSubmitting(true);
    setLastSubmissionTime(currentTime);
    
    // Current timestamp for the email
    const emailTimestamp = new Date().toLocaleString();
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      message: formData.message,
      to_name: 'Muhammad Obaid',
      time: currentTime,
      // Include HTML template
      html_content: `
        <div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
          <div>A message by ${formData.name} has been received. Kindly respond at your earliest convenience.</div>
          <div
            style="
              margin-top: 20px;
              padding: 15px 0;
              border-width: 1px 0;
              border-style: dashed;
              border-color: lightgrey;
            "
          >
            <table role="presentation">
              <tr>
                <td style="vertical-align: top">
                  <div
                    style="
                      padding: 6px 10px;
                      margin: 0 10px;
                      background-color: aliceblue;
                      border-radius: 5px;
                      font-size: 26px;
                    "
                    role="img"
                  >
                    &#x1F464;
                  </div>
                </td>
                <td style="vertical-align: top">
                  <div style="color: #2c3e50; font-size: 16px">
                    <strong>${formData.name}</strong>
                  </div>
                  <div style="color: #cccccc; font-size: 13px">${emailTimestamp}</div>
                  <p style="font-size: 16px">${formData.message}</p>
                  <p style="font-size: 14px"><strong>Email:</strong> ${formData.email}</p>
                  <p style="font-size: 14px"><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
                </td>
              </tr>
            </table>
          </div>
        </div>
      `
    };
    
    emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      templateParams,
      emailjsConfig.publicKey
    )
      .then(() => {
        toast.success('Your message has been sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setFormErrors({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      })
      .catch((error) => {
        // Handle email sending error with user-friendly message
        toast.error('Failed to send your message. Please try again later.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }, [formData, lastSubmissionTime, validateField, emailjsConfig]);
  
  return (
    <>
      <Helmet>
        <title>Contact Muhammad Obaid - Lawyer in Kolkata & Howrah | Book Consultation</title>
        <meta name="description" content="Contact Muhammad Obaid, experienced advocate in Kolkata & Howrah. Book a legal consultation today. Office at Calcutta High Court and Howrah. Call +91-9123058260 or email obaidmu018@gmail.com for professional legal services." />
        <meta name="keywords" content="contact lawyer Kolkata, legal consultation Howrah, book appointment advocate, Muhammad Obaid contact, Calcutta High Court lawyer contact, legal services appointment Kolkata, West Bengal lawyer consultation" />
        <meta name="author" content="Muhammad Obaid" />
        <link rel="canonical" href="https://advocate-obaid.vercel.app/contact" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Contact Muhammad Obaid - Lawyer in Kolkata & Howrah | Book Consultation" />
        <meta property="og:description" content="Contact Muhammad Obaid for legal consultation in Kolkata & Howrah. Expert legal services at Calcutta High Court and district courts across West Bengal." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://advocate-obaid.vercel.app/contact" />
        <meta property="og:image" content="https://advocate-obaid.vercel.app/lovable-uploads/381ae573-3196-4996-adc1-acbc78af6037.png" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ObaidAdvocate" />
        <meta name="twitter:title" content="Contact Muhammad Obaid - Lawyer in Kolkata & Howrah | Book Consultation" />
        <meta name="twitter:description" content="Contact Muhammad Obaid for legal consultation in Kolkata & Howrah. Expert legal services at Calcutta High Court and district courts across West Bengal." />
        <meta name="twitter:image" content="https://advocate-obaid.vercel.app/lovable-uploads/381ae573-3196-4996-adc1-acbc78af6037.png" />
        
        {/* Structured Data for ContactPage */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact Muhammad Obaid - Legal Services",
              "description": "Contact page for Muhammad Obaid Legal Practice in Kolkata and Howrah",
              "url": "https://advocate-obaid.vercel.app/contact",
              "mainEntity": {
                "@type": "LegalService",
                "name": "Muhammad Obaid Legal Practice",
                "address": [
                  {
                    "@type": "PostalAddress",
                    "name": "Kolkata Chamber",
                    "streetAddress": "2nd Floor (Back Side), 7A Kiran Shankar Roy Road",
                    "addressLocality": "Kolkata",
                    "addressRegion": "West Bengal",
                    "postalCode": "700001",
                    "addressCountry": "India"
                  },
                  {
                    "@type": "PostalAddress",
                    "name": "Howrah Chamber/Residence",
                    "streetAddress": "47 Pilkhana 3rd Lane",
                    "addressLocality": "Howrah",
                    "addressRegion": "West Bengal", 
                    "postalCode": "711101",
                    "addressCountry": "India"
                  }
                ],
                "telephone": "+91-9123058260",
                "email": "obaidmu018@gmail.com",
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "09:00",
                    "closes": "18:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Saturday",
                    "opens": "10:00",
                    "closes": "14:00"
                  }
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-9123058260",
                  "contactType": "Legal Services",
                  "availableLanguage": ["English", "Hindi", "Bengali"],
                  "areaServed": ["Kolkata", "Howrah", "West Bengal"]
                }
              }
            }
          `}
        </script>
      </Helmet>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-lawyer-navy via-slate-800 to-gray-700" 
          style={{ 
            height: '50%'
          }}
        />
        <div className="absolute inset-0 bg-lawyer-navy bg-opacity-70" style={{ height: '50%' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Get in Touch
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Ready to discuss your legal needs? Reach out to schedule a consultation.
          </p>
          <div className="h-1 w-20 bg-lawyer-gold mx-auto mb-12"></div>
        </div>
      </section>
      
      <section className="py-16 -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/5 bg-lawyer-navy p-8 md:p-12">
                <div className="opacity-0 reveal">
                  <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                  <div className="space-y-6 text-gray-300">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Chambers/Offices</h3>
                      <div className="mb-4">
                        <p className="font-medium text-lawyer-gold mb-1">Kolkata Chamber:</p>
                        <p>2ND FLOOR (BACK SIDE),</p>
                        <p>7A KIRAN SHANKAR ROY ROAD</p>
                        <p>KOLKATA, WEST BENGAL, PIN 700001</p>
                      </div>
                      <div>
                        <p className="font-medium text-lawyer-gold mb-1">Howrah Chamber/Residence:</p>
                        <p>47 PILKHANA 3RD LANE,</p>
                        <p>HOWRAH, WEST BENGAL, PIN 711101</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                      <p>obaidmu018@gmail.com</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                      <p>+91-9123058260</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Office Hours</h3>
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 opacity-0 reveal">
                  <OptimizedImage 
                    src="/lovable-uploads/381ae573-3196-4996-adc1-acbc78af6037.png" 
                    alt="Professional legal consultation with Muhammad Obaid in Kolkata" 
                    className="rounded-lg shadow-lg w-full h-auto"
                    aspectRatio="4/3"
                  />
                </div>
              </div>
              
              <div className="md:w-3/5 p-8 md:p-12">
                <div className="opacity-0 reveal">
                  <h2 className="section-title pb-3 mb-6">Send a Message</h2>
                  <p className="text-gray-700 mb-8">
                    Please fill out the form below to get in touch. I'll respond to your inquiry as soon as possible.
                  </p>
                  
                  <form id="contact-form" onSubmit={handleSubmit} className="space-y-6" noValidate role="form" aria-label="Contact form">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`form-input ${
                          formErrors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="Your full name"
                        aria-required="true"
                        aria-invalid={!!formErrors.name}
                        aria-describedby={formErrors.name ? "name-error" : undefined}
                      />
                      {formErrors.name && (
                        <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">{formErrors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lawyer-navy focus:ring-offset-2 focus:border-transparent transition-colors duration-200 ${
                          formErrors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="Your email address"
                        aria-required="true"
                        aria-invalid={!!formErrors.email}
                        aria-describedby={formErrors.email ? "email-error" : undefined}
                      />
                      {formErrors.email && (
                        <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">{formErrors.email}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lawyer-navy focus:ring-offset-2 focus:border-transparent transition-colors duration-200 ${
                          formErrors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="Your phone number"
                      />
                      {formErrors.phone && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.phone}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lawyer-navy focus:ring-offset-2 focus:border-transparent transition-colors duration-200 ${
                          formErrors.message ? 'border-red-500 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="Please describe your legal concerns or questions"
                      ></textarea>
                      {formErrors.message && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn-primary flex justify-center items-center"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : 'Submit Message'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="opacity-0 reveal">
            <h2 className="section-title pb-3 mb-8">Our Location</h2>
            
            <div className="overflow-hidden rounded-lg shadow-lg h-96">
              <GoogleMap 
                address="Calcutta High Court, Kolkata, West Bengal, India" 
                apiKey={googleMapsApiKey}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
