import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "grouple.tech",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "grouple.tech",
        port: "",
        pathname: "/og-image.png",
      },
    ],
  },
};

export default nextConfig;
