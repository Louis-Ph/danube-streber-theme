# Screenshot Guide

This file documents a repeatable screenshot workflow for the Streber theme collection.

## Current Assets

- `screenshots/danube-streber-theme.png`
- `screenshots/streber-smoked-gold.png`
- `screenshots/streber-light.png`

## Preparation

### 1. Build and install the local extension

```bash
npm run package:vsix
code --install-extension "$(ls -t streber-dark-theme-*.vsix | head -n 1)" --force
```

### 2. Configure VS Code

Open your settings and apply a clean capture profile:

```jsonc
{
  "editor.fontSize": 14,
  "editor.lineHeight": 24,
  "editor.fontFamily": "'Fira Code', 'Cascadia Code', Consolas, monospace",
  "editor.fontLigatures": true,
  "editor.minimap.enabled": false,
  "workbench.activityBar.visible": true,
  "workbench.statusBar.visible": true,
  "editor.cursorBlinking": "smooth",
  "editor.smoothScrolling": true
}
```

### 3. Use a clean window

- Width: `1200` to `1600` px
- Height: `800` to `1000` px
- Explorer visible
- Clean workspace with no personal file names
- Optional integrated terminal only when it adds value to the shot

## Recommended Shots

### Streber Dark

- JavaScript or TypeScript file
- Visible imports, comments, strings, functions, and control flow

### Streber Smoked Gold

- Rust, shell, or configuration file with dense syntax variation
- Warm tones should remain visible without overexposure

### Streber Light

- Markdown, Python, or TypeScript file
- Show inline code, lists, and Markdown preview surfaces
- Confirm that the light palette stays readable without washed-out syntax

## Capture Tools

### macOS

```bash
# Region capture
Cmd+Shift+4

# Window capture
Cmd+Shift+4, then Space

# Timed capture
Cmd+Shift+5
```

### Recommended Apps

- CleanShot X
- Shottr
- Flameshot
- ShareX

## Export Checks

- PNG format
- Less than 1 MB when practical
- No private paths, user names, or unrelated extensions
- Theme colors match the actual extension build
- Text remains readable when rendered on the Marketplace page
