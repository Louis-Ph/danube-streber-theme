<h1 align="center">Danube Streber Theme Ecosystem</h1>

<p align="center">
  <em>Three coordinated VS Code themes tuned for long sessions, semantic clarity, and lower visual fatigue.</em>
</p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=streber-theme.streber-dark-theme"><img src="https://img.shields.io/visual-studio-marketplace/v/streber-theme.streber-dark-theme?style=flat-square&color=5a8f6a" alt="Version"></a>
  <a href="https://marketplace.visualstudio.com/items?itemName=streber-theme.streber-dark-theme"><img src="https://img.shields.io/visual-studio-marketplace/i/streber-theme.streber-dark-theme?style=flat-square&color=7a9f7a" alt="Installs"></a>
  <a href="https://marketplace.visualstudio.com/items?itemName=streber-theme.streber-dark-theme"><img src="https://img.shields.io/visual-studio-marketplace/r/streber-theme.streber-dark-theme?style=flat-square&color=b8a57a" alt="Ratings"></a>
</p>

Danube Streber Theme is a VS Code theme collection inspired by the Danube streber fish. It currently ships three coordinated environments:

- `Streber Dark`
- `Streber Smoked Gold`
- `Streber Light`

The collection is built around one goal: make frequent developer tasks easier to parse under real working conditions, not just in a polished screenshot. That means readable code, restrained accents, stable workbench contrast, and a suggestion widget that stays usable during long sessions.

## Included Themes

### Streber Dark

Deep camouflage greens, blue-gray semantics, and amber emphasis for dense editor work.

[![Streber Dark preview](./screenshots/danube-streber-theme.png)](./screenshots/danube-streber-theme.png)

### Streber Smoked Gold

Smoked olive-brown surfaces with brass and honey-gold accents for lower-blue-light evening work.

[![Streber Smoked Gold preview](./screenshots/streber-smoked-gold.png)](./screenshots/streber-smoked-gold.png)

### Streber Light

Pale mineral surfaces, sage structure, and controlled daylight contrast for bright environments.

[![Streber Light preview](./screenshots/streber-light.png)](./screenshots/streber-light.png)

## Accessibility And Language Coverage

The themes are tuned for high-frequency programming tasks first, then broadened across the rest of the stack. Current visual QA and token tuning cover:

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

The current pass also tightens readability for:

- semantic token separation across types, properties, methods, parameters, comments, strings, and numbers
- completion and quick-pick surfaces such as the suggestion widget, quick input, menus, and list selections
- Markdown preview and inline code rendering in the light theme

## Visual QA Assets

The repository includes a dedicated language review corpus in [`resources/language-samples/`](./resources/language-samples/README.md). It is intended for visual inspection before release and for regression checks after palette changes.

Suggested workflow:

1. Open `resources/language-samples/` in VS Code.
2. Switch between `Streber Dark`, `Streber Smoked Gold`, and `Streber Light`.
3. Inspect syntax, semantic tokens, punctuation, lists, and the suggestion widget.
4. Review Markdown preview and workbench states before packaging.

## Installation

From VS Code Quick Open (`Ctrl+P` / `Cmd+P`):

```bash
ext install streber-theme.streber-dark-theme
```

From the Extensions panel:

1. Search for `Streber Dark Theme`
2. Install the extension published by `streber-theme`
3. Open `Preferences: Color Theme`
4. Pick the variant you want to use

## Local Validation

From the repository root:

```bash
npm run validate:marketplace
code --install-extension "$(ls -t streber-dark-theme-*.vsix | head -n 1)" --force
```

Additional project docs:

- [Screenshot workflow](./SCREENSHOTS.md)
- [Publishing workflow](./PUBLISHING.md)
- [Support](./SUPPORT.md)
