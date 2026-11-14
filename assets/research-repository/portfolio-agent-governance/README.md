# Portfolio Agent Governance — Consolidated Research Package

**Classification:** Consolidated research / implementation proposal  
**Target:** `JMG3000/JMG3000.github.io`  
**Canonical location:** `assets/research-repository/portfolio-agent-governance/`  
**Baseline reviewed:** `dev` at `7f520e7e1b74812908c5cc6a3a66cdc660f07ef0`  
**Review date:** 2026-11-14  
**Status:** Research consolidated; static Pages integration in PR #28; no production release.

## Purpose and ownership

This package adapts the useful parts of the TwinAnchor governance reference into a small, repository-specific operating framework for the GitHub Pages portfolio. The objective is controlled, low-friction engineering—not a new agent platform or generalized governance system.

All research for this work is consolidated in this package. It remains in `JMG3000/JMG3000.github.io` as the portfolio's repository-local source. It is not a temporary staging copy and is not scheduled for transfer to `JMG3000/research-repository`.

## Retention and lifecycle

- Keep this package at its current repository path so the portfolio's GitHub Pages content pipeline can consume it as the designated source.
- Do not move, copy elsewhere as a replacement, rename, archive, or delete the package without explicit owner approval.
- Parking or completing the related project does not automatically change the package's ownership or location.
- If the project is parked, update the status and record the date/context while preserving the source material, provenance, and Git history.
- Any future change to this retention or ownership decision requires explicit owner approval.

## Documents

- [Customized framework](framework.md)
- [TwinAnchor critique and adaptation](twinanchor-review.md)
- [Read-only replay and validation](replay.md)
- [Sources and provenance](sources.md)

## Intended operating model

- `dev` is the integration baseline.
- Short-lived work branches originate from the current `dev`.
- Pull requests target `dev`; `main` remains the production/Pages release branch.
- Existing GitHub Actions validation is reused.
- GitHub Pages deployment remains limited to pushes to `main`.
- The Next.js Research section reads this package from its canonical repository path at build time through an explicit six-file allowlist. PR #28 implements the static routes; validation and owner review remain recorded in that PR.
- Owner authorization remains separate from tool access and CI success.

## Important live finding

The portfolio repository currently has active ruleset #27215483 targeting `dev` and `main`. Its required status-check context is still the literal placeholder `REPLACE_WITH_REAL_CI_JOB`. A real GitHub Actions check named `Validate and build` was observed succeeding on PR #25. The placeholder mismatch is a configuration issue requiring owner review; this package does not change the ruleset.

## Not in scope

- Implementing `AGENTS.md` or `.github/AGENTS.md`.
- Editing the root application README or CI workflow.
- Expanding the published allowlist or changing the public content set without owner review.
- Changing branch protection or required checks.
- Removing CircleCI or changing GitHub Apps/integrations.
- Adding a new workflow, agent runtime, framework, permanent branch, board, Jira project, telemetry, or background service.
- Merging to `dev` or releasing to `main`.

## Ownership decision

The canonical source remains this repository path. The prior idea of transferring the package to `JMG3000/research-repository` is superseded. Do not initiate that transfer unless the owner explicitly authorizes a change.
