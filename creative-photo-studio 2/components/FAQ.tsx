import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl text-brand-charcoal font-bold mb-4">Common Questions</h2>
          <p className="text-gray-600">Everything you need to know before booking.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-5 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-brand-charcoal pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-brand-gold h-5 w-5 flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-gray-400 h-5 w-5 flex-shrink-0" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-0 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
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