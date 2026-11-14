# Customized Lightweight Agent Governance Framework

**Target:** `JMG3000/JMG3000.github.io`  
**Classification:** Proposed repository guidance  
**Status:** Review draft; not installed or enforced.

## 1. Purpose and scope

Provide a concise operating contract for human contributors and coding agents working on this GitHub Pages portfolio. Apply only to this repository and the approved task.

The framework governs how work is inspected, authorized, changed, tested, and handed off. It does not create an autonomous agent, grant credentials, or replace GitHub permissions, branch rulesets, or CI.

## 2. Authority and authorization

1. Inspect the current repository state, relevant issue, open pull requests, instructions, and affected files before proposing or changing anything.
2. Treat the owner's explicit task directive as the work boundary. Access to a tool or repository is not authorization to use every available capability.
3. Default to read-only inspection. Make only the changes explicitly authorized for the current task.
4. Require separate authorization for destructive changes, external writes, dependency upgrades, permission changes, branch-protection changes, deployment, or scope expansion.
5. Do not infer approval to merge or release from a successful build, an open pull request, or a prior approval for a different task.

## 3. Branch and promotion model

- `main`: production GitHub Pages branch.
- `dev`: integration branch and starting point for new work.
- Create short-lived, descriptive branches from the latest `dev`; use a purpose prefix such as `feature/`, `fix/`, `docs/`, or `chore/`.
- Pull requests for ordinary work target `dev`.
- Review the complete diff and required checks before merge.
- Promote reviewed, accepted work from `dev` to `main only through a separately authorized release step.
- Do not create additional permanent branches or merge directly to `main` as a routine workflow.

## 4. Lightweight branch protection

The intended minimum is:

- Protect `dev` and `main` from deletion and force-push/non-fast-forward updates.
- Require pull requests for changes to both branches.
- Require the repository's existing GitHub Actions validation check, `Validate and build`, after confirming the exact live check context and integration.
- Keep required human approvals at zero unless the owner later chooses to add them.
- Do not add bypass actors by default.
- Do not create a duplicate ruleset or import a generic ruleset payload over an existing target ruleset.

**Current-state warning:** The live portfolio ruleset currently requires the placeholder context `REPLACE_WITH_REAL_CI_JOB`, not the observed `Validate and build` context. The rule is active. This mismatch must be reviewed and corrected by the owner before the ruleset can be treated as a functioning CI merge gate. This document does not change it.

## 5. CI, release, and least privilege

Reuse `.github/workflows/nextjs.yml`:

- Pull requests to `dev` and `main` run dependency installation, lint, typecheck, tests, static build, and the configured high-severity dependency audit.
- The build job uses read-only `contents: read` permission.
- Pages deployment is limited to non-PR runs on `main`.
- Pages write and OIDC permissions remain confined to the deployment job.
- Preserve static export; GitHub Pages has no request-time Node.js runtime.

Do not add another CI provider, workflow, required status check, or paid analysis gate without evidence of a specific gap and owner approval. SonarCloud is not a required gate for this plan.

## 6. Secure handling and privacy

- Never commit secrets, access tokens, private exports, personal data, or local environment files.
- Do not print secrets into CI logs or documentation.
- Use least privilege for workflow permissions and third-party actions.
- Do not add telemetry, tracking, background collection, remote research calls, or user-data collection as part of agent guidance.
- Keep external links and source references relevant to this repository's work.
- Record uncertainty rather than inventing evidence or claiming compliance.

## 7. Documentation and evidence

For each approved change, record:

- task/issue and authorization boundary;
- starting branch and commit;
- files changed and reason;
- validation commands and actual results;
- CI/PR result;
- unresolved risks and deferred work.

Keep the README as the human-facing project overview. Root agent instructions, if later approved, should link to this framework rather than duplicating it. Workflow-specific instructions should live under `.github/` and remain subordinate to root guidance.

## 8. Validation baseline

Use the repository's documented commands as applicable:

```bash
npm ci
npm run lint
npm run typecheck
npm test
npm run build
npm audit --audit-level=high
```

Or run the repository aggregate command:

```bash
npm run check
```

Report only commands actually executed and distinguish local results from GitHub Actions results.

## 9. Explicit exclusions

This framework does not introduce an agent runtime, agent hierarchy, memory store, research scraper, browser automation, new board, Jira synchronization, deployment automation, or a generalized compliance program. It is repository-specific guidance with a small set of existing CI and branch controls.
