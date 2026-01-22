import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Demo_site',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
