# React Frontend

This directory contains the React frontend application for the personal website.

## Getting Started

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm start
```
Runs the app at [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm run build
```
Creates an optimized production build in the `build/` folder.

### Run Tests
```bash
npm test
```

## Project Structure

- `public/` - Static files and HTML template
- `src/` - React source code
  - `components/` - React components for each page
  - `App.js` - Main application component with routing
  - `App.css` - Application styles
  - `index.js` - Application entry point

## Features

- **Responsive Design** - Works on all devices
- **React Router** - Client-side routing
- **API Integration** - Connects to Spring Boot backend
- **Contact Form** - Send messages to backend
- **Projects Display** - Shows portfolio projects from database

## API Configuration

The frontend connects to the backend at `http://localhost:8080`. This is configured in `package.json` as a proxy.

## Customization

1. Update personal information in component files
2. Modify colors and styles in CSS files
3. Add new pages by creating components and adding routes
4. Customize the navigation in `App.js`

## Available Scripts

- `npm start` - Start development server
- `npm build` - Create production build
- `npm test` - Run tests
- `npm eject` - Eject from Create React App (one-way operation)
