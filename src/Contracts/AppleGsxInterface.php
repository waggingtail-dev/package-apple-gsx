<?php

namespace Waggingtail\AppleGsx\Contracts;

/**
 * AppleGsx.
 *
 * @package Waggingtail\AppleGsx
 * @license BSD License (3-Clause)
 * @author Waggingtail
 * @copyright (c) 2019-2020, Waggingtail
 */
interface AppleGsxInterface
{
    /**
     * AppleGsx constructor.
     *
     * @param string $appleUserId Apple user email.
     * @param string $shipTo The value for X-Apple-ShipTo header.
     * @param string $soldTo The value for X-Apple-SoldTo header.
     * @param string $caBundlePath The path to the client certificate.
     * @param null|string $passPhrase [optional] The passphrase for the client certificate.
     * @param null|string|int $operatorUserId [optional] The operator user id for tracking.
     * @param bool $isUat [optional] True for GSX (UAT) environment, defaults to false (production).
     */
    public function __construct($appleUserId, $shipTo, $soldTo, $caBundlePath, $passPhrase = null, $operatorUserId = null, $isUat = false);
}
