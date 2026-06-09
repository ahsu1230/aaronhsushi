# aaronhsushi

Personal site for [aaronhsushi.com](https://aaronhsushi.com).

## How it works

The site is a single static `public/index.html` file served by a minimal Express server (`server.js`). It is hosted on Heroku and served through Cloudflare.

- **Heroku** runs the Node/Express server and serves the files
- **Cloudflare** sits in front as DNS and CDN — `www.aaronhsushi.com` is a CNAME pointing to the Heroku app's DNS target
- **Nameservers** are managed by Cloudflare (not the domain registrar's defaults)

## Repo structure

- `public/index.html` — the entire website (HTML + CSS + JS in one file)
- `public/assets/images/` — all images used by the site
- `public/assets/icons/` — SVG icons (favicon, etc.)
- `public/assets/unused/` — local archive, **not committed to git** (gitignored)
- `server.js` — Express server that serves `public/` as static files
- `Procfile` — tells Heroku to run `node server.js`
- `package.json` — only dependency is `express`

## Making changes

Edit `public/index.html` (and add/remove images in `public/assets/`) then deploy.

## Deploying to aaronhsushi.com

### First-time setup (if starting fresh on a new machine)

1. Install the Heroku CLI:
   ```bash
   curl https://cli-assets.heroku.com/install.sh | sh
   ```

2. Log in:
   ```bash
   heroku login
   ```

3. Add the Heroku git remote (get the app name from the Heroku dashboard):
   ```bash
   heroku git:remote -a <your-heroku-app-name>
   ```

4. Install dependencies:
   ```bash
   npm install
   ```

### Every deploy

```bash
git add .
git commit -m "describe what you changed"
git push heroku master
```

Heroku will install dependencies, start `node server.js`, and the site will be live at [aaronhsushi.com](https://aaronhsushi.com) within ~1 minute.

### Checking the live site / logs

```bash
heroku open          # open the site in browser
heroku logs --tail   # stream live server logs
```

### If the Heroku remote is missing

```bash
heroku apps                        # find your app name
heroku git:remote -a <app-name>    # re-add the remote
```
