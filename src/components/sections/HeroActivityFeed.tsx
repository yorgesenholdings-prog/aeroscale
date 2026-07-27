"use client";

import { useEffect, useRef, useState } from "react";

interface FeedItem {
  icon: string;
  title: string;
  meta: string;
}

const feedItems: FeedItem[] = [
  { icon: "✓", title: "Review request sent — J. Alvarez", meta: "Automation · just now" },
  { icon: "★", title: "5-star review posted to Google", meta: "Automation · just now" },
  { icon: "↑", title: "Audience targeting refined", meta: "Ad Optimization · just now" },
  { icon: "✓", title: "Review request sent — M. Chen", meta: "Automation · just now" },
  { icon: "⚡", title: "Ad copy variant B outperforming", meta: "Ad Optimization · just now" },
  { icon: "★", title: "5-star review posted to Google", meta: "Automation · just now" },
  { icon: "✓", title: "Review request sent — R. Kim", meta: "Automation · just now" },
  { icon: "↑", title: "Weekly performance report ready", meta: "Ad Optimization · just now" },
];

const MAX_ITEMS = 4;
const CYCLE_MS = 2600;

/**
 * The homepage hero's signature visual: a dark "Live Activity" card that
 * interleaves events from both flagship offers (Automation + Ad Optimization)
 * rather than favoring either one specifically.
 */
export function HeroActivityFeed() {
  const [visibleItems, setVisibleItems] = useState<(FeedItem & { key: number })[]>(() =>
    feedItems.slice(0, MAX_ITEMS).map((item, i) => ({ ...item, key: i }))
  );
  const indexRef = useRef(MAX_ITEMS);
  const keyRef = useRef(MAX_ITEMS);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = setInterval(() => {
      const nextItem = feedItems[indexRef.current % feedItems.length];
      indexRef.current += 1;
      const key = keyRef.current;
      keyRef.current += 1;
      setVisibleItems((prev) => [{ ...nextItem, key }, ...prev].slice(0, MAX_ITEMS));
    }, CYCLE_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full min-h-[360px] overflow-hidden rounded-[20px] bg-brand-slate p-7">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full blur-2xl"
        style={{ background: "radial-gradient(circle, rgba(62,99,240,0.35), transparent 70%)" }}
      />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center gap-2.5 text-xs font-semibold tracking-widest text-slate-muted uppercase">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-on-slate opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-on-slate" />
          </span>
          Live Activity
        </div>

        <div className="mt-6 flex-1 space-y-3 overflow-hidden">
          {visibleItems.map((item) => (
            <div
              key={item.key}
              className="flex items-center gap-3.5 rounded-xl border border-white/[0.07] bg-white/[0.035] p-3.5"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-brand-teal text-sm font-bold text-teal-on-dark">
                {item.icon}
              </div>
              <div>
                <p className="text-[13.5px] leading-tight font-semibold text-white">{item.title}</p>
                <p className="mt-0.5 text-[11.5px] text-slate-muted">{item.meta}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex gap-8 border-t border-white/[0.09] pt-4">
          <div>
            <p className="font-display text-xl font-bold text-white">128</p>
            <p className="text-[11.5px] text-slate-muted">Actions this week</p>
          </div>
          <div>
            <p className="font-display text-xl font-bold text-white">4.9★</p>
            <p className="text-[11.5px] text-slate-muted">Avg. review rating</p>
          </div>
        </div>
      </div>
    </div>
  );
}
