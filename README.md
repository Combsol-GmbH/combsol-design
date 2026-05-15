# @combsol/design

**Combsol OS Design Tokens** — Single Source of Truth für alle Combsol-Apps.

Dieses Paket stellt `tokens.css` (CSS Custom Properties) und ein Tailwind-Preset bereit, das alle Tokens als Tailwind-Utilities verfügbar macht.

---

## Einbinden

### Als GitHub-URL-Dependency (empfohlen)

In `package.json` der App:

```json
{
  "dependencies": {
    "@combsol/design": "github:Combsol-GmbH/combsol-design"
  }
}
```

Dann installieren:

```bash
npm install
# oder
pnpm install
```

### Tailwind-Preset aktivieren

In `tailwind.config.ts`:

```ts
import combsolPreset from '@combsol/design/tailwind.preset.js'

export default {
  presets: [combsolPreset],
  content: ['./src/**/*.{ts,tsx}'],
  // ...
}
```

### tokens.css global importieren

In der globalen CSS-Datei oder `main.tsx`:

```css
@import '@combsol/design/tokens.css';
```

---

## Token-Übersicht

### Surface & Text

| Token | Dark Default | Light |
|---|---|---|
| `--bg` | `#0A0D11` | `#F4F6F8` |
| `--bg-2` | `#0E1217` | `#ECEFF2` |
| `--surface` | `#131820` | `#FFFFFF` |
| `--surface-2` | `#181E27` | `#F8FAFC` |
| `--surface-3` | `#1F2630` | `#EEF1F5` |
| `--text` | `#E6EBF0` | `#0A0D11` |
| `--text-2` | `#9AA5B4` | `#4B5563` |
| `--text-3` | `#5F6B7C` | `#6B7280` |
| `--text-mute` | `#424E5F` | `#9CA3AF` |

### Accent & Semantik

| Token | Wert |
|---|---|
| `--accent` | `#00A3E0` (Combsol Cyan) |
| `--accent-hi` | `#2EB8EC` |
| `--accent-lo` | `#0089BD` |
| `--ok` | `#4ADE80` |
| `--warn` | `#F5B544` |
| `--bad` | `#FF6B6B` |

### Spacing (4px-Grid)

| Token | Wert |
|---|---|
| `--s-1` | `4px` |
| `--s-2` | `8px` |
| `--s-3` | `12px` |
| `--s-4` | `16px` |
| `--s-5` | `20px` |
| `--s-6` | `24px` |
| `--s-7` | `32px` |
| `--s-8` | `48px` |

### Border Radius

| Token | Wert |
|---|---|
| `--r-1` | `2px` |
| `--r-2` | `4px` |
| `--r-3` | `6px` |
| `--r-4` | `10px` |

### Typografie

| Token | Wert |
|---|---|
| `--font-sans` | `"Geist", "Inter", system-ui, …` |
| `--font-mono` | `"Geist Mono", "JetBrains Mono", ui-monospace, …` |

### App-Hue-Mapping (kategorische Farben)

| App | Token | Hue |
|---|---|---|
| Hub | `--app-hub` | Cyan |
| Gesamtplan | `--app-gesamt` | Violet |
| FAIR-Kapa | `--app-fair` | Amber |
| Liquidität | `--app-liquid` | Emerald |
| Notes | `--app-notes` | Magenta |
| Briefing | `--app-briefing` | Sky |
| Command Center | `--app-cc` | Lime |
| Design System | `--app-ds` | Indigo |

---

## Tailwind-Klassen

Alle Tokens sind als Tailwind-Utilities verfügbar:

```html
<!-- Farben -->
<div class="bg-surface text-text border-border">...</div>
<div class="bg-accent text-bg">Primary Button</div>
<div class="text-ok">Status OK</div>

<!-- Spacing -->
<div class="p-s-4 gap-s-2">...</div>

<!-- Border Radius -->
<div class="rounded-r-2">...</div>

<!-- Fonts -->
<span class="font-mono">Tabular Numbers</span>
```

---

## Governance

- Tokens werden nur von Björn geändert.
- Neue Tokens: PR auf dieses Repo, Semver-Minor.
- Breaking Changes (Token-Wert-Änderung): Semver-Major.
- Larry darf dieses Repo nicht modifizieren.

**Version:** 0.1.0 — 2026-05-15
