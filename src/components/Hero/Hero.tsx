import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { siteContent } from '../../content/siteContent';
import { MediaFrame } from '../MediaFrame/MediaFrame';
import './Hero.css';

/**
 * Detection box data for the hero visualization.
 * These are DEMONSTRATION overlays, not real telemetry.
 */
const DEMO_DETECTIONS = [
  { id: 1, label: 'product', confidence: 0.94, top: '22%', left: '12%', width: '18%', height: '20%', delay: 0.3 },
  { id: 2, label: 'shelf', confidence: 0.91, top: '15%', left: '55%', width: '35%', height: '35%', delay: 0.6 },
  { id: 3, label: 'product', confidence: 0.88, top: '42%', left: '18%', width: '14%', height: '18%', delay: 0.9 },
  { id: 4, label: 'cart', confidence: 0.87, top: '62%', left: '60%', width: '22%', height: '25%', delay: 1.2 },
  { id: 5, label: 'product', confidence: 0.92, top: '55%', left: '10%', width: '16%', height: '15%', delay: 1.5 },
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { hero, productSnapshot } = siteContent;
  const [frameCount, setFrameCount] = useState(0);

  // Simulated frame counter for the HUD
  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setFrameCount((prev) => (prev + 1) % 9999);
    }, 100);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  const easeOut = [0.16, 1, 0.3, 1] as const;

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.15 + i * 0.12,
        duration: 0.7,
        ease: easeOut,
      },
    }),
  };

  const visualVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.4,
        duration: 0.9,
        ease: easeOut,
      },
    },
  };

  return (
    <section className="hero" id="hero" aria-label="Hero">
      {/* Ambient background */}
      <div className="hero__ambient" aria-hidden="true">
        <div className="hero__ambient-gradient" />
        <div className="hero__ambient-gradient hero__ambient-gradient--secondary" />
        <div className="hero__grid" />
      </div>

      {/* Content */}
      <div className="hero__content">
        {/* Text side */}
        <motion.div
          className="hero__text"
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero__eyebrow" custom={0} variants={textVariants}>
            {hero.eyebrow}
          </motion.p>

          <motion.h1 className="hero__headline" custom={1} variants={textVariants}>
            Making Retail <em>Smarter</em>, Faster, and More Intelligent.
          </motion.h1>

          <motion.p className="hero__description" custom={2} variants={textVariants}>
            {hero.description}
          </motion.p>

          <motion.div className="hero__ctas" custom={3} variants={textVariants}>
            {hero.ctas.map((cta) => (
              <a
                key={cta.label}
                href={cta.target}
                className={`btn btn--${cta.variant} btn--lg`}
              >
                {cta.label}
              </a>
            ))}
          </motion.div>

          {/* Product Snapshot */}
          <motion.div className="hero__snapshot" custom={4} variants={textVariants}>
            {productSnapshot.items.map((item) => (
              <div key={item.label} className="hero__snapshot-item">
                <span className="hero__snapshot-label">{item.label}</span>
                <span className="hero__snapshot-value">{item.value}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Visual side — product frame with detection overlay */}
        <motion.div
          className="hero__visual"
          variants={shouldReduceMotion ? undefined : visualVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero__product-frame">
            {/* Toolbar */}
            <div className="hero__product-toolbar">
              <div className="hero__product-toolbar-left">
                <span className="hero__product-dot" />
                <span className="hero__product-dot" />
                <span className="hero__product-dot" />
                <span className="hero__product-toolbar-title">
                  DETECTION · AISLE-CAM-01
                </span>
              </div>
              <div className="hero__product-toolbar-status">
                DEMO
              </div>
            </div>

            {/* Viewport */}
            <div className="hero__product-viewport">
              {/* Simulated retail scene */}
              <div className="hero__detection-scene">
                <MediaFrame mediaKey="hero-cinematic" />
              </div>

              {/* Detection boxes */}
              {DEMO_DETECTIONS.map((det) => (
                <div
                  key={det.id}
                  className="hero__detection-box"
                  style={{
                    top: det.top,
                    left: det.left,
                    width: det.width,
                    height: det.height,
                    animationDelay: `${det.delay}s`,
                  }}
                  aria-hidden="true"
                >
                  <span className="hero__detection-label">
                    {det.label} {det.confidence.toFixed(2)}
                  </span>
                </div>
              ))}

              {/* HUD corners */}
              <div className="hero__hud" aria-hidden="true">
                <div className="hero__hud-corner hero__hud-corner--tl" />
                <div className="hero__hud-corner hero__hud-corner--tr" />
                <div className="hero__hud-corner hero__hud-corner--bl" />
                <div className="hero__hud-corner hero__hud-corner--br" />

                <span className="hero__hud-label hero__hud-label--top">
                  EDGE INFERENCE · DEMO
                </span>
                <span className="hero__hud-label hero__hud-label--bottom-left">
                  {shouldReduceMotion ? 'FRM: 0042' : `FRM: ${String(frameCount).padStart(4, '0')}`}
                </span>
                <span className="hero__hud-label hero__hud-label--bottom-right">
                  DEMO VISUALIZATION
                </span>
              </div>

              {/* Scan line */}
              <div className="hero__scanline" aria-hidden="true" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="hero__bottom-fade" aria-hidden="true" />
    </section>
  );
}
