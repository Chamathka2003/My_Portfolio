-- Add category column to projects table if it doesn't exist
ALTER TABLE projects ADD COLUMN IF NOT EXISTS category VARCHAR(100) AFTER technologies;

-- Update existing projects with categories and images
UPDATE projects SET 
    category = 'Full Stack',
    image_url = '/images/projects/farm-management.jpg'
WHERE id = 1;

UPDATE projects SET 
    category = 'Web Application',
    image_url = '/images/projects/farm-products.jpg'
WHERE id = 2;

UPDATE projects SET 
    category = 'Management System'
WHERE id = 4;

UPDATE projects SET 
    category = 'IoT Project'
WHERE id = 5;



