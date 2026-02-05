# Padre Gino's — Demo Pizza App

A small React + Vite demo project (from Brian Holt's "Complete Intro to React v9") with a simple Fastify backend API used for example data and demo endpoints.

## Tech stack

- Frontend: React, Vite
- Backend: Fastify (example API in `backend/api`)
- Testing: Vitest, @testing-library/react

## Repo layout

- `src/` — React app (components, routes, tests)
- `backend/api/` — Fastify example API (`server.js`)
- `index.html`, `vite.config.js` — Vite entry and config
- `package.json` — top-level scripts and devDependencies

## Prerequisites

- Node.js (recommended >= 18)
- npm

## Setup

Install frontend dependencies:

```bash
npm install
```

Install and run the backend (optional, used by the demo):

```bash
cd backend/api
npm install
npm run dev   # dev mode with watch
# or `npm start` to run once
```

## Run (development)

Start the frontend dev server:

```bash
npm run dev
```

Vite will serve the app (default port 5173). Open the URL shown in the terminal.

If you want the example API available to the frontend, start the backend as described above.

## Build / Preview

```bash
npm run build
npm run preview
```

## Tests & Coverage

- Run tests: `npm run test`
- Run test UI: `npm run test:ui`
- Generate coverage: `npm run coverage`

Tests live under `src/__tests__/` and include both node and browser-targeted examples.

## Linting & Formatting

- Format code: `npm run format`
- Lint code: `npm run lint`

## Quick reference of scripts (from package.json)

- `dev` — start Vite dev server
- `build` — build frontend
- `preview` — preview built output
- `test` / `test:ui` / `coverage` — vitest commands

## Notes

- Source/author: Brian Holt (Frontend Masters course materials).
- The project is intended as an educational demo. Adapt scripts/config for production as needed.

If you'd like, I can add a `concurrently`-based `start` script to run backend+frontend together or add CI config. Tell me what you'd prefer.
