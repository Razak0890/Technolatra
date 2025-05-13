import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'py-3 shadow-lg' : 'py-5'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <div className="text-white font-extrabold text-2xl flex items-center">
            <span className="text-accent">Techno</span>latra
          </div>
        </a>
        
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-white opacity-80 hover:opacity-100 hover:text-accent-light transition-all">Features</a>
          <a href="#applications" className="text-white opacity-80 hover:opacity-100 hover:text-accent-light transition-all">Applications</a>
          <a href="#testimonials" className="text-white opacity-80 hover:opacity-100 hover:text-accent-light transition-all">Testimonials</a>
          <a href="#contact" className="text-white opacity-80 hover:opacity-100 hover:text-accent-light transition-all">Contact</a>
        </div>
        
        <a href="#contact" className="hidden md:block cta-button text-sm">
          Get Started
        </a>

        <div className="md:hidden">
          <button className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
