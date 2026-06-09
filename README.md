# aaronhsushi

Personal site for [aaronhsushi.com](https://aaronhsushi.com).

## Structure

- `public/` — static site files (HTML, images, icons)
  - `public/assets/unused/` — local image archive, **not committed to git** (gitignored)
- `server.js` — Express server that serves `public/`
- `Procfile` — Heroku process declaration

## Deploy

```bash
git add .
git commit -m "your message"
git push heroku master
```
