// app/components/Footer.tsx
import Link from 'next/link'; // Import Link for the website link
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded-none"> {/* Removed rounded for full width */}
      <aside className="space-y-2 text-center"> {/* Added space-y for vertical spacing */}
        {/* Copyright Information */}
        <p className="text-lg font-medium text-gray-100">
          © {new Date().getFullYear()} Samuel Kanuna. All rights reserved.
        </p>

        {/* Location Information */}
        <p className="text-md text-gray-100">
          Based in Nairobi, Kenya
        </p>

        {/* Crafted By Link */}
        <p className="text-sm text-gray-100">
          Crafted with passion by{' '}
          <Link
            href="https://simon-keya.vercel.app" // Replace with Simon Keya's actual website
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security best practice for target="_blank"
            className="font-semibold text-primary hover:text-primary-focus transition-colors duration-200 underline"
          >
            Simon Keya
          </Link>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;