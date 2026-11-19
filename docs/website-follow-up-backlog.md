# Website Follow-up Backlog

**Updated:** 2026-11-19  
**Production:** [https://jmg3000.github.io/](https://jmg3000.github.io/)  
**Repository:** [JMG3000/JMG3000.github.io](https://github.com/JMG3000/JMG3000.github.io)

This document separates completed delivery from owner-review items, deferred maintenance, and future website work. It is a tracking document, not authorization to implement every deferred item.

## Production baseline and confirmed facts

- Production is the Next.js Pages Router application using React, TypeScript, and Chakra UI, exported statically to GitHub Pages.
- The owner confirmed that [the Research index](https://jmg3000.github.io/research) renders successfully. The owner described its current presentation as plain; visual refinement is deferred.
- Production deployment completed successfully in [GitHub Actions run #44060986767](https://github.com/JMG3000/JMG3000.github.io/actions/runs/44060986767).
- The current homepage has a direct `mailto:` Contact Me link and a separate Connect section under About Me containing GitHub and LinkedIn.
- The shared footer already provides GitHub, LinkedIn, and email links.
- The production README documents the active application, routes, local commands, research source, and delivery controls.

## Current tracking and owner review

| Item | Current state | Required disposition |
|---|---|---|
| [Issue #27 — Research Pages](https://github.com/JMG3000/JMG3000.github.io/issues/27) | Implementation released; owner confirmed `/research` loads. | Owner review before closure. Individual detail routes have not each been separately confirmed. |
| [Issue #29 — CI/CD stabilization](https://github.com/JMG3000/JMG3000.github.io/issues/29) | Production release and deployment complete. | Owner review; maintenance follow-ups moved to #36. |
| [Issue #24 — Agent instructions](https://github.com/JMG3000/JMG3000.github.io/issues/24) | Deferred proposal; not implemented. | Retain for a later explicitly approved pass. |
| [Issue #35 — Website UX/UI backlog](https://github.com/JMG3000/JMG3000.github.io/issues/35) | Deferred requirements recorded. | Design and implementation later. |
| [Issue #36 — Deferred platform maintenance](https://github.com/JMG3000/JMG3000.github.io/issues/36) | Deferred work separated from release delivery. | Triage when approved and when service/quota constraints permit. |
| [PR #25 — Issue tracker refresh](https://github.com/JMG3000/JMG3000.github.io/pull/25) | Open; one-file documentation change; 65 commits behind `dev`. | Do not merge as-is. Supersede with the current cleanup PR after owner review. |
| [Issues #8–12 and #15–17](https://github.com/JMG3000/JMG3000.github.io/issues) | Current production code appears to contain the requested fixes. | Owner reviews the evidence comments and decides which issues to close. |
| [Issue #13 — Final verification](https://github.com/JMG3000/JMG3000.github.io/issues/13) | CI passes; full manual navigation review remains. | Owner/browser verification before closure. |
| [Issue #14 — Route-level quality checks](https://github.com/JMG3000/JMG3000.github.io/issues/14) | Home, Portfolio, and Research tests exist; shared layout navigation lacked dedicated tests. | Add focused layout regression coverage and review CI. |
| [Issue #1](https://github.com/JMG3000/JMG3000.github.io/issues/1) | Original roadmap/project-board placeholder. | Owner decides whether superseded or needs re-scoping. |
| [Issue #3](https://github.com/JMG3000/JMG3000.github.io/issues/3) | Project #2 exists; its Status/Priority field values remain unverified. | Owner verifies the fields; see #36. |

No existing issue or PR was closed as part of this tracking pass. Closure decisions remain with the owner.

## Legacy architecture issues: evidence for closure review

The following are implementation observations from the current production source, not automatic closure decisions.

| Issue | Production evidence | Suggested owner decision |
|---|---|---|
| #8 — Portfolio starter content | `src/pages/portfolio.tsx` contains site-specific portfolio content; `tests/portfolio.test.tsx` rejects starter-template content. | Review and close if accepted. |
| #9 — Stray JSX text | The current `components/Layout.tsx` has no stray rendered JSX text artifact. | Review and close if accepted. |
| #10 — Link patterns | Internal navigation uses `NextLink`; external GitHub/LinkedIn links use safe new-tab attributes. Layout regression coverage is being added. | Review after CI. |
| #11 — Markdown extension mismatch | `config/site.ts` supports both `.md` and `.markdown` and validates slugs. | Review and close if accepted. |
| #12 — Dead Tutorials navigation | Current navigation exposes Home, Portfolio, and Research; no Tutorials link remains. | Review and close if accepted. |
| #13 — Final verification | Production CI passed; owner has confirmed the Research index. Other route/device checks remain. | Keep open until manual review. |
| #14 — Route-level checks | Home, Portfolio, and Research test suites exist. Dedicated shared-layout navigation tests are being added in this cleanup. | Keep open until PR CI and owner review. |
| #15 — Global CSS / Chakra | Global CSS contains baseline sizing/overflow and scoped Research styles, not competing global typography/color defaults. | Review and close if accepted. |
| #16 — Active vs. legacy structure | README identifies the active Next.js app and preserved `prior_site_architecture/`; the former `next-site/` path is absent from the current tree. | Review and close if accepted. |
| #17 — README source of truth | README describes the current stack, routes, commands, content source, and deployment controls. | Review and close if accepted. |

## Deferred Contact Me interaction

**Owner-requested behavior — record only; do not implement in the current cleanup pass.**

Current behavior:
- Contact Me navigates directly through a `mailto:` link.
- A separate Connect section duplicates GitHub and LinkedIn links beneath About Me.
- The footer already contains the social/contact links.

Requested future behavior:
1. Clicking **Contact Me** opens a closed disclosure/popup within the current page.
2. Remove the duplicate **Connect** section beneath About Me.
3. The disclosure offers three icon actions: Gmail/email, GitHub, and LinkedIn.
4. Show the exact message: **“Thank you for clicking my button. It's the thought that counts.”**
5. Keep the existing footer links.
6. The email action must not replace the portfolio page. A Gmail compose URL in a new tab with a `mailto:` fallback is one option; finalize the behavior before implementation.
7. Track clicks on Contact Me and each disclosure action. Decide event names, destination/provider, retention, and privacy/consent behavior first. Do not introduce an analytics provider or collect personal data without an approved design.

Acceptance considerations:
- Keyboard operation, visible focus, accessible labels, and expanded/collapsed semantics.
- Predictable Escape and focus behavior if implemented as a dialog or popover.
- The current page remains available after the email action.
- No duplicate Connect section; footer links remain.

## Broader UI/UX and functionality review

These are candidates for a later evidence-based review, not confirmed defects:

- Research section: improve typography, spacing, hierarchy, document navigation, and source/provenance presentation.
- Home and Portfolio: review content hierarchy, CTA consistency, responsive layout, and project presentation.
- Accessibility: keyboard flow, focus visibility, semantic structure, screen-reader labels, color contrast, and reduced-motion behavior.
- Navigation and routes: mobile behavior, 404 experience, internal/external link integrity, and page metadata/social previews.
- Portfolio content: add engineering case studies with project context, personal contribution, technical decisions, and measurable outcomes.
- Performance: establish a baseline before setting budgets or changing assets.

## Future enhancements

- Incremental Next.js App Router migration after the current Pages Router baseline remains stable.
- Optional custom domain.
- Privacy-conscious analytics and monitoring.
- Server-backed contact workflow if a static email action is no longer sufficient.
- Expanded project case studies and supporting media.
- A dedicated visual-design and accessibility pass.

## Deferred platform maintenance

Tracked separately in [Issue #36](https://github.com/JMG3000/JMG3000.github.io/issues/36):

- Seven moderate npm advisories were present at release. The configured high-severity audit gate passed; targeted triage is preferred over blanket upgrades.
- SonarCloud remains deferred because of quota availability and is not a required check.
- CircleCI reports a separate error because no repository configuration is present; it is not a required check. Decide whether it is retired or should be configured.
- GitHub Project #2 issue membership was confirmed, but Status/Priority custom field values have not been independently verified.

## Implementation and release rules

- Implement on a new branch; never develop directly on `main`.
- Use pull requests for review. The owner reviews and decides on every PR and issue closure.
- Run the existing GitHub Actions `Validate and build` checks.
- Merge to `dev` only after owner approval; promote to `main` through a separately reviewed, authorized release PR.
- Keep deferred items out of release scope unless separately approved.
