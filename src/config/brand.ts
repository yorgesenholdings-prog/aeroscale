/**
 * Brand color reference for use in JS/TS (inline SVG diagrams, chart fills).
 * These values must stay in sync with the CSS custom properties defined in
 * src/app/globals.css. Components should prefer Tailwind utility classes
 * (e.g. `bg-brand-teal`) over importing these directly — reach for this file
 * only when a raw hex value is required, such as inline SVG `stroke`/`fill`.
 */
export const brandColors = {
  white: "#ffffff",
  slate: "#3a4f66",
  slateDark: "#2d4054",
  teal: "#00a896",
  tealDark: "#008c7d",
  text: "#1f2933",
  textMuted: "#5f6b76",
  surface: "#f7f9fa",
  surfaceSlate: "#eef2f5",
  border: "#dce3e8",
  disabled: "#e8edf0",
  tealOnDark: "#102a2a",
  error: "#b3261e",
} as const;

export const brandName = {
  full: "AeroScale",
  first: "Aero",
  second: "Scale",
} as const;
