
'use client'

import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface ConsultationButtonProps {
  fullWidth?: boolean;
  customStyle?: string;
}

const ConsultationButton: React.FC<ConsultationButtonProps> = React.memo(({ 
  fullWidth = false, 
  customStyle 
}) => {
  const router = useRouter();
  
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
  
  return (
    <button 
      onClick={handleClick}
      className={`${customStyle || 'btn-primary'} ${fullWidth ? 'w-full' : ''}`}
    >
      Book a Consultation
    </button>
  );
});

export default ConsultationButton;
