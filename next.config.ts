import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow external image sources if needed
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Server-side API configuration
  serverExternalPackages: ["openai"],
};

export default nextConfig;
