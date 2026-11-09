# Shashi Kathi Portfolio

The existing light portfolio remains the default experience. Use the **Pixel theme** link in the navigation to switch to the pixel-art edition at `/pixel`; choose **Original theme** there to switch back.

Both experiences use the updated seaside portrait, résumé link, experience and project details, and appointment calendar. The full standalone pixel edition is also included in `pixel-backup` for an independent Netlify deployment.

## Run locally

```bash
npm install
npm run dev
```

## Deploy the main site

The root project exports a static Next.js site to `out` for Netlify.

## Deploy the pixel backup separately

In Netlify, set the base directory to `pixel-backup`, the build command to `npm run build`, and the publish directory to `out`. The backup folder contains its own app files, config, package manifest, and assets.
