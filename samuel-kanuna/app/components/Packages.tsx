// app/components/Packages.tsx
"use client"
import { motion } from 'framer-motion';
import React from 'react';

interface Package {
  articles: string;
  price: string;
  per: string;
}

const Packages: React.FC = () => {
  const packages: Package[] = [
    { articles: "1 Article", price: "$3.55", per: "per 100 words" },
    { articles: "3 Articles", price: "$3.45", per: "per 100 words" },
    { articles: "5 Articles", price: "$3.35", per: "per 100 words" },
    { articles: "8 Articles", price: "$3.25", per: "per 100 words" },
    { articles: "10 Articles", price: "$3.15", per: "per 100 words" },
    { articles: "15+ Articles", price: "$3.05", per: "per 100 words" },
  ];

  // Define common transitions using cubic bezier arrays for 'ease'
  const easeOutCubicBezier = [0.25, 0.1, 0.25, 1] as const; // Equivalent to "easeOut"

  const defaultTransition = { duration: 0.8, ease: easeOutCubicBezier };
  const cardTransition = { duration: 0.6, ease: easeOutCubicBezier };
  const staggerDelay = 0.2; // Delay between each staggered card animation

  return (
    <section id="packages" className="py-20 bg-gradient-to-br from-gray-50 to-blue-100 text-gray-800">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.h2
          // Adjusted font size for balance
          className="text-4xl lg:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-700 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={defaultTransition}
        >
          Flexible Writing & SEO Packages 💰
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 rounded-2xl overflow-hidden border border-blue-200 flex flex-col justify-between"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }} // Trigger when card is 50% in view
              transition={{ ...cardTransition, delay: index * staggerDelay }} // Apply stagger using a delay
            >
              <div className="card-body p-8 flex flex-col items-center">
                <h3
                  // Adjusted font size for card title
                  className="card-title text-3xl font-bold mb-4 text-indigo-700"
                >
                  {pkg.articles}
                </h3>
                <p
                  // Adjusted font size for price
                  className="text-5xl font-extrabold text-blue-600 my-6"
                >
                  {pkg.price}
                </p>
                <p
                  // Adjusted font size for 'per' text
                  className="text-lg text-gray-600 mb-8"
                >
                  {pkg.per}
                </p>
                <div className="card-actions justify-center mt-auto">
                  <a
                    href="#contact"
                    className="btn btn-primary btn-lg bg-gradient-to-r from-purple-500 to-indigo-600 text-white border-none rounded-full px-10 py-3 hover:from-purple-600 hover:to-indigo-700 transition-all duration-300"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;