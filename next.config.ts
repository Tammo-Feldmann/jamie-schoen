import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Disable image optimization, necessary for GitHub Pages
  },
};
export default nextConfig;
