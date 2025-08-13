import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.melivecode.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
