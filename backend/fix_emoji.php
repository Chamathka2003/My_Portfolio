<?php
// Fix Blossom project title emoji
require_once 'config/database.php';

$database = new Database();
$db = $database->getConnection();

try {
    // Set proper charset for emoji support
    $db->exec("SET NAMES utf8mb4 COLLATE utf8mb4_unicode_ci");
    
    // Update Blossom project title with proper emoji
    $query = "UPDATE projects SET name = ? WHERE id = ?";
    $stmt = $db->prepare($query);
    
    $new_name = "🌸 Blossom Flower Delivery Website";
    $project_id = 6;
    
    $stmt->execute([$new_name, $project_id]);
    
    echo "✅ Blossom project title updated with emoji!\n";
    echo "Updated name: " . $new_name . "\n";
    
    // Display the updated project
    echo "\n📋 Updated Blossom project:\n";
    $query = "SELECT id, name FROM projects WHERE id = ?";
    $stmt = $db->prepare($query);
    $stmt->execute([$project_id]);
    
    while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo "ID: " . $row['id'] . " | Name: " . $row['name'] . "\n";
    }
    
    // Also check database charset
    echo "\n📋 Database charset info:\n";
    $query = "SHOW VARIABLES LIKE 'character_set%'";
    $stmt = $db->prepare($query);
    $stmt->execute();
    
    while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo $row['Variable_name'] . ": " . $row['Value'] . "\n";
    }
    
} catch(PDOException $exception) {
    echo "❌ Error: " . $exception->getMessage();
}
?>