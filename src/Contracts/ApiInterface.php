<?php

namespace Waggingtail\AppleGsx\Contracts;

use GuzzleHttp\Client;
use Waggingtail\AppleGsx\Contracts\ConfigInterface;

/**
 * Api Interface.
 *
 * @package Waggingtail\AppleGsx\Api
 * @license BSD License (3-Clause)
 * @author Waggingtail
 * @copyright (c) 2019-2020, Waggingtail
 */
interface ApiInterface
{
    /**
     * Api constructor.
     *
     * @param ConfigInterface $config
     */
    public function __construct(ConfigInterface $config);

    /**
     * Gets the default headers that are sent with every request.
     *
     * @return array Default headers.
     */
    public function getDefaultHeaders();

    /**
     * Sets the default headers that are sent with every request.
     *
     * @param array $headers Null or '' values will be removed from default headers.
     * @return ApiInterface
     */
    public function setDefaultHeaders(array $headers = []);

    /**
     * Returns the number of items to return per page.
     *
     * @return int Number of items per page.
     */
    public function getPageSize();

    /**
     * Sets the number of items to return per page.
     *
     * @param int $pageSize How many results per page, if not set, defaults to 50.
     * @return ApiInterface
     */
    public function setPageSize($pageSize);

    /**
     * Returns the page number.
     *
     * @return int Current page number.
     */
    public function getPageNumber();

    /**
     * Sets the page number.
     *
     * @param int $pageNumber Represents the page to return, if not set, defaults to first page.
     * @return ApiInterface
     */
    public function setPageNumber($pageNumber);

    /**
     * Send a GET request.
     *
     * @param string $url Request Url.
     * @param array $parameters Request query parameters.
     *
     * @return \stdClass|string
     */
    public function _get($url = null, array $parameters = []);

    /**
     * Send a POST request.
     *
     * @param string $url Request Url.
     * @param array $json Request body.
     * @param array $parameters Request query parameters.
     *
     * @return \stdClass|string
     */
    public function _post($url = null, array $json = [], array $parameters = []);

    /**
     * Returns an Http client instance.
     *
     * @return Client
     */
    public function getClient();
}
