# Tomorrow Night Darkly - Slack Theme

A dark sidebar theme for Slack matching the Tomorrow Night Darkly palette used by the
Chrome, GitHub, and Mattermost themes.

## Install

1. In Slack desktop, open **Preferences -> Themes**.
2. Scroll to the bottom and click **Create a custom theme** (or paste directly into
   the custom theme color field if one is already shown).
3. Paste the contents of [`tomorrow-night-darkly.txt`](./tomorrow-night-darkly.txt) --
   a single comma-separated string of 8 hex colors.
4. Click **Save Theme** (or press Enter).

## Color mapping

Slack custom themes are a fixed, ordered list of 8 hex values. Order matters --
do not rearrange the string.

| # | Slot | Hex | Palette role |
| --- | --- | --- | --- |
| 1 | Column BG | `#181818` | darker gray, sidebar background |
| 2 | Menu BG Hover / Column Border | `#2e2e2e` | mid gray, hover/border surface |
| 3 | Active Item | `#b294bb` | accent purple, selected channel highlight |
| 4 | Active Item Text | `#181818` | darker gray, text on accent surface for contrast |
| 5 | Hover Item | `#2e2e2e` | mid gray, hover surface |
| 6 | Text Color | `#c6c6c6` | light gray text |
| 7 | Active Presence | `#18845e` | green, online indicator |
| 8 | Mention Badge | `#b294bb` | accent purple, unread mention badge |
