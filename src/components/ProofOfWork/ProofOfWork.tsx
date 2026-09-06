import { ScrollReveal } from '../ScrollReveal/ScrollReveal';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { MediaFrame } from '../MediaFrame/MediaFrame';
import { siteContent } from '../../content/siteContent';
import './ProofOfWork.css';

export function ProofOfWork() {
  const { proofOfWork } = siteContent;

  return (
    <section className="section proof-section" id="proof">
      <div className="container">
        <ScrollReveal>
          <SectionHeader
            eyebrow="ACTUAL SYSTEM CAPABILITIES"
            title={proofOfWork.heading}
            description={proofOfWork.description}
            centered
          />
        </ScrollReveal>

        <div className="proof-grid">
          {proofOfWork.items.map((item, index) => (
            <ScrollReveal 
              key={item.title} 
              delay={0.1 + index * 0.15}
              direction="up"
            >
              <div className="proof-card">
                <div className="proof-card__visual">
                  <div className="proof-card__overlay" aria-hidden="true">
                    <span className="proof-card__tag">VERIFIED DEMO</span>
                  </div>
                  <MediaFrame mediaKey={item.mediaKey} />
                </div>
                <div className="proof-card__content">
                  <h3 className="proof-card__title">{item.title}</h3>
                  <p className="proof-card__description">{item.description}</p>
                  <div className="proof-card__metrics">
                    {item.metrics.map(metric => (
                      <div key={metric.label} className="proof-metric">
                        <span className="proof-metric__label">{metric.label}</span>
                        <span className="proof-metric__value">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
