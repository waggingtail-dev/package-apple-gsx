<?php

namespace Waggingtail\AppleGsx\Tests\Stubs;

use GuzzleHttp\Client;
use Waggingtail\AppleGsx\ConfigInterface;
use Waggingtail\AppleGsx\Contracts\ApiInterface;

class Api implements ApiInterface
{
    /**
     * @var ConfigInterface
     */
    protected $config;

    /**
     * Api constructor.
     *
     * @param ConfigInterface $config
     */
    public function __construct(ConfigInterface $config)
    {
        $this->config = $config;
    }

    /**
     * Gets the default headers that are sent with every request.
     *
     * @return array Default headers.
     */
    public function getDefaultHeaders()
    {
        // TODO: Implement getDefaultHeaders() method.
    }

    /**
     * Sets the default headers that are sent with every request.
     *
     * @param array $headers Null or '' values will be removed from default headers.
     * @return ApiInterface
     */
    public function setDefaultHeaders(array $headers = [])
    {
        // TODO: Implement setDefaultHeaders() method.
    }

    /**
     * Returns the number of items to return per page.
     *
     * @return int Number of items per page.
     */
    public function getPageSize()
    {
        // TODO: Implement getPageSize() method.
    }

    /**
     * Sets the number of items to return per page.
     *
     * @param int $pageSize How many results per page, if not set, defaults to 50.
     * @return ApiInterface
     */
    public function setPageSize($pageSize)
    {
        // TODO: Implement setPageSize() method.
    }

    /**
     * Returns the page number.
     *
     * @return int Current page number.
     */
    public function getPageNumber()
    {
        // TODO: Implement getPageNumber() method.
    }

    /**
     * Sets the page number.
     *
     * @param int $pageNumber Represents the page to return, if not set, defaults to first page.
     * @return ApiInterface
     */
    public function setPageNumber($pageNumber)
    {
        // TODO: Implement setPageNumber() method.
    }

    /**
     * Send a GET request.
     *
     * @param string $url Request Url.
     * @param array $parameters Request query parameters.
     *
     * @return \stdClass|string
     */
    public function _get($url = null, array $parameters = [])
    {
        // TODO: Implement _get() method.
    }

    /**
     * Send a POST request.
     *
     * @param string $url Request Url.
     * @param array $json Request body.
     * @param array $parameters Request query parameters.
     *
     * @return \stdClass|string
     */
    public function _post($url = null, array $json = [], array $parameters = [])
    {
        // TODO: Implement _post() method.
    }

    /**
     * Returns an Http client instance.
     *
     * @return Client
     */
    public function getClient()
    {
        // TODO: Implement getClient() method.
    }
}
