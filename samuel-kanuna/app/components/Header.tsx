// app/components/Header.tsx
"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu open/close
  const [isSticky, setIsSticky] = useState(false); // State for sticky header

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Inline SVG for Hamburger Icon
  const Bars3Icon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );

  // Inline SVG for X Mark Icon
  const XMarkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Packages', href: '#packages' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'FAQs', href: '#faqs' },
  ];

  return (
    <nav
      className={`
        ${isSticky ? 'fixed top-0 left-0 w-full z-50 py-2 shadow-lg backdrop-blur-sm bg-opacity-95' : 'py-4 shadow-md'}
        bg-base-100 text-purple-700 transition-all duration-300
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        {/* Brand/Logo */}
        <Link href="/" className="flex-shrink-0 text-primary hover:text-primary-focus transition-colors duration-200">
          <span className="text-2xl lg:text-3xl font-extrabold">
            Samuel Kanuna
          </span>
        </Link>

        {/* Desktop Navigation Links - Row Form on Large Screens */}
        <div className="hidden md:flex items-center gap-8 text-sm lg:text-base font-medium">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="hover:text-accent transition duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Action Button */}
        <div className="hidden md:flex items-center">
          <Link href="#contact">
            <button className="border border-primary text-primary px-5 py-2 rounded-full hover:bg-primary hover:text-white transition duration-300 font-semibold">
              Get in touch
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none text-gray-700"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isMenuOpen ? <XMarkIcon /> : <Bars3Icon />}
        </button>
      </div>

      {/* Mobile Menu - Column Form on Small Screens */}
      {isMenuOpen && (
        <div className="md:hidden bg-base-100 text-gray-800 px-6 py-6 space-y-5 transition-all duration-300 border-t border-gray-200">
          <div className="space-y-3 text-lg font-medium">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
                className="block hover:bg-gray-100 px-3 py-2 rounded transition duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="border-t border-gray-300 pt-4">
            <Link href="#contact">
              <button
                className="w-full border border-primary text-primary py-2 rounded-full hover:bg-primary hover:text-white transition duration-300 font-semibold"
                onClick={() => setIsMenuOpen(false)} // Close menu on button click
              >
                Get in touch
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;