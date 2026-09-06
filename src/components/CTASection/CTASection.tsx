import { ScrollReveal } from '../ScrollReveal/ScrollReveal';
import { siteContent } from '../../content/siteContent';
import './CTASection.css';

export function CTASection() {
  const { cta } = siteContent;

  return (
    <section className="section cta-section">
      <div className="container">
        <ScrollReveal>
          <div className="cta-card">
            <div className="cta-card__content">
              <h2 className="cta-card__heading">{cta.heading}</h2>
              <p className="cta-card__description">{cta.description}</p>
              
              <div className="cta-card__actions">
                {cta.buttons.map(btn => (
                  <a
                    key={btn.label}
                    href={btn.target}
                    className={`btn btn--${btn.variant} btn--lg`}
                  >
                    {btn.label}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Decorative background element */}
            <div className="cta-card__bg" aria-hidden="true">
              <div className="cta-card__glow" />
              <div className="cta-card__grid" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
