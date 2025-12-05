type CodeBlockProps = {
  code: string;
};

export function CodeBlock({ code }: CodeBlockProps) {
  return (
    <pre className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-sm leading-relaxed text-sky-100 shadow-[0_0_40px_rgba(56,189,248,0.2)] backdrop-blur">
      <code>{code}</code>
    </pre>
  );
}
