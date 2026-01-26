<?php
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once 'config/database.php';
require_once 'controllers/ContactController.php';
require_once 'controllers/ProjectController.php';

try {
    $database = new Database();
    $db = $database->getConnection();

    if (!$db) {
        http_response_code(500);
        echo json_encode(['message' => 'Database connection failed']);
        exit();
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['message' => 'Database error: ' . $e->getMessage()]);
    exit();
}

// Get request method and URI
$method = $_SERVER['REQUEST_METHOD'];
$requestUri = $_SERVER['REQUEST_URI'];
$uri = parse_url($requestUri, PHP_URL_PATH);
$uri = str_replace('/api', '', $uri);

// Route requests
if (strpos($uri, '/contact') === 0) {
    $controller = new ContactController($db);
    $controller->handleRequest($method, $uri);
} elseif (strpos($uri, '/projects') === 0) {
    $controller = new ProjectController($db);
    $controller->handleRequest($method, $uri);
} else {
    http_response_code(404);
    echo json_encode(['message' => 'Endpoint not found']);
}
