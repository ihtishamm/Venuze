# Hashed System — Frontend Technical Assessment

A production-style Next.js 15 application built for the Hashed System frontend
assessment. It implements the provided Figma design — a public **Venuze**
marketing/landing experience and venue search, plus an authenticated dashboard
with a full **user-management** module — wired to the [reqres.in](https://reqres.in)
API for authentication and user CRUD.

> **Repository:** [github.com/ihtishamm/Venuze](https://github.com/ihtishamm/Venuze) > **Live demo:** (https://venuze-assessment.vercel.app/)

---

## Tech stack

| Concern            | Choice                                                         |
| ------------------ | -------------------------------------------------------------- |
| Framework          | **Next.js 15** (App Router, React 19, Turbopack dev)           |
| Language           | **TypeScript** (`strict`)                                      |
| Styling            | **Tailwind CSS v4** + shadcn/ui (Radix primitives, "new-york") |
| Server state       | **TanStack Query v5**                                          |
| Client/UI state    | **Zustand v5** (with `persist`)                                |
| URL state          | **nuqs** (table pagination / search live in the URL)           |
| Forms + validation | **React Hook Form** + **Zod**                                  |
| HTTP               | **Axios** (single configured instance + interceptors)          |
| Notifications      | **sonner** (toasts)                                            |
| Error tracking     | **Sentry** (env-gated, fully disable-able)                     |

---

## Getting started

### Prerequisites

- **Node.js 18.18+** (Next.js 15 requirement)
- **pnpm** — the project relies on `.npmrc` settings (`legacy-peer-deps`,
  `shamefully-hoist`). Other package managers are not recommended.

### 1. Install

```bash
pnpm install
```

### 2. Environment variables

Copy the example file and fill in the values:

```bash
cp env_example.txt .env.local
```

| Variable                      | Required | Notes                                                                                                                       |
| ----------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_API_BASE_URL`    | ✅       | `https://reqres.in/api` — base URL for all API calls.                                                                       |
| `NEXT_PUBLIC_REQRES_API_KEY`  | ✅       | reqres.in now requires an `x-api-key` header. Get a free key from reqres.in and set it here, otherwise requests return 401. |
| `NEXT_PUBLIC_SENTRY_*`        | ➖       | Sentry DSN/org/project — leave blank to skip.                                                                               |
| `SENTRY_AUTH_TOKEN`           | ➖       | Only needed for Sentry source-map upload in CI/CD.                                                                          |
| `NEXT_PUBLIC_SENTRY_DISABLED` | ➖       | Set to any value to fully disable Sentry locally.                                                                           |

### 3. Run

```bash
pnpm dev            # dev server (Turbopack)  → http://localhost:3000
pnpm build          # production build (also run by the pre-push git hook)
pnpm start          # serve the production build
pnpm lint           # next lint
pnpm lint:strict    # eslint --max-warnings=0 (verifies a clean tree)
pnpm format         # prettier --write .
```

### Demo credentials

reqres.in accepts a fixed login. Use:

```
email:    eve.holt@reqres.in
password: cityslicka
```

Visiting any `/dashboard/*` route while logged out redirects you to sign-in;
logging in redirects you back to the page you wanted.

---

## What's implemented

### Public area

- **Landing page** (`/`) — Venuze marketing site: hero with search, venue &
  vendor categories, featured venues, "perfect venue" path, trusted creators,
  destinations and CTA, footer. Fully responsive with hover states.
- **Venue search** (`/search`) — results list + interactive map, category strip,
  keyword toolbar, and a filter drawer. Search summary (`where/when/guests`) is
  driven by URL search params and resolved server-side.

### Authentication

- Real login against `POST https://reqres.in/api/login`.
- **Zod-validated** email + password (React Hook Form).
- **Persistence**: token stored in a cookie _and_ mirrored in a persisted
  Zustand store, so auth survives refreshes.
- **Middleware route protection** (`src/middleware.ts`): unauthenticated users
  hitting `/dashboard/*` are redirected to sign-in (with a `redirect` back-link);
  authenticated users hitting `/auth/*` are bounced to the dashboard.
- **Logout** clears both cookie and store.

### Dashboard

- Sidebar shell with collapse state persisted via a `sidebar_state` cookie.
- Overview page with data-driven widgets (stat cards, recent bookings, popular
  venues, welcome banner).

### User-management module

- **Listing** with client-side **search**, **pagination**, **loading skeletons**,
  **error state** (with retry), and **empty state**.
- **Add / Edit / View** in modals driven by a small Zustand UI store.
- **Optimistic** create / update / delete against `POST/PUT/DELETE /api/users`.
- Form validation via React Hook Form + Zod (required fields, email format).

### Bonus

- Custom hooks throughout (`use-users`, `use-login`, `use-data-table`, etc.).
- **Optimistic updates** with automatic rollback on error.
- Error boundaries (`error.tsx`, `global-error.tsx`) and a `not-found` page.
- Accessible Radix-based primitives.

---

## Technical decisions

### Server fetches, client interacts

Pages under `src/app/**` are async Server Components that read URL state and pass
data into `'use client'` feature components in `src/features/**`. This keeps the
interactive surface area small and pushes data-resolution to the server where it
belongs.

### A single configured Axios instance

All requests go through `src/lib/axios.ts`, which:

- injects the reqres `x-api-key` header on every request,
- attaches the bearer token from the auth cookie (client-side) via a request
  interceptor,
- **normalises errors** in a response interceptor into a predictable
  `{ status, message, data }` shape so React Query and the UI can reason about
  them uniformly (reqres returns messages under `error`, others under `message`).

### Auth token in a cookie (not just localStorage)

Next.js middleware runs on the edge and **cannot read `localStorage`**. Storing
the token in a (non-httpOnly) cookie lets the middleware perform route protection
while the client and Axios can still read it. The reqres token is a throwaway
demo token, so a client-readable cookie is an acceptable trade-off here; in a real
app this would be an httpOnly cookie set by the server.

### Centralised query/mutation UX

`src/provider/query-provider.tsx` configures one query client with:

- `QueryCache`/`MutationCache` `onError` handlers that **surface toasts globally**,
  so individual hooks rarely need their own error handling;
- a default success toast for mutations (suppressed when a mutation supplies its
  own `onSuccess`);
- sensible defaults — `staleTime` 60s, **no retry on 401/403**, and **mutations
  never retry** (avoids duplicate writes);
- an **SSR-safe singleton** (new client per server request, reused in the browser).

### URL-driven table state

Table pagination/search live in the URL via `nuqs`, not local React state. This
makes list views shareable, back-button friendly, and keeps the server and client
reading from the same source of truth.

### Working around a non-persistent API

reqres.in **does not actually persist writes** and paginates its user list. So:

- `getAllUsers` fetches **all pages** up front and caches them with
  `staleTime: Infinity` (and no refetch-on-focus). That cached array is treated as
  the **session source of truth**.
- Mutations patch this cache **optimistically** and intentionally do _not_ trigger
  a refetch — a refetch would discard the local writes the user just made.
- Search and pagination are therefore done **client-side** over the cached list,
  since reqres has no server-side search.

---

## State-management approach

The app deliberately separates three kinds of state:

| Kind                | Tool           | Examples                                                                      |
| ------------------- | -------------- | ----------------------------------------------------------------------------- |
| **Server / async**  | TanStack Query | User list & details, login mutation, caching, invalidation, optimistic CRUD   |
| **Global / UI**     | Zustand        | Auth state (`auth-store`, persisted), user-modal open/mode (`users-ui-store`) |
| **URL / shareable** | nuqs           | Table page/perPage/search, search-page `where/when/guests`                    |

Rationale: server data shouldn't live in Zustand (Query already handles caching,
deduping, and background state), and ephemeral UI flags shouldn't live in the URL.
Each tool owns the category it's best at, which keeps stores tiny and avoids
duplicated sources of truth.

---

## Project organization

```
src/
├── app/                      # App Router — routes are thin Server Components
│   ├── (public)/             # public landing page (route group)
│   ├── auth/sign-in/         # login route
│   ├── dashboard/            # protected shell: overview + users
│   ├── search/               # venue search
│   ├── layout.tsx            # root providers (Query → Nuqs → Toaster)
│   ├── global-error.tsx      # error boundaries
│   └── not-found.tsx
├── features/                 # feature-first modules (the real app code)
│   ├── auth/                 # api / hooks / store / components
│   ├── users/                # api / hooks / store / components (tables, modals, form)
│   ├── overview/             # dashboard widgets
│   ├── landing/              # public marketing sections
│   └── search/               # search results, map, filters
├── components/
│   ├── ui/                   # shadcn primitives (regenerate via CLI, don't hand-edit)
│   ├── ui/table/             # reusable data-table building blocks
│   └── layout/               # app shell (sidebar, header, page-container)
├── hooks/                    # cross-feature hooks (use-data-table, use-debounce, …)
├── lib/                      # axios, cookies, searchparams, utils, format
├── provider/                 # query-provider (TanStack Query config)
├── types/                    # shared TypeScript types (auth, user, search, …)
├── config/ & constants/      # static config and data
└── middleware.ts             # edge route protection
```

**Conventions**

- Code is grouped **by feature, not by type** — each feature owns its `api`,
  `hooks`, `store`, and `components`.
- Path aliases: `@/*` → `src/*`, `~/*` → `public/*`.
- Prettier-enforced style (single quotes, semicolons, no trailing commas,
  2-space, Tailwind class sorting). Run `pnpm format` rather than fighting it.
- `any` is avoided; shared types live in `src/types`.
- Git hooks (husky): **pre-commit** runs `lint-staged` (Prettier on staged files);
  **pre-push** runs `pnpm build` so a broken build can't be pushed.

---

## Assumptions

- **reqres.in is a mock API.** Writes don't persist server-side, so the app treats
  the initially-fetched, cached user list as the session's source of truth and
  patches it optimistically (see _Technical decisions_).
- **The login endpoint only returns a token** (no profile). A display name is
  derived from the email local-part for the UI; in a real app this would come from
  a `/me` endpoint.
- **reqres now requires an API key.** A free `x-api-key` is assumed to be provided
  via `NEXT_PUBLIC_REQRES_API_KEY`; without it the API returns 401.
- The reqres token is non-sensitive demo data, so a client-readable cookie is an
  acceptable persistence mechanism for this exercise.
- The template's faker-based mock API was replaced; remaining static content on
  the landing/overview pages is presentational design data, not live API data.

---

## Challenges faced

- **Edge middleware can't read `localStorage`.** Reconciling "persist auth on the
  client" with "protect routes in middleware" drove the decision to store the
  token in a cookie that both layers can read.
- **A non-persistent, paginated write API.** reqres discards writes and offers no
  search, so naive `invalidateQueries`-then-refetch would wipe out the user's
  changes. The solution was fetch-all-once + `staleTime: Infinity` + optimistic
  cache patching with rollback, plus client-side search/pagination.
- **reqres adding a mandatory API key** mid-development required threading an
  `x-api-key` header through the Axios instance and documenting the env var.
- **Consistent error UX** across many queries/mutations was solved once at the
  query-client level (global toast handlers + a normalised error shape) rather
  than per-hook.
- **Pixel-accurate, responsive layout** for the Venuze landing and search pages
  (overlapping CTA/footer, map + results split, filter drawer) across mobile,
  tablet, and desktop.

---

## Deployment

The app is deployed on **Vercel**. To deploy your own:

1. Import the repository into Vercel.
2. Set the environment variables from the table above (at minimum
   `NEXT_PUBLIC_API_BASE_URL` and `NEXT_PUBLIC_REQRES_API_KEY`). Set
   `NEXT_PUBLIC_SENTRY_DISABLED` unless you've configured Sentry.
3. Vercel auto-detects Next.js — no extra build config needed (`pnpm build`).
