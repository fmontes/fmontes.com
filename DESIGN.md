# Design

Visual system for fmontes.com. Register: brand (see PRODUCT.md).

## Color

OKLCH tokens, declared in `app/globals.css` as `--background`, `--surface`, `--ink-strong`, `--ink`, `--muted`, `--rule`, `--accent`, `--accent-hover`; mapped to Tailwind via `@theme inline`. Dark mode derives from `prefers-color-scheme`.

| Token | Light | Dark |
| --- | --- | --- |
| background | `oklch(0.968 0.009 84.6)` warm paper | `oklch(0.192 0.01 88.8)` warm near-black |
| surface | `oklch(0.944 0.016 86.4)` | `oklch(0.223 0.012 84.5)` |
| ink-strong | `oklch(0.168 0.002 106.6)` | `oklch(0.962 0.017 88)` |
| ink | `oklch(0.278 0.008 84.6)` | `oklch(0.864 0.021 88.7)` |
| muted | `oklch(0.515 0.018 86.5)` (5.1:1 on bg) | `oklch(0.615 0.019 84.6)` (4.9:1) |
| rule | `oklch(0.868 0.019 86.2)` | `oklch(0.287 0.015 84.6)` |
| accent | `oklch(0.347 0.073 256.7)` navy | `oklch(0.775 0.055 255.5)` pale steel |
| accent-hover | `oklch(0.426 0.09 257.2)` | `oklch(0.861 0.035 253.7)` |

Strategy: **restrained** — warm tinted neutrals + one navy accent used for links, serif italic emphasis, entry numbers, and drawn underlines. Selection is accent-on-background. A fixed SVG fractal-noise grain (`body::after`, `--grain-opacity` 0.032 light / 0.05 dark) gives paper tooth.

## Typography

Three families via `next/font/google`: **Instrument Serif** (display + emphasis, 400 normal/italic), **Inter** (body, `ss01`/`cv11` features), **JetBrains Mono** (micro labels, uppercase, tracked 0.14–0.22em). `font-synthesis: none`.

- Display: serif 44→60px, leading 1.05, tracking −0.015em, `text-balance`.
- Section serif lines: 21–23px / 26–30px, leading 1.2–1.45.
- Body: Inter 17px, leading 1.7, measure capped at 660px column.
- Mono labels: 11–12px uppercase, used for section headings, role line, availability, colophon.

## Signature moves

Every animation has a narrative job. The page is a full-bleed story: cover → credibility → beliefs → receipts → method → punchline → readout → conversation. Display moments break the 660px column; prose keeps it.

1. **Cover (100svh)** — full-viewport typographic hero: headline at `clamp(44px, 8.5vw, 110px)` with masked word choreography, role line decodes from glyph noise (boot), scroll cue pulses at the fold. On scroll-out the cover lags at 0.12× (`data-parallax`): the cover lifts, the story begins.
2. **Kinetic beliefs** — the three convictions at `clamp(26px, 4.2vw, 48px)`, staggered indents, each igniting from muted to full ink at the reading zone (`--f`) while drifting laterally (`--dx`, alternating direction). The "I run one." underline latches at full focus.
3. **Horizontal gallery** — "Recently built" pins for 430vh; vertical scroll drives a horizontal track of four full-height panels (giant italic numerals, titles, bodies). Nearest-panel index readout (`01 / 04`) and an accent progress bar. Static fallback: vertical stack with hairlines.
4. **The method (pinned walkthrough)** — 340vh pin, 900px measure. Each step arrives big then collapses to a small muted "done" line above: the process accumulates. Mono index + progress dashes.
5. **Kicker hold** — the punchline centers (the site's only centered text) and pins for 160vh while the "I run one." underline draws scrubbed (`--k`). A beat of silence.
6. **The readout** — "50K+" at `clamp(96px, 20vw, 220px)` counts up on first view (ease-out cubic, 1.3s), then credential rows (Podcast / Conferences / Course) with hover shift. "20 years building." decodes from glyph noise.
7. **Contact climax** — display-size pitch (`clamp(26px, 3.8vw, 40px)`) with drawn underline, pulse-dot availability, and the primary CTA at `clamp(20px, 2.4vw, 28px)`, magnetic with directional underline sweep.
8. **Scroll thread** — a 1px manuscript rule in the left margin (≥1100px) with accent journey fill.
9. **Magnetic links** — `data-magnetic`, lerp ≤7px, fine pointers only, `scale: 0.96` press.

## Motion system

- Easings: `--ease-expo: cubic-bezier(0.16, 1, 0.3, 1)`, `--ease-quart: cubic-bezier(0.22, 1, 0.36, 1)`.
- Three lanes, chosen per purpose:
  - **Keyframes** for staged one-shot sequences (hero choreography).
  - **Transitions** for interruptible reveals (rise / draw / settle via one IntersectionObserver, `.is-in`).
  - **Scrubbed scroll** for narrative sequences (focus lines, method, kicker, thread, hero parallax): one rAF-throttled passive listener drives CSS custom properties and inline styles directly; reversible by scrolling back.
- Sticky sections are pure CSS (`position: sticky` in tall wrappers); JS only adds `-live` classes (`method-live`, `kicker-live`) when motion is allowed, so static fallbacks are the default markup.
- **JS gate**: all hidden/animated initial states require `html.js` (class added by a `beforeInteractive` inline script). No JS → fully visible static page.
- **Reduced motion**: the entire scroll engine is skipped in JS and every animation rule sits inside `@media (prefers-reduced-motion: no-preference)`. The method renders as a plain serif stack; the kicker underline is pre-drawn.
- Only transform/opacity/filter/scroll-driven properties animate; no `transition: all`, no layout thrash (method font-size scrub is 3 short lines, direct-set per frame).

## Layout

Full-bleed story with a 660px column reserved for prose (intro). The cover, beliefs, gallery, method, kicker, readout, and contact all use the viewport width (`px-6 sm:px-12`). Four pinned moments pace the scroll: horizontal gallery (430vh), method (340vh), kicker (160vh), plus the 100svh cover. Footer colophon: hairline + mono micro row.

## Components

- `app/page.tsx` — all sections; local helpers `W` (hero word), `Rule`, `Dot`, `SectionHeading`, `Link`, `Entry`.
- `app/components/fx.tsx` — client effect engine: IntersectionObserver reveals, mono scramble, magnetic links, and the rAF scroll engine (thread, parallax, focus lines, pinned method, kicker hold). No visual output, no dependencies.
- `app/layout.tsx` — fonts, metadata, `<FX />`, `js-flag` beforeInteractive script, GA. `suppressHydrationWarning` on `<html>` (js-flag mutates the class pre-hydration).

## Accessibility

- WCAG AA contrast verified for all text tokens in both schemes.
- Full content in SSR HTML; reveals never gate visibility without JS.
- `prefers-reduced-motion` honored everywhere.
- `:focus-visible` accent ring; links have standalone text; external links `rel="noreferrer"`.
