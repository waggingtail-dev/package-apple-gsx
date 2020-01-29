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
     * {@inheritdoc}
     */
    public function __construct(
        $appleUserId,
        $token,
        $shipTo,
        $soldTo,
        $caBundlePath,
        $passPhrase = null,
        $operatorUserId = null,
        $isUat = true
    )
    {
        $this->config = new Config($appleUserId, $token, $shipTo, $soldTo, $caBundlePath, $passPhrase, $operatorUserId, $isUat);
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
