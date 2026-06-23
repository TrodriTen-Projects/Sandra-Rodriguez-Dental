import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export → deployed as plain files on Cloudflare Pages (no Node runtime).
  output: "export",
  // The on-demand Image Optimizer is a server feature; with a static export we
  // serve the already-optimized .webp assets in /public as-is.
  images: {
    unoptimized: true,
  },
  // Cloudflare Pages serves /route/ as /route/index.html — trailing slashes keep
  // the generated files and internal links consistent.
  trailingSlash: true,
};

export default nextConfig;
