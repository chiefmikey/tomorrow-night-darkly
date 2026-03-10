# Retro: GitHub Theme Token Migration

**Date:** 2026-03-09
**Task:** Migrate GitHub Stylus theme from deprecated --color-* variables to current Primer design tokens

## What Worked

- **Direct browser inspection** was the most effective research method. Scanning GitHub's loaded stylesheets revealed exactly which properties are native vs injected by Stylus.
- **Primer primitives source** on GitHub (primer/primitives repo) provided the authoritative token definitions. The token file structure maps directly to CSS variable names (e.g., `button.default.bgColor.rest` -> `--button-default-bgColor-rest`).
- **Injecting test CSS via JavaScript** enabled immediate verification without needing to update Stylus.
- **Comparing computed values before/after** clearly showed which tokens were missing (showing GitHub defaults instead of theme values).
- **Fetching full Primer primitives via gh CLI** (v2) enabled comprehensive token discovery. Pulling the raw dark theme source gave the complete list of ~894 tokens GitHub defines, making it possible to systematically categorize and map them all.
- **Comprehensive categorization by token family** (v2) ensured consistent color mapping across related tokens (e.g., all `danger` variants use the same red, all `accent` variants use the same blue).

## What Didn't Work

- **WebSearch/WebFetch for migration docs** -- Primer's migration documentation was sparse and didn't provide a comprehensive old-to-new mapping for CSS custom properties specifically. The actual source of truth was the primer/primitives token files.
- **Browser extension disconnected** mid-session. Had to fall back to gh CLI for fetching Primer source files, which turned out to be more reliable anyway.
- **Assuming the first pass (v1) was sufficient** -- the initial migration covered ~108 tokens and appeared correct in spot checks, but GitHub defines ~894 tokens in dark mode. Without verifying against the full token list, ~780+ tokens were left at GitHub defaults, causing visible color inconsistencies in less-visited UI areas (e.g., diff views, checks, action lists, tooltips).

## What Was Surprising

- GitHub has **completely dropped** most `--color-*` variables. They're not even defined for backward compatibility. This means any Stylus theme still using them has been silently broken for those properties.
- GitHub renamed `.AppHeader` to `.GlobalNav` with dynamic CSS module class names.
- The existing theme already had ~60% of the new-style tokens alongside the old ones, suggesting a partial migration was done previously but not completed.
- Only **2** old-style `--color-*` variables survive: `--color-notifications-row-bg` and `--color-workflow-card-bg`.
- **GitHub defines tokens on `[data-color-mode="dark"][data-dark-theme="dark"]`**, not just `:root` (v2 discovery). Targeting `:root` alone can miss tokens that GitHub scopes to the dark theme data attributes. The Stylus theme must use the same selector to properly override.
- **The gap between v1 (~108 tokens) and the full scope (~894 tokens) was massive** -- over 4x more tokens existed than what the initial research and migration covered.

## Learnings for CLAUDE.md / Memory

- When researching design token migrations, go straight to the source (primer/primitives repo) rather than searching for documentation.
- GitHub's CSS class names can change between UI updates. Use CSS custom properties on `:root` wherever possible instead of targeting specific class names.
- Keep both old and new class selectors for gradual migration (`.AppHeader, .GlobalNav`).
- **Always verify against the full token scope**, not just a sample. An initial migration that looks correct in spot checks can still miss the majority of tokens. Fetch the authoritative source and diff against it.
- **Match GitHub's exact selector specificity.** GitHub defines dark theme tokens on `[data-color-mode="dark"][data-dark-theme="dark"]`, so the override theme must use the same (or higher specificity) selector to take effect.
- **Iterative passes are expected for large migrations.** The v1-to-v2 pattern (initial pass, browser verification, discover gaps, comprehensive pass) is a healthy workflow, not a failure. Budget for it.

## v2 Iteration Summary

The initial v1 migration was a solid first pass but only covered ~108 of ~894 tokens GitHub defines for dark mode. Browser inspection after v1 revealed significant default color bleed-through in less-visited UI areas. The v2 iteration:

1. Fetched the full Primer primitives dark theme definitions via `gh` CLI from the `primer/primitives` repo
2. Discovered GitHub scopes tokens to `[data-color-mode="dark"][data-dark-theme="dark"]`, not just `:root`
3. Systematically categorized all ~894 tokens by family and mapped ~470 of them to the Tomorrow Night Darkly palette
4. The remaining ~424 tokens were either duplicates across selector scopes, deprecated, or handled by more specific component selectors

Key takeaway: for comprehensive theme overrides, always pull the full authoritative token list and verify coverage rather than assuming a working spot check means full coverage.

## Action Items

- None -- migration is complete.
