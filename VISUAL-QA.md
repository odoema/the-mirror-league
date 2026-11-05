# Visual QA report — The Mirror League

## Method

The site was rendered in an isolated Chromium browser context using a self-contained HTML preview. This avoids relying on the public domain or GitHub Pages while the site is still being prepared.

## Test matrix

| Viewport | Resolution | Result |
|---|---:|---|
| Desktop | 1440 × 960 | Passed |
| Tablet | 768 × 1024 | Passed |
| Mobile | 390 × 844 | Passed |

All five hero slides were activated at each viewport. Automated checks verified that: the five slides exist; one slide is active at a time; all local images load; the document does not create horizontal overflow; the slide heading remains within the viewport; the slide action buttons do not overlap the carousel controls; and no JavaScript page errors occur.

## Corrections made during visual review

1. Moved the dark hero overlay inside each individual slide. Previously, a single overlay sat above the slide stack and could veil the slide content.
2. Reduced desktop hero text width and type scale so the headline does not collide with the large artwork.
3. Added a stacked tablet composition for 701–900 px screens, preventing the artwork and heading from competing for the same horizontal space.
4. Increased tablet hero height to accommodate the longer ecosystem slide and keep the controls clear of its calls to action.
5. Corrected layered background sizing so gradient overlays cover their panels while artwork retains its natural aspect ratio.

## Notes

The website's Poppins stylesheet is loaded from Google Fonts in a normal online browser. The automated geometry tests used a local fallback font because external font requests are not part of this isolated test. The downloadable sandbox preview retains the Google Fonts stylesheet so it can render Poppins when opened with an internet connection.

This is a front-end visual and interaction check. It does not certify live DNS, GitHub Pages deployment, form delivery, or third-party service availability.
