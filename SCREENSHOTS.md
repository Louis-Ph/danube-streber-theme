# Guide pour captures d'écran du thème Streber Dark

État actuel :

- Les fichiers `screenshots/*.png` ne sont pas encore générés.
- Le `README.md` ne les référence plus tant que les captures réelles ne sont pas prêtes.
- Ce document reste la procédure de capture à appliquer avant publication Marketplace.

## Préparation

### 1. Installer le thème localement

```bash
code --install-extension streber-dark-theme-1.0.0.vsix --force
```

### 2. Configurer VS Code

Ouvre tes paramètres (`Cmd+,`) et ajoute :

```jsonc
{
  "workbench.colorTheme": "Streber Dark",
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

### 3. Fenêtre optimale

- **Largeur** : 1200-1400px
- **Hauteur** : 800-900px
- **Mode** : Plein écran ou fenêtre propre
- **Barre latérale** : Visible (Explorer)
- **Panel** : Terminal ouvert (optionnel)

## Captures recommandées

### 1. Preview principale (`screenshots/preview.png`)

**Fichier** : Un fichier JavaScript/TypeScript ou Rust avec :
- Des imports/uses en haut
- Une fonction avec des paramètres
- Des commentaires
- Des strings
- Des keywords (if, let, const, fn, etc.)

**Dimensions** : 1200x630px (ratio social media)

### 2. JavaScript/TypeScript (`screenshots/javascript.png`)

**Fichier suggéré** : `new-util.ts` ou similaire
- Interface/type definitions
- Arrow functions
- Template literals
- Async/await

### 3. Python (`screenshots/python.png`)

**Fichier suggéré** : Script avec :
- Imports
- Class definition
- Methods with docstrings
- List comprehensions

### 4. Rust (`screenshots/rust.png`)

**Fichier suggéré** : Module Rust avec :
- Structs et impl
- Pattern matching
- Error handling (Result, Option)

### 5. Markdown (`screenshots/markdown.png`)

**Fichier** : Le README.md lui-même
- Headers
- Code blocks
- Lists
- Links

## Outils de capture

### macOS

```bash
# Capture de zone
Cmd+Shift+4

# Capture de fenêtre
Cmd+Shift+4, puis Espace

# Capture avec timer (pour positionner)
Cmd+Shift+5
```

### Outils recommandés

- **CleanShot X** (macOS) - Payant mais excellent
- **Shottr** (macOS) - Gratuit, très bon
- **Flameshot** (Linux) - Open source
- **ShareX** (Windows) - Open source

## Retouches

### Avec Preview (macOS)

1. Ouvre la capture dans Preview
2. Outils → Ajuster la taille → 1200x630
3. Export → PNG

### Avec GIMP (Gratuit)

1. Fichier → Ouvrir
2. Image → Échelle et taille de l'image
3. Fichier → Exporter → PNG

## Nom des fichiers

```
screenshots/
├── preview.png       # 1200x630 - Principal
├── javascript.png    # 1200x800 - JS/TS
├── python.png        # 1200x800 - Python
├── rust.png          # 1200x800 - Rust
└── markdown.png      # 1200x800 - Markdown
```

## Vérification

Avant de publier :

- [ ] Les couleurs sont fidèles au thème
- [ ] Le texte est lisible
- [ ] Pas d'éléments personnels visibles (noms de fichiers, paths)
- [ ] Format PNG (meilleure qualité)
- [ ] Taille < 1MB par image

## Astuce pro

Pour des captures cohérentes :
1. Utilise toujours la même police et taille
2. Garde la même largeur de fenêtre
3. Même niveau de zoom (100%)
4. Thème : Streber Dark uniquement
5. Pas d'autres extensions visibles
