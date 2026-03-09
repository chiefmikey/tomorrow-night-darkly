# Research: Tomorrow Night Darkly Codebase Overview

**Date:** 2026-03-09
**Scope:** Full codebase analysis

## Overview

Tomorrow Night Darkly is a dark color theme distributed as:
1. A Chrome browser theme (Manifest V3) on the Chrome Web Store
2. A GitHub CSS theme for custom styling
3. A React-based preview/landing site deployed to AWS (S3 + CloudFront)

The codebase is small (~600 lines of source code) and primarily serves as a product showcase. The React app is a single-page landing with animated branding and a download link to the Chrome Web Store.

## Architecture

### Frontend (client/src/)

Three files totaling ~250 lines:

- **index.tsx** -- Imports CSS reset, SCSS styles, and airbnb-browser-shims polyfills. Renders `<App />` into `.wrapper` div.
- **components/App.tsx** -- Single functional component. Displays logo (lazy-loaded SVG via react-cool-img), animated title text, Chrome Web Store link with react-icons `FiChrome` icon, and a footer. No state, no hooks, no API calls.
- **styles.scss** -- Google Fonts (Lato, Montserrat, Roboto Serif), color variables, CSS keyframe animations (fade-in, fade, shake), staggered title animations, responsive flex layout centered at 900px.

### Server (app.ts)

Minimal Koa server (21 lines). Port 8080. Serves `public/` as static files. CORS configured for GET requests with 600s max age. Includes koa-bodyparser.

### Chrome Theme (chrome/theme/)

Manifest V3 theme. Defines frame, toolbar, tab, bookmark, and NTP colors. No background scripts or content scripts -- pure color theme. Promotional images in `chrome/promo/` for Chrome Web Store listing.

### GitHub Theme (github/)

Single CSS file overriding GitHub's Primer design tokens. Uses the current token naming convention (`--bgColor-*`, `--fgColor-*`, `--borderColor-*`, `--button-*`, `--control-*`, `--contribution-*`, `--header-*`). Loaded via the Stylus browser extension. Covers backgrounds, foregrounds, borders, buttons, controls, overlays, contribution graph, header, avatars, and navigation. Uses the same purple accent (#b294bb) as the Chrome theme.

**Token migration (completed 2026-03-09):** GitHub migrated from `--color-*` prefix to Primer design tokens. Old `--color-canvas-*`, `--color-btn-*`, `--color-fg-*`, `--color-border-*`, `--color-accent-*`, `--color-calendar-graph-*`, `--color-avatar-*`, `--color-scale-*` are all dead. Only `--color-notifications-row-bg` and `--color-workflow-card-bg` survive. GitHub also renamed `.AppHeader` to `.GlobalNav`.

### Build Pipeline

Webpack 5 bundles `client/src/index.tsx` to `public/dist/bundle.js`. Babel transpiles TypeScript + React JSX. SCSS compiled via sass-loader. Images handled by url-loader (100KB inline limit). Source maps enabled.

## Data Flow

1. User visits the site (CloudFront CDN -> S3)
2. `public/index.html` loads (includes Google Tag Manager)
3. `public/dist/bundle.js` executes
4. React renders `<App />` into `.wrapper` div
5. Logo SVG lazy-loads via react-cool-img
6. CSS animations play (staggered fade-in)
7. User can click Chrome Web Store link to install the theme

For local dev:
1. `npm run build:dev` watches and rebuilds bundle
2. `npm run test:client` starts Koa with nodemon for hot reload
3. Visit `localhost:8080`

## Patterns and Conventions

- ESM throughout (`"type": "module"` in package.json)
- ts-node has CommonJS override in tsconfig for Node compatibility
- mikey-pro handles all linting/formatting (ESLint flat config, Prettier, Stylelint)
- No automated tests -- this is a static theme/landing page
- Conventional commits used consistently
- Dependabot configured for GitHub Actions updates only (daily, MST timezone)
- SonarCloud for code quality analysis

## Dependencies

### Production
- react, react-dom (^19.0.0)
- react-icons (^5.5.0) -- Chrome icon only
- react-cool-img (^1.2.12) -- lazy image loading
- airbnb-browser-shims (^3.3.0) -- browser polyfills
- the-new-css-reset (^1.11.3) -- CSS reset

### Dev
- Babel ecosystem (core + 3 presets + JSX plugin)
- Webpack 5 + 5 loaders
- Koa + 3 middleware packages
- TypeScript + ts-node + type packages
- mikey-pro (linting/formatting meta-package)
- nodemon (dev hot reload)

## Gotchas

- `.vscode/` is in `.gitignore` but `settings.json` is tracked (SonarLint config). This works because the file was added before the gitignore rule, but new .vscode files will be ignored.
- Webpack config resolves `.vue` extensions despite no Vue usage -- likely inherited from a template.
- The `jsxPragma: 'h'` in Babel TypeScript preset is non-standard for React (typically `React.createElement`). Works because Babel's React preset handles JSX transformation separately.
- `dist` in `.gitignore` is a root-level rule that could affect any `dist/` directory, not just `public/dist/`.
- `airbnb-browser-shims` is a production dependency but only needed at build time -- could be moved to devDependencies.

## Open Questions

- Is the GitHub CSS theme distributed separately or just included in the repo for reference?
- Is the preview site actively maintained or mainly for the Chrome Web Store listing?
- Should Dependabot be configured for npm dependencies too (currently only covers GitHub Actions)?
