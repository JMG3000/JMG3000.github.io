# Portfolio Research Package

**Repository:** [JMG3000/JMG3000.github.io](https://github.com/JMG3000/JMG3000.github.io)  
**Canonical repository path:** `assets/research-repository/`  
**Package:** [Portfolio Agent Governance](portfolio-agent-governance/README.md)  
**Status:** Consolidated research; owner review and any future implementation remain separately authorized.

## Purpose and source-of-truth

This directory contains the consolidated research and repository-specific governance framework for the GitHub Pages portfolio. It is intentionally maintained in this repository as the portfolio's designated source location.

**This is not a temporary transfer staging area.** The research is consolidated here and is not scheduled to move to `JMG3000/research-repository` or another repository. Keep this path stable so the portfolio's GitHub Pages content pipeline can consume the material from its repository-local source. Do not create a second copy elsewhere as a substitute for this source.

## Retention and project lifecycle

- Keep the consolidated package and its Git history in this repository.
- Completion or parking of the related project does not automatically archive, move, or delete this package.
- If the project is later parked, update the package status and record the date/context here; preserve the research, provenance, and history in place.
- Do not relocate, rename, transfer, or delete this directory unless the owner explicitly approves that specific change.
- Until such approval, this directory remains the authoritative repository-local location for this portfolio research.

## Package contents

- [Portfolio Agent Governance](portfolio-agent-governance/README.md) — package overview, ownership, and lifecycle.
- [Customized framework](portfolio-agent-governance/framework.md) — repository-specific operating guidance.
- [TwinAnchor critique](portfolio-agent-governance/twinanchor-review.md) — source analysis and target adaptation.
- [Replay and validation](portfolio-agent-governance/replay.md) — read-only replay against the portfolio repository.
- [Sources and provenance](portfolio-agent-governance/sources.md) — exact source references and observed revisions.

## Pages consumption boundary

The intended content integration is for the portfolio's GitHub Pages build to read from this repository-local package path. The path is therefore part of the documented source contract and should remain stable.

The Next.js Research section reads the Markdown files directly from this repository-local directory during `next build`. The static routes are implemented in [PR #28](https://github.com/JMG3000/JMG3000.github.io/pull/28). The build uses a fixed allowlist of the six reviewed Markdown files; it does not recursively publish arbitrary files. This directory remains the sole content source; no copy is made into `content/posts/` or another content tree.

## Scope and boundaries

- This package belongs to the GitHub Pages portfolio repository.
- The package consists of Markdown research and documentation; it adds no executable code, agent runtime, telemetry, tracking, credential handling, background process, or network collection.
- It does not modify the site's application, root README, CI workflow, GitHub Pages deployment, branch rulesets, or external project systems.
- The files are tracked in Git and retained as part of the repository's history.
- Owner authorization for implementation, publication, or lifecycle changes remains separate from documentation and CI success.

## Provenance

The package was assembled on a short-lived branch originating from `dev`. The related portfolio planning record is [Issue #24](https://github.com/JMG3000/JMG3000.github.io/issues/24). Issue #24 remains a separate planning item; this documentation package does not implement it or close it.
