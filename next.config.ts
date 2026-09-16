import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Native Next.js builds should type-check only the app surface. Cloudflare's
  // Worker entry points are validated by the Vinext/Sites build instead.
  typescript: {
    tsconfigPath: "tsconfig.vercel.json",
  },
};

export default nextConfig;
