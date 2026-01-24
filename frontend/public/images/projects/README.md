# How to Add Project Images

## Step 1: Save Your Project Screenshots

Save your project images to: `frontend/public/images/projects/`

For your Farm Management System:
- Save main image as: `farm-management.jpg` or `farm-management.png`
- You can also save multiple images like:
  - `farm-management-1.jpg`
  - `farm-management-2.jpg`
  - etc.

## Step 2: Update the Database

Run this command in MySQL to add the image:

```sql
UPDATE projects 
SET image_url = '/images/projects/farm-management.jpg' 
WHERE name = 'Farm Product and Sales Management System';
```

## Step 3: Add GitHub URL (optional)

```sql
UPDATE projects 
SET github_url = 'https://github.com/yourusername/farm-management',
    live_url = 'https://yourproject.com'
WHERE name = 'Farm Product and Sales Management System';
```

## Current Projects in Database

1. Personal Website
2. E-commerce Platform  
3. Task Management App
4. Farm Product and Sales Management System

Each can have their own image!
