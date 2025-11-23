# GitHub Setup for Netlify Deployment

## Quick Setup Steps

### 1. Create GitHub Repository
- Go to https://github.com/new
- Repository name: `portfolio` (or any name you prefer)
- Make it Public or Private
- **Don't** initialize with README, .gitignore, or license
- Click "Create repository"

### 2. Connect Local Repository to GitHub

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name:

```bash
# Add GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push your code
git branch -M main
git push -u origin main
```

### 3. Connect to Netlify

**Option A: Via Netlify Dashboard (Recommended)**
1. Go to https://app.netlify.com
2. Select your site: https://shashikathi.netlify.app/
3. Go to **Site settings** → **Build & deploy** → **Continuous Deployment**
4. Click **"Link to Git provider"** or **"Edit settings"**
5. Choose **GitHub** and authorize Netlify
6. Select your repository
7. Build settings (should auto-detect):
   - Build command: `npm run build`
   - Publish directory: `.next`
8. Click **"Deploy site"**

**Option B: Via Netlify CLI**
```bash
# Install Netlify CLI (if not installed)
npm install -g netlify-cli

# Login to Netlify
netlify login

# Link to your site
netlify link --id be7ce06f-c7e4-43e5-84ba-25a304ac7ec6

# Deploy
netlify deploy --prod
```

## After Connection

Once connected:
- Every push to `main` branch will automatically deploy
- Pull requests get preview deployments
- You can rollback to any previous deployment

## Troubleshooting

**If you get authentication errors:**
- Make sure you're logged into GitHub
- Check Netlify has access to your repositories in GitHub settings

**If build fails:**
- Check build logs in Netlify dashboard
- Ensure all dependencies are in package.json
- Verify Node version is 20 (configured in netlify.toml)

