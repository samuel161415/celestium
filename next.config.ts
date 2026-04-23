import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Static export has no Image Optimization API; next/image must use native <img> behavior
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
