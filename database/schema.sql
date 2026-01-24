-- Create the database
CREATE DATABASE IF NOT EXISTS portfolio_db;

USE portfolio_db;

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(1000),
    technologies VARCHAR(500),
    category VARCHAR(100),
    image_url VARCHAR(500),
    github_url VARCHAR(500),
    live_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample projects
INSERT INTO projects (name, description, technologies, category, image_url) VALUES
('Personal Website', 'A full-stack personal portfolio website built with React, Java Spring Boot, and MySQL.', 'React, Spring Boot, MySQL', 'Full Stack', NULL),
('E-commerce Platform', 'An online shopping platform with user authentication, product catalog, and shopping cart.', 'React, Java, REST API', 'Web Application', NULL),
('Task Management App', 'A productivity application for managing tasks and projects with real-time updates.', 'React, Spring Boot, WebSocket', 'Web Application', NULL),
('Blossom Flower Delivery', 'A full-stack flower delivery web application providing an easy and smooth online flower ordering experience. Features secure user authentication with role-based access for Admin and Customers, customer features for browsing flowers with images and descriptions, placing orders, and a powerful Admin Dashboard for managing flowers and customer orders. Built with MVC architecture using Spring Boot backend, HTML/CSS frontend, and MySQL database.', 'Spring Boot, Java, HTML, CSS, MySQL, MVC', 'E-commerce', '/images/projects/bloosom-flower-shop.jpg');

-- Create indexes for better performance
CREATE INDEX idx_contact_email ON contact_messages(email);
CREATE INDEX idx_contact_created ON contact_messages(created_at);
CREATE INDEX idx_project_name ON projects(name);

-- Show tables
SHOW TABLES;

-- Display sample data
SELECT * FROM projects;
