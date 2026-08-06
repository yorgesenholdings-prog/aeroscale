import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The old à la carte service catalog, bundles, and instant-quote calculator
  // were retired in favor of the 3-tier system. These redirects catch any
  // existing backlinks/bookmarks to the old URLs rather than 404ing.
  async redirects() {
    return [
      { source: "/services/projects", destination: "/pricing", permanent: true },
      { source: "/services/projects/:slug*", destination: "/pricing", permanent: true },
      { source: "/services/support", destination: "/pricing", permanent: true },
      { source: "/services/support/:slug*", destination: "/pricing", permanent: true },
      { source: "/bundles", destination: "/pricing", permanent: true },
      { source: "/instant-quote", destination: "/pricing", permanent: true },

      // The 3-tier system (Foundation/Growth System/Full System) and the two
      // standalone offers were retired in favor of a single "AeroScale Full
      // System" offer. These redirects catch old onboarding-URL backlinks —
      // all onboarding traffic now collapses to one canonical route.
      { source: "/onboarding/foundation", destination: "/onboarding", permanent: true },
      { source: "/onboarding/growth-system", destination: "/onboarding", permanent: true },
      { source: "/onboarding/full-system", destination: "/onboarding", permanent: true },
      { source: "/onboarding/automation", destination: "/onboarding", permanent: true },
      { source: "/onboarding/marketing-management", destination: "/onboarding", permanent: true },
    ];
  },
};

export default nextConfig;
