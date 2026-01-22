import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If deploying to GitHub Pages with a repository name, uncomment and set:
  // basePath: '/resume-site',
  // trailingSlash: true,
};

export default nextConfig;
