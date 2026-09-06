import { ScrollReveal } from '../ScrollReveal/ScrollReveal';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { siteContent } from '../../content/siteContent';
import * as Icons from 'lucide-react';
import './PeopleSection.css';

export function PeopleSection() {
  const { projectJourney, privacy, chapters } = siteContent;
  const chapter = chapters.people;

  return (
    <section className="section people-section" id="people">
      <div className="container">
        <ScrollReveal>
          <SectionHeader
            eyebrow={`CHAPTER ${chapter.number} — ${chapter.title}`}
            title={projectJourney.heading}
            centered
          />
        </ScrollReveal>

        {/* Project Journey Milestones */}
        <div className="milestone-track">
          {projectJourney.milestones.map((milestone, index) => (
            <ScrollReveal 
              key={milestone}
              delay={0.1 + index * 0.05}
              direction="up"
              className="milestone"
            >
              <div className="milestone__dot" aria-hidden="true" />
              <div className="milestone__content">
                <span className="milestone__number">0{index + 1}</span>
                <span className="milestone__title">{milestone}</span>
              </div>
            </ScrollReveal>
          ))}
          <div className="milestone-track__line" aria-hidden="true" />
        </div>

        {/* Privacy & Responsible AI */}
        <div className="privacy-section">
          <ScrollReveal>
            <div className="privacy-card">
              <div className="privacy-card__header">
                <Icons.ShieldCheck className="privacy-card__icon" size={32} />
                <h3 className="privacy-card__title">{privacy.heading}</h3>
              </div>
              <ul className="privacy-list">
                {privacy.points.map((point, index) => (
                  <li key={index} className="privacy-list__item">
                    <Icons.Check size={16} className="privacy-list__check" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
