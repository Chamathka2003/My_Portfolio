<?php
// Update Personal Website project with image
require_once 'config/database.php';

$database = new Database();
$db = $database->getConnection();

try {
    // Update Personal Website project (ID = 1) with image
    $query = "UPDATE projects SET image_url = ? WHERE id = ?";
    $stmt = $db->prepare($query);
    
    $image_url = "/images/projects/personal-website.png";
    $project_id = 1;
    
    $stmt->execute([$image_url, $project_id]);
    
    echo "✅ Personal Website project image updated successfully!\n";
    echo "Updated image path: " . $image_url . "\n";
    
    // Display the updated project
    echo "\n📋 Updated Personal Website project:\n";
    $query = "SELECT id, name, image_url FROM projects WHERE id = ?";
    $stmt = $db->prepare($query);
    $stmt->execute([$project_id]);
    
    while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo "ID: " . $row['id'] . " | Name: " . $row['name'] . " | Image: " . $row['image_url'] . "\n";
    }
    
} catch(PDOException $exception) {
    echo "❌ Error: " . $exception->getMessage();
}
?>