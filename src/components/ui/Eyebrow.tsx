export function Eyebrow({ children, className = "" }: { children: string; className?: string }) {
  return (
    <span
      className={`inline-block text-xs font-bold uppercase tracking-widest text-teal-text ${className}`}
    >
      {children}
    </span>
  );
}
