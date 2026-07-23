# Tomorrow Night Darkly - Terminal Color Schemes

Terminal color schemes matching the Tomorrow Night Darkly palette used by the
Chrome, GitHub, and Mattermost themes.

## iTerm2

1. Open **iTerm2 -> Settings -> Profiles -> Colors**.
2. Under **Color Presets...**, choose **Import...**.
3. Select [`tomorrow-night-darkly.itermcolors`](./tomorrow-night-darkly.itermcolors).
4. Open **Color Presets...** again and choose **Tomorrow Night Darkly** to apply it.

## Windows Terminal

1. Open Windows Terminal's `settings.json` (**Settings -> Open JSON file**).
2. Add the contents of [`windows-terminal.json`](./windows-terminal.json) as an
   object inside the top-level `"schemes"` array.
3. In the profile you want themed, set `"colorScheme": "Tomorrow Night Darkly"`.
4. Save and reload Windows Terminal.

## Other terminals

Most terminal emulators (Alacritty, Kitty, WezTerm, etc.) accept a 16-color ANSI
palette plus a background/foreground/cursor/selection set. Use the table below to
transcribe the scheme into any config format.

| Role | Hex |
| --- | --- |
| Background | `#181818` |
| Foreground | `#c6c6c6` |
| Cursor | `#b294bb` |
| Cursor text | `#181818` |
| Selection background | `#2e2e2e` |
| Selected text | `#c6c6c6` |

| ANSI # | Name | Hex |
| --- | --- | --- |
| 0 | Black | `#181818` |
| 1 | Red | `#f85149` |
| 2 | Green | `#18845e` |
| 3 | Yellow | `#d29922` |
| 4 | Blue | `#1f6feb` |
| 5 | Magenta | `#b294bb` |
| 6 | Cyan | `#39c5cf` |
| 7 | White | `#c6c6c6` |
| 8 | Bright black | `#7d7d7d` |
| 9 | Bright red | `#ff7b72` |
| 10 | Bright green | `#56d364` |
| 11 | Bright yellow | `#e3b341` |
| 12 | Bright blue | `#4493f8` |
| 13 | Bright magenta | `#ff7ec6` |
| 14 | Bright cyan | `#56d4dd` |
| 15 | Bright white | `#ffffff` |
