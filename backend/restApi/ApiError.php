<?php


class ApiError implements Response {

    public $code;
    public $message;

    public function __construct($errorCode, $errorMessage) {
        $this->code = $errorCode;
        $this->message = $errorMessage;
    }

    public function getResponseType(): string {
        return '"error":';
    }
}