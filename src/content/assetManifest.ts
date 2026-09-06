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
    video: null,
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
  'demo-object-detection': {
    category: 'evidence',
    video: null,
    poster: null,
    fallbackLabel: 'Object detection demo — footage to be added',
    status: 'missing',
  },
  'demo-aisle-detection': {
    category: 'evidence',
    video: null,
    poster: null,
    fallbackLabel: 'Aisle detection demo — footage to be added',
    status: 'missing',
  },
  'demo-checkout-detection': {
    category: 'evidence',
    video: null,
    poster: null,
    fallbackLabel: 'Checkout detection demo — footage to be added',
    status: 'missing',
  },
  'demo-dashboard': {
    category: 'evidence',
    video: null,
    poster: null,
    fallbackLabel: 'Dashboard UI — screenshot to be added',
    status: 'missing',
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
    poster: null,
    fallbackLabel: 'Retail intelligence — planned feature',
    status: 'missing',
  },
  'demo-optimization': {
    category: 'evidence',
    video: null,
    poster: null,
    fallbackLabel: 'Staff optimization — planned feature',
    status: 'missing',
  },
  'demo-edge': {
    category: 'evidence',
    video: null,
    poster: null,
    fallbackLabel: 'Edge architecture — long-term roadmap',
    status: 'missing',
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
