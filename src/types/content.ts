/* ============================================================
   CONTENT TYPES — TypeScript interfaces for all site content
   ============================================================ */

export type FeatureStatus = 'live' | 'prototype' | 'planned' | 'future';

export interface NavItem {
  label: string;
  target: string;
}

export interface CTA {
  label: string;
  target: string;
  variant: 'primary' | 'secondary' | 'ghost';
}

export interface Brand {
  name: string;
  tagline: string;
  nameConfirmed: boolean;
}

export interface HeroContent {
  eyebrow: string;
  headline: string;
  description: string;
  ctas: CTA[];
}

export interface TrustItem {
  label: string;
  description: string;
}

export interface ProblemPillar {
  title: string;
  description: string;
  icon: string; // lucide icon name
}

export interface SolutionPillar {
  title: string;
  tagline: string;
  description: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  status: FeatureStatus;
  statusLabel: string;
  details?: string;
  mediaKey: string; // key into assetManifest
  features: string[];
}

export interface WorkflowStage {
  number: string;
  title: string;
  description: string;
}

export interface JourneyStep {
  label: string;
  status?: FeatureStatus;
}

export interface DemoTab {
  id: string;
  label: string;
  description: string;
  mediaKey: string;
}

export interface TechCategory {
  category: string;
  items: string[];
}

export interface MVPRow {
  capability: string;
  current: string;
  currentStatus: FeatureStatus | null;
  planned: string;
  longTerm: string;
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  description: string;
  isCurrent: boolean;
}

export interface BusinessModelItem {
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  contribution: string;
  github?: string;
  linkedin?: string;
  imageKey?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FooterLink {
  label: string;
  target: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface ProductSnapshot {
  items: Array<{
    label: string;
    value: string;
  }>;
}

export interface ProofOfWorkItem {
  title: string;
  description: string;
  mediaKey: string;
  metrics: Array<{ label: string; value: string }>;
}

export interface SiteContent {
  brand: Brand;
  chapters: {
    problem: { number: string; title: string };
    intelligence: { number: string; title: string };
    system: { number: string; title: string };
    impact: { number: string; title: string };
    future: { number: string; title: string };
    people: { number: string; title: string };
  };
  nav: {
    items: NavItem[];
    cta: CTA;
  };
  hero: HeroContent;
  trustStrip: { items: TrustItem[] };
  productSnapshot: ProductSnapshot;
  problem: {
    heading: string;
    description: string;
    pillars: ProblemPillar[];
  };
  solution: {
    heading: string;
    description: string;
    pillars: SolutionPillar[];
  };
  proofOfWork: {
    heading: string;
    description: string;
    items: ProofOfWorkItem[];
  };
  features: Feature[];
  workflow: {
    heading: string;
    description: string;
    stages: WorkflowStage[];
  };
  customerJourney: {
    traditional: JourneyStep[];
    aiAssisted: JourneyStep[];
  };
  demo: {
    heading: string;
    description: string;
    disclaimer: string;
    tabs: DemoTab[];
  };
  ai: {
    heading: string;
    description: string;
    pipelineDescription: string;
  };
  edgeAI: {
    heading: string;
    description: string;
    advantages: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  techStack: TechCategory[];
  impact: {
    heading: string;
    description: string;
    chain: string[];
  };
  staffOptimization: {
    heading: string;
    description: string;
    traditional: string[];
    aiHandled: string[];
    humanFocused: string[];
  };
  salesOpportunity: {
    heading: string;
    description: string;
    mechanisms: string[];
  };
  revenueModel: {
    heading: string;
    description: string;
    models: BusinessModelItem[];
  };
  mvpStatus: {
    heading: string;
    rows: MVPRow[];
  };
  roadmap: {
    heading: string;
    phases: RoadmapPhase[];
  };
  differentiation: {
    heading: string;
    traditional: string[];
    aiAssisted: string[];
  };
  projectJourney: {
    heading: string;
    milestones: string[];
  };
  privacy: {
    heading: string;
    points: string[];
  };
  team: {
    heading: string;
    members: TeamMember[];
  };
  faq: {
    heading: string;
    items: FAQItem[];
  };
  cta: {
    heading: string;
    description: string;
    buttons: CTA[];
  };
  footer: {
    columns: FooterColumn[];
    copyright: string;
  };
}
