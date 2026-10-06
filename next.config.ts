import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages, which has no server to resize images.
  output: "export",
  images: { unoptimized: true },
  // Emit /contact/index.html so page addresses resolve on GitHub Pages.
  trailingSlash: true,
};

export default nextConfig;
