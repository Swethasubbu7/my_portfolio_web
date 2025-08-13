import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "cdn-icons-png.flaticon.com",
      "cdn.jsdelivr.net",
      "cdn.worldvectorlogo.com",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ Ignore ESLint errors when building
  },
};

export default nextConfig;
