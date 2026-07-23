# Tomorrow Night Darkly - VS Code Theme

A dark theme for Visual Studio Code matching the Tomorrow Night Darkly palette used by the
Chrome, GitHub, and Mattermost themes.

## Install

### Manual (unpacked extension)

1. Copy the `vscode/` folder into your VS Code extensions directory as
   `tomorrow-night-darkly`:
   - macOS/Linux: `~/.vscode/extensions/tomorrow-night-darkly/`
   - Windows: `%USERPROFILE%\.vscode\extensions\tomorrow-night-darkly\`
2. Reload VS Code (**Developer: Reload Window**, or just restart it).

### Package as a .vsix

1. From the `vscode/` directory, run:
   ```bash
   npx @vscode/vsce package
   ```
2. Install the generated `.vsix` file via **Extensions -> ... -> Install from VSIX...**.

## Select the theme

1. Open the theme picker with `Cmd+K Cmd+T` (macOS) or `Ctrl+K Ctrl+T` (Windows/Linux).
2. Choose **Tomorrow Night Darkly** from the list.

## Color mapping

| Role | Hex | Palette role |
| --- | --- | --- |
| Editor / activity bar / status bar background | `#181818` | darker gray |
| Sidebar / panel background | `#202020` | primary gray |
| Editor foreground / text | `#c6c6c6` | light gray text |
| Cursor / accents / active tab border / badges | `#b294bb` | accent pink (canonical) |
| Borders / hover / selection | `#2e2e2e` | border gray |
| Line numbers / comments / muted UI | `#7d7d7d` | muted gray |
| Strings / added / green ANSI | `#18845e` | green |
| Numbers / warnings / modified / yellow ANSI | `#d29922` | yellow |
| Errors / deleted / red ANSI | `#f85149` | red |
| Types / links / cyan ANSI | `#39c5cf` | cyan |
| Support constants / conflicts / bright magenta ANSI | `#ff7ec6` | bright pink |

Pink (`#b294bb`) is used for keywords, storage modifiers, tags, and the most prominent
accent surfaces (cursor, active tab border, badges, buttons) so it stays the dominant
identity color, matching the rest of the Tomorrow Night Darkly family.
