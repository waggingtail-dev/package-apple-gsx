<?php

namespace Waggingtail\AppleGsx;

use Waggingtail\AppleGsx\Contracts\ConfigInterface;

/**
 * AppleGsx.
 *
 * @package Waggingtail\AppleGsx
 * @license BSD License (3-Clause)
 * @author Waggingtail
 * @copyright (c) 2019-2020, Waggingtail
 */
class Config implements ConfigInterface
{
    /**
     * The apple user email to use for authentication.
     *
     * @var string
     */
    protected $appleUserId;

    /**
     * An activation token or auth token.
     *
     * @var string
     */
    protected $token;

    /**
     * Base api url for all calls.
     *
     * @var string
     */
    protected $apiBaseUrl = 'https://api-partner-connect%s.apple.com/gsx/api';

    /**
     * X-Apple-ShipTo.
     *
     * @var string
     */
    protected $shipTo;

    /**
     * X-Apple-SoldTo.
     *
     * @var string
     */
    protected $soldTo;

    /**
     * Client certificate to be sent along the request.
     *
     * cat Apple**.pem private.pem > <bundled_file>.pem
     *
     * @var string
     */
    protected $caBundlePath;

    /**
     * Private pem file pass phrase.
     *
     * @var string|null
     */
    protected $passPhrase;

    /**
     * X-Operator-User-ID
     *
     * @var string|int
     */
    protected $operatorUserId;

    /**
     * When true will change the url to uat environment.
     *
     * @var bool
     */
    protected $isUat;

    /**
     * {@inheritdoc}
     */
    public function __construct(
        $appleUserId,
        $soldTo,
        $shipTo,
        $caBundlePath,
        $passPhrase = null,
        $useUat = false)
    {
        $this->setAppleUserId($appleUserId);

        $this->setSoldTo($soldTo);

        $this->setShipTo($shipTo);

        $this->setCaBundlePath(
            $caBundlePath,
            $passPhrase
        );

        $this->useUat($useUat);
    }

    /**
     * {@inheritdoc}
     */
    public function getToken()
    {
        return $this->token;
    }

    /**
     * {@inheritdoc}
     */
    public function setToken(string $token)
    {
        if (empty($token)) {
            throw new \RuntimeException("Token is not defined.");
        }

        $this->token = $token;

        return $this;
    }

    /**
     * {@inheritdoc}
     */
    public function getAppleUserId()
    {
        return $this->appleUserId;
    }

    /**
     * {@inheritdoc}
     */
    public function setAppleUserId($appleUserId)
    {
        if (empty($appleUserId)) {
            throw new \RuntimeException("Apple User ID not defined.");
        }

        $this->appleUserId = $appleUserId;

        return $this;
    }

    /**
     * {@inheritdoc}
     */
    public function getApiBaseUrl(): string
    {
        return ($this->isUat)
            ? sprintf($this->apiBaseUrl, '-uat')
            : sprintf($this->apiBaseUrl, '');
    }

    /**
     * {@inheritdoc}
     */
    public function getShipTo(): string
    {
        return $this->shipTo;
    }

    /**
     * {@inheritdoc}
     */
    public function setShipTo(string $shipTo)
    {
        if (empty($shipTo)) {
            throw new \RuntimeException("ShipTo not defined.");
        }

        $this->shipTo = $shipTo;

        return $this;
    }

    /**
     * {@inheritdoc}
     */
    public function getSoldTo(): string
    {
        return $this->soldTo;
    }

    /**
     * {@inheritdoc}
     */
    public function setSoldTo(string $soldTo)
    {
        if (empty($soldTo)) {
            throw new \RuntimeException("SoldTo not defined.");
        }

        $this->soldTo = $soldTo;

        return $this;
    }

    /**
     * {@inheritdoc}
     */
    public function getCaBundlePath()
    {
        return $this->caBundlePath;
    }

    /**
     * {@inheritdoc}
     */
    public function setCaBundlePath($caBundlePath, $passPhrase = null)
    {
        if (!file_exists($caBundlePath)) {
            throw new \RuntimeException("Certificate not found.");
        }

        $this->caBundlePath = $caBundlePath;

        $this->passPhrase = $passPhrase;

        return $this;
    }

    /**
     * {@inheritdoc}
     */
    public function getPassPhrase()
    {
        return $this->passPhrase;
    }

    /**
     * {@inheritdoc}
     */
    public function getOperatorUserId()
    {
        return $this->operatorUserId;
    }

    /**
     * {@inheritdoc}
     */
    public function setOperatorUserId($operatorUserId)
    {
        $this->operatorUserId = $operatorUserId;

        return $this;
    }

    /**
     * {@inheritdoc}
     */
    public function isUat(): bool
    {
        return $this->isUat;
    }

    /**
     * {@inheritdoc}
     */
    public function useUat(bool $uat = true)
    {
        $this->isUat = $uat;

        return $this;
    }
}
