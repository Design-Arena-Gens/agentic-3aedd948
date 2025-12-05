"use client";

export function MorphingCardDemo() {
  return (
    <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-3xl bg-slate-900/40 px-8 py-10 ring-1 ring-violet-500/30">
      <div className="liquid-card relative h-full w-full max-w-3xl overflow-hidden rounded-[34px] border border-white/10 bg-slate-950/60 p-8 text-left">
        <h3 className="text-3xl font-display font-semibold tracking-tight text-violet-100">
          Adaptive Liquid Surface
        </h3>
        <p className="mt-3 max-w-lg text-base text-violet-200/80">
          Morphing textures controlled by CSS custom properties respond to hover
          and create a luxurious, fluid depth effect.
        </p>
      </div>
      <style jsx>{`
        .liquid-card::before,
        .liquid-card::after {
          content: "";
          position: absolute;
          inset: -30%;
          background: radial-gradient(
            circle at 20% 20%,
            rgba(199, 210, 254, 0.85),
            rgba(124, 58, 237, 0.8) 45%,
            rgba(76, 29, 149, 0.5) 70%
          );
          animation: cardSpin 16s cubic-bezier(0.6, 0.2, 0.1, 0.95) infinite;
          transform-origin: center;
          filter: blur(40px);
          opacity: 0.75;
          mix-blend-mode: color-dodge;
          transition: transform 500ms ease, opacity 500ms ease;
        }
        .liquid-card::after {
          inset: -20%;
          background: conic-gradient(
            from 45deg,
            rgba(129, 140, 248, 0.9),
            rgba(192, 132, 252, 0.7),
            rgba(147, 197, 253, 0.8),
            rgba(76, 29, 149, 0.65),
            rgba(129, 140, 248, 0.9)
          );
          filter: blur(28px);
          animation-duration: 22s;
          mix-blend-mode: screen;
        }
        .liquid-card:hover::before {
          opacity: 1;
          transform: rotate(12deg) scale(1.05);
        }
        .liquid-card:hover::after {
          opacity: 0.85;
          transform: rotate(-10deg) scale(1.08);
        }
        .liquid-card {
          --blur-amount: 40px;
        }
        .liquid-card:hover {
          --blur-amount: 52px;
        }
        .liquid-card::before,
        .liquid-card::after {
          filter: blur(var(--blur-amount));
        }
        @keyframes cardSpin {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(120deg) scale(1.06);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
