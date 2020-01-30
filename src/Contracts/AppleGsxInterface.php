<?php

namespace Waggingtail\AppleGsx\Contracts;

use Waggingtail\AppleGsx\ConfigInterface;

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
     * @param string $soldTo The value for X-Apple-SoldTo header.
     * @param string $shipTo The value for X-Apple-ShipTo header.
     * @param string $caBundlePath The path to the client certificate.
     * @param null|string $passPhrase [optional] The passphrase for the client certificate.
     */
    public function __construct(
        $soldTo,
        $shipTo,
        $caBundlePath,
        $passPhrase = null);

    /**
     * Get the Config instance.
     *
     * @return AppleGsxInterface
     */
    public function getConfig();

    /**
     * Set the Config instance.
     *
     * @param ConfigInterface $config
     * @return AppleGsxInterface
     */
    public function setConfig(ConfigInterface $config);
}
