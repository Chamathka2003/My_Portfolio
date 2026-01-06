<?php
// Test database connection and API response format
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

require_once 'config/database.php';

try {
    $database = new Database();
    $db = $database->getConnection();
    
    if (!$db) {
        throw new Exception("Database connection failed");
    }
    
    // Get all projects exactly like the API
    $query = "SELECT * FROM projects ORDER BY id DESC";
    $stmt = $db->prepare($query);
    $stmt->execute();
    
    $projects = [];
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $project_item = [
            'id' => $row['id'],
            'name' => $row['name'],
            'description' => $row['description'],
            'technologies' => $row['technologies'],
            'category' => $row['category'] ?? null,
            'github_url' => $row['github_url'] ?? null,
            'live_url' => $row['live_url'] ?? null,
            'image_url' => $row['image_url'] ?? null
        ];
        array_push($projects, $project_item);
    }
    
    // Return the exact same format as the API
    http_response_code(200);
    echo json_encode($projects);
    
} catch(Exception $e) {
    http_response_code(500);
    echo json_encode([
        'error' => true,
        'message' => $e->getMessage()
    ]);
}
?>