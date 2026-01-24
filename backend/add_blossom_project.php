<?php
// Add Blossom project to the database
require_once 'config/database.php';

$database = new Database();
$db = $database->getConnection();

try {
    // Check if project already exists
    $check_query = "SELECT COUNT(*) as count FROM projects WHERE name LIKE '%Blossom%'";
    $check_stmt = $db->prepare($check_query);
    $check_stmt->execute();
    $result = $check_stmt->fetch(PDO::FETCH_ASSOC);
    
    if ($result['count'] == 0) {
        // Insert the Blossom project
        $query = "INSERT INTO projects (name, description, technologies, github_url, live_url, image_url) 
                  VALUES (?, ?, ?, ?, ?, ?)";
        
        $stmt = $db->prepare($query);
        
        $name = "🌸 Blossom Flower Delivery Website";
        $description = "Blossom is a full-stack flower delivery web application developed using Spring Boot and Java. The system is designed to provide an easy and smooth online flower ordering experience for customers while offering a powerful Admin Dashboard for business management. Features secure user authentication (Login & Signup), role-based access for Admin and Customers, customer features for browsing flowers with images and descriptions, placing orders, and Admin Dashboard for managing flowers and customer orders efficiently.";
        $technologies = "Spring Boot, Java, HTML, CSS, MySQL, MVC";
        $github_url = null;
        $live_url = null;
        $image_url = "/images/projects/blossom-flower-shop.jpg";
        
        $stmt->execute([
            $name,
            $description, 
            $technologies,
            $github_url,
            $live_url,
            $image_url
        ]);
        
        echo "✅ Blossom Flower Delivery project added successfully to database!";
        echo "\nProject ID: " . $db->lastInsertId();
        
    } else {
        echo "ℹ️  Blossom project already exists in database.";
    }
    
} catch(PDOException $exception) {
    echo "❌ Error: " . $exception->getMessage();
}

// Display all projects to verify
echo "\n\n📋 Current projects in database:\n";
try {
    $query = "SELECT id, name, technologies FROM projects ORDER BY id";
    $stmt = $db->prepare($query);
    $stmt->execute();
    
    while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo "ID: " . $row['id'] . " | " . $row['name'] . " | " . $row['technologies'] . "\n";
    }
} catch(PDOException $exception) {
    echo "Error fetching projects: " . $exception->getMessage();
}
?>