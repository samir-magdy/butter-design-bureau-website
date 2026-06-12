import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://cdn.sanity.io/**")],
  },
  allowedDevOrigins: ['172.20.10.3']
};

export default nextConfig;
