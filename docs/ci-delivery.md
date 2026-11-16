# Portfolio CI/CD delivery contract

**Tracked work:** [Issue #29](https://github.com/JMG3000/JMG3000.github.io/issues/29) · [Portfolio Project #2](https://github.com/users/JMG3000/projects/2)  
**Repository:** `JMG3000/JMG3000.github.io`  
**Status:** CI contract development authorized; required-check repair and production alignment pending.

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

1. **Source-of-truth checks:** The verified `dev` workflow runs `Validate and build` successfully. PR #28's synchronized run [#43848158936](https://github.com/JMG3000/JMG3000.github.io/actions/runs/43848158936) passed the existing build/test/audit checks with seven moderate dependency advisories; no Pages deployment.
2. **Required-check configuration:** Active [ruleset #27215483](https://github.com/JMG3000/JMG3000.github.io/rules/27215483) protects `dev` and `main` but requires the invalid placeholder `REPLACE_WITH_REAL_CI_JOB` (GitHub Actions integration ID 15368). A repository administrator must replace **only this context** with `Validate and build`, preserving branch targets, no-bypass policy, and deletion/non-fast-forward protections. The current GitHub connector cannot perform this administrative edit.
3. **Production `main` baseline:** `main` still runs a legacy Node 20 build/deploy workflow; its `package.json` does not define the `test` or `typecheck` scripts required by `dev` validation, and its Next.js config does not yet have the same static-export model. **Do not copy the `dev` workflow alone to `main`**; do not claim `main` parity. The compatible application, scripts, and workflow must be promoted together in a separate, owner-approved release.
4. **Enforcement verification:** Before declaring the ruleset repaired, use PRs targeting **both `dev` and `main`** (the `main` PR must carry the compatible `dev` baseline) to verify the exact `Validate and build` context is emitted. Confirm that an absent/failing required check blocks merging and that a passing check satisfies that requirement. Do not bypass the rule to complete a merge.
5. **Merge/release:** Obtain owner approval separately for PR merges and the later `main` release. PR #26 (source documentation) should precede PR #28 (research Pages implementation) when their existing branch/ruleset checks allow it.

## Deferred tools and residual risks

- **SonarQube / SonarCloud:** **DEFERRED** at the owner's direction; currently unavailable/out of time or quota. It is not a required check. No configuration changes or recovery attempts are authorized in this task.
- **CircleCI Pipeline:** A separate stale/error commit status exists. CircleCI is not the portfolio's CI provider or a required ruleset check; do not add CircleCI configuration.
- **Dependency audit:** The high-severity threshold is the gate; seven moderate advisories are independently tracked as residual risk, not silently marked remediated.

## Deliverable evidence and close criteria

Record the exact PR, commit SHA, GitHub Actions run, lint/typecheck/test/build/audit outcome, static Pages artifact boundary, and remaining blockers in [Issue #29](https://github.com/JMG3000/JMG3000.github.io/issues/29). Keep the issue open until required-check correction, both target-branch validations, and compatible production alignment are verified.

The GitHub Project #2 board should track this issue. **Issue existence is not evidence of board membership**; membership and project fields must be confirmed in GitHub's project UI or through project-capable authorization.
