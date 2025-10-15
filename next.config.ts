import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { 
    remotePatterns: [] 
  },
  experimental: { 
    mdxRs: true 
  }
};

export default nextConfig;
