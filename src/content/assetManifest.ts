/* ============================================================
   ASSET MANIFEST — Media status and fallback configuration
   ============================================================
   Maps every media slot to its current status.
   When real assets are added, update the path here.
   Components use MediaFrame which consumes this manifest.
   ============================================================ */

export type MediaCategory = 'conceptual' | 'evidence' | 'decorative';

export interface AssetEntry {
  category: MediaCategory;
  video: string | null;
  poster: string | null;
  fallbackLabel: string;
  status: 'available' | 'placeholder' | 'missing';
}

export const assetManifest: Record<string, AssetEntry> = {
  /* ── Conceptual / Cinematic (Category A) ── */
  'hero-cinematic': {
    category: 'conceptual',
    video: '/assets/cinematic/hero-video.mp4',
    poster: '/assets/cinematic/hero-poster.jpg',
    fallbackLabel: 'Edge AI × Smart Retail',
    status: 'available',
  },
  'retail-transformation': {
    category: 'conceptual',
    video: null,
    poster: null,
    fallbackLabel: 'Retail Transformation Visualization',
    status: 'missing',
  },
  'edge-ai-concept': {
    category: 'conceptual',
    video: null,
    poster: null,
    fallbackLabel: 'Edge AI Processing Visualization',
    status: 'missing',
  },

  /* ── Product Evidence (Category B) — NEVER use AI-generated ── */
  'demo-hardware-flow': {
    category: 'evidence',
    video: '/assets/cinematic/hardware-flow.mp4',
    poster: null,
    fallbackLabel: 'Hardware Architecture Flow',
    status: 'available',
  },
  'demo-object-detection': {
    category: 'evidence',
    video: null,
    poster: '/assets/demo-object-detection.png',
    fallbackLabel: 'Object detection demo — footage to be added',
    status: 'available',
  },
  'demo-aisle-detection': {
    category: 'evidence',
    video: null,
    poster: '/assets/demo-aisle-detection.png',
    fallbackLabel: 'Aisle detection demo — footage to be added',
    status: 'available',
  },
  'demo-checkout-detection': {
    category: 'evidence',
    video: null,
    poster: '/assets/demo-checkout-detection.png',
    fallbackLabel: 'Checkout detection demo — footage to be added',
    status: 'available',
  },
  'demo-dashboard': {
    category: 'evidence',
    video: null,
    poster: '/assets/demo-dashboard.png',
    fallbackLabel: 'Dashboard UI — screenshot to be added',
    status: 'available',
  },
  'demo-realtime': {
    category: 'evidence',
    video: null,
    poster: null,
    fallbackLabel: 'Real-time processing demo — footage to be added',
    status: 'missing',
  },
  'demo-visualization': {
    category: 'evidence',
    video: null,
    poster: null,
    fallbackLabel: 'Detection visualization — screenshot to be added',
    status: 'missing',
  },
  'demo-intelligence': {
    category: 'evidence',
    video: null,
    poster: '/assets/retail-intelligence.png',
    fallbackLabel: 'Retail intelligence — planned feature',
    status: 'available',
  },
  'demo-optimization': {
    category: 'evidence',
    video: null,
    poster: '/assets/staff-workload-optimization.png',
    fallbackLabel: 'Staff optimization — planned feature',
    status: 'available',
  },
  'demo-edge': {
    category: 'evidence',
    video: null,
    poster: '/assets/scalable-edge-architecture.png',
    fallbackLabel: 'Edge architecture — long-term roadmap',
    status: 'available',
  },

  /* ── Decorative / Technical (Category C) ── */
  'architecture-diagram': {
    category: 'decorative',
    video: null,
    poster: null,
    fallbackLabel: 'System Architecture',
    status: 'placeholder', // built with CSS/SVG
  },
  'pipeline-animation': {
    category: 'decorative',
    video: null,
    poster: null,
    fallbackLabel: 'AI Pipeline',
    status: 'placeholder', // built with CSS/SVG
  },
};
