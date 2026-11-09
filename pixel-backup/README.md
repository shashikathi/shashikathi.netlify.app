# Pixel Portfolio Backup

A standalone Next.js version of the pixel-art portfolio. The main repository keeps the original visual design and offers the pixel version at `/pixel`.

## Run locally

```bash
npm install
npm run dev
```

## Deploy on Netlify

Set the Netlify base directory to `pixel-backup`, the build command to `npm run build`, and the publish directory to `out`. This folder contains its own app files, config, package manifest, and portrait/project assets, so it can be deployed independently.
