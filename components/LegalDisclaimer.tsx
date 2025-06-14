'use client'

import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const LegalDisclaimer: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    // Check if user has already accepted the disclaimer in this session
    const hasAccepted = sessionStorage.getItem('legalDisclaimerAccepted');
    if (!hasAccepted) {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    // Store acceptance in sessionStorage (clears when tab is closed)
    sessionStorage.setItem('legalDisclaimerAccepted', 'true');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-white border-2 border-lawyer-navy">
        <DialogHeader className="text-center pb-4">
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-lawyer-navy font-playfair mb-2">
              ADVOCATE MUHAMMAD OBAID
            </h1>
            <p className="text-sm text-lawyer-navy font-medium">
              LEGAL CONSULTANT
            </p>
          </div>
          <DialogTitle className="text-xl font-bold text-lawyer-navy">
            Legal Disclaimer
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 text-gray-700 legal-disclaimer-text">
          <p>
            The Bar Council of India does not permit advertisement or solicitation by advocates 
            in any form or manner. By accessing this website, you acknowledge and confirm that 
            you are seeking information relating to Advocate Muhammad Obaid's legal practice of your own 
            accord and that there has been no form of solicitation, advertisement or inducement 
            by Advocate Muhammad Obaid or his associates.
          </p>
          
          <p>
            The content of this website is for informational purposes only and should not be 
            interpreted as soliciting or advertisement. No material/information provided on this 
            website should be construed as legal advice. Advocate Muhammad Obaid shall not be liable for 
            consequences of any action taken by relying on the material/information provided on 
            this website.
          </p>
          
          <p>
            The contents of this website are the intellectual property of Advocate Muhammad Obaid. The 
            information provided herein is intended for general informational purposes and should 
            not be used as a substitute for consultation with professional legal advisors.
          </p>
          
          <p>
            By proceeding to access this website, you acknowledge that you have read and understood 
            this disclaimer and agree to be bound by its terms. If you do not agree with any part 
            of this disclaimer, please do not proceed to access the website.
          </p>
        </div>
        
        <div className="flex justify-center pt-6">
          <Button 
            onClick={handleAccept}
            className="bg-lawyer-navy hover:bg-lawyer-navy/90 text-white px-8 py-3 rounded-md font-medium transition-all duration-300"
          >
            I Agree
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LegalDisclaimer;