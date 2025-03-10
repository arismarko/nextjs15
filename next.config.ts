import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    VITE_CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN: "xxx",
    VITE_CONTENTFUL_ACCESS_TOKEN: "xxx",
    VITE_CONTENTFUL_SPACE_ID: "xxx",
    VITE_CONTENTFUL_ENVIRONMENT: "xxx",
  },
};

export default nextConfig;