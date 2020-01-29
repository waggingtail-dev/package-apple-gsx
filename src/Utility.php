<?php

namespace Waggingtail\AppleGsx;

/**
 * Library utilities.
 *
 * @package Waggingtail\AppleGsx
 * @license BSD License (3-Clause)
 * @author Waggingtail
 * @copyright (c) 2019-2020, Waggingtail
 */
class Utility
{
    /**
     * Prepare parameters for query.
     *
     * Replaces parameters with true/false when boolean.
     * Replaces 5B and 5D with [ and ] respectively.
     *
     * @param array $parameters Parameters to sanitize.
     * @return string|string[]|null
     * @example
     */
    public static function prepareParameters(array $parameters)
    {
        $parameters = array_map(function ($parameter) {
            return is_bool($parameter) ? ($parameter === true ? 'true' : 'false') : $parameter;
        }, $parameters);

        return preg_replace('/%5B\d+%5D/', '%5B%5D', http_build_query($parameters));
    }
}
