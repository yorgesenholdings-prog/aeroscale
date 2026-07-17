"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackEvent, type AnalyticsEventName, type AnalyticsProperties } from "@/lib/analytics";

interface AnalyticsLinkProps {
  href: string;
  eventName: AnalyticsEventName;
  eventProperties?: AnalyticsProperties;
  className?: string;
  children: ReactNode;
}

/**
 * A Link that fires an analytics event on click. Kept as a thin client
 * boundary so parent Server Components can pass already-rendered JSX
 * (icons, etc.) as children without hitting the "functions can't cross
 * the server/client boundary" restriction that a fully client-rendered
 * card would run into.
 */
export function AnalyticsLink({ href, eventName, eventProperties, className, children }: AnalyticsLinkProps) {
  return (
    <Link href={href} className={className} onClick={() => trackEvent(eventName, eventProperties)}>
      {children}
    </Link>
  );
}
