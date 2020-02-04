<?php

namespace Waggingtail\AppleGsx\Exception;

use GuzzleHttp\Exception\ClientException;

/**
 * Exception Handler.
 *
 * @package Waggingtail\AppleGsx\Exception
 * @license BSD License (3-Clause)
 * @author Waggingtail
 * @copyright (c) 2019-2020, Waggingtail
 */
class Handler
{
    protected $exceptionsByStatusCode = [
        400 => 'BadRequest',
        401 => 'Unauthorized',
        403 => 'Forbidden',
        500 => 'ServerError',
    ];

    public function __construct(ClientException $exception)
    {
        $response = $exception->getResponse();

        $headers = $response->getHeaders();

        $statusCode = $response->getStatusCode();

        $rawOutput = json_decode($response->getBody(), true);

        $error = $rawOutput ?? [];

        $this->handleException($error, $headers, $statusCode, $rawOutput);
    }

    protected function handleException($error,
                                       $headers,
                                       $statusCode,
                                       $rawOutput)
    {
        if (array_key_exists($statusCode, $this->exceptionsByStatusCode)) {
            $class = $this->exceptionsByStatusCode[$statusCode];
        } else {
            $class = 'AppleGsx';
        }

        $class = "\\Waggingtail\\AppleGsx\\Exception\\{$class}Exception";

        $instance = new $class($statusCode);

        $instance->setError($error)
            ->setHeaders($headers)
            ->setRawOutput($rawOutput);

        throw $instance;
    }
}
