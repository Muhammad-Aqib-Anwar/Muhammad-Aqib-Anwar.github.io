# muhammad-aqib-anwar.github.io

Personal research site for **Muhammad Aqib Anwar** — PhD researcher in AI and
computer vision at Hamad Bin Khalifa University, Doha.

Static HTML, CSS and vanilla JS, no build step. Served by GitHub Pages at
<https://muhammad-aqib-anwar.github.io/>.

## Layout

| Path | Holds |
| --- | --- |
| `index.html` | the entire page |
| `404.html` | not-found page |
| `css/style.css` | design tokens and all styling |
| `css/font-root-styles/` | `@font-face` declarations |
| `js/main.js` | mobile menu, scroll-spy nav, publication year filter |
| `img/`, `fonts/` | assets |

## Conventions

**Type and colour** are tokens on `:root` in `css/style.css`. Sizes are fluid
(`--type-hero` … `--type-micro`) so there are no per-breakpoint font-size
overrides — change the token, not the media query.

**Fonts** are two families: `General Sans` for the hero headline only, and one
variable `Satoshi` covering weights 300–900. Use real `font-weight` values.

**The ERG trace** — the waveform in the hero, under each section heading, and
behind the publication year rail — is the site's one recurring motif. It comes
from the electroretinogram data the research uses.

## Adding a publication

Add an `<article class="pub-card" data-year="YYYY">` inside `.pub-panel`. The
year rail builds itself from the `data-year` values, so the filter buttons and
their counts follow automatically — no JS or CSS change needed.

Include the full author list in `.pub-authors` (own name in `<strong>`) and the
citation plus DOI in `.pub-cite`.

## Adding a project

Add an `<li class="project">` inside `<ul class="project-list">`. On desktop the
layout alternates sides on its own via `:nth-child(even)`; adding a project
needs no CSS.

## Responsive images

Large figures ship at `-400w` and `-800w` alongside the full-size file and are
wired up with `srcset`/`sizes`. Regenerate variants if you replace a figure.
