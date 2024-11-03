import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/jamie-schoen",
  images: {
    unoptimized: true, // Disable image optimization, necessary for GitHub Pages
  },
};
export default nextConfig;
