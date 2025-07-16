// app/components/FAQSection.tsx
"use client"
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "How long will my order take?",
      answer: "An order below 2000 words typically takes 24 hours to deliver, while orders above 2000 words may take 2-3 days. Once you place an order, you'll receive an estimated delivery date for your article(s).",
    },
    {
      question: "Can I request a revision?",
      answer: "Yes, the first three revisions on your SEO content are complimentary. Revisions usually take about one day to complete.",
    },
    {
      question: "Do you provide formatting and quality checks?",
      answer: "All articles are meticulously formatted to ensure zero grammar errors and extremely low plagiarism and AI detection scores. Screenshots of plagiarism and AI detection scores will be provided for your assurance.",
    },
    {
      question: "Do I need to provide an outline for my content?",
      answer: "You don’t strictly have to provide an outline; a title and word count can suffice. However, it's highly recommended to provide a detailed outline of how you want your content written. This helps ensure it perfectly matches your brand's style and theme. You can attach your outline along with any other specific requirements in your email.",
    },
    {
      question: "Are there any restricted niches or topics?",
      answer: "CodeGraphite prioritizes ethical and legal content. We will not write on political issues, sensitive content concerning individuals' personal lives, or any other content deemed illegal under applicable law.",
    },
    {
      question: "Do I own the copyrights to the content I receive?",
      answer: "Yes, absolutely! You own all the rights to the content delivered to you. I will relinquish all rights to the articles upon successful payment confirmation.",
    },
  ];

  // State to manage which FAQ item is open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Define common transitions using cubic bezier arrays for 'ease'
  const easeOutCubicBezier = [0.25, 0.1, 0.25, 1] as const; // Equivalent to "easeOut"
  const defaultTransition = { duration: 0.8, ease: easeOutCubicBezier };
  const faqItemTransition = { duration: 0.4, ease: easeOutCubicBezier };
  const contentTransition = { duration: 0.3, ease: easeOutCubicBezier }; // For answer reveal

  return (
    <section id="faqs" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50 text-gray-800">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.h2
          className="text-4xl lg:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={defaultTransition}
        >
          Frequently Asked Questions 🤔
        </motion.h2>
        <motion.p
          className="text-center mb-12 text-lg text-gray-700 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ ...defaultTransition, delay: 0.2 }}
        >
          Get the answers you need to start your journey with CodeGraphite here, or{" "}
          <a
            href="#contact"
            className="font-semibold text-purple-600 hover:text-purple-800 transition-colors duration-200"
          >
            ask us a question directly!
          </a>
        </motion.p>

        <div className="space-y-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg border border-indigo-100 cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ ...faqItemTransition, delay: index * 0.1 }}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center justify-between p-6 pr-4">
                <h3
                  className="text-lg md:text-xl font-semibold text-indigo-700 flex-grow"
                >
                  {faq.question}
                </h3>
                <motion.div
                  initial={false}
                  animate={{ rotate: openIndex === index ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                  // *** BEGIN CHANGES FOR VISIBILITY ***
                  className="ml-4 p-2 rounded-full bg-indigo-600 text-white flex-shrink-0 h-5 w-5 flex items-center justify-center shadow-md hover:bg-indigo-700 transition-colors duration-200"
                  // *** END CHANGES FOR VISIBILITY ***
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.div>
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={contentTransition}
                    className="p-6 pt-0 text-gray-700 text-base leading-relaxed border-t border-indigo-50"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;