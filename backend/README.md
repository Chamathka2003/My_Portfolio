# PHP Backend

This directory contains the PHP backend API for the personal website.

## Getting Started

### Prerequisites
- PHP 7.4 or higher
- MySQL 8.0 or higher
- Apache with mod_rewrite enabled (or PHP built-in server for development)

### Configuration

Update `config/database.php` with your database credentials:

```php
private $host = "localhost";
private $db_name = "portfolio_db";
private $username = "your_username";
private $password = "your_password";
```

### Run

#### Using PHP Built-in Server (Development)
```bash
cd backend
php -S localhost:3000 index.php
```

#### Using Apache (Production)
Configure Apache virtual host to point to the backend directory with .htaccess support enabled.

The API will be available at `http://localhost:3000`

## Project Structure

```
backend/
├── config/              # Database configuration
├── controllers/         # Request handlers
├── models/             # Data models
├── index.php           # Main entry point
├── .htaccess           # URL rewriting rules
└── composer.json       # PHP dependencies
```

## API Endpoints

### Projects API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects` | Get all projects |
| GET | `/api/projects/{id}` | Get project by ID |
| POST | `/api/projects` | Create new project |
| PUT | `/api/projects/{id}` | Update project |
| DELETE | `/api/projects/{id}` | Delete project |

### Contact API

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Submit contact form |
| GET | `/api/contact` | Get all messages |
| GET | `/api/contact/email/{email}` | Get messages by email |

## Database Configuration

The application uses MySQL with the following configuration:

- **Database**: `portfolio_db`
- **Port**: `3306`
- **Tables**: Projects, Contact Messages

## CORS Configuration

CORS is configured to allow requests from `http://localhost:3000` (React frontend).

## Development

The PHP backend uses PDO for database connections with prepared statements for security.
All user inputs are sanitized using `htmlspecialchars()` and `strip_tags()`.
bash
mvn test
```

## Deployment

### Package as JAR
```bash
mvn clean package
```

The executable JAR will be created in `target/personal-website-1.0.0.jar`

### Run JAR
```bash
java -jar target/personal-website-1.0.0.jar
```

## CORS Configuration

CORS is configured to allow requests from `http://localhost:3000`. Update `CorsConfig.java` for production environments.

## Troubleshooting

### Database Connection Issues
- Verify MySQL is running
- Check credentials in `application.properties`
- Ensure `portfolio_db` database exists

### Port Already in Use
Change the port in `application.properties`:
```properties
server.port=8081
```

### Build Issues
Clean and rebuild:
```bash
mvn clean install -U
```
