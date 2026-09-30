# @combsol/design

**Combsol OS Design Tokens** — gemeinsames Token-, Basestyle- und Komponenten-CSS-Paket für Combsol-Frontends.

Dieses Repository stellt `tokens.css` (CSS Custom Properties, Resets und Komponentenstile) sowie ein Tailwind-Preset bereit, das die referenzierten Tokens als Tailwind-Utilities verfügbar macht. Welche Anwendungen den Stand tatsächlich einbinden, ist aus diesem Repository allein nicht ableitbar.

## Tech-Stack

| Bereich | Technologie |
|---|---|
| Design-Tokens und Basestyles | CSS Custom Properties und globale CSS-Regeln |
| Utility-Integration | JavaScript-Tailwind-Preset |
| Icons und Assets | SVG-Quellen sowie statische HTML-Vorschau (nicht im npm-Paket enthalten) |
| Paketverteilung | GitHub-Dependency über npm beziehungsweise pnpm |
| Qualitätssicherung | GitHub Actions (CodeQL, Secret- und Dependency-Scan), Dependabot und dokumentierte Audit-Findings |
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

| Token | Wert |
|---|---|
| `--bg` | `#0A0D11` |
| `--bg-2` | `#0E1217` |
| `--surface` | `#131820` |
| `--surface-2` | `#181E27` |
| `--surface-3` | `#1F2630` |
| `--text` | `#E6EBF0` |
| `--text-2` | `#9AA5B4` |
| `--text-3` | `#5F6B7C` |
| `--text-mute` | `#424E5F` |

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
| Command Center (Legacy-Key) | `--app-cc` | Lime |
| Design System | `--app-ds` | Indigo |

---

## Tailwind-Klassen

Die im Preset referenzierten Tokens sind als Tailwind-Utilities verfügbar:

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

Der aktuelle Code enthält keine technische Durchsetzung für Autorenschaft, Semver oder Reviews. Die folgenden Regeln sind daher **Konventionen**, deren organisatorische Geltung nicht aus diesem Repository verifiziert werden kann:

- Neue Tokens sollen per PR in dieses Repository gelangen und eine Semver-Minor-Änderung auslösen.
- Token-Wertänderungen sollen als Semver-Major behandelt werden.
- Änderungen sollen nachvollziehbar reviewed werden, weil sie konsumierende Apps beeinflussen können.

**Paketversion:** 0.1.0 · **Dokumentationsstand:** 30. September 2026

## Paketarchitektur

| Pfad | Verantwortung |
|---|---|
| [`tokens.css`](tokens.css) | CSS Custom Properties, Reset, Shell- und wiederverwendbare Komponentenstile |
| [`tailwind.preset.js`](tailwind.preset.js) | Stellt Design-Tokens als Tailwind-Theme und Utilities bereit |
| [`icons/`](icons/) | SVG-Iconbibliothek, Vorschau und Gestaltungsleitfaden |
| [`icons/icon-design-skill.md`](icons/icon-design-skill.md) | Regeln für konsistente neue Icons |
| [`audit-report/`](audit-report/) | Historische Qualitäts-, Architektur- und Security-Findings |
| [`package.json`](package.json) | Paketmetadaten; das Feld `files` erklärt `tokens.css` und `tailwind.preset.js` zum Paketinhalt |

`tokens.css` ist bewusst mehr als eine reine Variablendatei. Ab dem Basis-/Komponentenbereich bringt der Import globale Resets, Shell-Layout und Komponentenstile mit. Konsumierende Apps müssen deshalb den Import genau einmal und vor app-spezifischen Overrides platzieren.

Bei `npm pack` enthält das Archiv zusätzlich die üblichen Paketmetadaten und diese README. Die Icon-Quellen und die Icon-Vorschau gehören nicht zum gepackten npm-Artefakt.

## Lokale Entwicklung und Prüfung

Das Repository besitzt keinen Build-, Start- oder Testprozess und keine eigenen Paketabhängigkeiten. Änderungen werden direkt in CSS, Tailwind-Preset oder SVG-Dateien vorgenommen. Eine Prüfung in konsumierenden Apps ist sinnvoll, aber deren konkrete Integration und Ausführungsumgebung sind hier nicht belegt.

