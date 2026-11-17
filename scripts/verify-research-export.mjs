import fs from "node:fs";
import path from "node:path";

const outputDirectory = path.resolve("out");
const expectedPages = [
  "research.html",
  "research/portfolio-agent-governance.html",
  "research/framework.html",
  "research/twinanchor-review.html",
  "research/replay.html",
  "research/sources.html",
];

const missing = expectedPages.filter((relativePath) =>
  !fs.existsSync(path.join(outputDirectory, relativePath)),
);

if (missing.length > 0) {
  console.error("Research static export is incomplete. Missing pages:");
  for (const file of missing) console.error(`- ${file}`);
  process.exit(1);
}

const researchOutputDirectory = path.join(outputDirectory, "research");
if (fs.existsSync(researchOutputDirectory)) {
  const unexpectedPages = fs
    .readdirSync(researchOutputDirectory, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".html"))
    .map((entry) => `research/${entry.name}`)
    .filter((file) => !expectedPages.includes(file));

  if (unexpectedPages.length > 0) {
    console.error("Unexpected research pages were exported:");
    for (const file of unexpectedPages) console.error(`- ${file}`);
    process.exit(1);
  }
}

console.log(`Verified ${expectedPages.length} allowlisted Research static pages in out/.`);
