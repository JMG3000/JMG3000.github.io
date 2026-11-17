# Portfolio Agent Governance — Consolidated Research Package

**Classification:** Consolidated research / implementation proposal  
**Target:** `JMG3000/JMG3000.github.io`  
**Canonical location:** `assets/research-repository/portfolio-agent-governance/`  
**Baseline reviewed:** `dev` at `7f520e7e1b74812908c5cc6a3a66cdc660f07ef0`  
**Review date:** 2026-11-14  
**Status:** Six-document package consolidated; static Pages integration staged in PR #28, with post-synchronization validation and owner review pending. No production release.

## Purpose and ownership

This package adapts the useful parts of the TwinAnchor governance reference into a small, repository-specific operating framework for the GitHub Pages portfolio. The objective is controlled, low-friction engineering—not a new agent platform or generalized governance system.

The six Markdown documents in this PR form this portfolio-specific package. Related research remains independently in its originating repository, including [draft research PR #73](https://github.com/JMG3000/research-repository/pull/73); that work has not been transferred or consolidated here. This package remains in `JMG3000/JMG3000.github.io` as its own canonical repository-local source. It is not a temporary staging copy and is not scheduled for transfer to `JMG3000/research-repository`.

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
- PR #26 records the canonical source-location requirement. Separate [PR #28](https://github.com/JMG3000/JMG3000.github.io/pull/28) implements build-time static routes for this six-file allowlist without changing the source path; final validation and owner review remain required.
- Owner authorization remains separate from tool access and CI success.

## Important live finding

**Historical observation (2026-11-14):** Ruleset #27215483 targeted `dev` and `main` but required the placeholder `REPLACE_WITH_REAL_CI_JOB`, rather than the observed GitHub Actions check `Validate and build` (integration ID `15368`).

**Verified correction (2026-11-16):** The active ruleset now requires `Validate and build` from GitHub Actions on both protected branches. After the correction, passing validation was confirmed on PR #30 (`dev`) and test PR #33 (`main`); an intentionally failing required check blocked test PR #32 (`dev`), and an absent required check blocked test PR #31 (`main`). Temporary test PRs #31–33 were closed unmerged. The production `main` source and Node 20 workflow remain separate from the validated `dev` baseline; no deployment occurred. [CI evidence and limitations](https://github.com/JMG3000/JMG3000.github.io/issues/29). This documentation PR did not change the ruleset or CI.

## Not in scope

- Implementing `AGENTS.md` or `.github/AGENTS.md`.
- Editing the root application README or CI workflow.
- Expanding the Pages content allowlist or altering the static build outside separately scoped PR #28.
- Changing branch protection or required checks.
- Removing CircleCI or changing GitHub Apps/integrations.
- Adding a new workflow, agent runtime, framework, permanent branch, board, Jira project, telemetry, or background service.
- Merging to `dev` or releasing to `main`.

## Ownership decision

The canonical source remains this repository path. The prior idea of transferring the package to `JMG3000/research-repository` is superseded. Do not initiate that transfer unless the owner explicitly authorizes a change.
