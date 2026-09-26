# CNA Prep — CompuMaster Haiti

Bilingual (English / French) nurse-aide exam practice app. Installable, works offline.

**153 original practice questions** across three levels — Beginner, Intermediate, Advanced — plus a
60-question exam simulation weighted to the published nurse-aide written-exam content outline.
A **19-section study guide** is built in, and every answer cites the guide section and page that
explains it.

## Features

- Full English / French switch — questions, options, explanations, guide and interface
- Three difficulty levels and an exam simulation
- Offline search: type a question, get the guide section and page that answers it
- Progress tracking and weakest-area breakdown, stored on the device
- Installable on Android and iPhone; works with no internet after the first visit

## Running it

It is a static site — no server, no build step, no dependencies. Serve `index.html` over **https**
(required for install and offline mode). On GitHub Pages this is automatic.

## Files

| File | Purpose |
|---|---|
| `index.html` | The entire application, including all questions and guide content |
| `manifest.json` | Web app manifest — makes it installable |
| `sw.js` | Service worker — offline caching |
| `icons/` | App icons and the CompuMaster Haiti logo |
| `.nojekyll` | Tells GitHub Pages to serve the files as-is |

## Installing on a phone

- **Android / Chrome** — open the link, tap the install banner, or menu → Install app
- **iPhone / Safari** — open the link, tap Share → Add to Home Screen

## Editing the content

All questions and guide text live in a single `DATA` object near the bottom of `index.html`.
After editing, bump the `CACHE` name in `sw.js` (e.g. `cna-prep-v2`) so returning users receive the
new version instead of the cached one.

## Note on the question board

The **Ask** screen has two parts. The search — which finds the guide section and page answering a
question — works everywhere, offline, for everyone. The shared question board needs a backend and
hides itself automatically on static hosting.

## Disclaimer

Original practice material. Not affiliated with, endorsed by, or derived from any testing
organisation. Nurse aide scope of practice and tested skills vary by state — where this app and your
state or instructor disagree, follow your state and your instructor.

© CompuMaster Haiti
