import {
  Building2,
  Compass,
  Megaphone,
  Settings,
  Workflow,
  Search,
  BarChart3,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface DiagramNode {
  label: string;
  icon: LucideIcon;
  x: number;
  y: number;
}

const nodes: DiagramNode[] = [
  { label: "Strategy", icon: Compass, x: 50, y: 11 },
  { label: "Marketing", icon: Megaphone, x: 83, y: 30.5 },
  { label: "Operations", icon: Settings, x: 83, y: 69.5 },
  { label: "Systems", icon: Workflow, x: 50, y: 89 },
  { label: "Research", icon: Search, x: 17, y: 69.5 },
  { label: "Analytics", icon: BarChart3, x: 17, y: 30.5 },
];

/**
 * Shows a central business supported by six connected functions.
 * Pure CSS/SVG — no external image dependency.
 */
export function HeroDiagram() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-md"
      role="img"
      aria-label="A central business supported by six connected functions: strategy, marketing, operations, systems, research, and analytics."
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        focusable="false"
      >
        {nodes.map((node) => (
          <line
            key={node.label}
            x1="50"
            y1="50"
            x2={node.x}
            y2={node.y}
            stroke="#00a896"
            strokeWidth="0.6"
            strokeDasharray="2.5 2"
          />
        ))}
      </svg>

      <div
        className="absolute flex flex-col items-center gap-1.5 text-center"
        style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-slate text-white shadow-md sm:h-20 sm:w-20">
          <Building2 size={28} aria-hidden="true" />
        </div>
        <span className="text-xs font-semibold text-brand-slate sm:text-sm">Your Business</span>
      </div>

      {nodes.map((node) => (
        <div
          key={node.label}
          className="absolute flex flex-col items-center gap-1 text-center"
          style={{ left: `${node.x}%`, top: `${node.y}%`, transform: "translate(-50%, -50%)" }}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-teal-text bg-white text-teal-text shadow-sm sm:h-12 sm:w-12">
            <node.icon size={18} aria-hidden="true" />
          </div>
          <span className="text-[11px] font-medium text-text-muted sm:text-xs">{node.label}</span>
        </div>
      ))}
    </div>
  );
}
