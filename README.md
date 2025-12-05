# Tea Guru Landing Page

Static, single-page site for Tea Guru hosted on GitHub Pages.

## Brand essentials
- Colors:  
  - Dark Tea Blue `#0c568a` (primary)  
  - Light Tea Blue `#88cce5` (secondary/highlight)  
  - White `#ffffff` (background/surface)  
- Email: `teagurullc@gmail.com`

## Project structure
- `index.html` – content and sections (hero, product, ingredients, ritual, story, find, contact, footer).
- `styles.css` – layout, typography, and color tokens (see `:root` variables for palette).
- `script.js` – mobile nav toggle, smooth scrolling, footer year.
- `assets/` – logo, hero bottle, founders art, social/email icons.

## Local preview
Open `index.html` in a browser, or run a simple server:
```
cd repo_Landing_Page
python -m http.server 8000
```
Then visit `http://localhost:8000`.

## Deployment
- Branch: `main`
- GitHub Pages: Source = `main`, path `/`
- Live URL: https://jacoboon.github.io/teaguru_landing_page/
