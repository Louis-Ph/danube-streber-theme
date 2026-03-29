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

Before capturing, use the repository QA corpus in `resources/language-samples/` so screenshots reflect the exact language mix used to validate the themes.

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

- Prefer `01-typescript.ts`, `02-javascript.js`, `04-java.java`, or `05-cpp.cpp`
- Keep imports, comments, types, strings, methods, and control flow visible
- If possible, open completion once so the suggestion widget is shown in at least one capture

### Streber Smoked Gold

- Prefer `09-rust.rs`, `11-bash.sh`, `17-json.json`, or `18-yaml.yaml`
- Keep warm tones visible without flattening comments or strings
- Include one shot with denser punctuation or config syntax

### Streber Light

- Prefer `16-markdown.md`, `03-python.py`, `01-typescript.ts`, or `12-html.html`
- Show inline code, lists, preview surfaces, and at least one quick-pick or suggestion surface
- Confirm that the light palette stays readable without washed-out syntax or dark Markdown capsules

## Review Targets

For every final screenshot, check:

- editor text contrast
- semantic separation between types, properties, methods, strings, comments, and numbers
- active tab and sidebar readability
- suggestion widget readability
- absence of personal paths, secrets, or unrelated extensions

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
