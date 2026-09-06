import { ScrollReveal } from '../ScrollReveal/ScrollReveal';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { StatusBadge } from '../StatusBadge/StatusBadge';
import { siteContent } from '../../content/siteContent';
import * as Icons from 'lucide-react';
import './CustomerJourney.css';

export function CustomerJourney() {
  const { customerJourney } = siteContent;

  return (
    <section className="section customer-journey" id="journey">
      <div className="container">
        <ScrollReveal>
          <SectionHeader
            eyebrow="SEAMLESS EXPERIENCE"
            title="Reimagining the Retail Journey."
            description="Comparing the traditional manual process with our vision for an AI-assisted store environment."
            centered
          />
        </ScrollReveal>

        <div className="journey-comparison">
          {/* Traditional Path */}
          <div className="journey-path journey-path--traditional">
            <h3 className="journey-path__title">Traditional Journey</h3>
            <div className="journey-steps">
              {customerJourney.traditional.map((step, index) => {
                const isLast = index === customerJourney.traditional.length - 1;
                return (
                  <ScrollReveal 
                    key={`trad-${index}`} 
                    delay={0.1 + index * 0.1}
                    className="journey-step-wrapper"
                  >
                    <div className="journey-step">
                      <div className="journey-step__dot" />
                      <span className="journey-step__label">{step.label}</span>
                    </div>
                    {!isLast && <div className="journey-connector" aria-hidden="true" />}
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* VS Divider */}
          <div className="journey-vs">
            <div className="journey-vs__line" />
            <div className="journey-vs__badge">VS</div>
            <div className="journey-vs__line" />
          </div>

          {/* AI Path */}
          <div className="journey-path journey-path--ai">
            <h3 className="journey-path__title">AI-Assisted Journey</h3>
            <div className="journey-steps">
              {customerJourney.aiAssisted.map((step, index) => {
                const isLast = index === customerJourney.aiAssisted.length - 1;
                return (
                  <ScrollReveal 
                    key={`ai-${index}`} 
                    delay={0.2 + index * 0.1}
                    className="journey-step-wrapper"
                  >
                    <div className="journey-step journey-step--active">
                      <div className="journey-step__dot">
                        <Icons.Check size={12} strokeWidth={3} />
                      </div>
                      <div className="journey-step__content">
                        <span className="journey-step__label">{step.label}</span>
                        {step.status && (
                           <StatusBadge status={step.status} label="" />
                        )}
                      </div>
                    </div>
                    {!isLast && <div className="journey-connector journey-connector--active" aria-hidden="true" />}
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
