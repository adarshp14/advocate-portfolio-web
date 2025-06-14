import React from 'react';
import Link from 'next/link';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface FooterLink {
  name: string;
  path: string;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks: FooterLink[] = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ];
  
  return (
    <footer className="bg-lawyer-navy text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-6 md:space-y-0">
          <div className="max-w-sm flex flex-col md:flex-row items-center md:items-start gap-4">
            <Avatar className="w-16 h-16 border-2 border-white">
              <AvatarImage src="/lovable-uploads/381ae573-3196-4996-adc1-acbc78af6037.png" alt="Muhammad Obaid" />
              <AvatarFallback>MO</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-2xl font-playfair font-bold mb-3">Muhammad Obaid</h3>
              <p className="text-gray-300 mb-4">Trusted Legal Services in India</p>
              <p className="text-gray-300 text-sm">
                Providing representation at Hon'ble Calcutta High Court and learned trial courts across the state of West Bengal.
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.path}
                    className="text-gray-300 hover:text-lawyer-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Contact Information</h4>
            <div className="space-y-2 text-gray-300">
              <p>
                <strong>Phone:</strong>{' '}
                <a href="tel:+919123058260" className="hover:text-lawyer-gold transition-colors">
                  +91-9123058260
                </a>
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:obaidmu018@gmail.com" className="hover:text-lawyer-gold transition-colors">
                  obaidmu018@gmail.com
                </a>
              </p>
              <p className="text-sm">
                <strong>Kolkata Chamber:</strong><br />
                7A Kiran Shankar Roy Road, Kolkata, WB 700001
              </p>
              <p className="text-sm">
                <strong>Howrah Chamber:</strong><br />
                47 Pilkhana 3rd Lane, Howrah, WB 711101
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-300">
              © {currentYear} Muhammad Obaid. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-300 hover:text-lawyer-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-lawyer-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;