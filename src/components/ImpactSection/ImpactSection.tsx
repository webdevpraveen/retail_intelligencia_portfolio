import { ScrollReveal } from '../ScrollReveal/ScrollReveal';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { siteContent } from '../../content/siteContent';
import * as Icons from 'lucide-react';
import './ImpactSection.css';

export function ImpactSection() {
  const { impact, staffOptimization, salesOpportunity, chapters } = siteContent;
  const chapter = chapters.impact;

  return (
    <section className="section impact-section" id="impact">
      <div className="container">
        <ScrollReveal>
          <SectionHeader
            eyebrow={`CHAPTER ${chapter.number} — ${chapter.title}`}
            title={impact.heading}
            description={impact.description}
            centered
          />
        </ScrollReveal>

        {/* Value Chain */}
        <div className="value-chain">
          <ScrollReveal delay={0.2} className="value-chain__container">
            {impact.chain.map((step, index) => (
              <div key={step} className="value-chain__step">
                <div className="value-chain__node">{index + 1}</div>
                <span className="value-chain__label">{step}</span>
              </div>
            ))}
          </ScrollReveal>
        </div>

        <div className="impact-grid">
          {/* Staff Optimization */}
          <div className="impact-card">
            <ScrollReveal>
              <h3 className="impact-card__title">{staffOptimization.heading}</h3>
              <p className="impact-card__description">{staffOptimization.description}</p>
              
              <div className="impact-comparison">
                <div className="impact-comparison__col impact-comparison__col--traditional">
                  <div className="impact-comparison__header">
                    <Icons.Clock size={16} />
                    <span>Traditional</span>
                  </div>
                  <ul className="impact-comparison__list">
                    {staffOptimization.traditional.map(item => (
                      <li key={item}><Icons.Minus size={14} />{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="impact-comparison__col impact-comparison__col--ai">
                  <div className="impact-comparison__header">
                    <Icons.Cpu size={16} />
                    <span>AI Handled</span>
                  </div>
                  <ul className="impact-comparison__list">
                    {staffOptimization.aiHandled.map(item => (
                      <li key={item}><Icons.Check size={14} />{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="impact-comparison__col impact-comparison__col--human">
                  <div className="impact-comparison__header">
                    <Icons.User size={16} />
                    <span>Human Focused</span>
                  </div>
                  <ul className="impact-comparison__list">
                    {staffOptimization.humanFocused.map(item => (
                      <li key={item}><Icons.ArrowUpRight size={14} />{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Sales Opportunity */}
          <div className="impact-card impact-card--secondary">
            <ScrollReveal>
              <h3 className="impact-card__title">{salesOpportunity.heading}</h3>
              <p className="impact-card__description">{salesOpportunity.description}</p>
              
              <ul className="opportunity-list">
                {salesOpportunity.mechanisms.map((mech, index) => (
                  <li key={index} className="opportunity-item">
                    <div className="opportunity-item__bullet" />
                    <span>{mech}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
