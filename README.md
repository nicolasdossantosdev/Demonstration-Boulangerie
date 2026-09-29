# Maison Fournil

Source code for a demo showcase website for an artisan bakery.

Maison Fournil is a fictional bakery in Lyon: products, prices, opening hours and reviews are made up. The site shows what a simple, fast, GDPR-compliant showcase site for a local shop can look like.

## Features

- Hero section and bakery story
- Product gallery (bento grid, slider, lightbox)
- Specialties with prices
- Customer reviews
- Opening hours and Google Maps access map
- Click-to-call and email contact
- Cookie consent banner (CNIL guidelines) — the map only loads after consent
- Legal notice and privacy policy
- Self-hosted fonts and images, no framework, no build step

## Architecture

```
Boulangerie/
├── index.html                       # home page, filled at runtime from config.js
├── mentions-legales.html            # legal notice
├── politique-confidentialite.html   # privacy policy + cookies
├── config.js                        # all editable content: name, address, hours, products, reviews
├── script.js                        # renders config.js into the page; menu, gallery and animations
├── consent.js                       # cookie banner, loads the Google Maps embed only after consent
├── style.css                        # shared styles for all pages
├── robots.txt                       # allows search engines, blocks AI crawlers
├── fonts/                           # self-hosted Inter and Playfair Display
├── images/                          # product and section photos (Unsplash)
└── favicon.svg, favicon-32.png, apple-touch-icon.png
```

## Live Demo

🌐 [Website](https://boulangerie-livid.vercel.app/)

## Feedback

Suggestions or feedback are welcome — open an issue, or reach out via [email](mailto:nicolas.dossantos.dev@gmail.com), [LinkedIn](https://www.linkedin.com/in/dos-santos-nicolas/), or [GitHub](https://github.com/nicolasdossantosdev).
