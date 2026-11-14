# Read-Only Governance Replay and Validation

**Date:** 2026-11-14  
**Target:** `JMG3000/JMG3000.github.io`  
**Baseline:** `dev` commit `7f520e7e1b74812908c5cc6a3a66cdc660f07ef0`

This replay checks the proposed framework against the repository's observed configuration. It is not an implementation test and made no settings or application changes.

## 1. Repository baseline

- Default branch: `main`.
- Integration branch: `dev`.
- Production URL: https://jmg3000.github.io/
- Application: Next.js Pages Router, React, TypeScript, Chakra UI.
- Hosting: static export to GitHub Pages.
- Runtime: Node.js 24 and npm.
- No root `AGENTS.md` or `.github/AGENTS.md` appeared in the inspected `dev` tree.
- No root-level `assets/` directory existed in the inspected `dev` tree before this package was staged.

## 2. Existing CI replay

The tracked workflow is [`.github/workflows/nextjs.yml`](https://github.com/JMG3000/JMG3000.github.io/blob/7f520e7e1b74812908c5cc6a3a66cdc660f07ef0/.github/workflows/nextjs.yml).

| Scenario | Workflow behavior | Result |
| --- | --- | --- |
| Pull request to `dev` | Runs `Validate and build` | Confirmed in workflow |
| Pull request to `main` | Runs `Validate and build` | Confirmed in workflow |
| Pull request | Pages deploy job skipped | Confirmed in workflow and PR #25 |
| Push to `main` | Runs validation and Pages deployment | Confirmed in workflow |
| Push to `dev` | No push trigger is defined | Confirmed in workflow |

The build job uses `contents: read`. The deployment job alone receives `pages: write` and `id-token: write`. This is an appropriate least-privilege separation for the current static Pages deployment.

PR #25's `Validate and build` check completed successfully. Its `Deploy to GitHub Pages` job was skipped, as expected for a pull request.

## 3. Live ruleset replay

The GitHub ruleset API returned active ruleset #27215483 targeting `dev` and `main`. It includes deletion, non-fast-forward, pull-request, and required-status-check rules, with zero required approvals and no bypass actors.

**Failing condition:** its required status context is the literal `REPLACE_WITH_REAL_CI_JOB`. The observed real GitHub Actions check is `Validate and build`. The ruleset therefore has not been verified as a functioning CI merge gate. Do not call the protection complete until the check context is corrected and a controlled PR confirms the expected block/pass behavior.

The same PR also reported a failing `CircleCI Pipeline` status: “No configuration was found in your project.” This is separate from the GitHub Actions workflow and is not the check named by the current ruleset.

## 4. Planning and overlap

- [Issue #24](https://github.com/JMG3000/JMG3000.github.io/issues/24) remains open and is labeled planning/review only.
- [PR #25](https://github.com/JMG3000/JMG3000.github.io/pull/25) is open against `dev` and changes only `docs/jira-tracker.md`; it does not overlap this package path.
- The root README describes the existing application, local checks, and delivery controls.
- The current workflow already provides the validation and deployment structure; no additional workflow is justified by this replay.

## 5. Replay conclusion

| Area | Finding |
| --- | --- |
| Two-branch workflow | Fits the current repository |
| PR validation | Already configured for `dev` and `main` |
| Main-only Pages deployment | Already configured |
| Least-privilege workflow permissions | Present in the current workflow |
| Root/scoped agent instructions | Not present; remain a separate, owner-approved implementation item |
| Active TwinAnchor ruleset | Present, but required check is a placeholder |
| CircleCI status | Error due to missing CircleCI configuration; separate from GitHub Actions |
| Additional CI or agent runtime | Not justified |

**Disposition:** The tailored framework is suitable as a documentation proposal. The live required-check mismatch and CircleCI status need a separately authorized correction. This package does not implement those changes, modify Issue #24, merge PRs, or deploy the site.
