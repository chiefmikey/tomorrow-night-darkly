# Tomorrow Night Darkly - Mattermost Theme

A dark theme for Mattermost matching the Tomorrow Night Darkly palette used by the
Chrome and GitHub themes.

## Install

1. In Mattermost, open **Settings -> Display -> Theme**.
2. Select **Custom Theme**, then expand **Import theme colors**.
3. Paste the contents of [`tomorrow-night-darkly.json`](./tomorrow-night-darkly.json).
4. Click **Save**.

If your Mattermost build does not expose a JSON import field, open the individual
color pickers under **Custom Theme** and set each value from the table below.

## Color mapping

| Setting | Hex | Palette role |
| --- | --- | --- |
| Center channel background | `#202020` | primary gray |
| Center channel text | `#c6c6c6` | light gray text |
| Sidebar background | `#181818` | darker gray |
| Sidebar header background | `#141414` | darkest |
| Team sidebar background | `#0f0f0f` | darkest |
| Link / button / mention / active accent | `#b392bd` | accent purple |
| Mention highlight background | `#352160` | deep purple |
| Mention highlight link | `#ab7df8` | bright purple |
| Online indicator | `#18845e` | green |
| Away indicator | `#d29922` | amber |
| DND / error | `#f85149` | red |
| Code block theme | `monokai` | dark syntax |

Foreground on accent surfaces (buttons, mentions) is `#181818` for contrast.
