<?php
// register.php

header('Content-Type: application/json');

// Generate a challenge and other registration options
$options = [
    'challenge' => base64_encode(random_bytes(32)),
    'rp' => ['name' => 'Triumphant College Boot Camp'],
    'user' => [
        'id' => base64_encode(random_bytes(16)),
        'name' => 'user@example.com',
        'displayName' => 'User'
    ],
    'pubKeyCredParams' => [
        ['type' => 'public-key', 'alg' => -7]
    ],
    'authenticatorSelection' => [
        'authenticatorAttachment' => 'platform',
        'requireResidentKey' => false,
        'userVerification' => 'preferred'
    ]
];

echo json_encode($options);
?>
