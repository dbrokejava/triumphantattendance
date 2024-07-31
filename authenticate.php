<?php
// authenticate.php

header('Content-Type: application/json');

// Generate authentication options
echo json_encode([
    'challenge' => base64_encode(random_bytes(32)),
    'allowCredentials' => [['id' => base64_encode(random_bytes(16)), 'type' => 'public-key']]
]);
?>
