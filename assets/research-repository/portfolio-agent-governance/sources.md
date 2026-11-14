# Sources and Provenance

**Collected:** 2026-11-14  
**Target repository:** `JMG3000/JMG3000.github.io`

## Target repository evidence

1. **Portfolio README, `dev`**  
   https://github.com/JMG3000/JMG3000.github.io/blob/7f520e7e1b74812908c5cc6a3a66cdc660f07ef0/README.md  
   Establishes the app architecture, static Pages hosting, Node/npm baseline, local checks, and delivery controls.

2. **GitHub Actions workflow, `dev`**  
   https://github.com/JMG3000/JMG3000.github.io/blob/7f520e7e1b74812908c5cc6a3a66cdc660f07ef0/.github/workflows/nextjs.yml  
   Establishes PR triggers for `dev` and `main`, validation steps, job permissions, and main-only Pages deployment.

3. **Planning issue #24**  
   https://github.com/JMG3000/JMG3000.github.io/issues/24  
   Establishes the proposed lightweight agent instructions/CI governance scope and its planning-only authorization boundary.

4. **Open PR #25**  
   https://github.com/JMG3000/JMG3000.github.io/pull/25  
   Inspected for overlap. It changes `docs/jira-tracker.md` and does not overlap this package.

5. **Portfolio live ruleset #27215483**  
   https://github.com/JMG3000/JMG3000.github.io/rules/27215483  
   Read through the GitHub ruleset API on 2026-11-14. It is active on `dev` and `main`; the required status check remains `REPLACE_WITH_REAL_CI_JOB`.

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
- The exact live status-check mismatch is based on the ruleset response and the successful `Validate and build` check on PR #25.
- CircleCI status failure is a GitHub commit-status observation, not proof of the current state of every CircleCI account or project setting.
- No formal legal or regulatory compliance assessment was performed.
- No runtime behavior, telemetry, agent execution, or private user data was collected.
