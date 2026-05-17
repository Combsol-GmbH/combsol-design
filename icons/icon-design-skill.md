# Memory Map Icon Design Skill

Dieses Dokument beschreibt die exakten Design-Regeln für die Generierung von Memory Map Icons. Diese Regeln müssen zu 100% eingehalten werden, um eine nahtlose Integration in die bestehende IconLibrary.html zu gewährleisten.

## 1. SVG-Grundgerüst

Jedes Icon muss exakt folgendes Grundgerüst aufweisen:

```xml
<?xml version="1.0"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <!-- Definitionen hier -->
  </defs>
  <g clip-path="url(#tile)">
    <!-- Hintergrund, Ringe, Halo, Top-Gloss hier -->
    <!-- Glyph (das eigentliche Motiv) hier -->
    <!-- Boden-Schatten hier -->
  </g>
  <!-- Äußerer Rahmen hier -->
</svg>
```

## 2. Feste Definitionen (`<defs>`)

Folgende Elemente müssen in JEDEM Icon identisch im `<defs>`-Bereich vorhanden sein (mit Ausnahme der spezifischen Brand-Farbe im `haloA`-Gradienten):

```xml
<clipPath id="tile">
  <rect x="0" y="0" width="512" height="512" rx="96" ry="96"></rect>
</clipPath>

<radialGradient id="bg" cx="50%" cy="42%" r="70%">
  <stop offset="0%" stop-color="#1A2230"></stop>
  <stop offset="55%" stop-color="#0B1019"></stop>
  <stop offset="100%" stop-color="#04070C"></stop>
</radialGradient>

<linearGradient id="topGloss" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0%" stop-color="rgba(255,255,255,0.10)"></stop>
  <stop offset="45%" stop-color="rgba(255,255,255,0)"></stop>
</linearGradient>

<radialGradient id="haloA" cx="50%" cy="50%" r="50%">
  <stop offset="0%" stop-color="[BRAND_COLOR]" stop-opacity="0.34"></stop>
  <stop offset="55%" stop-color="[BRAND_COLOR]" stop-opacity="0.09"></stop>
  <stop offset="100%" stop-color="[BRAND_COLOR]" stop-opacity="0"></stop>
</radialGradient>

<filter id="neon" x="-30%" y="-30%" width="160%" height="160%">
  <feGaussianBlur stdDeviation="3" result="b1"></feGaussianBlur>
  <feGaussianBlur stdDeviation="8" result="b2" in="SourceGraphic"></feGaussianBlur>
  <feMerge>
    <feMergeNode in="b2"></feMergeNode>
    <feMergeNode in="b1"></feMergeNode>
    <feMergeNode in="SourceGraphic"></feMergeNode>
  </feMerge>
</filter>

<filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
  <feGaussianBlur stdDeviation="4"></feGaussianBlur>
  <feComponentTransfer><feFuncA type="linear" slope="1.4"></feFuncA></feComponentTransfer>
  <feComposite in2="SourceGraphic" operator="over"></feComposite>
</filter>
```

*Hinweis: Bei `haloA` kann `stop-opacity="0.32"` und `stop-opacity="0.08"` (wie im Hub-Icon) oder `0.34`/`0.09` (wie in den meisten anderen) verwendet werden.*

## 3. Hintergrund-Ebenen (Z-Index)

Innerhalb der `<g clip-path="url(#tile)">`-Gruppe müssen die Hintergrund-Ebenen exakt in dieser Reihenfolge liegen:

1. **Hintergrund-Rechteck:**
   `<rect width="512" height="512" fill="url(#bg)"></rect>`

2. **Konzentrische Ringe (optional, aber typisch):**
   ```xml
   <g fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1">
     <circle cx="256" cy="256" r="80"></circle>
     <!-- weitere Kreise mit r=94, 108, 122, 136, 150, 164, 178, 192, 206, 220, 234, 248, 262, 276, 290, 304, 318, 332, 346, 360, 374 -->
   </g>
   ```

