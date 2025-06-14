
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ConsultationButton from './ConsultationButton';

interface NavLinkItem {
  name: string;
  path: string;
}

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  const navLinks: NavLinkItem[] = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ];

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  
  return (
    <header className="fixed top-0 w-full z-50 bg-lawyer-navy shadow-[0_2px_4px_rgba(0,0,0,0.1)]" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <NavLink to="/" className="block" aria-label="Go to homepage">
              <div className="font-playfair text-white">
                <h1 className="text-xl md:text-2xl font-bold">Muhammad Obaid</h1>
                <p className="text-xs md:text-sm text-white/80">Advocate & Legal Consultant</p>
              </div>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => 
                  `nav-link text-white ${isActive ? 'active' : ''}`
                }
                aria-current={({ isActive }) => isActive ? 'page' : undefined}
              >
                {link.name}
              </NavLink>
            ))}
            <ConsultationButton customStyle="bg-lawyer-gold text-lawyer-navy px-4 py-2 rounded" />
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav id="mobile-menu" className="py-4 bg-lawyer-navy rounded-md mt-2" role="navigation" aria-label="Mobile navigation">
            <ul className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <li 
                  key={link.name}
                  className={`transform transition-all duration-300 ${
                    isMobileMenuOpen 
                      ? 'translate-x-0 opacity-100' 
                      : 'translate-x-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => 
                      `nav-link block py-3 px-4 text-white rounded-md mx-2 transition-colors duration-200 hover:bg-white/10 ${isActive ? 'active bg-white/20' : ''}`
                    }
                    aria-current={({ isActive }) => isActive ? 'page' : undefined}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <li className={`pt-2 px-4 transform transition-all duration-300 ${
                isMobileMenuOpen 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-4 opacity-0'
              }`} style={{ transitionDelay: `${navLinks.length * 50}ms` }}>
                <ConsultationButton customStyle="bg-lawyer-gold text-lawyer-navy w-full px-4 py-2.5 rounded-md font-medium transition-all duration-200 hover:bg-lawyer-gold/90" fullWidth />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
