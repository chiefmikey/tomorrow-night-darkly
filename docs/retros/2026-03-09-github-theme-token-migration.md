# Retro: GitHub Theme Token Migration

**Date:** 2026-03-09
**Task:** Migrate GitHub Stylus theme from deprecated --color-* variables to current Primer design tokens

## What Worked

- **Direct browser inspection** was the most effective research method. Scanning GitHub's loaded stylesheets revealed exactly which properties are native vs injected by Stylus.
- **Primer primitives source** on GitHub (primer/primitives repo) provided the authoritative token definitions. The token file structure maps directly to CSS variable names (e.g., `button.default.bgColor.rest` -> `--button-default-bgColor-rest`).
- **Injecting test CSS via JavaScript** enabled immediate verification without needing to update Stylus.
- **Comparing computed values before/after** clearly showed which tokens were missing (showing GitHub defaults instead of theme values).

## What Didn't Work

- **WebSearch/WebFetch for migration docs** -- Primer's migration documentation was sparse and didn't provide a comprehensive old-to-new mapping for CSS custom properties specifically. The actual source of truth was the primer/primitives token files.
- **Browser extension disconnected** mid-session. Had to fall back to gh CLI for fetching Primer source files, which turned out to be more reliable anyway.

## What Was Surprising

- GitHub has **completely dropped** most `--color-*` variables. They're not even defined for backward compatibility. This means any Stylus theme still using them has been silently broken for those properties.
- GitHub renamed `.AppHeader` to `.GlobalNav` with dynamic CSS module class names.
- The existing theme already had ~60% of the new-style tokens alongside the old ones, suggesting a partial migration was done previously but not completed.
- Only **2** old-style `--color-*` variables survive: `--color-notifications-row-bg` and `--color-workflow-card-bg`.

## Learnings for CLAUDE.md / Memory

- When researching design token migrations, go straight to the source (primer/primitives repo) rather than searching for documentation.
- GitHub's CSS class names can change between UI updates. Use CSS custom properties on `:root` wherever possible instead of targeting specific class names.
- Keep both old and new class selectors for gradual migration (`.AppHeader, .GlobalNav`).

## Action Items

- None -- migration is complete.
