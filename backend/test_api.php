<?php
// Test API endpoint to see what projects are returned
require_once 'config/database.php';
require_once 'models/Project.php';

$database = new Database();
$db = $database->getConnection();
$project = new Project($db);

echo "Testing API endpoint...\n\n";

try {
    $stmt = $project->readAll();
    
    $projects = [];
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $project_item = [
            'id' => $id,
            'name' => $name,
            'description' => $description,
            'technologies' => $technologies,
            'category' => $category ?? null,
            'github_url' => $github_url ?? null,
            'live_url' => $live_url ?? null,
            'image_url' => $image_url ?? null
        ];
        array_push($projects, $project_item);
    }
    
    echo "✅ API would return this JSON:\n";
    echo json_encode($projects, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    
    echo "\n\n📊 Summary:\n";
    echo "Total projects: " . count($projects) . "\n";
    
    foreach($projects as $p) {
        echo "- ID {$p['id']}: {$p['name']}\n";
    }
    
} catch(PDOException $exception) {
    echo "❌ Database error: " . $exception->getMessage();
}
?>