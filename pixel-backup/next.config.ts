import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true, // Required for Netlify static export
    qualities: [75, 90],
  },
  output: 'export',
  experimental: {
    cpus: 1,
  },
};

export default nextConfig;
