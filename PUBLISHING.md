# Publishing

This repository is ready for VS Code Marketplace publication, but the final publish step still requires your Microsoft and Azure DevOps credentials.

## Current Extension Identity

- Extension name: `streber-dark-theme`
- Display name: `Streber Dark Theme`
- Publisher configured in `package.json`: `streber-theme`

Important:

- If you want to publish under another publisher ID, change the `publisher` field in `package.json` before the first Marketplace release.
- If you keep the current manifest, create the Marketplace publisher with the ID `streber-theme`.

## Preflight

Run from the repository root:

```bash
npm run validate:marketplace
code --install-extension streber-dark-theme-1.0.0.vsix --force
```

Then in VS Code:

1. Open `Preferences: Color Theme`
2. Select `Streber Dark`
3. Confirm the icon, theme colors, editor contrast and workbench contrast

## One-Time Marketplace Setup

According to the official VS Code publishing guide:

1. Create or select an Azure DevOps organization
2. Create a Personal Access Token with Marketplace `Manage` scope
3. Create a Visual Studio Marketplace publisher
4. Log in locally with `vsce login <publisher-id>`

Example:

```bash
npx --yes @vscode/vsce login streber-theme
```

## First Publish

If version `1.0.0` has never been published, use:

```bash
npx --yes @vscode/vsce publish 1.0.0
```

If you want `vsce` to bump the patch version automatically for the next release:

```bash
npx --yes @vscode/vsce publish patch
```

## After Publish

1. Open the Marketplace listing
2. Verify icon, README rendering and resource links
3. Add screenshots if you want a stronger listing page
4. Tag the release on GitHub if you also want a public `.vsix` artifact there

## References

- VS Code publishing guide: https://code.visualstudio.com/api/working-with-extensions/publishing-extension
- VS Code extension manifest reference: https://code.visualstudio.com/api/references/extension-manifest
