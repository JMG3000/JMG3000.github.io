# Portfolio work tracking — GitHub Issues and Project #2

> This file retains its historical `docs/jira-tracker.md` path to preserve existing links. The former Jira `PIMP` tracker is **legacy reference material**, not the current status or priority authority.

## Live sources of truth

| Information | Current system |
| --- | --- |
| Issue identity, open/closed state, labels, assignees and discussion | [Portfolio GitHub Issues](https://github.com/JMG3000/JMG3000.github.io/issues) |
| Priority, triage, in-progress/done status, iteration, estimates and board views | [My portfolio — GitHub Project #2](https://github.com/users/JMG3000/projects/2) |
| Individual review, merge and delivery evidence | [Repository pull requests](https://github.com/JMG3000/JMG3000.github.io/pulls) and [GitHub Actions](https://github.com/JMG3000/JMG3000.github.io/actions) |

Project views: [Prioritized bugs](https://github.com/users/JMG3000/projects/2/views/1) · [Triage](https://github.com/users/JMG3000/projects/2/views/2) · [In review](https://github.com/users/JMG3000/projects/2/views/3) · [My items](https://github.com/users/JMG3000/projects/2/views/4) · [Roadmap](https://github.com/users/JMG3000/projects/2/views/5).

**Use these live links for current status.** This Markdown document is a navigation and historical cross-reference, not a continuously synchronized issue database; a dated snapshot is not proof of today's state. GitHub issue state and GitHub Project status are different fields: `Done` on a board does not independently prove code was merged or deployed.

## Verified snapshot — November 13, 2026

- GitHub repository issues (excluding PRs): **18 total; 13 open; 5 closed**. This includes [planning issue #24](https://github.com/JMG3000/JMG3000.github.io/issues/24).
- GitHub Project #2, **My items** view with `assignee:@me` filter: **19 matching items** — **11 To triage, 2 In progress, 6 Done**. Items include issues and at least one PR; these figures are **not** the full project-wide issue count.
- [Issue #24](https://github.com/JMG3000/JMG3000.github.io/issues/24) is visible in the **To triage** group. This confirms its board membership, but does not prove how every future issue will be enrolled.
- [Issue #2](https://github.com/JMG3000/JMG3000.github.io/issues/2), shown as open in the April snapshot, is now **closed**.
- Architecture issues [#8–#17](https://github.com/JMG3000/JMG3000.github.io/issues?q=is%3Aissue+is%3Aopen+number%3A8..17) remain open in GitHub. Modernization [PR #23](https://github.com/JMG3000/JMG3000.github.io/pull/23) merged into `dev`, but its merge is not automatic evidence that each issue's acceptance criteria has been reviewed and closed.
- Project #2 displayed **9 enabled workflows** at the time of inspection; their individual trigger conditions were not independently verified.

These figures are dated observations, **not** fields to maintain manually in parallel with GitHub.

## Historical Jira mapping (legacy only)

The entries below are preserved from the April 14, 2026 tracker. Jira issue identifiers and the historical priorities are **not live-verified**; the legacy Jira site was unavailable through the currently authorized Atlassian connection. Consult GitHub for the current issue state and board priority.

| GitHub issue | Historical Jira issue | Previously recorded Jira priority |
| --- | --- | --- |
| [#17 — README source of truth](https://github.com/JMG3000/JMG3000.github.io/issues/17) | [PIMP-11](https://jmg-github-revamp.atlassian.net/browse/PIMP-11) | Medium |
| [#16 — Active and legacy artifacts](https://github.com/JMG3000/JMG3000.github.io/issues/16) | [PIMP-13](https://jmg-github-revamp.atlassian.net/browse/PIMP-13) | Medium |
| [#15 — Global CSS](https://github.com/JMG3000/JMG3000.github.io/issues/15) | [PIMP-10](https://jmg-github-revamp.atlassian.net/browse/PIMP-10) | Medium |
| [#14 — Route-level quality](https://github.com/JMG3000/JMG3000.github.io/issues/14) | [PIMP-12](https://jmg-github-revamp.atlassian.net/browse/PIMP-12) | Low |
| [#13 — Verification sweep](https://github.com/JMG3000/JMG3000.github.io/issues/13) | [PIMP-9](https://jmg-github-revamp.atlassian.net/browse/PIMP-9) | Low |
| [#12 — Tutorials navigation](https://github.com/JMG3000/JMG3000.github.io/issues/12) | [PIMP-7](https://jmg-github-revamp.atlassian.net/browse/PIMP-7) | Highest |
| [#11 — Post extensions](https://github.com/JMG3000/JMG3000.github.io/issues/11) | [PIMP-8](https://jmg-github-revamp.atlassian.net/browse/PIMP-8) | Highest |
| [#10 — Link patterns](https://github.com/JMG3000/JMG3000.github.io/issues/10) | [PIMP-6](https://jmg-github-revamp.atlassian.net/browse/PIMP-6) | High |
| [#9 — JSX artifact](https://github.com/JMG3000/JMG3000.github.io/issues/9) | [PIMP-4](https://jmg-github-revamp.atlassian.net/browse/PIMP-4) | High |
| [#8 — Starter content](https://github.com/JMG3000/JMG3000.github.io/issues/8) | [PIMP-5](https://jmg-github-revamp.atlassian.net/browse/PIMP-5) | High |

Historical project issues [#1–#7](https://github.com/JMG3000/JMG3000.github.io/issues) had no Jira mapping recorded in the April tracker. The original record also noted that issues #5 and #6 share a title; retain their independent identities.

## Tracking rules

1. Consult GitHub Issues and Project #2 before updating or reporting work status. Never treat this file's historical Jira mapping, old counts, or old ticket priorities as fresh observations.
2. Record source-specific status correctly: issue open/closed, project column/status, CI result, PR merge result and production deployment are not interchangeable.
3. Reconcile discrepancies and old architecture issues against acceptance criteria; do not bulk-close issues just because a broad modernization PR merged.
4. Prefer existing GitHub Project #2 views and workflows. Do not add a second board, duplicate automation, or a new Jira synchronization requirement without an approved need.

**Jira administration and tickets were not modified.** The legacy Atlassian site requires a separately authorized connection before any live Jira reconciliation can be performed.
