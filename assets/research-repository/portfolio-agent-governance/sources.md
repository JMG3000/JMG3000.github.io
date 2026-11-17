# Sources and Provenance

**Collected:** 2026-11-14  
**Target repository:** `JMG3000/JMG3000.github.io`

## Target repository evidence

1. **Portfolio README, `dev`**  
   https://github.com/JMG3000/JMG3000.github.io/blob/7f520e7e1b74812908c5cc6a3a66cdc660f07ef0/README.md  
   Establishes the app architecture, static Pages hosting, Node/npm baseline, local checks, and delivery controls.

2. **GitHub Actions workflow, `dev`**  
   https://github.com/JMG3000/JMG3000.github.io/blob/7f520e7e1b74812908c5cc6a3a66cdc660f07ef0/.github/workflows/nextjs.yml  
   Establishes the **`dev` version** of PR triggers for `dev` and `main`, validation steps, job permissions, and main-only Pages deployment. This alone does not prove that production `main` already has the same workflow.

   **Production `main` comparison (2026-11-14):** https://github.com/JMG3000/JMG3000.github.io/blob/e0c56bd9e9bd27cda873715f79e7b65c4710162f/.github/workflows/nextjs.yml — the still-deployed legacy workflow uses Node.js 20, has no `pull_request` trigger, retains broader workflow-level deployment permissions, and does not run the `dev` workflow's lint, typecheck, tests, or audit steps.

3. **Planning issue #24**  
   https://github.com/JMG3000/JMG3000.github.io/issues/24  
   Establishes the proposed lightweight agent instructions/CI governance scope and its planning-only authorization boundary.

4. **Open PR #25**  
   https://github.com/JMG3000/JMG3000.github.io/pull/25  
   Inspected for overlap. It changes `docs/jira-tracker.md` and does not overlap this package.

5. **Portfolio live ruleset #27215483**  
   https://github.com/JMG3000/JMG3000.github.io/rules/27215483  
   Historical API read (2026-11-14): active on `dev` and `main`, requiring the then-invalid `REPLACE_WITH_REAL_CI_JOB`. **Follow-up verification (2026-11-16):** current required check is GitHub Actions `Validate and build` (integration ID `15368`); its passing, failing and missing-status behaviors were tested on both protected-branch targets. See [Issue #29](https://github.com/JMG3000/JMG3000.github.io/issues/29) and closed test PRs [#31](https://github.com/JMG3000/JMG3000.github.io/pull/31), [#32](https://github.com/JMG3000/JMG3000.github.io/pull/32), [#33](https://github.com/JMG3000/JMG3000.github.io/pull/33). The `main` production workflow still differs from `dev`.

6. **PR #25 check runs**  
   https://github.com/JMG3000/JMG3000.github.io/pull/25/checks  
   The GitHub Actions job `Validate and build` completed successfully; `Deploy to GitHub Pages` was skipped. A separate `CircleCI Pipeline` status reported that no configuration was found.

## TwinAnchor reference sources

7. **TwinAnchor Agent Merge Gate — current verified state**  
   https://github.com/JMG3000/research-repository/blob/99e5ab1503d53f6833be96599b1d213368c1a498/Governance%20Evidence/PLT-GOV-001_TWINANCHOR_AGENT_MERGE_GATE.md  
   Read at research-repository commit `99e5ab1503d53f6833be96599b1d213368c1a498`. Provides live ruleset facts and implementation boundaries.

8. **Research Repository Agent Intake Governance**  
   https://github.com/JMG3000/research-repository/blob/99e5ab1503d53f6833be96599b1d213368c1a498/Governance%20Evidence/AGENT_INTAKE_GOVERNANCE.md  
   Read for privacy, classification, provenance, and cross-project identity boundaries relevant to the later transfer.

9. **Canonical Governance Deliverable Standard**  
   https://github.com/JMG3000/research-repository/blob/99e5ab1503d53f6833be96599b1d213368c1a498/Governance%20Evidence/CANONICAL_DELIVERABLE_STANDARD.md  
   Read to avoid assigning the research repository's `PLT-GOV-*` namespace to a portfolio-specific proposal and to preserve the distinction between research and installable policy.

## Evidence limits

- GitHub's branch-protection endpoint returned HTTP 403 for direct branch-protection reads; the repository rulesets endpoint was readable and supplied ruleset #27215483.
- The status-check mismatch was supported by the 2026-11-14 ruleset response and PR #25 check; **it is a historical observation, not the current live ruleset state**. The post-change enforcement testing and limits are documented in Issue #29.
- CircleCI status failure is a GitHub commit-status observation, not proof of the current state of every CircleCI account or project setting.
- No formal legal or regulatory compliance assessment was performed.
- No runtime behavior, telemetry, agent execution, or private user data was collected.
