'use client'
import { useState } from 'react';
import SectionTitle from '../SectionTitle';

type FaqItem = {
  question: string;
  answer: string;
};

type FaqHeroProps = {
  title?: string;
  faqs: FaqItem[];
};

const FaqHero = ({ title = "Todavía tienes preguntas?", faqs }: FaqHeroProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default to the second question being open

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto py-10">
      {/* Mobile view: vertical layout (default) */}
      {/* Desktop view: horizontal 2-column layout */}
      <div className="md:flex md:gap-12 md:items-start">
        {/* Title column - full width on mobile, ~1/3 width on desktop */}
        <div className="mb-8 md:mb-0 md:w-1/3">
          <SectionTitle header="h2" className="font-bold sticky md:top-10" uppercase>
            {title}
          </SectionTitle>
        </div>
        
        {/* FAQ column - full width on mobile, ~2/3 width on desktop */}
        <div className="md:w-2/3">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 pb-4">
              <div
                className="flex justify-between items-start cursor-pointer py-2"
                onClick={() => toggleQuestion(index)}
              >
                <SectionTitle header="h3" className="!text-2xl font-medium !mb-0" uppercase={false}>
                  {faq.question}
                </SectionTitle>
                <span className="-pt-2 text-2xl transition-transform duration-700 ease-in-out">
                  {openIndex === index ? '×' : '+'}
                </span>
              </div>
              <div 
                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="py-3 text-gray-600 text-xl">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqHero; 