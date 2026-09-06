import { useState } from 'react';
import { ScrollReveal } from '../ScrollReveal/ScrollReveal';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { siteContent } from '../../content/siteContent';
import { Plus, Minus } from 'lucide-react';
import './FAQSection.css';

export function FAQSection() {
  const { faq } = siteContent;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        <ScrollReveal>
          <SectionHeader
            eyebrow="COMMON QUESTIONS"
            title={faq.heading}
            centered
          />
        </ScrollReveal>

        <div className="faq-accordion">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            
            return (
              <ScrollReveal 
                key={index} 
                delay={index * 0.05}
                direction="up"
              >
                <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
                  <button 
                    className="faq-item__trigger"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <span className="faq-item__question">{item.question}</span>
                    <span className="faq-item__icon" aria-hidden="true">
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </span>
                  </button>
                  
                  <div 
                    className="faq-item__answer-wrapper"
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    hidden={!isOpen}
                  >
                    <div className="faq-item__answer">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
