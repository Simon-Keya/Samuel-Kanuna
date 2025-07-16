// app/components/Services.tsx
"use client"
import { motion } from 'framer-motion';
import React from 'react';

interface Service {
  title: string;
  description: string;
  link: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    { title: "Article Writing", description: "Crafting compelling and informative articles that resonate with your audience.", link: "#" },
    { title: "Copywriting", description: "Persuasive content designed to convert visitors into loyal customers and drive sales.", link: "#" },
    { title: "Scriptwriting", description: "Engaging scripts for captivating videos, insightful podcasts, and dynamic presentations.", link: "#" },
    { title: "Technical Writing", description: "Clear, concise, and precise documentation for complex products, software, or processes.", link: "#" },
    { title: "On-site SEO", description: "Optimizing every element of your website's content and structure for higher search engine rankings.", link: "#" },
    { title: "Off-site SEO", description: "Building authority and visibility through strategic external factors like backlinks and mentions.", link: "#" },
  ];

  const seoBestPractices: string[] = [
    "High-ranking keyword research & integration",
    "Optimized meta tags (titles & descriptions)",
    "Image optimization (titles, alt texts, and captions)",
    "Proper keyword density and natural distribution",
    "Comprehensive SEO analysis & reporting",
    "In-depth SEO competitor analysis",
    "Regular SEO audits and performance monitoring",
    "Effective internal and external linking strategies",
    "Competitor keyword gap analysis",
    "Mobile SEO for seamless user experience",
    "Multi-channel brand mentions for off-site SEO",
  ];

  const contentEngagement: string[] = [
    "Writing highly optimized content for search engines is great, but what about writing for humans?",
    "There exists a sweet spot between writing for search engines and humans where both parties come out satiated with your content. I always strive to reach that spot by crafting engaging content seamlessly blended with SEO components.",
    "Unless it’s a purely technical piece, I've found that sprinkling compelling story elements into an article can powerfully hook and hold the reader’s attention. So, feel free to share your brand’s unique story and the characters involved for a more personalized content approach.",
  ];

  const articlePackageFeatures: string[] = [
    "Optimized title and meta description tags",
    "Strategically highlighted keywords for SEO",
    "Relevant internal and external links",
    "Optimized image tags for better search visibility",
    "Detailed plagiarism detection score",
    "AI content detection score (human-written assurance)",
    "Comprehensive grammar and readability checks",
  ];

  // Define common transitions using cubic bezier arrays for 'ease'
  const easeOutCubicBezier = [0.25, 0.1, 0.25, 1] as const; // Equivalent to "easeOut"
  const defaultTransition = { duration: 0.8, ease: easeOutCubicBezier };
  const cardTransition = { duration: 0.5, ease: easeOutCubicBezier };
  const listItemTransition = { duration: 0.4, ease: easeOutCubicBezier };
  const staggerDelay = 0.15; // Delay for staggering elements

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white to-blue-50 text-gray-800">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.h2
          className="text-4xl lg:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600 drop-shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={defaultTransition}
        >
          Explore My Writing & SEO Services ✍️
        </motion.h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 rounded-xl overflow-hidden border border-blue-100 flex flex-col"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...cardTransition, delay: index * staggerDelay }}
            >
              <div className="card-body p-8 flex-grow">
                <h3 className="card-title text-2xl font-bold mb-4 text-teal-600">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed text-base">{service.description}</p>
              </div>
              <div className="card-actions justify-end p-8 pt-0">
              </div>
            </motion.div>
          ))}
        </div>

        {/* SEO Best Practices Section */}
        <motion.div
          className="mb-20 bg-blue-50 p-10 rounded-xl shadow-lg border border-blue-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={defaultTransition}
        >
          <motion.h3
            className="text-3xl font-bold mb-8 text-center text-blue-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={defaultTransition}
          >
            Enhance Your Online Visibility with SEO Best Practices 📈
          </motion.h3>
          <ul className="list-none space-y-4 max-w-3xl mx-auto grid md:grid-cols-2 gap-x-8">
            {seoBestPractices.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center text-base text-gray-700"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ ...listItemTransition, delay: index * 0.05 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Content Engagement Section */}
        <motion.div
          className="mb-20 bg-purple-50 p-10 rounded-xl shadow-lg border border-purple-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={defaultTransition}
        >
          <motion.h3
            className="text-3xl font-bold mb-8 text-center text-purple-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={defaultTransition}
          >
            Captivate Your Audience with Engaging Content 🌟
          </motion.h3>
          <div className="space-y-6 max-w-3xl mx-auto text-center">
            {contentEngagement.map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-base text-gray-700 leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ ...listItemTransition, delay: index * 0.08 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Article Package Features Section */}
        <motion.div
          className="bg-green-50 p-10 rounded-xl shadow-lg border border-green-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={defaultTransition}
        >
          <motion.h3
            className="text-3xl font-bold mb-8 text-center text-green-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={defaultTransition}
          >
            Every Article & SEO Package Includes These Premium Features ✅
          </motion.h3>
          <ul className="list-none space-y-4 max-w-3xl mx-auto grid md:grid-cols-2 gap-x-8">
            {articlePackageFeatures.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center text-base text-gray-700"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ ...listItemTransition, delay: index * 0.05 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;