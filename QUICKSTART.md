# Quick Start Guide

## 1. Install Dependencies (Already Done ✓)
```bash
npm install
```

## 2. Add Your Profile Image
- Place your photo in `public/profile.jpg`

## 3. Configure Services

### EmailJS Setup:
1. Sign up at https://www.emailjs.com/
2. Create an email service and template
3. Get your Service ID, Template ID, and User ID

### Firebase Setup:
1. Create project at https://console.firebase.google.com/
2. Add a web app
3. Enable Firestore Database
4. Copy your config values

## 4. Create .env File
Copy `.env.example` to `.env` and add your credentials:
```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_USER_ID=your_user_id

REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=123456789
REACT_APP_FIREBASE_APP_ID=1:123456789:web:abc123
```

## 5. Customize Content
Edit these files:
- `src/components/Hero.js` - Your name and title
- `src/components/About.js` - About text and skills
- `src/components/Projects.js` - Your projects
- `src/components/Contact.js` - Contact info
- `src/components/Footer.js` - Social links

## 6. Run Development Server
```bash
npm start
```
Opens at http://localhost:3000

## 7. Build for Production
```bash
npm run build
```

## 8. Deploy to Netlify

### Via GitHub (Recommended):
1. Push code to GitHub
2. Connect repository to Netlify
3. Add environment variables in Netlify
4. Deploy!

### Via CLI:
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod
```

---

**See SETUP_GUIDE.md for detailed instructions**
