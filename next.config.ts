import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true, // Disable image optimization, necessary for GitHub Pages
  },
};
export default nextConfig;
