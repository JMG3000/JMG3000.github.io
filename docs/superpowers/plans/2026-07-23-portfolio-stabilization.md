# Portfolio Stabilization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produce a secure, deterministic, tested Next.js static-export baseline while preserving the repository's history and existing framework investment.

**Architecture:** Keep the Pages Router and Chakra UI for this phase. Add server-rendered component regression tests, explicit GitHub Pages export configuration, dependency minimization, and a single build workflow that gates deployment.

**Tech Stack:** Next.js 16, React 19, TypeScript, Chakra UI 3, Vitest, GitHub Actions, GitHub Pages.

---

### Task 1: Establish test and validation commands

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Create: `vitest.config.ts`

- [x] **Step 1: Install the test runner without changing production behavior**

```bash
npm install --save-dev vitest
```

- [x] **Step 2: Add deterministic scripts**

```json
{
  "scripts": {
    "test": "vitest run",
    "typecheck": "tsc --noEmit",
    "build": "next build --webpack",
    "check": "npm run lint && npm run typecheck && npm test && npm run build"
  }
}
```

- [x] **Step 3: Configure Vitest for TypeScript and TSX**

```ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    include: ["tests/**/*.test.ts", "tests/**/*.test.tsx"],
  },
});
```

- [x] **Step 4: Verify the runner starts**

Run: `npm test`

Expected: exit `1` with “No test files found”; the test command is wired but coverage does not exist yet.

The Webpack build flag follows Chakra UI's documented Next.js compatibility path and avoids Turbopack's rejection of the temporary Linux dependency symlink used by this WSL/NTFS workspace.

### Task 2: Fix shared navigation through TDD

**Files:**
- Create: `tests/layout.test.tsx`
- Modify: `components/Layout.tsx`

- [x] **Step 1: Write the failing layout regressions**

```tsx
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import Layout from "@/components/Layout";

function renderLayout() {
  return renderToStaticMarkup(
    <ChakraProvider value={defaultSystem}>
      <Layout><main>Body</main></Layout>
    </ChakraProvider>,
  );
}

describe("Layout", () => {
  it("renders only implemented internal routes", () => {
    const html = renderLayout();
    expect(html).toContain('href="/"');
    expect(html).toContain('href="/portfolio"');
    expect(html).not.toContain("/tutorials");
  });

  it("does not render source comments or nested anchors", () => {
    const html = renderLayout();
    expect(html).not.toContain("change href");
    expect(html).not.toMatch(/<a[^>]*>\s*<a/);
  });

  it("protects external new-tab links", () => {
    const html = renderLayout();
    expect(html).toContain('rel="noopener noreferrer"');
  });
});
```

- [x] **Step 2: Run the focused test and verify RED**

Run: `npm test -- tests/layout.test.tsx`

Expected: failures for `/tutorials`, rendered source text, nested anchors, and missing `rel`.

- [x] **Step 3: Implement semantic Chakra/Next links**

- Use Chakra `Link` with `asChild` around `NextLink` for internal routes.
- Use Chakra `Link` directly for external and mail links.
- Remove Tutorials until a route exists.
- Add responsive wrapping to header/footer stacks.
- Add semantic `as="header"`, `as="nav"`, `as="main"`, and `as="footer"` containers.

- [x] **Step 4: Verify GREEN**

Run: `npm test -- tests/layout.test.tsx`

Expected: `3` passing tests.

### Task 3: Replace portfolio starter content through TDD

**Files:**
- Create: `tests/portfolio.test.tsx`
- Modify: `src/pages/portfolio.tsx`
- Delete: `styles/Home.module.css`

- [x] **Step 1: Write the failing portfolio regression**

```tsx
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import Portfolio from "@/src/pages/portfolio";

describe("Portfolio page", () => {
  it("renders portfolio-specific content without starter placeholders", () => {
    const html = renderToStaticMarkup(
      <ChakraProvider value={defaultSystem}><Portfolio /></ChakraProvider>,
    );
    expect(html).toContain("Portfolio");
    expect(html).toContain("Personal Site Modernization");
    expect(html).toContain("GitHub Profile");
    expect(html).not.toContain("Create Next App");
    expect(html).not.toContain("Portfolio is in construction");
    expect(html).not.toContain("next.svg");
  });
});
```

- [x] **Step 2: Run the focused test and verify RED**

Run: `npm test -- tests/portfolio.test.tsx`

Expected: missing real project content and presence of starter placeholders.

- [x] **Step 3: Implement the minimal real portfolio page**

- Use Chakra layout primitives already present in the project.
- Add accurate title/description metadata.
- Present the portfolio modernization as the first documented case study.
- Add GitHub and LinkedIn links with safe external-link attributes.
- Remove Next.js starter image/font/CSS usage.

- [x] **Step 4: Verify GREEN**

Run: `npm test -- tests/portfolio.test.tsx`

Expected: `1` passing test.

### Task 4: Preserve Markdown compatibility through TDD

**Files:**
- Create: `tests/site.test.ts`
- Modify: `config/site.ts`

- [x] **Step 1: Write the failing extension regression**

