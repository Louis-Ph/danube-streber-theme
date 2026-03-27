# Streber Dark Theme

Streber Dark is a VS Code color theme inspired by the Danube streber fish, built around deep camouflage greens, restrained blue-gray syntax accents, and warm amber highlights for long coding sessions.

## Features

- Accessible dark palette for extended use
- Full workbench and syntax theming
- Semantic highlighting enabled for modern language servers
- Static extension with no runtime code, simple to audit and package

## Palette

| Element | Color | Role |
| --- | --- | --- |
| Background | `#0d110d` | Deep camouflage green |
| Foreground | `#c8d8c8` | Soft silver-green text |
| Accent | `#5a8f6a` | Primary UI highlight |
| Cursor | `#b8a57a` | Warm amber focus point |
| Selection | `#3a624a` | Muted active selection |

## Local Installation

Package the extension from the repository root:

```bash
npx @vscode/vsce package --no-dependencies
code --install-extension streber-dark-theme-1.0.0.vsix
```

## Activation

1. Open the command palette with `Cmd+Shift+P` or `Ctrl+Shift+P`.
2. Run `Preferences: Color Theme`.
3. Select `Streber Dark`.

## Customization

Suggested `settings.json` overrides:

```jsonc
{
  "editor.fontSize": 14,
  "editor.fontLigatures": true,
  "editor.lineHeight": 24,
  "editor.minimap.enabled": true,
  "editor.cursorBlinking": "smooth",
  "editor.guides.highlightActiveIndentation": true
}
```

## Publication Status

- GitHub remote not configured yet
- Marketplace publisher not created or connected yet
- README screenshots are intentionally deferred until real capture assets exist

## Support

Support workflow is described in `SUPPORT.md`. GitHub issue links will be added once the public repository exists.

## License

MIT License. See `LICENSE`.
