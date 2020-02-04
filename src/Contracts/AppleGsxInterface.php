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
     * @param string $appleUserId The apple id to use in the authentication flow.
     * @param string $soldTo The value for X-Apple-SoldTo header.
     * @param string $shipTo The value for X-Apple-ShipTo header.
     * @param string $caBundlePath The path to the client certificate.
     * @param string $passPhrase The passphrase for the client certificate.
     * @param bool $useUat When true will use Apple GSX UAT environment, production otherwise.
     */
    public function __construct(
        $appleUserId,
        $soldTo,
        $shipTo,
        $caBundlePath,
        $passPhrase,
        $useUat);

    /**
     * Get the Config instance.
     *
     * @return ConfigInterface
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
