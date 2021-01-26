<?php

class ApiData implements Response {

    public $code;
    public $message;

    public function __construct($successCode, $successMessage) {
        $this->code = $successCode;
        $this->message = $successMessage;
    }

    public function getResponseType(): string {
        return '"data":';
    }
}