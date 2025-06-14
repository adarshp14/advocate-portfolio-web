'use client'

import React, { useState, useCallback, useMemo } from 'react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
import GoogleMap from '@/components/GoogleMap';
import OptimizedImage from '@/components/OptimizedImage';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

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

export default function ContactContent() {
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
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_6managk',
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_f5yju3b',
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'yo0m4VAbhpETK_JGa'
  }), []);
  
  const googleMapsApiKey = useMemo(() => 
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'AIzaSyCNP5jo8FG21OsiqfEgSGEtLcGuWueD6uE',
    []
  );
  
  // Validation functions
  const validateField = useCallback((name: string, value: string) => {
    let error = '';
    
    switch (name) {
      case 'name':
        if (!value.trim()) {
          error = 'Name is required';
        } else if (value.trim().length < 2) {
          error = 'Name must be at least 2 characters';
        }
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value.trim())) {
          error = 'Please enter a valid email address';
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

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Real-time validation
    const error = validateField(name, value);
    setFormErrors(prev => ({
      ...prev,
      [name]: error
    }));
  }, [validateField]);
  
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting
    const currentTime = Date.now();
    if (currentTime - lastSubmissionTime < 30000) {
      toast.error('Please wait 30 seconds before submitting again.');
      return;
    }
    
    // Validate all fields
    const errors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      phone: '',
      message: validateField('message', formData.message)
    };
    
    setFormErrors(errors);
    
    if (Object.values(errors).some(error => error !== '')) {
      toast.error('Please fix the errors in the form before submitting.');
      return;
    }
    
    setIsSubmitting(true);
    setLastSubmissionTime(currentTime);
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      message: formData.message,
      to_name: 'Muhammad Obaid'
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
      .catch(() => {
        toast.error('Failed to send your message. Please try again later.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }, [formData, lastSubmissionTime, validateField, emailjsConfig]);
  
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop')",
            backgroundPosition: 'center 30%',
            height: '50%'
          }}
        />
        <div className="absolute inset-0 bg-lawyer-navy bg-opacity-70" style={{ height: '50%' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 animate-fade-in">
            Get in Touch
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
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
                  
                  <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
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
                      />
                      {formErrors.name && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>
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
                        className={`form-input ${
                          formErrors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="Your email address"
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
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
                        className="form-input"
                        placeholder="Your phone number"
                      />
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
                        className={`form-input ${
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
                        {isSubmitting ? 'Sending...' : 'Submit Message'}
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
}