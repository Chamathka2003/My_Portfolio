<?php
// Simple test to check if API is accessible
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

echo json_encode([
    "status" => "success",
    "message" => "API is working",
    "timestamp" => date('Y-m-d H:i:s')
]);
?>