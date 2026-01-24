<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

try {
    $conn = new PDO("mysql:host=localhost;dbname=portfolio_db", "webuser", "123");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Database connected successfully!\n";
    
    $stmt = $conn->prepare("SELECT * FROM projects");
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo "Projects found: " . count($result) . "\n";
    echo json_encode($result, JSON_PRETTY_PRINT);
    
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>
