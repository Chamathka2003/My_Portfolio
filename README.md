# Personal Website - Full Stack Project

A modern personal portfolio website built with React (Frontend), Java Spring Boot (Backend), and MySQL (Database).

## 🚀 Project Structure

```
myweb/
├── frontend/          # React application
├── backend/           # Spring Boot REST API
└── database/          # MySQL scripts and documentation
```

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **Java JDK** (v17 or higher) - [Download](https://www.oracle.com/java/technologies/downloads/)
- **Maven** (v3.6 or higher) - [Download](https://maven.apache.org/download.cgi)
- **MySQL** (v8.0 or higher) - [Download](https://dev.mysql.com/downloads/mysql/)
- **Git** - [Download](https://git-scm.com/)

## 🛠️ Setup Instructions

### 1. Database Setup

1. Start MySQL service
2. Create the database:
   ```bash
   mysql -u root -p
   CREATE DATABASE portfolio_db;
   exit;
   ```
3. Run the schema script:
   ```bash
   cd database
   mysql -u root -p portfolio_db < schema.sql
   ```

### 2. Backend Setup

1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Update `src/main/resources/application.properties` with your MySQL credentials:
   ```properties
   spring.datasource.username=root
   spring.datasource.password=your_mysql_password
   ```

3. Build and run the application:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

The backend will start on `http://localhost:8080`

### 3. Frontend Setup

1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The frontend will start on `http://localhost:3000`

## 🎯 Features

### Frontend
- **Home Page**: Introduction and skills showcase
- **About Page**: Detailed background and experience
- **Projects Page**: Portfolio of work with descriptions
- **Contact Page**: Form to send messages

### Backend API Endpoints

#### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/{id}` - Get project by ID
- `POST /api/projects` - Create new project
- `PUT /api/projects/{id}` - Update project
- `DELETE /api/projects/{id}` - Delete project

#### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all messages (admin)
- `GET /api/contact/email/{email}` - Get messages by email

### Database
- **projects** table - Stores portfolio projects
- **contact_messages** table - Stores contact form submissions

## 🔧 Technology Stack

### Frontend
- **React 18** - UI library
- **React Router** - Navigation
- **Axios** - HTTP client
- **CSS3** - Styling

### Backend
- **Spring Boot 3.2** - Framework
- **Spring Data JPA** - ORM
- **Spring Web** - REST API
- **MySQL Connector** - Database driver
- **Lombok** - Boilerplate reduction

### Database
- **MySQL 8** - Relational database

## 📁 Project Details

### Frontend Structure
```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Projects.js
│   │   └── Contact.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

### Backend Structure
```
backend/
├── src/main/java/com/portfolio/
│   ├── config/
│   │   └── CorsConfig.java
│   ├── controller/
│   │   ├── ProjectController.java
│   │   └── ContactController.java
│   ├── model/
│   │   ├── Project.java
│   │   └── ContactMessage.java
│   ├── repository/
│   │   ├── ProjectRepository.java
│   │   └── ContactMessageRepository.java
│   ├── service/
│   │   ├── ProjectService.java
│   │   └── ContactService.java
│   └── PersonalWebsiteApplication.java
└── pom.xml
```

## 🚦 Running Tests

### Backend Tests
```bash
cd backend
mvn test
```

### Frontend Tests
```bash
cd frontend
npm test
```

## 📦 Building for Production

### Backend
```bash
cd backend
mvn clean package
java -jar target/personal-website-1.0.0.jar
```

### Frontend
```bash
cd frontend
npm run build
```

The optimized production build will be in the `build/` folder.

## 🔐 Environment Variables

For production, use environment variables instead of hardcoded values:

**Backend (.env or system env)**
```
DB_URL=jdbc:mysql://localhost:3306/portfolio_db
DB_USERNAME=root
DB_PASSWORD=your_password
SERVER_PORT=8080
```

**Frontend (.env)**
```
REACT_APP_API_URL=http://localhost:8080
```

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   - Backend: Change port in `application.properties`
   - Frontend: Set PORT environment variable: `PORT=3001 npm start`

2. **Database connection failed**
   - Verify MySQL is running
   - Check credentials in `application.properties`
   - Ensure database exists

3. **CORS errors**
   - Verify `CorsConfig.java` has correct frontend URL
   - Check `application.properties` CORS settings

4. **npm install fails**
   - Clear npm cache: `npm cache clean --force`
   - Delete `node_modules` and retry

## 📝 Customization

1. **Update personal information** in frontend components
2. **Add more projects** via API or database
3. **Customize styling** in CSS files
4. **Add new features** following the existing pattern

## 📄 License

This project is open source and available for personal use.


## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

**Happy Coding! 🎉**
