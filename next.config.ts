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
    ];
  },
};

export default nextConfig;
