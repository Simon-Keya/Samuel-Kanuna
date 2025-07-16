"use client"
import { motion } from 'framer-motion';
import React from 'react';

const Hero: React.FC = () => {
  // Define common transitions using cubic bezier arrays for 'ease'
  const easeOutCubicBezier = [0.25, 0.1, 0.25, 1] as const; // Equivalent to "easeOut"
  const titleTransition = { duration: 1, ease: easeOutCubicBezier };
  const textTransition = { duration: 1, ease: easeOutCubicBezier, delay: 0.3 };
  const buttonTransition = { duration: 0.8, ease: easeOutCubicBezier, delay: 0.6 };

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 text-gray-800 relative overflow-hidden flex items-center justify-center py-16 px-4">
      {/* Background shapes for visual interest */}
      <motion.div
        className="absolute top-0 left-0 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"
        initial={{ y: -100, x: -100, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 0.3 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"
        initial={{ y: 100, x: 100, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 0.3 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
      ></motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        {/* Adjusted max-width for better content fitting on various screens */}
        <div className="max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto text-center p-4">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-800 leading-tight mb-6 drop-shadow-md"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={titleTransition}
          >
            Elevate Your Brand: Masterful SEO & Content Strategies
          </motion.h1>
          <motion.p
            className="py-6 text-lg md:text-xl text-gray-700 leading-relaxed font-normal" // Changed font-bold to font-normal
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={textTransition}
          >
            Hey! Samuel here. I’m a <span className="font-semibold">content writer and SEO consultant</span> with over six years of experience in creating engaging and high-ranking content. I provide freelance content writing and SEO services for businesses of all sizes. Whether you’re a small dental office or a leading e-commerce store selling internationally, I’ll help you <span className="font-semibold">improve traffic and convert leads</span> into loyal customers.
          </motion.p>
          <motion.a
            href="#contact"
            className="btn btn-primary btn-lg bg-gradient-to-r from-purple-600 to-indigo-700 text-white border-none rounded-full px-10 py-3 mt-8 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={buttonTransition}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch Today! 🚀
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;