"use client";

export function LiquidTextRevealDemo() {
  return (
    <div className="relative flex h-56 flex-col items-center justify-center overflow-hidden rounded-3xl bg-slate-900/40 px-8 py-12 ring-1 ring-emerald-400/30">
      <div className="relative max-w-3xl text-center">
        <div className="liquid-headline">
          <span>Framed in Pure Fluidity</span>
          <span className="liquid-overlay" aria-hidden="true" />
        </div>
        <p className="mt-4 text-base text-emerald-100/70">
          A goo-filtered mask sweeps across typography to reveal a shimmering
          chromatic trail. Perfect for hero copy with motion.
        </p>
      </div>
      <style jsx>{`
        .liquid-headline {
          position: relative;
          display: inline-block;
          padding: 0.4rem 1.8rem;
          border-radius: 999px;
          font-family: "Space Grotesk", system-ui, sans-serif;
          font-size: clamp(1.8rem, 3vw, 3.1rem);
          font-weight: 600;
          letter-spacing: 0.04em;
          color: rgba(209, 250, 229, 0.86);
          overflow: hidden;
          isolation: isolate;
          background: rgba(16, 185, 129, 0.14);
          border: 1px solid rgba(52, 211, 153, 0.4);
          filter: drop-shadow(0 12px 30px rgba(16, 185, 129, 0.35));
        }
        .liquid-overlay {
          position: absolute;
          inset: -120%;
          background: conic-gradient(
            from 180deg at 50% 50%,
            rgba(187, 247, 208, 0.95),
            rgba(45, 212, 191, 0.9),
            rgba(110, 231, 183, 0.8),
            rgba(56, 189, 248, 0.95),
            rgba(187, 247, 208, 0.95)
          );
          mix-blend-mode: screen;
          filter: url(#reveal-goo) blur(10px);
          animation: sweep 6.5s ease-in-out infinite;
        }
        @keyframes sweep {
          0% {
            transform: translateX(-40%) rotate(0deg);
          }
          30% {
            transform: translateX(60%) rotate(12deg);
          }
          60% {
            transform: translateX(-20%) rotate(-10deg);
          }
          100% {
            transform: translateX(50%) rotate(0deg);
          }
        }
      `}</style>
      <svg className="absolute h-0 w-0">
        <defs>
          <filter id="reveal-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 40 -20"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