```ts
import { describe, expect, it } from "vitest";
import { readPost } from "@/config/site";

describe("readPost", () => {
  it("loads the preserved markdown-extension post", () => {
    const post = readPost("2025-11-09-welcome-to-jekyll");
    expect(post.meta.title).toBe("Welcome to Jekyll!");
    expect(post.content).toContain("Jekyll requires blog post files");
  });
});
```

- [x] **Step 2: Run the focused test and verify RED**

Run: `npm test -- tests/site.test.ts`

Expected: `ENOENT` for the assumed `.md` path.

- [x] **Step 3: Resolve `.md` and `.markdown` safely**

- Build paths from `process.cwd()/content/posts`.
- Check `.md`, then `.markdown`.
- Throw an explicit error containing the slug when neither file exists.

- [x] **Step 4: Verify GREEN**

Run: `npm test -- tests/site.test.ts`

Expected: `1` passing test.

### Task 5: Make GitHub Pages export deterministic

**Files:**
- Create: `tests/next-config.test.ts`
- Modify: `next.config.ts`
- Delete: `src/pages/api/hello.ts`

- [x] **Step 1: Write the failing configuration test**

```ts
import { describe, expect, it } from "vitest";
import nextConfig from "@/next.config";

describe("Next.js deployment configuration", () => {
  it("declares a GitHub Pages-compatible static export", () => {
    expect(nextConfig.output).toBe("export");
    expect(nextConfig.images?.unoptimized).toBe(true);
    expect(nextConfig.reactStrictMode).toBe(true);
  });
});
```

- [x] **Step 2: Run the focused test and verify RED**

Run: `npm test -- tests/next-config.test.ts`

Expected: `output` and `images.unoptimized` are undefined.

- [x] **Step 3: Declare static export explicitly**

```ts
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  reactStrictMode: true,
};
```

- [x] **Step 4: Remove the undeployable example API route**

- Delete `src/pages/api/hello.ts` because GitHub Pages has no request-time runtime.

- [x] **Step 5: Verify GREEN**

Run: `npm test -- tests/next-config.test.ts`

Expected: `1` passing test.

### Task 6: Remove generated output and dependency risk

**Files:**
- Modify: `.gitignore`
- Modify: `package.json`
- Modify: `package-lock.json`
- Delete: `next-site/.next/**`

- [x] **Step 1: Prevent nested build output**

Add `**/.next/` to `.gitignore`.

- [x] **Step 2: Remove unused direct dependencies**

```bash
npm uninstall update @emotion/styled framer-motion gray-matter
npm uninstall --save-dev @types/js-yaml babel-plugin-react-compiler
```

- [x] **Step 3: Update supported patch versions**

```bash
npm install next@16.2.11 react@19.2.8 react-dom@19.2.8 @chakra-ui/react@3.36.1
npm install js-yaml@5.2.1 react-icons@5.7.0
npm install --save-dev eslint-config-next@16.2.11
```

- [x] **Step 4: Remove committed generated output**

```bash
git rm -r next-site
```

- [x] **Step 5: Validate the security boundary**

Run: `npm audit --audit-level=high`

Expected: exit `0`; no high or critical advisories.

### Task 7: Add deployment quality gates

**Files:**
- Modify: `.github/workflows/nextjs.yml`

- [x] **Step 1: Add pull-request validation**

- Trigger on `pull_request`, pushes to `main`, and `workflow_dispatch`.
- Use Node `24`.
- Run `npm ci`, `npm audit --audit-level=high`, lint, typecheck, tests, and build.
- Upload/deploy only outside pull-request events.

- [x] **Step 2: Minimize permissions**

- Build job: `contents: read`.
- Deploy job: `pages: write`, `id-token: write`.
- Remove workflow-wide Pages write permission.

- [x] **Step 3: Validate the YAML and local command sequence**

Run: `npm run check`

Expected: lint, typecheck, tests, and static build all pass.

### Task 8: Document the stabilized repository

**Files:**
- Modify: `README.md`

- [x] **Step 1: Replace starter README content**

- Identify the root as the active Next.js app.
- Identify `prior_site_architecture/` and `README.txt` as historical records.
- List production routes and GitHub Pages hosting constraints.
- Document `npm ci`, `npm run dev`, `npm run check`, and deployment behavior.
- Link the design and implementation-plan records.

- [x] **Step 2: Verify documentation accuracy**

Run: `rg -n "Create Next App|Are you able to find the door|/tutorials|/api/hello" README.md components src`

Expected: no matches.

### Task 9: Final verification and commit

**Files:**
- Review: all changed files

- [x] **Step 1: Run ordered verification**

```bash
npm audit --audit-level=high
npm run lint
npm run typecheck
npm test
npm run build
git diff --check
```

- [x] **Step 2: Confirm static routes**

Run: `find out -maxdepth 2 -type f | sort`

Expected: `out/index.html`, `out/portfolio.html`, and `out/404.html`; no API output.

- [x] **Step 3: Review scope**

Run: `git diff --stat origin/main...HEAD; git status --short`

Expected: only stabilization, tests, CI, and documentation changes.

- [x] **Step 4: Commit the verified baseline**

```bash
git add .
git commit -m "stabilize portfolio baseline"
```

- [x] **Step 5: Stop before remote publication**

- Do not push or create a PR without explicit user authorization.