3. **Halo (Leuchten):**
   `<circle cx="256" cy="256" r="256" fill="url(#haloA)"></circle>`

4. **Top Gloss (Spiegelung oben):**
   `<rect width="512" height="200" fill="url(#topGloss)"></rect>`

5. **Zentrale Begrenzungsringe (optional, aber typisch):**
   ```xml
   <circle cx="256" cy="256" r="200" fill="none" stroke="[BRAND_COLOR]" stroke-width="1" stroke-dasharray="2,6" opacity="0.5"></circle>
   <circle cx="256" cy="256" r="172" fill="none" stroke="[LIGHTER_BRAND_COLOR]" stroke-width="1" opacity="0.35"></circle>
   ```

## 4. Das Glyph (Motiv)

Das eigentliche Motiv wird in der Mitte platziert und folgt diesen Regeln:

- **Stil:** Neon-Linien (Stroke), Outline-Stil. Keine massiven Füllungen, außer für kleine Akzente.
- **Farbe:** Die Hauptlinien nutzen die `[BRAND_COLOR]`.
- **Strichstärke (`stroke-width`):** Meist 5 bis 7 px (Standard: 6).
- **Filter:** Die Hauptlinien des Motivs müssen den Filter `filter="url(#neon)"` verwenden.
- **Akzente:**
  - Oft werden kleine Punkte/Kreise (z.B. `r="6"` bis `r="9"`) oder Flächen als Akzente gesetzt.
  - Diese nutzen oft eine hellere Variante der Brand-Farbe (`[LIGHTER_BRAND_COLOR]`) oder die Brand-Farbe selbst.
  - Akzente nutzen oft den Filter `filter="url(#softGlow)"`.
  - Gelegentlich werden halbtransparente Füllungen (z.B. `opacity="0.45"`) der Brand-Farbe für Flächen verwendet.
- **Zusätzliche Linien:** Hilfslinien oder Verbindungen können dünner (z.B. `stroke-width="4"`) oder halbtransparent (z.B. `opacity="0.5"`) sein und nutzen oft `filter="url(#softGlow)"`.

## 5. Boden-Schatten und Rahmen

Am Ende der SVG (nach dem Glyph) müssen diese beiden Elemente stehen:

1. **Boden-Schatten (innerhalb der Clip-Gruppe):**
   `<ellipse cx="256" cy="470" rx="240" ry="14" fill="[BRAND_COLOR]" opacity="0.08" filter="url(#softGlow)"></ellipse>`

2. **Äußerer Rahmen (außerhalb der Clip-Gruppe, als letztes Element im `<svg>`):**
   `<rect x="0.5" y="0.5" width="511" height="511" rx="95.5" ry="95.5" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1"></rect>`

## 6. Farbpalette (Brand Colors)

Hier ist eine Auswahl der verfügbaren Brand-Farben und ihrer helleren Varianten (für Akzente/Innenringe):

| Farbe (Name/Typ) | Brand Color | Lighter Color |
|------------------|-------------|---------------|
| Cyan / Light Blue| `#00A3E0`   | `#4DBDF0`     |
| Green            | `#5BD6A7`   | `#8ce2c1`     |
| Purple           | `#7D5FFF`   | `#a48fff`     |
| Red / Coral      | `#FF7F7A`   | `#ffa5a2`     |
| Pink             | `#FF7AC8`   | `#ffa2d9`     |
| Teal             | `#5BD6E0`   | `#8ce2e9`     |
| Light Purple     | `#B07CFF`   | `#c8a3ff`     |
| Orange           | `#FFB446`   | `#ffd085`     |
| Lime Green       | `#B5F23D`   | `#d4fa85`     |
| Yellow           | `#FFE08A`   | `#fff0bd`     |
| Blue             | `#5BB8FF`   | `#99d4ff`     |

*Bei der Generierung neuer Icons muss eine dieser Farben passend zum Thema gewählt werden.*
