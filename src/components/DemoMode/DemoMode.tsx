import { useState } from 'react';
import { ScrollReveal } from '../ScrollReveal/ScrollReveal';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { MediaFrame } from '../MediaFrame/MediaFrame';
import { siteContent } from '../../content/siteContent';
import * as Icons from 'lucide-react';
import './DemoMode.css';

export function DemoMode() {
  const { demo } = siteContent;
  const [activeTab, setActiveTab] = useState(demo.tabs[0].id);

  const activeContent = demo.tabs.find((tab) => tab.id === activeTab) || demo.tabs[0];

  return (
    <section className="section demo-section" id="demo">
      <div className="container">
        <ScrollReveal>
          <SectionHeader
            eyebrow="INTERACTIVE DEMONSTRATION"
            title={demo.heading}
            description={demo.description}
            centered
          />
        </ScrollReveal>

        <div className="demo-interface">
          {/* Tabs */}
          <div className="demo-tabs" role="tablist">
            {demo.tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                className={`demo-tab ${activeTab === tab.id ? 'demo-tab--active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active Panel */}
          <div className="demo-panel" id={`panel-${activeTab}`} role="tabpanel" aria-labelledby={`tab-${activeTab}`}>
            <div className="demo-panel__visual">
               <div className="demo-panel__overlay" aria-hidden="true">
                 <div className="demo-panel__status">
                   <span className="demo-panel__status-dot" />
                   LIVE SIMULATION
                 </div>
               </div>
               <MediaFrame mediaKey={activeContent.mediaKey} />
            </div>
            
            <div className="demo-panel__info">
              <div className="demo-panel__info-header">
                <Icons.Terminal className="demo-panel__info-icon" size={20} />
                <h4 className="demo-panel__info-title">{activeContent.label}</h4>
              </div>
              <p className="demo-panel__info-description">{activeContent.description}</p>
            </div>
          </div>
          
          <p className="demo-disclaimer">
            <Icons.Info size={14} />
            {demo.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
