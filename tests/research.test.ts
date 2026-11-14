import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";

import {
  getResearchDocumentSlugs,
  readResearchDocument,
  readResearchIndex,
  renderResearchMarkdown,
} from "@/config/research";

const temporaryDirectories: string[] = [];

afterEach(() => {
  for (const directory of temporaryDirectories.splice(0)) {
    fs.rmSync(directory, { recursive: true, force: true });
  }
});

describe("research source manifest", () => {
  it("exposes only the five explicitly allowlisted document pages", () => {
    expect(getResearchDocumentSlugs()).toEqual([
      "portfolio-agent-governance",
      "framework",
      "twinanchor-review",
      "replay",
      "sources",
    ]);
  });

  it("loads the root research README as the index source", () => {
    const index = readResearchIndex();
    expect(index.content).toContain("Portfolio Research Package");
    expect(index.content).toContain("GitHub Pages");
  });

  it("loads an allowlisted Markdown document from the canonical source directory", () => {
    const document = readResearchDocument("framework");
    expect(document.source).toBe("portfolio-agent-governance/framework.md");
    expect(document.content).toContain("Authority and authorization");
  });

  it("rejects unknown slugs and path traversal", () => {
    expect(() => readResearchDocument("unknown-document")).toThrow("Research document not found");
    expect(() => readResearchDocument("../README")).toThrow("Invalid research document slug");
  });

  it("reports a missing allowlisted source file", () => {
    const directory = fs.mkdtempSync(path.join(os.tmpdir(), "research-source-"));
    temporaryDirectories.push(directory);
    expect(() => readResearchDocument("framework", directory)).toThrow("Research source file missing");
  });
});

describe("safe research Markdown rendering", () => {
  it("renders headings, emphasis, lists, tables, and fenced code", () => {
    const html = renderResearchMarkdown(
      "# Title\n\n**Strong** and *emphasis*.\n\n- One\n- Two\n\n| A | B |\n| --- | --- |\n| 1 | 2 |\n\n```ts\nconst value = 1;\n```",
    );

    expect(html).toContain("<h1 id=\"title\">Title</h1>");
    expect(html).toContain("<strong>Strong</strong>");
    expect(html).toContain("<em>emphasis</em>");
    expect(html).toContain("<ul><li>One</li><li>Two</li></ul>");
    expect(html).toContain("<table>");
    expect(html).toContain("<pre><code>const value = 1;</code></pre>");
  });

  it("escapes raw HTML instead of rendering it", () => {
    const html = renderResearchMarkdown('<script>alert("x")</script>');
    expect(html).toContain("&lt;script&gt;");
    expect(html).not.toContain("<script>");
  });

  it("rejects unsafe URL schemes and preserves safe external links", () => {
    const html = renderResearchMarkdown(
      "[unsafe](javascript:alert(1)) [safe](https://example.com)",
    );
    expect(html).not.toContain("javascript:");
    expect(html).toContain('href="https://example.com/"');
    expect(html).toContain('rel="noopener noreferrer"');
  });

  it("maps relative allowlisted Markdown links to static research routes", () => {
    const html = renderResearchMarkdown(
      "[Framework](framework.md) [Index](README.md) [Unknown](secret.md)",
    );
    expect(html).toContain('href="/research/framework/"');
    expect(html).toContain('href="/research/"');
    expect(html).not.toContain("secret.md");
  });
});
