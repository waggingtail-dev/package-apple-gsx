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
        $appleUserId,
        $shipTo,
        $soldTo,
        $caBundlePath,
        $passPhrase = null,
        $operatorUserId = null,
        $isUat = false
    )
    {
        $this->config = new Config($appleUserId, $shipTo, $soldTo, $caBundlePath, $passPhrase, $operatorUserId, $isUat);
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
    public function getApiInstance($name)
    {
        $class = "\\Waggingtail\\AppleGsx\\Api\\" . ucwords($name);

        if (class_exists($class) && ! (new ReflectionClass($class))->isAbstract()) {
            return new $class($this->config);
        }

        throw new BadMethodCallException("Undefined method [{$name}] called.");
    }
}
