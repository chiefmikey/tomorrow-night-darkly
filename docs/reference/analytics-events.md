# Analytics events

Wolfe telemetry standard v1: cookie-free, loaded from `https://e.wolfe.works/static/w.js` (tag in `public/index.html`, `data-site="tomorrow-night-darkly"`). Pageviews, page leave, scroll depth, clicks, web vitals and JS errors come from the loader automatically. Custom events go through `window.wolfeTelemetry.capture` via `client/src/telemetry.ts`. Props are enumerated values only, never free text.

| Event                  | Trigger                                                            | Props                                           |
| ---------------------- | ------------------------------------------------------------------ | ----------------------------------------------- |
| `landing_viewed`       | App mounts                                                         | `viewport`: `mobile` (<768px wide) or `desktop` |
| `install_link_hovered` | Pointer first enters an install link (once per link per page load) | `target`: `chrome` or `github`                  |
| `install_link_clicked` | Install link clicked                                               | `target`: `chrome` or `github`                  |
| `author_link_clicked`  | "Made by Chief Mikey" link clicked                                 | none                                            |
| `logo_load_failed`     | Logo image fails to load                                           | none                                            |

The VS Code, Firefox, Slack, Discord, Mattermost and terminal theme artefacts and the Chrome Web Store listing are not web pages and carry no telemetry.
