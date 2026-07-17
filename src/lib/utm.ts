const STORAGE_KEY = "aeroscale_utm";
const UTM_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

export type UtmParams = Partial<Record<(typeof UTM_PARAMS)[number], string>>;

/**
 * Captures UTM params from the current URL (if present) and persists them
 * in sessionStorage so they survive navigation to another page (e.g. the
 * homepage -> growth scorecard -> contact form). Safe to call on every
 * page load; a no-op outside the browser.
 */
export function captureUtmParams(): void {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const found: UtmParams = {};
  let hasAny = false;

  for (const key of UTM_PARAMS) {
    const value = params.get(key);
    if (value) {
      found[key] = value;
      hasAny = true;
    }
  }

  if (hasAny) {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(found));
    } catch {
      // sessionStorage unavailable (private browsing, etc.) — ignore.
    }
  }
}

export function getStoredUtmParams(): UtmParams {
  if (typeof window === "undefined") return {};

  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as UtmParams) : {};
  } catch {
    return {};
  }
}
