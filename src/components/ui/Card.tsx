import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl bg-white p-7 shadow-[0_1px_3px_rgba(20,20,26,0.04)] ${className}`}
    >
      {children}
    </div>
  );
}
