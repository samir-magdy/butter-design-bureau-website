import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://cdn.sanity.io/**")],
  },
  allowedDevOrigins: ['192.168.1.126']
};

export default nextConfig;
