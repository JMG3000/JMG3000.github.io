# JMG3000.github.io

Personal portfolio site built with **Next.js (Pages Router)** and **Chakra UI**.

## Active Application
The active app is in the repository root.

### Core directories
- `src/pages/` — route pages (`/`, `/portfolio`, API routes)
- `components/` — shared UI layout components
- `components/ui/` — Chakra provider wiring
- `content/posts/` — markdown blog content (`.md` convention)
- `config/` — content utilities (for example, post reader)
- `styles/` — minimal global CSS reset
- `public/` — static assets

### Historical/legacy content
- `prior_site_architecture/` contains archived Ruby/Jekyll-era files for reference only.

## Routes
- `/` — home page
- `/portfolio` — portfolio page
- `/api/*` — API route handlers (if present)

## Local development
```bash
npm ci
npm run dev
```

## Validation commands
```bash
npm run lint
npm run build
```

## Route-level quality checks
Use this checklist before release:
1. Run `npm run lint` and `npm run build`.
2. Open `/` and verify:
   - Page title is `Jacob Garrett`
   - Primary CTAs (Portfolio, Contact) navigate correctly
   - External profile links open correctly
3. Open `/portfolio` and verify:
   - Page title is `Portfolio | Jacob Garrett`
   - Content is portfolio-specific (no create-next-app placeholder text)
   - Back-to-home navigation works
4. Confirm header links (`Home`, `Portfolio`) do not produce 404 responses.

## Notes
Historical planning notes are kept in `README.txt`.
