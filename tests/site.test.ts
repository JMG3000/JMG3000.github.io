import { describe, expect, it } from "vitest";

import { readPost } from "@/config/site";

describe("readPost", () => {
  it("loads the preserved markdown-extension post", () => {
    const post = readPost("2025-11-09-welcome-to-jekyll");

    expect(post.meta.title).toBe("Welcome to Jekyll!");
    expect(post.content).toContain("Jekyll requires blog post files");
  });

  it("reports a missing post by slug", () => {
    expect(() => readPost("missing-post")).toThrow("Post not found: missing-post");
  });

  it("rejects path traversal", () => {
    expect(() => readPost("../package")).toThrow("Invalid post slug");
  });
});
