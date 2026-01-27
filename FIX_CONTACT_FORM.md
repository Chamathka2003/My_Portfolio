# 🚨 CONTACT FORM NOT WORKING - FIX IT NOW

## The Problem
Your EmailJS credentials are not configured. The `.env` file still has placeholder values.

## Quick Fix (2 Options)

---

### ✅ OPTION 1: Setup EmailJS (Recommended - 10 minutes)

#### Step 1: Create EmailJS Account
1. Go to **https://www.emailjs.com/**
2. Click "Sign Up" (use your Gmail: chamathka696@gmail.com)
3. Verify your email

#### Step 2: Add Gmail Service
1. In EmailJS dashboard, click **"Email Services"** (left sidebar)
2. Click **"Add New Service"**
3. Choose **"Gmail"**
4. Click "Connect Account"
5. Login with **chamathka696@gmail.com**
6. Allow permissions
7. **COPY THE SERVICE ID** (looks like: `service_abc1234`)

#### Step 3: Create Email Templateanother achivment
1. Click **"Email Templates"** (left sidebar)
2. Click **"Create New Template"**
3. Fill in:
   - **Template Name**: Portfolio Contact
   - **Subject**: `New message from {{from_name}}`
   - **Content**:
     ```
     Name: {{from_name}}
     Email: {{from_email}}
     
     Message:
     {{message}}
     ```
4. Click **"Save"**
5. **COPY THE TEMPLATE ID** (looks like: `template_xyz5678`)

#### Step 4: Get Public Key
1. Click **"Account"** (left sidebar)
2. Go to **"General"** tab
3. Find **"Public Key"** section
4. **COPY YOUR PUBLIC KEY** (looks like: `user_AbCdEfG123`)

#### Step 5: Update .env File
Open `.env` and replace:

```env
REACT_APP_EMAILJS_SERVICE_ID=service_abc1234
REACT_APP_EMAILJS_TEMPLATE_ID=template_xyz5678
REACT_APP_EMAILJS_USER_ID=user_AbCdEfG123
```

**⚠️ Use YOUR actual IDs from EmailJS!**

#### Step 6: Restart App
```bash
# Press Ctrl+C to stop
npm start
```

#### Step 7: Test
- Fill contact form
- Click Send
- Check your Gmail inbox!

---

### ✅ OPTION 2: Use PHP Backend (Already Setup!)

Your backend is already copied to WAMP. Just need to:

#### Step 1: Check MySQL is Running
Open WAMP Control Panel - ensure MySQL is green/running

#### Step 2: Create Database
1. Open **http://localhost/phpmyadmin**
2. Click **"SQL"** tab
3. Copy and paste from `database/schema.sql`
4. Click **"Go"**

#### Step 3: Update Database Password
Edit `C:\wamp64\www\myportfilo\backend\config\database.php`:
```php
private $username = "root";
private $password = "";  // Usually empty for WAMP
```

#### Step 4: Change Contact.js to Use Backend
Open `src/components/Contact.js` and change line 2:
```javascript
// Change FROM:
import { sendEmail } from '../emailService';

// Change TO:
import { sendContactMessage } from '../api/contactService';
```

Then change line 28:
```javascript
// Change FROM:
await sendEmail(formData);

// Change TO:
await sendContactMessage(formData);
```

#### Step 5: Restart App
```bash
npm start
```

---

## Which Option Should I Choose?

| Feature | EmailJS | PHP Backend |
|---------|---------|-------------|
| Setup Time | 10 minutes | 5 minutes |
| Requires Server | No | Yes (WAMP) |
| Free Tier | 200 emails/month | Unlimited |
| Store Messages | No | Yes (in database) |
| View Messages | Only in email | phpMyAdmin |
| Best For | Simple portfolios | Professional sites |

---

## Testing After Setup

### Test EmailJS:
1. Fill contact form
2. Check browser console (F12) for errors
3. Check your Gmail inbox

### Test Backend:
1. Fill contact form
2. Check phpMyAdmin → portfolio_db → contact_messages
3. See saved message

---

## Still Not Working?

### EmailJS Errors:
- Check browser console (F12)
- Verify all 3 IDs in `.env`
- Make sure you restarted the app
- Check EmailJS dashboard for delivery status

### Backend Errors:
- Ensure WAMP MySQL is running
- Check `portfolio_db` exists in phpMyAdmin
- Test: http://localhost/myportfilo/backend/contact
- Should return `[]` or list of messages

---

## Your Email
All messages will go to: **chamathka696@gmail.com**

Choose one option above and follow the steps! 🚀
