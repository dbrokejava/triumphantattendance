<?php
// register_response.php

header('Content-Type: application/json');
$data = json_decode(file_get_contents('php://input'), true);

// Process registration response here
// For example, save the public key and credential ID to the database

echo json_encode(['success' => true]); // Ensure a successful response
?>
