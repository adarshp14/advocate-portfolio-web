
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ConsultationButtonProps {
  fullWidth?: boolean;
}

const ConsultationButton: React.FC<ConsultationButtonProps> = ({ fullWidth = false }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/contact');
    
    // Scroll to contact form if already on contact page
    if (window.location.pathname === '/contact') {
      const formElement = document.getElementById('contact-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  return (
    <button 
      onClick={handleClick}
      className={`btn-primary ${fullWidth ? 'w-full' : ''}`}
    >
      Book a Consultation
    </button>
  );
};

export default ConsultationButton;
