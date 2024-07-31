<?php
// register_response.php

header('Content-Type: application/json');
$data = json_decode(file_get_contents('php://input'), true);

// Process registration response here (e.g., store public key and credential ID)

// Dummy response
echo json_encode(['success' => true]);
?>
