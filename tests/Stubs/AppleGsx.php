<?php

namespace Waggingtail\AppleGsx\Tests\Stubs;

use Waggingtail\AppleGsx\Config;
use Waggingtail\AppleGsx\ConfigInterface;
use Waggingtail\AppleGsx\Contracts\AppleGsxInterface;

class AppleGsx implements AppleGsxInterface
{
    /**
     * @var ConfigInterface
     */
    protected $config;

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
    public function __construct(
        $appleUserId,
        $shipTo,
        $soldTo,
        $caBundlePath,
        $passPhrase = null,
        $operatorUserId = null,
        $isUat = true
    )
    {
        $this->config = new Config($appleUserId, $shipTo, $soldTo, $caBundlePath, $passPhrase, $operatorUserId, $isUat);
    }

    public function authenticate()
    {
        return new Authenticate($this->config);
    }

    public function repair()
    {
        return new Repair($this->config);
    }
}
