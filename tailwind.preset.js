/** @type {import('tailwindcss').Config} */

/**
 * @combsol/design — Tailwind Preset
 *
 * Maps all CSS custom properties from tokens.css to Tailwind utilities.
 * Import tokens.css globally, then use these Tailwind classes in your components.
 *
 * Usage in tailwind.config.ts:
 *   import combsolPreset from '@combsol/design/tailwind.preset.js'
 *   export default { presets: [combsolPreset], ... }
 */

const preset = {
  theme: {
    extend: {
      colors: {
        // Surface
        bg: 'var(--bg)',
        'bg-2': 'var(--bg-2)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        'surface-3': 'var(--surface-3)',

        // Border
        border: 'var(--border)',
        'border-2': 'var(--border-2)',
        'border-hi': 'var(--border-hi)',

        // Text
        text: 'var(--text)',
        'text-2': 'var(--text-2)',
        'text-3': 'var(--text-3)',
        'text-mute': 'var(--text-mute)',

        // Accent (Combsol Cyan)
        accent: 'var(--accent)',
        'accent-hi': 'var(--accent-hi)',
        'accent-lo': 'var(--accent-lo)',
        'accent-glow': 'var(--accent-glow)',
        'accent-soft': 'var(--accent-soft)',

        // Semantic
        ok: 'var(--ok)',
        warn: 'var(--warn)',
        bad: 'var(--bad)',
        info: 'var(--info)',

        // Categorical palette
        'cat-cyan': 'var(--cat-cyan)',
        'cat-cyan-s': 'var(--cat-cyan-s)',
        'cat-sky': 'var(--cat-sky)',
        'cat-sky-s': 'var(--cat-sky-s)',
        'cat-indigo': 'var(--cat-indigo)',
        'cat-indigo-s': 'var(--cat-indigo-s)',
        'cat-violet': 'var(--cat-violet)',
        'cat-violet-s': 'var(--cat-violet-s)',
        'cat-magenta': 'var(--cat-magenta)',
        'cat-magenta-s': 'var(--cat-magenta-s)',
        'cat-coral': 'var(--cat-coral)',
        'cat-coral-s': 'var(--cat-coral-s)',
        'cat-amber': 'var(--cat-amber)',
        'cat-amber-s': 'var(--cat-amber-s)',
        'cat-lime': 'var(--cat-lime)',
        'cat-lime-s': 'var(--cat-lime-s)',
        'cat-emerald': 'var(--cat-emerald)',
        'cat-emerald-s': 'var(--cat-emerald-s)',
        'cat-teal': 'var(--cat-teal)',
        'cat-teal-s': 'var(--cat-teal-s)',

        // App hue assignments
        'app-hub': 'var(--app-hub)',
        'app-hub-s': 'var(--app-hub-s)',
        'app-gesamt': 'var(--app-gesamt)',
        'app-gesamt-s': 'var(--app-gesamt-s)',
        'app-fair': 'var(--app-fair)',
        'app-fair-s': 'var(--app-fair-s)',
        'app-liquid': 'var(--app-liquid)',
        'app-liquid-s': 'var(--app-liquid-s)',
        'app-notes': 'var(--app-notes)',
        'app-notes-s': 'var(--app-notes-s)',
        'app-briefing': 'var(--app-briefing)',
        'app-briefing-s': 'var(--app-briefing-s)',
        'app-cc': 'var(--app-cc)',
        'app-cc-s': 'var(--app-cc-s)',
        'app-ds': 'var(--app-ds)',
        'app-ds-s': 'var(--app-ds-s)',
      },

      spacing: {
        's-1': 'var(--s-1)',   // 4px
        's-2': 'var(--s-2)',   // 8px
        's-3': 'var(--s-3)',   // 12px
        's-4': 'var(--s-4)',   // 16px
        's-5': 'var(--s-5)',   // 20px
        's-6': 'var(--s-6)',   // 24px
        's-7': 'var(--s-7)',   // 32px
        's-8': 'var(--s-8)',   // 48px
        'row-h': 'var(--row-h)',
        'pad-card': 'var(--pad-card)',
        'pad-cell': 'var(--pad-cell)',
      },

      borderRadius: {
        'r-0': 'var(--r-0)',   // 0px
        'r-1': 'var(--r-1)',   // 2px
        'r-2': 'var(--r-2)',   // 4px
        'r-3': 'var(--r-3)',   // 6px
        'r-4': 'var(--r-4)',   // 10px
      },

      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
    },
  },
}

module.exports = preset
