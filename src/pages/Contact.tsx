
import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import emailjs from 'emailjs-com';
import GoogleMap from '../components/GoogleMap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const googleMapsApiKey = 'AIzaSyCNP5jo8FG21OsiqfEgSGEtLcGuWueD6uE';
  
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
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Current timestamp for the email
    const currentTime = new Date().toLocaleString();
    
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
                  <div style="color: #cccccc; font-size: 13px">${currentTime}</div>
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
      'service_6managk',
      'template_f5yju3b',
      templateParams,
      'yo0m4VAbhpETK_JGa'
    )
      .then(() => {
        toast.success('Your message has been sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        toast.error('Failed to send your message. Please try again later.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
            backgroundPosition: 'center 30%',
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
                  <img 
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Legal consultation" 
                    className="rounded-lg shadow-lg"
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lawyer-navy focus:border-transparent"
                        placeholder="Your full name"
                      />
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lawyer-navy focus:border-transparent"
                        placeholder="Your email address"
                      />
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lawyer-navy focus:border-transparent"
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lawyer-navy focus:border-transparent"
                        placeholder="Please describe your legal concerns or questions"
                      ></textarea>
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
