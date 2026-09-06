import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { TrustStrip } from './components/TrustStrip/TrustStrip';
import { ProblemSection } from './components/ProblemSection/ProblemSection';
import { SolutionSection } from './components/SolutionSection/SolutionSection';
import { ProofOfWork } from './components/ProofOfWork/ProofOfWork';
import { FeatureShowcase } from './components/FeatureShowcase/FeatureShowcase';
import { DemoMode } from './components/DemoMode/DemoMode';
import { CustomerJourney } from './components/CustomerJourney/CustomerJourney';
import { SystemSection } from './components/SystemSection/SystemSection';
import { ImpactSection } from './components/ImpactSection/ImpactSection';
import { RoadmapSection } from './components/RoadmapSection/RoadmapSection';
import { PeopleSection } from './components/PeopleSection/PeopleSection';
import { FAQSection } from './components/FAQSection/FAQSection';
import { CTASection } from './components/CTASection/CTASection';
import { Footer } from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        
        {/* Chapter 01: The Problem */}
        <ProblemSection />
        
        {/* Chapter 02: The Intelligence */}
        <SolutionSection />
        <ProofOfWork />
        <FeatureShowcase />
        <DemoMode />
        <CustomerJourney />

        {/* Chapter 03: The System */}
        <SystemSection />

        {/* Chapter 04: The Impact */}
        <ImpactSection />

        {/* Chapter 05: The Future */}
        <RoadmapSection />

        {/* Chapter 06: The People */}
        <PeopleSection />
        <FAQSection />

        {/* Closing */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
