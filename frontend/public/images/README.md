## Image Setup Instructions

### Adding Your Profile Image

1. Place your profile image in: `frontend/public/images/profile.jpg`
   - Recommended size: 400x400 pixels or larger (square)
   - Supported formats: .jpg, .jpeg, .png

### Adding Project Images

You can add project images in two ways:

1. **Local images**: Place images in `frontend/public/images/projects/`
   - Example: `frontend/public/images/projects/project1.jpg`
   - Then update the database with the path: `/images/projects/project1.jpg`

2. **External URLs**: Update the project's `image_url` field in the database with any external image URL

### Updating Project Images in Database

```sql
-- Update project images
UPDATE projects SET image_url = '/images/projects/project1.jpg' WHERE id = 1;
UPDATE projects SET image_url = '/images/projects/project2.jpg' WHERE id = 2;
UPDATE projects SET image_url = '/images/projects/project3.jpg' WHERE id = 3;

-- Or use external URLs
UPDATE projects SET image_url = 'https://example.com/image.jpg' WHERE id = 1;
```

### Supported Image Formats
- JPEG/JPG (.jpg, .jpeg)
- PNG (.png)
- GIF (.gif)
- WebP (.webp)
