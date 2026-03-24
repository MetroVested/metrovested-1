# Metro Vested Properties – Static Website

## Files in this folder

```
static-export/
├── index.html          ← Home page (start here)
├── services.html       ← Services page
├── about.html          ← About page
├── projects.html       ← Projects / Gallery page
├── reviews.html        ← Reviews page
├── contact.html        ← Contact / Quote Request page
├── css/
│   └── style.css       ← All shared styles
├── js/
│   └── main.js         ← Navbar, gallery filter, quote form logic
└── README.md           ← This file
```

## How to deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `mvp-website`)
2. Upload **all files and folders inside `static-export/`** directly to the root of the repository
3. Go to **Settings → Pages** in your GitHub repo
4. Under "Source", select **Deploy from a branch → main → / (root)**
5. Save — your site will be live at `https://yourusername.github.io/mvp-website/`

> **Important:** Upload the *contents* of `static-export/`, not the folder itself.
> Your repo root should contain `index.html`, `services.html`, `css/`, `js/`, etc.

## No build step required

This is a plain static site. No npm, no Node.js, no build system needed.
It works by simply opening `index.html` in a browser or uploading to any static host.

## Dependencies (CDN — internet required to load)

- Google Fonts (Space Grotesk, Inter)
- Font Awesome 6.5 (icons)
- Unsplash (placeholder images — replace with real photos)

## Replacing placeholder images

All gallery and service images currently use Unsplash placeholder URLs.
To replace them, find any `<img src="https://images.unsplash.com/...">` tag and
replace the `src` with a path to your own image file (e.g. `images/kitchen-1.jpg`).

## Removing the gallery

In `projects.html`, the gallery is clearly wrapped in comments:
- `<!-- BEGIN MVP GALLERY -->` ... `<!-- END MVP GALLERY -->`
- `<!-- BEGIN BEFORE/AFTER -->` ... `<!-- END BEFORE/AFTER -->`

Delete everything between those comment pairs to remove the gallery sections.

## Quote form

The quote form on `contact.html` uses a `mailto:` link to open the visitor's
email client with the subject and body pre-filled from their selections.
No backend or third-party service is required.