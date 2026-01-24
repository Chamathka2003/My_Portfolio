<?php
// Update Blossom project image in the database
require_once 'config/database.php';

$database = new Database();
$db = $database->getConnection();

try {
    // Update the Blossom project with the correct image path
    $query = "UPDATE projects SET image_url = ? WHERE name LIKE '%Blossom%'";
    $stmt = $db->prepare($query);
    
    $image_url = "/images/projects/blossom-flower-shop.png";
    $stmt->execute([$image_url]);
    
    echo "✅ Blossom project image updated successfully!";
    echo "\nUpdated image path: " . $image_url;
    
    // Display the updated project
    echo "\n\n📋 Updated Blossom project:\n";
    $query = "SELECT id, name, image_url FROM projects WHERE name LIKE '%Blossom%'";
    $stmt = $db->prepare($query);
    $stmt->execute();
    
    while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo "ID: " . $row['id'] . " | Name: " . $row['name'] . " | Image: " . $row['image_url'] . "\n";
    }
    
} catch(PDOException $exception) {
    echo "❌ Error: " . $exception->getMessage();
}
?>