# aaronhsushi.com — Todo

## Lighthouse (remaining opportunities)

- [ ] **Convert gallery thumbnails to WebP** — ~327KB savings. The `thumb_*` images in `public/assets/images/` are still JPGs. Run `convert thumb_*.JPG -quality 82 thumb_*.webp` and update `index.html` src references.
- [ ] **Self-host Google Fonts** — eliminates ~55KB unused CSS that Lighthouse flags. Download the Shippori Mincho, Cormorant Garamond, and DM Sans font files, add them to `public/assets/fonts/`, and replace the Google Fonts `<link>` with `@font-face` rules.

## Current Lighthouse scores (as of 2026-06-08)
- Performance: 91 ✅
- Accessibility: 100 ✅
- Best Practices: 100 ✅
- SEO: 100 ✅
