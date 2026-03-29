<h1 align="center">Danube Streber Theme Ecosystem</h1>

<p align="center">
  <em>
    A coordinated VS Code theme ecosystem designed for long sessions,
    semantic clarity, and reduced visual fatigue.
  </em>
</p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=streber-theme.streber-dark-theme"><img src="https://img.shields.io/visual-studio-marketplace/v/streber-theme.streber-dark-theme?style=flat-square&color=5a8f6a" alt="Version"></a>
  <a href="https://marketplace.visualstudio.com/items?itemName=streber-theme.streber-dark-theme"><img src="https://img.shields.io/visual-studio-marketplace/i/streber-theme.streber-dark-theme?style=flat-square&color=7a9f7a" alt="Installs"></a>
  <a href="https://marketplace.visualstudio.com/items?itemName=streber-theme.streber-dark-theme"><img src="https://img.shields.io/visual-studio-marketplace/r/streber-theme.streber-dark-theme?style=flat-square&color=b8a57a" alt="Ratings"></a>
</p>

## Overview

Danube Streber Theme is a collection of four coordinated Visual Studio Code themes inspired by the natural tones of the Danube streber fish.

The project is built around one principle:
**optimize real-world developer readability, not screenshot aesthetics.**

That means:

- restrained color accents
- stable workbench contrast
- clear semantic separation
- and UI surfaces that remain usable during long, uninterrupted coding sessions

The ecosystem currently includes:

- `Streber Dark`
- `Streber Smoked Gold`
- `Streber Light`
- `Streber Blue Danube Goddess`

Each variant keeps the same semantic structure while adapting contrast and luminance to different working conditions.

## Included Themes

### Streber Dark

Deep camouflage greens with blue-gray semantics and amber emphasis.
Designed for dense editor work and extended focus.

[![Streber Dark preview](./screenshots/danube-streber-theme.png)](./screenshots/danube-streber-theme.png)

### Streber Smoked Gold

Smoked olive-brown surfaces with brass and honey-gold accents.
Tuned for evening work and reduced blue-light exposure.

[![Streber Smoked Gold preview](./screenshots/streber-smoked-gold.png)](./screenshots/streber-smoked-gold.png)

### Streber Light

Pale mineral surfaces with sage structure and controlled daylight contrast.
Optimized for bright environments without glare.

[![Streber Light preview](./screenshots/streber-light.png)](./screenshots/streber-light.png)

### Streber Blue Danube Goddess

Midnight river blues, pearl-blue luminance, and harp-gold accents inspired by a Danube twilight fantasy palette.
Designed as a darker, more luminous blue variant for night work without neon harshness.

[![Streber Blue Danube Goddess preview](./screenshots/streber-blue-danube-goddess.png)](./screenshots/streber-blue-danube-goddess.png)

## Accessibility and Language Coverage

The themes are tuned first for high-frequency programming tasks, then extended across the broader stack.

Current visual QA and token tuning cover:

- `Java`
- `C++`
- `Go`
- `PHP`
- `TypeScript`
- `JavaScript`
- `Python`
- `C#`
- `Rust`
- `OCaml`
- `Bash`
- `HTML`
- `XML`
- `CSS`
- `SCSS`
- `Markdown`
- `JSON`
- `YAML`

Special attention is given to:

- semantic token separation across types, properties, methods, parameters, comments, strings, and numbers
- punctuation balance and contrast in dense files
- completion and quick-pick surfaces such as the suggestion widget, quick input, menus, and list selections
- Markdown preview and inline code rendering, especially in `Streber Light`

## Visual QA Assets

The repository includes a dedicated language review corpus in [`resources/language-samples/`](./resources/language-samples/README.md).

It is intended for:

- visual inspection before release
- regression checks after palette or token changes
- consistent cross-theme validation

### Suggested Review Workflow

1. Open `resources/language-samples/` in VS Code.
2. Switch between `Streber Dark`, `Streber Smoked Gold`, and `Streber Light`.
3. Switch to `Streber Blue Danube Goddess` and compare the same files again.
4. Inspect syntax, semantic tokens, punctuation, lists, and suggestion widgets.
5. Review Markdown preview and workbench states before packaging.

## Installation

### From Quick Open

```bash
ext install streber-theme.streber-dark-theme
```

### From the Extensions Panel

1. Search for `Streber Dark Theme`
2. Install the extension published by `streber-theme`
3. Open `Preferences: Color Theme`
4. Select the variant you want to use

## Local Validation

From the repository root:

```bash
npm run validate:marketplace
code --install-extension "$(ls -t streber-dark-theme-*.vsix | head -n 1)" --force
```

## Additional Documentation

- [Screenshot workflow](./SCREENSHOTS.md)
- [Publishing workflow](./PUBLISHING.md)
- [Support](./SUPPORT.md)
