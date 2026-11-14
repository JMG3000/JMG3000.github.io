# Portfolio Agent Governance — Research Package

**Classification:** Research / proposal  
**Target:** `JMG3000/JMG3000.github.io`  
**Current baseline:** `dev` at `7f520e7e1b74812908c5cc6a3a66cdc660f07ef0`  
**Review date:** 2026-11-14  
**Status:** Draft for owner review; no operational controls changed.

## Purpose

Adapt the useful parts of the TwinAnchor governance reference into a small, repository-specific operating framework for the GitHub Pages portfolio. The objective is controlled, low-friction engineering—not a new agent platform or generalized governance system.

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
- Owner authorization remains separate from tool access and CI success.

## Important live finding

The portfolio repository currently has active ruleset #27215483 targeting `dev` and `main`. Its required status-check context is still the literal placeholder `REPLACE_WITH_REAL_CI_JOB`. A real GitHub Actions check named `Validate and build` was observed succeeding on PR #25. The placeholder mismatch is a configuration issue requiring owner review; this package does not change the ruleset.

## Not in scope

- Implementing `AGENTS.md` or `.github/AGENTS.md`.
- Editing the root README or CI workflow.
- Changing branch protection or required checks.
- Removing CircleCI or changing GitHub Apps/integrations.
- Adding a new workflow, agent runtime, framework, permanent branch, board, Jira project, telemetry, or background service.
- Merging to `dev` or releasing to `main`.

## Transfer

After owner review, transfer this directory to the existing [JMG3000/research-repository](https://github.com/JMG3000/research-repository) using that repository's current intake instructions. Do not create a second canonical policy identity or reuse the PactLattice `PLT-GOV-*` namespace for this portfolio-specific framework.
