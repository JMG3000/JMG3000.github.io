import { describe, expect, it } from "vitest";

// INTENTIONAL FAILURE — ruleset #27215483 enforcement test only.
// Never merge this branch. A failing `Validate and build` job must block the PR.
describe("protected branch gate probe", () => {
  it("intentionally fails so required CI blocks merging", () => {
    expect("required check must block").toBe("intentionally failing");
  });
});
