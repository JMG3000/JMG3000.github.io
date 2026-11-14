import fs from "node:fs";
import path from "node:path";

const researchDirectory = path.join(process.cwd(), "assets", "research-repository");

export type ResearchDocument = {
  slug: string;
  source: string;
  title: string;
  description: string;
};

const documents: ResearchDocument[] = [
  {
    slug: "portfolio-agent-governance",
    source: "portfolio-agent-governance/README.md",
    title: "Portfolio Agent Governance",
    description: "The consolidated research package, ownership model, and implementation boundaries.",
  },
  {
    slug: "framework",
    source: "portfolio-agent-governance/framework.md",
    title: "Customized Lightweight Agent Governance Framework",
    description: "Repository-specific guidance for authorization, branches, CI, security, and evidence.",
  },
  {
    slug: "twinanchor-review",
    source: "portfolio-agent-governance/twinanchor-review.md",
    title: "TwinAnchor Governance Reference — Critique and Portfolio Adaptation",
    description: "A critique of the reference governance model and its portfolio-specific adaptation.",
  },
  {
    slug: "replay",
    source: "portfolio-agent-governance/replay.md",
    title: "Read-Only Governance Replay and Validation",
    description: "Evidence from the portfolio repository baseline, workflow, and live ruleset.",
  },
  {
    slug: "sources",
    source: "portfolio-agent-governance/sources.md",
    title: "Sources and Provenance",
    description: "Source references, observed revisions, and evidence limitations.",
  },
];

const allSources = new Map<string, string>([
  ["README.md", "index"],
  ...documents.map((document) => [document.source, document.slug] as [string, string]),
]);

export function getResearchDocuments() {
  return documents.map((document) => ({ ...document }));
}

export function getResearchDocumentSlugs() {
  return documents.map((document) => document.slug);
}

export function readResearchDocument(slug: string, sourceRoot = researchDirectory) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    throw new Error(`Invalid research document slug: ${slug}`);
  }

  const document = documents.find((candidate) => candidate.slug === slug);
  if (!document) {
    throw new Error(`Research document not found: ${slug}`);
  }

  const filePath = path.resolve(sourceRoot, document.source);
  const resolvedRoot = path.resolve(sourceRoot) + path.sep;
  if (!filePath.startsWith(resolvedRoot)) {
    throw new Error(`Research source path is outside the allowed directory: ${slug}`);
  }
  if (!fs.existsSync(filePath)) {
    throw new Error(`Research source file missing: ${document.source}`);
  }

  return {
    ...document,
    content: fs.readFileSync(filePath, "utf8"),
  };
}

