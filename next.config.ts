import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    unoptimized: true, // Required for Netlify static export
  },
  output: 'export',
};

export default nextConfig;
