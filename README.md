# The Mirror League — official website

A responsive, source-grounded public website for The Mirror League, the proposed Pan-African basketball and youth-development ecosystem.

## Design system
- Premium navy and championship-gold foundation, with the green, red, blue and white accents reflected in the official logo.
- Interlocking editorial sections, cinematic hero, refined navigation, responsive cards and a mobile-first layout.
- Official logo asset: `assets/logo-small.png`.
- Local visual assets extracted from the user's supplied Mirror League concept-note artwork: `assets/mirror-uniform-concept.webp` and `assets/african-basketball-concept.webp`. These are labelled as concept artwork / uniform concept, not presented as photographs of operational league events or actual teams.
- No remote stock-photo dependency; all site imagery is stored locally in the repository.

## Content integrity
The Mirror League is presented as a proposed ecosystem. The roadmap, academy pathways, Africa Mirror Tour, and Opening Season 2027 are described as strategic targets or concepts, not confirmed operating programmes, events, partnerships, franchises or fixtures.

## Run locally
Open `index.html` in a browser or serve the folder with any static web server.

## Deploy
The repository uses GitHub Pages via `.github/workflows/pages.yml`. The custom domain is `themirrorleague.com`.

The contact form prepares an email in the visitor's mail application to `odoema@gmail.com`; it does not submit data to a server.


## Visual QA and responsive testing

The current source was rendered in a Chromium sandbox at desktop (1440×960), tablet (768×1024), and mobile (390×844) viewports. The five hero slides were individually activated at each viewport. Checks covered JavaScript errors, image loading, horizontal overflow, and slide navigation. The tablet hero switches to a stacked image/text composition to prevent artwork and headings from colliding.
