"use client";

import { useEffect, useState } from "react";

const CYCLE_MS = 6800;

/**
 * Small looping widget shown on the Ad Optimization offer card: two A/B test
 * variants racing to a result, then a "winner" callout.
 */
function prefersReducedMotion(): boolean {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function AdOptimizationDashboardVisual() {
  const [filled, setFilled] = useState(prefersReducedMotion);
  const [showBadge, setShowBadge] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const timeouts: ReturnType<typeof setTimeout>[] = [];

    function runCycle() {
      setFilled(false);
      setShowBadge(false);
      timeouts.push(setTimeout(() => setFilled(true), 300));
      timeouts.push(setTimeout(() => setShowBadge(true), 1500));
    }

    runCycle();
    const interval = setInterval(runCycle, CYCLE_MS);

    return () => {
      clearInterval(interval);
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="relative flex h-[150px] flex-col justify-center gap-3 overflow-hidden rounded-[14px] bg-brand-slate-secondary p-5">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full blur-lg"
        style={{ background: "radial-gradient(circle, rgba(62,99,240,0.35), transparent 70%)" }}
      />
      <div className="relative z-10 space-y-3">
        <div className="flex items-center gap-2.5">
          <span className="w-12 shrink-0 text-[11px] font-semibold text-slate-muted">Ad A</span>
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-brand-teal transition-[width] duration-[1100ms] ease-out"
              style={{ width: filled ? "38%" : "0%" }}
            />
          </div>
          <span className="w-9 shrink-0 text-right text-[11px] font-bold text-white">2.4%</span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="w-12 shrink-0 text-[11px] font-semibold text-slate-muted">Ad B</span>
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-teal-on-slate transition-[width] duration-[1100ms] ease-out"
              style={{ width: filled ? "68%" : "0%" }}
            />
          </div>
          <span className="w-9 shrink-0 text-right text-[11px] font-bold text-white">4.1%</span>
        </div>
        <div
          className={`flex justify-end transition-all duration-[400ms] ${
            showBadge ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
          }`}
        >
          <span className="rounded-full bg-teal-on-slate px-2.5 py-1 text-[10.5px] font-bold text-brand-slate">
            Variant B winning
          </span>
        </div>
      </div>
    </div>
  );
}
