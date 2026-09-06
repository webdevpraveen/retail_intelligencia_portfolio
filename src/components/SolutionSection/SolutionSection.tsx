import { ScrollReveal } from '../ScrollReveal/ScrollReveal';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { siteContent } from '../../content/siteContent';
import './SolutionSection.css';

export function SolutionSection() {
  const { solution, chapters } = siteContent;
  const chapter = chapters.intelligence;

  return (
    <section className="section solution-section" id="intelligence" aria-labelledby="intelligence-heading">
      <div className="container">
        <ScrollReveal>
          <SectionHeader
            eyebrow={`CHAPTER ${chapter.number} — ${chapter.title}`}
            title={solution.heading}
            description={solution.description}
            id="intelligence-heading"
            centered
          />
        </ScrollReveal>

        <div className="solution-pipeline">
          {solution.pillars.map((pillar, index) => (
            <ScrollReveal
              key={pillar.title}
              delay={0.2 + index * 0.15}
              direction="up"
              className="solution-pipeline__node-wrapper"
            >
              <div className="solution-pipeline__node">
                <div className="solution-pipeline__header">
                  <span className="solution-pipeline__step">0{index + 1}</span>
                  <h3 className="solution-pipeline__title">{pillar.title}</h3>
                </div>
                <p className="solution-pipeline__tagline">{pillar.tagline}</p>
                <p className="solution-pipeline__description">{pillar.description}</p>
              </div>
              
              {/* Connector line (hidden on the last item via CSS) */}
              <div className="solution-pipeline__connector" aria-hidden="true">
                <div className="solution-pipeline__connector-line" />
                <div className="solution-pipeline__connector-arrow" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
