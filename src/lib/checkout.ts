/** True when a config value is still an unfilled `PLACEHOLDER_*` stand-in for a real Stripe/Tally URL. */
export function isPlaceholderLink(value: string): boolean {
  return value.startsWith("PLACEHOLDER_");
}
