# Quick Start Guide - Contact Form Backend

## What I've Done
✅ Created PHP backend API for contact form  
✅ Connected frontend React app to backend  
✅ Configured database integration  
✅ Updated email to chamathka696@gmail.com  

## Next Steps to Get It Working

### Step 1: Install XAMPP (if not installed)
1. Download XAMPP from https://www.apachefriends.org/
2. Install it (usually to `C:\xampp`)
3. Start Apache and MySQL from XAMPP Control Panel

### Step 2: Setup Database
1. Open phpMyAdmin at `http://localhost/phpmyadmin`
2. Click "SQL" tab
3. Copy and paste the contents of `database/schema.sql`
4. Click "Go" to create the database and tables

### Step 3: Create Database User (Optional)
In phpMyAdmin SQL tab, run:
```sql
CREATE USER 'webuser'@'localhost' IDENTIFIED BY '123';
GRANT ALL PRIVILEGES ON portfolio_db.* TO 'webuser'@'localhost';
FLUSH PRIVILEGES;
```

Or simply use root user by editing `backend/config/database.php`:
```php
private $username = "root";
private $password = "";  // Usually empty for XAMPP
```

### Step 4: Test Backend
Run in PowerShell:
```powershell
.\test-backend.ps1
```

### Step 5: Start Frontend
```bash
npm start
```

## File Structure
```
myportfilo/
├── backend/               # PHP Backend API
│   ├── config/
│   │   └── database.php  # Database configuration
│   ├── controllers/
│   │   └── ContactController.php
│   ├── models/
│   │   └── ContactMessage.php
│   └── index.php         # Main API entry point
├── database/
│   └── schema.sql        # Database setup script
├── src/
│   ├── api/
│   │   └── contactService.js  # NEW: API service
│   └── components/
│       └── Contact.js    # Updated to use backend
└── .env                  # Configuration
```

## How It Works
1. User fills contact form → Frontend (React)
2. Form submits → API call to `http://localhost/myportfilo/backend/contact`
3. Backend (PHP) → Saves to MySQL database
4. Response → Success/Error message shown to user

## Verify Contact Messages
Check saved messages in phpMyAdmin:
1. Open `http://localhost/phpmyadmin`
2. Select `portfolio_db` database
3. Click `contact_messages` table
4. View all submitted messages

## Troubleshooting

### "Failed to send message" Error
- ✓ Check XAMPP Apache & MySQL are running
- ✓ Verify database exists: `portfolio_db`
- ✓ Check backend URL in `.env` file
- ✓ Run `test-backend.ps1` to diagnose issues

### Backend Not Found
- ✓ Ensure backend folder is at `C:\xampp\htdocs\myportfilo\backend`
- ✓ Test URL: `http://localhost/myportfilo/backend/contact`

### Database Connection Error
- ✓ Verify credentials in `backend/config/database.php`
- ✓ Ensure MySQL is running in XAMPP
- ✓ Check database `portfolio_db` exists

## Need Help?
1. Check `BACKEND_SETUP.md` for detailed instructions
2. Run `test-backend.ps1` for automated testing
3. Check browser console (F12) for error messages
