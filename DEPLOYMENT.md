# 🚀 Netlify Deployment Guide

## Prerequisites
- GitHub account
- Netlify account (sign up at netlify.com)
- Your portfolio code pushed to GitHub

## Quick Deployment Steps

### Method 1: Via Netlify Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Ready for deployment"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Netlify**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Select your repository
   - Build settings (auto-detected):
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

3. **Your site is live!**
   - URL: `random-name.netlify.app`
   - You can change the site name in Site settings

### Method 2: Via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login and Deploy**
   ```bash
   netlify login
   netlify init
   netlify deploy --prod
   ```

## Custom Domain Setup

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow DNS configuration instructions
4. Free HTTPS is automatically enabled

## Environment Variables (if needed)

1. Go to Site settings → Environment variables
2. Add any required variables
3. Redeploy for changes to take effect

## Automatic Deployments

- Every push to `main` branch automatically deploys
- Pull requests get preview deployments
- Rollback to any previous deployment anytime

## Troubleshooting

### Build fails?
- Check build logs in Netlify dashboard
- Ensure all dependencies are in package.json
- Verify Node version (18+)

### Images not loading?
- Already configured with `unoptimized: true`
- Check image paths are correct

### 404 errors?
- netlify.toml handles redirects
- Ensure it's in root directory

## Performance Tips

1. **Enable Asset Optimization**
   - Site settings → Build & deploy → Post processing
   - Enable CSS, JS, and image optimization

2. **Add Headers** (optional)
   Create `public/_headers`:
   ```
   /*
     Cache-Control: public, max-age=31536000, immutable
   ```

## Support

- Netlify Docs: https://docs.netlify.com
- Netlify Support: https://answers.netlify.com

---

**Your portfolio is now live and will auto-deploy on every GitHub push! 🎉**
