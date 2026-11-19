# Portfolio Issue and Delivery Tracker

**Last reviewed:** 2026-11-19  
**Repository:** [JMG3000/JMG3000.github.io](https://github.com/JMG3000/JMG3000.github.io)  
**Production site:** [https://jmg3000.github.io/](https://jmg3000.github.io/)  
**GitHub Project:** [My portfolio — Project #2](https://github.com/users/JMG3000/projects/2)  
**Jira site:** [jakeinc.atlassian.net](https://jakeinc.atlassian.net)

This is a dated status snapshot. GitHub issue state is authoritative for issue open/closed state. Project #2 custom-field values are not reproduced unless verified. Legacy Jira PIMP identifiers are retained only as a historical crosswalk.

## Current snapshot

- **22 GitHub issues total:** 17 open, 5 closed (pull requests excluded).
- **Open pull requests:** PR #25 at the time of review.
- **Project #2:** issue membership was previously confirmed by the owner. Current Status/Priority field values remain unverified and are tracked in [Issue #36](https://github.com/JMG3000/JMG3000.github.io/issues/36).
- **Production:** `main` is deployed. [Actions run #44060986767](https://github.com/JMG3000/JMG3000.github.io/actions/runs/44060986767) completed validation and GitHub Pages deployment successfully.
- **Research:** the owner confirmed that [`/research`](https://jmg3000.github.io/research) renders. Individual detail routes have not each been separately confirmed.
- **Issue closure:** no open issue was closed during this review. Closure decisions remain with the owner.

## Active GitHub issues

| Issue | Current assessment | Next disposition |
|---|---|---|
| [#36](https://github.com/JMG3000/JMG3000.github.io/issues/36) | Deferred platform maintenance and Project #2 field verification. | Triage later; no release blocker. |
| [#35](https://github.com/JMG3000/JMG3000.github.io/issues/35) | Deferred website UX/UI and Contact Me behavior requirements. | Design and implement in a later approved pass. |
| [#29](https://github.com/JMG3000/JMG3000.github.io/issues/29) | CI/CD and production release completed; residual maintenance moved to #36. | Owner review/closure. |
| [#27](https://github.com/JMG3000/JMG3000.github.io/issues/27) | Research Pages implemented and released; owner confirms index loads. | Owner review/closure. |
| [#24](https://github.com/JMG3000/JMG3000.github.io/issues/24) | Agent-instruction proposal remains deferred and unimplemented. | Retain for later approval. |
| [#17](https://github.com/JMG3000/JMG3000.github.io/issues/17) | README source-of-truth objective appears implemented. | Owner closure review. |
| [#16](https://github.com/JMG3000/JMG3000.github.io/issues/16) | Active app versus preserved legacy structure is documented. | Owner closure review. |
| [#15](https://github.com/JMG3000/JMG3000.github.io/issues/15) | Global CSS does not appear to conflict with Chakra's global typography/color strategy. | Owner closure review. |
| [#14](https://github.com/JMG3000/JMG3000.github.io/issues/14) | Home, Portfolio, and Research tests exist; shared layout coverage is being added. | Review cleanup PR CI. |
| [#13](https://github.com/JMG3000/JMG3000.github.io/issues/13) | Production CI passed; full manual route/device review remains. | Owner/browser verification. |
| [#12](https://github.com/JMG3000/JMG3000.github.io/issues/12) | Tutorials navigation target is absent from the current navigation. | Owner closure review. |
| [#11](https://github.com/JMG3000/JMG3000.github.io/issues/11) | Blog reader supports both `.md` and `.markdown`. | Owner closure review. |
| [#10](https://github.com/JMG3000/JMG3000.github.io/issues/10) | Internal links use NextLink; external social links use safe new-tab attributes. | Review cleanup PR CI. |
| [#9](https://github.com/JMG3000/JMG3000.github.io/issues/9) | Reported stray JSX text is absent from current shared layout. | Owner closure review. |
| [#8](https://github.com/JMG3000/JMG3000.github.io/issues/8) | Portfolio contains site-specific content and tests reject starter-template artifacts. | Owner closure review. |
| [#3](https://github.com/JMG3000/JMG3000.github.io/issues/3) | Project #2 exists; requested Status/Priority values remain unverified. | Owner verifies fields; see #36. |
| [#1](https://github.com/JMG3000/JMG3000.github.io/issues/1) | Original roadmap/project-board placeholder may be superseded by current setup. | Owner decides whether to close or re-scope. |

Closed GitHub issues at this snapshot: #2, #4, #5, #6, and #7.

## Pull request status

| PR | State | Assessment |
|---|---|---|
| [#25](https://github.com/JMG3000/JMG3000.github.io/pull/25) | Open | Documentation-only; changes `docs/jira-tracker.md`; head was 65 commits behind `dev` at review. Do not merge as-is. The current cleanup PR refreshes this tracking record from the production baseline. Owner review required before closing or merging either PR. |
| [#26](https://github.com/JMG3000/JMG3000.github.io/pull/26) | Merged | Research source package integrated into `dev`. |
| [#28](https://github.com/JMG3000/JMG3000.github.io/pull/28) | Merged | Static Research routes integrated into `dev`. |
| [#30](https://github.com/JMG3000/JMG3000.github.io/pull/30) | Merged | CI contract tests and delivery documentation integrated into `dev`. |
| [#34](https://github.com/JMG3000/JMG3000.github.io/pull/34) | Merged | Owner-authorized `dev` to `main` release; production deployment succeeded. |

## Jira tracking

| Jira issue | Current Jira status | GitHub relationship | Assessment |
|---|---|---|---|
| [JMGDEV-11](https://jakeinc.atlassian.net/browse/JMGDEV-11) | In Progress | [GitHub #27](https://github.com/JMG3000/JMG3000.github.io/issues/27) | Research Pages delivered; owner closure review pending. |
| [JMGDEV-12](https://jakeinc.atlassian.net/browse/JMGDEV-12) | In Progress | [GitHub #29](https://github.com/JMG3000/JMG3000.github.io/issues/29) and [#36](https://github.com/JMG3000/JMG3000.github.io/issues/36) | Production CI/CD delivered; deferred maintenance separated into #36. |

### Legacy Jira PIMP crosswalk

These identifiers and priorities are retained as historical references from the former `jmg-github-revamp.atlassian.net` tracker. They are not current Jira status or priority assertions.

| GitHub issue | Historical Jira key | Historical priority |
|---|---|---|
| #17 | PIMP-11 | Medium |
| #16 | PIMP-13 | Medium |
| #15 | PIMP-10 | Medium |
| #14 | PIMP-12 | Low |
| #13 | PIMP-9 | Low |
| #12 | PIMP-7 | Highest |
| #11 | PIMP-8 | Highest |
| #10 | PIMP-6 | High |
| #9 | PIMP-4 | High |
| #8 | PIMP-5 | High |

## Related planning records

- [Website follow-up backlog](website-follow-up-backlog.md) — deferred Contact Me behavior, UI/UX review candidates, future enhancements, and maintenance.
- [Issue #35 — Website UX/UI backlog](https://github.com/JMG3000/JMG3000.github.io/issues/35).
- [Issue #36 — Deferred platform maintenance](https://github.com/JMG3000/JMG3000.github.io/issues/36).

## Tracking rules

- Issue open/closed state, PR merge state, Project #2 fields, and deployment are separate facts; do not infer one from another.
- Do not mark issues closed merely because code appears present. The owner reviews the evidence and decides closure.
- Keep the old PIMP identifiers as historical crosswalk only.
- Update this dated snapshot when the owner approves a material tracking change.
