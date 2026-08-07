# Portfolio Modernization Design

## Decision

- Preserve the existing Git history and migration narrative.
- Stabilize the current Next.js application before changing routers or redesigning content.
- Keep GitHub Pages and explicit static export for the stabilization release.
- Migrate incrementally to the App Router only after the baseline is secure, deterministic, and covered by tests.

## Stabilization scope

- Remove committed Next.js build output and prevent recurrence.
- Remove unused legacy dependencies that create critical audit findings.
- Make static export behavior explicit in `next.config.ts`.
- Remove the undeployable example API route.
- Fix invalid navigation markup, dead routes, rendered source text, and placeholder portfolio content.
- Preserve both `.md` and `.markdown` content compatibility.
- Add regression tests for shared layout, portfolio content, content loading, and export configuration.
- Add pull-request quality gates for audit, lint, type checking, tests, and production build.
- Replace the starter README with an accurate source-of-truth document.

## Architecture

- Continue using Next.js Pages Router during stabilization.
- Continue using Chakra UI as the component system.
- Keep the application statically exportable to GitHub Pages.
- Treat `prior_site_architecture/` and `README.txt` as historical records, not runtime inputs.
- Keep application behavior in focused modules and verify it through Vitest plus server-rendered React output.

## Security invariants

- Production installation must not contain known high or critical npm advisories.
- No server-only route may be represented as available on a static host.
- Pull requests must not reach deployment without audit, lint, type, test, and build validation.
- GitHub Pages write and OIDC permissions must be limited to the deployment job.

## Deferred scope

- App Router migration.
- Full visual redesign and project case-study content.
- Custom domain or server-capable hosting.
- Contact-form backend.
- CMS integration.
- Analytics and monitoring.

## Completion criteria

- `npm audit --audit-level=high` exits successfully.
- `npm run lint` exits successfully.
- `npm run typecheck` exits successfully.
- `npm test` exits successfully.
- `npm run build` produces a static `out/` export.
- Regression tests prove dead navigation, starter portfolio content, and post-extension failure are removed.
- Final Git diff contains only stabilization, tests, workflow, and documentation changes.
