# Database Setup Instructions

## MySQL Database Configuration

### 1. Install MySQL
- Download and install MySQL from: https://dev.mysql.com/downloads/mysql/
- During installation, remember your root password

### 2. Create Database
Open MySQL command line or MySQL Workbench and run:

```sql
CREATE DATABASE portfolio_db;
```

### 3. Run Schema Script
Execute the `schema.sql` file to create tables and insert sample data:

```bash
mysql -u root -p portfolio_db < schema.sql
```

Or in MySQL Workbench:
1. Open `schema.sql` file
2. Execute the script

### 4. Configure Backend Connection
Update the `backend/src/main/resources/application.properties` file with your MySQL credentials:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/portfolio_db?useSSL=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=your_mysql_password
```

### 5. Verify Database
```sql
USE portfolio_db;
SHOW TABLES;
SELECT * FROM projects;
```

## Database Schema

### Tables

#### projects
- `id` - Primary key (BIGINT, AUTO_INCREMENT)
- `name` - Project name (VARCHAR 255, NOT NULL)
- `description` - Project description (VARCHAR 1000)
- `technologies` - Technologies used (VARCHAR 500)
- `image_url` - Project image URL (VARCHAR 500)
- `github_url` - GitHub repository URL (VARCHAR 500)
- `live_url` - Live demo URL (VARCHAR 500)
- `created_at` - Creation timestamp (TIMESTAMP)
- `updated_at` - Last update timestamp (TIMESTAMP)

#### contact_messages
- `id` - Primary key (BIGINT, AUTO_INCREMENT)
- `name` - Sender's name (VARCHAR 255, NOT NULL)
- `email` - Sender's email (VARCHAR 255, NOT NULL)
- `message` - Message content (TEXT, NOT NULL)
- `created_at` - Creation timestamp (TIMESTAMP)

## Sample Data
The schema includes three sample projects. You can add more projects through the API or directly in the database.

## Troubleshooting

### Connection Issues
- Verify MySQL service is running
- Check port 3306 is available
- Ensure firewall allows MySQL connections

### Authentication Issues
- Use correct username and password
- Grant privileges: `GRANT ALL PRIVILEGES ON portfolio_db.* TO 'root'@'localhost';`
- Flush privileges: `FLUSH PRIVILEGES;`

### Schema Issues
- Drop and recreate database if needed:
  ```sql
  DROP DATABASE IF EXISTS portfolio_db;
  CREATE DATABASE portfolio_db;
  ```
