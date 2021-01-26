<?php
require_once 'Response.php';

class ApiResponse {

    private $response;

    public function __construct($response) {
        $this->response = $response;
    }

    public function __toString(): string {
        return '{'
                    . $this->response->getResponseType()
                    . json_encode($this->response)
                . '}';
    }
}