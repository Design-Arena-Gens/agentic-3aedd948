import { CodeBlock } from "@/components/CodeBlock";
import { GooeyButtonDemo } from "@/components/demos/GooeyButtonDemo";
import { LiquidTextRevealDemo } from "@/components/demos/LiquidTextRevealDemo";
import { MorphingCardDemo } from "@/components/demos/MorphingCardDemo";
import { RippleNavDemo } from "@/components/demos/RippleNavDemo";

const sections = [
  {
    title: "Hyperlux Gooey CTA",
    description:
      "A molten call-to-action that responds with depth and bloom, perfect for premium landing pages and product hero experiences.",
    Demo: GooeyButtonDemo,
    code: String.raw`<button class="cta">
  <span class="cta__text">Hover to Flow</span>
  <span class="cta__blur"></span>
  <span class="cta__blob"></span>
  <span class="cta__blob"></span>
</button>

.cta {
  filter: url(#gooey);
  box-shadow: inset 0 0 30px rgba(56, 189, 248, 0.4),
    0 30px 50px rgba(2, 132, 199, 0.35);
  transition: transform 320ms ease, box-shadow 320ms ease;
}
.cta:hover {
  transform: translateY(-6px) scale(1.02);
}
.cta__blob:nth-child(3) {
  animation: float 8s ease-in-out infinite;
}
@keyframes float {
  50% {
    transform: translate3d(12px, -6px, 0) scale(1.05);
  }
}`
  },
  {
    title: "Gradient Morphing Feature Card",
    description:
      "Layered conic gradients and blur fields animate slowly to craft a living, liquid surface for flagship content sections.",
    Demo: MorphingCardDemo,
    code: String.raw`.feature-card::before {
  content: "";
  inset: -30%;
  position: absolute;
  background: radial-gradient(
    circle at 20% 20%,
    rgba(199, 210, 254, 0.85),
    rgba(124, 58, 237, 0.8)
  );
  filter: blur(var(--blur-amount, 40px));
  animation: orbit 16s cubic-bezier(0.6, 0.2, 0.1, 0.95) infinite;
}
.feature-card:hover {
  --blur-amount: 52px;
}
@keyframes orbit {
  50% {
    transform: rotate(120deg) scale(1.06);
  }
}`
  },
  {
    title: "Liquid Spectrum Reveal",
    description:
      "A goo-filter masked sweep glides over headline copy, bathing the text in iridescent color without sacrificing readability.",
    Demo: LiquidTextRevealDemo,
    code: String.raw`.headline {
  position: relative;
  overflow: hidden;
  border-radius: 999px;
  background: rgba(16, 185, 129, 0.14);
  border: 1px solid rgba(52, 211, 153, 0.4);
}
.headline::after {
  content: "";
  inset: -120%;
  position: absolute;
  background: conic-gradient(
    rgba(187, 247, 208, 0.95),
    rgba(45, 212, 191, 0.9),
    rgba(56, 189, 248, 0.95)
  );
  filter: url(#reveal-goo) blur(10px);
  animation: sweep 6.5s ease-in-out infinite;
}`
  },
  {
    title: "Ripple Trail Navigation",
    description:
      "Highlight tabs with a floating, liquid highlight that tracks user intent and sells polished interaction craftsmanship.",
    Demo: RippleNavDemo,
    code: String.raw`.nav {
  position: relative;
  display: inline-flex;
  gap: 1.5rem;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.65);
}
.nav__active {
  position: absolute;
  inset: 0.35rem;
  width: 9rem;
  border-radius: 999px;
  background: radial-gradient(circle at 30% 20%, #a5f3fc 0%, #0ea5e9 55%);
  filter: blur(18px);
  transform: translateX(calc(var(--index) * 9.5rem));
  transition: transform 420ms cubic-bezier(0.27, 0.67, 0.35, 1.2);
}`
  }
];

export default function Page() {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 py-20 sm:px-10">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[60px] border border-white/5 bg-slate-950/40">
        <div className="noise" />
      </div>
      <header className="relative z-10 flex flex-col gap-6 text-center">
        <div className="mx-auto max-w-3xl rounded-full border border-white/10 bg-slate-900/60 px-6 py-2 text-xs uppercase tracking-[0.4em] text-sky-300/70">
          Studio-grade liquid transitions
        </div>
        <h1 className="font-display text-4xl font-semibold leading-tight text-sky-100 sm:text-5xl">
          Make your product feel weightless with premium fluid motion
        </h1>
        <p className="mx-auto max-w-2xl text-base text-sky-200/70">
          These hand-picked transitions dramatize key actions with gooey blooms,
          morphing gradients, and intelligent ripple highlights. Each section
          includes demo-ready markup alongside the production styles.
        </p>
      </header>

      <div className="gridlines relative z-10 overflow-hidden rounded-[42px] border border-white/5 bg-slate-950/40 p-10">
        <div className="grid gap-16">
          {sections.map(({ title, description, Demo, code }) => (
            <section key={title} className="grid gap-6">
              <div className="grid gap-2">
                <h2 className="font-display text-2xl font-semibold text-slate-100">
                  {title}
                </h2>
                <p className="max-w-3xl text-sm text-slate-300/80">
                  {description}
                </p>
              </div>
              <Demo />
              <CodeBlock code={code} />
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
