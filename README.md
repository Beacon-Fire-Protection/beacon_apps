# Beacon Apps (Base44 + React)

Single-page web app for **Beacon Project Partners** that presents consulting/software services and captures inbound consultation requests.

## Purpose

This project provides a branded marketing site and lead-capture flow for Beacon Project Partners, built on Base44 infrastructure with a React/Vite frontend.

Core goals:
- Present service positioning and credibility
- Showcase a portfolio of shipped applications
- Collect qualified contact inquiries through an integrated form
- Support Base44 auth/app context when required by deployment settings

## Key Features

- **Landing experience** (`Home`) with:
  - Hero positioning
  - Services/about narrative
  - Contact/consultation form
  - Footer and smooth-scroll interactions
- **Portfolio experience** (`Portfolio` page component available in code):
  - Search + category filtering
  - 50+ project entries from static data
- **Lead capture integration**:
  - Contact form writes to `base44.entities.ContactInquiry` (status `new`)
- **Auth + app-state handling**:
  - Reads Base44 app/token params from URL/localStorage
  - Loads app public settings
  - Handles `auth_required` and `user_not_registered` states
- **App instrumentation**:
  - Navigation tracker posts URL updates to parent window
  - Logs in-app page activity for authenticated users
- **Design system**:
  - Tailwind CSS + shadcn/radix UI component set
  - Motion/animation via Framer Motion

## Tech Stack

- **Framework/runtime**: React 18, Vite 6
- **Routing**: React Router 6
- **Data/querying**: @tanstack/react-query
- **Backend SDK**: @base44/sdk + @base44/vite-plugin
- **UI**: Tailwind CSS, shadcn UI, Radix primitives, lucide-react icons, sonner/toast utilities
- **Linting/type checks**: ESLint 9, TypeScript checker on JS/JSX via `jsconfig.json`

## Project Structure

```text
src/
  App.jsx                  # App shell, router, auth gate, providers
  pages.config.js          # Route/page registry (currently Home only)
  pages/
    Home.jsx               # Primary published page
    Portfolio.jsx          # Portfolio page component (not in route map by default)
  components/
    portfolio/             # Landing + portfolio UI sections and project data
    ui/                    # Shared shadcn/radix UI primitives
  api/
    base44Client.js        # Base44 client initialization
    entities.js            # Base44 entities/auth exports
    integrations.js        # Base44 integration exports
  lib/
    AuthContext.jsx        # Auth/public-settings bootstrap + auth errors
    NavigationTracker.jsx  # Parent postMessage + app log hooks
    app-params.js          # URL/env/localStorage param resolution
```

## Local Development

### 1) Prerequisites
- Node.js LTS release (recommended: current LTS)
- npm

### 2) Install

```bash
npm ci
```

### 3) Configure environment

Create `.env` in the repo root (or use deployment-provided values):

```bash
VITE_BASE44_APP_ID=your_app_id
VITE_BASE44_BACKEND_URL=https://your-base44-backend
# Optional (enables Base44 plugin proxy behavior)
VITE_BASE44_APP_BASE_URL=https://your-base44-app-base-url
```

### 4) Run

```bash
npm run dev
```

Vite will print the local URL (commonly `http://localhost:5173`).

## Available Scripts

- `npm run dev` — start local dev server
- `npm run build` — build production assets to `dist/`
- `npm run preview` — preview built app locally
- `npm run lint` — run ESLint
- `npm run lint:fix` — auto-fix lint issues where possible
- `npm run typecheck` — TypeScript check against JS/JSX config

## Routing Notes

Routes are generated from `src/pages.config.js`.

- Currently configured route: `/` -> `Home`
- `Portfolio` component exists, but is not currently registered in `PAGES`

To expose additional pages, add them to `PAGES` and update `mainPage` as needed.

## Deployment Notes

- Build output is generated via `npm run build` into `dist/`
- Base44 behavior depends on app params from:
  - URL query params (e.g. `app_id`, `server_url`, `access_token`)
  - environment variables (`VITE_BASE44_*`)
  - localStorage fallbacks

## Validation Snapshot (current repository state)

At the time this README was updated:
- `npm run build` passed
- `npm run lint` reports pre-existing unused-import issues
- `npm run typecheck` reports pre-existing JS/TS type errors

These are existing repository issues and were not introduced by README updates.
