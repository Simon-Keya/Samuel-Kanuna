// app/components/ContactSection.tsx
"use client"
import { motion } from 'framer-motion';
import React from 'react';

const Contact: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-700 to-purple-800 text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.h2
            // Adjusted: Main heading font size
            className="text-4xl lg:text-5xl font-extrabold mb-6 drop-shadow-lg"
            variants={itemVariants}
          >
            Ready to elevate your online presence? ✨
          </motion.h2>
          <motion.p
            // Adjusted: Introductory paragraph font size
            className="text-lg lg:text-xl mb-10 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Let us connect and discuss how I can help you achieve your SEO and content goals. Fill out the form below or reach out directly.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-2xl space-y-6 border border-white/20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3
              // Adjusted: Direct Contact heading
              className="text-2xl font-bold mb-4"
            >
              Direct Contact
            </h3>
            <div
              // Adjusted: Contact info text
              className="flex items-center text-base"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 4v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7m16-4V5a2 2 0 00-2-2H5a2 2 0 00-2 2v4l9 5 9-5z" />
              </svg>
              <a href="mailto:samuel.kanuna@example.com" className="hover:underline">samuel.kanuna@example.com</a>
            </div>
            <div
              // Adjusted: Contact info text
              className="flex items-center text-base"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+254712345678" className="hover:underline">+254 712 345 678</a> {/* Example number */}
            </div>
            <div
              // Adjusted: Contact info text
              className="flex items-start text-base"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-1 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p>Nairobi, Kenya</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-white/20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3
              // Adjusted: Send a Message heading
              className="text-2xl font-bold mb-6"
            >
              Send a Message
            </h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">Your Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300 text-base" // Added text-base
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Your Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300 text-base" // Added text-base
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Your Message</label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  rows={5}
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300 text-base" // Added text-base
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full btn btn-lg bg-white text-blue-700 hover:bg-gray-100 border-none transition-all duration-300 font-bold py-3 px-6 rounded-lg shadow-md text-base" // Added text-base
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;