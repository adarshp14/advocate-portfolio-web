'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import ConsultationButton from './ConsultationButton';

interface NavLinkItem {
  name: string;
  path: string;
}

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const navLinks: NavLinkItem[] = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" }
  ];

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);
  
  return (
    <header className="fixed top-0 w-full z-50 bg-lawyer-navy shadow-[0_2px_4px_rgba(0,0,0,0.1)]" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="block" aria-label="Go to homepage">
              <div className="font-playfair text-white">
                <h1 className="text-xl md:text-2xl font-bold">Muhammad Obaid</h1>
                <p className="text-xs md:text-sm text-white/80">Advocate & Legal Consultant</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`nav-link text-white ${pathname === link.path ? 'active' : ''}`}
                aria-current={pathname === link.path ? 'page' : undefined}
              >
                {link.name}
              </Link>
            ))}
            <ConsultationButton />
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none focus:ring-2 focus:ring-lawyer-gold"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden pt-4">
            <div className="border-t border-white/20 pt-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`block text-white py-2 border-b border-white/10 ${
                    pathname === link.path ? 'font-semibold text-lawyer-gold' : 'hover:text-lawyer-gold'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-current={pathname === link.path ? 'page' : undefined}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2">
                <ConsultationButton />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;