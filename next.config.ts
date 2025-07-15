import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

console.log("IS ENV :", process.env.NODE_ENV);
const nextConfig: NextConfig = {
  /* config options here */
  basePath: isProd ? "/web-app-mb" : "",
  // basePath: "/web-app-mb",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
