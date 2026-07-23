# Tomorrow Night Darkly - Discord Theme

A dark theme for Discord matching the Tomorrow Night Darkly palette used by the
Chrome, GitHub, and Mattermost themes. This is a best-effort theme -- Discord's
client internals change often, so it overrides Discord's CSS custom properties
(variables) rather than fragile, auto-hashed class names. It is not pixel-perfect
across every surface, but the core chrome (backgrounds, text, links, accents,
status colors) is covered.

## Install

### BetterDiscord

1. Open **User Settings -> Themes**.
2. Click **Open Themes Folder**.
3. Copy [`tomorrow-night-darkly.theme.css`](./tomorrow-night-darkly.theme.css) into that folder.
4. Back in **User Settings -> Themes**, enable **Tomorrow Night Darkly**.

### Vencord

Vencord's theming works the same way: **User Settings -> Vencord -> Themes ->
Open Themes Folder**, drop the same `.theme.css` file in, then enable it from
the theme list.

## Color mapping

| Variable / target | Hex | Palette role |
| --- | --- | --- |
| `--background-primary`, `--background-secondary-alt`, `--background-floating` | `#181818` | darker gray |
| `--background-secondary`, `--background-tertiary`, `--channeltextarea-background` | `#202020` | primary gray |
| `--text-normal`, `--header-primary`, `--interactive-normal` | `#c6c6c6` | light gray text |
| `--text-muted`, `--header-secondary` | `#7d7d7d` | muted gray |
| `--background-accent`, `--interactive-active`, `--text-link`, `--brand-500` | `#b294bb` | accent purple |
| `--background-modifier-hover`, `--border-color` | `#2e2e2e` | borders / hover |
| `--green-360` | `#18845e` | online status |
| `--status-danger` | `#f85149` | DND / error |