export function readResearchIndex(sourceRoot = researchDirectory) {
  const filePath = path.resolve(sourceRoot, "README.md");
  const resolvedRoot = path.resolve(sourceRoot) + path.sep;
  if (!filePath.startsWith(resolvedRoot)) {
    throw new Error("Research index path is outside the allowed directory");
  }
  if (!fs.existsSync(filePath)) {
    throw new Error("Research source file missing: README.md");
  }

  return {
    title: "Portfolio Research",
    content: fs.readFileSync(filePath, "utf8"),
  };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function resolveResearchLink(href: string, sourcePath: string) {
  const trimmed = href.trim();
  const internalMarkdown = trimmed.match(/^([a-zA-Z0-9_./-]+\.md)(?:#[a-zA-Z0-9_-]+)?$/);
  if (internalMarkdown) {
    const normalized = path.posix.normalize(
      path.posix.join(path.posix.dirname(sourcePath), internalMarkdown[1]),
    );
    if (normalized.startsWith("../") || normalized === "..") return null;
    const slug = allSources.get(normalized);
    return slug ? (slug === "index" ? "/research" : `/research/${slug}`) : null;
  }

  if (trimmed.startsWith("#")) {
    return /^#[a-zA-Z0-9_-]+$/.test(trimmed) ? trimmed : null;
  }

  try {
    const url = new URL(trimmed);
    return ["https:", "http:", "mailto:"].includes(url.protocol) ? url.toString() : null;
  } catch {
    return null;
  }
}

function renderInline(value: string) {
  let output = escapeHtml(value);
  const codeTokens: string[] = [];

  output = output.replace(/`([^`]+)`/g, (_match, code: string) => {
    const token = `@@CODE${codeTokens.length}@@`;
    codeTokens.push(`<code>${code}</code>`);
    return token;
  });

  output = output.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, label: string, href: string) => {
    const safeHref = resolveResearchLink(href, sourcePath);
    if (!safeHref) return label;
    const external = /^https?:\/\//i.test(safeHref);
    const target = external ? ' target="_blank" rel="noopener noreferrer"' : "";
    return `<a href="${escapeHtml(safeHref)}"${target}>${label}</a>`;
  });
  output = output.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  output = output.replace(/(^|[^*])\*([^*]+)\*(?!\*)/g, "$1<em>$2</em>");
  output = output.replace(/~~([^~]+)~~/g, "<del>$1</del>");

  return output.replace(/@@CODE(\d+)@@/g, (_match, index: string) => codeTokens[Number(index)] ?? "");
}

function isTableSeparator(line: string) {
  return /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(line.trim());
}

function splitTableRow(line: string) {
  return line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((cell) => cell.trim());
}

function isBlockStart(lines: string[], index: number) {
  const line = lines[index] ?? "";
  return (
    /^#{1,6}\s/.test(line) ||
    /^```/.test(line) ||
    /^\s*(?:- |\* |\+ |\d+\. )/.test(line) ||
    /^>/.test(line) ||
    /^\s*([-*_])\1\1+\s*$/.test(line) ||
    (index + 1 < lines.length && isTableSeparator(lines[index + 1]))
  );
}

export function renderResearchMarkdown(markdown: string, sourcePath = "README.md") {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html: string[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    if (!line.trim()) {
      index += 1;
      continue;
    }

    if (line.startsWith("```")) {
      const code: string[] = [];
      index += 1;
      while (index < lines.length && !lines[index].startsWith("```")) {
        code.push(lines[index]);
        index += 1;
      }
      if (index < lines.length) index += 1;
      html.push(`<pre><code>${escapeHtml(code.join("\n"))}</code></pre>`);
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      const title = heading[2].replace(/\s+#+\s*$/, "");
      const id = title.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");
      html.push(`<h${level} id="${id}">${renderInline(title)}</h${level}>`);
      index += 1;
      continue;
    }

    if (/^\s*([-*_])\1\1+\s*$/.test(line)) {
      html.push("<hr />");
      index += 1;
      continue;
    }

    if (index + 1 < lines.length && isTableSeparator(lines[index + 1])) {
      const headers = splitTableRow(line);
      index += 2;
      const rows: string[][] = [];
      while (index < lines.length && lines[index].trim().startsWith("|")) {
        rows.push(splitTableRow(lines[index]));
        index += 1;
      }
      html.push(
        `<div class="research-table-wrap"><table><thead><tr>${headers.map((cell) => `<th scope="col">${renderInline(cell)}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${headers.map((_header, cellIndex) => `<td>${renderInline(row[cellIndex] ?? "")}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`,
      );
      continue;
    }

    const listMatch = line.match(/^\s*(- |\* |\+ |\d+\. )/);
    if (listMatch) {
      const ordered = /^\d/.test(listMatch[1]);
      const tag = ordered ? "ol" : "ul";
      const items: string[] = [];
      while (index < lines.length) {
        const match = lines[index].match(/^\s*(?:- |\* |\+ |\d+\. )(.*)$/);
        if (!match) break;
        items.push(`<li>${renderInline(match[1])}</li>`);
        index += 1;
      }
      html.push(`<${tag}>${items.join("")}</${tag}>`);
      continue;
    }

    if (line.startsWith(">")) {
      const quote: string[] = [];
      while (index < lines.length && lines[index].startsWith(">")) {
        quote.push(renderInline(lines[index].replace(/^>\s?/, "")));
        index += 1;
      }
      html.push(`<blockquote>${quote.map((item) => `<p>${item}</p>`).join("")}</blockquote>`);
      continue;
    }

    const paragraph = [line];
    index += 1;
    while (index < lines.length && lines[index].trim() && !isBlockStart(lines, index)) {
      paragraph.push(lines[index]);
      index += 1;
    }
    html.push(`<p>${paragraph.map((part) => renderInline(part)).join(" ")}</p>`);
  }

  return html.join("\n");
}
