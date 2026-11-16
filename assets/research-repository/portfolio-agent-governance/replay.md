# Read-Only Governance Replay and Validation

**Date:** 2026-11-14  
**Target:** `JMG3000/JMG3000.github.io`  
**Baseline:** `dev` commit `7f520e7e1b74812908c5cc6a3a66cdc660f07ef0`

This replay records the repository baseline and governance limitations. The static Research implementation in PR #28 is documented separately below; no production deployment or ruleset change is included.

## 1. Repository baseline

- Default branch: `main`.
- Integration branch: `dev`.
- Production URL: https://jmg3000.github.io/
- Application: Next.js Pages Router, React, TypeScript, Chakra UI.
- Hosting: static export to GitHub Pages.
- Integration CI runtime: Node.js 24 and npm on `dev`; the current production `main` workflow still uses Node.js 20.
- No root `AGENTS.md` or `.github/AGENTS.md` appeared in the inspected `dev` tree.
- No root-level `assets/` directory existed in the inspected `dev` tree before this package was staged.

## 2. Existing CI replay

The reviewed integration workflow is [`.github/workflows/nextjs.yml` on `dev`](https://github.com/JMG3000/JMG3000.github.io/blob/7f520e7e1b74812908c5cc6a3a66cdc660f07ef0/.github/workflows/nextjs.yml). This is **not yet the workflow on production `main`**.

| Scenario | Workflow behavior | Result |
| --- | --- | --- |
| Pull request to `dev` | Runs `Validate and build` | Confirmed in workflow |
| Pull request to `main` | `dev` version declares `Validate and build`; current `main` workflow does not declare a PR trigger | Not verified for the production baseline |
| Pull request | Pages deploy job skipped | Confirmed in workflow and PR #25 |
| Push to `main` | `dev` version runs full validation and Pages deployment; current `main` version uses its older build/deploy job | Future behavior only until `dev` workflow is promoted |
| Push to `dev` | No push trigger is defined | Confirmed in workflow |

The `dev` workflow build job uses `contents: read`, and only its deployment job receives `pages: write` and `id-token: write`. In contrast, [the current `main` workflow](https://github.com/JMG3000/JMG3000.github.io/blob/main/.github/workflows/nextjs.yml) still uses Node.js 20, declares no PR validation event, grants Pages/OIDC permissions at workflow scope, and lacks the `dev` workflow's lint, typecheck, test, and audit steps. The `dev` pipeline is verified on PR #26, but equivalent production-branch protection is not established. Do not assert that `main` already runs the new CI policy.

PR #25's `Validate and build` check completed successfully. Its `Deploy to GitHub Pages` job was skipped, as expected for a pull request.

## 3. Live ruleset replay

The GitHub ruleset API returned active ruleset #27215483 targeting `dev` and `main`. It includes deletion, non-fast-forward, pull-request, and required-status-check rules, with zero required approvals and no bypass actors.

**Failing condition:** its required status context is the literal `REPLACE_WITH_REAL_CI_JOB`. The observed real GitHub Actions check is `Validate and build`. The ruleset therefore has not been verified as a functioning CI merge gate. Before requiring `Validate and build` on both branches, verify that the check is reported for the intended `main` PR flow as well as `dev`; otherwise the required check can block merges. The owner authorized correction on 2026-11-14, but a live repository-admin update and end-to-end enforcement test are still pending.

The same PR also reported a failing `CircleCI Pipeline` status: “No configuration was found in your project.” This is separate from the GitHub Actions workflow and is not the check named by the current ruleset.

## 4. Planning and overlap

- [Issue #24](https://github.com/JMG3000/JMG3000.github.io/issues/24) remains open and is labeled planning/review only.
- [PR #25](https://github.com/JMG3000/JMG3000.github.io/pull/25) is open against `dev` and changes only `docs/jira-tracker.md`; it does not overlap this package path.
- The root README describes the existing application, local checks, and delivery controls.
- The current workflow already provides the validation and deployment structure; no additional workflow is justified by this replay.

## 5. Static Pages source integration

Implementation is tracked in [Issue #27](https://github.com/JMG3000/JMG3000.github.io/issues/27) and [PR #28](https://github.com/JMG3000/JMG3000.github.io/pull/28).

- Canonical source: `assets/research-repository/` in this repository.
- The root `README.md` is rendered as the Research index at `/research`.
- Five allowlisted documents are rendered as static detail routes under `/research/{slug}`.
- The manifest explicitly names the five detail files; together with the root README, exactly six Markdown files are exposed.
- `getStaticProps` and `getStaticPaths` read and generate content at build time; there is no request-time filesystem access, API route, remote fetch, CMS, or runtime Node server.
- Markdown raw HTML is escaped; links are limited to safe external protocols, same-package allowlisted Markdown links, or local anchors.
- Unknown slugs and traversal-shaped slugs are rejected.
- No Markdown files are copied to `content/posts/` or another content directory.

**Pre-synchronization validation evidence:** GitHub Actions run [#43597641137](https://github.com/JMG3000/JMG3000.github.io/actions/runs/43597641137) completed successfully for commit `81d13636fbed6ce75fbb908042991cb52dcda187`.

| Check | Result |
| --- | --- |
| `npm ci` | PASS |
| `npm run lint` | PASS |
| `npm run typecheck` | PASS |
| `npm test` | PASS — 20 tests across 6 files |
| `npm run build` | PASS — Next.js static export |
| Post-build output verification | PASS — 6 allowlisted Research HTML pages found in `out/` |
| `npm audit --audit-level=high` | PASS — 7 moderate advisories remain; no high-severity finding blocked this gate |
| Pages deployment | SKIPPED as expected for a pull request |

The build log confirms the Research index and five static detail routes were generated. The post-build verifier checks all six expected HTML outputs and rejects unexpected HTML pages under the Research output directory. The workflow did not upload a Pages artifact or deploy the site because this is a pull request.

**Disposition:** Static generation and the post-build allowlist check passed on the pre-synchronization PR #28 commit. The synchronized head requires a fresh full validation. No production publication has occurred.

## 6. Replay conclusion

| Area | Finding |
| --- | --- |
| Two-branch workflow | Fits the current repository |
| PR validation | Verified for PRs into `dev`; the `main` branch still has a legacy workflow |
| Main-only Pages deployment | Already configured |
| Least-privilege workflow permissions | Verified in `dev`; the current `main` workflow still grants broader top-level deployment permissions |
| Root/scoped agent instructions | Not present; remain a separate, owner-approved implementation item |
| Active TwinAnchor ruleset | Present, but required check is a placeholder |
| CircleCI status | Error due to missing CircleCI configuration; separate from GitHub Actions |
| Additional CI or agent runtime | Not justified |

**Disposition:** The tailored framework remains a documentation proposal. The `main` workflow divergence and live required-check mismatch must be reconciled before CI merge protection is treated as complete. Correction is owner-authorized, but no repository-administration or production-release change has been applied by this documentation PR. CircleCI is an independent, non-required error status.
