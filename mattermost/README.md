# Tomorrow Night Darkly - Mattermost Theme

A dark theme for Mattermost matching the Tomorrow Night Darkly palette used by the
other Tomorrow Night Darkly profiles (Chrome, Firefox, GitHub, VS Code, Slack, Discord, terminals).

## Install

1. In Mattermost, open **Settings -> Display -> Theme**.
2. Select **Custom Theme**, then expand **Import theme colors**.
3. Paste the contents of [`tomorrow-night-darkly.json`](./tomorrow-night-darkly.json).
4. Click **Save**.

If your Mattermost build does not expose a JSON import field, open the individual
color pickers under **Custom Theme** and set each value from the table below.

## Color mapping

| Setting                                 | Hex       | Palette role                                                |
| --------------------------------------- | --------- | ----------------------------------------------------------- |
| Center channel background               | `#202020` | primary gray                                                |
| Center channel text                     | `#c6c6c6` | light gray text                                             |
| Sidebar / header / team bar background  | `#181818` | darker gray                                                 |
| Sidebar hover background                | `#2e2e2e` | gray shade                                                  |
| Sidebar unread / active text            | `#ffffff` | white (text on dark only)                                   |
| Link / button / mention / active accent | `#b294bb` | accent pink                                                 |
| New message separator                   | `#b294bb` | accent pink                                                 |
| Mention highlight background            | `#b294bb` | accent pink                                                 |
| Mention highlight text                  | `#181818` | darker gray (on pink)                                       |
| Online indicator                        | `#b294bb` | accent pink                                                 |
| Away indicator                          | `#7d7d7d` | mid gray                                                    |
| DND indicator                           | `#c6c6c6` | light gray                                                  |
| Error text                              | `#f85149` | danger red (matches VS Code / Discord / GitHub / terminals) |
| Code block theme                        | `monokai` | dark syntax                                                 |

Foreground on accent surfaces (buttons, mentions, mention highlights) is `#181818` for contrast. White is never placed on pink (about 2.7:1 contrast).
