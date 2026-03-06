# Project CLAUDE.md - Tomorrow Night Darkly

## Project Overview

A dark color theme ("A Simply Dark Theme") for Chrome, GitHub, and as a React-based preview site.

## Tech Stack

- **Language:** TypeScript (ESM)
- **Frontend:** React 19, react-icons, react-cool-img
- **Backend:** Koa with koa-static, @koa/cors
- **Bundler:** Webpack 5 with Babel (TS + React presets)
- **Styling:** Sass (SCSS), the-new-css-reset
- **Linting:** mikey-pro (ESLint + Prettier + Stylelint)

## Architecture

```
chrome/
  theme/
    manifest.json       # Chrome theme manifest (Manifest V3)
  promo/                # Chrome Web Store promotional assets
client/
  src/                  # React frontend source
github/
  github-theme-tomorrow-night-darkly.css  # GitHub custom CSS theme
public/                 # Static assets
icon/                   # Theme icons
app.ts                  # Koa server entry point
webpack.config.ts       # Webpack configuration
tsconfig.json           # TypeScript config
eslint.config.js        # ESLint flat config
```

## Commands

```bash
npm run build:dev       # Webpack dev build (watch mode)
npm run build:prod      # Webpack production build
npm run start:client    # Start Koa server (ts-node app.ts)
npm run test:client     # Start server with nodemon (hot reload)
```

## Conventions

- ESM (`"type": "module"`)
- Chrome theme uses Manifest V3
- Prettier via `mikey-pro/prettier`
- Stylelint via `mikey-pro/stylelint`
- Conventional commits

## Testing

No automated tests configured.
