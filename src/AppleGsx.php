<?php

namespace Waggingtail\AppleGsx;

use BadMethodCallException;
use ReflectionClass;
use ReflectionException;
use Waggingtail\AppleGsx\Contracts\ApiInterface;
use Waggingtail\AppleGsx\Contracts\AppleGsxInterface;

class AppleGsx implements AppleGsxInterface
{
    /**
     * The Config instance.
     *
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
        $passPhrase = null
    )
    {
        $this->config = new Config($soldTo, $shipTo, $caBundlePath, $passPhrase);
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

    /**
     * Dynamically handles API calls.
     *
     * @param string $name The method name.
     * @param array $arguments [optional] Method arguments.
     * @throws ReflectionException
     *
     * @return ApiInterface
     */
    public function __call($name, array $arguments = [])
    {
        return $this->getApiInstance($name);
    }

    /**
     * Returns the API class instance for the given method.
     *
     * @param string $name The method name.
     * @throws BadMethodCallException
     * @throws ReflectionException
     *
     * @return ApiInterface
     */
    protected function getApiInstance($name)
    {
        $class = "\\Waggingtail\\AppleGsx\\Api\\" . ucwords($name);

        if (class_exists($class) && ! (new ReflectionClass($class))->isAbstract()) {
            return new $class($this->config);
        }

        throw new BadMethodCallException("Undefined method [{$name}] called.");
    }
}
