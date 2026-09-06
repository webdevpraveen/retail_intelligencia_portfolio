import { ScrollReveal } from '../ScrollReveal/ScrollReveal';
import { MediaFrame } from '../MediaFrame/MediaFrame';
import { StatusBadge } from '../StatusBadge/StatusBadge';
import { siteContent } from '../../content/siteContent';
import * as Icons from 'lucide-react';
import './FeatureShowcase.css';

export function FeatureShowcase() {
  const { features } = siteContent;

  return (
    <section className="section feature-showcase" id="capabilities">
      <div className="container">
        <div className="feature-showcase__grid">
          {features.map((feature, index) => {
            const isReversed = index % 2 !== 0;
            // @ts-expect-error - dynamic icon mapping
            const Icon = Icons[feature.icon] || Icons.CheckCircle;

            return (
              <div 
                key={feature.title}
                className={`feature-row ${isReversed ? 'feature-row--reversed' : ''}`}
              >
                <div className="feature-row__content">
                  <ScrollReveal delay={0.1} direction={isReversed ? 'left' : 'right'}>
                    <div className="feature-row__header">
                      <div className="feature-row__icon">
                        <Icon size={24} strokeWidth={1.5} />
                      </div>
                      <StatusBadge status={feature.status} />
                    </div>
                    <h3 className="feature-row__title">{feature.title}</h3>
                    <p className="feature-row__description">{feature.description}</p>
                    
                    <ul className="feature-row__list" aria-label={`Features of ${feature.title}`}>
                      {feature.features.map((item) => (
                        <li key={item} className="feature-row__list-item">
                          <Icons.Check size={16} className="feature-row__list-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </ScrollReveal>
                </div>
                
                <div className="feature-row__visual">
                  <ScrollReveal delay={0.2} direction={isReversed ? 'right' : 'left'}>
                    <div className="product-frame">
                      <div className="product-frame__toolbar" aria-hidden="true">
                        <div className="product-frame__dot" />
                        <div className="product-frame__dot" />
                        <div className="product-frame__dot" />
                        <span className="product-frame__toolbar-label">
                          {feature.title.toUpperCase()}
                        </span>
                      </div>
                      <div className="product-frame__content">
                        <MediaFrame mediaKey={feature.mediaKey} />
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
