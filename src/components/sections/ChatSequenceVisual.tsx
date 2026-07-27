"use client";

import { useEffect, useState } from "react";

const CYCLE_MS = 6800;

/**
 * Small looping widget shown on the Automation offer card: a system message
 * asking for a review, a customer reply, a star rating, then confirmation.
 */
function prefersReducedMotion(): boolean {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function ChatSequenceVisual() {
  const [step, setStep] = useState(() => (prefersReducedMotion() ? 4 : 0));

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const timeouts: ReturnType<typeof setTimeout>[] = [];

    function runCycle() {
      setStep(0);
      timeouts.push(setTimeout(() => setStep(1), 200));
      timeouts.push(setTimeout(() => setStep(2), 1300));
      timeouts.push(setTimeout(() => setStep(3), 2400));
      timeouts.push(setTimeout(() => setStep(4), 3700));
    }

    runCycle();
    const interval = setInterval(runCycle, CYCLE_MS);

    return () => {
      clearInterval(interval);
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="relative flex h-[150px] items-end overflow-hidden rounded-[14px] bg-brand-slate p-4">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full blur-lg"
        style={{ background: "radial-gradient(circle, rgba(62,99,240,0.35), transparent 70%)" }}
      />
      <div className="relative z-10 flex w-full flex-col justify-end gap-1.5">
        {step >= 1 && (
          <div className="max-w-[80%] self-start rounded-xl rounded-bl-sm bg-white/10 px-3 py-1.5 text-[11px] leading-snug text-white/90">
            Job is complete. Thanks for trusting us. Mind leaving a review?
          </div>
        )}
        {step >= 2 && (
          <div className="max-w-[80%] self-end rounded-xl rounded-br-sm bg-brand-teal px-3 py-1.5 text-[11px] leading-snug text-white">
            Absolutely! Thank you! 🎉
          </div>
        )}
        {step >= 3 && (
          <div className="flex justify-center gap-1 py-0.5" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => (
              <span key={i} className="text-sm text-teal-on-slate">
                ★
              </span>
            ))}
          </div>
        )}
        {step >= 4 && (
          <div className="self-center rounded-full bg-teal-on-slate px-2.5 py-1 text-[10px] font-bold text-brand-slate">
            Posted to Google ✓
          </div>
        )}
      </div>
    </div>
  );
}
