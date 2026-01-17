import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Are your gummies safe for children with allergies?",
      answer: "Yes! All our products are free from the top 8 allergens, including gluten, dairy, soy, eggs, and peanuts. However, we always recommend checking the specific ingredient list on the bottle."
    },
    {
      question: "What makes Kildren's different from other vitamins?",
      answer: "We focus on clean, bioavailable ingredients without the junk. No artificial flavors, dyes, or high-fructose corn syrup. Just real fruit flavors and essential nutrients."
    },
    {
      question: "What is the recommended age for these gummies?",
      answer: "Our gummies are generally recommended for children ages 4 and up due to choking hazards with younger children. For children under 4, please consult your pediatrician."
    },
    {
      question: "Do you offer subscriptions?",
      answer: "Absolutely! You can subscribe to any of our products to save 15% and get free shipping. You can cancel or pause anytime directly from your account."
    },
    {
      question: "How should I store the gummies?",
      answer: "Store them in a cool, dry place away from direct sunlight. Keep the bottle tightly closed to maintain freshness."
    }
  ];

  return (
    <section id="faq" className="py-32 px-6 bg-[#fbeee2]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary-text mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-[3px] border-primary-text rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md bg-white"
            >
              <button 
                className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-primary-text hover:bg-cream/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-accent-salmon" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-primary-text/40" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-primary-text/70 leading-relaxed border-t-2 border-primary-text/5">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;