```bash
git clone https://github.com/Combsol-GmbH/combsol-design.git
cd combsol-design
npm install

# Danach in einer konsumierenden App die lokale Quelle verlinken
npm install ../combsol-design
```

Vor einem Merge sind mindestens zu prüfen: CSS-Syntax, referenzierte Token-Parität zwischen Preset und `tokens.css`, Dark-only Darstellung, Fokus-/Hoverzustände, Responsive Shell sowie ein realer Build in einer angebundenen Anwendung, sofern verfügbar.

## Release und Verteilung

Das Repository enthält keine Deployment-, Runtime-, Router-, Authentifizierungs-, Umgebungsvariablen- oder Datenbankkonfiguration. Es ist daher kein eigenständig deploybarer Service. Der Code belegt eine Nutzung als Git- beziehungsweise npm-Paket; die tatsächlichen Consumer-Referenzen, Domains und Deployments sind hier nicht nachweisbar.

GitHub Actions führt CodeQL bei Pull Requests und Pushes auf `master` sowie wöchentlich aus. Das Security Gate führt bei Pull Requests, Pushes auf `main`/`master` und manueller Auslösung Secret- und Dependency-Scans aus. Dependabot prüft npm- und GitHub-Actions-Updates wöchentlich.

## Letzte größere Änderungen

| Datum | Änderung | Referenz |
|---|---|---|
| 2026-09-23 | CodeQL-Workflow ergänzt | `14a3398` |
| 2026-07-15 | Secret- und Dependency-Audit-Gate ergänzt | `47a6465` |
| 2026-07-14 | Wöchentliche Dependabot-Updates aktiviert | `961c738` |
| 2026-05-30 | Detaillierte Review-Findings als JSON abgelegt | `20bd9f3` |
| 2026-05-22 | Security-Abhängigkeiten, Cleanup und Dokumentation verbessert | `b7b7e6f` |
| 2026-05-20 | 68 zusätzliche Memory-Map-Icons ergänzt | `3abb793` |

## Bekannte Eigenheiten und Gotchas

| Thema | Besonderheit |
|---|---|
| **Globaler CSS-Import** | `tokens.css` enthält neben Variablen auch Reset-, Shell- und Komponentenstile. Mehrfachimport oder falsche Reihenfolge kann Apps sichtbar verändern. |
| **Dark-only Implementierung** | `tokens.css` setzt `color-scheme: dark`; eine Light-Theme-Implementierung ist im Paket nicht vorhanden. |
| **Token-Parität** | Es gibt aktuell keinen automatischen Test, der jede im Tailwind-Preset referenzierte Variable gegen `tokens.css` prüft. |
| **GitHub-Dependency** | Ohne feste Commit-/Tag-Strategie können Installationen zu unterschiedlichen Zeitpunkten unterschiedliche Stände beziehen. Lockdateien mitcommitten. |
| **Semver ohne Registry-Konfiguration** | Die dokumentierte Semver-Governance ist organisatorisch. Eine Registry-Publish-Konfiguration ist im Repository nicht vorhanden; der Veröffentlichungsstatus ist damit nicht belegt. |
| **Lizenz/Publizierung** | `package.json` ist `UNLICENSED`, aber nicht als `private` markiert. Vor externer Veröffentlichung rechtlich und technisch klären. |
| **Icon-Vorschau** | `icons/IconLibrary-extended.html` lädt Google Fonts extern. Nicht ungeprüft in produktive oder öffentlich erreichbare Flächen übernehmen. |
| **App-Hues** | Legacy-Tokens können nach Entfernung einer App bestehen bleiben. Nicht löschen, bevor alle konsumierenden Repos durchsucht sind. |
| **Breitenwirkung** | Token-Wertänderungen können angebundene Apps ohne Änderungen in deren Quellcode sichtbar beeinflussen. Vor Merge eine repräsentative bekannte Integration visuell prüfen. |

## Weiterführende Dokumentation

| Dokument | Inhalt |
|---|---|
| [`icons/icon-design-skill.md`](icons/icon-design-skill.md) | Form-, Raster- und Exportregeln für Icons |
| [`audit-report/findings-combsol-design.json`](audit-report/findings-combsol-design.json) | Vollständige historische Review-Findings |
