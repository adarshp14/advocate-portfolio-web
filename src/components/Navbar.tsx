
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ConsultationButton from './ConsultationButton';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
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

  // Check if current path is blog or blog post
  const isBlogPath = location.pathname === '/blog' || location.pathname.startsWith('/blog/');
  
  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled || isBlogPath ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <NavLink to="/" className="block">
              <div className={`font-playfair ${isBlogPath || isScrolled ? 'text-lawyer-navy' : 'text-white'}`}>
                <h1 className="text-xl md:text-2xl font-bold">Muhammad Obaid</h1>
                <p className="text-xs md:text-sm text-lawyer-muted">Advocate & Legal Consultant</p>
              </div>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => 
                  `nav-link ${isActive || (link.path === '/blog' && location.pathname.startsWith('/blog/')) 
                    ? 'active' 
                    : ''} ${isBlogPath || isScrolled ? 'text-gray-800' : 'text-white'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <ConsultationButton />
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden ${isBlogPath || isScrolled ? 'text-lawyer-navy' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 bg-white shadow-lg rounded-md mt-2 animate-fade-in">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => 
                      `nav-link block py-2 px-4 ${isActive || (link.path === '/blog' && location.pathname.startsWith('/blog/'))
                        ? 'active' 
                        : ''}`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <li className="pt-2 px-4">
                <ConsultationButton fullWidth />
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
