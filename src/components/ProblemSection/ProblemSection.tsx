import { ScrollReveal } from '../ScrollReveal/ScrollReveal';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { siteContent } from '../../content/siteContent';
import * as Icons from 'lucide-react';
import './ProblemSection.css';

export function ProblemSection() {
  const { problem, chapters } = siteContent;
  const chapter = chapters.problem;

  return (
    <section className="section problem-section" id="problem" aria-labelledby="problem-heading">
      <div className="container">
        <ScrollReveal>
          <SectionHeader
            eyebrow={`CHAPTER ${chapter.number} — ${chapter.title}`}
            title={problem.heading}
            description={problem.description}
            id="problem-heading"
          />
        </ScrollReveal>

        <div className="problem-section__content">
          {/* Visual representation of friction */}
          <ScrollReveal delay={0.2} direction="right" className="problem-section__visual">
             <div className="friction-diagram" aria-hidden="true">
               <div className="friction-diagram__track">
                 <div className="friction-diagram__item" />
                 <div className="friction-diagram__item" />
                 <div className="friction-diagram__item friction-diagram__item--delayed" />
                 <div className="friction-diagram__item friction-diagram__item--delayed" />
               </div>
               <div className="friction-diagram__bottleneck">
                 <div className="friction-diagram__bottleneck-icon">
                    <Icons.AlertCircle size={24} />
                 </div>
                 <span>MANUAL BOTTLENECK</span>
               </div>
             </div>
          </ScrollReveal>

          {/* Problem Pillars */}
          <div className="problem-section__pillars">
            {problem.pillars.map((pillar, index) => {
              // @ts-expect-error - dynamic icon mapping
              const Icon = Icons[pillar.icon] || Icons.HelpCircle;
              return (
                <ScrollReveal
                  key={pillar.title}
                  delay={0.1 + index * 0.1}
                  direction="up"
                >
                  <div className="problem-pillar">
                    <div className="problem-pillar__icon">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="problem-pillar__title">{pillar.title}</h3>
                    <p className="problem-pillar__description">{pillar.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
