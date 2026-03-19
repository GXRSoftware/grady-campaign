# Grady Rueffer — CS Representative Campaign Site

A Node.js/Express campaign website for Grady Rueffer's MES CS Representative election (March 25–27).

## Quick Start

```bash
npm install
npm start
```

Then open: http://localhost:3000

## Pages

- `/` — Home: hero banner, about/experience, platform pillars
- `/posters` — Campaign posters (add your poster images here)

## Project Structure

```
grady-campaign/
├── server.js               # Express server
├── package.json
├── views/
│   ├── index.ejs           # Home page
│   ├── posters.ejs         # Posters page
│   └── partials/
│       ├── nav.ejs         # Navigation bar
│       └── footer.ejs      # Footer
└── public/
    ├── css/
    │   └── style.css       # All styles
    ├── js/
    │   └── main.js         # Scroll & reveal animations
    └── images/
        ├── banner.jpg      # Hero banner image
        ├── Logo_MES_Red.png
        └── ...             # Add poster images here
```

## Adding Posters

1. Drop your poster image files into `public/images/` (e.g. `poster1.jpg`)
2. Open `views/posters.ejs`
3. Find the commented-out `.poster-card` template and uncomment/duplicate it
4. Update the `src`, `alt`, and download `href` to match your filename

## Deploying

Works on any Node.js host. Recommended free options:

- **Netlify** — drag the whole folder to netlify.com/drop (auto-detects Node)
- **Railway** — connect your GitHub repo at railway.app
- **Render** — free Node.js hosting at render.com

Set the `PORT` environment variable if your host requires it (most do this automatically).

## Key Links

- MES Elections: https://www.macengsociety.ca/elections
- Contact: ruefferg@mcmaster.ca
- Voting dates: Wednesday March 25 – Friday March 27
# grady-capaign
