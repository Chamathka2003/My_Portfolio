# GitHub Pages Deployment Guide

Your portfolio is now configured for GitHub Pages deployment! Follow these steps to host your website on GitHub.

## Prerequisites
- A GitHub account
- Git installed on your computer

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository (e.g., `myportfilo` or `portfolio`)
4. Choose whether to make it public or private (GitHub Pages works with both)
5. **Do NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

## Step 2: Update package.json

Open `package.json` and update the `homepage` field with your actual GitHub username:

```json
"homepage": "https://YOUR-GITHUB-USERNAME.github.io/myportfilo"
```

Replace `YOUR-GITHUB-USERNAME` with your actual GitHub username.

If you named your repository differently, also update the repository name in the URL.

## Step 3: Initialize Git and Push to GitHub

Open your terminal in the project folder and run:

```bash
# Initialize git (if not already initialized)
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial commit"

# Add your GitHub repository as remote
# Replace YOUR-USERNAME and YOUR-REPO-NAME
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Deploy to GitHub Pages

Once your code is on GitHub, deploy your website:

```bash
npm run deploy
```

This command will:
1. Build your React application (`npm run build`)
2. Deploy the build folder to a `gh-pages` branch
3. Make your site available at the URL specified in the `homepage` field

## Step 5: Enable GitHub Pages (if needed)

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select `gh-pages` branch and `/ (root)` folder
5. Click "Save"

Your website should now be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME`

## Updating Your Website

Whenever you make changes to your portfolio:

```bash
# Make your changes, then:
git add .
git commit -m "Description of your changes"
git push origin main

# Deploy the updated version
npm run deploy
```

## Troubleshooting

### Issue: 404 Error after deployment
- Make sure GitHub Pages is enabled in your repository settings
- Check that the `gh-pages` branch exists
- Verify the `homepage` URL in package.json matches your GitHub Pages URL

### Issue: Blank page
- Check browser console for errors
- Ensure all image paths use `process.env.PUBLIC_URL` or relative paths
- Clear your browser cache

### Issue: Changes not showing
- Wait a few minutes (GitHub Pages can take 5-10 minutes to update)
- Clear your browser cache
- Run `npm run deploy` again

## Custom Domain (Optional)

To use a custom domain like `www.yourname.com`:

1. Add a `CNAME` file in the `public` folder with your domain name
2. Configure your domain's DNS settings to point to GitHub Pages
3. Follow GitHub's [custom domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [gh-pages package](https://www.npmjs.com/package/gh-pages)
- [Create React App Deployment](https://create-react-app.dev/docs/deployment/#github-pages)
