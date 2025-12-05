"use client";

import { useMemo, useState, type CSSProperties } from "react";

const tabs = ["Concept", "Process", "Launch"];

export function RippleNavDemo() {
  const [activeIndex, setActiveIndex] = useState(0);

  const positions = useMemo(
    () =>
      tabs.map((_, index) => ({
        translate: `calc(${index} * 9.5rem)`,
        delay: `${index * 60}ms`
      })),
    []
  );

  return (
    <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-3xl bg-slate-900/40 px-6 py-10 ring-1 ring-sky-400/30">
      <div className="relative flex items-center gap-6 rounded-full border border-white/10 bg-slate-950/60 px-4 py-3">
        <span
          className="liquid-track pointer-events-none absolute inset-y-1 left-1 w-36"
          style={
            {
              "--tx": positions[activeIndex]?.translate ?? "0px"
            } as CSSProperties
          }
        >
          <span className="liquid-inner" />
          <span className="liquid-veil" />
        </span>
        {tabs.map((tab, index) => (
          <button
            key={tab}
            onMouseEnter={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
            className={`relative z-10 rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] transition-colors ${
              index === activeIndex
                ? "text-sky-100"
                : "text-sky-300/60 hover:text-sky-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <style jsx>{`
        .liquid-track {
          transform: translateX(var(--tx, 0));
          transition: transform 420ms cubic-bezier(0.27, 0.67, 0.35, 1.2);
        }
        .liquid-inner,
        .liquid-veil {
          position: absolute;
          inset: 0;
          border-radius: 999px;
        }
        .liquid-inner {
          background: radial-gradient(
              circle at 30% 20%,
              rgba(165, 243, 252, 0.85),
              rgba(56, 189, 248, 0.75) 55%,
              rgba(12, 74, 110, 0.55)
            )
            no-repeat;
          filter: blur(16px);
          opacity: 0.75;
          animation: pulse 4s ease-in-out infinite alternate;
        }
        .liquid-veil {
          background: conic-gradient(
            from 120deg,
            rgba(224, 242, 254, 0.9),
            rgba(34, 211, 238, 0.7),
            rgba(14, 165, 233, 0.8),
            rgba(59, 130, 246, 0.75),
            rgba(224, 242, 254, 0.9)
          );
          opacity: 0.85;
          filter: blur(22px);
          animation: ripple 6s ease-in-out infinite;
        }
        @keyframes pulse {
          0% {
            transform: scale(0.94);
          }
          50% {
            transform: scale(1.06);
          }
          100% {
            transform: scale(0.97);
          }
        }
        @keyframes ripple {
          0% {
            transform: scaleX(0.92);
          }
          50% {
            transform: scaleX(1.05);
          }
          100% {
            transform: scaleX(0.96);
          }
        }
      `}</style>
    </div>
  );
}
