# Context: Tomorrow Night Darkly

**Date:** 2026-03-09
**Repository:** chiefmikey/tomorrow-night-darkly

## Overview

Dark color theme for Chrome and GitHub with a React preview site. Small, stable codebase (~600 lines source). Primarily receives dependency update commits via Dependabot.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Language | TypeScript (ESM) |
| Frontend | React 19, react-icons, react-cool-img |
| Server | Koa 2 (port 8080) + koa-static, @koa/cors |
| Bundler | Webpack 5 + Babel |
| Styling | SCSS + the-new-css-reset |
| Linting | mikey-pro (ESLint + Prettier + Stylelint) |
| Deployment | AWS S3 + CloudFront |
| CI/CD | GitHub Actions |
| Quality | SonarCloud |

## Project Structure

```
client/src/index.tsx          # React entry
client/src/components/App.tsx # Main component (51 lines)
client/src/styles.scss        # Full stylesheet (191 lines)
chrome/theme/manifest.json    # Chrome theme (Manifest V3)
github/*.css                  # GitHub custom CSS theme
public/index.html             # HTML shell (GTM included)
public/dist/bundle.js         # Built output (gitignored)
app.ts                        # Koa server
webpack.config.ts             # Build config
eslint.config.js              # Delegates to mikey-pro
```

## Development Workflow

```bash
# Install
npm install

# Dev build (watch mode)
npm run build:dev

# Production build
npm run build:prod

# Start server (port 8080)
npm run start:client

# Dev server with hot reload
npm run test:client
```

No automated tests. Linting via mikey-pro.

## Deployment

1. Push to `main` branch
2. GitHub Actions runs `deploy.yml`
3. Installs deps, runs production build
4. Syncs `public/` to S3 bucket
5. Invalidates CloudFront cache

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Gray | #202020 | Primary background, Chrome frame |
| Dark Gray | #181818 | Toolbar, NTP background |
| Purple | #b294bb | Accent (tabs, links, bookmarks) |
| Pink | #b392bd | SCSS accent variant |
| Light Gray | #c6c6c6 | Text color |

## Dependencies (Key)

**Production:** react 19, react-dom 19, react-icons 5, react-cool-img 1.2, airbnb-browser-shims 3, the-new-css-reset 1.11

**Dev:** webpack 5, babel 7, typescript 5, koa 2, sass 1.85, mikey-pro 10

## CI/CD Pipelines

- **deploy.yml** -- S3 deploy + CloudFront invalidation on push to main
- **sonar.yml** -- SonarCloud analysis on push/PR (skips Dependabot)
- **auto-merge.yml** -- Auto-merges Dependabot PRs with squash

## Recent Trajectory

Last 30 commits are almost entirely dependency bumps via Dependabot. Most recent non-dependency commit: `chore: add CLAUDE.md and mikey-pro config`. The project is in maintenance mode -- no active feature development.

## Gotchas

- Chrome manifest version and package.json version should stay in sync
- `public/dist/` is gitignored (webpack output)
- ts-node needs CommonJS override in tsconfig (see `"ts-node"` section)
- `.vscode/settings.json` is tracked despite `.vscode` being in .gitignore (pre-existing file)
- Webpack resolves `.vue` extensions despite no Vue usage
