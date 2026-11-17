# Portfolio CI/CD delivery contract

**Tracked work:** [Issue #29](https://github.com/JMG3000/JMG3000.github.io/issues/29) · [Portfolio Project #2](https://github.com/users/JMG3000/projects/2)  
**Repository:** `JMG3000/JMG3000.github.io`  
**Status (2026-11-17):** CI contract tests implemented; required-check repair and positive/negative protected-branch validation completed; compatible production `main` alignment remains pending.

## Authoritative implementation

The existing [`.github/workflows/nextjs.yml`](../.github/workflows/nextjs.yml) is the **only** GitHub Actions CI/CD workflow needed for this portfolio. Its validation job is named **`Validate and build`**. Do not introduce a duplicate required check, CI provider, workflow, or Pages deployment path.

| Event | Expected behavior |
| --- | --- |
| Pull request to `dev` | Install, lint, typecheck, tests, static build, high-severity dependency audit; **no Pages upload/deployment** |
| Pull request to `main` | Same validation **after the production-baseline transition is proven compatible**; no Pages deployment |
| Push to `main` | Validate, publish static `out/` artifact, then deploy GitHub Pages after success |
| Push to `dev` | No CI push trigger or deployment |

Validation permissions: `contents: read` only. Pages deployment job: `pages: write` and `id-token: write` only. No elevated permissions on the build job. The six CI contract tests in `tests/ci-workflow.test.ts` run inside the existing `npm test` step; they do **not** add a required job or external dependency.

## Verified blockers and remediation order

1. **Source-of-truth checks (verified):** The `dev` workflow runs `Validate and build` successfully. PR #26's corrected documentation [run #44054487981](https://github.com/JMG3000/JMG3000.github.io/actions/runs/44054487981) and PR #28's final synchronized Research Pages [run #44055526090](https://github.com/JMG3000/JMG3000.github.io/actions/runs/44055526090) passed validation, build and high-severity dependency audit. Pages deployment and artifact upload were skipped. Both PRs merged to `dev` on 2026-11-17.
2. **Required-check correction (verified 2026-11-16):** Active [ruleset #27215483](https://github.com/JMG3000/JMG3000.github.io/rules/27215483) protects `dev` and `main` and now requires GitHub Actions **`Validate and build`** (integration ID `15368`). The earlier `REPLACE_WITH_REAL_CI_JOB` placeholder was a real historical defect as of 2026-11-14; the owner corrected it, preserving pull-request, deletion, non-fast-forward, and no-bypass protections. No ruleset changes are part of PR #30.
3. **Production `main` baseline:** `main` still runs a legacy Node 20 build/deploy workflow; its `package.json` does not define the `test` or `typecheck` scripts required by `dev` validation, and its Next.js config does not yet have the same static-export model. **Do not copy the `dev` workflow alone to `main`**; do not claim `main` parity. The compatible application, scripts, and workflow must be promoted together in a separate, owner-approved release.
4. **Enforcement verification (completed 2026-11-16):** Passing required check on `dev` (PR #30 rerun) and `main` (compatible `dev` baseline PR #33) succeeded. A deliberately failing check blocked PR #32 targeting `dev`; a missing check blocked PR #31 targeting `main`. Temporary PRs #31–33 were closed without merge, and no Pages release was triggered. See [Issue #29's evidence table](https://github.com/JMG3000/JMG3000.github.io/issues/29). These scenarios validate merge protection, **not** production `main` workflow parity.
5. **Integration/release boundary:** PR #26 (source documentation) merged to `dev` first, followed by PR #28 (Research Pages), with final CI passing. PR #30 should be synchronized against the combined `dev` baseline and its six contract tests validated with the existing research tests before its own reviewed merge. Merges to `dev` do **not** authorize publishing to `main`; production release requires distinct owner approval.

## Deferred tools and residual risks

- **SonarQube / SonarCloud:** **DEFERRED** at the owner's direction; currently unavailable/out of time or quota. It is not a required check. No configuration changes or recovery attempts are authorized in this task.
- **CircleCI Pipeline:** A separate stale/error commit status exists. CircleCI is not the portfolio's CI provider or a required ruleset check; do not add CircleCI configuration.
- **Dependency audit:** The high-severity threshold is the configured gate. Earlier checks reported seven moderate advisories; this number is historical and must be rechecked on the final combined run rather than assumed unchanged. Moderate advisories are residual risks, not silently marked remediated.

## Deliverable evidence and close criteria

Record each PR, commit SHA, GitHub Actions run, lint/typecheck/test/build/audit outcome, static Pages artifact boundary, and remaining blockers in [Issue #29](https://github.com/JMG3000/JMG3000.github.io/issues/29). The required-check correction and both target-branch validations are **complete**. Keep the issue open for combined PR #30 validation, owner review, and the separately authorized compatible production `main` release.

The GitHub Project #2 board should track this issue. **Issue existence is not evidence of board membership**; membership and project fields must be confirmed in GitHub's project UI or through project-capable authorization.

## Combined integration validation — 2026-11-17

PR #30 adds only `tests/ci-workflow.test.ts` (six static workflow-contract assertions) and this documentation file. The updated `dev` baseline contains merged PR #26's governance package and merged PR #28's allowlisted static Research Pages. The required validation will run **both sets of tests together** and exercise the static build/export verifier. These tests inspect the workflow YAML; live branch-enforcement proof is separately recorded in Issue #29.

Do not mark the project released or deploy GitHub Pages based solely on these integration test results. SonarQube remains deferred and nonblocking. CircleCI continues to report a separate non-required error status.
