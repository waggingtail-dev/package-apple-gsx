<?php

namespace Waggingtail\AppleGsx\Api;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\ClientException;
use Waggingtail\AppleGsx\Contracts\ConfigInterface;
use Waggingtail\AppleGsx\Contracts\ApiInterface;
use Waggingtail\AppleGsx\Exception\Handler;
use Waggingtail\AppleGsx\Utility;

/**
 * Abstract Class Api.
 *
 * @package Waggingtail\AppleGsx\Api
 * @license BSD License (3-Clause)
 * @author Waggingtail
 * @copyright (c) 2019-2020, Waggingtail
 */
abstract class Api implements ApiInterface
{
    /**
     * The Config instance.
     *
     * @var ConfigInterface
     */
    protected $config;

    /**
     * Represents how many results should be returned, there is a max limit of 50.
     * If no value is provided the first 50 records will be returned.
     *
     * @var int
     */
    protected $pageSize;

    /**
     * Represents the page number that will be returned. If no value is provided
     * the first page (50 records) will be returned.
     *
     * @var int
     */
    protected $pageNumber = 1;

    /**
     * The default headers to be sent with every request.
     *
     * @var array
     */
    protected $defaultHeaders = [];

    /**
     * {@inheritdoc}
     */
    public function __construct(ConfigInterface $config)
    {
        $this->config = $config;

        $this->setDefaultHeaders();
    }

    /**
     * {@inheritdoc}
     */
    public function getPageNumber()
    {
        return $this->pageNumber;
    }

    /**
     * {@inheritdoc}
     */
    public function setPageNumber($pageNumber = 1)
    {
        $this->pageNumber = $pageNumber;

        return $this;
    }

    /**
     * {@inheritdoc}
     */
    public function _get($url = null, array $parameters = [])
    {
        if ($pageSize = $this->getPageSize()) {
            $parameters['pageSize'] = $pageSize;
        }

        return $this->execute('get', $url, $parameters);
    }

    /**
     * {@inheritdoc}
     */
    public function getPageSize()
    {
        return $this->pageSize;
    }

    /**
     * {@inheritdoc}
     */
    public function setPageSize($pageSize = 50)
    {
        $this->pageSize = $pageSize;

        return $this;
    }

    /**
     * Executes the HTTP request.
     *
     * @param string $httpMethod Http method to execute.
     * @param string $url Request Url.
     * @param array $parameters Request query parameters.
     * @param array $json Request body.
     *
     * @return \stdClass|string
     */
    private function execute($httpMethod, $url, array $parameters = [], array $json = [])
    {
        $response = null;

        try {
            $payload    = [];
            $parameters = Utility::prepareParameters($parameters);

            if ($parameters) {
                $payload['query'] = $parameters;
            }

            if ($json) {
                $payload['json'] = $json;
            }

            $response = $this->getClient()->{$httpMethod}($url, $payload);
        } catch (ClientException $e) {
            new Handler($e);
        }

        $content = $response->getBody()->getContents();

        return ($this->wantsJson())
            ? json_decode((string)$content, true)
            : $content;
    }

    /**
     * {@inheritdoc}
     */
    public function getClient()
    {
        return new Client([
            'base_uri' => $this->config->getApiBaseUrl(),
            'headers' => $this->getDefaultHeaders(),
            'cert' => [$this->config->getCaBundlePath(), $this->config->getPassPhrase()],
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function getDefaultHeaders()
    {
        return $this->defaultHeaders;
    }

    /**
     * {@inheritdoc}
     */
    public function setDefaultHeaders(array $headers = [])
    {
        $defaultHeaders = [
            'Accept' => 'application/json',
            'Accept-Language' => 'en_US',
            'Content-Type' => 'application/json',
            'X-Apple-Auth-Token' => $this->config->getToken(),
            'X-Apple-ShipTo' => $this->config->getShipTo(),
            'X-Apple-SoldTo' => $this->config->getSoldTo(),
            'X-Operator-User-ID' => $this->config->getOperatorUserId(),
        ];

        $headers = array_merge($defaultHeaders, $headers);

        foreach ($headers as $key => $value) {
            if (null === $value || '' === $value) {
                unset($headers[$key]);
            }
        }

        $this->defaultHeaders = $headers;

        return $this;
    }

    /**
     * Whether or not the requests expects json as response.
     *
     * @return bool
     */
    private function wantsJson()
    {
        return $this->getDefaultHeaders()['Accept'] === 'application/json' ? true : false;
    }

    /**
     * {@inheritdoc}
     */
    public function _post($url = null, array $json = [], array $parameters = [])
    {
        if ($pageSize = $this->getPageSize()) {
            $parameters['pageSize'] = $pageSize;
        }

        return $this->execute('post', $url, $parameters, $json);
    }
}
