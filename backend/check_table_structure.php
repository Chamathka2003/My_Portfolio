<?php
// Check table structure
require_once 'config/database.php';

$database = new Database();
$db = $database->getConnection();

try {
    // Show table structure
    echo "📋 Table structure for projects:\n";
    $query = "SHOW COLUMNS FROM projects";
    $stmt = $db->prepare($query);
    $stmt->execute();
    
    while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo "Column: " . $row['Field'] . " | Type: " . $row['Type'] . " | Null: " . $row['Null'] . "\n";
    }
    
    echo "\n📋 Current projects in database:\n";
    $query = "SELECT * FROM projects ORDER BY id";
    $stmt = $db->prepare($query);
    $stmt->execute();
    
    while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo "ID: " . $row['id'] . " | Name: " . $row['name'] . "\n";
    }
    
} catch(PDOException $exception) {
    echo "❌ Error: " . $exception->getMessage();
}
?>