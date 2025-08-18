import type { NextConfig } from "next";
// const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  devIndicators: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
