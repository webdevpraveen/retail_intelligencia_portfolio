import { ScrollReveal } from '../ScrollReveal/ScrollReveal';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { siteContent } from '../../content/siteContent';
import * as Icons from 'lucide-react';
import './SystemSection.css';

export function SystemSection() {
  const { ai, edgeAI, techStack, chapters } = siteContent;
  const chapter = chapters.system;

  return (
    <section className="section system-section" id="system">
      <div className="container">
        <ScrollReveal>
          <SectionHeader
            eyebrow={`CHAPTER ${chapter.number} — ${chapter.title}`}
            title={ai.heading}
            description={ai.description}
            centered
          />
        </ScrollReveal>

        {/* AI Pipeline Architecture */}
        <div className="system-architecture">
          <ScrollReveal delay={0.2} className="architecture-diagram-wrapper">
             <div className="architecture-diagram">
                {ai.pipelineDescription.split(' → ').map((step, index, arr) => (
                  <div key={step} className="architecture-step-wrapper">
                    <div className="architecture-step">{step}</div>
                    {index < arr.length - 1 && (
                      <div className="architecture-connector" aria-hidden="true">
                        <Icons.ArrowRight size={16} />
                      </div>
                    )}
                  </div>
                ))}
             </div>
          </ScrollReveal>
        </div>

        {/* Edge AI Value Props */}
        <div className="edge-ai-section">
          <ScrollReveal>
             <div className="edge-header">
                <h3 className="edge-header__title">{edgeAI.heading}</h3>
                <p className="edge-header__description">{edgeAI.description}</p>
             </div>
          </ScrollReveal>

          <div className="edge-grid">
            {edgeAI.advantages.map((adv, index) => {
              // @ts-expect-error - dynamic icon mapping
              const Icon = Icons[adv.icon] || Icons.Cpu;
              return (
                <ScrollReveal 
                  key={adv.title} 
                  delay={0.1 + index * 0.1}
                  direction="up"
                >
                  <div className="edge-card">
                    <div className="edge-card__icon">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <h4 className="edge-card__title">{adv.title}</h4>
                    <p className="edge-card__description">{adv.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="tech-stack-section">
          <ScrollReveal>
            <h3 className="tech-stack__heading">System Technologies</h3>
          </ScrollReveal>
          
          <div className="tech-grid">
            {techStack.map((category, index) => (
              <ScrollReveal 
                key={category.category} 
                delay={0.1 + index * 0.1}
                direction="up"
              >
                <div className="tech-category">
                  <h4 className="tech-category__title">{category.category}</h4>
                  <ul className="tech-category__list">
                    {category.items.map(item => (
                      <li key={item} className="tech-item">{item}</li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
