# 🚀 Setup Instructions for Your Portfolio Website

## Step 1: EmailJS Configuration

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Create a new Email Service:
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions
   - Copy the **Service ID**

3. Create an Email Template:
   - Go to "Email Templates"
   - Click "Create New Template"
   - Use these template variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message content
   - Example template:
     ```
     From: {{from_name}} ({{from_email}})
     
     Message:
     {{message}}
     ```
   - Copy the **Template ID**

4. Get your User ID:
   - Go to "Account" → "General"
   - Copy your **Public Key (User ID)**

## Step 2: Firebase Configuration

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add Project" and create a new project
3. Once created, click "Web" icon (</>) to add a web app
4. Register your app with a nickname
5. Copy all the Firebase config values:
   - API Key
   - Auth Domain
   - Project ID
   - Storage Bucket
   - Messaging Sender ID
   - App ID

6. Enable Firestore Database:
   - In Firebase Console, go to "Firestore Database"
   - Click "Create Database"
   - Choose "Start in test mode" for development
   - Select your location
   - Click "Enable"

## Step 3: Configure Environment Variables

1. Create a `.env` file in the root directory (e:\myportfilo)
2. Copy the content from `.env.example` and fill in your actual values:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_actual_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_actual_template_id
REACT_APP_EMAILJS_USER_ID=your_actual_user_id

REACT_APP_FIREBASE_API_KEY=your_actual_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_actual_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_actual_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_actual_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_actual_sender_id
REACT_APP_FIREBASE_APP_ID=your_actual_app_id
```

## Step 4: Add Your Profile Image

1. Add your profile photo to `public/` folder
2. Name it `profile.jpg` (or update the path in Hero.js)

## Step 5: Customize Your Content

Update the following files with your personal information:

1. **src/components/Hero.js**
   - Update your name, subtitle, and badges

2. **src/components/About.js**
   - Update the about text and skills

3. **src/components/Projects.js**
   - Add your actual projects with links

4. **src/components/Contact.js**
   - Update your email and LinkedIn URLs

5. **src/components/Footer.js**
   - Update social media links (GitHub, LinkedIn)

## Step 6: Run the Development Server

```bash
npm start
```

Your website will open at `http://localhost:3000`

## Step 7: Deploy to Netlify

### Option A: Deploy via Git (Recommended)

1. Create a GitHub repository
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

3. Go to [Netlify](https://www.netlify.com/)
4. Click "Add new site" → "Import an existing project"
5. Choose "GitHub" and authorize
6. Select your repository
7. Build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
8. Add environment variables in Netlify:
   - Go to "Site settings" → "Environment variables"
   - Add all your REACT_APP_* variables
9. Click "Deploy site"

### Option B: Deploy via Netlify CLI

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Build your project:
   ```bash
   npm run build
   ```

3. Deploy:
   ```bash
   netlify deploy
   ```

4. Follow the prompts to create a new site
5. For production deployment:
   ```bash
   netlify deploy --prod
   ```

## 🎨 Additional Customization

### Change Color Scheme
Edit the CSS files in `src/components/` to change colors:
- Primary blue: `#003d82`
- Accent blue: `#4da6ff`
- Dark background: `#001f3f`

### Add More Sections
Create new components in `src/components/` and import them in `src/App.js`

### Update Fonts
Add Google Fonts in `public/index.html` and update CSS

## 📝 Important Notes

1. **Never commit .env file** - It's already in .gitignore
2. **Set environment variables in Netlify** for production
3. **Test contact form** after deployment
4. **Update Firebase security rules** for production
5. **Add custom domain** in Netlify settings (optional)

## 🐛 Troubleshooting

### Contact Form Not Working
- Check EmailJS credentials in .env
- Verify EmailJS service is active
- Check browser console for errors

### Firebase Errors
- Verify Firebase project is active
- Check Firestore rules allow writes
- Ensure all Firebase config values are correct

### Build Errors
- Delete node_modules and package-lock.json
- Run `npm install` again
- Clear cache: `npm cache clean --force`

## 📞 Need Help?

- EmailJS Docs: https://www.emailjs.com/docs/
- Firebase Docs: https://firebase.google.com/docs/web/setup
- React Docs: https://react.dev/
- Netlify Docs: https://docs.netlify.com/

---

**Your portfolio is ready to go live! 🎉**
