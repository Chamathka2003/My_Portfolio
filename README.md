# Chamathka Jayodavi - Portfolio Website

A modern, responsive portfolio website built with React, EmailJS, Firebase, and deployed on Netlify.

## Technologies Used

- **React** - Frontend framework
- **EmailJS** - Contact form email service
- **Firebase** - Backend services and analytics
- **Netlify** - Hosting and deployment

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with your credentials:
```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_USER_ID=your_user_id

REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

### Running Locally

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

## Deployment

The site is configured for automatic deployment on Netlify. Push to your main branch to trigger a deploy.

## Features

- Responsive design
- Contact form with EmailJS integration
- Firebase analytics
- Modern UI with smooth animations
- SEO optimized

## License

MIT
