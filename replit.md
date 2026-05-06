# Shadcn Landing Page

A beautiful, responsive landing page built with shadcn/ui components, featuring dark/light mode toggle, animated sections, testimonials, pricing, team, FAQ, and a contact form.

## Run & Operate

- Frontend: workflow `artifacts/shadcn-landing-page: web` — Vite dev server
- `pnpm --filter @workspace/api-server run dev` — run the API server (not used by the landing page)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React 19 + Vite + Tailwind CSS v4 + shadcn/ui
- Routing: wouter (single-page app, no routes needed)
- Theme: next-themes (light/dark/system)
- UI components: Radix UI primitives + class-variance-authority
- Icons: lucide-react

## Where things live

- `artifacts/shadcn-landing-page/src/App.tsx` — root component, assembles all sections
- `artifacts/shadcn-landing-page/src/index.css` — CSS variables / orange theme (light + dark)
- `artifacts/shadcn-landing-page/src/components/layout/` — Navbar, ThemeProvider, ToggleTheme
- `artifacts/shadcn-landing-page/src/components/layout/sections/` — all page sections
- `artifacts/shadcn-landing-page/src/components/ui/` — shadcn UI components
- `artifacts/shadcn-landing-page/public/` — hero images (hero-image-light.jpeg, hero-image-dark.jpeg)

## Architecture decisions

- Pure frontend, no backend — the api-server artifact exists in the scaffold but is unused by this app.
- Single-page design: all sections are rendered on one page, no client-side routing needed.
- Theme uses CSS custom properties (HSL variables) consumed by Tailwind v4 `@theme inline` block.
- lucide-react `LineChart` icon was renamed in newer versions — replaced with `TrendingUp`.
- The Icon component has a null guard to prevent crashes from unknown icon names.

## Product

- Full marketing landing page with: hero, sponsors marquee, benefits, features, services, testimonials, team grid, community CTA, pricing cards, contact form, FAQ accordion, and footer.
- Dark/light/system theme toggle in the navbar.
- Contact form with react-hook-form + Zod validation, sends via mailto link.

## Gotchas

- Do NOT use `next/link`, `next/image`, or any `next/*` imports — this is Vite+React, not Next.js.
- `next-themes` is fine (it's framework-agnostic), but `next/font` is NOT available — use Google Fonts via CSS or `<link>`.
- The lucide-react version here may not have older icon names (e.g. `LineChart` → `TrendingUp`). Use the Icon component's null guard.
- Tailwind v4 uses `@import "tailwindcss"` not `@tailwind base/components/utilities`.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
