<?php
// Ensure category column exists in projects table
require_once 'config/database.php';

$database = new Database();
$db = $database->getConnection();

try {
    // Check if category column exists
    $query = "SHOW COLUMNS FROM projects LIKE 'category'";
    $stmt = $db->prepare($query);
    $stmt->execute();
    
    if ($stmt->rowCount() == 0) {
        echo "📋 Adding category column to projects table...\n";
        $query = "ALTER TABLE projects ADD COLUMN category VARCHAR(100) AFTER technologies";
        $stmt = $db->prepare($query);
        $stmt->execute();
        echo "✅ Category column added successfully!\n";
    } else {
        echo "ℹ️  Category column already exists.\n";
    }
    
    // Show current table structure
    echo "\n📋 Current table structure:\n";
    $query = "SHOW COLUMNS FROM projects";
    $stmt = $db->prepare($query);
    $stmt->execute();
    
    while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo "- " . $row['Field'] . " (" . $row['Type'] . ")\n";
    }
    
} catch(PDOException $exception) {
    echo "❌ Error: " . $exception->getMessage();
}
?>