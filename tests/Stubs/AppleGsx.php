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
        $soldTo,
        $shipTo,
        $caBundlePath,
        $passPhrase = null,
        $useUat = false
    )
    {
        $this->config = new Config($soldTo, $shipTo, $caBundlePath, $passPhrase, $useUat);
    }

    /**
     * {@inheritdoc}
     */
    public function getConfig()
    {
        return $this->config;
    }

    /**
     * {@inheritdoc}
     */
    public function setConfig(ConfigInterface $config)
    {
        $this->config = $config;

        return $this;
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
