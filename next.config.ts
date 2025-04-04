import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  experimental: {
    serverActions: {} // Ensure this is enabled
  },
};


export default nextConfig;
