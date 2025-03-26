
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" }
  ];
  
  return (
    <footer className="bg-lawyer-navy text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-6 md:space-y-0">
          <div className="max-w-sm">
            <h3 className="text-2xl font-playfair font-bold mb-3">Mohammad Obaid</h3>
            <p className="text-gray-300 mb-4">Trusted Legal Services in India</p>
            <p className="text-gray-300 text-sm">
              Providing expert legal counsel and representation at the Calcutta High Court.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-lawyer-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Contact</h4>
            <address className="not-italic text-gray-300 space-y-2">
              <p>Calcutta High Court</p>
              <p>Kolkata, West Bengal</p>
              <p>Email: obaidmu018@gmail.com</p>
              <p>Phone: +91-9123058260</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 mt-6">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} Mohammad Obaid | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
