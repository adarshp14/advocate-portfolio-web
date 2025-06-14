
'use client'

import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';

interface ConsultationButtonProps {
  fullWidth?: boolean;
  customStyle?: string;
  variant?: 'primary' | 'prominent' | 'hero';
}

const ConsultationButton: React.FC<ConsultationButtonProps> = React.memo(({ 
  fullWidth = false, 
  customStyle,
  variant = 'primary'
}) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  
  const handleClick = useCallback(() => {
    router.push('/contact');
    
    // Scroll to contact form if already on contact page
    if (window.location.pathname === '/contact') {
      const formElement = document.getElementById('contact-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [router]);

  const getButtonClass = () => {
    if (customStyle) return customStyle;
    
    const baseClasses = `
      relative overflow-hidden font-semibold text-center transition-all duration-300 
      focus:outline-none focus:ring-4 focus:ring-lawyer-gold/50 focus:scale-105
      transform active:scale-95 group
      ${fullWidth ? 'w-full' : ''}
    `;
    
    switch (variant) {
      case 'hero':
        return `${baseClasses} 
          bg-gradient-to-r from-lawyer-gold to-amber-400 hover:from-amber-400 hover:to-lawyer-gold
          text-lawyer-navy px-8 py-4 rounded-lg text-lg font-bold
          shadow-xl hover:shadow-2xl border-2 border-lawyer-gold
          animate-pulse hover:animate-none`;
      case 'prominent':
        return `${baseClasses}
          bg-lawyer-gold hover:bg-amber-400 text-lawyer-navy px-7 py-3.5 rounded-lg
          shadow-lg hover:shadow-xl border border-lawyer-gold/20`;
      default:
        return `${baseClasses}
          bg-lawyer-navy hover:bg-blue-900 text-white px-6 py-3 rounded-md
          shadow-md hover:shadow-lg border border-lawyer-navy/20`;
    }
  };

  const getButtonText = () => {
    switch (variant) {
      case 'hero':
        return (
          <span className="flex items-center justify-center">
            <svg className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            Get FREE Legal Consultation
          </span>
        );
      case 'prominent':
        return (
          <span className="flex items-center justify-center">
            <svg className="w-4 h-4 mr-2 transition-transform group-hover:rotate-12" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Book Consultation Now
          </span>
        );
      default:
        return 'Book a Consultation';
    }
  };
  
  return (
    <button 
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={getButtonClass()}
      aria-label="Book a free legal consultation with Muhammad Obaid"
    >
      {/* Animated background effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
      
      {/* Button content */}
      <span className="relative z-10">
        {getButtonText()}
      </span>
      
      {/* Subtle pulse effect for hero variant */}
      {variant === 'hero' && (
        <span className="absolute inset-0 rounded-lg bg-lawyer-gold/30 animate-ping opacity-75"></span>
      )}
    </button>
  );
});

export default ConsultationButton;
