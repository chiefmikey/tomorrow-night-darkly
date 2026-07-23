# Tomorrow Night Darkly - Firefox Theme

A dark browser theme for Firefox matching the Tomorrow Night Darkly palette used by
the Chrome, GitHub, and Mattermost themes.

## Install

1. Open `about:debugging` in Firefox.
2. Click **This Firefox** in the sidebar.
3. Click **Load Temporary Add-on...**.
4. Select [`theme/manifest.json`](./theme/manifest.json).

The theme is applied immediately and stays active until Firefox is closed -- this
is the fastest way to preview or develop it. Temporary add-ons are removed when
Firefox restarts.

For a permanent install, the theme must be signed and distributed through
[addons.mozilla.org](https://addons.mozilla.org/) (AMO); Firefox refuses to load
unsigned themes permanently.

## Color mapping

| Setting | Hex | Palette role |
| --- | --- | --- |
| Frame / toolbar field / new tab background | `#202020` | primary gray |
| Toolbar / popup / new tab background | `#181818` | darker gray |
| Toolbar text / new tab text / popup text | `#c6c6c6` | light gray text |
| Toolbar field / popup border | `#2e2e2e` | border / hover surface |
| Tab text / tab line / tab loading indicator | `#b294bb` | accent purple |
| Bookmark text / popup highlight / icons attention | `#b294bb` | accent purple |
| Button background hover | `#2e2e2e` | border / hover surface |
| Popup highlight text | `#181818` | darker gray (contrast on accent) |

Foreground on accent surfaces (popup highlight) is `#181818` for contrast.
