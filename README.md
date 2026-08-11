# @combsol/design

**Combsol OS Design Tokens** — Single Source of Truth für alle Combsol-Apps.

Dieses Paket stellt `tokens.css` (CSS Custom Properties) und ein Tailwind-Preset bereit, das alle Tokens als Tailwind-Utilities verfügbar macht.

## Tech-Stack

| Bereich | Technologie |
|---|---|
| Design-Tokens und Basestyles | CSS Custom Properties und globale CSS-Regeln |
| Utility-Integration | JavaScript-Tailwind-Preset |
| Icons und Assets | SVG sowie statische HTML-Vorschauen |
| Paketverteilung | GitHub-Dependency über npm beziehungsweise pnpm |
| Qualitätssicherung | GitHub Actions, Dependabot und dokumentierte Audit-Findings |
| Hosting | Kein eigener Service; das Paket wird in konsumierende Apps eingebaut |

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
| Legacy: Command Center (App entfernt) | `--app-cc` | Lime |
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
- Änderungen benötigen einen nachvollziehbaren Review, da alle konsumierenden Apps betroffen sein können.

**Paketversion:** 0.1.0 · **Dokumentationsstand:** 11. August 2026

## Paketarchitektur

| Pfad | Verantwortung |
|---|---|
| [`tokens.css`](tokens.css) | CSS Custom Properties, Reset, Shell- und wiederverwendbare Komponentenstile |
| [`tailwind.preset.js`](tailwind.preset.js) | Stellt Design-Tokens als Tailwind-Theme und Utilities bereit |
| [`icons/`](icons/) | SVG-Iconbibliothek, Vorschau und Gestaltungsleitfaden |
| [`icons/icon-design-skill.md`](icons/icon-design-skill.md) | Regeln für konsistente neue Icons |
| [`audit-report/`](audit-report/) | Historische Qualitäts-, Architektur- und Security-Findings |
| [`package.json`](package.json) | GitHub-Paketmetadaten; veröffentlicht nur `tokens.css` und `tailwind.preset.js` |

`tokens.css` ist bewusst mehr als eine reine Variablendatei. Ab dem Basis-/Komponentenbereich bringt der Import globale Resets, Shell-Layout und Komponentenstile mit. Konsumierende Apps müssen deshalb den Import genau einmal und vor app-spezifischen Overrides platzieren.

## Lokale Entwicklung und Prüfung

Das Repository besitzt keinen Build- oder Startprozess. Änderungen werden direkt in CSS, Tailwind-Preset oder SVG-Dateien vorgenommen und anschließend in mindestens einer repräsentativen App geprüft.

```bash
git clone https://github.com/Combsol-GmbH/combsol-design.git
cd combsol-design
npm install

# Danach in einer konsumierenden App die lokale Quelle verlinken
npm install ../combsol-design
```

Vor einem Merge sind mindestens zu prüfen: CSS-Syntax, referenzierte Token-Parität zwischen Preset und `tokens.css`, Dark-only Darstellung, Fokus-/Hoverzustände, Responsive Shell sowie ein realer Produktionsbuild einer konsumierenden App.

## Release und Verteilung

Das Design-System wird **nicht deployed**. Apps beziehen es als GitHub-Dependency. Eine Änderung wird daher erst aktiv, wenn die konsumierende App ihre Lockdatei beziehungsweise den referenzierten Commit aktualisiert und neu deployed wird.

Es existieren keine Umgebungsvariablen, Datenbank oder Healthchecks. GitHub Actions führt Security- und Dependency-Prüfungen bei Pull Requests und Pushes auf `main` beziehungsweise `master` aus.

## Letzte größere Änderungen

| Datum | Änderung | Referenz |
|---|---|---|
| 2026-07-15 | Secret- und Dependency-Audit-Gate ergänzt | `47a6465` |
| 2026-07-14 | Wöchentliche Dependabot-Updates aktiviert | `961c738` |
| 2026-05-30 | Detaillierte Review-Findings als JSON abgelegt | `20bd9f3` |
| 2026-05-22 | Security-Abhängigkeiten, Cleanup und Dokumentation verbessert | `b7b7e6f` |
| 2026-05-20 | 68 zusätzliche Memory-Map-Icons ergänzt | `3abb793` |

## Bekannte Eigenheiten und Gotchas

| Thema | Besonderheit |
|---|---|
| **Globaler CSS-Import** | `tokens.css` enthält neben Variablen auch Reset-, Shell- und Komponentenstile. Mehrfachimport oder falsche Reihenfolge kann Apps sichtbar verändern. |
| **Dark-only Zielbild** | Combsol OS wird produktiv dark-only betrieben. Vorhandene Light-Werte sind kein Freibrief für neue Light-Varianten ohne explizite Entscheidung. |
| **Token-Parität** | Es gibt aktuell keinen automatischen Test, der jede im Tailwind-Preset referenzierte Variable gegen `tokens.css` prüft. |
| **GitHub-Dependency** | Ohne feste Commit-/Tag-Strategie können Installationen zu unterschiedlichen Zeitpunkten unterschiedliche Stände beziehen. Lockdateien mitcommitten. |
| **Semver ohne Registry** | Die dokumentierte Semver-Governance ist organisatorisch; das Paket wird derzeit nicht über eine Package Registry veröffentlicht. |
| **Lizenz/Publizierung** | `package.json` ist `UNLICENSED`, aber nicht als `private` markiert. Vor externer Veröffentlichung rechtlich und technisch klären. |
| **Icon-Vorschau** | `icons/IconLibrary-extended.html` lädt Google Fonts extern. Nicht ungeprüft in produktive oder öffentlich erreichbare Flächen übernehmen. |
| **App-Hues** | Legacy-Tokens können nach Entfernung einer App bestehen bleiben. Nicht löschen, bevor alle konsumierenden Repos durchsucht sind. |
| **Breitenwirkung** | Token-Wertänderungen wirken auf alle Apps, auch ohne Codeänderung dort. Vor Merge mindestens Hub und eine Satellite-App visuell prüfen. |

## Weiterführende Dokumentation

| Dokument | Inhalt |
|---|---|
| [`icons/icon-design-skill.md`](icons/icon-design-skill.md) | Form-, Raster- und Exportregeln für Icons |
| [`audit-report/findings-combsol-design.json`](audit-report/findings-combsol-design.json) | Vollständige historische Review-Findings |
