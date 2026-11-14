# Temporary Research Package Staging

**Repository:** [JMG3000/JMG3000.github.io](https://github.com/JMG3000/JMG3000.github.io)  
**Staging path:** `assets/research-repository/`  
**Package:** [Portfolio Agent Governance](portfolio-agent-governance/README.md)  
**Status:** Draft for owner review; not an approved implementation.

This directory temporarily holds the research and customized governance framework for the GitHub Pages portfolio revamp. After owner review, the package is intended to be transferred to [JMG3000/research-repository](https://github.com/JMG3000/research-repository). No changes to that destination repository are part of this staging pass.

## Package contents

- [Portfolio Agent Governance](portfolio-agent-governance/README.md) — package overview and boundaries.
- [Customized framework](portfolio-agent-governance/framework.md) — repository-specific operating guidance.
- [TwinAnchor critique](portfolio-agent-governance/twinanchor-review.md) — source analysis and target adaptation.
- [Replay and validation](portfolio-agent-governance/replay.md) — read-only replay against the current portfolio repository.
- [Sources and provenance](portfolio-agent-governance/sources.md) — exact source references and observed revisions.

## Explicit boundaries

- This package belongs to the GitHub Pages portfolio repository only.
- Mission Command Platform is unrelated and excluded.
- The package consists only of Markdown documentation. It adds no executable code, runtime, agent, telemetry, tracking, credential handling, background process, or network collection.
- It does not modify the site's application, root README, CI workflow, GitHub Pages deployment, branch rulesets, Jira, or GitHub Project #2.
- The existing root `.gitignore` does not exclude this path; these files are intended to be tracked.
- This staging copy is not yet the canonical research-repository record.

## Provenance

Created on a short-lived branch from `dev`. The associated portfolio planning record is [Issue #24](https://github.com/JMG3000/JMG3000.github.io/issues/24). Issue #24 remains a separate planning item; this documentation package does not implement it or close it.
