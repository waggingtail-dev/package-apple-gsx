<?php

namespace Waggingtail\AppleGsx\Exception;

/**
 * AppleGsxException.
 *
 * @package Waggingtail\AppleGsx\Exception
 * @license BSD License (3-Clause)
 * @author Waggingtail
 * @copyright (c) 2019-2020, Waggingtail
 */
class AppleGsxException extends \Exception
{
    /**
     * The error code returned by Apple Gsx.
     *
     * @var string
     */
    protected $error;

    /**
     * The response headers sent by Apple Gsx.
     *
     * @var array
     */
    protected $headers = [];

    /**
     * The raw output sent by Apple Gsx.
     *
     * @var string
     */
    protected $rawOutput;

    /**
     * Returns the error type returned by Apple Gsx.
     *
     * @return string
     */
    public function getError()
    {
        return $this->error;
    }

    /**
     * Sets the error type returned by Apple Gsx.
     *
     * @param string $error
     * @return $this
     */
    public function setError($error)
    {
        $this->error = $error;

        return $this;
    }

    /**
     * Returns the response headers sent by Apple Gsx.
     *
     * @return array
     */
    public function getHeaders()
    {
        return $this->headers;
    }

    /**
     * Sets the response headers sent by Apple Gsx.
     *
     * @param array $headers
     * @return $this
     */
    public function setHeaders(array $headers)
    {
        $this->headers = $headers;

        return $this;
    }

    /**
     * Returns raw output returned by Apple Gsx.
     *
     * @return string
     */
    public function getRawOutput()
    {
        return $this->rawOutput;
    }

    /**
     * Sets the raw output parameter returned by Apple Gsx.
     *
     * @param string $rawOutput
     * @return $this
     */
    public function setRawOutput($rawOutput)
    {
        $this->rawOutput = $rawOutput;

        return $this;
    }
}
