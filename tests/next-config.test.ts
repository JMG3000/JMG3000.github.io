import { describe, expect, it } from "vitest";

import nextConfig from "@/next.config";

describe("Next.js deployment configuration", () => {
  it("declares a GitHub Pages-compatible static export", () => {
    expect(nextConfig.output).toBe("export");
    expect(nextConfig.images?.unoptimized).toBe(true);
    expect(nextConfig.reactStrictMode).toBe(true);
  });
});
