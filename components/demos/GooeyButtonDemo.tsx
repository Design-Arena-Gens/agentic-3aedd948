"use client";

export function GooeyButtonDemo() {
  return (
    <div className="relative flex h-48 items-center justify-center overflow-hidden rounded-3xl bg-slate-900/40 px-8 py-10 ring-1 ring-cyan-500/40">
      <svg className="absolute h-0 w-0">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 24 -12"
              result="gooey"
            />
            <feBlend in="SourceGraphic" in2="gooey" />
          </filter>
        </defs>
      </svg>
      <button className="gooey-button relative isolate overflow-hidden rounded-full px-12 py-4 text-lg font-semibold uppercase tracking-[0.3em] text-cyan-50">
        <span className="relative z-10 mix-blend-difference">Hover to Flow</span>
        <span className="gooey-blur" />
        <span className="blob blob-1" />
        <span className="blob blob-2" />
        <span className="blob blob-3" />
        <span className="blob blob-4" />
      </button>
      <style jsx>{`
        .gooey-button {
          background: rgba(16, 185, 255, 0.2);
          filter: url(#gooey);
          box-shadow: inset 0 0 30px rgba(56, 189, 248, 0.35),
            0 20px 40px rgba(2, 132, 199, 0.25);
          transition: transform 320ms ease, box-shadow 320ms ease;
        }
        .gooey-button::before {
          content: "";
          position: absolute;
          inset: 1px;
          border-radius: 999px;
          background: radial-gradient(
            circle at 30% 30%,
            rgba(125, 211, 252, 0.9),
            rgba(14, 165, 233, 0.65) 40%,
            rgba(8, 47, 73, 0.6)
          );
          opacity: 0.7;
          transition: opacity 300ms ease;
        }
        .gooey-button:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: inset 0 0 40px rgba(34, 211, 238, 0.4),
            0 30px 60px rgba(14, 165, 233, 0.35);
        }
        .gooey-button:hover::before {
          opacity: 1;
        }
        .gooey-blur {
          position: absolute;
          inset: 0;
          border-radius: 999px;
          background: conic-gradient(
            from 120deg,
            rgba(165, 243, 252, 0.7),
            rgba(6, 182, 212, 0.8),
            rgba(14, 165, 233, 0.7),
            rgba(34, 211, 238, 0.95)
          );
          opacity: 0.4;
          filter: blur(20px);
          transition: opacity 320ms ease, filter 320ms ease;
        }
        .gooey-button:hover .gooey-blur {
          opacity: 0.75;
          filter: blur(26px);
        }
        .blob {
          position: absolute;
          border-radius: 999px;
          background: linear-gradient(
            120deg,
            rgba(240, 249, 255, 0.9),
            rgba(56, 189, 248, 0.9)
          );
          opacity: 0.8;
          mix-blend-mode: screen;
          transition: transform 420ms ease-in-out;
        }
        .blob-1 {
          width: 120px;
          height: 120px;
          inset: auto auto -40px 10%;
          animation: floatOne 8s ease-in-out infinite;
        }
        .blob-2 {
          width: 140px;
          height: 140px;
          inset: auto 12% -50px auto;
          animation: floatTwo 9s ease-in-out infinite;
        }
        .blob-3 {
          width: 100px;
          height: 100px;
          inset: -30px 18% auto auto;
          animation: floatThree 7s ease-in-out infinite;
        }
        .blob-4 {
          width: 80px;
          height: 80px;
          inset: -20px auto auto 18%;
          animation: floatFour 10s ease-in-out infinite;
        }
        .gooey-button:hover .blob-1 {
          transform: translate3d(6px, -8px, 0) scale(1.05);
        }
        .gooey-button:hover .blob-2 {
          transform: translate3d(-8px, -10px, 0) scale(1.1);
        }
        .gooey-button:hover .blob-3 {
          transform: translate3d(10px, 8px, 0) scale(1.12);
        }
        .gooey-button:hover .blob-4 {
          transform: translate3d(-12px, 6px, 0) scale(1.15);
        }
        @keyframes floatOne {
          0%,
          100% {
            transform: translate3d(-8px, 12px, 0) scale(1);
          }
          50% {
            transform: translate3d(12px, -6px, 0) scale(1.05);
          }
        }
        @keyframes floatTwo {
          0%,
          100% {
            transform: translate3d(12px, -4px, 0) scale(0.95);
          }
          50% {
            transform: translate3d(-10px, 10px, 0) scale(1.05);
          }
        }
        @keyframes floatThree {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(-12px, 8px, 0) scale(1.1);
          }
        }
        @keyframes floatFour {
          0%,
          100% {
            transform: translate3d(12px, -12px, 0) scale(1);
          }
          50% {
            transform: translate3d(-14px, 6px, 0) scale(1.08);
          }
        }
      `}</style>
    </div>
  );
}
