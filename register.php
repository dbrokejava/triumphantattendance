<?php
// register.php

header('Content-Type: application/json');

// Generate registration options
echo json_encode([
    'challenge' => base64_encode(random_bytes(32)),
    'rp' => ['name' => 'Your Application'],
    'user' => ['id' => base64_encode(random_bytes(16)), 'name' => 'user@example.com', 'displayName' => 'User'],
    'pubKeyCredParams' => [['type' => 'public-key', 'alg' => -7]]
]);
?>
