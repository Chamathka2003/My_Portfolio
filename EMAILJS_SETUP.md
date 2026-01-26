# EmailJS Setup Guide

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (top right)
3. Create a free account

## Step 2: Add Email Service

1. After login, click **"Email Services"** in the left sidebar
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - Outlook
   - Yahoo
   - Or any other provider
4. Click **"Connect Account"** and follow the prompts
5. **Copy the Service ID** (e.g., `service_abc1234`)

## Step 3: Create Email Template

1. Click **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Configure your template:

### Template Settings:
- **Template Name**: Portfolio Contact Form
- **Subject**: `New message from {{from_name}}`

### Template Content:
```
Hello,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

### Variables to use:
- `{{from_name}}` - Visitor's name
- `{{from_email}}` - Visitor's email
- `{{message}}` - The message content

4. Click **"Save"**
5. **Copy the Template ID** (e.g., `template_xyz5678`)

## Step 4: Get Your Public Key

1. Click **"Account"** in the left sidebar
2. Click **"General"** tab
3. Find **"Public Key"** section
4. **Copy your Public Key** (e.g., `user_abcdefghijk123`)

## Step 5: Update Your .env File

Open the `.env` file in your project root and replace these values:

```env
REACT_APP_EMAILJS_SERVICE_ID=service_abc1234
REACT_APP_EMAILJS_TEMPLATE_ID=template_xyz5678
REACT_APP_EMAILJS_USER_ID=user_abcdefghijk123
```

**Replace with YOUR actual IDs from EmailJS!**

## Step 6: Restart Your App

```bash
# Stop the current app (Ctrl+C)
# Then restart:
npm start
```

## Step 7: Test the Contact Form

1. Go to your portfolio website
2. Navigate to the Contact section
3. Fill out the form with test data
4. Click "Send Message"
5. Check your email inbox for the message!

## Example Configuration

Your `.env` should look like this (with YOUR actual values):

```env
REACT_APP_EMAILJS_SERVICE_ID=service_1a2b3c4
REACT_APP_EMAILJS_TEMPLATE_ID=template_5d6e7f8
REACT_APP_EMAILJS_USER_ID=user_AbCdEfGhIjK123
```

## Troubleshooting

### "Failed to send message" Error

**Check these:**
1. ✅ All three values in `.env` are correct
2. ✅ No extra spaces in `.env` values
3. ✅ Restarted the app after updating `.env`
4. ✅ EmailJS service is connected and active
5. ✅ Template exists and is saved

### Email Not Received

**Check these:**
1. ✅ Check spam/junk folder
2. ✅ Verify email service is properly connected in EmailJS dashboard
3. ✅ Check EmailJS dashboard for delivery status
4. ✅ Make sure template variables match: `from_name`, `from_email`, `message`

### Template Variables Not Working

Make sure your template uses these exact variable names:
- `{{from_name}}`
- `{{from_email}}`
- `{{message}}`

These match the field names in the contact form.

## Free Tier Limits

EmailJS free tier includes:
- ✅ 200 emails per month
- ✅ All basic features
- ✅ Perfect for portfolio websites

## Gmail Users: Important!

If using Gmail:
1. Enable "Less secure app access" OR
2. Use App-Specific Password (recommended)
3. Follow EmailJS prompts during Gmail connection

## Quick Reference

| What | Where to Find |
|------|---------------|
| Service ID | EmailJS Dashboard → Email Services |
| Template ID | EmailJS Dashboard → Email Templates |
| Public Key | EmailJS Dashboard → Account → General |

## Testing

Once configured, test by:
1. Fill out contact form on your site
2. Submit the form
3. Check console for errors (F12)
4. Check EmailJS dashboard for sent emails
5. Check your inbox!

## Support

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Dashboard: https://dashboard.emailjs.com/

---

**Your Contact Email**: chamathka696@gmail.com

After setup, messages will be sent to this email! ✉️
