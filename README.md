# Chamathka Jayodavi - Portfolio Website

A modern, full-stack portfolio website built with React frontend and PHP backend, featuring a contact form, project showcase, and database integration.

## 🚀 Technologies Used

### Frontend
- **React** - Frontend framework
- **CSS3** - Styling and animations
- **Fetch API** - Backend communication

### Backend
- **PHP** - Server-side logic
- **MySQL** - Database
- **RESTful API** - Clean API architecture

### Deployment
- **Netlify** - Frontend hosting
- **Apache/XAMPP** - Local backend server

## 📋 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Backend (Required for Contact Form)
See [QUICKSTART_BACKEND.md](QUICKSTART_BACKEND.md) for detailed instructions.

**Quick steps:**
1. Install XAMPP
2. Start Apache & MySQL
3. Import `database/schema.sql` in phpMyAdmin
4. Place backend folder in `htdocs/myportfilo/backend`

### 3. Configure Environment
Update `.env` with your backend URL (default is already set):
```env
REACT_APP_API_URL=http://localhost/myportfilo/backend
```

### 4. Test Backend (Optional)
```bash
npm run test-backend
```

### 5. Start Development Server
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📁 Project Structure

```
myportfilo/
├── backend/                 # PHP Backend
│   ├── config/             # Database configuration
│   ├── controllers/        # API controllers
│   ├── models/            # Data models
│   └── index.php          # API entry point
├── database/               # SQL scripts
├── src/                    # React frontend
│   ├── api/               # API services
│   └── components/        # React components
├── public/                # Static files
└── .env                   # Environment variables
```

## 🎯 Features

- ✅ Responsive design for all devices
- ✅ Contact form with backend database storage
- ✅ Project showcase with image display
- ✅ Modern UI with smooth animations
- ✅ RESTful API architecture
- ✅ MySQL database integration
- ✅ SEO optimized

## 📧 Contact Information

- **Email**: chamathka696@gmail.com
- **Location**: Sri Lanka
- **LinkedIn**: linkedin.com/in/chamathka

## 🛠️ Development

### Available Scripts

- `npm start` - Run development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run test-backend` - Test backend API

### Backend API Endpoints

- `POST /contact` - Submit contact message
- `GET /contact` - Get all messages
- `GET /projects` - Get all projects
- `POST /projects` - Create new project

## 📚 Documentation

- [Backend Setup Guide](BACKEND_SETUP.md) - Detailed backend configuration
- [Quick Start Backend](QUICKSTART_BACKEND.md) - Fast setup guide
- [Database Schema](database/schema.sql) - Database structure

## 🚀 Deployment

### Frontend (Netlify)
The site is configured for automatic deployment on Netlify. Push to your main branch to trigger a deploy.

### Backend
For production, you'll need:
1. PHP hosting with MySQL
2. Update `.env` with production API URL
3. Configure CORS in `backend/index.php`

## 🐛 Troubleshooting

If the contact form isn't working:
1. Check XAMPP Apache & MySQL are running
2. Verify database exists in phpMyAdmin
3. Run `npm run test-backend` to diagnose
4. Check browser console for errors (F12)

See [QUICKSTART_BACKEND.md](QUICKSTART_BACKEND.md) for detailed troubleshooting.

## 📝 License

MIT
