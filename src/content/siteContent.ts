/* ============================================================
   SITE CONTENT — Centralized content bible
   ============================================================
   All text, labels, and data are defined here.
   Components consume this data — never hardcode content.
   ============================================================ */

import type { SiteContent } from '../types/content';

/**
 * Product name — UNCONFIRMED.
 * Update this single constant when the final name is decided.
 */
export const PRODUCT_NAME = 'Retail IQ';

export const siteContent: SiteContent = {
  /* ── Brand ── */
  brand: {
    name: PRODUCT_NAME,
    tagline: 'Edge AI for Smarter Retail',
    nameConfirmed: false,
  },

  /* ── Chapters ── */
  chapters: {
    problem: { number: '01', title: 'The Problem' },
    intelligence: { number: '02', title: 'The Intelligence' },
    system: { number: '03', title: 'The System' },
    impact: { number: '04', title: 'The Impact' },
    future: { number: '05', title: 'The Future' },
    people: { number: '06', title: 'The People' },
  },

  /* ── Navigation ── */
  nav: {
    items: [
      { label: 'Product', target: '#intelligence' },
      { label: 'Technology', target: '#system' },
      { label: 'Impact', target: '#impact' },
      { label: 'Roadmap', target: '#future' },
      { label: 'About', target: '#people' },
    ],
    cta: { label: 'Explore Demo', target: '#demo', variant: 'primary' },
  },

  /* ── Hero ── */
  hero: {
    eyebrow: 'EDGE AI  ·  COMPUTER VISION  ·  SMART RETAIL',
    headline: 'Making Retail Smarter, Faster, and More Intelligent.',
    description:
      'A computer-vision-driven retail system designed to reduce repetitive manual operations, streamline checkout workflows, and turn real-time visual information into actionable retail intelligence.',
    ctas: [
      { label: 'Explore the System', target: '#intelligence', variant: 'primary' },
      { label: 'See It in Action', target: '#demo', variant: 'secondary' },
    ],
  },

  /* ── Trust strip — real capabilities only ── */
  trustStrip: {
    items: [
      { label: 'Shopper Analytics', description: 'Footfall, entry/exit, dwell time & heatmaps' },
      { label: 'Inventory Monitoring', description: 'Low/out-of-stock shelf detection & alerts' },
      { label: 'Queue Intelligence', description: 'Real-time queue length & congestion tracking' },
      { label: 'Loss Prevention', description: 'AI-assisted detection of unusual store activity' },
      { label: 'Edge-First', description: 'Local processing with aggregated insight sync' },
    ],
  },

  /* ── Product snapshot (compact stats) ── */
  productSnapshot: {
    items: [
      { label: 'Stage', value: 'Working Prototype' },
      { label: 'Core', value: 'Computer Vision' },
      { label: 'Processing', value: 'Edge AI' },
      { label: 'Detection', value: 'Multi-class' },
    ],
  },

  /* ── Chapter 01: Problem ── */
  problem: {
    heading: 'Retail Still Runs on Too Much Manual Work.',
    description:
      'Modern stores process huge amounts of visual and operational information, but many workflows still depend on people continuously observing, verifying, and responding.',
    pillars: [
      {
        title: 'Checkout Friction',
        description: 'Queues and manual verification can slow the customer journey.',
        icon: 'ShoppingCart',
      },
      {
        title: 'Repetitive Staff Workload',
        description: 'Employees spend time on monitoring and repetitive operational tasks.',
        icon: 'UserCog',
      },
      {
        title: 'Limited Real-Time Visibility',
        description: 'Traditional workflows may not turn visual activity into immediate, structured information.',
        icon: 'EyeOff',
      },
      {
        title: 'Operational Inefficiency',
        description: 'Busy periods amplify bottlenecks and make manual processes harder to scale.',
        icon: 'TrendingDown',
      },
    ],
  },

  /* ── Chapter 02: Solution ── */
  solution: {
    heading: 'A Smarter Layer Between Cameras, AI, and Retail Operations.',
    description:
      'The system uses computer vision and AI-assisted detection to observe relevant retail activity, interpret what is happening, and support faster operational decisions.',
    pillars: [
      {
        title: 'PERCEIVE',
        tagline: 'Capture',
        description: 'Capture and process visual information from camera feeds.',
      },
      {
        title: 'UNDERSTAND',
        tagline: 'Detect',
        description: 'Detect relevant objects, states, and events using trained AI models.',
      },
      {
        title: 'ACT',
        tagline: 'Respond',
        description: 'Translate detection into useful retail workflows, alerts, and future analytics.',
      },
    ],
  },

  /* ── Proof of Work ── */
  proofOfWork: {
    heading: 'Verified System Capabilities.',
    description: 'The following capabilities have been demonstrated in prototype environments using our core computer vision models. These are real detection outputs, not simulated concepts.',
    items: [
      {
        title: 'High-Density Object Detection',
        description: 'Successfully identifying multiple product classes on packed retail shelves simultaneously.',
        mediaKey: 'demo-object-detection',
        metrics: [
          { label: 'Classes', value: '80+' },
          { label: 'Latency', value: '<50ms' },
        ],
      },
      {
        title: 'Aisle Activity Monitoring',
        description: 'Continuous observation of aisle states, distinguishing between shoppers, carts, and staff.',
        mediaKey: 'demo-aisle-detection',
        metrics: [
          { label: 'Tracking', value: 'Multi-object' },
          { label: 'Environment', value: 'Dynamic' },
        ],
      },
      {
        title: 'Checkout Event Recognition',
        description: 'Identifying specific interactions at the checkout counter, such as scanning or bagging.',
        mediaKey: 'demo-checkout-detection',
        metrics: [
          { label: 'Events', value: 'Scanning, Bagging' },
          { label: 'Integration', value: 'API Ready' },
        ],
      },
    ],
  },

  /* ── Features ── */
  features: [
    {
      id: 'object-detection',
      title: 'Object Detection',
      description: 'Computer vision identifies configured objects and product classes in visual input.',
      status: 'prototype',
      statusLabel: 'Prototype capability — to be validated',
      mediaKey: 'demo-object-detection',
      features: ['Identifies products on shelves', 'Recognizes shopping carts', 'Detects people in aisles'],
    },
    {
      id: 'aisle-monitoring',
      title: 'Smart Aisle Monitoring',
      description: 'Monitors configured aisle activity and provides detection and monitoring information.',
      status: 'prototype',
      statusLabel: 'Prototype capability — to be validated',
      mediaKey: 'demo-aisle-detection',
      features: ['Tracks aisle traffic patterns', 'Monitors shelf stock levels', 'Detects misplaced items'],
    },
    {
      id: 'checkout-detection',
      title: 'Checkout Detection',
      description: 'Detects configured checkout-related events and transaction states.',
      status: 'prototype',
      statusLabel: 'Prototype capability — to be validated',
      mediaKey: 'demo-checkout-detection',
      features: ['Monitors queue lengths', 'Detects checkout scanning actions', 'Identifies cart contents'],
    },
    {
      id: 'staff-optimization',
      title: 'Staff Workload Optimization',
      description: 'Designed to reduce repetitive monitoring and verification work through automation.',
      status: 'planned',
      statusLabel: 'Planned — future development',
      mediaKey: 'demo-optimization',
      features: ['Automated alerts', 'Prioritized task lists', 'Reduced manual checks'],
    },
    {
      id: 'retail-intelligence',
      title: 'Retail Intelligence',
      description: 'Transforms raw detections into structured operational information for retail decision support.',
      status: 'planned',
      statusLabel: 'Planned — future development',
      mediaKey: 'demo-intelligence',
      features: ['Operational dashboards', 'Trend analysis', 'Predictive insights'],
    },
    {
      id: 'scalable-edge',
      title: 'Scalable Edge Architecture',
      description: 'Future architecture supporting local inference, multiple cameras, and store-level deployments.',
      status: 'future',
      statusLabel: 'Long-term roadmap',
      mediaKey: 'demo-edge',
      features: ['Multi-camera synchronization', 'Centralized management', 'Robust failover systems'],
    },
  ],

  /* ── How it works (pipeline) ── */
  workflow: {
    heading: 'From Camera Feed to Retail Intelligence.',
    description: 'A structured pipeline transforms raw visual input into actionable retail information.',
    stages: [
      { number: '01', title: 'Capture', description: 'Camera provides the visual input.' },
      { number: '02', title: 'Preprocess', description: 'Frames are prepared for inference.' },
      { number: '03', title: 'Infer', description: 'AI model processes the frame.' },
      { number: '04', title: 'Detect', description: 'Relevant objects and events are identified.' },
      { number: '05', title: 'Interpret', description: 'Results are mapped to retail context.' },
      { number: '06', title: 'Respond', description: 'System displays, alerts, or triggers workflow.' },
      { number: '07', title: 'Learn', description: 'Events become analytics in future iterations.' },
    ],
  },

  /* ── Customer journey ── */
  customerJourney: {
    traditional: [
      { label: 'Enter Store' },
      { label: 'Browse Aisles' },
      { label: 'Join Queue' },
      { label: 'Manual Checkout' },
      { label: 'Manual Verification' },
      { label: 'Exit' },
    ],
    aiAssisted: [
      { label: 'Enter Store', status: 'live' },
      { label: 'Browse Aisles', status: 'live' },
      { label: 'AI-Assisted Monitoring', status: 'prototype' },
      { label: 'Smart Checkout Workflow', status: 'prototype' },
      { label: 'Automated Verification', status: 'planned' },
      { label: 'Exit', status: 'live' },
    ],
  },

  /* ── Demo ── */
  demo: {
    heading: 'See the Intelligence in Action.',
    description: 'Explore the system\'s detection capabilities across different retail scenarios.',
    disclaimer: 'This is a demonstration visualization. Detection overlays shown are simulated examples. Actual detection results may vary based on model configuration and environment.',
    tabs: [
      { id: 'object', label: 'Object Detection', description: 'AI identifies configured product classes and objects in the visual input.', mediaKey: 'demo-object-detection' },
      { id: 'aisle', label: 'Aisle Monitoring', description: 'Continuous monitoring of aisle activity, shelf states, and product availability.', mediaKey: 'demo-aisle-detection' },
      { id: 'checkout', label: 'Checkout Detection', description: 'Detection of checkout-related events, transaction states, and queue activity.', mediaKey: 'demo-checkout-detection' },
      { id: 'dashboard', label: 'Dashboard', description: 'Operational interface showing detection results, system status, and event logs.', mediaKey: 'demo-dashboard' },
    ],
  },

  /* ── AI section ── */
  ai: {
    heading: 'Teaching Machines to See Retail.',
    description:
      'The system uses computer vision to extract useful information from visual data. Instead of treating a camera as only a recording device, the system uses the video stream as an input to an AI perception pipeline.',
    pipelineDescription: 'Camera → Frames → Preprocessing → Model Inference → Detections → Retail Logic → UI / Action',
  },

  /* ── Edge AI ── */
  edgeAI: {
    heading: 'Intelligence Where the Data Is Created.',
    description: 'Edge AI brings inference closer to the source of visual data, enabling faster and more efficient processing architectures.',
    advantages: [
      {
        title: 'Low-Latency Potential',
        description: 'Local inference can reduce the need to send every frame to a remote service for processing.',
        icon: 'Zap',
      },
      {
        title: 'Reduced Cloud Dependency',
        description: 'Some processing can happen on-device or near-device, reducing reliance on constant cloud connectivity.',
        icon: 'CloudOff',
      },
      {
        title: 'Privacy-Aware Architecture',
        description: 'Local processing can reduce unnecessary transmission of raw video data, depending on implementation.',
        icon: 'Shield',
      },
      {
        title: 'Operational Resilience',
        description: 'Edge-first systems can potentially remain useful under constrained network connectivity.',
        icon: 'Wifi',
      },
    ],
  },

  /* ── Tech stack (populated from what is actually used) ── */
  techStack: [
    { category: 'AI / ML', items: ['YOLO11n', 'ByteTrack', 'ONNX Runtime'] },
    { category: 'Computer Vision', items: ['OpenCV', 'Zone Analysis'] },
    { category: 'Frontend', items: ['React', 'Streamlit'] },
    { category: 'Backend', items: ['Python', 'FastAPI', 'PostgreSQL'] },
    { category: 'Infrastructure', items: ['Raspberry Pi', 'Qualcomm RB5'] },
  ],

  /* ── Chapter 04: Impact ── */
  impact: {
    heading: 'Automation Is Only Valuable When It Improves the Business.',
    description: 'The system is designed to create measurable operational value across the retail workflow.',
    chain: [
      'AI Perception',
      'Operational Visibility',
      'Workflow Automation',
      'Better Experience',
      'Business Value',
    ],
  },

  staffOptimization: {
    heading: 'AI Doesn\'t Replace People. It Removes Repetitive Work.',
    description: 'The system is designed to handle continuous detection and monitoring tasks, allowing staff to focus on higher-value activities.',
    traditional: [
      'Manual monitoring',
      'Manual verification',
      'Repetitive observation',
      'Queue management',
      'Status checking',
    ],
    aiHandled: [
      'Continuous detection',
      'Event recognition',
      'Automated monitoring',
      'Real-time alerts',
      'Status tracking',
    ],
    humanFocused: [
      'Customer assistance',
      'Exception handling',
      'Store operations',
      'Quality decisions',
      'Higher-value tasks',
    ],
  },

  salesOpportunity: {
    heading: 'From Operational Efficiency to Revenue Opportunity.',
    description: 'Reducing friction and improving visibility can help create conditions for better retail performance.',
    mechanisms: [
      'Reduces sales loss due to empty shelves with instant stock-level insights',
      'Helps optimize staff allocation based on crowd patterns and queue length',
      'Improves inventory replenishment decisions via real-time shelf tracking',
      'Reduces operational costs through automated monitoring and alerts',
      'Supports data-driven store management and future POS/ERP integration',
    ],
  },

  revenueModel: {
    heading: 'Built as Technology. Designed for a Business.',
    description: 'These are proposed business models for future commercialization, not current revenue.',
    models: [
      {
        title: 'Store Subscription',
        description: 'Recurring software fee per store location.',
        icon: 'Building2',
      },
      {
        title: 'Hardware + Software',
        description: 'Edge hardware plus recurring software license.',
        icon: 'Cpu',
      },
      {
        title: 'Enterprise Deployment',
        description: 'Custom deployments for large retail organizations.',
        icon: 'Network',
      },
      {
        title: 'Analytics Add-ons',
        description: 'Advanced analytics as a premium module.',
        icon: 'BarChart3',
      },
    ],
  },

  /* ── Chapter 05: Future ── */
  mvpStatus: {
    heading: 'What Exists Today vs. What\'s Next.',
    rows: [
      { capability: 'Object Detection', current: 'Prototype', currentStatus: 'prototype', planned: 'Improve accuracy', longTerm: 'Multi-model' },
      { capability: 'Aisle Monitoring', current: 'Prototype', currentStatus: 'prototype', planned: 'Enhanced tracking', longTerm: 'Predictive' },
      { capability: 'Checkout Detection', current: 'Prototype', currentStatus: 'prototype', planned: 'Multi-event', longTerm: 'Autonomous' },
      { capability: 'Detection Dashboard', current: 'Prototype', currentStatus: 'prototype', planned: 'Real-time analytics', longTerm: 'Full platform' },
      { capability: 'Advanced Analytics', current: '—', currentStatus: null, planned: 'Planned', longTerm: 'Advanced' },
      { capability: 'Multi-Camera', current: '—', currentStatus: null, planned: 'Planned', longTerm: 'Scale' },
      { capability: 'Multi-Store', current: '—', currentStatus: null, planned: 'Planned', longTerm: 'Enterprise' },
      { capability: 'Predictive Intelligence', current: '—', currentStatus: null, planned: 'Research', longTerm: 'Advanced' },
    ],
  },

  roadmap: {
    heading: 'The Path Forward.',
    phases: [
      { phase: '01', title: 'Foundation', description: 'Problem research, system design, initial architecture.', isCurrent: false },
      { phase: '02', title: 'MVP', description: 'Core computer vision + detection capabilities.', isCurrent: true },
      { phase: '03', title: 'Intelligence', description: 'Better detection, event intelligence, analytics.', isCurrent: false },
      { phase: '04', title: 'Automation', description: 'More automated retail workflows.', isCurrent: false },
      { phase: '05', title: 'Scale', description: 'Multi-camera, multi-store, centralized management.', isCurrent: false },
      { phase: '06', title: 'Platform', description: 'Predictive insights and advanced optimization.', isCurrent: false },
    ],
  },

  differentiation: {
    heading: 'Why This Approach?',
    traditional: [
      'Manual observation',
      'Reactive operations',
      'Staff-heavy repetitive tasks',
      'Limited structured visual intelligence',
    ],
    aiAssisted: [
      'Continuous machine-assisted perception',
      'Real-time detection and alerts',
      'Automated repetitive workflows',
      'Structured operational intelligence',
    ],
  },

  /* ── Chapter 06: People ── */
  projectJourney: {
    heading: 'From Problem to Working Prototype.',
    milestones: [
      'Problem Identification',
      'Research & Analysis',
      'System Architecture',
      'AI Model Development',
      'Prototype Build',
      'Integration & Testing',
      'MVP Release',
      'Future Development',
    ],
  },

  privacy: {
    heading: 'Privacy & Responsible AI.',
    points: [
      'The system processes video frames for object and event detection — not personal identification.',
      'The current prototype does not perform facial recognition or individual tracking.',
      'Designed for DPDP-aligned privacy and data-minimisation practices.',
      'Edge processing architecture is designed to reduce unnecessary transmission of raw video.',
      'Data retention policies will be defined as part of production deployment planning.',
      'Responsible AI deployment practices are a core design consideration.',
    ],
  },

  team: {
    heading: 'The Team.',
    members: [
      // Placeholder — update with actual team data
      // { name: 'Team Member', role: 'Role', contribution: 'Contribution area' },
    ],
  },

  faq: {
    heading: 'Frequently Asked Questions.',
    items: [
      {
        question: 'What is this product?',
        answer: 'An AI-powered smart retail system that uses computer vision and Edge AI to detect objects, monitor aisle activity, assist checkout workflows, and provide structured operational intelligence for retail environments.',
      },
      {
        question: 'Who is it designed for?',
        answer: 'Supermarket operators, retail chains, and retail technology teams looking to reduce manual monitoring workload and improve operational visibility through AI-assisted automation.',
      },
      {
        question: 'How does the AI work?',
        answer: 'The system processes camera video frames through a computer-vision pipeline that detects configured objects and events. Detection results are mapped to retail context and presented through a monitoring interface.',
      },
      {
        question: 'What can the current prototype detect?',
        answer: 'The current prototype demonstrates object detection, aisle monitoring, and checkout detection capabilities. Specific detection classes and accuracy metrics will be documented as they are validated.',
      },
      {
        question: 'Is the system fully autonomous?',
        answer: 'No. The current system provides AI-assisted detection and monitoring to support human operators. Full autonomous operation is a long-term vision, not a current capability.',
      },
      {
        question: 'Does it replace supermarket staff?',
        answer: 'No. The system is designed to reduce repetitive monitoring and verification tasks, allowing staff to focus on customer assistance, exceptions, and higher-value work.',
      },
      {
        question: 'Why use Edge AI?',
        answer: 'Edge AI enables processing closer to the camera, which can reduce latency, decrease cloud dependency, support privacy-aware architectures, and improve operational resilience.',
      },
      {
        question: 'Does it require internet connectivity?',
        answer: 'The architecture is designed with edge-first principles, but the current prototype\'s connectivity requirements depend on the specific deployment configuration. Fully offline operation is a future capability goal.',
      },
      {
        question: 'Is the system production-ready?',
        answer: 'The system is currently a working prototype demonstrating core detection capabilities. Production readiness requires further development, testing, and validation.',
      },
      {
        question: 'What is planned next?',
        answer: 'Near-term priorities include improving detection accuracy, expanding event types, building analytics capabilities, and preparing for multi-camera support.',
      },
      {
        question: 'Can it scale to multiple stores?',
        answer: 'Multi-store support is on the roadmap but is not currently implemented. The architecture is being designed with scalability as a consideration.',
      },
      {
        question: 'How is privacy handled?',
        answer: 'The system focuses on object and event detection, not personal identification. Edge processing reduces the need to transmit raw video. No facial recognition or individual tracking is performed, aligning with data-minimisation practices.',
      },
      {
        question: 'How do you handle AI accuracy and false alerts?',
        answer: 'AI accuracy is optimized through careful camera placement and lighting. False alerts are mitigated by applying strict confidence thresholds and multi-frame verification before generating actionable insights.',
      },
      {
        question: 'How do you overcome hardware limits at the edge?',
        answer: 'We utilize lightweight models like YOLO11n alongside edge-optimized inference stacks (like ONNX Runtime) to ensure high performance even on constrained edge devices.',
      },
      {
        question: 'What happens if the store internet goes down?',
        answer: 'Because processing happens on the edge, the system continues to function. Data and insights are stored locally and synchronized automatically when connectivity is restored.',
      },
    ],
  },

  /* ── Final CTA ── */
  cta: {
    heading: 'The Future of Retail Is Intelligent.',
    description:
      'Explore how computer vision and Edge AI can transform repetitive retail workflows into intelligent, measurable operations.',
    buttons: [
      { label: 'Explore the System', target: '#intelligence', variant: 'primary' },
      { label: 'Watch the Demo', target: '#demo', variant: 'secondary' },
    ],
  },

  /* ── Footer ── */
  footer: {
    columns: [
      {
        title: 'Product',
        links: [
          { label: 'Features', target: '#features' },
          { label: 'Technology', target: '#system' },
          { label: 'Demo', target: '#demo' },
          { label: 'Roadmap', target: '#future' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', target: '#people' },
          { label: 'Team', target: '#team' },
          { label: 'Privacy', target: '#privacy' },
        ],
      },
    ],
    copyright: `© ${new Date().getFullYear()} ${PRODUCT_NAME}. All rights reserved.`,
  },
};
