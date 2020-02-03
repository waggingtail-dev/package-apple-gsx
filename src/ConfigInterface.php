<?php

namespace Waggingtail\AppleGsx;

/**
 * Methods to handle authentication.
 *
 * @package Waggingtail\AppleGsx
 * @license BSD License (3-Clause)
 * @author Waggingtail
 * @copyright (c) 2019-2020, Waggingtail
 */
interface ConfigInterface
{
    /**
     * Config constructor.
     *
     * @param string $soldTo The value for X-Apple-SoldTo header.
     * @param string $shipTo The value for X-Apple-ShipTo header.
     * @param string $caBundlePath The path to the client certificate.
     * @param string $passPhrase The passphrase for the client certificate.
     * @param boolean $useUat When true will use Apple GSX UAT environment.
     */
    public function __construct(
        $soldTo,
        $shipTo,
        $caBundlePath,
        $passPhrase,
        $useUat
    );

    /**
     * The activation/authentication token.
     *
     * @return mixed
     */
    public function getToken();

    /**
     * Set the activation/authentication token.
     *
     * @param string $token The activation/authentication token.
     * @return ConfigInterface
     */
    public function setToken(string $token);

    /**
     * Get the base url.
     *
     * @return string
     */
    public function getApiBaseUrl(): string;

    /**
     * Get the apple user email.
     *
     * @return string
     */
    public function getAppleUserId();

    /**
     * Set the apple user email.
     *
     * @param string $appleUserId The apple user email to use for authentication.
     * @return ConfigInterface
     */
    public function setAppleUserId($appleUserId);

    /**
     * The ShipTo.
     *
     * @return string
     */
    public function getShipTo(): string;

    /**
     * Set the ShipTo.
     *
     * @param string $shipTo For X-Apple-ShipTo header.
     * @return ConfigInterface
     */
    public function setShipTo(string $shipTo);

    /**
     * Get the SoldTo.
     *
     * @return string
     */
    public function getSoldTo(): string;

    /**
     * Set the SoldTo.
     *
     * @param string $soldTo For X-Apple-SoldTo header.
     * @return ConfigInterface
     */
    public function setSoldTo(string $soldTo);

    /**
     * Get the client certificate path.
     *
     * @return mixed
     */
    public function getCaBundlePath();

    /**
     * Set the client certificate and passphrase.
     *
     * @param string $caBundlePath The path to the client certificate.
     * @param null|string $passPhrase [optional] The passphrase for the certificate.
     * @return ConfigInterface
     */
    public function setCaBundlePath($caBundlePath, $passPhrase = null);

    /**
     * Get the client certificate passphrase.
     *
     * @return mixed
     */
    public function getPassPhrase();

    /**
     * Get the operator ID.
     *
     * @return mixed
     */
    public function getOperatorUserId();

    /**
     * Set the operator ID.
     *
     * @param mixed $operatorUserId For X-Apple-Operator-User-ID header.
     * @return ConfigInterface
     */
    public function setOperatorUserId(string $operatorUserId);

    /**
     * Get whether or not the current environment is UAT.
     *
     * @return bool
     */
    public function isUat(): bool;

    /**
     * Set the environment.
     *
     * @param bool $uat When true will use Apple GSX UAT environment, production otherwise.
     * @return ConfigInterface
     */
    public function useUat(bool $uat = true);
}
