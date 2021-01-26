<?php
require_once 'restApi/ApiResponse.php';
require_once 'restApi/ApiError.php';
require_once 'restApi/ApiData.php';

const key = 'd6qw1d6qw0f4qefq1d6h4789g1j698l4h1w6r8j4';
const myEmail = 'sacha.thommet5@orange.fr';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Content-Type: application/json');

$entityBody = file_get_contents('php://input');
$postJson = json_decode($entityBody, true);

if (isset($postJson['key']) && isset($postJson['email'])) {
    if ($postJson['key'] != key) {
        echo new ApiResponse(new ApiError(401, 'The key is false'));
    }
    else {
        $emailJson = $postJson['email'];
        if (isset($emailJson['message']) && isset($emailJson['name']) && isset($emailJson['email'])) {
            $message = $emailJson['message'];
            if (strlen($message) > 1500) { $message = '<h1>Message trop long (+1500 caractères)</h1>' ;}

            $name = strip_tags($emailJson['name']);

            $headers = "From: " . strip_tags($emailJson['email']) . "\r\n";
            $headers .= "MIME-Version: 1.0\r\n";
            $headers .= "Content-type: text/html; charset=UTF-8\r\n";

            mail(myEmail, 'E-Portfolio de ' . $name, $message, $headers);

            echo new ApiResponse(new ApiData(200, 'The mail was successfully sent'));
        }
        else {
            echo new ApiResponse(new ApiError(400, 'The mail was not properly encoded'));
        }
    }
}
else {
    echo new ApiResponse(new ApiError(404, 'Request not found or not complete'));
}
