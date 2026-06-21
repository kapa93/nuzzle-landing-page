import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Output as a standard Next.js app — Vercel handles this automatically.
  // No custom output needed for Vercel deployments.
  async redirects() {
    return [
      {
        source: "/support",
        destination: "/#contact",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
