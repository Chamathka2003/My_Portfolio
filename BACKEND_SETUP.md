# Backend Setup Guide

## Prerequisites
- XAMPP, WAMP, or similar PHP development environment
- MySQL database
- PHP 7.4 or higher

## Installation Steps

### 1. Database Setup
1. Start your MySQL server (via XAMPP/WAMP control panel)
2. Open phpMyAdmin (usually at `http://localhost/phpmyadmin`)
3. Run the SQL script from `/database/schema.sql` to create the database and tables

### 2. Configure Database Connection
Edit `backend/config/database.php` with your database credentials:
```php
private $host = "localhost";
private $db_name = "portfolio_db";
private $username = "webuser";  // Change to your MySQL username
private $password = "123";      // Change to your MySQL password
```

### 3. Place Backend Files
Copy the entire `backend` folder to your web server directory:
- **XAMPP**: `C:/xampp/htdocs/myportfilo/backend`
- **WAMP**: `C:/wamp64/www/myportfilo/backend`

### 4. Test Backend API
Open your browser and navigate to:
- `http://localhost/myportfilo/backend/` - Should return "Endpoint not found" (this is correct)
- `http://localhost/myportfilo/backend/contact` - Should return an empty array `[]` or list of messages

### 5. Frontend Configuration
The frontend is already configured to use the backend API at:
`http://localhost/myportfilo/backend`

If your setup is different, update the `.env` file in the root directory:
```
REACT_APP_API_URL=http://localhost/yourpath/backend
```

## API Endpoints

### Contact Messages
- **POST** `/contact` - Send a new contact message
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello!"
  }
  ```

- **GET** `/contact` - Get all contact messages
- **GET** `/contact/email/{email}` - Get messages by specific email

### Projects
- **GET** `/projects` - Get all projects
- **GET** `/projects/{id}` - Get specific project
- **POST** `/projects` - Create new project
- **PUT** `/projects/{id}` - Update project
- **DELETE** `/projects/{id}` - Delete project

## Troubleshooting

### Database Connection Issues
1. Ensure MySQL is running
2. Verify database credentials in `config/database.php`
3. Check if `portfolio_db` database exists

### CORS Errors
The backend is configured to allow requests from any origin. If you still face CORS issues:
1. Check that the backend URL in `.env` matches your actual backend location
2. Ensure PHP headers are being sent correctly

### 404 Errors
1. Verify the backend is in the correct directory
2. Check `.htaccess` file exists in the backend folder (if using Apache)
3. Ensure URL rewriting is enabled in Apache

## Testing the Contact Form
1. Start your React app: `npm start`
2. Navigate to the Contact section
3. Fill out and submit the form
4. Check phpMyAdmin to see if the message was saved in `contact_messages` table

## Database Credentials
Default credentials (change these in production):
- Host: localhost
- Database: portfolio_db
- Username: webuser
- Password: 123

To create a new MySQL user:
```sql
CREATE USER 'webuser'@'localhost' IDENTIFIED BY '123';
GRANT ALL PRIVILEGES ON portfolio_db.* TO 'webuser'@'localhost';
FLUSH PRIVILEGES;
```
