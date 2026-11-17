import fs from "node:fs";
import path from "node:path";

import { load } from "js-yaml";

const postDirectory = path.join(process.cwd(), "content", "posts");
const frontMatterPattern = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;

function parsePost(raw: string) {
  const frontMatter = raw.match(frontMatterPattern);

  if (!frontMatter) {
    return { meta: {}, content: raw };
  }

  const parsed = load(frontMatter[1]);
  const meta: Record<string, unknown> =
    typeof parsed === "object" && parsed !== null ? (parsed as Record<string, unknown>) : {};

  return { meta, content: raw.slice(frontMatter[0].length) };
}

export function readPost(slug: string) {
  if (!/^[a-zA-Z0-9][a-zA-Z0-9_-]*$/.test(slug)) {
    throw new Error(`Invalid post slug: ${slug}`);
  }

  const postPath = [".md", ".markdown"]
    .map((extension) => path.join(postDirectory, `${slug}${extension}`))
    .find((candidate) => fs.existsSync(candidate));

  if (!postPath) {
    throw new Error(`Post not found: ${slug}`);
  }

  return parsePost(fs.readFileSync(postPath, "utf8"));
}
