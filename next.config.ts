import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The old à la carte service catalog, bundles, and instant-quote calculator
  // were retired in favor of the 3-tier system. These redirects catch any
  // existing backlinks/bookmarks to the old URLs rather than 404ing.
  //
  // TODO: once /pricing exists (the new 3-tier page), repoint all of these
  // from "/" to "/pricing".
  async redirects() {
    return [
      { source: "/services/projects", destination: "/", permanent: true },
      { source: "/services/projects/:slug*", destination: "/", permanent: true },
      { source: "/services/support", destination: "/", permanent: true },
      { source: "/services/support/:slug*", destination: "/", permanent: true },
      { source: "/bundles", destination: "/", permanent: true },
      { source: "/instant-quote", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
