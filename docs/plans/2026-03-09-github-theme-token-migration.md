# Plan: Migrate GitHub Theme to Current Primer Design Tokens

_Status: COMPLETED_
_Completed: 2026-03-09_
_LastCompletedStep: 3_
_TotalSteps: 3_

## Context

GitHub migrated from `--color-*` CSS custom properties to Primer's new design token naming convention. The existing Stylus theme has a mix of old (dead) `--color-*` variables and newer Primer tokens. Many old variables no longer affect the UI since GitHub no longer references them.

## Token Migration Summary

### Dead `--color-*` variables to remove (GitHub no longer uses these):
- `--color-canvas-default` -> `--bgColor-default`
- `--color-canvas-subtle` -> `--bgColor-muted`
- `--color-canvas-overlay` -> `--overlay-bgColor`
- `--color-canvas-inset` -> `--bgColor-inset`
- `--color-accent-subtle` -> `--bgColor-accent-muted`
- `--color-accent-emphasis` -> `--bgColor-accent-emphasis`
- `--color-accent-fg` -> `--fgColor-accent`
- `--color-accent-muted` -> `--borderColor-accent-muted`
- `--color-fg-default` -> `--fgColor-default`
- `--color-fg-muted` -> `--fgColor-muted`
- `--color-fg-on-emphasis` -> `--fgColor-onEmphasis`
- `--color-border-default` -> `--borderColor-default`
- `--color-border-muted` -> `--borderColor-muted`
- `--color-neutral-emphasis` -> `--bgColor-neutral-emphasis`
- `--color-neutral-muted` -> `--bgColor-neutral-muted`
- `--color-neutral-emphasis-plus` -> `--bgColor-emphasis`
- `--color-shadow-medium` -> removed (no equivalent)
- `--color-btn-*` -> `--button-*` tokens
- `--color-avatar-*` -> `--avatar-*` tokens
- `--color-calendar-graph-*` -> `--contribution-default-*` tokens
- `--color-primer-border-active` -> `--underlineNav-borderColor-active`
- `--color-scale-*` -> removed (no direct replacement)

### `--color-*` variables still used by GitHub (keep):
- `--color-notifications-row-bg`
- `--color-workflow-card-bg`

### New tokens to add:
- `--contribution-default-bgColor-0` through `--contribution-default-bgColor-4`
- `--contribution-default-borderColor-0` through `--contribution-default-borderColor-4`
- `--avatar-bgColor`
- `--button-default-fgColor-rest`, `--button-default-fgColor-disabled`
- `--button-primary-fgColor-disabled`
- `--button-default-borderColor-disabled`
- `--header-bgColor`, `--header-fgColor-default`, `--header-fgColor-logo`, `--header-borderColor-divider`
- `--overlay-borderColor`
- `--control-bgColor-rest`, `--control-bgColor-active`, `--control-bgColor-disabled`
- `--control-fgColor-rest`, `--control-fgColor-disabled`
- `--control-checked-bgColor-rest`
- `--fgColor-disabled`
- `--bgColor-disabled`
- `--borderColor-emphasis`, `--borderColor-translucent`
- `--page-header-bgColor`

### Selector updates:
- `.js-highlight-blob` references dead `--color-calendar-graph-day-L2-bg` -> use `--contribution-default-bgColor-2`
- `.Details-content--shown, .Box-row` references dead `--color-btn-border` -> use `--borderColor-default`
- Keep `.AppHeader { --AppHeader-bg }` alongside new `--header-bgColor` for compat

## Steps

### Step 1: Rewrite the GitHub CSS theme file
- Remove all dead `--color-*` variables
- Add all missing new Primer tokens
- Organize by category (bg, fg, border, buttons, controls, components)
- Update selector-based rules to reference new variable names
- File: `github/github-theme-tomorrow-night-darkly.css`

### Step 2: Verify the theme in browser
- Load the updated theme in Chrome via Stylus
- Navigate to GitHub profile, repo, and contribution graph pages
- Visually verify colors apply correctly

### Step 3: Update documentation
- Update research doc with migration findings
- Update context doc

## Verification Plan
- Visual inspection of GitHub profile page with theme applied
- Check contribution graph colors
- Check button styles
- Check header and navigation colors

## Summary

Migrated the GitHub Stylus theme from deprecated `--color-*` CSS custom properties to GitHub's current Primer design token naming convention. Removed 48 dead variables, added 30+ new tokens (contribution graph, header, avatar, control, overlay, button state variants), and updated selectors for GitHub's `.GlobalNav` header class (replacing `.AppHeader`).

## Execution Journal

### Step 1: Rewrote CSS theme file
- Removed all 48 dead `--color-*` variables
- Organized 120+ tokens into clear categories: bg, fg, border, overlay, buttons, controls, components
- Added missing tokens: `--contribution-default-*`, `--header-*`, `--avatar-bgColor`, `--control-bgColor-*`, `--control-fgColor-*`, `--button-*-fgColor-disabled`, `--overlay-borderColor`, `--bgColor-disabled`, `--bgColor-inverse`, `--borderColor-emphasis`, `--borderColor-translucent`, `--fgColor-disabled`, `--page-header-bgColor`
- Kept 2 legacy `--color-*` variables that GitHub still defines (`--color-notifications-row-bg`, `--color-workflow-card-bg`)
- Updated `.js-highlight-blob` to reference `--contribution-default-bgColor-2` instead of dead `--color-calendar-graph-day-L2-bg`
- Updated `.Details-content--shown, .Box-row` to reference `--borderColor-default` instead of dead `--color-btn-border`

### Step 2: Browser verification
- Injected new theme CSS into live GitHub profile page
- Verified all new tokens override GitHub defaults:
  - `--header-bgColor`: `#202020` (was `#151b23f2`)
  - `--contribution-default-bgColor-0`: `#2e2e2e` (was `#151b23`)
  - `--contribution-default-bgColor-4`: `#b294bb` (was `#56d364` green)
  - `--avatar-bgColor`: `transparent` (was `#ffffff1a`)
  - `--control-bgColor-rest`: `#202020` (was `#212830`)
- Confirmed all 5 contribution graph levels render correctly with purple gradient
- Confirmed body background is `rgb(32, 32, 32)` (#202020)
- Discovered `.AppHeader` class is gone, GitHub now uses `.GlobalNav`

### Step 3: Updated selectors and documentation
- Added `.GlobalNav` alongside `.AppHeader` in selector rules
- Updated plan status to COMPLETED
