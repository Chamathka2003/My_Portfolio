<?php
header("Content-Type: application/json");

require_once 'config/database.php';

$database = new Database();
$db = $database->getConnection();

if ($db) {
    echo json_encode([
        'status' => 'success',
        'message' => 'Database connected successfully'
    ]);
} else {
    echo json_encode([
        'status' => 'error',
        'message' => 'Database connection failed'
    ]);
}
