import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  experimental: {
    serverActions: true,  // Ensure this is enabled
  },
};


export default nextConfig;
