# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Vite)
npm run build      # Type-check + production build (tsc -b && vite build)
npm run lint       # ESLint
npm run preview    # Preview production build
```

No test runner is configured.

## Architecture

React 19 SPA built with Vite + TypeScript + Tailwind CSS. Deployed on Vercel (all routes rewrite to `/` for SPA routing).

### Request Flow

```
Page → Hook → Service → apiInstance (Axios)
```

- **`src/services/apiInstance.ts`** — Axios instance with base URL from `VITE_API_BASE_URL`, sends cookies (`withCredentials`), and has a 401 interceptor that attempts a token refresh before retrying the original request. On refresh failure, dispatches a `sessionExpired` custom event.
- **`src/services/`** — One file per domain operation (e.g., `encryptFileService.ts`, `deleteApiKey.ts`). Each exports a single async function.
- **`src/hooks/`** — Each hook wraps one service call, manages loading/error state, and surfaces errors via `MessageContext` (Sonner toasts).

### Routing

- `App.tsx` splits routes into `/` (public) and `/app/*` (private).
- Private routes are wrapped in `AuthGuard`, which redirects unauthenticated users to login.
- Route path constants are defined in `src/routes/paths.ts` — use these instead of string literals.

### Global State (Context API)

| Context | Location | Purpose |
|---|---|---|
| `AuthContext` | `src/contexts/AuthContext.tsx` | Auth state, login/logout |
| `AccountContext` | `src/contexts/AccountContext.tsx` | User account data with fetch/refetch/clear |
| `MessageContext` | `src/contexts/MessageContext.tsx` | Toast notifications via Sonner |

No Redux. The `src/store/` directory is empty.

### Component Conventions

- **`src/components/ui/`** — Shadcn/Radix UI primitives. Don't modify these unless updating the design system.
- **`src/components/`** — Feature components (forms, tables). Generally one component per file.
- **`src/pages/`** — Page-level components. Each corresponds to a route.
- Use `@/` path alias for all imports from `src/`.

### Environment Variables

```
VITE_API_BASE_URL          # Backend API base URL
VITE_STRIPE_PAYMENT_LINK   # Stripe checkout link
VITE_GITHUB_URL
VITE_ROSETTA_URL
VITE_ROSETTA_LINKEDIN_URL
VITE_CRYPTOVAULT_DOCS_URL  # Postman API docs
```

### TypeScript

Strict mode is enabled. All types live in `src/types/`. `ApiErrorResponse.ts` defines the shape of backend errors — use it when typing Axios error responses.
