import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  // Optionally, add any other Next.js config below
}

export default nextConfig;
