-- Add category column to projects table
ALTER TABLE projects ADD COLUMN category VARCHAR(100) AFTER technologies;

-- Update existing projects with categories
UPDATE projects SET category = 'Full Stack' WHERE id = 1;
UPDATE projects SET category = 'Web Application' WHERE id = 2;
UPDATE projects SET category = 'Web Application' WHERE id = 3;
UPDATE projects SET category = 'Management System' WHERE id = 4;
UPDATE projects SET category = 'IoT Project' WHERE id = 5;

-- Insert Blossom Flower Delivery project
INSERT INTO projects (name, description, technologies, category, image_url, github_url, live_url) 
VALUES (
    'Blossom Flower Delivery',
    'A full-stack flower delivery web application providing an easy and smooth online flower ordering experience. Features secure user authentication with role-based access for Admin and Customers, customer features for browsing flowers with images and descriptions, placing orders, and a powerful Admin Dashboard for managing flowers and customer orders. Built with MVC architecture using Spring Boot backend, HTML/CSS frontend, and MySQL database.',
    'Spring Boot, Java, HTML, CSS, MySQL, MVC',
    'E-commerce',
    '/images/projects/bloosom-flower-shop.jpg',
    NULL,
    NULL
);
