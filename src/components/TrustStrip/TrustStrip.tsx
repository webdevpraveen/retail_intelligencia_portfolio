import React from 'react';
import { ScrollReveal } from '../ScrollReveal/ScrollReveal';
import { siteContent } from '../../content/siteContent';
import './TrustStrip.css';

export function TrustStrip() {
  const { trustStrip } = siteContent;

  return (
    <div className="trust-strip" aria-label="Core capabilities">
      <ScrollReveal>
        <div className="trust-strip__inner">
          {trustStrip.items.map((item, index) => (
            <React.Fragment key={item.label}>
              {index > 0 && (
                <div
                  className="trust-strip__separator"
                  aria-hidden="true"
                />
              )}
              <div className="trust-strip__item">
                <span className="trust-strip__label">{item.label}</span>
                <span className="trust-strip__description">{item.description}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
