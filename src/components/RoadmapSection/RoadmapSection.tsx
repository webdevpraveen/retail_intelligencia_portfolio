import { ScrollReveal } from '../ScrollReveal/ScrollReveal';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { StatusBadge } from '../StatusBadge/StatusBadge';
import { siteContent } from '../../content/siteContent';
import './RoadmapSection.css';

export function RoadmapSection() {
  const { mvpStatus, roadmap, chapters } = siteContent;
  const chapter = chapters.future;

  return (
    <section className="section roadmap-section" id="future">
      <div className="container">
        <ScrollReveal>
          <SectionHeader
            eyebrow={`CHAPTER ${chapter.number} — ${chapter.title}`}
            title={mvpStatus.heading}
            centered
          />
        </ScrollReveal>

        {/* MVP vs Future Matrix */}
        <div className="status-matrix">
          <div className="status-matrix__header">
            <div className="status-matrix__col">Capability</div>
            <div className="status-matrix__col">Current Status</div>
            <div className="status-matrix__col">Next Phase</div>
            <div className="status-matrix__col">Long-Term Vision</div>
          </div>
          
          <div className="status-matrix__body">
            {mvpStatus.rows.map((row, index) => (
              <ScrollReveal 
                key={row.capability} 
                delay={index * 0.05}
                direction="up"
                className="status-matrix__row"
              >
                <div className="status-matrix__cell status-matrix__cell--primary">
                  {row.capability}
                </div>
                <div className="status-matrix__cell">
                  {row.currentStatus ? (
                    <StatusBadge status={row.currentStatus} label={row.current} />
                  ) : (
                    <span className="status-matrix__empty">{row.current}</span>
                  )}
                </div>
                <div className="status-matrix__cell status-matrix__cell--secondary">
                  {row.planned}
                </div>
                <div className="status-matrix__cell status-matrix__cell--secondary">
                  {row.longTerm}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Roadmap Timeline */}
        <div className="roadmap-timeline">
          <ScrollReveal>
            <h3 className="roadmap-timeline__heading">{roadmap.heading}</h3>
          </ScrollReveal>
          
          <div className="roadmap-grid">
            {roadmap.phases.map((phase, index) => (
              <ScrollReveal 
                key={phase.phase}
                delay={0.1 + index * 0.1}
                direction="up"
              >
                <div className={`roadmap-phase ${phase.isCurrent ? 'roadmap-phase--current' : ''}`}>
                  <div className="roadmap-phase__header">
                    <span className="roadmap-phase__number">PHASE {phase.phase}</span>
                    {phase.isCurrent && <StatusBadge status="live" label="Current Focus" />}
                  </div>
                  <h4 className="roadmap-phase__title">{phase.title}</h4>
                  <p className="roadmap-phase__description">{phase.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
