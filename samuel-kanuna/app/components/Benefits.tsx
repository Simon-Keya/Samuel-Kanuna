// app/components/BenefitsSection.tsx
"use client"
import { motion } from 'framer-motion';
import React from 'react';

interface Benefit {
  title: string;
  quote: string;
}

const Benefits: React.FC = () => {
  const benefits: Benefit[] = [
    {
      title: "Businesses and Organizations",
      quote: "Research shows that 80% of consumers research online before making a purchase or investment. Companies providing professional services like financial planners and IT consultants can better target prospects using the right keywords. Organizations can increase their search engine rank and provide more information to prospects by adding high-quality SEO-optimized blog posts.",
    },
    {
      title: "E-Commerce Stores",
      quote: "In the e-commerce race to attract new customers and improve revenue, organic traffic can be an effective and sustainable way to reach said goals. SEO is a low-cost method of increasing brand awareness, elevating content, and improving user experience in your store. So, take the initiative and leverage eCommerce SEO for the long-term performance of your brand.",
    },
    {
      title: "Personal Brands and Entrepreneurs",
      quote: "SEO, especially off-site SEO, is a great way to enhance your personal brand’s online visibility. As more people rely on social media to discover new products and professional services, you can take advantage of content marketing, social mentions, and local SEO to drive traffic to your site. Creating and sharing high-quality optimized content on your socials is a surefire way to boost your personal brand.",
    },
    {
      title: "Individuals and Creatives",
      quote: "Authors, artists, graphic designers, producers, innovators, and visionaries can amplify their voices and reach a broader audience with SEO. One such way is by creating content embedded with relevant keywords and phrases that people use to search for your type of creative work. Image and video SEO can also go a long way in helping you increase your online visibility.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="benefits" className="py-16 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          // Adjusted: Main heading
          className="text-4xl lg:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Who Can Benefit From SEO Content? 🚀
        </motion.h2>
        <motion.blockquote
          // Adjusted: Blockquote and footer text
          className="text-center text-xl italic mb-12 max-w-3xl mx-auto p-4 rounded-lg bg-white shadow-lg border-l-4 border-purple-500"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          &ldquo;No matter how niche or mainstream your market is, great content remains a significant focus for SEO&rdquo;
          <footer className="mt-4 text-base font-semibold text-purple-700">- Kristopher Jones</footer>
        </motion.blockquote>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-lg overflow-hidden border border-gray-200"
              variants={itemVariants}
            >
              <div className="card-body p-6">
                <h3
                  // Adjusted: Card title
                  className="card-title text-xl font-bold mb-3 text-purple-600"
                >
                  {benefit.title}
                </h3>
                <p
                  // Adjusted: Card quote/description
                  className="text-base text-gray-700 leading-relaxed"
                >
                  {benefit.quote}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;